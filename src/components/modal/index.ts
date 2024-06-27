/* eslint-disable @typescript-eslint/no-empty-function */
import type { ModalOptions } from './types';
import type { InstanceOptions, EventListenerInstance } from '../../dom/types';
import { ModalInterface } from './interface';
import instances from '../../dom/instances';

const Default: ModalOptions = {
    placement: 'center',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    backdrop: 'dynamic',
    closable: true,
    onHide: () => {},
    onShow: () => {},
    onToggle: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Modal implements ModalInterface {
    _instanceId: string;
    _targetEl: HTMLElement | null;
    _options: ModalOptions;
    _isHidden: boolean;
    _backdropEl: HTMLElement | null;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _eventListenerInstances: EventListenerInstance[] = [];
    _initialized: boolean;

    constructor(
        targetEl: HTMLElement | null = null,
        options: ModalOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._options = { ...Default, ...options };
        this._isHidden = true;
        this._backdropEl = null;
        this._initialized = false;
        this.init();
        instances.addInstance(
            'Modal',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        if (this._targetEl && !this._initialized) {
            this._getPlacementClasses().map((c) => {
                this._targetEl.classList.add(c);
            });
            this._initialized = true;
        }
    }

    destroy() {
        if (this._initialized) {
            this.removeAllEventListenerInstances();
            this._destroyBackdropEl();
            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('Modal', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    _createBackdrop() {
        if (this._isHidden) {
            const backdropEl = document.createElement('div');
            backdropEl.classList.add(
                ...this._options.backdropClasses.split(' ')
            );
            document.querySelector('body').append(backdropEl);
            this._backdropEl = backdropEl;
        }
    }

    _destroyBackdropEl() {
        if (!this._isHidden && this._backdropEl) {
            this._backdropEl.remove();
            this._backdropEl = null;
        }
    }

    _setupModalCloseEventListeners() {
        if (this._options.backdrop === 'dynamic') {
            this._clickOutsideEventListener = (ev: MouseEvent) => {
                this._handleOutsideClick(ev.target);
            };
            this._targetEl.addEventListener(
                'click',
                this._clickOutsideEventListener,
                true
            );
        }

        this._keydownEventListener = (ev: KeyboardEvent) => {
            if (ev.key === 'Escape') {
                this.hide();
            }
        };
        document.body.addEventListener(
            'keydown',
            this._keydownEventListener,
            true
        );
    }

    _removeModalCloseEventListeners() {
        if (this._options.backdrop === 'dynamic') {
            this._targetEl.removeEventListener(
                'click',
                this._clickOutsideEventListener,
                true
            );
        }
        document.body.removeEventListener(
            'keydown',
            this._keydownEventListener,
            true
        );
    }

    _handleOutsideClick(target: EventTarget) {
        if (
            target === this._targetEl ||
            (target === this._backdropEl && this.isVisible())
        ) {
            this.hide();
        }
    }

    _getPlacementClasses() {
        switch (this._options.placement) {
            // top
            case 'top-left':
                return ['justify-start', 'items-start'];
            case 'top-center':
                return ['justify-center', 'items-start'];
            case 'top-right':
                return ['justify-end', 'items-start'];

            // center
            case 'center-left':
                return ['justify-start', 'items-center'];
            case 'center':
                return ['justify-center', 'items-center'];
            case 'center-right':
                return ['justify-end', 'items-center'];

            // bottom
            case 'bottom-left':
                return ['justify-start', 'items-end'];
            case 'bottom-center':
                return ['justify-center', 'items-end'];
            case 'bottom-right':
                return ['justify-end', 'items-end'];

            default:
                return ['justify-center', 'items-center'];
        }
    }

    toggle() {
        if (this._isHidden) {
            this.show();
        } else {
            this.hide();
        }

        // callback function
        this._options.onToggle(this);
    }

    show() {
        if (this.isHidden) {
            this._targetEl.classList.add('flex');
            this._targetEl.classList.remove('hidden');
            this._targetEl.setAttribute('aria-modal', 'true');
            this._targetEl.setAttribute('role', 'dialog');
            this._targetEl.removeAttribute('aria-hidden');
            this._createBackdrop();
            this._isHidden = false;

            // Add keyboard event listener to the document
            if (this._options.closable) {
                this._setupModalCloseEventListeners();
            }

            // prevent body scroll
            document.body.classList.add('overflow-hidden');

            // callback function
            this._options.onShow(this);
        }
    }

    hide() {
        if (this.isVisible) {
            this._targetEl.classList.add('hidden');
            this._targetEl.classList.remove('flex');
            this._targetEl.setAttribute('aria-hidden', 'true');
            this._targetEl.removeAttribute('aria-modal');
            this._targetEl.removeAttribute('role');
            this._destroyBackdropEl();
            this._isHidden = true;

            // re-apply body scroll
            document.body.classList.remove('overflow-hidden');

            if (this._options.closable) {
                this._removeModalCloseEventListeners();
            }

            // callback function
            this._options.onHide(this);
        }
    }

    isVisible() {
        return !this._isHidden;
    }

    isHidden() {
        return this._isHidden;
    }

    addEventListenerInstance(
        element: HTMLElement,
        type: string,
        handler: EventListenerOrEventListenerObject
    ) {
        this._eventListenerInstances.push({
            element: element,
            type: type,
            handler: handler,
        });
    }

    removeAllEventListenerInstances() {
        this._eventListenerInstances.map((eventListenerInstance) => {
            eventListenerInstance.element.removeEventListener(
                eventListenerInstance.type,
                eventListenerInstance.handler
            );
        });
        this._eventListenerInstances = [];
    }

    getAllEventListenerInstances() {
        return this._eventListenerInstances;
    }

    updateOnShow(callback: () => void) {
        this._options.onShow = callback;
    }

    updateOnHide(callback: () => void) {
        this._options.onHide = callback;
    }

    updateOnToggle(callback: () => void) {
        this._options.onToggle = callback;
    }
}

export function initModals() {
    // initiate modal based on data-modal-target
    document.querySelectorAll('[data-modal-target]').forEach(($triggerEl) => {
        const modalId = $triggerEl.getAttribute('data-modal-target');
        const $modalEl = document.getElementById(modalId);

        if ($modalEl) {
            const placement = $modalEl.getAttribute('data-modal-placement');
            const backdrop = $modalEl.getAttribute('data-modal-backdrop');
            new Modal(
                $modalEl as HTMLElement,
                {
                    placement: placement ? placement : Default.placement,
                    backdrop: backdrop ? backdrop : Default.backdrop,
                } as ModalOptions
            );
        } else {
            console.error(
                `Modal with id ${modalId} does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?.`
            );
        }
    });

    // toggle modal visibility
    document.querySelectorAll('[data-modal-toggle]').forEach(($triggerEl) => {
        const modalId = $triggerEl.getAttribute('data-modal-toggle');
        const $modalEl = document.getElementById(modalId);

        if ($modalEl) {
            const modal: ModalInterface = instances.getInstance(
                'Modal',
                modalId
            );

            if (modal) {
                const toggleModal = () => {
                    modal.toggle();
                };
                $triggerEl.addEventListener('click', toggleModal);
                modal.addEventListenerInstance(
                    $triggerEl as HTMLElement,
                    'click',
                    toggleModal
                );
            } else {
                console.error(
                    `Modal with id ${modalId} has not been initialized. Please initialize it using the data-modal-target attribute.`
                );
            }
        } else {
            console.error(
                `Modal with id ${modalId} does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?`
            );
        }
    });

    // show modal on click if exists based on id
    document.querySelectorAll('[data-modal-show]').forEach(($triggerEl) => {
        const modalId = $triggerEl.getAttribute('data-modal-show');
        const $modalEl = document.getElementById(modalId);

        if ($modalEl) {
            const modal: ModalInterface = instances.getInstance(
                'Modal',
                modalId
            );

            if (modal) {
                const showModal = () => {
                    modal.show();
                };
                $triggerEl.addEventListener('click', showModal);
                modal.addEventListenerInstance(
                    $triggerEl as HTMLElement,
                    'click',
                    showModal
                );
            } else {
                console.error(
                    `Modal with id ${modalId} has not been initialized. Please initialize it using the data-modal-target attribute.`
                );
            }
        } else {
            console.error(
                `Modal with id ${modalId} does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?`
            );
        }
    });

    // hide modal on click if exists based on id
    document.querySelectorAll('[data-modal-hide]').forEach(($triggerEl) => {
        const modalId = $triggerEl.getAttribute('data-modal-hide');
        const $modalEl = document.getElementById(modalId);

        if ($modalEl) {
            const modal: ModalInterface = instances.getInstance(
                'Modal',
                modalId
            );

            if (modal) {
                const hideModal = () => {
                    modal.hide();
                };
                $triggerEl.addEventListener('click', hideModal);
                modal.addEventListenerInstance(
                    $triggerEl as HTMLElement,
                    'click',
                    hideModal
                );
            } else {
                console.error(
                    `Modal with id ${modalId} has not been initialized. Please initialize it using the data-modal-target attribute.`
                );
            }
        } else {
            console.error(
                `Modal with id ${modalId} does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Modal = Modal;
    window.initModals = initModals;
}

export default Modal;

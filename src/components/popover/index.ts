/* eslint-disable @typescript-eslint/no-empty-function */
import { computePosition, autoUpdate, offset } from '@floating-ui/dom';
import type { PopoverOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { PopoverInterface } from './interface';
import instances from '../../dom/instances';

const Default: PopoverOptions = {
    placement: 'top',
    offset: 10,
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Popover implements PopoverInterface {
    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: PopoverOptions;
    _cleanupAutoUpdate: Function;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _visible: boolean;
    _initialized: boolean;
    _showHandler: EventListenerOrEventListenerObject;
    _hideHandler: EventListenerOrEventListenerObject;

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: PopoverOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = { ...Default, ...options };
        this._cleanupAutoUpdate = null;
        this._visible = false;
        this._initialized = false;
        this.init();
        instances.addInstance(
            'Popover',
            this,
            instanceOptions.id ? instanceOptions.id : this._targetEl.id,
            instanceOptions.override
        );
    }

    init() {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._setupEventListeners();
            this._initialized = true;
        }
    }

    destroy() {
        if (this._initialized) {
            // remove event listeners associated with the trigger element and target element
            const triggerEvents = this._getTriggerEvents();

            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(ev, this._showHandler);
                this._targetEl.removeEventListener(ev, this._showHandler);
            });

            triggerEvents.hideEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(ev, this._hideHandler);
                this._targetEl.removeEventListener(ev, this._hideHandler);
            });

            // remove event listeners for keydown
            this._removeKeydownListener();

            // remove event listeners for click outside
            this._removeClickOutsideListener();

            // stop FloatingUI auto updates
            this?._cleanupAutoUpdate();

            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('Popover', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    _setupEventListeners() {
        const triggerEvents = this._getTriggerEvents();

        this._showHandler = () => {
            this.show();
        };

        this._hideHandler = () => {
            setTimeout(() => {
                if (!this._targetEl.matches(':hover')) {
                    this.hide();
                }
            }, 100);
        };

        triggerEvents.showEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, this._showHandler);
            this._targetEl.addEventListener(ev, this._showHandler);
        });

        triggerEvents.hideEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, this._hideHandler);
            this._targetEl.addEventListener(ev, this._hideHandler);
        });
    }

    _initializeFloatingUI() {
      computePosition(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        middleware: [offset(this._options.offset)]
      }).then(({ x, y }) => {
        Object.assign(this._targetEl.style, { left: `${x}px`, top: `${y}px` });
      });
    }

    _getTriggerEvents() {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    }

    _setupKeydownListener() {
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

    _removeKeydownListener() {
        document.body.removeEventListener(
            'keydown',
            this._keydownEventListener,
            true
        );
    }

    _setupClickOutsideListener() {
        this._clickOutsideEventListener = (ev: MouseEvent) => {
            this._handleClickOutside(ev, this._targetEl);
        };
        document.body.addEventListener(
            'click',
            this._clickOutsideEventListener,
            true
        );
    }

    _removeClickOutsideListener() {
        document.body.removeEventListener(
            'click',
            this._clickOutsideEventListener,
            true
        );
    }

    _handleClickOutside(ev: Event, targetEl: HTMLElement) {
        const clickedEl = ev.target as Node;
        if (
            clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            this.isVisible()
        ) {
            this.hide();
        }
    }

    isVisible() {
        return this._visible;
    }

    toggle() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
        this._options.onToggle(this);
    }

    show() {
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');

        // Update its position
        this._initializeFloatingUI();
        // Enable the event listeners
        this._cleanupAutoUpdate = autoUpdate(this._triggerEl, this._targetEl, () => { this._initializeFloatingUI() });

        // handle click outside
        this._setupClickOutsideListener();

        // handle esc keydown
        this._setupKeydownListener();

        // set visibility to true
        this._visible = true;

        // callback function
        this._options.onShow(this);
    }

    hide() {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');

        // Disable the event listeners
        this._cleanupAutoUpdate();
        this._cleanupAutoUpdate = null;

        // handle click outside
        this._removeClickOutsideListener();

        // handle esc keydown
        this._removeKeydownListener();

        // set visibility to false
        this._visible = false;

        // callback function
        this._options.onHide(this);
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

export function initPopovers() {
    document.querySelectorAll('[data-popover-target]').forEach(($triggerEl) => {
        const popoverID = $triggerEl.getAttribute('data-popover-target');
        const $popoverEl = document.getElementById(popoverID);

        if ($popoverEl) {
            const triggerType = $triggerEl.getAttribute('data-popover-trigger');
            const placement = $triggerEl.getAttribute('data-popover-placement');
            const offset = $triggerEl.getAttribute('data-popover-offset');

            new Popover(
                $popoverEl as HTMLElement,
                $triggerEl as HTMLElement,
                {
                    placement: placement ? placement : Default.placement,
                    offset: offset ? parseInt(offset) : Default.offset,
                    triggerType: triggerType
                        ? triggerType
                        : Default.triggerType,
                } as PopoverOptions
            );
        } else {
            console.error(
                `The popover element with id "${popoverID}" does not exist. Please check the data-popover-target attribute.`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Popover = Popover;
    window.initPopovers = initPopovers;
}

export default Popover;

/* eslint-disable @typescript-eslint/no-empty-function */
import { createPopper } from '@popperjs/core';
import type {
    Options as PopperOptions,
    Instance as PopperInstance,
} from '@popperjs/core';
import type { DropdownOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DropdownInterface } from './interface';
import instances from '../../dom/instances';

const Default: DropdownOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Dropdown implements DropdownInterface {
    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DropdownOptions;
    _visible: boolean;
    _popperInstance: PopperInstance;
    _initialized: boolean;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _hoverShowTriggerElHandler: EventListenerOrEventListenerObject;
    _hoverShowTargetElHandler: EventListenerOrEventListenerObject;
    _hoverHideHandler: EventListenerOrEventListenerObject;
    _clickHandler: EventListenerOrEventListenerObject;

    constructor(
        targetElement: HTMLElement | null = null,
        triggerElement: HTMLElement | null = null,
        options: DropdownOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetElement.id;
        this._targetEl = targetElement;
        this._triggerEl = triggerElement;
        this._options = { ...Default, ...options };
        this._popperInstance = null;
        this._visible = false;
        this._initialized = false;
        this.init();
        instances.addInstance(
            'Dropdown',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._popperInstance = this._createPopperInstance();
            this._setupEventListeners();
            this._initialized = true;
        }
    }

    destroy() {
        const triggerEvents = this._getTriggerEvents();

        // Remove click event listeners for trigger element
        if (this._options.triggerType === 'click') {
            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(ev, this._clickHandler);
            });
        }

        // Remove hover event listeners for trigger and target elements
        if (this._options.triggerType === 'hover') {
            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(
                    ev,
                    this._hoverShowTriggerElHandler
                );
                this._targetEl.removeEventListener(
                    ev,
                    this._hoverShowTargetElHandler
                );
            });

            triggerEvents.hideEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(ev, this._hoverHideHandler);
                this._targetEl.removeEventListener(ev, this._hoverHideHandler);
            });
        }

        this._popperInstance.destroy();
        this._initialized = false;
    }

    removeInstance() {
        instances.removeInstance('Dropdown', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    _setupEventListeners() {
        const triggerEvents = this._getTriggerEvents();

        this._clickHandler = () => {
            this.toggle();
        };

        // click event handling for trigger element
        if (this._options.triggerType === 'click') {
            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.addEventListener(ev, this._clickHandler);
            });
        }

        this._hoverShowTriggerElHandler = (ev) => {
            if (ev.type === 'click') {
                this.toggle();
            } else {
                setTimeout(() => {
                    this.show();
                }, this._options.delay);
            }
        };
        this._hoverShowTargetElHandler = () => {
            this.show();
        };

        this._hoverHideHandler = () => {
            setTimeout(() => {
                if (!this._targetEl.matches(':hover')) {
                    this.hide();
                }
            }, this._options.delay);
        };

        // hover event handling for trigger element
        if (this._options.triggerType === 'hover') {
            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.addEventListener(
                    ev,
                    this._hoverShowTriggerElHandler
                );
                this._targetEl.addEventListener(
                    ev,
                    this._hoverShowTargetElHandler
                );
            });

            triggerEvents.hideEvents.forEach((ev) => {
                this._triggerEl.addEventListener(ev, this._hoverHideHandler);
                this._targetEl.addEventListener(ev, this._hoverHideHandler);
            });
        }
    }

    _createPopperInstance() {
        return createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [
                            this._options.offsetSkidding,
                            this._options.offsetDistance,
                        ],
                    },
                },
            ],
        });
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

        // Ignore clicks on the trigger element (ie. a datepicker input)
        const ignoreClickOutsideClass = this._options.ignoreClickOutsideClass;

        let isIgnored = false;
        if (ignoreClickOutsideClass) {
            const ignoredClickOutsideEls = document.querySelectorAll(
                `.${ignoreClickOutsideClass}`
            );
            ignoredClickOutsideEls.forEach((el) => {
                if (el.contains(clickedEl)) {
                    isIgnored = true;
                    return;
                }
            });
        }

        // Ignore clicks on the target element (ie. dropdown itself)
        if (
            clickedEl !== targetEl &&
            !targetEl.contains(clickedEl) &&
            !this._triggerEl.contains(clickedEl) &&
            !isIgnored &&
            this.isVisible()
        ) {
            this.hide();
        }
    }

    _getTriggerEvents() {
        switch (this._options.triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'click'],
                    hideEvents: ['mouseleave'],
                };
            case 'click':
                return {
                    showEvents: ['click'],
                    hideEvents: [],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['click'],
                    hideEvents: [],
                };
        }
    }

    toggle() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
        this._options.onToggle(this);
    }

    isVisible() {
        return this._visible;
    }

    show() {
        this._targetEl.classList.remove('hidden');
        this._targetEl.classList.add('block');

        // Enable the event listeners
        this._popperInstance.setOptions((options: PopperOptions) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        this._setupClickOutsideListener();

        // Update its position
        this._popperInstance.update();
        this._visible = true;

        // callback function
        this._options.onShow(this);
    }

    hide() {
        this._targetEl.classList.remove('block');
        this._targetEl.classList.add('hidden');

        // Disable the event listeners
        this._popperInstance.setOptions((options: PopperOptions) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }));

        this._visible = false;

        this._removeClickOutsideListener();

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

export function initDropdowns() {
    document
        .querySelectorAll('[data-dropdown-toggle]')
        .forEach(($triggerEl) => {
            const dropdownId = $triggerEl.getAttribute('data-dropdown-toggle');
            const $dropdownEl = document.getElementById(dropdownId);

            if ($dropdownEl) {
                const placement = $triggerEl.getAttribute(
                    'data-dropdown-placement'
                );
                const offsetSkidding = $triggerEl.getAttribute(
                    'data-dropdown-offset-skidding'
                );
                const offsetDistance = $triggerEl.getAttribute(
                    'data-dropdown-offset-distance'
                );
                const triggerType = $triggerEl.getAttribute(
                    'data-dropdown-trigger'
                );
                const delay = $triggerEl.getAttribute('data-dropdown-delay');
                const ignoreClickOutsideClass = $triggerEl.getAttribute(
                    'data-dropdown-ignore-click-outside-class'
                );

                new Dropdown(
                    $dropdownEl as HTMLElement,
                    $triggerEl as HTMLElement,
                    {
                        placement: placement ? placement : Default.placement,
                        triggerType: triggerType
                            ? triggerType
                            : Default.triggerType,
                        offsetSkidding: offsetSkidding
                            ? parseInt(offsetSkidding)
                            : Default.offsetSkidding,
                        offsetDistance: offsetDistance
                            ? parseInt(offsetDistance)
                            : Default.offsetDistance,
                        delay: delay ? parseInt(delay) : Default.delay,
                        ignoreClickOutsideClass: ignoreClickOutsideClass
                            ? ignoreClickOutsideClass
                            : Default.ignoreClickOutsideClass,
                    } as DropdownOptions
                );
            } else {
                console.error(
                    `The dropdown element with id "${dropdownId}" does not exist. Please check the data-dropdown-toggle attribute.`
                );
            }
        });
}

if (typeof window !== 'undefined') {
    window.Dropdown = Dropdown;
    window.initDropdowns = initDropdowns;
}

export default Dropdown;

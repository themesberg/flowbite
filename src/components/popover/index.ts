/* eslint-disable @typescript-eslint/no-empty-function */
import { createPopper } from '@popperjs/core';
import type {
    Options as PopperOptions,
    Instance as PopperInstance,
} from '@popperjs/core';
import type { PopoverOptions } from './types';
import { PopoverInterface } from './interface';

const Default: PopoverOptions = {
    placement: 'top',
    offset: 10,
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

class Popover implements PopoverInterface {
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: PopoverOptions;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _visible: boolean;

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: PopoverOptions = Default
    ) {
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = { ...Default, ...options };
        this._popperInstance = this._createPopperInstance();
        this._visible = false;
        this._init();
    }

    _init() {
        if (this._triggerEl) {
            this._setupEventListeners();
        }
    }

    _setupEventListeners() {
        const triggerEvents = this._getTriggerEvents();

        triggerEvents.showEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, () => {
                this.show();
            });
            this._targetEl.addEventListener(ev, () => {
                this.show();
            });
        });
        triggerEvents.hideEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, () => {
                setTimeout(() => {
                    if (!this._targetEl.matches(':hover')) {
                        this.hide();
                    }
                }, 100);
            });
            this._targetEl.addEventListener(ev, () => {
                setTimeout(() => {
                    if (!this._triggerEl.matches(':hover')) {
                        this.hide();
                    }
                }, 100);
            });
        });
    }

    _createPopperInstance() {
        return createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, this._options.offset],
                    },
                },
            ],
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

        // Enable the event listeners
        this._popperInstance.setOptions((options: PopperOptions) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        // handle click outside
        this._setupClickOutsideListener();

        // handle esc keydown
        this._setupKeydownListener();

        // Update its position
        this._popperInstance.update();

        // set visibility to true
        this._visible = true;

        // callback function
        this._options.onShow(this);
    }

    hide() {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');

        // Disable the event listeners
        this._popperInstance.setOptions((options: PopperOptions) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }));

        // handle click outside
        this._removeClickOutsideListener();

        // handle esc keydown
        this._removeKeydownListener();

        // set visibility to false
        this._visible = false;

        // callback function
        this._options.onHide(this);
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

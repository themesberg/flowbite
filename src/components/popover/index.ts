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
};

class Popover implements PopoverInterface {
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: PopoverOptions;
    _popperInstance: PopperInstance;

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: PopoverOptions = Default
    ) {
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = { ...Default, ...options };
        this._popperInstance = this._createPopperInstance();
        this._init();
    }

    _init() {
        if (this._triggerEl) {
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
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
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

        // Update its position
        this._popperInstance.update();

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

        // callback function
        this._options.onHide(this);
    }
}

window.Popover = Popover;

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

export default Popover;

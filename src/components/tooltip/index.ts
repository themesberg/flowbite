import { createPopper } from '@popperjs/core';
import type { Placement, Options } from '@popperjs/core';
import { TooltipOptions } from './types';
import { TooltipInterface } from './interface';

declare global {
    interface Window {
        Tooltip: typeof Tooltip;
    }
}

const Default: TooltipOptions = {
    placement: 'top',
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
};

class Tooltip implements TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: any;

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: TooltipOptions = Default
    ) {
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = { ...Default, ...options };
        this._popperInstance = this._createPopperInstace();
        this._init();
    }

    private _init() {
        if (this._triggerEl) {
            const triggerEvents = this._getTriggerEvents();
            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.addEventListener(ev, () => {
                    this.show();
                });
            });
            triggerEvents.hideEvents.forEach((ev) => {
                this._triggerEl.addEventListener(ev, () => {
                    this.hide();
                });
            });
        }
    }

    private _createPopperInstace() {
        return createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement as Placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    }

    private _getTriggerEvents() {
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
        this._popperInstance.setOptions((options: Options) => ({
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
        this._popperInstance.setOptions((options: Options) => ({
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

window.Tooltip = Tooltip;

export function initTooltips() {
    document.querySelectorAll('[data-tooltip-target]').forEach((triggerEl) => {
        const targetEl = document.getElementById(
            triggerEl.getAttribute('data-tooltip-target')
        );
        const triggerType = triggerEl.getAttribute('data-tooltip-trigger');
        const placement = triggerEl.getAttribute('data-tooltip-placement');

        new Tooltip(
            targetEl as HTMLElement,
            triggerEl as HTMLElement,
            {
                placement: placement ? placement : Default.placement,
                triggerType: triggerType ? triggerType : Default.triggerType,
            } as TooltipOptions
        );
    });
}

export default Tooltip;

/* eslint-disable @typescript-eslint/no-empty-function */
import { createPopper } from '@popperjs/core';
import type {
    Options as PopperOptions,
    Instance as PopperInstance,
} from '@popperjs/core';
import type { TooltipOptions } from './types';
import { TooltipInterface } from './interface';

const Default: TooltipOptions = {
    placement: 'top',
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

class Tooltip implements TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;
    _visible: boolean;

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: TooltipOptions = Default
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
        });
        triggerEvents.hideEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, () => {
                this.hide();
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
                        offset: [0, 8],
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

        // set visibility
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

        // set visibility
        this._visible = false;

        // callback function
        this._options.onHide(this);
    }
}

export function initTooltips() {
    document.querySelectorAll('[data-tooltip-target]').forEach(($triggerEl) => {
        const tooltipId = $triggerEl.getAttribute('data-tooltip-target');
        const $tooltipEl = document.getElementById(tooltipId);

        if ($tooltipEl) {
            const triggerType = $triggerEl.getAttribute('data-tooltip-trigger');
            const placement = $triggerEl.getAttribute('data-tooltip-placement');

            new Tooltip(
                $tooltipEl as HTMLElement,
                $triggerEl as HTMLElement,
                {
                    placement: placement ? placement : Default.placement,
                    triggerType: triggerType
                        ? triggerType
                        : Default.triggerType,
                } as TooltipOptions
            );
        } else {
            console.error(
                `The tooltip element with id "${tooltipId}" does not exist. Please check the data-tooltip-target attribute.`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Tooltip = Tooltip;
    window.initTooltips = initTooltips;
}

export default Tooltip;

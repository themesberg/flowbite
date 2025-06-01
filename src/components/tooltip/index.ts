/* eslint-disable @typescript-eslint/no-empty-function */
import { computePosition, autoUpdate, offset } from '@floating-ui/dom';
import type { TooltipOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { TooltipInterface } from './interface';
import instances from '../../dom/instances';

const Default: TooltipOptions = {
    placement: 'top',
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Tooltip implements TooltipInterface {
    _instanceId: string;
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
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
        options: TooltipOptions = Default,
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
            'Tooltip',
            this,
            this._instanceId,
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
            // remove event listeners associated with the trigger element
            const triggerEvents = this._getTriggerEvents();

            triggerEvents.showEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(ev, this._showHandler);
            });

            triggerEvents.hideEvents.forEach((ev) => {
                this._triggerEl.removeEventListener(ev, this._hideHandler);
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
        instances.removeInstance('Tooltip', this._instanceId);
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
            this.hide();
        };

        triggerEvents.showEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, this._showHandler);
        });

        triggerEvents.hideEvents.forEach((ev) => {
            this._triggerEl.addEventListener(ev, this._hideHandler);
        });
    }

    _initializeFloatingUI() {
      computePosition(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        middleware: [offset(8)]
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

        // set visibility
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

        // set visibility
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

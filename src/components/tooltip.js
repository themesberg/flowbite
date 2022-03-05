import { createPopper } from '@popperjs/core';

const Default = {
    placement: 'top',
    triggerType: 'hover'
}

class Tooltip {
    constructor(targetId = null, triggerElement = null, options = {}) {
        this._targetEl = document.getElementById(targetId)
        this._triggerEl = triggerElement
        this._options = { ...Default, ...options }
        this._popperInstance = this._createPopperInstace()
        this._init()
    }

    _init() {
        const triggerEvents = this._getTriggerEvents()
        triggerEvents.showEvents.forEach(ev => {
            this._triggerEl.addEventListener(ev, () => {
                this.show()
            })
        })
        triggerEvents.hideEvents.forEach(ev => {
            this._triggerEl.addEventListener(ev, () => {
                this.hide()
            })
        })
    }

    _createPopperInstace() {
        console.log(this._options)
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
                    hideEvents: ['mouseleave', 'blur']
                }
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur']
                }
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur']
                }
        }
    }

    show() {
        console.log(this._targetEl)
        this._targetEl.classList.remove('opacity-0', 'invisible');
        this._targetEl.classList.add('opacity-100', 'visible');

        // Enable the event listeners
        this._popperInstance.setOptions(options => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        // Update its position
        this._popperInstance.update();
    }

    hide() {
        this._targetEl.classList.remove('opacity-100', 'visible');
        this._targetEl.classList.add('opacity-0', 'invisible');

        // Disable the event listeners
        this._popperInstance.setOptions(options => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }));
    }
}

window.Tooltip = Tooltip;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tooltip-target]').forEach(el => {
        const triggerType = el.getAttribute('data-tooltip-trigger');
        const placement = el.getAttribute('data-tooltip-placement');

        const tooltip = new Tooltip(el.getAttribute('data-tooltip-target'), el, {
            placement: placement ? placement : Default.placement,
            triggerType: triggerType ? triggerType : Default.triggerType
        })
        console.log(tooltip);
    })
})

export default Tooltip
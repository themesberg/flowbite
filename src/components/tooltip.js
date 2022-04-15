import { createPopper } from '@popperjs/core';

const Default = {
    placement: 'top',
    triggerType: 'hover',
    onShow: () => { },
    onHide: () => { }
}

class Tooltip {
    constructor(targetEl = null, triggerEl = null, options = {}) {
        this._targetEl = targetEl
        this._triggerEl = triggerEl
        this._options = { ...Default, ...options }
        this._popperInstance = this._createPopperInstace()
        this._init()
    }

    _init() {
        if (this._triggerEl) {
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
    }

    _createPopperInstace() {
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
        this._targetEl.classList.remove('opacity-0', 'invisible')
        this._targetEl.classList.add('opacity-100', 'visible')

        // Enable the event listeners
        this._popperInstance.setOptions(options => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        // Update its position
        this._popperInstance.update()

        // callback function
        this._options.onShow(this)
    }

    hide() {
        this._targetEl.classList.remove('opacity-100', 'visible')
        this._targetEl.classList.add('opacity-0', 'invisible')

        // Disable the event listeners
        this._popperInstance.setOptions(options => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }));

        // callback function
        this._options.onHide(this)
    }
}

window.Tooltip = Tooltip;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tooltip-target]').forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-tooltip-target'))
        const triggerType = triggerEl.getAttribute('data-tooltip-trigger');
        const placement = triggerEl.getAttribute('data-tooltip-placement');

        new Tooltip(targetEl, triggerEl, {
            placement: placement ? placement : Default.placement,
            triggerType: triggerType ? triggerType : Default.triggerType
        })
    })
})

export default Tooltip
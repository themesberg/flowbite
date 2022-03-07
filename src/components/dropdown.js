import { createPopper } from '@popperjs/core';

const Default = {
    placement: 'bottom',
    triggerType: 'click'
}

class Dropdown {
    constructor(targetElement = null, triggerElement = null, options = {}) {
        this._targetEl = targetElement
        this._triggerEl = triggerElement
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
                        offset: [0, 10],
                    },
                },
            ],
        });
    }

    _getTriggerEvents() {
        switch (this._options.triggerType) {
            // case 'hover':
            //     return {
            //         showEvents: ['mouseenter'],
            //         hideEvents: ['mouseleave']
            //     }
            case 'click':
                return {
                    showEvents: ['click'],
                    hideEvents: []
                }
            default:
                return {
                    showEvents: ['click'],
                    hideEvents: []
                }
        }
    }

    _handleClickOutside(ev, targetEl) {
        const clickedEl = ev.target
        if (clickedEl !== targetEl && clickedEl !== targetEl && !targetEl.contains(clickedEl)) {
            targetEl.classList.add('hidden')
            targetEl.classList.remove('block')
            document.body.removeEventListener('click', this._handleClickOutside, true)
        }
    }

    show() {
        this._targetEl.classList.remove('hidden');
        this._targetEl.classList.add('block');
        console.log(this._targetEl)

        // Enable the event listeners
        this._popperInstance.setOptions(options => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        document.body.addEventListener('click', (ev) => { this._handleClickOutside(ev, this._targetEl) }, true);

        // Update its position
        this._popperInstance.update();
    }

    hide() {
        this._targetEl.classList.remove('block');
        this._targetEl.classList.add('hidden');

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

window.Dropdown = Dropdown;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-dropdown-toggle]').forEach(el => {
        const placement = el.getAttribute('data-dropdown-placement');

        const dropdown = new Dropdown(document.getElementById(el.getAttribute('data-dropdown-toggle')), el, {
            placement: placement ? placement : Default.placement
        })
        console.log(dropdown);
    })
})

export default Dropdown
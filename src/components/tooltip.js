import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { createPopper } from '@popperjs/core';
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

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
        this._targetEl.classList.remove(...getPrefixedClassNames('%p%opacity-0 %p%invisible').split(' '))
        this._targetEl.classList.add(...getPrefixedClassNames('%p%opacity-100 %p%visible').split(' '))

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
        this._targetEl.classList.remove(...getPrefixedClassNames('%p%opacity-100 %p%visible').split(' '))
        this._targetEl.classList.add(...getPrefixedClassNames('%p%opacity-0 %p%invisible').split(' '))

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

const initTooltip = (selectors) => {
    document.querySelectorAll(`[${selectors.main}]`).forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute(selectors.main))
        const triggerType = triggerEl.getAttribute(selectors.trigger);
        const placement = triggerEl.getAttribute(selectors.placement);

        new Tooltip(targetEl, triggerEl, {
            placement: placement ? placement : Default.placement,
            triggerType: triggerType ? triggerType : Default.triggerType
        })
    })
}

const selectors = {
	main: 'tooltip-target',
	trigger: 'tooltip-trigger',
	placement: 'tooltip-placement'
}

const baseSelectors = getPrefixedDataAttributes(selectors, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectors, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initTooltip(baseSelectors)
	initTooltip(prefixSelectors)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initTooltip(baseSelectors))
	document.addEventListener('DOMContentLoaded', initTooltip(prefixSelectors))
}

export default Tooltip
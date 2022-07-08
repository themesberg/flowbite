import config from '../core/config'
import { getPrefixedAttribute } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

const Default = {
    triggerEl: null,
    transition: getPrefixedClassName('%prefix%transition-opacity'),
    duration: 300,
    timing: getPrefixedClassName('%prefix%ease-out'),
    onHide: () => { }
}

class Dismiss {
    constructor(targetEl = null, options = {}) {
        this._targetEl = targetEl
        this._triggerEl = options ? options.triggerEl : Default.triggerEl
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        if (this._triggerEl) {
            this._triggerEl.addEventListener('click', () => {
                this.hide()
            })
        }
    }

    hide() {
        this._targetEl.classList.add(...getPrefixedClassNames(`%prefix%${this._options.transition} %prefix%duration-${this._options.duration} %prefix%${this._options.timing} %prefix%opacity-0`).split(' '))
        setTimeout(() => {
            this._targetEl.classList.add(getPrefixedClassName('%prefix%hidden'))
        }, this._options.duration)

        // callback function
        this._options.onHide(this, this._targetEl)
    }
}

window.Dismiss = Dismiss;

const initDismiss = (selector) => {
    document.querySelectorAll(`[${selector}]`).forEach(triggerEl => {
        const targetEl = document.querySelector(triggerEl.getAttribute(selector))

        new Dismiss(targetEl, {
            triggerEl
        })
    })
}

const baseSelector = getPrefixedAttribute('dismiss-target', '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelector = getPrefixedAttribute('dismiss-target', config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initDismiss(baseSelector)
	initDismiss(prefixSelector)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initDismiss(baseSelector))
	document.addEventListener('DOMContentLoaded', initDismiss(prefixSelector))
}

export default Dismiss
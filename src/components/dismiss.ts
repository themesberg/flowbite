import config from '../core/config'
import { getPrefixedAttribute } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

interface DismissOptions {
    triggerEl?: Element,
    transition?: string,
    duration?: number,
    timing?: string,
    onHide?(callback: any, el: Element): any,
}

const defaultOptions: DismissOptions = {
    triggerEl: null,
    transition: getPrefixedClassName('%p%transition-opacity'),
    duration: 300,
    timing: getPrefixedClassName('%p%ease-out'),
    onHide: () => { }
}

class Dismiss {
    _targetEl: Element
    _triggerEl: Element
    _options: DismissOptions

    constructor(targetEl: Element, options: DismissOptions) {
        this._targetEl = targetEl
        this._triggerEl = options ? options.triggerEl : defaultOptions.triggerEl
        this._options = { ...defaultOptions, ...options }
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
        this._targetEl.classList.add(...getPrefixedClassNames(`%p%${this._options.transition} %p%duration-${this._options.duration} %p%${this._options.timing} %p%opacity-0`).split(' '))
        setTimeout(() => {
            this._targetEl.classList.add(getPrefixedClassName('%p%hidden'))
        }, this._options.duration)

        // callback function
        this._options.onHide(this, this._targetEl)
    }
}

window.Dismiss = Dismiss;

const initDismiss = (selector: string) => {
    document.querySelectorAll(`[${selector}]`).forEach(triggerEl => {
        const targetEl = document.querySelector(triggerEl.getAttribute(selector))
        console.log(targetEl)

        new Dismiss(targetEl, {
            triggerEl: triggerEl
        })
    })
}

const baseSelector: string = getPrefixedAttribute('dismiss-target', '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelector: string = getPrefixedAttribute('dismiss-target', config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
    // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDismiss(baseSelector)
    initDismiss(prefixSelector)
} else {
    // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener('DOMContentLoaded', () => { initDismiss(baseSelector) })
    document.addEventListener('DOMContentLoaded', () => { initDismiss(prefixSelector) })
}

export default Dismiss

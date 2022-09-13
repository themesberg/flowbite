import config from '../core/config'
import { getPrefixedAttribute } from '../helpers/data-attribute'
import { getPrefixedClassName } from '../helpers/class-name'

interface CollapseOptions {
    triggerEl?: Element,
    onCollapse?(callback: any): any,
    onExpand?(callback: any): any,
    onToggle?(callback: any): any,
}

const defaultOptions: CollapseOptions = {
    triggerEl: null,
    onCollapse: () => { },
    onExpand: () => { },
    onToggle: () => { }
}
class Collapse {
    _targetEl: Element;
    _triggerEl: Element;
    _options: CollapseOptions;
    _visible: boolean;

    constructor(targetEl: Element, options: CollapseOptions) {
        this._targetEl = targetEl
        this._triggerEl = options ? options.triggerEl : defaultOptions.triggerEl
        this._options = { ...defaultOptions, ...options }
        this._visible = false
        this._init()
    }

    _init() {

        if (this._triggerEl) {
            if (this._triggerEl.hasAttribute('aria-expanded')) {
                this._visible = this._triggerEl.getAttribute('aria-expanded') === 'true' ? true : false
            }

            this._triggerEl.addEventListener('click', () => {
                this._visible ? this.collapse() : this.expand()
            })
        }

    }

    collapse() {
        this._targetEl.classList.add(getPrefixedClassName('%p%hidden'))
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false')
        }
        this._visible = false

        // callback function
        this._options.onCollapse(this)
    }

    expand() {
        this._targetEl.classList.remove(getPrefixedClassName('%p%hidden'))
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true')
        }
        this._visible = true

        // callback function
        this._options.onExpand(this)
    }

    toggle() {
        if (this._visible) {
            this.collapse()
        } else {
            this.expand()
        }
        this._options.onToggle(this)
    }

}

window.Collapse = Collapse;

const initCollapse = (selector: string) => {
    document.querySelectorAll(`[${selector}]`).forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute(selector))
        new Collapse(targetEl, {
            triggerEl: triggerEl
        })
    })
}

const baseSelector: string = getPrefixedAttribute('collapse-toggle', '') // we need this to make legacy selectors with no prefix work pre v2.x
const prefixSelector: string = getPrefixedAttribute('collapse-toggle', config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
    // DOMContentLoaded event were already fired. Perform explicit initialization now
    initCollapse(baseSelector)
    initCollapse(prefixSelector)
} else {
    // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener('DOMContentLoaded', () => { initCollapse(baseSelector) })
    document.addEventListener('DOMContentLoaded', () => { initCollapse(prefixSelector) })
}

export default Collapse
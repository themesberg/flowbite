import config from '../core/config'
import { getPrefixedAttribute } from '../helpers/data-attribute'
import { getPrefixedClassName } from '../helpers/class-name'

const Default = {
    triggerEl: null,
    onCollapse: () => { },
    onExpand: () => { },
    onToggle: () => { }
}

class Collapse {
    constructor(targetEl = null, options) {
        this._targetEl = targetEl
        this._triggerEl = options ? options.triggerEl : Default.triggerEl
        this._options = { ...Default, ...options }
        this._visible = false
        this._init()
    }

    _init() {

        if (this._triggerEl) {
            if (this._triggerEl.hasAttribute('aria-expanded')) {
                this._visible = this._triggerEl.getAttribute('aria-expanded') === 'true' ? true : false
            } else {
                // fix until v2 not to break previous single collapses which became dismiss
                this._visible = this._targetEl.classList.contains(getPrefixedClassName('%p%hidden')) ? false : true
            }

            this._triggerEl.addEventListener('click', () => {
                this._visible ? this.collapse() : this.expand()
            })
        }

    }

    collapse() {
        this._targetEl.classList.add(getPrefixedClassName('%p%hidden'))
        if(this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false')
        }
        this._visible = false

        // callback function
        this._options.onCollapse(this)
    }

    expand() {
        this._targetEl.classList.remove(getPrefixedAttribute('%p%hidden'))
        if(this._triggerEl) {
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
    }

}

window.Collapse = Collapse;

const initCollapse = (selector) => {
    document.querySelectorAll(`[${selector}]`).forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute(selector))
        new Collapse(targetEl, {
            triggerEl: triggerEl
        })
    })
}

const baseSelector = getPrefixedAttribute('collapse-toggle', '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelector = getPrefixedAttribute('collapse-toggle', config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initCollapse(baseSelector)
	initCollapse(prefixSelector)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initCollapse(baseSelector))
	document.addEventListener('DOMContentLoaded', initCollapse(prefixSelector))
}

export default Collapse
const Default = {
    onCollapse: () => { },
    onExpand: () => { },
    onToggle: () => { }
}

class Collapse {
    constructor(targetElement = null, triggerElement = null, options) {
        this._targetEl = targetElement
        this._triggerEl = triggerElement
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
                this._visible = this._targetEl.classList.contains('hidden') ? false : true
            }

            this._triggerEl.addEventListener('click', () => {
                this._visible ? this.collapse() : this.expand()
            })
        }

    }

    collapse() {
        this._targetEl.classList.add('hidden')
        if(this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false')
        }
        this._visible = false

        // callback function
        this._options.onCollapse()
    }

    expand() {
        this._targetEl.classList.remove('hidden')
        if(this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true')
        }
        this._visible = true

        // callback function
        this._options.onExpand()
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-collapse-toggle]').forEach(function (triggerEl) {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-collapse-toggle'))
        const collapse = new Collapse(targetEl, triggerEl, {
            onCollapse: () => {
                console.log('element has been collapsed')
            },
            onExpand: () => {
                console.log('element has been expanded')
            },
            onToggle: () => {
                console.log('element has been toggled')
            },
        })
        console.log(collapse);
    })
})

export default Collapse
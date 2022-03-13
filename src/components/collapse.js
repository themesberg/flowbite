const Default = {
    onHide: () => { },
    onShow: () => { }
}

class Collapse {
    constructor(el, targetID, options) {
        this._el = el
        this._targetEl = document.getElementById(targetID)
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {

        if (this._el.hasAttribute('aria-expanded')) {
            this._visible = this._el.getAttribute('aria-expanded') === 'true' ? true : false
        } else {
            // fix until v2 not to break previous single collapses which became dismiss
            this._visible = this._targetEl.classList.contains('hidden') ? false : true
        }

        this._el.addEventListener('click', () => {
            this._visible ? this.hide() : this.show()
        })
    }

    hide() {
        this._targetEl.classList.add('hidden')
        this._el.setAttribute('aria-expanded', 'false')
        this._visible = false

        // callback function
        this._options.onHide()
    }

    show() {
        this._targetEl.classList.remove('hidden')
        this._el.setAttribute('aria-expanded', 'true')
        this._visible = true

        // callback function
        this._options.onShow()
    }

}

window.Collapse = Collapse;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-collapse-toggle]').forEach(function (el) {
        const collapse = new Collapse(el, el.getAttribute('data-collapse-toggle'))
        console.log(collapse);
    })
})

export default Collapse
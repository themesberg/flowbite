const Default = {
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
    onHide: () => {}
}

class Dismiss {
    constructor(targetQuery = null, triggerElement = null, options = {}) {
        this._targetEls = document.querySelectorAll(targetQuery)
        this._triggerEl = triggerElement
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
        this._targetEls.forEach(el => {
            el.classList.add(this._options.transition, `duration-${this._options.duration}`, this._options.timing, 'opacity-0')
            setTimeout(() => {
                el.classList.add('hidden')
            }, this._options.duration)
        })

        // callback function
        this._options.onHide()
    }
}

window.Dismiss = Dismiss;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-dismiss-target]').forEach(el => {
        const dismiss = new Dismiss(el.getAttribute('data-dismiss-target'), el, {
            onHide: () => {
                console.log('hidden')
            }
        })
        console.log(dismiss);
    })
})

export default Dismiss
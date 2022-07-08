const Default = {
    triggerEl: null,
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
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
        this._targetEl.classList.add(this._options.transition, `duration-${this._options.duration}`, this._options.timing, 'opacity-0')
        setTimeout(() => {
            this._targetEl.classList.add('hidden')
        }, this._options.duration)

        // callback function
        this._options.onHide(this, this._targetEl)
    }
}

window.Dismiss = Dismiss;

function initDismiss() {
    document.querySelectorAll('[data-dismiss-target]').forEach(triggerEl => {
        const targetEl = document.querySelector(triggerEl.getAttribute('data-dismiss-target'))

        new Dismiss(targetEl, {
            triggerEl
        })
    })
}

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initDismiss()
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initDismiss)
}

export default Dismiss
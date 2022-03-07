const Default = {
    placement: 'center',
    isHidden: true
}

class Modal {
    constructor(targetElement = null, triggerElement = null, options = {}) {
        this._targetEl = targetElement
        this._triggerEl = triggerElement
        this._options = { ...Default, ...options }
        this._isHidden = this._options.isHidden
        this._init()
    }

    _init() {
        if (this._triggerEl) {
            this._triggerEl.addEventListener('click', () => {
                this.toggle()
            })
            this._targetEl.addEventListener('click', (ev) => {
                console.log('click')
                const clickedEl = ev.target
                if (clickedEl === this._targetEl && this._targetEl.contains(clickedEl)) {
                    this.hide()
                }
            })
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

    _createBackdrop() {
        const backdropEl = document.createElement('div');
        backdropEl.setAttribute('modal-backdrop', '');
        backdropEl.classList.add('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40');
        document.querySelector('body').append(backdropEl);
    }

    _destroyBackdropEl() {
        document.querySelector('[modal-backdrop]').remove();
    }

    toggle() {
        console.log(this._isHidden)
        if (this._isHidden) {
            this.show()
        } else {
            this.hide()
        }
    }

    show() {
        console.log('show')
        this._targetEl.classList.add('flex')
        this._targetEl.classList.remove('hidden')
        this._targetEl.setAttribute('aria-modal', 'true')
        this._targetEl.setAttribute('role', 'dialog')
        this._targetEl.removeAttribute('aria-hidden')
        this._isHidden = false
        this._createBackdrop()
    }

    hide() {
        console.log('hide')
        this._targetEl.classList.add('hidden')
        this._targetEl.classList.remove('flex')
        this._targetEl.setAttribute('aria-hidden', 'true')
        this._targetEl.removeAttribute('aria-modal')
        this._targetEl.removeAttribute('role')
        this._isHidden = true
        this._destroyBackdropEl()
    }
}

window.Modal = Modal;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-modal-toggle]').forEach(el => {
        var modalId = el.getAttribute('data-modal-toggle');
        var modalEl = document.getElementById(modalId);

        if (modalEl) {
            if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
                modalEl.setAttribute('aria-hidden', 'true');
            }
        }

        const modal = new Modal(modalEl, el, {
            isHidden: true
        })
        console.log(modal);
    })
})

export default Modal
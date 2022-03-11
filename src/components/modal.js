const Default = {
    placement: 'center',
    backdropClasses: ['bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40'],
    onHide: () => {},
    onShow: () => {},
    onToggle: () => {}
}
class Modal {
    constructor(targetElement = null, options = {}) {
        this._targetEl = targetElement
        this._options = { ...Default, ...options }
        this._isHidden = true
        this._init()
    }

    _init() {
        this._getPlacementClasses().map(c => {
            this._targetEl.classList.add(c)
        })
    }

    _createBackdrop() {
        const backdropEl = document.createElement('div');
        backdropEl.setAttribute('modal-backdrop', '');
        backdropEl.classList.add(...Default.backdropClasses, ...this._options.backdropClasses);
        document.querySelector('body').append(backdropEl);
    }

    _destroyBackdropEl() {
        document.querySelector('[modal-backdrop]').remove();
    }

    _getPlacementClasses() {
        switch (this._options.placement) {

            // top
            case 'top-left':
                return ['justify-start', 'items-start']
            case 'top-center':
                return ['justify-center', 'items-start']
            case 'top-right':
                return ['justify-end', 'items-start']

            // center
            case 'center-left':
                return ['justify-start', 'items-center']
            case 'center':
                return ['justify-center', 'items-center']
            case 'center-right':
                return ['justify-end', 'items-center']

            // bottom
            case 'bottom-left':
                return ['justify-start', 'items-end']
            case 'bottom-center':
                return ['justify-center', 'items-end']
            case 'bottom-right':
                return ['justify-end', 'items-end']

            default:
                return ['justify-center', 'items-center']
        }
    }

    toggle() {
        if (this._isHidden) {
            this.show()
        } else {
            this.hide()
        }

        // callback function
        this._options.onToggle()
    }

    show() {
        this._targetEl.classList.add('flex')
        this._targetEl.classList.remove('hidden')
        this._targetEl.setAttribute('aria-modal', 'true')
        this._targetEl.setAttribute('role', 'dialog')
        this._targetEl.removeAttribute('aria-hidden')
        this._isHidden = false
        this._createBackdrop()

        // callback function
        this._options.onShow()
    }

    hide() {
        this._targetEl.classList.add('hidden')
        this._targetEl.classList.remove('flex')
        this._targetEl.setAttribute('aria-hidden', 'true')
        this._targetEl.removeAttribute('aria-modal')
        this._targetEl.removeAttribute('role')
        this._isHidden = true
        this._destroyBackdropEl()

        // callback function
        this._options.onHide()
    }

}

window.Modal = Modal;

const getModalInstance = (id, instances) => {
    if (instances.some(modalInstance => modalInstance.id === id)) {
        return instances.find(modalInstance => modalInstance.id === id)
    }
    return false
}

document.addEventListener('DOMContentLoaded', () => {
    let modalInstances = []
    document.querySelectorAll('[data-modal-toggle]').forEach(el => {
        const modalId = el.getAttribute('data-modal-toggle');
        const modalEl = document.getElementById(modalId);
        const placement = modalEl.getAttribute('data-modal-placement')

        if (modalEl) {
            if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
                modalEl.setAttribute('aria-hidden', 'true');
            }
        }

        let modal = null
        if (getModalInstance(modalId, modalInstances)) {
            modal = getModalInstance(modalId, modalInstances)
            modal = modal.object
        } else {
            modal = new Modal(modalEl, {
                placement: placement ? placement : Default.placement,
                onHide: () => {
                    alert('hide')
                },
                onShow: () => {
                    console.log('show')
                }
            })
            modalInstances.push({
                id: modalId,
                object: modal
            })
        }

        el.addEventListener('click', () => {
            modal.toggle()
        })
    })
    console.log(modalInstances)
})

export default Modal
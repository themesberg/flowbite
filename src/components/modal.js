import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

const Default = {
    placement: 'center',
    backdropClasses: getPrefixedClassNames('%p%bg-gray-900 %p%bg-opacity-50 dark:%p%bg-opacity-80 %p%fixed %p%inset-0 %p%z-40'),
    onHide: () => { },
    onShow: () => { },
    onToggle: () => { }
}
class Modal {
    constructor(targetEl = null, options = {}) {
        this._targetEl = targetEl
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
        if (this._isHidden) {
            const backdropEl = document.createElement('div');
            backdropEl.setAttribute('modal-backdrop', '');
            backdropEl.classList.add(...this._options.backdropClasses.split(" "));
            document.querySelector('body').append(backdropEl);
        }
    }

    _destroyBackdropEl() {
        if (!this._isHidden) {
            document.querySelector('[modal-backdrop]').remove();
        }
    }

    _getPlacementClasses() {
        switch (this._options.placement) {

            // top
            case 'top-left':
                return [getPrefixedClassName('%p%justify-start'), getPrefixedClassName('%p%items-start')]
            case 'top-center':
                return [getPrefixedClassName('%p%justify-center'), getPrefixedClassName('%p%items-start')]
            case 'top-right':
                return [getPrefixedClassName('%p%justify-end'), getPrefixedClassName('%p%items-start')]

            // center
            case 'center-left':
                return [getPrefixedClassName('%p%justify-start'), getPrefixedClassName('%p%items-center')]
            case 'center':
                return [getPrefixedClassName('%p%justify-center'), getPrefixedClassName('%p%items-center')]
            case 'center-right':
                return [getPrefixedClassName('%p%justify-end'), getPrefixedClassName('%p%items-center')]

            // bottom
            case 'bottom-left':
                return [getPrefixedClassName('%p%justify-start'), getPrefixedClassName('%p%items-end')]
            case 'bottom-center':
                return [getPrefixedClassName('%p%justify-center'), getPrefixedClassName('%p%items-end')]
            case 'bottom-right':
                return [getPrefixedClassName('%p%justify-end'), getPrefixedClassName('%p%items-end')]

            default:
                return [getPrefixedClassName('%p%justify-center'), getPrefixedClassName('%p%items-center')]
        }
    }

    toggle() {
        if (this._isHidden) {
            this.show()
        } else {
            this.hide()
        }

        // callback function
        this._options.onToggle(this)
    }

    show() {
        this._targetEl.classList.add(getPrefixedClassName('%p%flex'))
        this._targetEl.classList.remove(getPrefixedClassName('%p%hidden'))
        this._targetEl.setAttribute('aria-modal', 'true')
        this._targetEl.setAttribute('role', 'dialog')
        this._targetEl.removeAttribute('aria-hidden')
        this._createBackdrop()
        this._isHidden = false

        // callback function
        this._options.onShow(this)
    }

    hide() {
        this._targetEl.classList.add(getPrefixedClassName('%p%hidden'))
        this._targetEl.classList.remove(getPrefixedClassName('%p%flex'))
        this._targetEl.setAttribute('aria-hidden', 'true')
        this._targetEl.removeAttribute('aria-modal')
        this._targetEl.removeAttribute('role')
        this._destroyBackdropEl()
        this._isHidden = true

        // callback function
        this._options.onHide(this)
    }

}

window.Modal = Modal;

const getModalInstance = (id, instances) => {
    if (instances.some(modalInstance => modalInstance.id === id)) {
        return instances.find(modalInstance => modalInstance.id === id)
    }
    return false
}

const initModal = (selectors) => {
    let modalInstances = []
    document.querySelectorAll(`[${selectors.main}]`).forEach(el => {
        const modalId = el.getAttribute(selectors.main);
        const modalEl = document.getElementById(modalId);
        const placement = modalEl.getAttribute(selectors.placement)

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
                placement: placement ? placement : Default.placement
            })
            modalInstances.push({
                id: modalId,
                object: modal
            })
        }

        if (modalEl.hasAttribute(selectors.show) && modalEl.getAttribute(selectors.show) === 'true') {
            modal.show();
        }

        el.addEventListener('click', () => {
            modal.toggle()
        })
    })
}

const selectors = {
	main: 'modal-toggle',
	placement: 'modal-placement',
	show: 'modal-show',
}

const baseSelectors = getPrefixedDataAttributes(selectors, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectors, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initModal(baseSelectors)
	initModal(prefixSelectors)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initModal(baseSelectors))
	document.addEventListener('DOMContentLoaded', initModal(prefixSelectors))
}

export default Modal

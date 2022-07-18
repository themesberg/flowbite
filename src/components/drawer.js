const Default = {
    placement: 'left',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    onShow: () => { },
    onHide: () => { },
    onToggle: () => { }
}

class Drawer {
    constructor(targetEl = null, options) {
        this._targetEl = targetEl
        this._options = { ...Default, ...options }
        this._visible = false
        this._init()

        console.log(options)
    }

    _init() {
        // set initial accessibility attributes
        if (this._targetEl) {
            this._targetEl.setAttribute('aria-hidden', 'true')
            this._targetEl.classList.add('transition-transform')
        }

        this._getPlacementClasses().base.map(c => {
            this._targetEl.classList.add(c)
        })

        // hide by default
        this.hide()
    }

    hide() {
        this._getPlacementClasses().toggle.map(c => {
            this._targetEl.classList.add(c)
        })
        setTimeout(() => {
            this._targetEl.classList.add('invisible')
        }, 250)

        // set accessibility attributes
        this._targetEl.setAttribute('aria-hidden', 'true')
        this._targetEl.removeAttribute('aria-modal')
        this._targetEl.removeAttribute('role')

        // enable body scroll
        document.body.classList.remove('overflow-hidden')

        // destroy backdrop
        this._destroyBackdropEl()

        this._visible = false

        // callback function
        this._options.onHide(this)
    }

    show() {
        // show backdrop
        this._createBackdrop()

        this._targetEl.classList.remove('invisible')
        this._getPlacementClasses().toggle.map(c => {
            this._targetEl.classList.remove(c)
        })

        // set accessibility attributes
        this._targetEl.setAttribute('aria-modal', 'true')
        this._targetEl.setAttribute('role', 'dialog')
        this._targetEl.removeAttribute('aria-hidden')

        // disable body scroll
        document.body.classList.add('overflow-hidden')

        this._visible = true

        // callback function
        this._options.onShow(this)
    }

    toggle() {
        if (this._visible) {
            this.hide()
        } else {
            this.show()
        }
    }

    _createBackdrop() {
        if (!this._visible) {
            const backdropEl = document.createElement('div');
            backdropEl.setAttribute('drawer-backdrop', '');
            backdropEl.classList.add(...this._options.backdropClasses.split(" "));
            document.querySelector('body').append(backdropEl);
            backdropEl.addEventListener('click', () => {
                this.hide()
            })
        }
    }

    _destroyBackdropEl() {
        if (this._visible) {
            document.querySelector('[drawer-backdrop]').remove();
        }
    }

    _getPlacementClasses() {
        console.log(this._options.placement)
        switch (this._options.placement) {
            case 'top':
                return {
                    base: ['top-0', 'w-full'],
                    toggle: ['-translate-y-full', 'invisible']
                }
            case 'right':
                return {
                    base: ['right-0', 'top-0', 'h-screen'],
                    toggle: ['translate-x-full', 'invisible']
                }
            case 'bottom':
                return {
                    base: ['bottom-0', 'w-full'],
                    toggle: ['translate-y-full', 'invisible']
                }
            case 'left':
                return {
                    base: ['left-0', 'top-0', 'h-screen'],
                    toggle: ['-translate-x-full']
                }
            default:
                return {
                    base: ['left-0', 'top-0', 'h-screen'],
                    toggle: ['-translate-x-full', 'invisible']
                }
        }
    }
}

window.Drawer = Drawer;

const getDrawerInstance = (id, instances) => {
    if (instances.some(drawerInstance => drawerInstance.id === id)) {
        return instances.find(drawerInstance => drawerInstance.id === id)
    }
    return false
}

function initDrawer() {
    let drawerInstances = []
    document.querySelectorAll('[data-drawer-toggle]').forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-drawer-toggle'))
        const placement = triggerEl.getAttribute('data-drawer-placement')
        const drawerId = targetEl.id

        let drawer = null
        if (getDrawerInstance(drawerId, drawerInstances)) {
            modal = getDrawerInstance(drawerId, drawerInstances)
            drawer = drawer.object
        } else {
            drawer = new Drawer(targetEl, {
                placement: placement ? placement : Default.placement
            })
            drawerInstances.push({
                id: drawerId,
                object: drawer
            })
        }

        triggerEl.addEventListener('click', () => {
            drawer.show()
        })
    })
    document.querySelectorAll('[data-drawer-dismiss]').forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-drawer-dismiss'))
        const drawerId = targetEl.id
        const drawer = getDrawerInstance(drawerId, drawerInstances)

        triggerEl.addEventListener('click', () => {
            drawer.object.hide()
        })
    })
}

if (document.readyState !== 'loading') {
    // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDrawer()
} else {
    // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener('DOMContentLoaded', initDrawer)
}

export default Drawer
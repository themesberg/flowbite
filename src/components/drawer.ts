import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

interface DrawerOptions {
    triggerEl?: Element,
    placement?: string,
    bodyScrolling?: boolean,
    backdrop?: boolean,
    edge?: boolean,
    edgeOffset?: string,
    backdropClasses?: string,
    onShow?(callback: any): any,
    onHide?(callback: any): any,
    onToggle?(callback: any): any,
}

const defaultOptions: DrawerOptions = {
    placement: 'left',
    bodyScrolling: false,
    backdrop: true,
    edge: false,
    edgeOffset: getPrefixedClassNames('%p%bottom-[60px]'),
    backdropClasses: getPrefixedClassNames('%p%bg-gray-900 %p%bg-opacity-50 dark:%p%bg-opacity-80 %p%fixed %p%inset-0 %p%z-30'),
    onShow: () => { },
    onHide: () => { },
    onToggle: () => { }
}

class Drawer {

    _targetEl: Element
    _options: DrawerOptions
    _visible: boolean

    constructor(targetEl: Element, options: DrawerOptions) {
        this._targetEl = targetEl
        this._options = { ...defaultOptions, ...options }
        this._visible = false
        this._init()
    }

    _init() {
        // set initial accessibility attributes
        if (this._targetEl) {
            this._targetEl.setAttribute('aria-hidden', 'true')
            this._targetEl.classList.add(getPrefixedClassName('%p%transition-transform'))
        }

        // set base placement classes
        this._getPlacementClasses(this._options.placement).base.map(c => {
            this._targetEl.classList.add(getPrefixedClassName(`%p%${c}`))
        })

        // hide by default
        this.hide()
    }

    isVisible() {
        return this._visible
    }

    hide() {
        // based on the edge option show placement classes
        if (this._options.edge) {
            this._getPlacementClasses(this._options.placement + '-edge').active.map(c => {
                this._targetEl.classList.remove(getPrefixedClassName(`%p%${c}`))
            })
            this._getPlacementClasses(this._options.placement + '-edge').inactive.map(c => {
                this._targetEl.classList.add(getPrefixedClassName(`%p%${c}`))
            })
        } else {
            this._getPlacementClasses(this._options.placement).active.map(c => {
                this._targetEl.classList.remove(getPrefixedClassName(`%p%${c}`))
            })
            this._getPlacementClasses(this._options.placement).inactive.map(c => {
                this._targetEl.classList.add(getPrefixedClassName(`%p%${c}`))
            })
        }

        // set accessibility attributes
        this._targetEl.setAttribute('aria-hidden', 'true')
        this._targetEl.removeAttribute('aria-modal')
        this._targetEl.removeAttribute('role')

        // enable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.remove(getPrefixedClassName('%p%overflow-hidden'))
        }

        // destroy backdrop
        if (this._options.backdrop) {
            this._destroyBackdropEl()
        }

        this._visible = false

        // callback function
        this._options.onHide(this)
    }

    show() {
        if (this._options.edge) {
            this._getPlacementClasses(this._options.placement + '-edge').active.map(c => {
                this._targetEl.classList.add(getPrefixedClassName(`%p%${c}`))
            })
            this._getPlacementClasses(this._options.placement + '-edge').inactive.map(c => {
                this._targetEl.classList.remove(getPrefixedClassName(`%p%${c}`))
            })
        } else {
            this._getPlacementClasses(this._options.placement).active.map(c => {
                this._targetEl.classList.add(getPrefixedClassName(`%p%${c}`))
            })
            this._getPlacementClasses(this._options.placement).inactive.map(c => {
                this._targetEl.classList.remove(getPrefixedClassName(`%p%${c}`))
            })
        }

        // set accessibility attributes
        this._targetEl.setAttribute('aria-modal', 'true')
        this._targetEl.setAttribute('role', 'dialog')
        this._targetEl.removeAttribute('aria-hidden')

        // disable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.add(getPrefixedClassName('%p%overflow-hidden'))
        }

        // show backdrop
        if (this._options.backdrop) {
            this._createBackdrop()
        }

        this._visible = true

        // callback function
        this._options.onShow(this)
    }

    toggle() {
        if (this.isVisible()) {
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

    _getPlacementClasses(placement: string) {
        switch (placement) {
            case 'top':
                return {
                    base: [getPrefixedClassName('%p%top-0'), getPrefixedClassName('%p%left-0'), getPrefixedClassName('%p%right-0')],
                    active: [getPrefixedClassName('%p%transform-none')],
                    inactive: [getPrefixedClassName('-%p%translate-y-full')]
                }
            case 'right':
                return {
                    base: [getPrefixedClassName('%p%right-0'), getPrefixedClassName('%p%top-0')],
                    active: [getPrefixedClassName('%p%transform-none')],
                    inactive: [getPrefixedClassName('%p%translate-x-full')]
                }
            case 'bottom':
                return {
                    base: [getPrefixedClassName('%p%bottom-0'), getPrefixedClassName('%p%left-0'), getPrefixedClassName('%p%right-0')],
                    active: [getPrefixedClassName('%p%transform-none')],
                    inactive: [getPrefixedClassName('%p%translate-y-full')]
                }
            case 'left':
                return {
                    base: [getPrefixedClassName('%p%left-0'), getPrefixedClassName('%p%top-0')],
                    active: [getPrefixedClassName('%p%transform-none')],
                    inactive: [getPrefixedClassName('-%p%translate-x-full')]
                }
            case 'bottom-edge':
                return {
                    base: [getPrefixedClassName('%p%left-0'), getPrefixedClassName('%p%top-0')],
                    active: [getPrefixedClassName('%p%transform-none')],
                    inactive: [getPrefixedClassName('%p%translate-y-full'), this._options.edgeOffset]
                }
            default:
                return {
                    base: [getPrefixedClassName('%p%left-0'), getPrefixedClassName('%p%top-0')],
                    active: [getPrefixedClassName('%p%transform-none')],
                    inactive: [getPrefixedClassName('-translate-x-full')]
                }
        }
    }
}

window.Drawer = Drawer;

const getDrawerInstance = (id: string, instances: drawerInstance[]) => {
    if (instances.some(drawerInstance => drawerInstance.id === id)) {
        return instances.find(drawerInstance => drawerInstance.id === id)
    }
    return null
}

interface drawerInstance {
    id: string,
    object: Drawer
}

const initDrawer = (selectors: selectorOptions) => {
    let drawerInstances: drawerInstance[] = []
    document.querySelectorAll(`[${selectors.target}]`).forEach(triggerEl => {
        // mandatory
        const targetEl = document.getElementById(triggerEl.getAttribute(selectors.target))
        const drawerId = targetEl.id

        // optional
        const placement = triggerEl.getAttribute(selectors.placement)
        const bodyScrolling = triggerEl.getAttribute(selectors.bodyScrolling)
        const backdrop = triggerEl.getAttribute(selectors.backdrop)
        const edge = triggerEl.getAttribute(selectors.edge)
        const edgeOffset = triggerEl.getAttribute(selectors.edgeOffset)

        const drawer = new Drawer(targetEl, {
            placement: placement ? placement : defaultOptions.placement,
            bodyScrolling: bodyScrolling ? bodyScrolling === 'true' ? true : false : defaultOptions.bodyScrolling,
            backdrop: backdrop ? backdrop === 'true' ? true : false : defaultOptions.backdrop,
            edge: edge ? edge === 'true' ? true : false : defaultOptions.edge,
            edgeOffset: edgeOffset ? edgeOffset : defaultOptions.edgeOffset
        })
        drawerInstances.push({
            id: drawerId,
            object: drawer
        })
    })

    document.querySelectorAll(`[${selectors.toggle}]`).forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute(selectors.toggle))
        const drawerId = targetEl.id
        const drawer = getDrawerInstance(drawerId, drawerInstances)

        triggerEl.addEventListener('click', () => {
            if (drawer.object.isVisible()) {
                drawer.object.hide()
            } else {
                drawer.object.show()
            }
        })
    })

    document.querySelectorAll(`[${selectors.dismiss}]`).forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute(selectors.dismiss))
        const drawerId = targetEl.id
        const drawer = getDrawerInstance(drawerId, drawerInstances)

        triggerEl.addEventListener('click', () => {
            drawer.object.hide()
        })
    })

    document.querySelectorAll(`[${selectors.show}]`).forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute(selectors.show))
        const drawerId = targetEl.id
        const drawer = getDrawerInstance(drawerId, drawerInstances)

        triggerEl.addEventListener('click', () => {
            drawer.object.show()
        })
    })
}

interface selectorOptions {
    [key: string]: string
}

const selectorValues: selectorOptions = {
    target: 'drawer-target',
    toggle: 'drawer-toggle',
    dismiss: 'drawer-dismiss',
    show: 'drawer-show',
    placement: 'drawer-placement',
    bodyScrolling: 'drawer-body-scrolling',
    backdrop: 'drawer-backdrop',
    edge: 'drawer-edge',
    edgeOffset: 'drawer-edge-offset'
}

const baseSelectors = getPrefixedDataAttributes(selectorValues, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectorValues, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
    // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDrawer(baseSelectors)
    initDrawer(prefixSelectors)
} else {
    // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener('DOMContentLoaded', () => { initDrawer(baseSelectors) })
    document.addEventListener('DOMContentLoaded', () => { initDrawer(prefixSelectors) })
}

export default Drawer

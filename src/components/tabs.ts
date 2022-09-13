import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

const Default = {
    defaultTabId: null,
    activeClasses: getPrefixedClassNames('%p%text-blue-600 hover:%p%text-blue-600 dark:%p%text-blue-500 dark:hover:%p%text-blue-500 %p%border-blue-600 dark:%p%border-blue-500'),
    inactiveClasses: getPrefixedClassNames('dark:%p%border-transparent %p%text-gray-500 hover:%p%text-gray-600 dark:%p%text-gray-400 %p%border-gray-100 hover:%p%border-gray-300 dark:%p%border-gray-700 dark:hover:%p%text-gray-300'),
    onShow: () => { }
}

class Tabs {
    constructor(items = [], options = {}) {
        this._items = items
        this._activeTab = options ? this.getTab(options.defaultTabId) : null
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        if (this._items.length) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this._setActiveTab(this._items[0])
            }

            // force show the first default tab
            this.show(this._activeTab.id, true)

            // show tab content based on click
            this._items.map(tab => {
                tab.triggerEl.addEventListener('click', () => {
                    this.show(tab.id)
                })
            })
        }
    }

    getActiveTab() {
        return this._activeTab
    }

    _setActiveTab(tab) {
        this._activeTab = tab
    }

    getTab(id) {
        return this._items.filter(t => t.id === id)[0]
    }

    show(id, forceShow = false) {
        const tab = this.getTab(id)

        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return
        }

        // hide other tabs
        this._items.map(t => {
            if (t !== tab) {
                t.triggerEl.classList.remove(...this._options.activeClasses.split(" "));
                t.triggerEl.classList.add(...this._options.inactiveClasses.split(" "));
                t.targetEl.classList.add(getPrefixedClassName('%p%hidden'))
                t.triggerEl.setAttribute('aria-selected', false)
            }
        })

        // show active tab
        tab.triggerEl.classList.add(...this._options.activeClasses.split(" "));
        tab.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "));
        tab.triggerEl.setAttribute('aria-selected', true)
        tab.targetEl.classList.remove(getPrefixedClassName('%p%hidden'))

        this._setActiveTab(tab)

        // callback function
        this._options.onShow(this, tab)
    }

}

window.Tabs = Tabs;

const initTabs = (selectors) => {
    document.querySelectorAll(`[${selectors.main}]`).forEach(triggerEl => {

        const tabElements = []
        let defaultTabId = null
        triggerEl.querySelectorAll('[role="tab"]').forEach(el => {
            const isActive = el.getAttribute('aria-selected') === 'true'
            const tab = {
                id: el.getAttribute(selectors.target),
                triggerEl: el,
                targetEl: document.querySelector(el.getAttribute(selectors.target))
            }
            tabElements.push(tab)

            if (isActive) {
                defaultTabId = tab.id
            }
        })
        new Tabs(tabElements, {
            defaultTabId: defaultTabId
        })
    })
}

const selectors = {
	main: 'tabs-toggle',
	target: 'tabs-target'
}

const baseSelectors = getPrefixedDataAttributes(selectors, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectors, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initTabs(baseSelectors)
	initTabs(prefixSelectors)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initTabs(baseSelectors))
	document.addEventListener('DOMContentLoaded', initTabs(prefixSelectors))
}

export default Tabs
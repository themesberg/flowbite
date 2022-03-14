const Default = {
    onShow: () => { }
}

class Tabs {
    constructor(tabs = [], activeTabID = null, options = {}) {
        this._tabs = tabs
        this._activeTab = activeTabID ? this.getTabByID(activeTabID) : null
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        if (this._tabs.length) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this._setActiveTab(this._tabs[0])
            }

            // force show the first default tab
            this.show(this._activeTab.id, true)

            // show tab content based on click
            this._tabs.map(tab => {
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

    getTabByID(id) {
        return this._tabs.filter(t => t.id === id)[0]
    }

    show(id, forceShow = false) {
        const tab = this.getTabByID(id)

        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return
        }

        // hide other tabs
        this._tabs.map(t => {
            if (t !== tab) {
                t.triggerEl.classList.remove('active')
                t.contentEl.classList.add('hidden')
                t.triggerEl.setAttribute('aria-selected', false)
            }
        })

        // show active tab
        tab.triggerEl.classList.add('active')
        tab.triggerEl.setAttribute('aria-selected', true)
        tab.contentEl.classList.remove('hidden')

        this._setActiveTab(tab)

        // callback function
        this._options.onShow()
    }

}

window.Tabs = Tabs;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tabs-toggle]').forEach(triggerEl => {

        const tabElements = []
        let activeTabID = null
        triggerEl.querySelectorAll('[role="tab"]').forEach(el => {
            const isActive = el.getAttribute('aria-selected') === 'true'
            const tab = {
                id: el.getAttribute('data-tabs-target'),
                triggerEl: el,
                contentEl: document.querySelector(el.getAttribute('data-tabs-target'))
            }
            tabElements.push(tab)

            if (isActive) {
                activeTabID = tab.id
            }
        })

        const tabs = new Tabs(tabElements, activeTabID, {
            onShow: () => {
                console.log('tab is shown')
            }
        })
        console.log(tabs)
    })
})

export default Tabs
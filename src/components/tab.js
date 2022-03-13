const Default = {
}

class Tab {
    constructor(targetElement = null, triggerElement = null, options = {}) {
        this._targetEl = targetElement
        this._triggerEl = triggerElement
        this._options = { ...Default, ...options }
        this._tabs = []
        this._activeTab = null
        this._init()
    }

    _init() {
        this._triggerEl.querySelectorAll('[role="tab"]').forEach(el => {
            const isActive = el.getAttribute('aria-selected') === 'true'
            const tab = {
                triggerEl: el,
                contentEl: document.querySelector(el.getAttribute('data-tabs-target')),
                active: isActive ? true : false
            }
            this._tabs.push(tab)
        })

        // set active tab, by default first
        if (this._tabs.filter(t => t.active)[0]) {
            this._setActiveTab(this._tabs.filter(t => t.active)[0])
        } else {
            this._setActiveTab(this._tabs[0])
        }

        // show default active tab
       this.show(this._activeTab)

       // show tab content based on click
        this._tabs.map(tab => {
            tab.triggerEl.addEventListener('click', () => {
                this.show(tab)
            })
        })
    }

    _setActiveTab(tab) {
        this._activeTab = tab
        this._tabs.map(t => {
            if (t === tab) {
                t.active = true
            }
            t.active = false
        })
    }

    show(tab) {
        // don't do anything if already active
        if (tab.active) {
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
    }

}

window.Tab = Tab;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tabs-toggle]').forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-tabs-toggle'))
        const tab = new Tab(targetEl, triggerEl)
        console.log(tab)
    })
})

export default Tab
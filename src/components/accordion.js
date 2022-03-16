const Default = {
    alwaysOpen: false,
    activeClasses: ['bg-gray-100', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-white'],
    inactiveClasses: ['text-gray-500', 'dark:text-gray-400'],
    onOpen: () => { },
    onClose: () => { }
}

class Accordion {
    constructor(items = [], options = {}) {
        this._items = items
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        if (this._items.length) {
            // show accordion item based on click
            this._items.map(item => {

                if (item.active) {
                    this.open(item.id)
                }

                item.triggerEl.addEventListener('click', () => {
                    this.toggle(item.id)
                })
            })
        }
    }

    getItem(id) {
        return this._items.filter(item => item.id === id)[0]
    }

    open(id) {
        const item = this.getItem(id)

        // don't hide other accordions if always open
        if (!this._options.alwaysOpen) {
            this._items.map(i => {
                if (i !== item) {
                    i.triggerEl.classList.remove(...this._options.activeClasses)
                    i.triggerEl.classList.add(...this._options.inactiveClasses)
                    i.contentEl.classList.add('hidden')
                    i.triggerEl.setAttribute('aria-expanded', false)
                    i.active = false

                    // rotate icon if set
                    if (i.iconEl) {
                        i.iconEl.classList.remove('rotate-180')
                    }
                }
            })
        }


        // show active item
        item.triggerEl.classList.add(...this._options.activeClasses)
        item.triggerEl.classList.remove(...this._options.inactiveClasses)
        item.triggerEl.setAttribute('aria-expanded', true)
        item.contentEl.classList.remove('hidden')
        item.active = true

        // rotate icon if set
        if (item.iconEl) {
            item.iconEl.classList.add('rotate-180')
        }

        // callback function
        this._options.onOpen()
    }

    toggle(id) {
        const item = this.getItem(id)

        if (item.active) {
            this.close(id)
        } else {
            this.open(id)
        }
    }

    close(id) {
        const item = this.getItem(id)

        item.triggerEl.classList.remove(...this._options.activeClasses)
        item.triggerEl.classList.add(...this._options.inactiveClasses)
        item.contentEl.classList.add('hidden')
        item.triggerEl.setAttribute('aria-expanded', false)
        item.active = false

        // rotate icon if set
        if (item.iconEl) {
            item.iconEl.classList.remove('rotate-180')
        }

        // callback function
        this._options.onClose()
    }

}

window.Accordion = Accordion;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-accordion]').forEach(accordionEl => {

        const alwaysOpen = accordionEl.getAttribute('data-accordion')
        const activeClasses = accordionEl.getAttribute('data-active-classes') ? accordionEl.getAttribute('data-active-classes').split(" ") : []
        const inactiveClasses = accordionEl.getAttribute('data-inactive-classes') ? accordionEl.getAttribute('data-inactive-classes').split(" ") : []

        const items = []
        accordionEl.querySelectorAll('[data-accordion-target]').forEach(el => {
            const item = {
                id: el.getAttribute('data-accordion-target'),
                triggerEl: el,
                contentEl: document.querySelector(el.getAttribute('data-accordion-target')),
                iconEl: el.querySelector('[data-accordion-icon]'),
                active: el.getAttribute('aria-expanded') === 'true' ? true : false
            }
            items.push(item)
        })

        const accordion = new Accordion(items, {
            alwaysOpen: alwaysOpen === 'open' ? true : false,
            activeClasses: activeClasses.length ? activeClasses : [...Default.activeClasses],
            inactiveClasses: inactiveClasses.length ? inactiveClasses : [...Default.inactiveClasses],
            onOpen: () => {
                console.log('accordion item has been shown')
            },
            onClose: () => {
                console.log('accordion item has been hidden')
            }
        })
        console.log(accordion)
    })
})

export default Accordion
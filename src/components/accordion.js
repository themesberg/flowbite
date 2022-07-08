import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

const Default = {
	alwaysOpen: false,
	activeClasses: getPrefixedClassNames('%prefix%bg-gray-100 dark:%prefix%bg-gray-800 %prefix%text-gray-900 dark:%prefix%text-white'),
	inactiveClasses: getPrefixedClassNames('%prefix%text-gray-500 dark:%prefix%text-gray-400'),
	onOpen: () => { },
	onClose: () => { },	
	onToggle: () => { }
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
					i.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
					i.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
					i.targetEl.classList.add(getPrefixedClassName('%prefix%hidden'))
					i.triggerEl.setAttribute('aria-expanded', false)
					i.active = false

					// rotate icon if set
					if (i.iconEl) {
						i.iconEl.classList.remove(getPrefixedClassName('%prefix%rotate-180'))
					}
				}
			})
		}

		// show active item
		item.triggerEl.classList.add(...this._options.activeClasses.split(" "))
		item.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "))
		item.triggerEl.setAttribute('aria-expanded', true)
		item.targetEl.classList.remove(getPrefixedClassName('%prefix%hidden'))
		item.active = true

		// rotate icon if set
		if (item.iconEl) {
			item.iconEl.classList.add(getPrefixedClassName('%prefix%rotate-180'))
		}

		// callback function
		this._options.onOpen(this, item)
	}

	toggle(id) {
		const item = this.getItem(id)

		if (item.active) {
			this.close(id)
		} else {
			this.open(id)
		}

		// callback function
		this._options.onToggle(this, item)
	}

	close(id) {
		const item = this.getItem(id)

		item.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
		item.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
		item.targetEl.classList.add(getPrefixedClassName('%prefix%hidden'))
		item.triggerEl.setAttribute('aria-expanded', false)
		item.active = false

		// rotate icon if set
		if (item.iconEl) {
			item.iconEl.classList.remove(getPrefixedClassName('%prefix%rotate-180'))
		}

		// callback function
		this._options.onClose(this, item)
	}

}

window.Accordion = Accordion;

const initAccordion = (selectors) => {

	document.querySelectorAll(`[${selectors.main}]`).forEach(accordionEl => {

		const alwaysOpen = accordionEl.getAttribute(selectors.main)
		const activeClasses = accordionEl.getAttribute(selectors.active)
		const inactiveClasses = accordionEl.getAttribute(selectors.inactive)

		const items = []
		accordionEl.querySelectorAll(`[${selectors.target}]`).forEach(el => {
			const item = {
				id: el.getAttribute(selectors.target),
				triggerEl: el,
				targetEl: document.querySelector(el.getAttribute(selectors.target)),
				iconEl: el.querySelector(`[${selectors.icon}]`),
				active: el.getAttribute('aria-expanded') === 'true' ? true : false
			}
			items.push(item)
		})

		new Accordion(items, {
			alwaysOpen: alwaysOpen === 'open' ? true : false,
			activeClasses: activeClasses ? activeClasses : Default.activeClasses,
			inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
		})
	})
}

const selectors = {
	main: 'accordion',
	active: 'active-classes',
	inactive: 'inactive-classes',
	target: 'accordion-target',
	icon: 'accordion-icon'
}

const baseSelectors = getPrefixedDataAttributes(selectors, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectors, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initAccordion(baseSelectors)
	initAccordion(prefixSelectors)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initAccordion(baseSelectors))
	document.addEventListener('DOMContentLoaded', initAccordion(prefixSelectors))
}

export default Accordion
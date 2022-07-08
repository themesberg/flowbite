import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

const Default = {
    defaultPosition: 0,
    indicators: {
        items: [],
        activeClasses: getPrefixedClassNames('%prefix%bg-white dark:%prefix%bg-gray-800'),
        inactiveClasses: getPrefixedClassNames('%prefix%bg-white/50 dark:%prefix%bg-gray-800/50 hover:%prefix%bg-white dark:hover:%prefix%bg-gray-800')
    },
    interval: 3000,
    onNext: () => { },
    onPrev: () => { },
    onChange: () => { }
}

class Carousel {
    constructor(items = [], options = {}) {
        this._items = items
        this._options = { ...Default, ...options, indicators : { ...Default.indicators, ...options.indicators } }
        this._activeItem = this.getItem(this._options.defaultPosition)
        this._indicators = this._options.indicators.items
        this._interval = null
        this._init()

    }

    /**
     * Initialise carousel and items based on active one
     */
    _init() {
        this._items.map(item => {
            item.el.classList.add(...getPrefixedClassNames('%prefix%absolute %prefix%inset-0 %prefix%transition-all %prefix%transform').split(' '))
        })

        // if no active item is set then first position is default
        if (this._getActiveItem()) {
            this.slideTo(this._getActiveItem().position)
        } else {
            this.slideTo(0)
        }

        this._indicators.map((indicator, position) => {
            indicator.el.addEventListener('click', () => {
                this.slideTo(position)
            })
        })
    }

    getItem(position) {
        return this._items[position]
    }

    /**
     * Slide to the element based on id
     * @param {*} position 
     */
    slideTo(position) {
        const nextItem = this._items[position]
        const rotationItems = {
            'left': nextItem.position === 0 ? this._items[this._items.length - 1] : this._items[nextItem.position - 1],
            'middle': nextItem,
            'right': nextItem.position === this._items.length - 1 ? this._items[0] : this._items[nextItem.position + 1]
        }
        this._rotate(rotationItems)
        this._setActiveItem(nextItem.position)
        if (this._interval) {
            this.pause()
            this.cycle()
        }

        this._options.onChange(this)
    }

    /**
     * Based on the currently active item it will go to the next position
     */
    next() {
        const activeItem = this._getActiveItem()
        let nextItem = null

        // check if last item
        if (activeItem.position === this._items.length - 1) {
            nextItem = this._items[0]
        } else {
            nextItem = this._items[activeItem.position + 1]
        }

        this.slideTo(nextItem.position)

        // callback function
        this._options.onNext(this)
    }

    /**
     * Based on the currently active item it will go to the previous position
     */
    prev() {
        const activeItem = this._getActiveItem()
        let prevItem = null

        // check if first item
        if (activeItem.position === 0) {
            prevItem = this._items[this._items.length - 1]
        } else {
            prevItem = this._items[activeItem.position - 1]
        }

        this.slideTo(prevItem.position)

        // callback function
        this._options.onPrev(this)
    }

    /**
     * This method applies the transform classes based on the left, middle, and right rotation carousel items
     * @param {*} rotationItems 
     */
    _rotate(rotationItems) {
        // reset
        this._items.map(item => {
            item.el.classList.add(getPrefixedClassName('%prefix%hidden'))
        })

        // left item (previously active)
        rotationItems.left.el.classList.remove(...getPrefixedClassNames('-%prefix%translate-x-full %prefix%translate-x-full %prefix%translate-x-0 %prefix%hidden %prefix%z-20').split(' '))
        rotationItems.left.el.classList.add(...getPrefixedClassNames('-%prefix%translate-x-full %prefix%z-10').split(' '))

        // currently active item
        rotationItems.middle.el.classList.remove(...getPrefixedClassNames('-%prefix%translate-x-full %prefix%translate-x-full %prefix%translate-x-0 %prefix%hidden %prefix%z-10').split(' '))
        rotationItems.middle.el.classList.add(...getPrefixedClassNames('%prefix%translate-x-0 %prefix%z-20').split(' '))

        // right item (upcoming active)
        rotationItems.right.el.classList.remove(...getPrefixedClassNames('-%prefix%translate-x-full %prefix%translate-x-full %prefix%translate-x-0 %prefix%hidden %prefix%z-20').split(' '))
        rotationItems.right.el.classList.add(...getPrefixedClassNames('%prefix%translate-x-full %prefix%z-10').split(' '))
    }

    /**
     * Set an interval to cycle through the carousel items
     */
    cycle() {
        this._interval = setInterval(() => {
            this.next();
        }, this._options.interval)
    }

    /**
     * Clears the cycling interval
     */
    pause() {
        clearInterval(this._interval);
    }

    /**
     * Get the currently active item
     */
    _getActiveItem() {
        return this._activeItem
    }

    /**
     * Set the currently active item and data attribute
     * @param {*} position 
     */
    _setActiveItem(position) {
        this._activeItem = this._items[position]

        // update the indicators if available
        if (this._indicators.length) {
            this._indicators.map(indicator => {
                indicator.el.setAttribute('aria-current', 'false')
                indicator.el.classList.remove(...this._options.indicators.activeClasses.split(" "))
                indicator.el.classList.add(...this._options.indicators.inactiveClasses.split(" "))
            })
            this._indicators[position].el.classList.add(...this._options.indicators.activeClasses.split(" "))
            this._indicators[position].el.classList.remove(...this._options.indicators.inactiveClasses.split(" "))
            this._indicators[position].el.setAttribute('aria-current', 'true')
        }
    }

}

window.Carousel = Carousel;

const initCarousel = (selectors) => {
    document.querySelectorAll(`[${selectors.main}]`).forEach(carouselEl => {
        const interval = carouselEl.getAttribute(selectors.interval)
        const slide = carouselEl.getAttribute(selectors.main) === 'slide' ? true : false

        const items = []
        let defaultPosition = 0
        if (carouselEl.querySelectorAll(`[${selectors.item}]`).length) {
            [...carouselEl.querySelectorAll(`[${selectors.item}]`)].map((carouselItemEl, position) => {
                items.push({
                    position: position,
                    el: carouselItemEl
                })

                if (carouselItemEl.getAttribute(selectors.item) === 'active') {
                    defaultPosition = position
                }
            })
        }

        const indicators = [];
        if (carouselEl.querySelectorAll(`[${selectors.slide}]`).length) {
            [...carouselEl.querySelectorAll(`[${selectors.slide}]`)].map((indicatorEl) => {
                indicators.push({
                    position: indicatorEl.getAttribute(selectors.slide),
                    el: indicatorEl
                })
            })
        }

        const carousel = new Carousel(items, {
            defaultPosition: defaultPosition,
            indicators: {
                items: indicators
            },
            interval: interval ? interval : Default.interval
        })

        if (slide) {
            carousel.cycle();
        }

        // check for controls
        const carouselNextEl = carouselEl.querySelector(`[${selectors.next}]`)
        const carouselPrevEl = carouselEl.querySelector(`[${selectors.prev}]`)

        if (carouselNextEl) {
            carouselNextEl.addEventListener('click', () => {
                carousel.next()
            })
        }

        if (carouselPrevEl) {
            carouselPrevEl.addEventListener('click', () => {
                carousel.prev()
            })
        }

    })
}

const selectors = {
	main: 'carousel',
	interval: 'carousel-interval',
    item: 'carousel-item',
    slide: 'carousel-slide-to',
    next: 'carousel-next',
    prev: 'carousel-prev'
}

const baseSelectors = getPrefixedDataAttributes(selectors, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectors, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
	// DOMContentLoaded event were already fired. Perform explicit initialization now
	initCarousel(baseSelectors)
	initCarousel(prefixSelectors)
} else {
	// DOMContentLoaded event not yet fired, attach initialization process to it
	document.addEventListener('DOMContentLoaded', initCarousel(baseSelectors))
	document.addEventListener('DOMContentLoaded', initCarousel(prefixSelectors))
}

export default Carousel
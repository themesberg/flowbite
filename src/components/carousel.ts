import config from '../core/config'
import { getPrefixedDataAttributes } from '../helpers/data-attribute'
import { getPrefixedClassName, getPrefixedClassNames } from '../helpers/class-name'

interface carouselItem {
    position: number,
    el: Element
}

interface indicatorItem {
    position: number,
    el: Element
}

interface carouselOptions {
    defaultPosition?: number,
    interval?: number,
    indicators?: {
        items: indicatorItem[],
        activeClasses?: string,
        inactiveClasses?: string
    }
    onNext?(callback: any): any,
    onPrev?(callback: any): any,
    onChange?(callback: any): any,
}

interface rotationItemsInterface {
    left: carouselItem,
    middle: carouselItem,
    right: carouselItem
}

const defaultOptions: carouselOptions = {
    defaultPosition: 0,
    indicators: {
        items: [],
        activeClasses: getPrefixedClassNames('%p%bg-white dark:%p%bg-gray-800'),
        inactiveClasses: getPrefixedClassNames('%p%bg-white/50 dark:%p%bg-gray-800/50 hover:%p%bg-white dark:hover:%p%bg-gray-800')
    },
    interval: 0,
    onNext: () => { },
    onPrev: () => { },
    onChange: () => { }
}

class Carousel {
    _items: carouselItem[]
    _options: carouselOptions
    _activeItem: carouselItem
    _indicators: indicatorItem[]
    _interval: ReturnType<typeof setInterval>

    constructor(items: carouselItem[], options: carouselOptions) {
        this._items = items
        this._options = { ...defaultOptions, ...options, indicators: { ...defaultOptions.indicators, ...options.indicators } }
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
            item.el.classList.add(...getPrefixedClassNames('%p%absolute %p%inset-0 %p%transition-all %p%transform').split(' '))
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

    getItem(position: number) {
        return this._items[position]
    }

    /**
     * Slide to the element based on id
     * @param {*} position 
     */
    slideTo(position: number) {
        const nextItem = this._items[position]
        const rotationItems: rotationItemsInterface = {
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
    _rotate(rotationItems: rotationItemsInterface) {
        // reset
        this._items.map(item => {
            item.el.classList.add(getPrefixedClassName('%p%hidden'))
        })

        // left item (previously active)
        rotationItems.left.el.classList.remove(...getPrefixedClassNames('-%p%translate-x-full %p%translate-x-full %p%translate-x-0 %p%hidden %p%z-20').split(' '))
        rotationItems.left.el.classList.add(...getPrefixedClassNames('-%p%translate-x-full %p%z-10').split(' '))

        // currently active item
        rotationItems.middle.el.classList.remove(...getPrefixedClassNames('-%p%translate-x-full %p%translate-x-full %p%translate-x-0 %p%hidden %p%z-10').split(' '))
        rotationItems.middle.el.classList.add(...getPrefixedClassNames('%p%translate-x-0 %p%z-20').split(' '))

        // right item (upcoming active)
        rotationItems.right.el.classList.remove(...getPrefixedClassNames('-%p%translate-x-full %p%translate-x-full %p%translate-x-0 %p%hidden %p%z-20').split(' '))
        rotationItems.right.el.classList.add(...getPrefixedClassNames('%p%translate-x-full %p%z-10').split(' '))
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
    _setActiveItem(position: number) {
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

const initCarousel = (selectors: selectorOptions) => {
    document.querySelectorAll(`[${selectors.main}]`).forEach(carouselEl => {
        const interval = parseInt(carouselEl.getAttribute(selectors.interval))
        const slide = carouselEl.getAttribute(selectors.main) === 'slide' ? true : false

        const items: carouselItem[] = []
        let defaultPosition = 0
        if (carouselEl.querySelectorAll(`[${selectors.item}]`).length) {
            carouselEl.querySelectorAll(`[${selectors.item}]`).forEach((carouselItemEl, position) => {
                items.push({
                    position: position,
                    el: carouselItemEl
                })

                if (carouselItemEl.getAttribute(selectors.item) === 'active') {
                    defaultPosition = position
                }
            })
        }

        const indicators: indicatorItem[] = [];
        if (carouselEl.querySelectorAll(`[${selectors.slide}]`).length) {
            carouselEl.querySelectorAll(`[${selectors.slide}]`).forEach((indicatorEl) => {
                indicators.push({
                    position: parseInt(indicatorEl.getAttribute(selectors.slide)),
                    el: indicatorEl
                })
            })
        }

        const carousel = new Carousel(items, {
            defaultPosition: defaultPosition,
            indicators: {
                items: indicators
            },
            interval: interval ? interval : defaultOptions.interval
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

interface selectorOptions {
    [key: string]: string
}

const selectorValues: selectorOptions = {
    main: 'carousel',
    interval: 'carousel-interval',
    item: 'carousel-item',
    slide: 'carousel-slide-to',
    next: 'carousel-next',
    prev: 'carousel-prev'
}

const baseSelectors = getPrefixedDataAttributes(selectorValues, '') // we need this to make legacy selectors with no prefix work pre v1.5
const prefixSelectors = getPrefixedDataAttributes(selectorValues, config.getSelectorsPrefix())

if (document.readyState !== 'loading') {
    // DOMContentLoaded event were already fired. Perform explicit initialization now
    initCarousel(baseSelectors)
    initCarousel(prefixSelectors)
} else {
    // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener('DOMContentLoaded', () => initCarousel(baseSelectors))
    document.addEventListener('DOMContentLoaded', () => initCarousel(prefixSelectors))
}

export default Carousel
const Default = {
    indicators: [],
    interval: 3000,
    onNextSlide: () => { },
    onPrevSlide: () => { }
}

class Carousel {
    constructor(items = [], options = {}) {
        this._items = items
        this._indicators = options.indicators
        this._interval = null
        this._options = { ...Default, ...options }
        this._init()
    }


    /**
     * Initialise carousel and items based on active one
     */
    _init() {
        const activeItem = this._getActiveItem()
        this._items.map(item => {
            item.el.classList.add('absolute', 'inset-0', 'transition-all', 'transform')
        })
        this.slideTo(activeItem.position)

        this._indicators.map((indicator, position) => {
            indicator.el.addEventListener('click', () => {
                this.slideTo(position)
            })
        })
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
    }

    /**
     * Based on the currently active item it will go to the next position
     */
    nextSlide() {
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
        this._options.onNextSlide()
    }

    /**
     * Based on the currently active item it will go to the previous position
     */
    prevSlide() {
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
        this._options.onPrevSlide()
    }

    /**
     * This method applies the transform classes based on the left, middle, and right rotation carousel items
     * @param {*} rotationItems 
     */
    _rotate(rotationItems) {
        // reset
        this._items.map(item => {
            item.el.classList.add('hidden')
        })

        // left item (previously active)
        rotationItems.left.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden')
        rotationItems.left.el.classList.add('-translate-x-full')

        // currently active item
        rotationItems.middle.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden')
        rotationItems.middle.el.classList.add('translate-x-0')

        // right item (upcoming active)
        rotationItems.right.el.classList.remove('-translate-x-full', 'translate-x-full', 'translate-x-0', 'hidden')
        rotationItems.right.el.classList.add('translate-x-full')
    }

    /**
     * Set an interval to cycle through the carousel items
     */
    cycle() {
        this._interval = setInterval(() => {
            this.nextSlide();
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
        return this._items.filter(item => item.active)[0]
    }

    /**
     * Set the currently active item and data attribute
     * @param {*} position 
     */
    _setActiveItem(position) {
        this._items.map(item => {
            item.active = false
            item.el.setAttribute('data-carousel-item', '')
        })

        this._items[position].active = true
        this._items[position].el.setAttribute('data-carousel-item', 'active')

        // update the indicators if available
        if (this._indicators.length) {
            this._indicators.map(indicator => {
                indicator.el.setAttribute('aria-current', 'false')
                indicator.el.classList.remove('bg-white', 'dark:bg-gray-800')
                indicator.el.classList.add('bg-white/50', 'dark:bg-gray-800/50')

            })
            this._indicators[position].el.classList.add('bg-white', 'dark:bg-gray-800')
            this._indicators[position].el.classList.remove('bg-white/50', 'dark:bg-gray-800/50')
            this._indicators[position].el.setAttribute('aria-current', 'true')
        }
    }

}

window.Carousel = Carousel;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-carousel]').forEach(carouselEl => {
        const interval = carouselEl.getAttribute('data-carousel-interval')
        const slide = carouselEl.getAttribute('data-carousel') === 'slide' ? true : false

        const items = [];
        if (carouselEl.querySelectorAll('[data-carousel-item]').length) {
            [...carouselEl.querySelectorAll('[data-carousel-item]')].map((carouselItemEl, position) => {
                items.push({
                    position: position,
                    el: carouselItemEl,
                    active: carouselItemEl.getAttribute('data-carousel-item') === 'active' ? true : false
                })
            })
        }

        const indicators = [];
        if (carouselEl.querySelectorAll('[data-carousel-slide-to]').length) {
            [...carouselEl.querySelectorAll('[data-carousel-slide-to]')].map((indicatorEl, position) => {
                indicators.push({
                    position: position,
                    el: indicatorEl
                })
            })
        }

        const carousel = new Carousel(items, {
            indicators: indicators.length ? indicators : Default.indicators,
            interval: interval ? interval : Default.interval
        })

        if (slide) {
            carousel.cycle();
        }

        // check for controls
        const carouselNextEl = carouselEl.querySelector('[data-carousel-next]')
        const carouselPrevEl = carouselEl.querySelector('[data-carousel-prev]')

        if (carouselNextEl) {
            carouselNextEl.addEventListener('click', () => {
                carousel.nextSlide()
            })
        }

        if (carouselPrevEl) {
            carouselPrevEl.addEventListener('click', () => {
                carousel.prevSlide()
            })
        }

    })
})

export default Carousel
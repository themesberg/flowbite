document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-carousel]').forEach(function (carouselEl) {
        const interval = carouselEl.getAttribute('data-carousel-interval')
        const slide = carouselEl.getAttribute('data-carousel') === 'slide' ? true : false

        const carousel = new Carousel(carouselEl.getAttribute('id'), {
            interval
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

        // check for indicators
        carouselEl.querySelectorAll('[data-carousel-slide-to]').forEach(slideToEl => {
            slideToEl.addEventListener('click', () => {
                const id = slideToEl.getAttribute('data-carousel-slide-to')
                carousel.slideTo(id)

            })
        })

    })
})

const Default = {
    interval: 3000
}

class Carousel {
    constructor(id, options) {
        this._el = document.getElementById(id)
        this._items = [...this._el.querySelectorAll('[data-carousel-item]')].length ? [...this._el.querySelectorAll('[data-carousel-item]')].map((el, id) => {
            return { id, el, active: el.getAttribute(['data-carousel-item']) === 'active' ? true : false }
        }) : []
        this._indicators = [...this._el.querySelectorAll('[data-carousel-slide-to]')].length ? [...this._el.querySelectorAll('[data-carousel-slide-to]')].map((el, id) => {
            return { id, el}
        }) : []
        this._interval = null
        this._intervalDuration = options.interval ? options.interval : Default.interval
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
        this.slideTo(activeItem.id)
    }

    /**
     * Slide to the element based on id
     * @param {*} id 
     */
    slideTo(id) {
        const nextItem = this._items[id]
        const rotationItems = {
            'left': nextItem.id === 0 ? this._items[this._items.length - 1] : this._items[nextItem.id - 1],
            'middle': nextItem,
            'right': nextItem.id === this._items.length - 1 ? this._items[0] : this._items[nextItem.id + 1]
        }
        this._rotate(rotationItems)
        this._setActiveItem(nextItem.id)
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
        if (activeItem.id === this._items.length - 1) {
            nextItem = this._items[0]
        } else {
            nextItem = this._items[activeItem.id + 1]
        }

        this.slideTo(nextItem.id)
    }

    /**
     * Based on the currently active item it will go to the previous position
     */
    prevSlide() {
        const activeItem = this._getActiveItem()
        let prevItem = null

        // check if first item
        if (activeItem.id === 0) {
            prevItem = this._items[this._items.length - 1]
        } else {
            prevItem = this._items[activeItem.id - 1]
        }

        this.slideTo(prevItem.id)
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
    cycle(intervalDuration) {

        if (intervalDuration) {
            this._intervalDuration = intervalDuration
        }

        this._interval = setInterval(() => {
            this.nextSlide();
        }, this._intervalDuration)
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
     * @param {*} id 
     */
    _setActiveItem(id) {
        this._items.map(item => {
            item.active = false
            item.el.setAttribute('data-carousel-item', '')
            if (item.id === id) {
                item.active = true
                item.el.setAttribute('data-carousel-item', 'active')
            }
        })

        // update the indicators if available
        this._indicators.map(indicator => {
            indicator.el.setAttribute('aria-current', 'false')
            indicator.el.classList.remove('bg-white', 'dark:bg-gray-800')
            indicator.el.classList.add('bg-white/50', 'dark:bg-gray-800/50')

            if (indicator.id === id) {
                indicator.el.classList.add('bg-white', 'dark:bg-gray-800')
                indicator.el.classList.remove('bg-white/50', 'dark:bg-gray-800/50')
                indicator.el.setAttribute('aria-current', 'true')
            }
        })

    }

}

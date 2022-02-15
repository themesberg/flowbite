document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-carousel]').forEach(function (carouselEl) {
        const interval = carouselEl.getAttribute('data-carousel-interval')
        const slide = carouselEl.getAttribute('data-carousel') === 'slide' ? true : false

        const carousel = new Carousel(carouselEl.getAttribute('id'), {
            interval
        })

        // if (slide) {
        //     carousel.cycle();
        // }

        const carouselNextEl = carouselEl.querySelector('[data-carousel-next]')
        const carouselPrevEl = carouselEl.querySelector('[data-carousel-prev]')

        carouselNextEl.addEventListener('click', () => {
            carousel.nextSlide()
        })

        carouselPrevEl.addEventListener('click', () => {
            carousel.prevSlide()
        })

    })
})

const Default = {
    interval: 3000
}

class Carousel {
    constructor(id, options) {
        this._el = document.getElementById(id)
        this._items = [...this._el.querySelectorAll('[data-carousel-item]')].map((el, id) => {
            return { id, el, active: el.getAttribute(['data-carousel-item']) === 'active' ? true : false }
        })
        this._interval = null
        this._intervalDuration = options.interval ? options.interval : Default.interval
        this._init()
    }

    _init() {
        const activeItem = this._getActiveItem()
        const rotationItems = {
            'left':  activeItem.id === 0 ? this._items[this._items.length - 1] : this._items[activeItem.id - 1],
            'middle': activeItem,
            'right': activeItem.id === this._items.length - 1 ? this._items[0] : this._items[activeItem.id + 1]
        }
        this._items.map(item => {
            item.el.classList.add('absolute', 'inset-0', 'transition-all', 'transform')
        })
        this._rotate(rotationItems)
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

        const rotationItems = {
            'left': this._getActiveItem(),
            'middle': nextItem,
            'right': nextItem.id === this._items.length - 1 ? this._items[0] : this._items[nextItem.id + 1]
        }

        this._rotate(rotationItems)
        this._setActiveItem(nextItem.id)
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

        const rotationItems = {
            'left': prevItem.id === 0 ? this._items[this._items.length - 1] : this._items[prevItem.id - 1],
            'middle': prevItem,
            'right': this._getActiveItem()
        }

        this._rotate(rotationItems)
        this._setActiveItem(prevItem.id)
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

    cycle() {
        this._interval = setInterval(() => {
            this.nextSlide();
        }, this._intervalDuration)
    }

    pause() {
        clearInterval(this._interval);
    }

    _getActiveItem() {
        return this._items.filter(item => item.active)[0]
    }

    _setActiveItem(id) {
        this._items.map(item => {
            item.active = false
            item.el.setAttribute('data-carousel-item', '')
            if (item.id === id) {
                item.active = true
                item.el.setAttribute('data-carousel-item', 'active')
            }
        })
    }

}

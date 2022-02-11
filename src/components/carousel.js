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
    }

    nextSlide() {
        console.log('next slide')

        const activeItem = this.getActiveItem()
        let nextItem = null

        // check if last item
        if (activeItem.id === this._items.length - 1) {
            nextItem = this._items[0]
        } else {
            nextItem = this._items[activeItem.id + 1]
        }

        console.log(nextItem.id)
        const rotationItems = {
            'left': this.getActiveItem(),
            'middle': nextItem,
            'right': nextItem.id === this._items.length - 1 ? this._items[0] : this._items[nextItem.id + 1]
        }

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

        this.setActiveItem(nextItem.id)

        console.log(rotationItems)
    }

    prevSlide() {
        console.log('prev slide')

        const activeItem = this.getActiveItem()
        let prevItem = null

        activeItem.el.classList.remove('translate-x-0')
        activeItem.el.classList.add('translate-x-full')

        // check if last item
        if (activeItem.id === 0) {
            prevItem = this._items[this._items.length - 1]
        } else {
            prevItem = this._items[activeItem.id - 1]
        }

        console.log(this._items)

        this.setActiveItem(prevItem.id)
    }

    cycle() {
        this._interval = setInterval(() => {
            this.nextSlide();
        }, this._intervalDuration)
    }

    pause() {
        clearInterval(this._interval);
    }

    getActiveItem() {
        return this._items.filter(item => item.active)[0]
    }

    setActiveItem(id) {
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

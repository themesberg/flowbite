import { createPopper } from '@popperjs/core';

const Default = {
    placement: 'top',
    triggerType: 'hover',
    offset: 0,
    onShow: () => { },
    onHide: () => { }
}

class BasePopper {
  constructor(targetElement = null, triggerElement = null, options = {}) {
    this._targetEl = targetElement
    this._triggerEl = triggerElement
    this._options = { ...Default, ...options }
    this._popperInstance = this._createPopperInstace()
    this._init()
  }

  _init() {
    if (this._triggerEl) {
        const triggerEvents = this._getTriggerEvents()
        triggerEvents.showEvents.forEach(ev => {
            this._triggerEl.addEventListener(ev, () => {
                this.show()
            })
        })
        triggerEvents.hideEvents.forEach(ev => {
            this._triggerEl.addEventListener(ev, () => {
                this.hide()
            })
        })
    }
  }

  _createPopperInstace() {
      return createPopper(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
              {
                  name: 'offset',
                  options: {
                      offset: [0, this._options.offset],
                  },
              },
          ],
      });
  }

  _getTriggerEvents() {
      switch (this._options.triggerType) {
          case 'hover':
              return {
                  showEvents: ['mouseenter', 'focus'],
                  hideEvents: ['mouseleave', 'blur']
              }
          case 'click':
              return {
                  showEvents: ['click', 'focus'],
                  hideEvents: ['focusout', 'blur']
              }
          default:
              return {
                  showEvents: ['mouseenter', 'focus'],
                  hideEvents: ['mouseleave', 'blur']
              }
      }
  }

  show() {
      this._targetEl.classList.remove('opacity-0', 'invisible')
      this._targetEl.classList.add('opacity-100', 'visible')

      // Enable the event listeners
      this._popperInstance.setOptions(options => ({
          ...options,
          modifiers: [
              ...options.modifiers,
              { name: 'eventListeners', enabled: true },
          ],
      }));

      // Update its position
      this._popperInstance.update()

      // callback function
      this._options.onShow(this)
  }

  hide() {
      this._targetEl.classList.remove('opacity-100', 'visible')
      this._targetEl.classList.add('opacity-0', 'invisible')

      // Disable the event listeners
      this._popperInstance.setOptions(options => ({
          ...options,
          modifiers: [
              ...options.modifiers,
              { name: 'eventListeners', enabled: false },
          ],
      }));

      // callback function
      this._options.onHide(this)
  }
}

export default BasePopper
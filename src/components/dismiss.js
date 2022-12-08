const Default = {
    triggerEl: null,
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
    onHide: () => { }
};

class Dismiss {
    constructor(targetEl = null, options = {}) {
        this._targetEl = targetEl;
        this._triggerEl = options.triggerEl || Default.triggerEl;
        this._options = { ...Default, ...options };
        this._init();
    }

    _init() {
        if (this._triggerEl) {
            this._triggerEl.addEventListener('click', () => {
                this.hide();
            });
        }
    }

    hide() {
        this._targetEl.classList.add(
            this._options.transition,
            `duration-${this._options.duration}`,
            this._options.timing,
            'opacity-0'
        );
        setTimeout(() => {
            this._targetEl.classList.add('hidden');
        }, this._options.duration);

        // callback function
        this._options.onHide(this, this._targetEl);
    }
}

window.Dismiss = Dismiss;

function initDismiss() {
    document.querySelectorAll('[data-dismiss-target]').forEach(triggerEl => {
        const targetEl = document.querySelector(
            triggerEl.getAttribute('data-dismiss-target')
        );
        new Dismiss(targetEl, {
            triggerEl
        });
    });
}

const windowEventListeners = ['load'];

// add "turbo:load" event listener if Turbo is enabled
if (typeof Rails !== 'undefined' && Rails.application.config.action_controller.use_turbo_stream) {
    windowEventListeners.pop(); // remove "load" event
    windowEventListeners.push("turbo:load");
}

// init collapse on load
windowEventListeners.forEach((event) => {
    window.addEventListener(event, initDismiss);
});

export default Dismiss;
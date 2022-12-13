declare global {
    interface Window {
        Dismiss: typeof Dismiss;
    }
}

type DismissOptions = {
    transition: string,
    duration: number,
    timing: string,
    onHide: (dismiss: Dismiss, targetEl: HTMLElement) => void
}

const Default: DismissOptions = {
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
    onHide: () => { }
};

class Dismiss {
    private _targetEl: HTMLElement | null;
    private _triggerEl: HTMLElement | null;
    private _options: DismissOptions;

    constructor(targetEl: HTMLElement | null = null, triggerEl: HTMLElement | null = null, options: object = {}) {
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = { ...Default, ...options };
        this._init();
    }

    private _init() {
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

export function initDismisses() {
    document.querySelectorAll('[data-dismiss-target]').forEach(triggerEl => {
        const targetEl = document.querySelector(
            triggerEl.getAttribute('data-dismiss-target')
        );
        new Dismiss(targetEl as HTMLElement, triggerEl as HTMLElement);
    });
}

export default Dismiss;
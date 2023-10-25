/* eslint-disable @typescript-eslint/no-empty-function */
import type { DismissOptions } from './types';
import { DismissInterface } from './interface';
import instances from '../../dom/instances';

const Default: DismissOptions = {
    transition: 'transition-opacity',
    duration: 300,
    timing: 'ease-out',
    onHide: () => {},
};

class Dismiss implements DismissInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: DismissOptions;
    _initialized: boolean;
    _clickHandler: EventListenerOrEventListenerObject;

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: DismissOptions = Default
    ) {
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = { ...Default, ...options };
        this._initialized = false;
        this.init();
        instances.addInstance('Dismiss', this, this._targetEl.id, true);
    }

    init() {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            this._clickHandler = () => {
                this.hide();
            };
            this._triggerEl.addEventListener('click', this._clickHandler);
            this._initialized = true;
        }
    }

    destroy() {
        if (this._triggerEl && this._initialized) {
            this._triggerEl.removeEventListener('click', this._clickHandler);
            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('Dismiss', this._targetEl.id);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
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

export function initDismisses() {
    document.querySelectorAll('[data-dismiss-target]').forEach(($triggerEl) => {
        const targetId = $triggerEl.getAttribute('data-dismiss-target');
        const $dismissEl = document.querySelector(targetId);

        if ($dismissEl) {
            new Dismiss($dismissEl as HTMLElement, $triggerEl as HTMLElement);
        } else {
            console.error(
                `The dismiss element with id "${targetId}" does not exist. Please check the data-dismiss-target attribute.`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Dismiss = Dismiss;
    window.initDismisses = initDismisses;
}

export default Dismiss;

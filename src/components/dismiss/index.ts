/* eslint-disable @typescript-eslint/no-empty-function */
import type { DismissOptions } from './types';
import { DismissInterface } from './interface';

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

    constructor(
        targetEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        options: DismissOptions = Default
    ) {
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
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

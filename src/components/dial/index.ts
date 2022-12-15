/* eslint-disable @typescript-eslint/no-empty-function */
import type { DialOptions, TriggerType } from './types';
import { DialInterface } from './interface';

const Default: DialOptions = {
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

class Dial implements DialInterface {
    _parentEl: HTMLElement;
    _triggerEl: HTMLElement;
    _targetEl: HTMLElement;
    _options: DialOptions;
    _visible: boolean;

    constructor(
        parentEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        targetEl: HTMLElement | null = null,
        options: DialOptions = Default
    ) {
        this._parentEl = parentEl;
        this._triggerEl = triggerEl;
        this._targetEl = targetEl;
        this._options = { ...Default, ...options };
        this._visible = false;
        this._init();
    }

    _init() {
        if (this._triggerEl) {
            const triggerEventTypes = this._getTriggerEventTypes(
                this._options.triggerType
            );
            triggerEventTypes.show.forEach((ev: string) => {
                this._triggerEl.addEventListener(ev, () => {
                    this.show();
                });
                this._targetEl.addEventListener(ev, () => {
                    this.show();
                });
            });
            triggerEventTypes.hide.forEach((ev: string) => {
                this._parentEl.addEventListener(ev, () => {
                    console.log('click');
                    setTimeout(() => {
                        if (!this._parentEl.matches(':hover')) {
                            this.hide();
                        }
                    }, 100);
                });
            });
        }
    }

    hide() {
        this._targetEl.classList.add('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'false');
        }
        this._visible = false;

        // callback function
        this._options.onHide(this);
    }

    show() {
        this._targetEl.classList.remove('hidden');
        if (this._triggerEl) {
            this._triggerEl.setAttribute('aria-expanded', 'true');
        }
        this._visible = true;

        // callback function
        this._options.onShow(this);
    }

    toggle() {
        if (this._visible) {
            this.hide();
        } else {
            this.show();
        }
    }

    isHidden() {
        return !this._visible;
    }

    isVisible() {
        return this._visible;
    }

    _getTriggerEventTypes(triggerType: TriggerType) {
        switch (triggerType) {
            case 'hover':
                return {
                    show: ['mouseenter', 'focus'],
                    hide: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    show: ['click', 'focus'],
                    hide: ['focusout', 'blur'],
                };
            default:
                return {
                    show: ['mouseenter', 'focus'],
                    hide: ['mouseleave', 'blur'],
                };
        }
    }
}

window.Dial = Dial;

export function initDials() {
    document.querySelectorAll('[data-dial-init]').forEach(($parentEl) => {
        const $triggerEl = $parentEl.querySelector('[data-dial-toggle]');
        const $targetEl = document.getElementById(
            $triggerEl.getAttribute('data-dial-toggle')
        );
        const triggerType = $triggerEl.getAttribute('data-dial-trigger');

        new Dial(
            $parentEl as HTMLElement,
            $triggerEl as HTMLElement,
            $targetEl as HTMLElement,
            {
                triggerType: triggerType ? triggerType : Default.triggerType,
            } as DialOptions
        );
    });
}

export default Dial;

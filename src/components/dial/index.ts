/* eslint-disable @typescript-eslint/no-empty-function */
import type { DialOptions, DialTriggerType } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DialInterface } from './interface';
import instances from '../../dom/instances';

const Default: DialOptions = {
    triggerType: 'hover',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Dial implements DialInterface {
    _instanceId: string;
    _parentEl: HTMLElement;
    _triggerEl: HTMLElement;
    _targetEl: HTMLElement;
    _options: DialOptions;
    _visible: boolean;
    _initialized: boolean;
    _showEventHandler: EventListenerOrEventListenerObject;
    _hideEventHandler: EventListenerOrEventListenerObject;

    constructor(
        parentEl: HTMLElement | null = null,
        triggerEl: HTMLElement | null = null,
        targetEl: HTMLElement | null = null,
        options: DialOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._parentEl = parentEl;
        this._triggerEl = triggerEl;
        this._targetEl = targetEl;
        this._options = { ...Default, ...options };
        this._visible = false;
        this._initialized = false;
        this.init();
        instances.addInstance(
            'Dial',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        if (this._triggerEl && this._targetEl && !this._initialized) {
            const triggerEventTypes = this._getTriggerEventTypes(
                this._options.triggerType
            );

            this._showEventHandler = () => {
                this.show();
            };

            triggerEventTypes.showEvents.forEach((ev: string) => {
                this._triggerEl.addEventListener(ev, this._showEventHandler);
                this._targetEl.addEventListener(ev, this._showEventHandler);
            });

            this._hideEventHandler = () => {
                if (!this._parentEl.matches(':hover')) {
                    this.hide();
                }
            };

            triggerEventTypes.hideEvents.forEach((ev: string) => {
                this._parentEl.addEventListener(ev, this._hideEventHandler);
            });
            this._initialized = true;
        }
    }

    destroy() {
        if (this._initialized) {
            const triggerEventTypes = this._getTriggerEventTypes(
                this._options.triggerType
            );

            triggerEventTypes.showEvents.forEach((ev: string) => {
                this._triggerEl.removeEventListener(ev, this._showEventHandler);
                this._targetEl.removeEventListener(ev, this._showEventHandler);
            });

            triggerEventTypes.hideEvents.forEach((ev: string) => {
                this._parentEl.removeEventListener(ev, this._hideEventHandler);
            });

            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('Dial', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
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

    _getTriggerEventTypes(triggerType: DialTriggerType) {
        switch (triggerType) {
            case 'hover':
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
            case 'click':
                return {
                    showEvents: ['click', 'focus'],
                    hideEvents: ['focusout', 'blur'],
                };
            case 'none':
                return {
                    showEvents: [],
                    hideEvents: [],
                };
            default:
                return {
                    showEvents: ['mouseenter', 'focus'],
                    hideEvents: ['mouseleave', 'blur'],
                };
        }
    }

    updateOnShow(callback: () => void) {
        this._options.onShow = callback;
    }

    updateOnHide(callback: () => void) {
        this._options.onHide = callback;
    }

    updateOnToggle(callback: () => void) {
        this._options.onToggle = callback;
    }
}

export function initDials() {
    document.querySelectorAll('[data-dial-init]').forEach(($parentEl) => {
        const $triggerEl = $parentEl.querySelector('[data-dial-toggle]');

        if ($triggerEl) {
            const dialId = $triggerEl.getAttribute('data-dial-toggle');
            const $dialEl = document.getElementById(dialId);

            if ($dialEl) {
                const triggerType =
                    $triggerEl.getAttribute('data-dial-trigger');
                new Dial(
                    $parentEl as HTMLElement,
                    $triggerEl as HTMLElement,
                    $dialEl as HTMLElement,
                    {
                        triggerType: triggerType
                            ? triggerType
                            : Default.triggerType,
                    } as DialOptions
                );
            } else {
                console.error(
                    `Dial with id ${dialId} does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?`
                );
            }
        } else {
            console.error(
                `Dial with id ${$parentEl.id} does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Dial = Dial;
    window.initDials = initDials;
}

export default Dial;

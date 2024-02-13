/* eslint-disable @typescript-eslint/no-empty-function */
import type { InputCounterOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { InputCounterInterface } from './interface';
import instances from '../../dom/instances';

const Default: InputCounterOptions = {
    minValue: null,
    maxValue: null,
    onIncrement: () => {},
    onDecrement: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class InputCounter implements InputCounterInterface {
    _instanceId: string;
    _targetEl: HTMLInputElement | null;
    _incrementEl: HTMLElement | null;
    _decrementEl: HTMLElement | null;
    _options: InputCounterOptions;
    _initialized: boolean;
    _incrementClickHandler: EventListenerOrEventListenerObject;
    _decrementClickHandler: EventListenerOrEventListenerObject;
    _inputHandler: EventListenerOrEventListenerObject;

    constructor(
        targetEl: HTMLInputElement | null = null,
        incrementEl: HTMLElement | null = null,
        decrementEl: HTMLElement | null = null,
        options: InputCounterOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;

        this._targetEl = targetEl;
        this._incrementEl = incrementEl;
        this._decrementEl = decrementEl;
        this._options = { ...Default, ...options };
        this._initialized = false;

        this.init();
        instances.addInstance(
            'InputCounter',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        if (this._targetEl && !this._initialized) {
            this._inputHandler = (event) => {
                {
                    const target = event.target as HTMLInputElement;

                    // check if the value is numeric
                    if (!/^\d*$/.test(target.value)) {
                        // Regex to check if the value is numeric
                        target.value = target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
                    }

                    // check for max value
                    if (
                        this._options.maxValue !== null &&
                        parseInt(target.value) > this._options.maxValue
                    ) {
                        target.value = this._options.maxValue.toString();
                    }

                    // check for min value
                    if (
                        this._options.minValue !== null &&
                        parseInt(target.value) < this._options.minValue
                    ) {
                        target.value = this._options.minValue.toString();
                    }
                }
            };

            this._incrementClickHandler = () => {
                this.increment();
            };

            this._decrementClickHandler = () => {
                this.decrement();
            };

            // Add event listener to restrict input to numeric values only
            this._targetEl.addEventListener('input', this._inputHandler);

            if (this._incrementEl) {
                this._incrementEl.addEventListener(
                    'click',
                    this._incrementClickHandler
                );
            }

            if (this._decrementEl) {
                this._decrementEl.addEventListener(
                    'click',
                    this._decrementClickHandler
                );
            }

            this._initialized = true;
        }
    }

    destroy() {
        if (this._targetEl && this._initialized) {
            this._targetEl.removeEventListener('input', this._inputHandler);

            if (this._incrementEl) {
                this._incrementEl.removeEventListener(
                    'click',
                    this._incrementClickHandler
                );
            }
            if (this._decrementEl) {
                this._decrementEl.removeEventListener(
                    'click',
                    this._decrementClickHandler
                );
            }
            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('InputCounter', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    getCurrentValue() {
        return parseInt(this._targetEl.value) || 0;
    }

    increment() {
        // don't increment if the value is already at the maximum value
        if (
            this._options.maxValue !== null &&
            this.getCurrentValue() >= this._options.maxValue
        ) {
            return;
        }

        this._targetEl.value = (this.getCurrentValue() + 1).toString();
        this._options.onIncrement(this);
    }

    decrement() {
        // don't decrement if the value is already at the minimum value
        if (
            this._options.minValue !== null &&
            this.getCurrentValue() <= this._options.minValue
        ) {
            return;
        }

        this._targetEl.value = (this.getCurrentValue() - 1).toString();
        this._options.onDecrement(this);
    }

    updateOnIncrement(callback: () => void) {
        this._options.onIncrement = callback;
    }

    updateOnDecrement(callback: () => void) {
        this._options.onDecrement = callback;
    }
}

export function initInputCounters() {
    document.querySelectorAll('[data-input-counter]').forEach(($targetEl) => {
        const targetId = $targetEl.id;

        const $incrementEl = document.querySelector(
            '[data-input-counter-increment="' + targetId + '"]'
        );

        const $decrementEl = document.querySelector(
            '[data-input-counter-decrement="' + targetId + '"]'
        );

        const minValue = $targetEl.getAttribute('data-input-counter-min');
        const maxValue = $targetEl.getAttribute('data-input-counter-max');

        // check if the target element exists
        if ($targetEl) {
            if (
                !instances.instanceExists(
                    'InputCounter',
                    $targetEl.getAttribute('id')
                )
            ) {
                new InputCounter(
                    $targetEl as HTMLInputElement,
                    $incrementEl ? ($incrementEl as HTMLElement) : null,
                    $decrementEl ? ($decrementEl as HTMLElement) : null,
                    {
                        minValue: minValue ? parseInt(minValue) : null,
                        maxValue: maxValue ? parseInt(maxValue) : null,
                    } as InputCounterOptions
                );
            }
        } else {
            console.error(
                `The target element with id "${targetId}" does not exist. Please check the data-input-counter attribute.`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.InputCounter = InputCounter;
    window.initInputCounters = initInputCounters;
}

export default InputCounter;

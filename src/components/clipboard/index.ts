/* eslint-disable @typescript-eslint/no-empty-function */
import type { ClipboardOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { ClipboardInterface } from './interface';
import instances from '../../dom/instances';

const Default: ClipboardOptions = {
    onCopy: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Clipboard implements ClipboardInterface {
    _instanceId: string;
    _triggerEl: HTMLElement | null;
    _targetEl: HTMLInputElement | null;
    _options: ClipboardOptions;
    _initialized: boolean;
    _incrementClickHandler: EventListenerOrEventListenerObject;
    _decrementClickHandler: EventListenerOrEventListenerObject;
    _inputHandler: EventListenerOrEventListenerObject;

    constructor(
        triggerEl: HTMLElement | null = null,
        targetEl: HTMLInputElement | null = null,
        options: ClipboardOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;

        this._triggerEl = triggerEl;
        this._targetEl = targetEl;
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

    copy() {}
}

export function initClipboards() {
    document
        .querySelectorAll('[data-copy-to-clipboard-target]')
        .forEach(($triggerEl) => {
            const $targetEl = document.getElementById(
                $triggerEl.getAttribute('data-copy-to-clipboard-target')
            );

            // check if the target element exists
            if ($targetEl) {
                if (
                    !instances.instanceExists(
                        'Clipboard',
                        $targetEl.getAttribute('id')
                    )
                ) {
                    new Clipboard(
                        $triggerEl as HTMLElement,
                        $targetEl as HTMLInputElement,
                        {
                            minValue: minValue ? parseInt(minValue) : null,
                            maxValue: maxValue ? parseInt(maxValue) : null,
                        } as ClipboardOptions
                    );
                }
            } else {
                console.error(
                    `The target element with id "${targetId}" does not exist. Please check the data-copy-to-clipboard-target attribute.`
                );
            }
        });
}

if (typeof window !== 'undefined') {
    window.Clipboard = Clipboard;
    window.initClipboards = initClipboards;
}

export default Clipboard;

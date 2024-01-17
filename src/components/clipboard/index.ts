/* eslint-disable @typescript-eslint/no-empty-function */
import type { CopyClipboardOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { CopyClipboardInterface } from './interface';
import instances from '../../dom/instances';

const Default: CopyClipboardOptions = {
    onCopy: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class CopyClipboard implements CopyClipboardInterface {
    _instanceId: string;
    _triggerEl: HTMLElement | null;
    _targetEl: HTMLInputElement | null;
    _options: CopyClipboardOptions;
    _initialized: boolean;
    _triggerElClickHandler: EventListenerOrEventListenerObject;
    _inputHandler: EventListenerOrEventListenerObject;

    constructor(
        triggerEl: HTMLElement | null = null,
        targetEl: HTMLInputElement | null = null,
        options: CopyClipboardOptions = Default,
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
            'CopyClipboard',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        if (this._targetEl && this._triggerEl && !this._initialized) {
            this._triggerElClickHandler = () => {
                this.copy();
            };

            // clicking on the trigger element should copy the value of the target element
            if (this._triggerEl) {
                this._triggerEl.addEventListener(
                    'click',
                    this._triggerElClickHandler
                );
            }

            this._initialized = true;
        }
    }

    destroy() {
        if (this._triggerEl && this._targetEl && this._initialized) {
            if (this._triggerEl) {
                this._triggerEl.removeEventListener(
                    'click',
                    this._triggerElClickHandler
                );
            }
            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('CopyClipboard', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    getTargetValue() {
        return this._targetEl.value;
    }

    copy() {
        const textToCopy = this.getTargetValue();

        // Create a temporary textarea element
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);

        // Select the text inside the textarea and copy it to the clipboard
        tempTextArea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextArea);

        // callback function
        this._options.onCopy(this);

        return textToCopy;
    }

    updateOnCopyCallback(callback: () => void) {
        this._options.onCopy = callback;
    }
}

export function initCopyClipboards() {
    document
        .querySelectorAll('[data-copy-to-clipboard-target]')
        .forEach(($triggerEl) => {
            const targetId = $triggerEl.getAttribute(
                'data-copy-to-clipboard-target'
            );
            const $targetEl = document.getElementById(targetId);

            // check if the target element exists
            if ($targetEl) {
                if (
                    !instances.instanceExists(
                        'CopyClipboard',
                        $targetEl.getAttribute('id')
                    )
                ) {
                    new CopyClipboard(
                        $triggerEl as HTMLElement,
                        $targetEl as HTMLInputElement
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
    window.CopyClipboard = CopyClipboard;
    window.initClipboards = initCopyClipboards;
}

export default CopyClipboard;

import { ClipboardOptions } from './types';

export declare interface ClipboardInterface {
    _triggerEl: HTMLElement | null;
    _targetEl: HTMLElement | null;
    _options: ClipboardOptions;

    init(): void;
    copy(): string;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

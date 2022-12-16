import { DismissOptions } from './types';

export declare interface DismissInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: DismissOptions;

    hide(): void;
}

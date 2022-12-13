import { PopoverOptions } from './types';

export interface PopoverInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: PopoverOptions;
    _popperInstance: any;

    show(): void;
    hide(): void;
}
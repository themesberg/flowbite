import { PopoverOptions } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export interface PopoverInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: PopoverOptions;
    _popperInstance: PopperInstance;

    show(): void;
    hide(): void;
}

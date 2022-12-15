import { TooltipOptions } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export interface TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;

    show(): void;
    hide(): void;
}

export {};

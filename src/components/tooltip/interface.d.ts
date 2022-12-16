import { TooltipOptions } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;

    show(): void;
    hide(): void;
}

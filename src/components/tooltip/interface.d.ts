import { TooltipOptions } from './types';

export interface TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: any;

    show(): void;
    hide(): void;
}
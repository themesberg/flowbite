import { TooltipOptions, TriggerType, TriggerEventTypes } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;

    _init(): void;
    _getTriggerEvents(triggerType: TriggerType): TriggerEventTypes;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    toggle(): void;
}

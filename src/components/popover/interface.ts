import { PopoverOptions, TriggerType, TriggerEventTypes } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface PopoverInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: PopoverOptions;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;

    _setupEventListeners(): void;
    _getTriggerEvents(triggerType: TriggerType): TriggerEventTypes;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    toggle(): void;
}

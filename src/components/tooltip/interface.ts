import {
    TooltipOptions,
    TooltipTriggerType,
    TooltipTriggerEventTypes,
} from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface TooltipInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: TooltipOptions;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;

    _init(): void;
    _setupEventListeners(): void;
    _setupClickOutsideListener(): void;
    _removeClickOutsideListener(): void;
    _setupKeydownListener(): void;
    _removeKeydownListener(): void;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    _getTriggerEvents(
        triggerType: TooltipTriggerType
    ): TooltipTriggerEventTypes;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    toggle(): void;
}

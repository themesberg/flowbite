import { DropdownOptions, TriggerType, TriggerEventTypes } from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface DropdownInterface {
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DropdownOptions;
    _visible: boolean;
    _popperInstance: PopperInstance;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;

    _init(): void;
    _createPopperInstance(): PopperInstance;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    __getTriggerEvents(triggerType: TriggerType): TriggerEventTypes;
    toggle(): void;
    show(): void;
    hide(): void;
}

import {
    PopoverOptions,
    PopoverTriggerType,
    PopoverTriggerEventTypes,
} from './types';

export declare interface PopoverInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: PopoverOptions;
    _cleanupAutoUpdate: Function;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _keydownEventListener: EventListenerOrEventListenerObject;

    init(): void;
    _setupEventListeners(): void;
    _setupClickOutsideListener(): void;
    _removeClickOutsideListener(): void;
    _setupKeydownListener(): void;
    _removeKeydownListener(): void;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    _getTriggerEvents(
        triggerType: PopoverTriggerType
    ): PopoverTriggerEventTypes;
    isVisible(): boolean;
    show(): void;
    hide(): void;
    toggle(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

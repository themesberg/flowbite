import { DialOptions, TriggerEventTypes, TriggerType } from './types';

export interface DialInterface {
    _parentEl: HTMLElement;
    _triggerEl: HTMLElement;
    _targetEl: HTMLElement;
    _options: DialOptions;
    _visible: boolean;

    _init(): void;
    isVisible(): boolean;
    isHidden(): boolean;
    hide(): void;
    show(): void;
    toggle(): void;
    _getTriggerEventTypes(triggerType: TriggerType): TriggerEventTypes;
}

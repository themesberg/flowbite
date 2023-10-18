import { DialOptions, DialTriggerEventTypes, DialTriggerType } from './types';

export declare interface DialInterface {
    _parentEl: HTMLElement;
    _triggerEl: HTMLElement;
    _targetEl: HTMLElement;
    _options: DialOptions;
    _visible: boolean;

    init(): void;
    isVisible(): boolean;
    isHidden(): boolean;
    hide(): void;
    show(): void;
    toggle(): void;
    _getTriggerEventTypes(triggerType: DialTriggerType): DialTriggerEventTypes;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

import { DialInterface } from './interface';

export declare type TriggerType = 'click' | 'hover' | 'none';

export declare type TriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type DialOptions = {
    triggerType?: TriggerType;
    onShow?: (dial: DialInterface) => void;
    onHide?: (dial: DialInterface) => void;
    onToggle?: (dial: DialInterface) => void;
};

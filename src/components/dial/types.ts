import { DialInterface } from './interface';

export declare type DialTriggerType = 'click' | 'hover' | 'none';

export declare type DialTriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type DialOptions = {
    triggerType?: DialTriggerType;
    onShow?: (dial: DialInterface) => void;
    onHide?: (dial: DialInterface) => void;
    onToggle?: (dial: DialInterface) => void;
};

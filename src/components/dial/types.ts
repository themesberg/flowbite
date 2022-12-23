import { DialInterface } from './interface';

export declare type TriggerType = 'click' | 'hover';

export declare type TriggerEventTypes = {
    show: string[];
    hide: string[];
};

export declare type DialOptions = {
    triggerType?: TriggerType;
    onShow?: (dial: DialInterface) => void;
    onHide?: (dial: DialInterface) => void;
    onToggle?: (dial: DialInterface) => void;
};

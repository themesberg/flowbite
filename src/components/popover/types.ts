import { PopoverInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type TriggerType = 'click' | 'hover' | 'none';

export declare type TriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type PopoverOptions = {
    placement?: Placement;
    offset?: number;
    triggerType?: TriggerType;
    onShow?: (tooltip: PopoverInterface) => void;
    onHide?: (tooltip: PopoverInterface) => void;
    onToggle?: (tooltip: PopoverInterface) => void;
};

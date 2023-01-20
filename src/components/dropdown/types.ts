import { DropdownInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type TriggerType = 'click' | 'hover' | 'none';

export declare type TriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type DropdownOptions = {
    placement?: Placement;
    triggerType?: TriggerType;
    offsetSkidding?: number;
    offsetDistance?: number;
    delay?: number;
    onShow?: (tooltip: DropdownInterface) => void;
    onHide?: (tooltip: DropdownInterface) => void;
};

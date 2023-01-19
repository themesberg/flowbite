import { DropdownInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type TriggerType = 'click' | 'hover';

export declare type TriggerEventTypes = {
    show: string[];
    hide: string[];
};

export declare type DropdownOptions = {
    placement?: Placement;
    triggerType?: TriggerType;
    offsetSkidding?: number;
    offsetDistance?: number;
    onShow?: (tooltip: DropdownInterface) => void;
    onHide?: (tooltip: DropdownInterface) => void;
};

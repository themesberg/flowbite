import { DropdownInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type DropdownTriggerType = 'click' | 'hover' | 'none';

export declare type DropdownTriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type DropdownOptions = {
    placement?: Placement;
    triggerType?: DropdownTriggerType;
    offsetSkidding?: number;
    offsetDistance?: number;
    delay?: number;
    onShow?: (tooltip: DropdownInterface) => void;
    onHide?: (tooltip: DropdownInterface) => void;
    onToggle?: (tooltip: DropdownInterface) => void;
};

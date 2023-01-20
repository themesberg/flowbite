import { TooltipInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type TriggerType = 'click' | 'hover' | 'none';

export declare type TriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type TooltipOptions = {
    placement?: Placement;
    triggerType?: TriggerType;
    onShow?: (tooltip: TooltipInterface) => void;
    onHide?: (tooltip: TooltipInterface) => void;
    onToggle?: (tooltip: TooltipInterface) => void;
};

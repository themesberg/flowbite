import { TooltipInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type TooltipOptions = {
    placement: Placement;
    triggerType: string;
    onShow: (tooltip: TooltipInterface) => void;
    onHide: (tooltip: TooltipInterface) => void;
};

export {};

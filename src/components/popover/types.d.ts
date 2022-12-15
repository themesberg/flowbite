import { PopoverInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type PopoverOptions = {
    placement: Placement;
    offset: number;
    triggerType: string;
    onShow: (tooltip: PopoverInterface) => void;
    onHide: (tooltip: PopoverInterface) => void;
};

export {};

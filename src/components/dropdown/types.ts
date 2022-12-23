import { DropdownInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type DropdownOptions = {
    placement?: Placement;
    triggerType?: string;
    offsetSkidding?: number;
    offsetDistance?: number;
    onShow?: (tooltip: DropdownInterface) => void;
    onHide?: (tooltip: DropdownInterface) => void;
};

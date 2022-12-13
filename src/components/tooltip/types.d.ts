import { TooltipInterface } from './interface';

export declare type TooltipOptions = {
    placement: string;
    triggerType: string;
    onShow: (tooltip: TooltipInterface) => void;
    onHide: (tooltip: TooltipInterface) => void;
};

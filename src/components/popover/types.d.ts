import { PopoverInterface } from './interface';

export declare type PopoverOptions = {
    placement: string,
    offset: number,
    triggerType: string,
    onShow: (tooltip: PopoverInterface) => void,
    onHide: (tooltip: PopoverInterface) => void,
}
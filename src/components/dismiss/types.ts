import { DismissInterface } from './interface';

export declare type DismissOptions = {
    transition?: string;
    duration?: number;
    timing?: string;
    onHide?: (dismiss: DismissInterface, targetEl: HTMLElement) => void;
};

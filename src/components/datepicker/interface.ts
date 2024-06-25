/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatepickerOptions } from './types';

export declare interface DatepickerInterface {
    _datepickerEl: HTMLElement;
    _datepickerInstance: any | null;
    _options: DatepickerOptions;

    init(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

import { DatepickerOptions } from './types';
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

export declare interface DatepickerInterface {
    _datepickerEl: HTMLElement;
    _datepickerInstance: Datepicker | DateRangePicker | null;
    _options: DatepickerOptions;

    init(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

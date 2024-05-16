import { DatepickerOptions } from './types';
import FlowbiteDatepicker from 'flowbite-datepicker/Datepicker';
import FlowbiteDateRangePicker from 'flowbite-datepicker/DateRangePicker';

export declare interface DatepickerInterface {
    _datepickerEl: HTMLElement;
    _datepickerInstance: FlowbiteDatepicker | FlowbiteDateRangePicker | null;
    _options: DatepickerOptions;

    init(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

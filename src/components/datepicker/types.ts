/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatepickerInterface } from './interface';

export interface DatepickerOptions {
    defaultDatepickerId?: string | null;
    autohide?: boolean;
    format?: string;
    maxDate?: string | null;
    minDate?: string | null;
    orientation?: string;
    buttons?: boolean;
    autoSelectToday?: number;
    title?: string | null;
    language?: string;
    locales?: { [key: string]: any };
    rangePicker?: boolean | false;
    onShow?: (Datepicker: DatepickerInterface) => void;
    onHide?: (Datepicker: DatepickerInterface) => void;
}

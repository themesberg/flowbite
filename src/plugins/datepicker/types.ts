import { DatepickerInterface } from './interface';

export interface DatepickerOptions {
    defaultDatepickerId?: string | null;
    autohide?: boolean;
    format?: string;
    maxDate?: string | null;
    minDate?: string | null;
    orientation?: string;
    buttons?: boolean;
    autoSelectToday?: boolean;
    title?: string | null;
    rangePicker?: boolean | false;
}

import { DatepickerInterface } from './interface';

export interface DatepickerOptions {
    defaultDatepickerId?: string | null;
    autohide?: boolean;
    format?: string;
    orientation?: string;
    buttons?: boolean;
    autoSelectToday?: boolean;
    title?: string | null;
    rangePicker?: boolean | false;
}

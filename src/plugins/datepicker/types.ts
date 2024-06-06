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
    language?: string;
    locales?: { [key: string]: any };
    rangePicker?: boolean | false;
    onShow?: () => void;
    onHide?: () => void;
}

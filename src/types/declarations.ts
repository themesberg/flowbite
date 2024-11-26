declare module 'flowbite-datepicker' {
    export class Datepicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
        show(): void;
        hide(): void;
        setDate(date: string): void;
        getDate(): string;
    }

    export class DateRangePicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
        hide(): void;
        show(): void;
        setDates(dates: string[]): void;
        getDates(): string[];
    }
}

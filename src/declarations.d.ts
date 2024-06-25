// src/flowbite-datepicker-1.3.0.d.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'flowbite-datepicker-1.3.0' {
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

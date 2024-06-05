/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'flowbite-datepicker/Datepicker' {
    export default class FlowbiteDatepicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
        show(): void;
        hide(): void;
        setDate(date: string): void;
        getDate(): string;
    }
}

declare module 'flowbite-datepicker/DateRangePicker' {
    export default class FlowbiteDateRangePicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
        hide(): void;
        show(): void;
        setDates(dates: string[]): void;
        getDates(): string[];
    }
}

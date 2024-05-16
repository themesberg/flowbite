/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'flowbite-datepicker/Datepicker' {
    export default class FlowbiteDatepicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
    }
}

declare module 'flowbite-datepicker/DateRangePicker' {
    export default class FlowbiteDateRangePicker {
        constructor(element: HTMLElement, options: any);
        destroy(): void;
    }
}

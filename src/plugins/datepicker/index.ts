/* eslint-disable @typescript-eslint/no-empty-function */
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

import type { DatepickerOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DatepickerInterface } from './interface';
import instances from '../../dom/instances';

const Default: DatepickerOptions = {
    defaultDatepickerId: null,
    autohide: false,
    format: 'mm/dd/yyyy',
    orientation: 'bottom',
    buttons: false,
    autoSelectToday: false,
    title: null,
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Datepicker implements DatepickerInterface {
    _instanceId: string;
    _datepickerEl: HTMLElement;
    _datepickerInstance: Datepicker | DateRangePicker | null;
    _options: DatepickerOptions;
    _initialized: boolean;

    constructor(
        datepickerEl: HTMLElement | null = null,
        options: DatepickerOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : datepickerEl.id;
        this._datepickerEl = datepickerEl;
        this._datepickerInstance = null;
        this._options = { ...Default, ...options };
        this._initialized = false;
        this.init();
        instances.addInstance('Datepicker', this, this._datepickerEl.id, true);
        instances.addInstance(
            'Datepicker',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        console.log('init datepicker');
        if (this._datepickerEl && !this._initialized) {
            this._datepickerInstance = new Datepicker(
                this._datepickerEl,
                this._getDatepickerOptions(this._options)
            );
            console.log('init datepicker');
            this._initialized = true;
        }
    }

    destroy() {
        if (this._initialized) {
            this._initialized = false;
        }
    }

    removeInstance() {
        this.destroy();
        instances.removeInstance('Datepicker', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    _getDatepickerOptions(options: DatepickerOptions) {
        const datepickerOptions = {} as Datepicker.Options;

        if (options.buttons) {
            datepickerOptions.todayBtn = true;
            datepickerOptions.clearBtn = true;

            if (options.autoSelectToday) {
                datepickerOptions.todayBtnMode = true;
            }
        }

        if (options.autohide) {
            datepickerOptions.autohide = true;
        }

        if (options.format) {
            datepickerOptions.format = options.format;
        }

        if (options.orientation) {
            datepickerOptions.orientation = options.orientation;
        }

        if (options.title) {
            datepickerOptions.title = options.title;
        }

        return datepickerOptions;
    }
}

export function initDatepickers() {
    console.log('fucking init this shit already');
    document.querySelectorAll('[datepicker]').forEach(($datepickerEl) => {
        console.log($datepickerEl);
        if ($datepickerEl) {
            const buttons = $datepickerEl.hasAttribute('datepicker-buttons');
            const autoselectToday = $datepickerEl.hasAttribute(
                'datepicker-autoselect-today'
            );
            const autohide = $datepickerEl.hasAttribute('datepicker-autohide');
            const format = $datepickerEl.hasAttribute('datepicker-format');
            const orientation = $datepickerEl.hasAttribute(
                'datepicker-orientation'
            );
            const title = $datepickerEl.hasAttribute('datepicker-title');
            new Datepicker(
                $datepickerEl as HTMLElement,
                {
                    buttons: buttons ? buttons : Default.buttons,
                    autoSelectToday: autoselectToday
                        ? autoselectToday
                        : Default.autoSelectToday,
                    autohide: autohide ? autohide : Default.autohide,
                    format: format ? format : Default.format,
                    orientation: orientation
                        ? orientation
                        : Default.orientation,
                    title: title ? title : Default.title,
                } as DatepickerOptions
            );
        } else {
            console.error(
                `The datepicker element does not exist. Please check the datepicker attribute.`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Datepicker = Datepicker;
    window.initDatepickers = initDatepickers;
}

export default Datepicker;

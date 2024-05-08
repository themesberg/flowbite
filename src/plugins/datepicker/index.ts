/* eslint-disable @typescript-eslint/no-empty-function */
import type { DatepickerOptions } from './types';
import type { InstanceOptions } from '../../dom/types';
import { DatepickerInterface } from './interface';
import instances from '../../dom/instances';

import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const Default: DatepickerOptions = {
    defaultTabId: null,
    activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500',
    inactiveClasses:
        'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {},
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
            'Tabs',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        if (this._datepickerEl && !this._initialized) {
            this._datepickerInstance = new Datepicker(
                this._datepickerEl,
                this._options
            );
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

    updateOnShow(callback: () => void) {
        this._options.onShow = callback;
    }
}

export function initDatepickers() {
    document.querySelectorAll('[datepicker]').forEach(($parentEl) => {
        const tabItems: TabItem[] = [];
        const activeClasses = $parentEl.getAttribute(
            'data-tabs-active-classes'
        );
        const inactiveClasses = $parentEl.getAttribute(
            'data-tabs-inactive-classes'
        );
        let defaultTabId = null;
        $parentEl
            .querySelectorAll('[role="tab"]')
            .forEach(($triggerEl: HTMLElement) => {
                const isActive =
                    $triggerEl.getAttribute('aria-selected') === 'true';
                const tab: TabItem = {
                    id: $triggerEl.getAttribute('data-tabs-target'),
                    triggerEl: $triggerEl,
                    targetEl: document.querySelector(
                        $triggerEl.getAttribute('data-tabs-target')
                    ),
                };
                tabItems.push(tab);

                if (isActive) {
                    defaultTabId = tab.id;
                }
            });

        new Tabs($parentEl as HTMLElement, tabItems, {
            defaultTabId: defaultTabId,
            activeClasses: activeClasses
                ? activeClasses
                : Default.activeClasses,
            inactiveClasses: inactiveClasses
                ? inactiveClasses
                : Default.inactiveClasses,
        } as TabsOptions);
    });
}

if (typeof window !== 'undefined') {
    window.Tabs = Tabs;
    window.initTabs = initTabs;
}

export default Tabs;

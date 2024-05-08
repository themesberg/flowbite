import { DatepickerOptions } from './types';

export declare interface DatepickerInterface {
    _tabsEl: HTMLElement;
    _items: TabItem[];
    _activeTab: TabItem;
    _options: TabsOptions;

    init(): void;
    setActiveTab(tab: TabItem): void;
    getActiveTab(): TabItem;
    getTab(id: string): TabItem;
    show(id: string, forceShow?: boolean): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

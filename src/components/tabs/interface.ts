import { TabItem, TabsOptions } from './types';

export declare interface TabsInterface {
    _items: TabItem[];
    _activeTab: TabItem;
    _options: TabsOptions;

    _init(): void;
    _setActiveTab(tab: TabItem): void;
    getActiveTab(): TabItem;
    getTab(id: string): TabItem;
    show(id: string, forceShow?: boolean): void;
}

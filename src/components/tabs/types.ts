import { TabsInterface } from './interface';

export declare type TabsOptions = {
    defaultTabId?: string;
    activeClasses?: string;
    inactiveClasses?: string;
    onShow?: (tabs: TabsInterface, tab: TabItem) => void;
};

export declare type TabItem = {
    id: string;
    triggerEl: HTMLElement;
    targetEl: HTMLElement;
};

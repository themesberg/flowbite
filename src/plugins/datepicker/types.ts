import { DatepickerInterface } from './interface';

export declare type DatepickerOptions = {
    defaultTabId?: string;
    activeClasses?: string;
    inactiveClasses?: string;
    onShow?: (tabs: TabsInterface, tab: TabItem) => void;
};

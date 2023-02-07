import { CollapseInterface } from './interface';

export declare type CollapseOptions = {
    onCollapse?: (collapse: CollapseInterface) => void;
    onExpand?: (collapse: CollapseInterface) => void;
    onToggle?: (collapse: CollapseInterface) => void;
};

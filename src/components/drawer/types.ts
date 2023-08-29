import { DrawerInterface } from './interface';

export declare type DrawerOptions = {
    placement?: string;
    bodyScrolling?: boolean;
    backdrop?: boolean;
    edge?: boolean;
    edgeOffset?: string;
    backdropClasses?: string;
    onShow?: (drawer: DrawerInterface) => void;
    onHide?: (drawer: DrawerInterface) => void;
    onToggle?: (drawer: DrawerInterface) => void;
};

export declare type PlacementClasses = {
    base: string[];
    active: string[];
    inactive: string[];
};

export declare type DrawerInstance = {
    id: string;
    object: DrawerInterface;
};

import { ModalInterface } from './interface';

export declare type modalBackdrop = 'static' | 'dynamic';
export declare type modalPlacement =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

export declare type ModalOptions = {
    placement?: modalPlacement;
    backdropClasses?: string;
    backdrop?: modalBackdrop;
    closable?: boolean;
    onShow?: (modal: ModalInterface) => void;
    onHide?: (modal: ModalInterface) => void;
    onToggle?: (modal: ModalInterface) => void;
};

export declare type ModalInstance = {
    id: string;
    object: ModalInterface;
};

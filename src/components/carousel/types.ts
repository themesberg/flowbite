import { CarouselInterface } from './interface';

export declare type CarouselItem = {
    position: number;
    el: HTMLElement;
};

export declare type IndicatorItem = {
    position: number;
    el: HTMLElement;
};

export declare type RotationItems = {
    left: CarouselItem;
    middle: CarouselItem;
    right: CarouselItem;
};

export declare type CarouselOptions = {
    defaultPosition?: number;
    indicators?: {
        items?: IndicatorItem[];
        activeClasses?: string;
        inactiveClasses?: string;
    };
    interval?: number;
    onNext?: (carousel: CarouselInterface) => void;
    onPrev?: (carousel: CarouselInterface) => void;
    onChange?: (carousel: CarouselInterface) => void;
};

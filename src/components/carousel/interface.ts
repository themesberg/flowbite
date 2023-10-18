import {
    CarouselOptions,
    CarouselItem,
    IndicatorItem,
    RotationItems,
} from './types';

export declare interface CarouselInterface {
    type: 'Carousel';

    _items: CarouselItem[];
    _indicators: IndicatorItem[];
    _activeItem: CarouselItem;
    _intervalDuration: number;
    _intervalInstance: number;
    _options: CarouselOptions;

    init(): void;

    getItem(position: number): CarouselItem;

    _getActiveItem(): CarouselItem;
    _setActiveItem(item: CarouselItem): void;

    slideTo(position: number): void;

    next(): void;
    prev(): void;

    _rotate(rotationItems: RotationItems): void;
    cycle(): void;
    pause(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

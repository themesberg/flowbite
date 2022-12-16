import { DrawerOptions, PlacementClasses } from './types';

export declare interface DrawerInterface {
    // properties
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DrawerOptions;
    _visible: boolean;

    // methods
    _init(): void;
    isVisible(): boolean;
    isHidden(): boolean;
    hide(): void;
    show(): void;
    toggle(): void;
    _createBackdrop(): void;
    _destroyBackdropEl(): void;
    _getPlacementClasses(placement: string): PlacementClasses;
}

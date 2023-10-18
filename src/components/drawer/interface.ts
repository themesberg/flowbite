import { DrawerOptions, PlacementClasses } from './types';

export declare interface DrawerInterface {
    type: 'Drawer';

    // properties
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DrawerOptions;
    _visible: boolean;

    // methods
    init(): void;
    isVisible(): boolean;
    isHidden(): boolean;
    hide(): void;
    show(): void;
    toggle(): void;
    _createBackdrop(): void;
    _destroyBackdropEl(): void;
    _getPlacementClasses(placement: string): PlacementClasses;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

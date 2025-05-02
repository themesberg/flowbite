import { ModalOptions } from './types';

export declare interface ModalInterface {
    // The HTMLElement that will be used as the modal container
    _targetEl: HTMLElement | null;

    // An object that defines the options for the modal, such as its placement and backdrop
    _options: ModalOptions;

    // A boolean that indicates whether the modal is currently hidden
    _isHidden: boolean;

    // The HTMLElement that will be used as the modal's backdrop
    _backdropEl: HTMLElement | null;

    _clickOutsideEventListener: EventListenerOrEventListenerObject;

    _keydownEventListener: EventListenerOrEventListenerObject;

    // Focus trap related properties
    _lastActiveElement: HTMLElement | null;
    _focusTrapEventListener: EventListenerOrEventListenerObject;

    // Initializes the modal and sets up its event listeners
    init(): void;

    // Creates the modal's backdrop element and adds it to the DOM
    _createBackdrop(): void;

    // Removes the modal's backdrop element from the DOM
    _destroyBackdropEl(): void;

    // Sets up event listeners for the modal to allow it to be closed when clicked outside or the Escape key is pressed
    _setupModalCloseEventListeners(): void;

    // Sets up focus trapping within the modal
    _setupFocusTrap(): void;

    // Removes focus trap event listeners
    _removeFocusTrap(): void;

    // Gets all focusable elements within the modal
    _getFocusableElements(): HTMLElement[];

    // Handles clicks outside the modal and hides it if necessary
    _handleOutsideClick(target: EventTarget): void;

    // Returns an array of CSS classes that should be applied to the modal based on its placement option
    _getPlacementClasses(): string[];

    // Toggles the visibility of the modal and calls the onToggle callback function
    toggle(): void;

    // Shows the modal and calls the onShow callback function
    show(): void;

    // Hides the modal and calls the onHide callback function
    hide(): void;

    // return true if modal is hidden
    isHidden(): boolean;

    // return true if modal is visible
    isVisible(): boolean;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    addEventListenerInstance(
        element: HTMLElement,
        type: string,
        handler: EventListenerOrEventListenerObject
    ): void;
    removeAllEventListenerInstances(): void;
    getAllEventListenerInstances(): void;
}

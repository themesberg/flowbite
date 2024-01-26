/* eslint-disable @typescript-eslint/no-empty-function */
import type { DrawerOptions, PlacementClasses } from './types';
import type { InstanceOptions, EventListenerInstance } from '../../dom/types';
import { DrawerInterface } from './interface';
import instances from '../../dom/instances';

const Default: DrawerOptions = {
    placement: 'left',
    bodyScrolling: false,
    backdrop: true,
    edge: false,
    edgeOffset: 'bottom-[60px]',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};

const DefaultInstanceOptions: InstanceOptions = {
    id: null,
    override: true,
};

class Drawer implements DrawerInterface {
    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: DrawerOptions;
    _visible: boolean;
    _eventListenerInstances: EventListenerInstance[] = [];
    _handleEscapeKey: EventListenerOrEventListenerObject;
    _initialized: boolean;

    constructor(
        targetEl: HTMLElement | null = null,
        options: DrawerOptions = Default,
        instanceOptions: InstanceOptions = DefaultInstanceOptions
    ) {
        this._instanceId = instanceOptions.id
            ? instanceOptions.id
            : targetEl.id;
        this._targetEl = targetEl;
        this._options = { ...Default, ...options };
        this._visible = false;
        this._initialized = false;
        this.init();
        instances.addInstance(
            'Drawer',
            this,
            this._instanceId,
            instanceOptions.override
        );
    }

    init() {
        // set initial accessibility attributes
        if (this._targetEl && !this._initialized) {
            this._targetEl.setAttribute('aria-hidden', 'true');
            this._targetEl.classList.add('transition-transform');

            // set base placement classes
            this._getPlacementClasses(this._options.placement).base.map((c) => {
                this._targetEl.classList.add(c);
            });

            this._handleEscapeKey = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    // if 'Escape' key is pressed
                    if (this.isVisible()) {
                        // if the Drawer is visible
                        this.hide(); // hide the Drawer
                    }
                }
            };

            // add keyboard event listener to document
            document.addEventListener('keydown', this._handleEscapeKey);

            this._initialized = true;
        }
    }

    destroy() {
        if (this._initialized) {
            this.removeAllEventListenerInstances();
            this._destroyBackdropEl();

            // Remove the keyboard event listener
            document.removeEventListener('keydown', this._handleEscapeKey);

            this._initialized = false;
        }
    }

    removeInstance() {
        instances.removeInstance('Drawer', this._instanceId);
    }

    destroyAndRemoveInstance() {
        this.destroy();
        this.removeInstance();
    }

    hide() {
        // based on the edge option show placement classes
        if (this._options.edge) {
            this._getPlacementClasses(
                this._options.placement + '-edge'
            ).active.map((c) => {
                this._targetEl.classList.remove(c);
            });
            this._getPlacementClasses(
                this._options.placement + '-edge'
            ).inactive.map((c) => {
                this._targetEl.classList.add(c);
            });
        } else {
            this._getPlacementClasses(this._options.placement).active.map(
                (c) => {
                    this._targetEl.classList.remove(c);
                }
            );
            this._getPlacementClasses(this._options.placement).inactive.map(
                (c) => {
                    this._targetEl.classList.add(c);
                }
            );
        }

        // set accessibility attributes
        this._targetEl.setAttribute('aria-hidden', 'true');
        this._targetEl.removeAttribute('aria-modal');
        this._targetEl.removeAttribute('role');

        // enable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.remove('overflow-hidden');
        }

        // destroy backdrop
        if (this._options.backdrop) {
            this._destroyBackdropEl();
        }

        this._visible = false;

        // callback function
        this._options.onHide(this);
    }

    show() {
        if (this._options.edge) {
            this._getPlacementClasses(
                this._options.placement + '-edge'
            ).active.map((c) => {
                this._targetEl.classList.add(c);
            });
            this._getPlacementClasses(
                this._options.placement + '-edge'
            ).inactive.map((c) => {
                this._targetEl.classList.remove(c);
            });
        } else {
            this._getPlacementClasses(this._options.placement).active.map(
                (c) => {
                    this._targetEl.classList.add(c);
                }
            );
            this._getPlacementClasses(this._options.placement).inactive.map(
                (c) => {
                    this._targetEl.classList.remove(c);
                }
            );
        }

        // set accessibility attributes
        this._targetEl.setAttribute('aria-modal', 'true');
        this._targetEl.setAttribute('role', 'dialog');
        this._targetEl.removeAttribute('aria-hidden');

        // disable body scroll
        if (!this._options.bodyScrolling) {
            document.body.classList.add('overflow-hidden');
        }

        // show backdrop
        if (this._options.backdrop) {
            this._createBackdrop();
        }

        this._visible = true;

        // callback function
        this._options.onShow(this);
    }

    toggle() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
    }

    _createBackdrop() {
        if (!this._visible) {
            const backdropEl = document.createElement('div');
            backdropEl.setAttribute('drawer-backdrop', '');
            backdropEl.classList.add(
                ...this._options.backdropClasses.split(' ')
            );
            document.querySelector('body').append(backdropEl);
            backdropEl.addEventListener('click', () => {
                this.hide();
            });
        }
    }

    _destroyBackdropEl() {
        if (
            this._visible &&
            document.querySelector('[drawer-backdrop]') !== null
        ) {
            document.querySelector('[drawer-backdrop]').remove();
        }
    }

    _getPlacementClasses(placement: string): PlacementClasses {
        switch (placement) {
            case 'top':
                return {
                    base: ['top-0', 'left-0', 'right-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-y-full'],
                };
            case 'right':
                return {
                    base: ['right-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['translate-x-full'],
                };
            case 'bottom':
                return {
                    base: ['bottom-0', 'left-0', 'right-0'],
                    active: ['transform-none'],
                    inactive: ['translate-y-full'],
                };
            case 'left':
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-x-full'],
                };
            case 'bottom-edge':
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['translate-y-full', this._options.edgeOffset],
                };
            default:
                return {
                    base: ['left-0', 'top-0'],
                    active: ['transform-none'],
                    inactive: ['-translate-x-full'],
                };
        }
    }

    isHidden() {
        return !this._visible;
    }

    isVisible() {
        return this._visible;
    }

    addEventListenerInstance(
        element: HTMLElement,
        type: string,
        handler: EventListenerOrEventListenerObject
    ) {
        this._eventListenerInstances.push({
            element: element,
            type: type,
            handler: handler,
        });
    }

    removeAllEventListenerInstances() {
        this._eventListenerInstances.map((eventListenerInstance) => {
            eventListenerInstance.element.removeEventListener(
                eventListenerInstance.type,
                eventListenerInstance.handler
            );
        });
        this._eventListenerInstances = [];
    }

    getAllEventListenerInstances() {
        return this._eventListenerInstances;
    }

    updateOnShow(callback: () => void) {
        this._options.onShow = callback;
    }

    updateOnHide(callback: () => void) {
        this._options.onHide = callback;
    }

    updateOnToggle(callback: () => void) {
        this._options.onToggle = callback;
    }
}

export function initDrawers() {
    document.querySelectorAll('[data-drawer-target]').forEach(($triggerEl) => {
        // mandatory
        const drawerId = $triggerEl.getAttribute('data-drawer-target');
        const $drawerEl = document.getElementById(drawerId);

        if ($drawerEl) {
            const placement = $triggerEl.getAttribute('data-drawer-placement');
            const bodyScrolling = $triggerEl.getAttribute(
                'data-drawer-body-scrolling'
            );
            const backdrop = $triggerEl.getAttribute('data-drawer-backdrop');
            const edge = $triggerEl.getAttribute('data-drawer-edge');
            const edgeOffset = $triggerEl.getAttribute(
                'data-drawer-edge-offset'
            );

            new Drawer($drawerEl, {
                placement: placement ? placement : Default.placement,
                bodyScrolling: bodyScrolling
                    ? bodyScrolling === 'true'
                        ? true
                        : false
                    : Default.bodyScrolling,
                backdrop: backdrop
                    ? backdrop === 'true'
                        ? true
                        : false
                    : Default.backdrop,
                edge: edge ? (edge === 'true' ? true : false) : Default.edge,
                edgeOffset: edgeOffset ? edgeOffset : Default.edgeOffset,
            } as DrawerOptions);
        } else {
            console.error(
                `Drawer with id ${drawerId} not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?`
            );
        }
    });

    document.querySelectorAll('[data-drawer-toggle]').forEach(($triggerEl) => {
        const drawerId = $triggerEl.getAttribute('data-drawer-toggle');
        const $drawerEl = document.getElementById(drawerId);

        if ($drawerEl) {
            const drawer: DrawerInterface = instances.getInstance(
                'Drawer',
                drawerId
            );

            if (drawer) {
                const toggleDrawer = () => {
                    drawer.toggle();
                };
                $triggerEl.addEventListener('click', toggleDrawer);
                drawer.addEventListenerInstance(
                    $triggerEl as HTMLElement,
                    'click',
                    toggleDrawer
                );
            } else {
                console.error(
                    `Drawer with id ${drawerId} has not been initialized. Please initialize it using the data-drawer-target attribute.`
                );
            }
        } else {
            console.error(
                `Drawer with id ${drawerId} not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?`
            );
        }
    });

    document
        .querySelectorAll('[data-drawer-dismiss], [data-drawer-hide]')
        .forEach(($triggerEl) => {
            const drawerId = $triggerEl.getAttribute('data-drawer-dismiss')
                ? $triggerEl.getAttribute('data-drawer-dismiss')
                : $triggerEl.getAttribute('data-drawer-hide');
            const $drawerEl = document.getElementById(drawerId);

            if ($drawerEl) {
                const drawer: DrawerInterface = instances.getInstance(
                    'Drawer',
                    drawerId
                );

                if (drawer) {
                    const hideDrawer = () => {
                        drawer.hide();
                    };
                    $triggerEl.addEventListener('click', hideDrawer);
                    drawer.addEventListenerInstance(
                        $triggerEl as HTMLElement,
                        'click',
                        hideDrawer
                    );
                } else {
                    console.error(
                        `Drawer with id ${drawerId} has not been initialized. Please initialize it using the data-drawer-target attribute.`
                    );
                }
            } else {
                console.error(
                    `Drawer with id ${drawerId} not found. Are you sure that the data-drawer-target attribute points to the correct drawer id`
                );
            }
        });

    document.querySelectorAll('[data-drawer-show]').forEach(($triggerEl) => {
        const drawerId = $triggerEl.getAttribute('data-drawer-show');
        const $drawerEl = document.getElementById(drawerId);

        if ($drawerEl) {
            const drawer: DrawerInterface = instances.getInstance(
                'Drawer',
                drawerId
            );

            if (drawer) {
                const showDrawer = () => {
                    drawer.show();
                };
                $triggerEl.addEventListener('click', showDrawer);
                drawer.addEventListenerInstance(
                    $triggerEl as HTMLElement,
                    'click',
                    showDrawer
                );
            } else {
                console.error(
                    `Drawer with id ${drawerId} has not been initialized. Please initialize it using the data-drawer-target attribute.`
                );
            }
        } else {
            console.error(
                `Drawer with id ${drawerId} not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?`
            );
        }
    });
}

if (typeof window !== 'undefined') {
    window.Drawer = Drawer;
    window.initDrawers = initDrawers;
}

export default Drawer;

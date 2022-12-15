import { CollapseOptions } from './types';

export interface CollapseInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: CollapseOptions;
    _visible: boolean;

    collapse(): void;
    expand(): void;
    toggle(): void;
}

export {};

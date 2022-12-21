import { CollapseOptions } from './types';

export declare interface CollapseInterface {
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: CollapseOptions;
    _visible: boolean;

    _init(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
}

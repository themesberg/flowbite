import { InputCounterOptions } from './types';

export declare interface InputCounterInterface {
    _targetEl: HTMLElement | null;
    _incrementEl: HTMLElement | null;
    _decrementEl: HTMLElement | null;
    _options: InputCounterOptions;

    init(): void;
    increment(): void;
    decrement(): void;

    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
}

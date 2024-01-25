import { InputCounterInterface } from './interface';

export declare type InputCounterOptions = {
    minValue?: number | null;
    maxValue?: number | null;
    onIncrement?: (InputCounter: InputCounterInterface) => void;
    onDecrement?: (InputCounter: InputCounterInterface) => void;
};

import { InputCounterInterface } from './interface';

export declare type InputCounterOptions = {
    minValue?: number | null;
    maxValue?: number | null;
    onIncrement?: (collapse: InputCounterInterface) => void;
    onDecrement?: (collapse: InputCounterInterface) => void;
};

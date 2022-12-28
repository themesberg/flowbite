import { AccordionInterface } from './interface';

export declare type AccordionItem = {
    id: string;
    triggerEl: HTMLElement;
    targetEl: HTMLElement;
    iconEl?: HTMLElement | null;
    active?: boolean;
};

export declare type AccordionOptions = {
    alwaysOpen?: boolean;
    activeClasses?: string;
    inactiveClasses?: string;
    onOpen?: (accordion: AccordionInterface, item: AccordionItem) => void;
    onClose?: (accordion: AccordionInterface, item: AccordionItem) => void;
    onToggle?: (accordion: AccordionInterface, item: AccordionItem) => void;
};

// Import the AccordionItem and AccordionOptions interfaces
import { AccordionItem, AccordionOptions } from './types';

// Define the Accordion interface
export declare interface AccordionInterface {
    _items: AccordionItem[];
    _options: AccordionOptions;

    getItem(id: string): AccordionItem | undefined;
    open(id: string): void;
    toggle(id: string): void;
    close(id: string): void;
}

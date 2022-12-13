export {};

declare global {
    interface Window {
        Accordion: typeof Accordion;
        Collapse: typeof Collapse;
        Dismiss: typeof Dismiss;
        Tooltip: typeof Tooltip;
    }
}

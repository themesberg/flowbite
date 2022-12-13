export type AccordionItem = {
    id: string,
    triggerEl: HTMLElement,
    targetEl: HTMLElement,
    iconEl: HTMLElement | null,
    active: boolean
}

export type AccordionOptions = {
	alwaysOpen: boolean,
    activeClasses: string,
    inactiveClasses: string,
    onOpen: (accordion: Accordion, item: AccordionItem) => void,
    onClose: (accordion: Accordion, item: AccordionItem) => void,
    onToggle: (accordion: Accordion, item: AccordionItem) => void
}
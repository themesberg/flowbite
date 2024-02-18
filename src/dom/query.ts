export function inclusiveQuerySelectorAll(
    parent: Document | Element,
    selectors: string
): Element[] {
    const elements = Array.from(parent.querySelectorAll(selectors));
    if ('matches' in parent && parent.matches(selectors)) {
        elements.unshift(parent);
    }
    return elements;
}

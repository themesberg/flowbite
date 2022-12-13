export type DismissOptions = {
    transition: string,
    duration: number,
    timing: string,
    onHide: (dismiss: Dismiss, targetEl: HTMLElement) => void
}
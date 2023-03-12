const Modal = require('../src/components/modal').default;

test('Modal constructor throws an error without a target element', () => {
    expect(() => new Modal()).toThrow('TargetEl is required for the use of Modal component.');
});

describe('Modal class', () => {
    let modal;

    beforeEach(() => {
        const targetEl = document.createElement('div');
        document.body.appendChild(targetEl);
        modal = new Modal(targetEl, { _isHidden: false });
    });

    afterEach(() => {
        modal._targetEl.parentNode.removeChild(modal._targetEl);
    });

    test('constructor initializes', () => {
        expect(modal._targetEl).toBeDefined();
        expect(modal._isHidden).toBe(true);
    });

    test('show method shows the modal', () => {
        modal.show();
        expect(modal._isHidden).toBe(false);
        expect(modal.isVisible()).toBe(true);
    });

    test('hide method hides the modal', () => {
        modal.hide();
        expect(modal._isHidden).toBe(true);
        expect(modal.isHidden()).toBe(true);
    });

    test('should be closed if escape key is pressed', () => {
        const event = new Event('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(modal._isHidden).toBe(true);
    });

    test('if closable is false, escape key should not close it', () => {
        modal._options.closable = false;
        modal.show();
        const event = new Event('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(modal._isHidden).toBe(false);
    });

    test('if backdrop is dynamic, escape key should not close it', () => {
        modal._options.backdrop = 'dynamic';
        modal.show();
        const event = new Event('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(modal._isHidden).toBe(false);
    });

    test('if modal is open, clicking outside of it should close it', () => {
        const event = new Event('click');
        document.dispatchEvent(event);
        expect(modal._isHidden).toBe(true);
    });

    test('if closable is false, clicking outside of it should not close it', () => {
        modal._options.closable = false;
        modal.show();
        const event = new Event('click');
        document.dispatchEvent(event);
        expect(modal._isHidden).toBe(false);
    });

    test('if backdrop is dynamic, clicking outside of it should not close it', () => {
        modal._options.backdrop = 'dynamic';
        modal.show();
        const event = new Event('click');
        document.dispatchEvent(event);
        expect(modal._isHidden).toBe(false);
    });

    test('should create backdrop element when shown', () => {
        expect(modal._backdropEl).toBeNull();
        modal.show();
        expect(modal._backdropEl).not.toBeNull();
    });
});

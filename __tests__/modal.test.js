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
});
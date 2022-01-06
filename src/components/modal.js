const toggleModal = (modalId, show = true) => {

    const modalEl = document.getElementById(modalId);

    if (show) {
        modalEl.classList.add('flex');
        modalEl.classList.remove('hidden');
        modalEl.setAttribute('aria-modal', 'true');
        modalEl.setAttribute('role', 'dialog');
        modalEl.removeAttribute('aria-hidden');

        // create backdrop element
        var backdropEl = document.createElement('div');
        backdropEl.setAttribute('modal-backdrop', '');
        backdropEl.classList.add('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40');
        document.querySelector('body').append(backdropEl);
    } else {
        modalEl.classList.add('hidden');
        modalEl.classList.remove('flex');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.removeAttribute('aria-modal');
        modalEl.removeAttribute('role');
        document.querySelector('[modal-backdrop]').remove();
    }

}

window.toggleModal = toggleModal;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-modal-toggle]').forEach(function (modalToggleEl) {
        var modalId = modalToggleEl.getAttribute('data-modal-toggle');
        var modalEl = document.getElementById(modalId);

        if (modalEl) {
            if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
                modalEl.setAttribute('aria-hidden', 'true');
            }

            modalToggleEl.addEventListener('click', function () {
                toggleModal(modalId, modalEl.hasAttribute('aria-hidden', 'true'));
            });
        }

    });
});
import './flowbite.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import { createPopper } from '@popperjs/core';
import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';

// Toggle target elements using [data-collapse-toggle]
document.querySelectorAll('[data-collapse-toggle]').forEach(function (collapseToggleEl) {
    var collapseId = collapseToggleEl.getAttribute('data-collapse-toggle');
    var collapseEl = document.getElementById(collapseId);

    collapseToggleEl.addEventListener('click', function() {
        if (collapseEl.classList.contains("hidden")) {
            collapseEl.classList.remove("hidden");
        } else {
            collapseEl.classList.add("hidden");
        }
    });
});

// Toggle dropdown elements using [data-dropdown-toggle]
document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggleEl) {
    var dropdownMenuId = dropdownToggleEl.getAttribute('data-dropdown-toggle');
    var dropdownMenuEl = document.getElementById(dropdownMenuId);

    dropdownToggleEl.addEventListener('click', function (event) {
        var element = event.target;
        while (element.nodeName !== "BUTTON") {
            element = element.parentNode;
        }
        createPopper(element, dropdownMenuEl, {
            placement: 'bottom-start',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ]
        });

        // toggle when click on the button
        dropdownMenuEl.classList.toggle("hidden");
        dropdownMenuEl.classList.toggle("block");

        function handleDropdownOutsideClick(event) {
            var targetElement = event.target; // clicked element
            if (targetElement !== dropdownMenuEl && targetElement !== dropdownToggleEl && !dropdownToggleEl.contains(targetElement)) {
                dropdownMenuEl.classList.add("hidden");
                dropdownMenuEl.classList.remove("block");
                document.body.removeEventListener('click', handleDropdownOutsideClick, true);
            }
        }

        // hide popper when clicking outside the element
        document.body.addEventListener('click', handleDropdownOutsideClick, true);
    });
});

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
        backdropEl.classList.add('bg-gray-900', 'bg-opacity-50', 'fixed', 'inset-0', 'z-40');
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

document.querySelectorAll('[data-modal-toggle]').forEach(function (modalToggleEl) {
    var modalId = modalToggleEl.getAttribute('data-modal-toggle');
    var modalEl = document.getElementById(modalId);

    if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
        modalEl.setAttribute('aria-hidden', 'true');
    }

    modalToggleEl.addEventListener('click', function() {
        toggleModal(modalId, modalEl.hasAttribute('aria-hidden', 'true'));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    tippy('[data-tippy-content]');
});

const getDatepickerOptions = (datepickerEl) => {

    const buttons = datepickerEl.hasAttribute('datepicker-buttons');
    const autohide = datepickerEl.hasAttribute('datepicker-autohide');
    const format = datepickerEl.hasAttribute('datepicker-format');
    const orientation = datepickerEl.hasAttribute('datepicker-orientation');
    const title = datepickerEl.hasAttribute('datepicker-title');

    let options = {};
    if (buttons) {
        options.todayBtn = true;
        options.clearBtn = true;
    }
    if (autohide) {
        options.autohide = true;
    }
    if (format) {
        options.format = datepickerEl.getAttribute('datepicker-format');
    }
    if (orientation) {
        options.orientation = datepickerEl.getAttribute('datepicker-orientation');
    }
    if (title) {
        options.title = datepickerEl.getAttribute('datepicker-title');
    }

    return options;
}

document.querySelectorAll('[datepicker]').forEach(function (datepickerEl) {
    new Datepicker(datepickerEl, getDatepickerOptions(datepickerEl));
});

document.querySelectorAll('[inline-datepicker]').forEach(function (datepickerEl) {
    new Datepicker(datepickerEl, getDatepickerOptions(datepickerEl));
});

document.querySelectorAll('[date-rangepicker]').forEach(function (datepickerEl) {
    new DateRangePicker(datepickerEl, getDatepickerOptions(datepickerEl));
});
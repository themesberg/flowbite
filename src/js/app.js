import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import { createPopper } from '@popperjs/core';

function toggleDropdown(event, dropdownID) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    createPopper(element, document.getElementById(dropdownID), {
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
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
}
window.toggleDropdown = toggleDropdown;

function toggleModal(modalID) {
    const modalId = modalID;
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

window.toggleModal = toggleModal;

document.addEventListener("DOMContentLoaded", function () {
    tippy('[data-tippy-content]');
});

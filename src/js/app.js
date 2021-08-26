import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import { createPopper } from '@popperjs/core';

// general stylings
import '../style.css';

function toggleDropdown(event, dropdownID) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    createPopper(element, document.getElementById(dropdownID), {
        placement: 'bottom-start'
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
}
window.toggleDropdown = toggleDropdown;

document.addEventListener("DOMContentLoaded", function () {
    tippy('[data-tippy-content]');
});

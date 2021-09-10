import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import { createPopper } from '@popperjs/core';

function toggleCollapse(collapseId) {
    const menu = document.getElementById(collapseId);
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}
window.toggleCollapse = toggleCollapse;

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
            console.log('target');
            console.log(targetElement);
            console.log('dropdown menu');
            console.log(dropdownMenuEl);
            console.log('toggle el');
            console.log(dropdownToggleEl);
            if (targetElement !== dropdownMenuEl && targetElement !== dropdownToggleEl) {
                console.log('click outside');
                dropdownMenuEl.classList.add("hidden");
                dropdownMenuEl.classList.remove("block");
                document.body.removeEventListener('click', handleDropdownOutsideClick, true);
            }
        }

        // hide popper when clicking outside the element
        document.body.addEventListener('click', handleDropdownOutsideClick, true);
    });

});

function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

window.toggleModal = toggleModal;

document.addEventListener("DOMContentLoaded", function () {
    tippy('[data-tippy-content]');
});

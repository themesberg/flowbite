import { createPopper } from '@popperjs/core';

document.addEventListener('DOMContentLoaded', () => {
    // Toggle dropdown elements using [data-dropdown-toggle]
    document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggleEl) {
        const dropdownMenuId = dropdownToggleEl.getAttribute('data-dropdown-toggle');
        const dropdownMenuEl = document.getElementById(dropdownMenuId);

        // options
        const placement = dropdownToggleEl.getAttribute('data-dropdown-placement');

        dropdownToggleEl.addEventListener('click', function (event) {
            var element = event.target;
            while (element.nodeName !== "BUTTON") {
                element = element.parentNode;
            }

            createPopper(element, dropdownMenuEl, {
                placement: placement ? placement : 'bottom-start',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10]
                        },
                    },
                ]
            });

            // toggle when click on the button
            dropdownMenuEl.classList.toggle('hidden');
            dropdownMenuEl.classList.toggle('block');

            function handleDropdownOutsideClick(event) {
                var targetElement = event.target; // clicked element
                if (targetElement !== dropdownMenuEl && targetElement !== dropdownToggleEl && !dropdownToggleEl.contains(targetElement)) {
                    dropdownMenuEl.classList.add('hidden');
                    dropdownMenuEl.classList.remove('block');
                    document.body.removeEventListener('click', handleDropdownOutsideClick, true);
                }
            }

            // hide popper when clicking outside the element
            document.body.addEventListener('click', handleDropdownOutsideClick, true);
        });
    });
});

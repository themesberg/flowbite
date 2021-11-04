import { createPopper } from '@popperjs/core';

// Toggle dropdown elements using [data-dropdown-toggle]
document.querySelectorAll('[data-tooltip-target]').forEach(function (tooltipToggleEl) {
    const tooltipEl = document.getElementById(tooltipToggleEl.getAttribute('data-tooltip-target'));
    const placement = tooltipToggleEl.getAttribute('data-tooltip-placement');

    createPopper(tooltipToggleEl, tooltipEl, {
        placement: placement ? placement : 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });

    tooltipToggleEl.addEventListener('mouseover', function () {
        tooltipEl.classList.remove('opacity-0');
        tooltipEl.classList.add('opacity-100');
    });

    tooltipToggleEl.addEventListener('mouseout', function () {
        tooltipEl.classList.remove('opacity-100');
        tooltipEl.classList.add('opacity-0');
    });

});
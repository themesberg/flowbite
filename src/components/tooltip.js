import { createPopper } from '@popperjs/core';

// Toggle dropdown elements using [data-dropdown-toggle]
document.querySelectorAll('[data-tooltip-target]').forEach(function (tooltipToggleEl) {
    const tooltipEl = document.getElementById(tooltipToggleEl.getAttribute('data-tooltip-target'));
    const placement = tooltipToggleEl.getAttribute('data-tooltip-placement');

    const popperInstance = createPopper(tooltipToggleEl, tooltipEl, {
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

    function show() {
        // Make the tooltip visible
        tooltipEl.classList.remove('opacity-0');
        tooltipEl.classList.add('opacity-100');
        tooltipEl.classList.remove('invisible');
        tooltipEl.classList.add('visible');

        // Enable the event listeners
        popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }));

        // Update its position
        popperInstance.update();
    }

    function hide() {
        // Hide the tooltip
        tooltipEl.classList.remove('opacity-100');
        tooltipEl.classList.add('opacity-0');
        tooltipEl.classList.remove('visible');
        tooltipEl.classList.add('invisible');

        // Disable the event listeners
        popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }));
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
        tooltipToggleEl.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
        tooltipToggleEl.addEventListener(event, hide);
    });

});
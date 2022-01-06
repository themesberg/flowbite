import { createPopper } from '@popperjs/core';

document.addEventListener('DOMContentLoaded', () => {
    // Toggle dropdown elements using [data-dropdown-toggle]
    document.querySelectorAll('[data-tooltip-target]').forEach(function (tooltipToggleEl) {
        const tooltipEl = document.getElementById(tooltipToggleEl.getAttribute('data-tooltip-target'));
        const placement = tooltipToggleEl.getAttribute('data-tooltip-placement');
        const trigger = tooltipToggleEl.getAttribute('data-tooltip-trigger');

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

        var showEvents = [];
        var hideEvents = [];

        switch (trigger) {
            case 'hover':
                showEvents = ['mouseenter', 'focus'];
                hideEvents = ['mouseleave', 'blur'];
                break;
            case 'click':
                showEvents = ['click', 'focus'];
                hideEvents = ['focusout', 'blur'];
                break;
            default:
                showEvents = ['mouseenter', 'focus'];
                hideEvents = ['mouseleave', 'blur'];
        }

        showEvents.forEach((event) => {
            tooltipToggleEl.addEventListener(event, show);
        });

        hideEvents.forEach((event) => {
            tooltipToggleEl.addEventListener(event, hide);
        });

    });
});

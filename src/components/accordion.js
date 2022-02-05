const hideAllOtherAccordionHeaderElements = (accordionHeaderElements, currentAccordionHeaderEl) => {
    accordionHeaderElements.forEach(headerEl => {
        if (currentAccordionHeaderEl !== headerEl) {
            const bodyEl = document.querySelector(headerEl.getAttribute('data-accordion-target'));
            headerEl.setAttribute('aria-expanded', false);
            headerEl.classList.remove('bg-gray-100')
            bodyEl.classList.add('hidden');
    
            if (headerEl.querySelector('[data-accordion-icon]')) {
                headerEl.querySelector('[data-accordion-icon]').classList.remove('rotate-180');
            }
        }
    });
}

const rotateAccordionIcon = (accordionHeaderEl) => {
    if (accordionHeaderEl.querySelector('[data-accordion-icon]')) {
        accordionHeaderEl.querySelector('[data-accordion-icon]').classList.toggle('rotate-180');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-accordion]').forEach(function (accordionEl) {
        const accordionId = accordionEl.getAttribute('id');
        const collapseAccordion = accordionEl.getAttribute('data-accordion');
        const accordionHeaderElements = document.querySelectorAll('#' + accordionId + ' [data-accordion-target]');
        
        accordionHeaderElements.forEach(accordionHeaderEl => {

            const accordionBodyEl = document.querySelector(accordionHeaderEl.getAttribute('data-accordion-target'));

            accordionHeaderEl.addEventListener('click', () => {

                if (collapseAccordion === 'collapse') {
                    hideAllOtherAccordionHeaderElements(accordionHeaderElements, accordionHeaderEl);
                }

                if (accordionHeaderEl.getAttribute('aria-expanded') === 'true') {
                    accordionHeaderEl.setAttribute('aria-expanded', false);

                    accordionHeaderEl.classList.remove('bg-gray-100')
                    accordionBodyEl.classList.add('hidden');

                    rotateAccordionIcon(accordionHeaderEl);
                } else {
                    accordionHeaderEl.setAttribute('aria-expanded', true);

                    accordionHeaderEl.classList.add('bg-gray-100')
                    accordionBodyEl.classList.remove('hidden');

                    rotateAccordionIcon(accordionHeaderEl);
                }
            })

        });
    });
});
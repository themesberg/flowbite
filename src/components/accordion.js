const hideAllOtherAccordionHeaderElements = (accordionHeaderElements, currentAccordionHeaderEl, activeClassesArray, inactiveClassesArray) => {
    accordionHeaderElements.forEach(headerEl => {
        if (currentAccordionHeaderEl !== headerEl) {
            const bodyEl = document.querySelector(headerEl.getAttribute('data-accordion-target'));
            headerEl.setAttribute('aria-expanded', false);
            // active classes
            activeClassesArray.map(c => {
                headerEl.classList.remove(c);
            })
            // inactive classes
            inactiveClassesArray.map(c => {
                headerEl.classList.add(c);
            })
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
        const activeClasses = accordionEl.getAttribute('data-active-classes');
        const inactiveClasses = accordionEl.getAttribute('data-inactive-classes');
        
        let activeClassesArray = null;
        if (activeClasses && activeClasses !== '') {
            activeClassesArray = activeClasses.split(" ");
        } else {
            // fallback classes if option not set
            activeClassesArray = ['bg-gray-100', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-white'];
        }

        let inactiveClassesArray = null;
        if (inactiveClasses && inactiveClasses !== '') {
            inactiveClassesArray = inactiveClasses.split(" ");
        } else {
            // fallback classes if option not set
            inactiveClassesArray = ['text-gray-500', 'dark:text-gray-400'];
        }

        accordionHeaderElements.forEach(accordionHeaderEl => {

            const accordionBodyEl = document.querySelector(accordionHeaderEl.getAttribute('data-accordion-target'));

            accordionHeaderEl.addEventListener('click', () => {

                if (collapseAccordion === 'collapse') {
                    hideAllOtherAccordionHeaderElements(accordionHeaderElements, accordionHeaderEl, activeClassesArray, inactiveClassesArray);
                }

                if (accordionHeaderEl.getAttribute('aria-expanded') === 'true') {
                    accordionHeaderEl.setAttribute('aria-expanded', false);

                    // active classes
                    activeClassesArray.map(c => {
                        accordionHeaderEl.classList.remove(c);
                    })

                    // inactive classes
                    inactiveClassesArray.map(c => {
                        accordionHeaderEl.classList.add(c);
                    })

                    accordionBodyEl.classList.add('hidden');

                    rotateAccordionIcon(accordionHeaderEl);
                } else {
                    accordionHeaderEl.setAttribute('aria-expanded', true);

                    // active classes
                    activeClassesArray.map(c => {
                        accordionHeaderEl.classList.add(c);
                    })

                    // inactive classes
                    inactiveClassesArray.map(c => {
                        accordionHeaderEl.classList.remove(c);
                    })

                    accordionBodyEl.classList.remove('hidden');

                    rotateAccordionIcon(accordionHeaderEl);
                }
            })

        });
    });
});
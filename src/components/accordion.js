// const hideAllOtherAccordionHeaderElements = (accordionHeaderElements, currentAccordionHeaderEl, activeClassesArray, inactiveClassesArray) => {
//     accordionHeaderElements.forEach(headerEl => {
//         if (currentAccordionHeaderEl !== headerEl) {
//             const bodyEl = document.querySelector(headerEl.getAttribute('data-accordion-target'));
//             headerEl.setAttribute('aria-expanded', false);
//             // active classes
//             activeClassesArray.map(c => {
//                 headerEl.classList.remove(c);
//             })
//             // inactive classes
//             inactiveClassesArray.map(c => {
//                 headerEl.classList.add(c);
//             })
//             bodyEl.classList.add('hidden');
    
//             if (headerEl.querySelector('[data-accordion-icon]')) {
//                 headerEl.querySelector('[data-accordion-icon]').classList.remove('rotate-180');
//             }
//         }
//     });
// }

// const rotateAccordionIcon = (accordionHeaderEl) => {
//     if (accordionHeaderEl.querySelector('[data-accordion-icon]')) {
//         accordionHeaderEl.querySelector('[data-accordion-icon]').classList.toggle('rotate-180');
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('[data-accordion]').forEach(function (accordionEl) {
//         const accordionId = accordionEl.getAttribute('id');
//         const collapseAccordion = accordionEl.getAttribute('data-accordion');
//         const accordionHeaderElements = document.querySelectorAll('#' + accordionId + ' [data-accordion-target]');
//         const activeClasses = accordionEl.getAttribute('data-active-classes');
//         const inactiveClasses = accordionEl.getAttribute('data-inactive-classes');
        
//         let activeClassesArray = null;
//         if (activeClasses && activeClasses !== '') {
//             activeClassesArray = activeClasses.split(" ");
//         } else {
//             // fallback classes if option not set
//             activeClassesArray = ['bg-gray-100', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-white'];
//         }

//         let inactiveClassesArray = null;
//         if (inactiveClasses && inactiveClasses !== '') {
//             inactiveClassesArray = inactiveClasses.split(" ");
//         } else {
//             // fallback classes if option not set
//             inactiveClassesArray = ['text-gray-500', 'dark:text-gray-400'];
//         }

//         accordionHeaderElements.forEach(accordionHeaderEl => {

//             const accordionBodyEl = document.querySelector(accordionHeaderEl.getAttribute('data-accordion-target'));

//             accordionHeaderEl.addEventListener('click', () => {

//                 if (collapseAccordion === 'collapse') {
//                     hideAllOtherAccordionHeaderElements(accordionHeaderElements, accordionHeaderEl, activeClassesArray, inactiveClassesArray);
//                 }

//                 if (accordionHeaderEl.getAttribute('aria-expanded') === 'true') {
//                     accordionHeaderEl.setAttribute('aria-expanded', false);

//                     // active classes
//                     activeClassesArray.map(c => {
//                         accordionHeaderEl.classList.remove(c);
//                     })

//                     // inactive classes
//                     inactiveClassesArray.map(c => {
//                         accordionHeaderEl.classList.add(c);
//                     })

//                     accordionBodyEl.classList.add('hidden');

//                     rotateAccordionIcon(accordionHeaderEl);
//                 } else {
//                     accordionHeaderEl.setAttribute('aria-expanded', true);

//                     // active classes
//                     activeClassesArray.map(c => {
//                         accordionHeaderEl.classList.add(c);
//                     })

//                     // inactive classes
//                     inactiveClassesArray.map(c => {
//                         accordionHeaderEl.classList.remove(c);
//                     })

//                     accordionBodyEl.classList.remove('hidden');

//                     rotateAccordionIcon(accordionHeaderEl);
//                 }
//             })

//         });
//     });
// });

const Default = {
    onShow: () => { }
}

class Accordion {
    constructor(tabs = [], activeTabID = null, options = {}) {
        this._tabs = tabs
        this._activeTab = activeTabID ? this.getTabByID(activeTabID) : null
        this._options = { ...Default, ...options }
        this._init()
    }

    _init() {
        if (this._tabs.length) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this._setActiveTab(this._tabs[0])
            }

            // force show the first default tab
            this.show(this._activeTab.id, true)

            // show tab content based on click
            this._tabs.map(tab => {
                tab.triggerEl.addEventListener('click', () => {
                    this.show(tab.id)
                })
            })
        }
    }

    getActiveTab() {
        return this._activeTab
    }

    _setActiveTab(tab) {
        this._activeTab = tab
    }

    getTabByID(id) {
        return this._tabs.filter(t => t.id === id)[0]
    }

    show(id, forceShow = false) {
        const tab = this.getTabByID(id)

        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return
        }

        // hide other tabs
        this._tabs.map(t => {
            if (t !== tab) {
                t.triggerEl.classList.remove('active')
                t.contentEl.classList.add('hidden')
                t.triggerEl.setAttribute('aria-selected', false)
            }
        })

        // show active tab
        tab.triggerEl.classList.add('active')
        tab.triggerEl.setAttribute('aria-selected', true)
        tab.contentEl.classList.remove('hidden')

        this._setActiveTab(tab)

        // callback function
        this._options.onShow()
    }

}

window.Accordion = Accordion;

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('[data-tabs-toggle]').forEach(triggerEl => {

//         const tabElements = []
//         let activeTabID = null
//         triggerEl.querySelectorAll('[role="tab"]').forEach(el => {
//             const isActive = el.getAttribute('aria-selected') === 'true'
//             const tab = {
//                 id: el.getAttribute('data-tabs-target'),
//                 triggerEl: el,
//                 contentEl: document.querySelector(el.getAttribute('data-tabs-target'))
//             }
//             tabElements.push(tab)

//             if (isActive) {
//                 activeTabID = tab.id
//             }
//         })

//         const tabs = new Tabs(tabElements, activeTabID, {
//             onShow: () => {
//                 console.log('tab is shown')
//             }
//         })
//         console.log(tabs)
//     })
// })

export default Accordion
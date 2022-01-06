
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tabs-toggle]').forEach(function (tabsToggleEl) {

        const tabsToggleElementsId = tabsToggleEl.getAttribute('id');
        const tabsToggleElements = document.querySelectorAll('#' + tabsToggleElementsId + ' [role="tab"]');

        var activeTabToggleEl = null;
        var activeTabContentEl = null;

        tabsToggleElements.forEach(function (tabToggleEl) {
            tabToggleEl.addEventListener('click', function (event) {
                var tabToggleEl = event.target;
                var tabTargetSelector = tabToggleEl.getAttribute('data-tabs-target');
                var tabContentEl = document.querySelector(tabTargetSelector);

                // don't do anything if it's already active
                if (tabToggleEl !== activeTabToggleEl) {

                    // find currently active tab toggle and content if not set
                    if (!activeTabToggleEl && !activeTabContentEl) {
                        activeTabToggleEl = document.querySelector('#' + tabsToggleElementsId + ' [aria-selected="true"]');
                        activeTabContentEl = document.querySelector(activeTabToggleEl.getAttribute('data-tabs-target'));
                    }

                    // show and activate tab
                    tabToggleEl.classList.add('active');
                    tabToggleEl.setAttribute('aria-selected', true);
                    tabContentEl.classList.remove('hidden');

                    // hide and deactive currently active tab toggle and content
                    activeTabToggleEl.setAttribute('aria-selected', false);
                    activeTabToggleEl.classList.remove('active');
                    activeTabContentEl.classList.add('hidden');

                    // set currently active toggle and content tabs
                    activeTabToggleEl = tabToggleEl;
                    activeTabContentEl = tabContentEl;
                }

            });
        });
    });
});
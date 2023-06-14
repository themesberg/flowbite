import { initAccordions } from './accordion';
import { initCarousels } from './carousel';
import { initCollapses } from './collapse';
import { initDials } from './dial';
import { initDismisses } from './dismiss';
import { initDrawers } from './drawer';
import { initDropdowns } from './dropdown';
import { initModals } from './modal';
import { initPopovers } from './popover';
import { initTabs } from './tabs';
import { initTooltips } from './tooltip';

export function initFlowbite() {
    initAccordions();
    initCollapses();
    initCarousels();
    initDismisses();
    initDropdowns();
    initModals();
    initDrawers();
    initTabs();
    initTooltips();
    initPopovers();
    initDials();
}

if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}

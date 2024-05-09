import { initAccordions } from './accordion';
import { initCarousels } from './carousel';
import { initCopyClipboards } from './clipboard';
import { initCollapses } from './collapse';
import { initDials } from './dial';
import { initDismisses } from './dismiss';
import { initDrawers } from './drawer';
import { initDropdowns } from './dropdown';
import { initInputCounters } from './input-counter';
import { initModals } from './modal';
import { initPopovers } from './popover';
import { initTabs } from './tabs';
import { initTooltips } from './tooltip';
import { initDatepickers } from '../plugins/datepicker';

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
    initInputCounters();
    initCopyClipboards();
    initDatepickers();
}

if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}

import { initAccordions, initAccordionsFrom } from './accordion';
import { initCarousels, initCarouselsFrom } from './carousel';
import { initCopyClipboards, initCopyClipboardsFrom } from './clipboard';
import { initCollapses, initCollapsesFrom } from './collapse';
import { initDials, initDialsFrom } from './dial';
import { initDismisses, initDismissesFrom } from './dismiss';
import { initDrawers, initDrawersFrom } from './drawer';
import { initDropdowns, initDropdownsFrom } from './dropdown';
import { initInputCounters, initInputCountersFrom } from './input-counter';
import { initModals, initModalsFrom } from './modal';
import { initPopovers, initPopoversFrom } from './popover';
import { initTabs, initTabsFrom } from './tabs';
import { initTooltips, initTooltipsFrom } from './tooltip';
import { observeFlowbite } from '../dom/observer';


export function initFlowbiteFrom(subtree: Document | Element) {
    initAccordionsFrom(subtree);
    initCollapsesFrom(subtree);
    initCarouselsFrom(subtree);
    initDismissesFrom(subtree);
    initDropdownsFrom(subtree);
    initModalsFrom(subtree);
    initDrawersFrom(subtree);
    initTabsFrom(subtree);
    initTooltipsFrom(subtree);
    initPopoversFrom(subtree);
    initDialsFrom(subtree);
    initInputCountersFrom(subtree);
    initCopyClipboardsFrom(subtree);
}

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
}

export function initAndObserveFlowbite() {
    initFlowbite()
    observeFlowbite()
}

if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}

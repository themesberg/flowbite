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
import { initDatepickers } from './datepicker';
import { RootElement } from '../dom/types';

export function initFlowbite($rootElement: RootElement = document) {
    initAccordions($rootElement);
    initCollapses($rootElement);
    initCarousels($rootElement);
    initDismisses($rootElement);
    initDropdowns($rootElement);
    initModals($rootElement);
    initDrawers($rootElement);
    initTabs($rootElement);
    initTooltips($rootElement);
    initPopovers($rootElement);
    initDials($rootElement);
    initInputCounters($rootElement);
    initCopyClipboards($rootElement);
    initDatepickers($rootElement);
}

if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}

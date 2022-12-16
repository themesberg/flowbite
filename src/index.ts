// core components
import { initAccordions } from './components/accordion';
import { initCarousels } from './components/carousel';
import { initCollapses } from './components/collapse';
import { initDials } from './components/dial';
import { initDismisses } from './components/dismiss';
import { initDrawers } from './components/drawer';
import { initDropdowns } from './components/dropdown';
import { initModals } from './components/modal';
import { initPopovers } from './components/popover';
import { initTabs } from './components/tabs';
import { initTooltips } from './components/tooltip';
import Events from './dom/events';

const events = new Events('load', [
    initAccordions,
    initCarousels,
    initCollapses,
    initDismisses,
    initDropdowns,
    initModals,
    initDrawers,
    initTabs,
    initTooltips,
    initPopovers,
    initDials,
]);
events.init();

export { default as Accordion } from './components/accordion';
export { default as Carousel } from './components/carousel';
export { default as Collapse } from './components/collapse';
export { default as Dial } from './components/dial';
export { default as Dismiss } from './components/dismiss';
export { default as Drawer } from './components/drawer';
export { default as Dropdown } from './components/dropdown';
export { default as Modal } from './components/modal';
export { default as Popover } from './components/popover';
export { default as Tabs } from './components/tabs';
export { default as Tooltip } from './components/tooltip';

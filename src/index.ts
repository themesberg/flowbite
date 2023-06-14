import Events from './dom/events';
import { initAccordions } from './components/accordion';
import { initCollapses } from './components/collapse';
import { initCarousels } from './components/carousel';
import { initDismisses } from './components/dismiss';
import { initDropdowns } from './components/dropdown';
import { initModals } from './components/modal';
import { initDrawers } from './components/drawer';
import { initTabs } from './components/tabs';
import { initTooltips } from './components/tooltip';
import { initPopovers } from './components/popover';
import { initDials } from './components/dial';
import './components/index';

// setup events for data attributes
const events = new Events('load', [
    initAccordions,
    initCollapses,
    initCarousels,
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

// export all components
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

// export all types
export * from './components/accordion/types';
export * from './components/carousel/types';
export * from './components/collapse/types';
export * from './components/dial/types';
export * from './components/dismiss/types';
export * from './components/drawer/types';
export * from './components/dropdown/types';
export * from './components/modal/types';
export * from './components/popover/types';
export * from './components/tabs/types';
export * from './components/tooltip/types';

// export all interfaces
export * from './components/accordion/interface';
export * from './components/carousel/interface';
export * from './components/collapse/interface';
export * from './components/dial/interface';
export * from './components/dismiss/interface';
export * from './components/drawer/interface';
export * from './components/dropdown/interface';
export * from './components/modal/interface';
export * from './components/popover/interface';
export * from './components/tabs/interface';
export * from './components/tooltip/interface';

// export init functions
export { initAccordions } from './components/accordion';
export { initCarousels } from './components/carousel';
export { initCollapses } from './components/collapse';
export { initDials } from './components/dial';
export { initDismisses } from './components/dismiss';
export { initDrawers } from './components/drawer';
export { initDropdowns } from './components/dropdown';
export { initModals } from './components/modal';
export { initPopovers } from './components/popover';
export { initTabs } from './components/tabs';
export { initTooltips } from './components/tooltip';

// export all init functions
export { initFlowbite } from './components/index';

import './flowbite.css';

// core components
import Accordion, { initAccordions } from './components/accordion';
import Carousel, { initCarousels } from './components/carousel';
import Collapse, { initCollapses } from './components/collapse';
import Dial, { initDials } from './components/dial';
import Dismiss, { initDismisses } from './components/dismiss';
import Drawer, { initDrawers } from './components/drawer';
import Dropdown, { initDropdowns } from './components/dropdown';
import Modal, { initModals } from './components/modal';
import Popover, { initPopovers } from './components/popover';
import Tabs, { initTabs } from './components/tabs';
import Tooltip, { initTooltips } from './components/tooltip';
import InputCounter, { initInputCounters } from './components/input-counter';
import CopyClipboard, { initCopyClipboards } from './components/clipboard';
import Datepicker, { initDatepickers } from './components/datepicker';
import './components/index';
import Events from './dom/events';

const events = new Events('load', [
    () => initAccordions(),
    () => initCollapses(),
    () => initCarousels(),
    () => initDismisses(),
    () => initDropdowns(),
    () => initModals(),
    () => initDrawers(),
    () => initTabs(),
    () => initTooltips(),
    () => initPopovers(),
    () => initDials(),
    () => initCopyClipboards(),
    () => initInputCounters(),
    () => initDatepickers(),
]);
events.init();

export default {
    Accordion,
    Carousel,
    Collapse,
    Dial,
    Drawer,
    Dismiss,
    Dropdown,
    Modal,
    Popover,
    Tabs,
    Tooltip,
    InputCounter,
    CopyClipboard,
    Datepicker,
    Events,
};

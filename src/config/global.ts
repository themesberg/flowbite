import Accordion from '../components/accordion';
import Carousel from '../components/carousel';
import Collapse from '../components/collapse';
import Dial from '../components/dial';
import Dismiss from '../components/dismiss';
import Drawer from '../components/drawer';
import Dropdown from '../components/dropdown';
import Modal from '../components/modal';
import Popover from '../components/popover';
import Tabs from '../components/tabs';
import Tooltip from '../components/tooltip';

declare global {
    interface Window {
        Accordion: typeof Accordion;
        Carousel: typeof Carousel;
        Collapse: typeof Collapse;
        Dial: typeof Dial;
        Dismiss: typeof Dismiss;
        Drawer: typeof Drawer;
        Dropdown: typeof Dropdown;
        Modal: typeof Modal;
        Popover: typeof Popover;
        Tabs: typeof Tabs;
        Tooltip: typeof Tooltip;
        initAccordions: () => void;
        initCarousels: () => void;
        initCollapses: () => void;
        initDials: () => void;
        initDismisses: () => void;
        initDrawers: () => void;
        initDropdowns: () => void;
        initModals: () => void;
        initPopovers: () => void;
        initTabs: () => void;
        initTooltips: () => void;
        initFlowbite: () => void;
    }
}

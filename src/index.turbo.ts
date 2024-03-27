// core components
import Accordion from './components/accordion';
import Carousel from './components/carousel';
import Collapse from './components/collapse';
import Dial from './components/dial';
import Dismiss from './components/dismiss';
import Drawer from './components/drawer';
import Dropdown from './components/dropdown';
import Modal from './components/modal';
import Popover from './components/popover';
import Tabs from './components/tabs';
import Tooltip from './components/tooltip';
import InputCounter from './components/input-counter';
import CopyClipboard from './components/clipboard';
import { initAndObserveFlowbite } from './components';
import Events from './dom/events';

const turboLoadEvents = new Events('turbo:load', [initAndObserveFlowbite]);
turboLoadEvents.init();

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
    Events,
};

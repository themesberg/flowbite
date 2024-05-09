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
import Datepicker from './plugins/datepicker';
import { initFlowbite } from './components/index';
import Events from './dom/events';

// Since turbo maintainers refuse to add this event, we'll add it ourselves
// https://discuss.hotwired.dev/t/event-to-know-a-turbo-stream-has-been-rendered/1554/10
const afterRenderEvent = new Event('turbo:after-stream-render');
addEventListener('turbo:before-stream-render', (event: CustomEvent) => {
    const originalRender = event.detail.render;

    event.detail.render = function (streamElement: Element) {
        originalRender(streamElement);
        document.dispatchEvent(afterRenderEvent);
    };
});

const turboLoadEvents = new Events('turbo:load', [initFlowbite]);
turboLoadEvents.init();

const turboFrameLoadEvents = new Events('turbo:frame-load', [initFlowbite]);
turboFrameLoadEvents.init();

const turboStreamLoadEvents = new Events('turbo:after-stream-render', [
    initFlowbite,
]);
turboStreamLoadEvents.init();

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

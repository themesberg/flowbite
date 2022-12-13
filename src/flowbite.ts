import './flowbite.css';

// core components
import Accordion, { initAccordions } from './components/accordion'
import Collapse, { initCollapses } from './components/collapse'
import Carousel, { initCarousels } from './components/carousel'
import Dismiss, { initDismisses } from './components/dismiss'
import Dropdown, { initDropdowns } from './components/dropdown'
import Modal, { initModals } from './components/modal'
import Drawer, { initDrawers } from './components/drawer'
import Tabs, { initTabs } from './components/tabs'
import Tooltip, { initTooltips } from './components/tooltip'
import Popover, { initPopovers } from './components/popover'
import Dial, { initDials } from './components/dial'
import Events from './dom/events'

const events = new Events('load', [initAccordions, initCollapses, initCarousels, initDismisses, initDropdowns, initModals, initDrawers, initTabs, initTooltips, initPopovers, initDials])
events.init()

export default {
    Accordion,
    Collapse,
    Carousel,
    Dismiss,
    Dropdown,
    Modal,
    Drawer,
    Tabs,
    Tooltip,
    Popover,
    Dial,
    Events
}

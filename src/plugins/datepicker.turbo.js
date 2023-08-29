import { initDatepickers } from './datepicker';
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import Events from '../dom/events';

const turboLoadEvents = new Events('turbo:load', [initDatepickers]);
const turboFrameLoadEvents = new Events('turbo:frame-load', [initDatepickers]);

turboLoadEvents.init();
turboFrameLoadEvents.init();

export default {
    Datepicker,
    DateRangePicker,
};

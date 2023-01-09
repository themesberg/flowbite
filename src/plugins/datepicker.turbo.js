import { initDatepickers } from "./datepicker";
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import Events from "../dom/events";

const events = new Events('turbo:load', [
    initDatepickers,
]);
events.init();

export default {
    Datepicker,
    DateRangePicker,
}
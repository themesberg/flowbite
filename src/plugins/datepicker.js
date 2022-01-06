import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';

const getDatepickerOptions = (datepickerEl) => {

    const buttons = datepickerEl.hasAttribute('datepicker-buttons');
    const autohide = datepickerEl.hasAttribute('datepicker-autohide');
    const format = datepickerEl.hasAttribute('datepicker-format');
    const orientation = datepickerEl.hasAttribute('datepicker-orientation');
    const title = datepickerEl.hasAttribute('datepicker-title');

    let options = {};
    if (buttons) {
        options.todayBtn = true;
        options.clearBtn = true;
    }
    if (autohide) {
        options.autohide = true;
    }
    if (format) {
        options.format = datepickerEl.getAttribute('datepicker-format');
    }
    if (orientation) {
        options.orientation = datepickerEl.getAttribute('datepicker-orientation');
    }
    if (title) {
        options.title = datepickerEl.getAttribute('datepicker-title');
    }

    return options;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[datepicker]').forEach(function (datepickerEl) {
        new Datepicker(datepickerEl, getDatepickerOptions(datepickerEl));
    });
    
    document.querySelectorAll('[inline-datepicker]').forEach(function (datepickerEl) {
        new Datepicker(datepickerEl, getDatepickerOptions(datepickerEl));
    });
    
    document.querySelectorAll('[date-rangepicker]').forEach(function (datepickerEl) {
        new DateRangePicker(datepickerEl, getDatepickerOptions(datepickerEl));
    });
});

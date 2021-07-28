import "./../styles/app.scss";
import '@popperjs/core';
import 'bootstrap';
import { Tooltip } from 'bootstrap';

document.addEventListener("DOMContentLoaded", function () {

  // Bootstrap setup
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl)
  })

});

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';

// general stylings
import '../style.css';

document.addEventListener("DOMContentLoaded",function(){
    tippy('[data-tippy-content]');
});
// import '../style.css';

// import "../styles/docs/docs.scss";
// import '@popperjs/core';
// import 'bootstrap';
// import { Tooltip } from 'bootstrap';
// import interact from 'interactjs';

// document.addEventListener("DOMContentLoaded", function () {

//   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark');
//     document.documentElement.classList.remove('light');
//     document.getElementById('toggleDarkEl').checked = true;
//   } else {
//     document.documentElement.classList.remove('dark');
//     document.documentElement.classList.add('light');
//     document.getElementById('toggleDarkEl').checked = false;
//   }

//   document.getElementById('toggleDarkEl').addEventListener('change', function (e) {
//     e.preventDefault();

//     if (this.checked) {
//       document.documentElement.classList.add('dark');
//       document.documentElement.classList.remove('light');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.documentElement.classList.add('light');
//       localStorage.setItem('theme', 'light');
//     }
//   });

//   // Set current year
//   document.getElementById('currentYear').textContent = new Date().getFullYear();

//   // Bootstrap setup
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new Tooltip(tooltipTriggerEl)
//   })

//   // Toggle responsive view
//   document.querySelector('.toggle-responsive') && document.querySelector('.toggle-responsive').addEventListener('click', function (ev) {
//     var el = ev.target;
//     var toggleResponsive = el.getAttribute('data-toggle-responsive');

//     if (toggleResponsive === 'false') {
//       el.setAttribute('data-toggle-responsive', 'true');
//     } else {
//       el.setAttribute('data-toggle-responsive', 'false');
//     }
//   })

//   // Toggle RTL view
//   var rtlTogglesList = [].slice.call(document.querySelectorAll('.toggle-rtl'))
//   rtlTogglesList.map(function (el) {
//     el.addEventListener('click', function (ev) {
//       console.log('toggle');
//       var el = ev.target;
//       var toggleRTL = el.getAttribute('data-toggle-rtl');
//       var contentId = el.getAttribute('data-content-id');
//       var contentLTR = document.getElementById('iframe-content-' + contentId);
//       var contentRTL = document.getElementById('iframe-content-rtl-' + contentId);
//       var codeLTR = document.getElementById('code-ltr-' + contentId);
//       var codeRTL = document.getElementById('code-rtl-' + contentId);

//       if (toggleRTL === 'LTR') {
//         contentLTR.style.display = 'none';
//         contentRTL.style.display = 'block';
//         codeLTR.style.display = 'none';
//         codeRTL.style.display = 'block';
//         el.textContent = 'LTR';
//         el.setAttribute('data-toggle-rtl', 'RTL');
//       } else {
//         contentLTR.style.display = 'block';
//         contentRTL.style.display = 'none';
//         codeLTR.style.display = 'block';
//         codeRTL.style.display = 'none';
//         el.textContent = 'RTL';
//         el.setAttribute('data-toggle-rtl', 'LTR');
//       }
//     })
//   })

//   interact('.resizable')
//     .resizable({
//       edges: { top: true, left: true, bottom: true, right: true },
//       listeners: {
//         move: function (event) {
//           let { x, y } = event.target.dataset

//           x = (parseFloat(x) || 0) + event.deltaRect.left
//           y = (parseFloat(y) || 0) + event.deltaRect.top

//           Object.assign(event.target.style, {
//             width: `${event.rect.width}px`,
//             height: `${event.rect.height}px`,
//             transform: `translate(${x}px, ${y}px)`
//           })

//           Object.assign(event.target.dataset, { x, y })
//         }
//       }
//     })

// });

// function setupIframe(obj) {
//   obj.style.display = 'block';
//   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
//   if (obj.getAttribute('data-dir') === 'rtl') {
//     obj.style.display = 'none';
//   }
// }
// window.setupIframe = setupIframe;

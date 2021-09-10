---
layout: home
title: Dropdowns
description: Use the Tailwind CSS dropdown elements to show a list of items displayed as a menu
group: components
toc: true
---

If you want to use the dropdown functionality, make sure that you have [Popper.js](https://popper.js.org/) included in your project. By default, FlowBite already includes this package in the main javascript file.

## Dropdown example

If you want to show a dropdown menu when click on an element, make sure that you add the the `data-dropdown-toggle="dropdownId"` data attribute to the element that will toggle the dropdown menu.

The `dropdownId` is the id of the dropdown menu element.

{{< example >}}
<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
    <div class="px-4 py-3" role="none">
      <p class="text-sm" role="none">
        Bonnie Green
      </p>
      <p class="text-sm font-medium text-gray-900 truncate" role="none">
        name@company.com
      </p>
    </div>
    <ul class="py-1" role="none">
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Dashboard</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Settings</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Earnings</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## JavaScript

Although already included in the `flowbite.js` file, this is the JavaScript code that searches for all of the data attributes and toggles the dropdown menu.

```javascript
document.querySelectorAll('[data-dropdown-toggle]').forEach(function (dropdownToggleEl) {
    var dropdownMenuId = dropdownToggleEl.getAttribute('data-dropdown-toggle');
    var dropdownMenuEl = document.getElementById(dropdownMenuId);

    dropdownToggleEl.addEventListener('click', function (event) {
        var element = event.target;
        while (element.nodeName !== "BUTTON") {
            element = element.parentNode;
        }
        createPopper(element, dropdownMenuEl, {
            placement: 'bottom-start',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ]
        });

        // toggle when click on the button
        dropdownMenuEl.classList.toggle("hidden");
        dropdownMenuEl.classList.toggle("block");

        function handleDropdownOutsideClick(event) {
            var targetElement = event.target; // clicked element
            if (targetElement !== dropdownMenuEl && targetElement !== dropdownToggleEl) {
                console.log('click outside');
                dropdownMenuEl.classList.add("hidden");
                dropdownMenuEl.classList.remove("block");
                document.body.removeEventListener('click', handleDropdownOutsideClick, true);
            }
        }

        // hide popper when clicking outside the element
        document.body.addEventListener('click', handleDropdownOutsideClick, true);
    });

});
```
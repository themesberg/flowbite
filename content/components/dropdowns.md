---
layout: home
title: Dropdowns
description: Use the Tailwind CSS powered dropdown elements to show a list of items displayed as a menu
group: components
toc: true
---

If you want to use the dropdown functionality, make sure that you have [Popper.js](https://popper.js.org/) included in your project. By default, FlowBite already includes this package in the main javascript file.

## Dropdown example

If you want to show a dropdown menu when click on an element, make sure that you add the `onclick="toggleDropdown(event, 'elementId')"`, where `elementId` is the id attribute and value that you have to set for the dropdown menu.

{{< example >}}
<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" onclick="toggleDropdown(event, 'dropdown')">Dropdown button</button>

<!-- Dropdown menu -->
<div class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" id="dropdown">
    <a href="#" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Action
    </a>
    <a href="#" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Another action
    </a>
    <a href="#" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Something else here
    </a>
    <div class="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25"></div>
    <a href="#" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Seprated link
    </a>
</div>
{{< /example >}}

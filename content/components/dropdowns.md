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
<div class="hidden bg-white text-base z-50 float-left list-none divide-y divide-gray-100 rounded shadow" style="min-width:12rem" id="dropdown">
    <div class="px-4 py-3" role="none">
      <p class="text-sm" role="none">
        Bonnie Green
      </p>
      <p class="text-sm font-medium text-gray-900 truncate" role="none">
        name@company.com
      </p>
    </div>
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem" id="menu-item-0">Dashboard</a>
      <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem" id="menu-item-1">Settings</a>
      <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem" id="menu-item-2">Earnings</a>
    </div>
    <div class="py-1" role="none">
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem" id="menu-item-3">Sign out</a>
    </div>
</div>
{{< /example >}}

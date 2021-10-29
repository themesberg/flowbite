---
layout: home
title: Tailwind CSS Dropdown - Flowbite
description: Use the Tailwind CSS dropdown elements to show a list of items displayed as a menu
group: components
toc: true
requires_js: true

previous: Cards
previousLink: components/card
next: Forms
nextLink: components/forms
---

You can use the Tailwind CSS dropdown element from Flowbite to show a menu when clicking on an element such as a button. Make sure to include [Flowbite's JavaScript file]({{< ref "getting-started/quickstart" >}}) inside your project to enable dropdowns.

## Dropdown example

If you want to show a dropdown menu when click on an element, make sure that you add the the `data-dropdown-toggle="dropdownId"` data attribute to the element that will toggle the dropdown menu.

The `dropdownId` is the id of the dropdown menu element.

{{< example >}}
<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
    <div class="px-4 py-3">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdown">
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
      </li>
      <li>
        <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

---
layout: home
title: Tailwind CSS Dropdown - Flowbite
description: Use the Tailwind CSS dropdown elements to show a list of items displayed as a menu
group: components
toc: true
requires_js: true

previous: Cards
previousLink: components/card/
next: Forms
nextLink: components/forms/
---

You can use the Tailwind CSS dropdown element from Flowbite to show a menu when clicking on an element such as a button. Make sure to include <a href="{{< ref "getting-started/quickstart" >}}" rel="nofollow" target="_blank">Flowbite's JavaScript file</a> inside your project to enable dropdowns.

## Dropdown example

If you want to show a dropdown menu when clicking on an element, make sure that you add the `data-dropdown-toggle="dropdownId"` data attribute to the element that will toggle the dropdown menu.

The `dropdownId` is the id of the dropdown menu element.

{{< example class="dark:bg-gray-800" github="components/dropdowns.md" >}}
<button id="dropdownButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown divider

You can use the `divide-y divide-gray-100` classes to add separate elements inside the dropdown menu.

{{< example class="dark:bg-gray-800" github="components/dropdowns.md" >}}
<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownDivider" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>
{{< /example >}}

## Dropdown header

You can also show extra information inside the dropdown menu using the divider option.

{{< example class="dark:bg-gray-800" github="components/dropdowns.md" >}}
<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownInformation" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div class="py-3 px-4 text-gray-900 dark:text-white">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
{{< /example >}}

## Dropdown navbar

You can also use the dropdown element inside a navigation bar and add a second level of navigation hierarchy, but make sure to use a `button` element.

{{< example class="dark:bg-gray-800" github="components/dropdowns.md" >}}
<nav class="px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex">
      <svg class="mr-3 h-10" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"/><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"/><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"/></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"/></clipPath></defs></svg>
        <span class="self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white">FlowBite</span>
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

## Sizing

The dropdown menus work with buttons of all sizes including smaller or larger ones.

{{< example class="dark:bg-gray-800" github="components/dropdowns.md" >}}
<button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Small dropdown <svg class="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownSmall" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div class="py-3 px-4 text-gray-900 dark:text-white">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncate">name@flowbite.com</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdownSmallButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>

<button id="dropdownLargeButton" data-dropdown-toggle="dropdownLarge" class="inline-flex items-center py-3 px-5 mb-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Large dropdown <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownLarge" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div class="py-3 px-4 text-gray-900 dark:text-white">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncate">name@flowbite.com</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdownLargeButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
{{< /example >}}

## Placement

You can also use the `data-dropdown-placement={top|right|bottom|left}` data attribute options to choose the placement of the dropdown menu. By default the positioning is set to the bottom side of the button.

{{< example class="flex flex-wrap dark:bg-gray-800" github="components/dropdowns.md" >}}
<button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" class="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown top <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownTop" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownTopButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right" class="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown right <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownRight" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownRightButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" class="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown bottom <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownBottom" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownBottomButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownLeftButton" data-dropdown-toggle="dropdownLeft" data-dropdown-placement="left" class="mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Dropdown left</button>

<!-- Dropdown menu -->
<div id="dropdownLeft" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownLeftButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

Alternatively you can choose the secondary axis placement by specifying `*-start` after the primary position has been chosen. For example, you can use the `right-start` or `left-start` to position the menu just below the button.

{{< example class="flex flex-wrap dark:bg-gray-800" github="components/dropdowns.md" >}}
<button id="dropdownLeftStartButton" data-dropdown-toggle="dropdownLeftStart" data-dropdown-placement="left-start" class="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Dropdown left start</button>

<!-- Dropdown menu -->
<div id="dropdownLeftStart" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownLeftStartButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownRightStartButton" data-dropdown-toggle="dropdownRightStart" data-dropdown-placement="right-start" class="mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown right start<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownRightStart" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownRightStartButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

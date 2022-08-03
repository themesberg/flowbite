---
layout: home
title: Tailwind CSS Button Group - Flowbite
description: Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
group: components
toc: true

previous: Buttons
previousLink: components/buttons/
next: Cards
nextLink: components/card/
---

The button group component from Flowbite can be used to stack together multiple buttons and links inside a single element.

## Default example

Use the following code to stack together buttons into a single group.

{{< example id="default-button-group-example" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Profile
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-200 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Settings
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 bg-gray-50 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Messages
  </button>
</div>
{{< /example >}}

## Button group as links

You can also use the button group component as links.

{{< example id="button-group-links-example" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-md shadow-sm">
  <a href="#" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 border border-gray-200 rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Profile
  </a>
  <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-200 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Settings
  </a>
  <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 bg-gray-50 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Messages
  </a>
</div>
{{< /example >}}

## Default vertical example

Use the following code to stack together buttons into a single group.

{{< example id="default-button-group-example" github="components/button-group.md" show_dark=true >}}
<div class="flex flex-col max-w-[200px] rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-t-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Dashboard
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border-l border-r border-gray-200 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    My Profile
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-b-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    Messages
  </button>
</div>
{{< /example >}}

## Vertical with icons

You can also use SVG icons inside the grouped buttons.

{{< example id="button-group-icons-example" github="components/button-group.md" show_dark=true >}}
<div class="flex flex-col max-w-[200px] rounded-md shadow-sm" role="group">
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-t-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Profile
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border-l border-r border-gray-200 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    Settings
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-b-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Downloads
  </button>
</div>
{{< /example >}}

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

{{< example id="button-group-icons-example" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Profile
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-200 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    Settings
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 bg-gray-50 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Downloads
  </button>
</div>
{{< /example >}}

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example id="button-group-outline-example" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-l-lg hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-600">
    Profile
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-300 hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-600">
    Settings
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-r-md hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-600">
    Downloads
  </button>
</div>
{{< /example >}}

## Outlined with icon

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example id="button-group-outline-icon-example" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-l-lg hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-600">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Profile
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-300 hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-600">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    Settings
  </button>
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-r-md hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-600">
    <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Downloads
  </button>
</div>
{{< /example >}}

## Only icon

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example id="button-group-outline-icon-example" class="pt-6 pb-48" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-l-lg hover:bg-gray-50 hover:text-blue-600 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:bg-gray-700 dark:focus:ring-gray-600 dark:bg-gray-700">
    Link issue
  </button>
  <button type="button" id="dropdownDefault" data-dropdown-toggle="dropdown" class="inline-flex items-center px-2 py-2 text-gray-900 bg-transparent border-t border-b border-r border-gray-300 hover:bg-gray-50 hover:text-blue-600 focus:z-10 rounded-r-md focus:ring-2 focus:ring-gray-200 focus:bg-gray-50 focus:text-blue-600 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:bg-gray-700 dark:focus:ring-gray-600 dark:bg-gray-700">
    <svg class="w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">General</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Invoice</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Payment</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Account</a>
        </li>
      </ul>
  </div>
</div>
{{< /example >}}

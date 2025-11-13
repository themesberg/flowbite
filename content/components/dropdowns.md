---
layout: docs
title: Tailwind CSS Dropdown - Flowbite
description: Get started with the dropdown component to show a list of menu items when clicking on the trigger element based on multiple layouts, styles, and placements
group: components
toc: true
requires_js: true

previous: Drawer
previousLink: components/drawer/
next: Footer
nextLink: components/footer/
---

The dropdown component can be used to show a list of menu items when clicking on an element such as a button and hiding it when focusing outside of the triggering element.

Make sure to include <a href="{{< ref "getting-started/quickstart" >}}">Flowbite's JavaScript file</a> inside your project to enable dropdowns.

## Dropdown example

If you want to show a dropdown menu when clicking on an element make sure that you add the data attribute `data-dropdown-toggle="dropdownId"` to the element (ie. a button) that will trigger the dropdown menu.

The `dropdownId` is the id of the dropdown menu element.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="300" >}}
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown hover

Use the `data-dropdown-trigger="{hover|click}"` data attribute options to set whether the dropdown should be shown when hovering or clicking on the trigger element (ie. button).

There's a 300ms default delay when showing or hiding the dropdown due to UI/UX reasons and how it may affect the interaction with other components on the page. Generally, we recommend using the `click` method.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="300" >}}
<button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownHover" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

### Delay duration

You can use the `data-dropdown-delay={milliseconds}` data attribute to set they delay on when to show or hide the dropdown menu when using hover. You may want to use this depending on how the users interact with your interface. In this example we add 500 milliseconds instead of the default 300.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="300" >}}
<button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDelay" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDelayButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown divider

You can use the `divide-y divide-gray-100` classes to add separate elements inside the dropdown menu.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="320" >}}
<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDivider" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base divide-y divide-default-medium shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
    </ul>
    <div class="p-2 text-sm text-body font-medium">
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Separated link</a>
    </div>
</div>
{{< /example >}}

## Dropdown header

Use this example to show extra information outside of the list of menu items inside the dropdown.

{{< example class="flex justify-center " github="components/dropdowns.md" show_dark=true iframeHeight="520" >}}
<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>
<!-- Dropdown menu -->
<div id="dropdownInformation" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
    <div class="p-2">
      <div class="flex items-center px-2.5 p-2 space-x-1.5 text-sm bg-neutral-secondary-strong rounded">
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
        <div class="text-sm">
          <div class="font-medium text-heading">Bonnie Green</div>
          <div class="truncate text-body">name@flowbite.com</div>
        </div>
        <span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded ms-auto">PRO</span>
      </div>
    </div>
    <ul class="px-2 pb-2 text-sm text-body font-medium" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
          Account
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/></svg>
          Settings
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/></svg>
          Privacy
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/></svg>
          Notifications
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
          Help center
        </a>
      </li>
      <li class="flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded mb-1.5">
        <a href="#" class="inline-flex items-center">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/></svg>
          Dark mode
        </a>
        <label class="inline-flex items-center cursor-pointer ms-auto">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
          <span class="ms-3 text-sm font-medium text-heading sr-only">Toggle me</span>
        </label>
      </li>
      <li class="border-t border-default-medium pt-1.5">
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"/></svg>
          Upgrade to PRO
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/></svg>
          Sign out
        </a>
      </li>
    </ul>
</div>
{{< /example >}}

## Multi-level dropdown

Use this example to enable multi-level dropdown menus by adding stacked elements inside of each other.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="350" >}}
<button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="multi-dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="multiLevelDropdownButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          Dropdown
          <svg class="h-4 w-4 ms-auto rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
        </button>
          <div id="doubleDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="doubleDropdownButton">
              <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Overview</a>
              </li>
              <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">My downloads</a>
              </li>
              <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Billing</a>
              </li>
              <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Rewards</a>
              </li>
            </ul>
        </div>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown with checkbox

Add multiple checkbox elements inside your dropdown menu to enable more advanced input interaction.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="290" >}}
<button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>
<!-- Dropdown menu -->
<div id="dropdownDefaultCheckbox" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-52">
    <ul class="p-4 text-sm text-body font-medium space-y-4" aria-labelledby="dropdownCheckboxButton">
      <li>
        <div class="flex items-center">
          <input id="dropdown-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="dropdown-checkbox" class="ms-2 text-sm font-medium text-heading">Default checkbox</label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <input checked id="dropdown-checkbox-2" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="dropdown-checkbox-2" class="ms-2 text-sm font-medium text-heading">Checked state</label>
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <input id="dropdown-checkbox-3" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="dropdown-checkbox-3" class="ms-2 text-sm font-medium text-heading">Default checkbox</label>
        </div>
      </li>
    </ul>
</div>
{{< /example >}}

### Background hover

Use this example to update the background color of a menu item when using a list of checkbox elements.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="300" >}}
<button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownBgHover" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-52">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownBgHoverButton">
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <input id="dropdown-checkbox-4" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="dropdown-checkbox-4" class="ms-2 text-sm font-medium text-heading">Default checkbox</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <input checked id="dropdown-checkbox-5" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="dropdown-checkbox-5" class="ms-2 text-sm font-medium text-heading">Checked state</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <input id="dropdown-checkbox-6" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="dropdown-checkbox-6" class="ms-2 text-sm font-medium text-heading">Default checkbox</label>
        </div>
      </li>
    </ul>
</div>
{{< /example >}}

### Helper text

Add an extra helper text to each checkbox element inside the dropdown menu list with this example.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="380" >}}
<button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>
<!-- Dropdown menu -->
<div id="dropdownHelper" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-60">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHelperButton">
      <li>
        <div class="inline-flex items-start w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <div class="flex items-center h-5">
            <input id="dropdown-checkbox-7" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          </div>
          <div class="ms-2 text-sm">
              <label for="dropdown-checkbox-7" class="font-medium text-heading select-none">
                <div class="mb-0.5">Enable notifications</div>
                <p id="helper-checkbox-text-1" class="text-xs font-normal text-body">Some helpful instruction goes over here.</p>
              </label>
          </div>
        </div>
      </li>
      <li>
        <div class="inline-flex items-start w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <div class="flex items-center h-5">
            <input id="dropdown-checkbox-8" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          </div>
          <div class="ms-2 text-sm">
              <label for="dropdown-checkbox-8" class="font-medium text-heading select-none">
                <div class="mb-0.5">Enable 2FA auth</div>
                <p id="helper-checkbox-text-2" class="text-xs font-normal text-body">Some helpful instruction goes over here.</p>
              </label>
          </div>
        </div>
      </li>
      <li>
        <div class="inline-flex items-start w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <div class="flex items-center h-5">
            <input id="dropdown-checkbox-9" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          </div>
          <div class="ms-2 text-sm">
              <label for="dropdown-checkbox-9" class="font-medium text-heading select-none">
                <div class="mb-0.5">Subscribe newsletter</div>
                <p id="helper-checkbox-text-3" class="text-xs font-normal text-body">Some helpful instruction goes over here.</p>
              </label>
          </div>
        </div>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown with radio

Enable more advanced interaction with your users by adding radio input elements inside the dropdown menu.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="250" >}}
<button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown radio 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDefaultRadio" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-3 text-sm text-body font-medium space-y-3" aria-labelledby="dropdownRadioButton">
      <li>
        <div class="inline-flex items-center">
          <input id="dropdown-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          <label for="dropdown-radio-1" class="select-none ms-2 text-sm font-medium text-heading">Default radio</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center">
          <input id="dropdown-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          <label for="dropdown-radio-2" class="select-none ms-2 text-sm font-medium text-heading">Checked radio</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center">
          <input id="dropdown-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          <label for="dropdown-radio-3" class="select-none ms-2 text-sm font-medium text-heading">Default radio</label>
        </div>
      </li>
    </ul>
</div>
{{< /example >}}

### Background hover

Use this example to update the background color when hovering over a menu item when using radio elements.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="280" >}}
<button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownRadioBgHover" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownRadioBgHoverButton">
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <input id="dropdown-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          <label for="dropdown-radio-4" class="select-none ms-2 text-sm font-medium text-heading">Default radio</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <input id="dropdown-radio-5" type="radio" value="" name="default-radio" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none" checked>
          <label for="dropdown-radio-5" class="select-none ms-2 text-sm font-medium text-heading">Checked radio</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <input id="dropdown-radio-6" type="radio" value="" name="default-radio" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          <label for="dropdown-radio-6" class="select-none ms-2 text-sm font-medium text-heading">Default radio</label>
        </div>
      </li>
    </ul>
</div>
{{< /example >}}

### Helper text

This example can be used to add an extra helper text inside of each radio element from the dropdown menu.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="380" >}}

<button id="dropdownHelperRadioButton" data-dropdown-toggle="dropdownHelperRadio" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownHelperRadio" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-56" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHelperRadioButton">
      <li>
        <div class="flex p-2 w-full hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <div class="flex items-center h-5">
              <input id="helper-radio-4" name="helper-radio" type="radio" value="" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          </div>
          <div class="ms-2 text-sm">
              <label for="helper-radio-4" class="font-medium text-heading">
                <div class="mb-1">Individual</div>
                <p id="helper-radio-text-4" class="text-xs font-normal text-body">Some helpful instruction goes over here.</p>
              </label>
          </div>
        </div>
      </li>
      <li>
        <div class="flex p-2 w-full hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <div class="flex items-center h-5">
              <input id="helper-radio-5" name="helper-radio" type="radio" value="" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          </div>
          <div class="ms-2 text-sm">
              <label for="helper-radio-5" class="font-medium text-heading">
                <div class="mb-1">Company</div>
                <p id="helper-radio-text-5" class="text-xs font-normal text-body">Some helpful instruction goes over here.</p>
              </label>
          </div>
        </div>
      </li>
      <li>
        <div class="flex p-2 w-full hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <div class="flex items-center h-5">
              <input id="helper-radio-6" name="helper-radio" type="radio" value="" class="w-4 h-4 text-neutral-primary border-default-strong bg-neutral-secondary-strong rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
          </div>
          <div class="ms-2 text-sm">
              <label for="helper-radio-6" class="font-medium text-heading">
                <div class="mb-1">Non profit</div>
                <p id="helper-radio-text-6" class="text-xs font-normal text-body">Some helpful instruction goes over here.</p>
              </label>
          </div>
        </div>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown with toggle switch

Show a list of toggle switch elements inside the dropdown menu to enable a yes or no type of choice.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="280" >}}
<button id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownToggle" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
    <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="dropdownToggleButton">
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
          <span class="ms-3 text-sm font-medium text-heading">Enable notifications</span>
        </label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
            <span class="ms-3 text-sm font-medium text-heading">Enable 2FA authentication</span>
          </label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
            <span class="ms-3 text-sm font-medium text-heading">Subscribe to newsletter</span>
          </label>
        </div>
      </li>
    </ul>
</div>

{{< /example >}}

## Dropdown with scrolling

This example can be used when you want to show a long list of items that won't affect the height of the dropdown menu by enabling a scrolling behaviour.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="380" >}}
<button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownUsers" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-54">
  <ul class="h-48 p-2 text-sm text-body font-medium overflow-y-auto" aria-labelledby="dropdownUsersButton">
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
        Jese Leos
      </a>
    </li>
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
        Robert Gough
      </a>
    </li>
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
        Bonnie Green
      </a>
    </li>
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image">
        Leslie Livingston
      </a>
    </li>
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
        Michael Gough
      </a>
    </li>
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
        Joseph Mcfall
      </a>
    </li>
          <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
        Roberta Casas
      </a>
    </li>
    <li>
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
        <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
        Neil Sims
      </a>
    </li>
  </ul>
  <div class="bg-neutral-primary-medium border-t border-default-medium p-2 rounded-b-base">
      <button type="button" class="inline-flex items-center w-full justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">
        <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        Add new user
      </button>
  </div>
</div>
{{< /example >}}

## Scrollable checkboxes

Use this example to show multiple dropdown items in a scrollable container with checkboxes.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="380" >}}
<button id="dropdownUsersAdvancedButton" data-dropdown-toggle="dropdownAdvanced" data-dropdown-placement="bottom" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownAdvanced" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-54">
  <ul class="h-48 p-2 text-sm text-body font-medium overflow-y-auto" aria-labelledby="dropdownAdvancedButton">
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-1" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
          Jese Leos
        </div>
        <input id="dropdown-user-1" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>    
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-2" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Robert image">
          Robert Gough
        </div>
        <input id="dropdown-user-2" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-3" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          Bonnie Green
        </div>
        <input id="dropdown-user-3" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-4" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image">
          Leslie Livingston
        </div>
        <input id="dropdown-user-4" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-5" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Michael image">
          Michael Gough
        </div>
        <input id="dropdown-user-5" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-6" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image">
          Joseph Mcfall
        </div>
        <input id="dropdown-user-6" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-7" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Roberta image">
          Roberta Casas
        </div>
        <input id="dropdown-user-7" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-7" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
          Neil Sims
        </div>
        <input id="dropdown-user-8" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
  </ul>
  <div class="bg-neutral-primary-medium border-t border-default-medium p-2 rounded-b-base">
      <button type="button" class="w-full inline-flex items-center justify-center text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">
        <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
        Delete user
      </button>
  </div>
</div>
{{< /example >}}

## Dropdown with search

Use this example if you want to add a search bar inside the dropdown menu to be able to filter through a long list of menu items with scrolling behaviour.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="440" >}}
<button id="dropdownUsersSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownSearch" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-54">
  <div class="bg-neutral-primary-medium border-b border-default-medium p-2 rounded-t-base">
    <label for="search" class="sr-only">Search</label>
    <input type="text" id="search" class="bg-neutral-secondary-strong border border-default-strong text-heading text-sm rounded focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Search for users" required />
  </div>
  <ul class="h-48 p-2 text-sm text-body font-medium overflow-y-auto" aria-labelledby="dropdownSearchButton">
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-9" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
          Jese Leos
        </div>
        <input id="dropdown-user-9" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>    
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-10" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Robert image">
          Robert Gough
        </div>
        <input id="dropdown-user-10" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-11" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
          Bonnie Green
        </div>
        <input id="dropdown-user-11" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-12" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image">
          Leslie Livingston
        </div>
        <input id="dropdown-user-12" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-13" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Michael image">
          Michael Gough
        </div>
        <input id="dropdown-user-13" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-14" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image">
          Joseph Mcfall
        </div>
        <input id="dropdown-user-14" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-15" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Roberta image">
          Roberta Casas
        </div>
        <input id="dropdown-user-15" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
    <li class="w-full flex items-center p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
      <label for="dropdown-user-16" class="w-full flex items-center justify-between">
        <div class="inline-flex items-center font-medium">
          <img class="w-5 h-5 me-2 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
          Neil Sims
        </div>
        <input id="dropdown-user-16" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
      </label>
    </li>
  </ul>
  <div class="bg-neutral-primary-medium border-t border-default-medium p-2 rounded-b-base">
      <button type="button" class="w-full inline-flex items-center justify-center text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">
        <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
        Delete user
      </button>
  </div>
</div>
{{< /example >}}

## Menu icon

Use the menu icon trigger element on components such as cards as an alternative element to the button.

{{< example class="flex justify-center space-x-4 rtl:space-x-reverse" github="components/dropdowns.md" show_dark=true iframeHeight="320" >}}
<button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none" type="button">
  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDots" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
    </ul>
    <div class="p-2 text-sm text-body font-medium border-t border-default-medium">
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Separated link</a>
    </div>
</div>

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none" type="button"> 
  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDotsHorizontal" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 dark:divide-gray-600">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
    </ul>
    <div class="p-2 text-sm text-body font-medium border-t border-default">
      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Separated link</a>
    </div>
</div>
{{< /example >}}

## Notification bell

Use this example to show a list of notifications inside your application by providing more detailed information such as the user avatar, content and time of notification triggered by a notification bell icon.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="660" >}}

<button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" class="relative inline-flex items-center text-sm font-medium text-center text-body hover:text-heading focus:outline-none" type="button">
  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/></svg>
</svg>
<div class="absolute block w-3 h-3 bg-danger border-2 border-buffer rounded-full top-0 start-3"></div>
</button>

<!-- Dropdown menu -->
<div id="dropdownNotification" class="z-20 hidden w-full max-w-sm bg-neutral-primary-soft divide-y divide-default-medium rounded-base shadow" aria-labelledby="dropdownNotificationButton">
  <div class="block px-4 py-2 font-medium text-center text-body rounded-t-base bg-neutral-secondary-medium">
      Notifications
  </div>
  <div class="divide-y divide-default">
    <a href="#" class="flex px-4 py-3 hover:bg-neutral-secondary-medium">
      <div class="shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
        <div class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-brand border border-buffer-medium rounded-full">
          <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Zm5-7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z" clip-rule="evenodd"/></svg>
        </div>
      </div>
      <div class="w-full ps-3">
          <div class="text-body text-sm mb-1.5">New message from <span class="font-semibold text-heading">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</div>
          <div class="text-xs text-fg-brand">a few moments ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-neutral-secondary-medium">
      <div class="shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph image">
        <div class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-dark border border-buffer-medium rounded-full">
          <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/></svg>
        </div>
      </div>
      <div class="w-full ps-3">
          <div class="text-body text-sm mb-1.5"><span class="font-semibold text-heading">Joseph Mcfall</span> and <span class="font-medium text-heading">5 others</span> started following you.</div>
          <div class="text-xs text-fg-brand">10 minutes ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-neutral-secondary-medium">
      <div class="shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
        <div class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-danger border border-buffer-medium rounded-full">
          <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/></svg>
        </div>
      </div>
      <div class="w-full ps-3">
          <div class="text-body text-sm mb-1.5"><span class="font-semibold text-heading">Bonnie Green</span> and <span class="font-medium text-heading">141 others</span> love your story. See it and view more stories.</div>
          <div class="text-xs text-fg-brand">44 minutes ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-neutral-secondary-medium">
      <div class="shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie image">
        <div class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-success border border-buffer-medium rounded-full">
          <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clip-rule="evenodd"/></svg>
        </div>
      </div>
      <div class="w-full ps-3">
          <div class="text-body text-sm mb-1.5"><span class="font-semibold text-heading">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-fg-brand" href="#">@bonnie.green</span> what do you say?</div>
          <div class="text-xs text-fg-brand">1 hour ago</div>
      </div>
    </a>
    <a href="#" class="flex px-4 py-3 hover:bg-neutral-secondary-medium">
      <div class="shrink-0">
        <img class="rounded-full w-11 h-11" src="/docs/images/people/profile-picture-5.jpg" alt="Robert image">
        <div class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-purple border border-buffer-medium rounded-full">
          <svg class="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clip-rule="evenodd"/></svg>
        </div>
      </div>
      <div class="w-full ps-3">
          <div class="text-body text-sm mb-1.5"><span class="font-semibold text-heading">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
          <div class="text-xs text-fg-brand">3 hours ago</div>
      </div>
    </a>
  </div>
  <a href="#" class="block py-2 font-medium text-center text-body rounded-b-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium">
    <div class="inline-flex items-center ">
      <svg class="w-5 h-5 me-1.5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        View all
    </div>
  </a>
</div>
{{< /example >}}

## User avatar

This example can be used to show a list of menu items and options when a user is logged into your application.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="520" >}}
<button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex text-sm bg-dark rounded-full md:me-0 focus:ring-4 focus:ring-neutral-quaternary" type="button">
  <span class="sr-only">Open user menu</span>
  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="user photo">
</button>

<!-- Dropdown menu -->
<div id="dropdownAvatar" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
    <div class="p-2">
      <div class="flex items-center px-2.5 p-2 space-x-1.5 text-sm bg-neutral-secondary-strong rounded">
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
        <div class="text-sm">
          <div class="font-medium text-heading">Joseph McFall</div>
          <div class="truncate text-body">name@flowbite.com</div>
        </div>
        <span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded ms-auto">PRO</span>
      </div>
    </div>
    <ul class="px-2 pb-2 text-sm text-body font-medium" aria-labelledby="dropdownAvatarButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
          Account
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/></svg>
          Settings
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/></svg>
          Privacy
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/></svg>
          Notifications
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
          Help center
        </a>
      </li>
      <li class="flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded mb-1.5">
        <a href="#" class="inline-flex items-center">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/></svg>
          Dark mode
        </a>
        <label class="inline-flex items-center cursor-pointer ms-auto">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
          <span class="ms-3 text-sm font-medium text-heading sr-only">Toggle me</span>
        </label>
      </li>
      <li class="border-t border-default-medium pt-1.5">
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"/></svg>
          Upgrade to PRO
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/></svg>
          Sign out
        </a>
      </li>
    </ul>
</div>
{{< /example >}}

### Avatar with name

Use this example to also show the name or email of the user next to the avatar for the dropdown menu.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="520" >}}
<button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm pe-1 font-medium text-heading rounded-full hover:text-fg-brand md:me-0 focus:ring-4 focus:ring-neutral-tertiary" type="button">
  <span class="sr-only">Open user menu</span>
  <img class="w-8 h-8 me-2 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="user photo">
  Joseph McFall
  <svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownAvatarName" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
    <div class="p-2">
      <div class="flex items-center px-2.5 p-2 space-x-1.5 text-sm bg-neutral-secondary-strong rounded">
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
        <div class="text-sm">
          <div class="font-medium text-heading">Joseph McFall</div>
          <div class="truncate text-body">name@flowbite.com</div>
        </div>
        <span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded ms-auto">PRO</span>
      </div>
    </div>
    <ul class="px-2 pb-2 text-sm text-body font-medium" aria-labelledby="dropdownAvatarNameButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
          Account
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/></svg>
          Settings
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/></svg>
          Privacy
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/></svg>
          Notifications
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
          Help center
        </a>
      </li>
      <li class="flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded mb-1.5">
        <a href="#" class="inline-flex items-center">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/></svg>
          Dark mode
        </a>
        <label class="inline-flex items-center cursor-pointer ms-auto">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
          <span class="ms-3 text-sm font-medium text-heading sr-only">Toggle me</span>
        </label>
      </li>
      <li class="border-t border-default-medium pt-1.5">
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"/></svg>
          Upgrade to PRO
        </a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">
          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/></svg>
          Sign out
        </a>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown navbar

You can also use the dropdown element inside a navigation bar and add a second level of navigation hierarchy, but make sure to use a `button` element.

{{< example bodyClass="!p-0" github="components/dropdowns.md" show_dark=true iframeHeight="380" >}}

<nav class="bg-neutral-primary border-default">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-xl text-headings font-semibold whitespace-nowrap">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base focus:outline-none md:hidden" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:mt-0 md:text-sm  md:border-0 md:bg-neutral-primary md:space-x-8 md:rtl:space-x-reverse space-y-1">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 md:text-fg-brand md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-body rounded hover:bg-neutral-tertiary-medium md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:w-auto md:dark:hover:bg-transparent">
              Dropdown 
              <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
                  </li>
                </ul>
            </div>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

## Dropdown datepicker

Use this example to show a date range picker inside a dropdown menu. Use the `data-dropdown-ignore-click-outside-class={class}` option to keep the dropdown menu open when interacting with the datepicker component by setting the element's parent class name.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="520" >}}
<button id="dateRangeButton" data-dropdown-toggle="dateRangeDropdown" data-dropdown-ignore-click-outside-class="datepicker" type="button" class="inline-flex items-center text-fg-brand font-medium hover:underline">
31 Nov <p class="ms-1"> - 31 Dev </p> 
  <svg class="w-5 h-5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<div id="dateRangeDropdown" class="z-10 hidden bg-neutral-primary-soft border border-default rounded-base shadow-sm w-96">
  <div class="p-3" aria-labelledby="dateRangeButton">
    <div id="date-range-picker" date-rangepicker class="flex items-center">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
        </div>
        <input id="datepicker-range-start" name="start" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Date start">
      </div>
      <span class="mx-4 text-body">to</span>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
        </div>
        <input id="datepicker-range-end" name="end" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Date end">
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Sizes

The dropdown menus work with buttons of all sizes including smaller or larger ones.

{{< example github="components/dropdowns.md" class="space-x-2 space-y-2" show_dark=true iframeHeight="380" >}}
<button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Small dropdown 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownSmall" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownSmallButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownLargeButton" data-dropdown-toggle="dropdownLarge" class="inline-flex items-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none" type="button">
  Large dropdown 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownLarge" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLargeButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Placement

You can also use the `data-dropdown-placement={top|right|bottom|left}` data attribute options to choose the placement of the dropdown menu. By default the positioning is set to the bottom side of the button.

{{< example class="flex flex-wrap space-x-4 justify-center py-48" github="components/dropdowns.md" show_dark=true >}}
<button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement="top" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown top 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownTop" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownTopButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown right 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownRight" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownRightButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownBottomButton" data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown bottom 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownBottom" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownBottomButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownLeftButton" data-dropdown-toggle="dropdownLeft" data-dropdown-placement="left" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
  Dropdown left
</button>

<!-- Dropdown menu -->
<div id="dropdownLeft" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLeftButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

### Double placement

You can combine the placement options by using the `top|right|bottom|left-{start|end}` values. For example, `left-end` will position the dropdown on the left bottom, whereas `right-end` will position it on the right bottom side.

{{< example class="flex flex-wrap justify-center space-x-4" github="components/dropdowns.md" iframeHeight="240" show_dark=true >}}
<button id="dropdownLeftEndButton" data-dropdown-toggle="dropdownLeftEnd" data-dropdown-placement="left-end" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
  Dropdown left end
</button>

<!-- Dropdown menu -->
<div id="dropdownLeftEnd" class="z-20 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLeftEndButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>

<button id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown right end
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownRightEnd" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownRightEndButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Dropdown offset

Use the offset options on the dropdown component to set the distance and skidding of the menu relative to the trigger element.

### Distance

Use the `data-dropdown-offset-distance={pixels}` data attribute to set the number of pixels you want the dropdown menu to be offset from the trigger element.

{{< example class="flex flex-wrap justify-center" github="components/dropdowns.md" iframeHeight="320" show_dark=true >}}
<button id="dropdownOffsetButton" data-dropdown-toggle="dropdownDistance" data-dropdown-offset-distance="35" data-dropdown-offset-skidding="0" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownDistance" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

### Skidding

The `data-dropdown-offset-skidding={pixels}` data attribute can be used to move up or down (or left and right) the dropdown menu along and relative to the trigger element.

{{< example class="flex flex-wrap justify-center" github="components/dropdowns.md" iframeHeight="320" show_dark=true >}}
<button id="dropdownOffsetButton" data-dropdown-toggle="dropdownSkidding" data-dropdown-offset-distance="10" data-dropdown-offset-skidding="100" data-dropdown-placement="right" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Dropdown button 
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownSkidding" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## More examples

For more dropdown examples you can check out the [dropdown filter](https://flowbite.com/blocks/application/filter/) components from Flowbite Blocks.

## JavaScript behaviour

The **Dropdown** class from Flowbite can be used to create an object that will show a dropdown menu relative to the main trigger element (eg. a button) based on the parameters, options, and methods that you provide.

### Object parameters

Initialize a Dropdown object with the object parameters such as the main target dropdown menu, a trigger element (eg. a button) and options to set the placement relative to the trigger element.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Parameter
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Required
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">targetElement</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Apply the main dropdown menu element as the first parameter of the Dropdown object.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">triggerElement</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Apply the trigger element, such as a button, which is required to position the dropdown menu and set a click event.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">options</code>
              </td>
              <td class="px-6 py-4">
                  Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Use the options parameter to set the positioning of the dropdown menu.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">instanceOptions</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                   Object of options that allows you to set a custom ID for the instance that is being added to the <a href="https://flowbite.com/docs/getting-started/javascript/#instance-options" class="underline hover:no-underline">Instance Manager</a> and whether to override or not an existing instance.
                </td>
            </tr>
      </tbody>
  </table>
</div>

### Options

Use the following options as the third parameter for the Dropdown class to set the placement of the dropdown menu.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Option
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">placement</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Set the position of the dropdown menu relative to the trigger element choosing from <code class="text-fg-brand">top|right|bottom|left</code>.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">triggerType</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Set the event type that will trigger the dropdown menu choosing between <code class="text-fg-brand">hover|click|none</code>.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">offsetDistance</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Set the amount of pixels the dropdown menu should be offset relative to the trigger element on the X horizontal axis.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">offsetSkidding</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Set the number of pixels the dropdown menu should be offset relative to the trigger element on the Y horizontal axis.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">delay</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Number
              </td>
              <td class="px-6 py-4">
                  Set the milliseconds for which the showing or hiding of the dropdown will be delayed for when using the hover trigger type.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">ignoreClickOutsideClass</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Set a class for one or more elements that when they are clicked should ignore closing the dropdown (ie. offcanvas datepicker).
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onHide</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the dropdown has been hidden.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onShow</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the dropdown has been shown.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onToggle</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the dropdown visibility has been toggled.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the methods from the Dropdown object to programmatically show or hide the dropdown menu directly from JavaScript.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Method
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">show()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the Dropdown object to show the dropdown menu.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">hide()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the Dropdown object to hide the dropdown menu.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">toggle()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the Dropdown object to toggle the visibility of the dropdown menu.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">isVisible()</code>
              </td>
              <td class="px-6 py-4">
                  Returns true or false based on the visibility of the dropdown.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnShow(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function when the dropdown has been shown.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnHide(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function when the dropdown has been hidden.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnToggle(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function when the dropdown visibility has been changed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Dropdown object.

First of all, you need to set the main target element which will be the dropdown menu and the trigger element which will can be a button or a text.

After that, you can also optionally set an options object to set the placement of the dropdown menu and callback functions.

{{< code lang="javascript" file="dropdown.js" icon="file" >}}
// set the dropdown menu element
const $targetEl = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl = document.getElementById('dropdownButton');

// options with default values
const options = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onHide: () => {
        console.log('dropdown has been hidden');
    },
    onShow: () => {
        console.log('dropdown has been shown');
    },
    onToggle: () => {
        console.log('dropdown has been toggled');
    },
};

// instance options object
const instanceOptions = {
  id: 'dropdownMenu',
  override: true
};
{{< /code >}}

Create a new Dropdown object based on the options above.

{{< code lang="javascript" file="dropdown.js" icon="file" >}}
import { Dropdown } from 'flowbite';

/*
 * $targetEl: required
 * $triggerEl: required
 * options: optional
 * instanceOptions: optional
 */
const dropdown = new Dropdown($targetEl, $triggerEl, options, instanceOptions);
{{< /code >}}

Use the `show` and `hide` methods on the Dropdown object to programmatically show or hide the dropdown menu directly from JavaScript.

{{< code lang="javascript" file="dropdown.js" icon="file" >}}
// show the dropdown menu
dropdown.show();

// hide the dropdown menu
dropdown.hide();

// toggle the dropdown menu
dropdown.toggle();

// check if dropdown is visible/open
dropdown.isVisible();
{{< /code >}}

### HTML Markup

Use the following HTML code for the JavaScript example above.

{{< code lang="html" file="dropdown.html" icon="file" >}}
<button id="dropdownButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownMenu" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownButton">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
      </li>
    </ul>
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Dropdown class, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="dropdown.ts" icon="file" >}}
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the dropdown menu element
const $targetEl: HTMLElement = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl: HTMLElement = document.getElementById('dropdownButton');

// options with default values
const options: DropdownOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onHide: () => {
        console.log('dropdown has been hidden');
    },
    onShow: () => {
        console.log('dropdown has been shown');
    },
    onToggle: () => {
        console.log('dropdown has been toggled');
    },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'dropdownMenu',
  override: true
};

/*
 * targetEl: required
 * triggerEl: required
 * options: optional
 * instanceOptions: optional
 */
const dropdown: DropdownInterface = new Dropdown(
    $targetEl,
    $triggerEl,
    options,
    instanceOptions
);

// show the dropdown
dropdown.show();
{{< /code >}}

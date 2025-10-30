---
layout: docs
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

{{< example class="flex justify-center" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
    Profile
  </button>
  <button type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    Settings
  </button>
  <button type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
    Messages
  </button>
</div>
{{< /example >}}

## Button group info

Use this example to stack a button with an icon with another informational button.

{{< example class="flex justify-center" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
    Download
  </button>
  <button type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none" disabled>
    456k
  </button>
</div>
{{< /example >}}


## Button group icon action

Use this component to show a button with text and another button with an icon.

{{< example class="flex justify-center" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none" disabled>
    Save book
  </button>
  <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm w-9 h-full focus:outline-none">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/></svg>
  </button>
</div>
{{< /example >}}

## Button group icons

Use this example to stack together multiple option buttons into one group.

{{< example class="flex justify-center items-center h-full" iframeHeight="240" github="components/button-group.md" show_dark=true >}}
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button data-tooltip-target="tooltip-option-1" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/></svg>
    </button>
    <div id="tooltip-option-1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align left
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-option-2" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12"/></svg>
    </button>
    <div id="tooltip-option-2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align center
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-option-3" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/></svg>
    </button>
    <div id="tooltip-option-3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align justify
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-option-4" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6h-8m8 4H6m12 4h-8m8 4H6"/></svg>
    </button>
    <div id="tooltip-option-4" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align right
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
{{< /example >}}

## Button group dropdown

Use this example to show three buttons stacked together where the third one opens a dropdown menu.

{{< example class="flex justify-center" iframeHeight="260" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none" disabled>
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/></svg>
    My files
  </button>
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
    Download
  </button>
  <button id="dropdownOptions" data-dropdown-toggle="dropdown-options" type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/></svg>
  </button>
  <div id="dropdown-options" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownOptions">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Save as PDF</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Save as doc</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Save as image</a>
      </li>
    </ul>
  </div>
</div>
{{< /example >}}

## Button group badge

Use this component to add a badge inside of the button group and a dropdown menu.

{{< example class="flex justify-center" iframeHeight="260" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none" disabled>
    Messages
    <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
  </button>
  <button id="dropdownMessages" data-dropdown-toggle="dropdown-messages" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm w-9 h-full focus:outline-none">
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
  </button>
  <div id="dropdown-messages" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-36 block hidden">
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMessages">
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Mark as read</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Archive all</a>
      </li>
      <li>
        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete all</a>
      </li>
    </ul>
  </div>
</div>
{{< /example >}}

## QR code button group

Use this component to show a QR code button group for authentication or other purposes.

{{< example class="flex justify-center" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm w-9 h-full focus:outline-none" disabled>
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"/></svg>
  </button>
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
   Sign In
  </button>
</div>
{{< /example >}}

## Pagination button group

This example can be used to create pagination components using button groups.

{{< example class="flex justify-center items-center h-full flex-col gap-8" iframeHeight="240" github="components/button-group.md" show_dark=true >}}
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      1
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      2
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      3
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      4
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      5
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      ...
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      99
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
  </div>

  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button data-tooltip-target="tooltip-previous" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft rounded-s-base box-border border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <div id="tooltip-previous" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Previous
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-next" type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft rounded-e-base box-border border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
    <div id="tooltip-next" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Next
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
{{< /example >}}

## Vertical button groups

Use these examples to stack button groups vertically.

{{< example class="flex justify-center space-x-4" github="components/button-group.md" show_dark=true >}}

<div class="rounded-base shadow-xs w-56 -space-y-px" role="group">
  <button type="button" class="block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft rounded-t-base font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    Profile
  </button>
  <button type="button" class="block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    Settings
  </button>
  <button type="button" class="block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft rounded-b-base font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    Messages
  </button>
</div>


<div class="rounded-base shadow-xs -space-y-px" role="group">
    <button data-tooltip-target="tooltip-option-5" type="button" class="grid place-items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-t-base text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/></svg>
    </button>
    <div id="tooltip-option-5" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align left
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-option-6" type="button" class="grid place-items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12"/></svg>
    </button>
    <div id="tooltip-option-6" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align center
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-option-7" type="button" class="grid place-items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/></svg>
    </button>
    <div id="tooltip-option-7" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align justify
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button data-tooltip-target="tooltip-option-8" type="button" class="grid place-items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-b-base text-sm w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6h-8m8 4H6m12 4h-8m8 4H6"/></svg>
    </button>
    <div id="tooltip-option-8" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Align right
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
{{< /example >}}

## Button group with colors

Choose from any colors to style the button group components.

{{< example class="flex justify-center space-x-4" github="components/button-group.md" show_dark=true >}}
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft rounded-s-base box-border border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft rounded-e-base box-border border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
  </div>
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border-e border-brand-strong hover:bg-brand-strong focus:ring-3 focus:ring-brand-medium shadow-xs leading-5 rounded-s-base w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border-s border-brand-strong hover:bg-brand-strong focus:ring-3 focus:ring-brand-medium shadow-xs leading-5 rounded-e-base w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
  </div>
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-s-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <button type="button" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-e-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
  </div>
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button type="button" class="inline-flex items-center justify-center text-white bg-danger box-border border-e border-danger-strong hover:bg-danger-strong focus:ring-3 focus:ring-danger-medium shadow-xs leading-5 rounded-s-base w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <button type="button" class="inline-flex items-center justify-center text-white bg-danger box-border border-s border-danger-strong hover:bg-danger-strong focus:ring-3 focus:ring-danger-medium shadow-xs leading-5 rounded-e-base w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
  </div>
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button type="button" class="inline-flex items-center justify-center text-white bg-success box-border border-e border-success-strong hover:bg-success-strong focus:ring-3 focus:ring-success-medium shadow-xs leading-5 rounded-s-base w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <button type="button" class="inline-flex items-center justify-center text-white bg-success box-border border-s border-success-strong hover:bg-success-strong focus:ring-3 focus:ring-success-medium shadow-xs leading-5 rounded-e-base w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
  </div>
{{< /example >}}

## Button group as links

You can also use the button group component as links.

{{< example class="flex justify-center" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px">
  <a href="#" aria-current="page" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:bg-neutral-secondary-medium focus:text-heading focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
    Profile
  </a>
  <a href="#" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:bg-neutral-secondary-medium focus:text-heading focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    Settings
  </a>
  <a href="#" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:bg-neutral-secondary-medium focus:text-heading focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
    Messages
  </a>
</div>
{{< /example >}}

## Group buttons with icons

You can also use [SVG icons](https://flowbite.com/icons/) inside the grouped buttons.

{{< example class="flex justify-center" github="components/button-group.md" show_dark=true >}}

<div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
    Profile
  </button>
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
    Settings
  </button>
  <button type="button" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
    Messages
  </button>
</div>

{{< /example >}}

## Button group outline

Use these examples as an alternative style with an outline.

{{< example class="flex justify-center items-center flex-col gap-8 h-full" iframeHeight="240" github="components/button-group.md" show_dark=true >}}
<div class="inline-flex rounded-base -space-x-px" role="group">
  <button type="button" class="text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
    Profile
  </button>
  <button type="button" class="text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    Settings
  </button>
  <button type="button" class="text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
    Downloads
  </button>
</div>

<div class="inline-flex rounded-base -space-x-px" role="group">
  <button type="button" class="inline-flex items-center text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
    Profile
  </button>
  <button type="button" class="inline-flex items-center text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
    Settings
  </button>
  <button type="button" class="inline-flex items-center text-heading bg-neutral-primary border border-dark-strong hover:bg-dark hover:text-white focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
    Messages
  </button>
</div>
{{< /example >}}

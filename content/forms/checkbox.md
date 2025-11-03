---
layout: docs
title: Tailwind CSS Checkbox - Flowbite
description: Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors
group: forms
toc: true
requires_js: true

previous: Textarea
previousLink: forms/textarea/
next: Radio
nextLink: forms/radio/
---

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants coded with the utility classes from Tailwind CSS and with support for dark mode.

Make sure that you have included Flowbite as a plugin inside your Tailwind CSS project to apply all the necessary styles for the checkbox component.

## Checkbox example

Use this default example of a checkbox element in a checked and unchecked state.

{{< example github="forms/checkbox.md" show_dark=true >}}
<div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="default-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Default checkbox</label>
</div>
<div class="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="checked-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Checked state</label>
</div>
{{< /example >}}

## Disabled state

This example can be used for the disabled state of the checkbox component by applying the `disabled` attribute to the input element.

{{< example github="forms/checkbox.md" show_dark=true >}}
<div class="flex items-center mb-4">
    <input disabled id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 border border-light rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="disabled-checkbox" class="select-none ms-2 text-sm font-medium text-fg-disabled">Disabled checkbox</label>
</div>
<div class="flex items-center">
    <input disabled checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 border border-light rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="disabled-checked-checkbox" class="select-none ms-2 text-sm font-medium text-fg-disabled">Disabled checked</label>
</div>
{{< /example >}}

## Checkbox link

Use this example if you want to add an anchor link inside the label of the checkbox component.

{{< example github="forms/checkbox.md" show_dark=true >}}
<div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="link-checkbox" class="select-none ms-2 text-sm font-medium text-heading">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</label>
</div>
{{< /example >}}

## Helper text

Get started with this example if you want to add a secondary helper text for the checkbox component.

{{< example github="forms/checkbox.md" show_dark=true >}}
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    </div>
    <div class="ms-2 text-sm select-none">
        <label for="helper-checkbox" class="font-medium text-heading">Free shipping via Flowbite</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-body">For orders shipped from $25 in books or $29 in other categories</p>
    </div>
</div>
{{< /example >}}

## Bordered

Use this example of a checkbox inside a card element to enable a larger area of clicking activation.

{{< example class="grid gap-6 md:grid-cols-2" github="forms/checkbox.md" show_dark=true >}}
<div class="flex items-center ps-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="bordered-checkbox-1" class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Default checkbox</label>
</div>
<div class="flex items-center ps-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="bordered-checkbox-2" class="select-none w-full py-4 ms-2 text-sm font-medium text-heading">Checked state</label>
</div>
{{< /example >}}

## Bordered with description

Use this checkbox component with a bordered style and a description text.

{{< example class="grid gap-6 md:grid-cols-2" github="forms/checkbox.md" show_dark=true >}}
<div class="flex space-x-2.5 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <input id="bordered-checkbox-3" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 mt-4 ms-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="bordered-checkbox-3" class="py-4 pe-4">
        <p class="select-none w-full text-sm font-medium text-heading">16GB unified memory</p>
        <p id="helper-checkbox-bordered-1" class="select-none text-sm text-body">Seamlessly handle multitasking, large apps.</p>
    </label>
</div>
<div class="flex space-x-2.5 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <input checked id="bordered-checkbox-4" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 mt-4 ms-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
    <label for="bordered-checkbox-4" class="py-4 pe-4">
        <p class="select-none w-full text-sm font-medium text-heading">1TB SSD storage</p>
        <p id="helper-checkbox-bordered-2" class="select-none text-sm text-body">Get ultra-fast storage with 1TB of SSD space</p>
    </label>
</div>
{{< /example >}}

## Bordered with icon

This example can be used to create a checkbox component with a bordered style, a description text and an icon.

{{< example class="grid gap-6 md:grid-cols-2" github="forms/checkbox.md" show_dark=true >}}
<div class="flex justify-between space-x-2.5 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <label for="bordered-checkbox-5" class="p-4">
        <svg class="w-7 h-7 text-body mb-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5 12h14M5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2 3h.01M14 15h.01M17 9h.01M14 9h.01"/></svg>
        <p  class="select-none w-full text-sm font-medium text-heading">16GB unified memory</p>
        <p id="helper-checkbox-bordered-3" class="select-none text-sm text-body">Seamlessly handle multitasking, large apps.</p>
    </label>
    <input id="bordered-checkbox-5" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 mt-4 me-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" checked>
</div>
<div class="flex justify-between space-x-2.5 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <label for="bordered-checkbox-6" class="p-4">
        <svg class="w-7 h-7 text-body mb-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"/></svg>
        <p  class="select-none w-full text-sm font-medium text-heading">1TB SSD storage</p>
        <p id="helper-checkbox-bordered-4" class="select-none text-sm text-body">Get ultra-fast storage with 1TB of SSD space</p>
    </label>
    <input id="bordered-checkbox-6" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 mt-4 me-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
</div>
{{< /example >}}


## Checkbox list group

Use this example to show a list of checkbox items grouped inside a card.

{{< example github="components/radio.md" show_dark=true >}}
<h3 class="mb-4 font-semibold text-heading">Technology</h3>
<ul class="w-48 select-none text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
    <li class="w-full border-b border-default rounded-t-lg">
        <div class="flex items-center ps-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-heading">Vue JS</label>
        </div>
    </li>
    <li class="w-full border-b border-default rounded-t-lg">
        <div class="flex items-center ps-3">
            <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="react-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-heading">React</label>
        </div>
    </li>
    <li class="w-full border-b border-default rounded-t-lg">
        <div class="flex items-center ps-3">
            <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-heading">Angular</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg">
        <div class="flex items-center ps-3">
            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-heading">Laravel</label>
        </div>
    </li>
</ul>
{{< /example >}}

## Horizontal list group

Use this example to show a list of checkbox items inside a card horizontally.

{{< example github="components/radio.md" show_dark=true >}}
<h3 class="mb-4 font-semibold text-heading">Identification</h3>
<ul class="items-center select-none w-full text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base sm:flex">
    <li class="w-full border-b border-default sm:border-b-0 sm:border-r">
        <div class="flex items-center ps-3">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-heading">Vue JS</label>
        </div>
    </li>
    <li class="w-full border-b border-default sm:border-b-0 sm:border-r">
        <div class="flex items-center ps-3">
            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="react-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-heading">React</label>
        </div>
    </li>
    <li class="w-full border-b border-default sm:border-b-0 sm:border-r">
        <div class="flex items-center ps-3">
            <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="angular-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-heading">Angular</label>
        </div>
    </li>
    <li class="w-full">
        <div class="flex items-center ps-3">
            <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
            <label for="laravel-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-heading">Laravel</label>
        </div>
    </li>
</ul>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Checkbox dropdown

Use this example to show a list of checkbox items inside a dropdown menu.

{{< example class="flex justify-center" github="components/dropdowns.md" show_dark=true iframeHeight="430" >}}
<button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" type="button" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    Dropdown search
    <svg class="w-4 h-4 ms-1.5 -me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
</button>
<!-- Dropdown menu -->
<div id="dropdownSearch" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-60 block">
    <div class="px-2 pt-2">
      <label for="input-group-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-strong border border-default-strong text-heading text-sm rounded focus:ring-brand focus:border-brand px-2.5 py-2 placeholder:text-body" placeholder="Search user">
      </div>
    </div>
    <ul class="h-48 select-none overflow-y-auto p-2 text-sm text-body font-medium" aria-labelledby="dropdownSearchButton">
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
          <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="checkbox-item-11" class="w-full ms-2 text-sm font-medium text-heading">Bonnie Green</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
            <input checked id="checkbox-item-12" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
            <label for="checkbox-item-12" class="w-full ms-2 text-sm font-medium text-heading">Jese Leos</label>
          </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
          <input id="checkbox-item-13" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="checkbox-item-13" class="w-full ms-2 text-sm font-medium text-heading">Michael Gough</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
          <input id="checkbox-item-14" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="checkbox-item-14" class="w-full ms-2 text-sm font-medium text-heading">Robert Wall</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
          <input id="checkbox-item-15" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="checkbox-item-15" class="w-full ms-2 text-sm font-medium text-heading">Joseph Mcfall</label>
        </div>
      </li>
      <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
          <input id="checkbox-item-16" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="checkbox-item-16" class="w-full ms-2 text-sm font-medium text-heading">Leslie Livingston</label>
        </div>
      </li>
            <li>
        <div class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
          <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 border border-default-strong rounded-xs bg-neutral-secondary-strong focus:ring-2 focus:ring-brand-soft">
          <label for="checkbox-item-17" class="w-full ms-2 text-sm font-medium text-heading">Roberta Casas</label>
        </div>
      </li>
    </ul>
    <div class="p-2">
        <button type="button" class="inline-flex items-center justify-center text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded w-full text-xs px-3 py-1.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        Delete user
        </button>
    </div>
</div>
{{< /example >}}

## Inline layout

You can align the checkbox elements horizontally by using a wrapper tag and applying the `flex` class.

{{< example github="forms/checkbox.md" show_dark=true >}}
<div class="flex">
    <div class="flex items-center me-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
        <label for="inline-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Inline 1</label>
    </div>
    <div class="flex items-center me-4">
        <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
        <label for="inline-2-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Inline 2</label>
    </div>
    <div class="flex items-center me-4">
        <input checked id="inline-checked-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
        <label for="inline-checked-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Inline checked</label>
    </div>
    <div class="flex items-center">
        <input disabled id="inline-disabled-checkbox" type="checkbox" value="" class="w-4 h-4 border border-light rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
        <label for="inline-disabled-checkbox" class="select-none ms-2 text-sm font-medium text-fg-disabled">Inline disabled</label>
    </div>
</div>
{{< /example >}}

## Colors

Use the `text-{color}-{shade}` classes from Tailwind CSS to change the color of the checkbox component.

{{< example class="flex flex-wrap" github="forms/checkbox.md" show_dark=true >}}
<div class="flex items-center me-4">
    <input checked id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-red-500 dark:focus:ring-red-600 ring-offset-neutral-primary focus:ring-2">
    <label for="red-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Red</label>
</div>
<div class="flex items-center me-4">
    <input checked id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-green-500 dark:focus:ring-green-600 ring-offset-neutral-primary focus:ring-2">
    <label for="green-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Green</label>
</div>
<div class="flex items-center me-4">
    <input checked id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-purple-500 dark:focus:ring-purple-600 ring-offset-neutral-primary focus:ring-2">
    <label for="purple-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Purple</label>
</div>
<div class="flex items-center me-4">
    <input checked id="teal-checkbox" type="checkbox" value="" class="w-4 h-4 text-teal-600 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-teal-500 dark:focus:ring-teal-600 ring-offset-neutral-primary focus:ring-2">
    <label for="teal-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Teal</label>
</div>
<div class="flex items-center me-4">
    <input checked id="yellow-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-400 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-yellow-500 dark:focus:ring-yellow-600 ring-offset-neutral-primary focus:ring-2">
    <label for="yellow-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Yellow</label>
</div>
<div class="flex items-center me-4">
    <input checked id="orange-checkbox" type="checkbox" value="" class="w-4 h-4 text-orange-500 bg-neutral-secondary-medium border-default-medium rounded-xs focus:ring-orange-500 dark:focus:ring-orange-600 ring-offset-neutral-primary focus:ring-2">
    <label for="orange-checkbox" class="select-none ms-2 text-sm font-medium text-heading">Orange</label>
</div>
{{< /example >}}

## Advanced layout

Use this example of an advanced layout of checkbox elements where the label parent element can be styled when the checkbox is checked.

{{< example class="flex flex-wrap" github="forms/checkbox.md" show_dark=true >}}
<h3 class="mb-4 text-lg font-medium text-heading">Choose technology:</h3>
<ul class="select-none grid w-full gap-4 md:grid-cols-3">
    <li>
        <input type="checkbox" id="react-option" value="" class="hidden peer" required="">
        <label for="react-option" class="inline-flex items-center justify-between w-full p-5 text-body bg-neutral-primary-soft border-1 border-default rounded-base cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-brand-softer hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong">                           
            <div class="block">
                <svg class="mb-2 w-7 h-7 text-sky-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
                <div class="w-full font-medium mb-1">React Js</div>
                <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
            </div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="flowbite-option" value="" class="hidden peer">
        <label for="flowbite-option" class="inline-flex items-center justify-between w-full p-5 text-body bg-neutral-primary-soft border-1 border-default rounded-base cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-brand-softer hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong">
            <div class="block">
                <svg class="mb-2 text-green-600 w-7 h-7" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>
                <div class="w-full font-medium mb-1">Vue Js</div>
                <div class="w-full text-sm">An model–view front end JavaScript framework.</div>
            </div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="angular-option" value="" class="hidden peer">
        <label for="angular-option" class="inline-flex items-center justify-between w-full p-5 text-body bg-neutral-primary-soft border-1 border-default rounded-base cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-brand-softer hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong">
            <div class="block">
                <svg class="mb-2 text-red-600 w-7 h-7" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>
                <div class="w-full font-medium mb-1">Angular</div>
                <div class="w-full text-sm">A TypeScript-based web application framework.</div>
            </div>
        </label>
    </li>
</ul>
{{< /example >}}
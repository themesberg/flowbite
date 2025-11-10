---
layout: docs
title: Tailwind CSS Datepicker - Flowbite
description: Start receiving date and time data from your users using this free datepicker element based on Tailwind utility-classes and vanilla JavaScript
group: components
toc: true
requires_js: true

previous: Clipboard
previousLink: components/clipboard/
next: Device mockups
nextLink: components/device-mockups/
---

The Tailwind CSS datepicker component developed by Flowbite is built with vanilla JavaScript and using the utility-first classes from Tailwind. The datepicker features both inline and a date range picker functionality and some extra options such as autohide, custom format, positioning, and more. Check out the [timepicker component](https://flowbite.com/docs/forms/timepicker/) to select time alongside dates.

## Getting started

If you want to use the datepicker component from Flowbite you have to include the Flowbite JavaScript file either via NPM or CDN. For versions before `2.4.0` please continue using the dedicated CDN and component.

Follow the [quickstart guide]({{< ref "getting-started/quickstart" >}}) and then include the following JavaScript file:

{{< code lang="html" file="index.html" icon="file" >}}
<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
{{< /code >}}

Alternatively you can also use CDN to include the datepicker JavaScript.

{{< code lang="html" file="index.html" icon="file" >}}
<script src="https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.min.js"></script>
{{< /code >}}

Also make sure that you add the source files for Tailwind in your main CSS file:

{{< code lang="css" file="style.css" icon="file" >}}
@import "tailwindcss";

@source "../node_modules/flowbite-datepicker";
{{< /code >}}

If you'd like to manually be able to manipulate the datepicker component using JavaScript then you should <a href="#javascript">install the component using NPM</a> and include it into your JavaScript code.

## Datepicker example

Use the following example of an input element to create a datepicker component. All you need to do is to add the `datepicker` data attribute to any `input` element.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="500" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input datepicker id="default-datepicker" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

## Inline datepicker

Use the `inline-datepicker` and `data-date` data attributes to initialize and set the default date for an inline datepicker inside a block element such as a `div`.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true initDatepicker=true >}}
<div id="datepicker-inline" inline-datepicker data-date="02/25/2024"></div>
{{< /example >}}

## Date range picker

Use the `date-rangepicker` data attribute and the following markup to initialize two datepickers as a range.

{{< example class="flex justify-center " github="components/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div id="date-range-picker" date-rangepicker class="flex items-center">
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
    </div>
    <input id="datepicker-range-start" name="start" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date start">
  </div>
  <span class="mx-4 text-body">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
    </div>
    <input id="datepicker-range-end" name="end" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date end">
</div>
</div>
{{< /example >}}

## Options

Learn more about the options that you can use with the Tailwind datepicker to enable features such as autohide, action buttons, date format, orientation, and more based on the vanilla JavaScript from Flowbite.

### Autohide

Use the `datepicker-autohide` data attribute to make the datepicker disappear right after selecting a date.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input id="datepicker-autohide" datepicker datepicker-autohide type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

### Action buttons

By adding the `datepicker-buttons` data attribute you will enable the `today` and `clear` buttons:

- clicking on the `today` button will browse back to the current day/month/year
- clicking on the `clear` button will reset all selections

If you want the button to additionally select today's date, add `datepicker-autoselect-today` data attribute.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="530" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input id="datepicker-actions" datepicker datepicker-buttons datepicker-autoselect-today type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

### Date format

If you want to use a custom format such as `mm-dd-yyyy`then you can use the `datepicker-format="{format}"` data attribute to change it.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input id="datepicker-format" datepicker datepicker-format="mm-dd-yyyy" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

### Max and min dates

Use the `datepicker-min-date={format}` and `datepicker-max-date={format}` to set the minimum and maximum dates that can be selected inside the datepicker.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input id="datepicker-format" datepicker datepicker-min-date="06/04/2024" datepicker-max-date="05/05/2025" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

### Orientation

You can override the default positioning algorithm by using the `datepicker-orientation="{top|right|bottom|left}"` data attributes. You can even combine right with bottom or left with top.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input id="datepicker-orientation" datepicker datepicker-orientation="bottom right" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

### Title

You can also add a title to the datepicker by using the `datepicker-title="{title}"` data attribute.

{{< example class="flex justify-center bg-neutral-primary" github="components/datepicker.md" show_dark=true iframeHeight="530" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
  </div>
  <input id="datepicker-title" datepicker datepicker-title="Flowbite datepicker" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
</div>
{{< /example >}}

### Custom colors

You can set the `primary` color class which is by default set to blue to add your own colors.

### Language (i18n)

We are working on the API to provide language support for the datepicker. 

Until then, please refer to this [solution from GitHub](https://github.com/themesberg/flowbite/issues/32#issuecomment-1420422922).

## Timepicker

Use the native browser timepicker input field to select a time alongside the datepicker. Check out more examples on the [timepicker](https://flowbite.com/docs/forms/timepicker/) component page from Flowbite.

{{< example github="components/timepicker.md" show_dark=true >}}
<form class="max-w-[8rem] mx-auto">
    <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        </div>
        <input type="time" id="time" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
    </div>
</form>
{{< /example >}}

## Dark mode

If you would like to enable dark mode for the datepicker please follow the [dark mode]({{< ref "customize/dark-mode" >}}) guide on Flowbite and enable it either manually or by using a dark mode switcher.

## JavaScript Behaviour

Use the **Tailwind CSS Datepicker** component from Flowbite to select a date or range of dates based on the Datepicker API and configure the component using the methods and options that you can pass when creating the object using JavaScript.

### Object parameters

Use the object parameters from the Datepicker component to set the datepicker parent input element and the options associated with it when creating a new instance.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs  uppercase">
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
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">datepickerEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Pass the main HTML element that will be rendered for the datepicker. It can be an input element or a `div` for inline rendering.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">options</code>
              </td>
              <td class="px-6 py-4">
                Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Use the options parameter to set custom datepicker options such as the default date, minimum and maximum values, action buttons and callback functions.
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

Use these optional options for the Datepicker object to set options such as the date format, orientation, max and min dates, custom buttons, callback functions and more.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs  uppercase">
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
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">rangePicker</code>
              </td>
              <td class="px-6 py-4 ">
                  Boolean
              </td>
              <td class="px-6 py-4">
                  If set to true then the datepicker will be converted to a date range picker. By default it's false.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">format</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                  Use this option to set a custom format for the datepicker. By default it's `mm/dd/yyyy`.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">maxDate</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                 Use this option to set the maximum selectable date of the datepicker component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">minDate</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                 Use this option to set the minimum selectable date of the datepicker component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">orientation</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                 Set the orientation of the datepicker component when it's not inline. It can be top, bottom, left, or right.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">buttons</code>
              </td>
              <td class="px-6 py-4 ">
                  Boolean
              </td>
              <td class="px-6 py-4">
                 If set to true then the "today" and "clear" action buttons will be shown that lets you select today's date or clear selections.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">autoSelectToday</code>
              </td>
              <td class="px-6 py-4 ">
                  Integer
              </td>
              <td class="px-6 py-4">
                 If set to 1 then it will automatically have today's date preselected.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">title</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                 Set a custom title for the datepicker component. By default it's null.
              </td>
          </tr>
          <!-- <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">language</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                 Set the language of the datepicker using country codes like `es`, `fr`, or `de`. By default it's set to english.
              </td>
          </tr> -->
      </tbody>
  </table>
</div>

### Methods

Use the following methods of the Datepicker object to programmatically manipulate the behaviour.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs  uppercase">
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
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">getDate()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to get the currenctly select date from the datepicker.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">setDate()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set the date value of the datepicker component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">show()</code>
              </td>
              <td class="px-6 py-4">
                  Use this function to programatically show the datepicker component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">hide()</code>
              </td>
              <td class="px-6 py-4">
                  Use this function to programatically hide the datepicker component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">getDatepickerInstance()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to get the parent datepicker instance with the extended collection of methods and options.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">updateOnShow(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function whenever the datepicker component has been shown.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">updateOnHide(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function whenever the datepicker component has been hidden.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following examples to learn how to use a basic HTML markup together with the Flowbite Datepicker API JS.

First of all, you need to select the datepicker element (it can be an input field or div for inline datepickers) and set up the options object.

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
// set the target element of the input field
const $datepickerEl = document.getElementById('datepicker-custom');

// optional options with default values and callback functions
const options = {
    defaultDatepickerId: null,
    autohide: false,
    format: 'mm/dd/yyyy',
    maxDate: null,
    minDate: null,
    orientation: 'bottom',
    buttons: false,
    autoSelectToday: false,
    title: null,
    rangePicker: false,
    onShow: () => {},
    onHide: () => {},
};

const instanceOptions = {
  id: 'datepicker-custom-example',
  override: true
};
{{< /code >}}

Next step is to create a new instance of a Datepicker object using the parameters we have set above.

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
import { Datepicker } from 'flowbite';

/*
 * $datepickerEl: required
 * options: optional
 */
const datepicker = new Datepicker($datepickerEl, options, instanceOptions);
{{< /code >}}

Use the following methods to show and hide the datepicker, set or get the currently selected date and get access to the instance.

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
// get the currently selected date (undefined if not selected)
datepicker.getDate();

// set the date (or dates if date range picker)
datepicker.setDate('05/31/2024');

// programatically show the datepicker
datepicker.show();

// programatically hide the datepicker
datepicker.hide();

// use this method to get the parent datepicker instance from https://mymth.github.io/vanillajs-datepicker/#/
datepicker.getDatepickerInstance();
{{< /code >}}

### HTML Markup

Here is an example of the HTML markup that you can use for the JavaScript example above.

{{< code lang="html" file="datepicker.html" icon="file" >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input id="datepicker-custom" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Datepicker object, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="datepicker.ts" icon="file" >}}
import { Datepicker } from 'flowbite';
import type { DatepickerOptions, DatepickerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the target element of the input field or div
const $datepickerEl: HTMLInputElement = document.getElementById('datepicker-custom') as HTMLInputElement;

// optional options with default values and callback functions
const options: DatepickerOptions = {
    defaultDatepickerId: null,
    autohide: false,
    format: 'mm/dd/yyyy',
    maxDate: null,
    minDate: null,
    orientation: 'bottom',
    buttons: false,
    autoSelectToday: 0,
    title: null,
    rangePicker: false,
    onShow: () => {},
    onHide: () => {},
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'datepicker-custom-example',
  override: true
};

/*
 * $datepickerEl: required
 * options: optional
 * instanceOptions: optional
 */
const datepicker: DatepickerInterface = new Datepicker(
    $datepickerEl,
    options,
    instanceOptions
);

// get the currently selected date (undefined if not selected)
datepicker.getDate();

// set the date (or dates if date range picker)
datepicker.setDate('05/31/2024');

// programatically show the datepicker
datepicker.show();

// programatically hide the datepicker
datepicker.hide();

// use this method to get the parent datepicker instance from https://mymth.github.io/vanillajs-datepicker/#/
datepicker.getDatepickerInstance();
{{< /code >}}

### Parent library

If you want to directly use the main Datepicker component instance you can either install it via NPM and import it or use the `getDatepickerInstance()` method using our Instance Manager to call all of the extra options and methods from the [parent plugin library](https://github.com/themesberg/flowbite-datepicker):

{{< code lang="bash" >}}
npm install flowbite-datepicker --save
{{< /code >}}

After you've installed the NPM library, you will need to import the `Datepicker` module:

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
import Datepicker from 'flowbite-datepicker';
{{< /code >}}

Initialize a new element using the `Datepicker` constructor and optionally add your own options based on your needs:

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
const datepickerEl = document.getElementById('datepickerId');
new Datepicker(datepickerEl, {
    // options
}); 
{{< /code >}}

If you want to use the **Tailwind Date Range Picker** you have to import the `DateRangePicker` module:

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
import DateRangePicker from 'flowbite-datepicker';
{{< /code >}}

Then in the same fashion you can initialize a date range picker component by using the `DateRangePicker` constructor:

{{< code lang="javascript" file="datepicker.js" icon="file" >}}
const dateRangePickerEl = document.getElementById('dateRangePickerId');
new DateRangePicker(dateRangePickerEl, {
    // options
}); 
{{< /code >}}

### React support

One of our community members built the React version of the Flowbite Datepicker and you can learn more about it on <a href="https://github.com/OMikkel/tailwind-datepicker-react" rel="nofollow">this repository on GitHub</a>.

### Turbo load support 

In order to support turbo load from Ruby on Rails 7, you have to include the `flowbite.turbo.js` file either from NPM or CDN into your project.

Follow the [quickstart guide]({{< ref "getting-started/rails" >}}) and then include the following JavaScript file:

{{< code lang="ruby" file="Gemfile" icon="file" >}}
pin "flowbite", to: "https://cdn.jsdelivr.net/npm/flowbite@{{< current_version >}}/dist/flowbite.turbo.min.js"
{{< /code >}}

Don't forget to also import it inside your `application.js` file:

{{< code lang="javascript" file="application.js" icon="file" >}}
import "flowbite/dist/flowbite.turbo.js";
{{< /code >}}

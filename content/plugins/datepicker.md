---
layout: home
title: Tailwind CSS Datepicker - Flowbite
description: Start receiving date and time data from your users using this free datepicker element based on Tailwind utility-classes and vanilla JavaScript
group: plugins
toc: true
requires_js: true

previous: Tooltips
previousLink: components/tooltips
---

The Tailwind CSS datepicker component developed by Flowbite is built with vanilla JavaScript and using the utility-first classes from Tailwind. The datepicker features both inline and a date range picker functionality and some extra options such as autohide, custom format, positioning, and more.

## Getting started

If you want to use the datepicker component plugin from Flowbite you have to include the `datepicker.js` file either from NPM or CDN into your project.

Follow the [quickstart guide]({{< ref "getting-started/quickstart" >}}) and then include the following JavaScript file:

```html
<script src="../path/to/flowbite/dist/datepicker.js"></script>
```
Alternatively you can also use CDN to include the datepicker JavaScript.

```html
<script src="https://unpkg.com/flowbite@{{< current_version >}}/dist/datepicker.js"></script>
```

If you'd like to manually be able to manipulate the datepicker component using JavaScript then you should <a href="#javascript">install the plugin using NPM</a> and include it into your JavaScript code.

## Datepicker example

Use the following example of an input element to create a datepicker component. All you need to do is to add the `datepicker` data attribute to any `input` element.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

## Inline datepicker

Use the `inline-datepicker` and `data-date` data attributes to initalize and set the default date for an inline datepicker inside a block element such as a `div`.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div inline-datepicker data-date="02/25/2022"></div>
{{< /example >}}

## Date range picker

Use the `date-rangepicker` data attribute and the following markup to initialize two datepickers as a range.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div date-rangepicker class="flex items-center">
  <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
    </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
</div>
</div>
{{< /example >}}

## Options

With the Tailwind Datepicker you can also add extra options using the custom data attributes developed by Flowbite based on a Vanilla JS library.

### Autohide

If you want the datepicker to dissapear right after clicking on a date then you need to use the `datepicker-autohide` data attribute.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Action buttons

By adding the `datepicker-buttons` data attribute you will enable the `today` and `clear` buttons with the following features:

- Clicking on the `today` button will browse back to the current day/month/year
- Clicking on the `clear` button will reset all selections

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-buttons type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Date format

If you want to use a custom format such as `mm/dd/yyyy`then you can use the `datepicker-format="{format}"` data attribute to change it.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-format="mm/dd/yyyy" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Orientation

You can override the default positioning algorithm by using the `datepicker-orientation="{top|right|bottom|left}"` data attributes. You can even combine right with bottom or left with top.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-orientation="bottom right" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Title

You can also add a title to the datepicker by using the `datepicker-title="{title}"` data attribute.

{{< example class="dark:bg-gray-800" github="plugins/datepicker.md" >}}
<div class="relative">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker datepicker-title="Flowbite datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

## Dark mode

If you would like to enable dark mode for the datepicker please follow the [dark mode]({{< ref "customize/dark-mode" >}}) guide on Flowbite and enable it either manually or by using a dark mode switcher.

## JavaScript

If you want to use the **Tailwind Datepicker** plugin using JavaScript you will need to include it into your project via NPM:

```bash
npm i @themesberg/tailwind-datepicker --save
```

After you've installed the NPM library, you will need to import the `Datepicker` module:

```javascript
import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';
```

Initialize a new element using the `Datepicker` constructor and optionally add custom options based on your needs:

```javascript
const datepickerEl = document.getElementById('datepickerId');
new Datepicker(datepickerEl, {
    // options
}); 
```

If you want to use the **Tailwind Date Range Picker** you have to import the `DateRangePicker` module:

```javascript
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';
```

Then in the same fashion you can initalize a date range picker component by using the `DateRangePicker` constructor:

```javascript
const dateRangePickerEl = document.getElementById('dateRangePickerId');
new DateRangePicker(dateRangePickerEl, {
    // options
}); 
```

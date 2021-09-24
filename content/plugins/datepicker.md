---
layout: home
title: Tailwind CSS Datepicker - Flowbite
description: Use the Tailwind CSS datepicker plugin to get date and time data from input users using JavaScript and utility classes with Flowbite
group: plugins
toc: true

previous: Tooltips
previousLink: components/tooltips
---

The Tailwind CSS datepicker component developed by Flowbite is based on the popular <a href="https://mymth.github.io/vanillajs-datepicker/#/" target="_blank" rel="nofollow">Vanilla JS Datepicker</a> library optimized with Tailwind utility classes and custom design.

## Getting started

By including the `flowbite.bundle.js` JavaScript file then you will be able to create datepicker components based on Tailwind using the data attributes.

```html
<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
```

However, if you'd like to manually be able to manipulate the datepicker component using JavaScript then you should <a href="#javascript">install the plugin using NPM</a> and include it into your JavaScript code.
## Datepicker example

Use the following example of an input element to create a datepicker component. All you need to do is to add the `datepicker` data attribute to any `input` element.

{{< example >}}
<div class="relative">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date">
</div>
{{< /example >}}

### Inline datepicker example

Use the `inline-datepicker` and `data-date` data attributes to initalize and set the default date for an inline datepicker inside a block element such as a `div`.

{{< example >}}
<div inline-datepicker data-date="02/25/2022"></div>
{{< /example >}}

### Date range picker

Use the `date-rangepicker` data attribute and the following markup to initialize two datepickers as a range.

{{< example >}}
<div date-rangepicker class="flex items-center">
  <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date start">
    </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date end">
</div>
</div>
{{< /example >}}

## JavaScript

If you want to use the **Tailwind Datepicker** plugin using JavaScript you will need to include it into your project via NPM:

```bash
npm i @themesberg/tailwind-datepicker --save
```

### Datepicker

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

### Date range picker

If you want to use the **Tailwind Date Range Picker** you have to import the `DateRangePicker` module:

```javascript
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';
```

Then in the same fashion you can initalize a date range picker component by using the `DateRangePicker` constructor:

```javascript
const dateRangePickerEl = document.getElementById('dateRangePickerId');
new DateRangePicker(datepickerEl, {
    // options
}); 
```
<!-- ## Options

The second argument for the `Datepicker` and `DateRangePicker` constructors is the `option` object where you can add optional options such as default dates, different behaviours, extra elements, and many more.

Here's the full list of the available options. -->

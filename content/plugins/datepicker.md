---
layout: home
title: Tailwind CSS Datepicker - Flowbite
description: Start receiving date and time data from your users using this free datepicker element based on Tailwind utility-classes and vanilla JavaScript
group: plugins
toc: true
requires_js: true

previous: Charts
previousLink: plugins/charts/
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/{{< current_version >}}/datepicker.min.js"></script>
```

If you'd like to manually be able to manipulate the datepicker component using JavaScript then you should <a href="#javascript">install the plugin using NPM</a> and include it into your JavaScript code.

## Datepicker example

Use the following example of an input element to create a datepicker component. All you need to do is to add the `datepicker` data attribute to any `input` element.

{{< example id="default-datepicker-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="500" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

## Inline datepicker

Use the `inline-datepicker` and `data-date` data attributes to initalize and set the default date for an inline datepicker inside a block element such as a `div`.

{{< example id="datepicker-inline-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true initDatepicker=true >}}
<div inline-datepicker data-date="02/25/2022"></div>
{{< /example >}}

## Date range picker

Use the `date-rangepicker` data attribute and the following markup to initialize two datepickers as a range.

{{< example id="datepicker-range-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div date-rangepicker class="flex items-center">
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
  </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
</div>
</div>
{{< /example >}}

## Options

With the Tailwind Datepicker you can also add extra options using the custom data attributes developed by Flowbite based on a Vanilla JS library.

### Autohide

If you want the datepicker to dissapear right after clicking on a date then you need to use the `datepicker-autohide` data attribute.

{{< example id="datepicker-autohide-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Action buttons

By adding the `datepicker-buttons` data attribute you will enable the `today` and `clear` buttons with the following features:

- Clicking on the `today` button will browse back to the current day/month/year
- Clicking on the `clear` button will reset all selections

{{< example id="datepicker-action-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="530" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-buttons type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Date format

If you want to use a custom format such as `mm/dd/yyyy`then you can use the `datepicker-format="{format}"` data attribute to change it.

{{< example id="datepicker-date-format-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-format="mm/dd/yyyy" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Orientation

You can override the default positioning algorithm by using the `datepicker-orientation="{top|right|bottom|left}"` data attributes. You can even combine right with bottom or left with top.

{{< example id="datepicker-orientation-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="480" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-orientation="bottom right" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

### Title

You can also add a title to the datepicker by using the `datepicker-title="{title}"` data attribute.

{{< example id="datepicker-title-example" class="flex justify-center dark:bg-gray-900" github="plugins/datepicker.md" show_dark=true iframeHeight="530" initDatepicker=true >}}
<div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
  </div>
  <input datepicker datepicker-title="Flowbite datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
</div>
{{< /example >}}

## Dark mode

If you would like to enable dark mode for the datepicker please follow the [dark mode]({{< ref "customize/dark-mode" >}}) guide on Flowbite and enable it either manually or by using a dark mode switcher.

## JavaScript

If you want to use the **Tailwind Datepicker** plugin using JavaScript you will need to include it into your project via NPM:

```bash
npm install flowbite-datepicker --save
```

After you've installed the NPM library, you will need to import the `Datepicker` module:

```javascript
import Datepicker from 'flowbite-datepicker/Datepicker';
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
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
```

Then in the same fashion you can initalize a date range picker component by using the `DateRangePicker` constructor:

```javascript
const dateRangePickerEl = document.getElementById('dateRangePickerId');
new DateRangePicker(dateRangePickerEl, {
    // options
}); 
```

## React support

One of our community members built the React version of the Flowbite Datepicker and you can learn more about it on <a href="https://github.com/OMikkel/tailwind-datepicker-react" rel="nofollow">this repository on GitHub</a>.

## Turbo load support 

In order to support turbo load from Ruby on Rails 7, you have to include the `datepicker.turbo.js` file either from NPM or CDN into your project.

Follow the [quickstart guide]({{< ref "getting-started/rails" >}}) and then include the following JavaScript file:

```bash
pin "flowbite-datepicker", to: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/{{< current_version >}}/datepicker.turbo.min.js"
```

Don't forget to also import it inside your `application.js` file:

```javascript
import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';
```
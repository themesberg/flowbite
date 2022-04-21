---
layout: home
title: Tailwind CSS Toggle - Flowbite
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
group: forms
toc: true

previous: Radio
previousLink: forms/radio/
next: Range Slider
nextLink: forms/range-slider/
---

## Toggle example

Use the following toggle switch component to ask for a yes or no type of input from your users without the use of JavaScript.

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>
{{< /example >}}

## Checked state

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label>
{{< /example >}}

## Disabled state

{{< example class="flex flex-col flex-wrap dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="disabled-toggle" class="inline-flex relative items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" id="disabled-toggle" class="sr-only peer" disabled>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
</label>

<label for="disabled-checked-toggle" class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="disabled-checked-toggle" class="sr-only peer" checked disabled>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled checked</span>
</label>
{{< /example >}}

## Colors

{{< example class="inline-flex inline-flex-wrap dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="red-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" id="red-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Red</span>
</label>

<label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" id="green-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Green</span>
</label>

<label for="purple-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" id="purple-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</span>
</label>

<label for="yellow-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" id="yellow-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</span>
</label>

<label for="teal-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" id="teal-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</span>
</label>

<label for="orange-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" id="orange-toggle" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</span>
</label>
{{< /example >}}

## Sizing

{{< example class="flex flex-col flex-wrap dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="small-toggle" class="inline-flex relative items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" id="small-toggle" class="sr-only peer">
  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
</label>

<label for="default-toggle-size" class="inline-flex relative items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" id="default-toggle-size" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Default toggle</span>
</label>

<label for="large-toggle" class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="large-toggle" class="sr-only peer">
  <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Large toggle</span>
</label>
{{< /example >}}
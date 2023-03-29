---
layout: home
title: Tailwind CSS Toggle - Flowbite
description: Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors
group: forms
toc: true

previous: Radio
previousLink: forms/radio/
next: Range Slider
nextLink: forms/range/
---

The toggle component can be used to receive a simple "yes" or "no" type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Toggle example

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

{{< example id="default-toggle-example" class="flex justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>
{{< /example >}}

## Checked state

Apply the `checked` attribute to the toggle component to activate the selection by default.

{{< example id="toggle-checked-example" class="flex justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label>
{{< /example >}}

## Disabled state

Apply the `disabled` attribute to disallow the users from making any further selections.

{{< example id="toggle-disabled-example" class="flex flex-col flex-wrap items-center" github="forms/toggle.md" show_dark=true >}}
<label class="relative inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" disabled>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
</label>

<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked disabled>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled checked</span>
</label>
{{< /example >}}

## Colors

Change the color of the toggle component by updating the color classes of `peer-focus` and `peer-checked`.

{{< example id="toggle-colors-example" class="flex inline-flex-wrap justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Red</span>
</label>

<label class="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Green</span>
</label>

<label class="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</span>
</label>

<label class="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</span>
</label>

<label class="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</span>
</label>

<label class="relative inline-flex items-center mr-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</span>
</label>
{{< /example >}}

## Sizes

Get started with small, default, or large sizes of the toggle component based on your needs.

{{< example id="toggle-sizes-example" class="flex flex-col flex-wrap items-center" github="forms/toggle.md" show_dark=true >}}
<label class="relative inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
</label>

<label class="relative inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Default toggle</span>
</label>

<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Large toggle</span>
</label>
{{< /example >}}
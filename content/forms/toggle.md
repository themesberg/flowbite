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
<label for="default-toggle" class="flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only">
  <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>
{{< /example >}}

## Checked state

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="checked-toggle" class="flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="checked-toggle" class="sr-only" checked>
  <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label>
{{< /example >}}

## Disabled state

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="disabled-toggle" class="flex relative items-center cursor-not-allowed">
  <input type="checkbox" value="" id="disabled-toggle" class="sr-only" disabled>
  <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
</label>
{{< /example >}}

## Colors

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label for="red-toggle" class="flex relative items-center cursor-not-allowed">
  <input type="checkbox" value="" id="red-toggle" class="sr-only">
  <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Disabled toggle</span>
</label>
{{< /example >}}

## Sizing
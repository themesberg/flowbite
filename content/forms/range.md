---
layout: home
title: Tailwind CSS Range Slider - Flowbite
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
group: forms
toc: true

previous: Toggle
previousLink: forms/toggle/
next: Floating Labels
nextLink: forms/floating-labels/
---

Make sure that you have included Flowbite as a plugin inside your Tailwind CSS project to apply all the necessary styles for the range slider component.

## Range slider example

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default range</label>
<input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Disabled state

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<label for="disabled-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default range</label>
<input id="disabled-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" disabled>
{{< /example >}}

## Min and max

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Min-max range</label>
<input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Steps

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<label for="steps-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Range steps</label>
<input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Colors

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<input type="range" min="0" max="5" value="2.5" step="0.5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Sizes

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<input type="range" min="0" max="5" value="2.5" step="0.5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}
---
layout: home
title: Tailwind CSS Range Slider - Flowbite
description: Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options
group: forms
toc: true
requires_js: true

previous: Toggle
previousLink: forms/toggle/
next: Floating Label
nextLink: forms/floating-label/
---

The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

The examples on this page are all coded with Tailwind CSS and requires you to install Flowbite as a plugin inside your project to obtain all the necessary stylings.

## Range slider example

Get started with this default example with values from 1 to 100 and the default value of 50.

{{< example id="default-range-example" github="forms/range.md" show_dark=true >}}
<label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
<input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Disabled state

Apply the `disabled` class to disallow the users from further selecting values.

{{< example id="range-disabled-example" github="forms/range.md" show_dark=true >}}
<label for="disabled-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
<input id="disabled-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" disabled>
{{< /example >}}

## Min and max

Use the min and max attributes on the range component to set the limits of the range values.

{{< example id="range-minmax-example" github="forms/range.md" show_dark=true >}}
<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min-max range</label>
<input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Steps

Use the step attribute on the range component to set the increment with which the values will change.

{{< example id="range-steps-example" github="forms/range.md" show_dark=true >}}
<label for="steps-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Range steps</label>
<input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
{{< /example >}}

## Sizes

Apply the small, default, and large sizes for the range component by applying the `range-sm` and `range-lg` utility classes from Flowbite and Tailwind CSS.

{{< example id="range-sizes-example" github="forms/range.md" show_dark=true >}}
<label for="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small range</label>
<input id="small-range" type="range" value="50" class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700">

<label for="medium-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
<input id="medium-range" type="range" value="50" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">

<label for="large-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large range</label>
<input id="large-range" type="range" value="50" class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700">
{{< /example >}}
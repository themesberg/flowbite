---
layout: docs
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

{{< example github="forms/range.md" show_dark=true >}}
<label for="default-range" class="block mb-2.5 text-sm font-medium text-heading">Default range</label>
<input id="default-range" type="range" value="50" class="w-full h-2 bg-neutral-quaternary rounded-full appearance-none cursor-pointer">
{{< /example >}}

## Disabled state

Apply the `disabled` class to disallow the users from further selecting values.

{{< example github="forms/range.md" show_dark=true >}}
<label for="disabled-range" class="block mb-2.5 text-sm font-medium text-heading">Default range</label>
<input id="disabled-range" type="range" value="50" class="w-full h-2 bg-neutral-quaternary rounded-full appearance-none cursor-pointer" disabled>
{{< /example >}}

## Min and max

Use the min and max attributes on the range component to set the limits of the range values.

{{< example github="forms/range.md" show_dark=true >}}
<label for="minmax-range" class="block mb-2.5 text-sm font-medium text-heading">Min-max range</label>
<input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-neutral-quaternary rounded-full appearance-none cursor-pointer">
{{< /example >}}

## Steps

Use the step attribute on the range component to set the increment with which the values will change.

{{< example github="forms/range.md" show_dark=true >}}
<label for="steps-range" class="block mb-2.5 text-sm font-medium text-heading">Range steps</label>
<input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" class="w-full h-2 bg-neutral-quaternary rounded-full appearance-none cursor-pointer">
{{< /example >}}

## Sizes

Apply the small, default, and large sizes for the range component by applying the `range-sm` and `range-lg` utility classes from Flowbite and Tailwind CSS.

{{< example github="forms/range.md" show_dark=true >}}
<label for="small-range" class="block mb-2.5 text-sm font-medium text-heading">Small range</label>
<input id="small-range" type="range" value="50" class="w-full h-1 mb-6 bg-neutral-quaternary rounded-full appearance-none cursor-pointer range-sm">

<label for="medium-range" class="block mb-2.5 text-sm font-medium text-heading">Default range</label>
<input id="medium-range" type="range" value="50" class="w-full h-2 mb-6 bg-neutral-quaternary rounded-full appearance-none cursor-pointer">

<label for="large-range" class="block mb-2.5 text-sm font-medium text-heading">Large range</label>
<input id="large-range" type="range" value="50" class="w-full h-3 bg-neutral-quaternary rounded-full appearance-none cursor-pointer range-lg">
{{< /example >}}

## Labels

Use the following example to add labels to each value milestone of the range slider component.

{{< example github="forms/range.md" show_dark=true >}}
<div class="relative mb-6">
    <label for="labels-range-input" class="sr-only">Labels range</label>
    <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-neutral-quaternary rounded-full appearance-none cursor-pointer">
    <span class="text-sm text-body absolute start-0 -bottom-6">Min ($100)</span>
    <span class="text-sm text-body absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
    <span class="text-sm text-body absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
    <span class="text-sm text-body absolute end-0 -bottom-6">Max ($1500)</span>
</div>
{{< /example >}}

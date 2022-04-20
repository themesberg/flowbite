---
layout: home
title: Tailwind CSS Checkbox - Flowbite
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
group: forms
toc: true

previous: Textarea
previousLink: forms/textarea/
next: Radio
nextLink: forms/radio/
---

## Checkbox example

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
</div>
<div class="flex items-center">
    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div>
{{< /example >}}

## Disabled state

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex items-center mb-4">
    <input disabled id="disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="disabled-checkbox" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled checkbox</label>
</div>
<div class="flex items-center">
    <input disabled checked id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="disabled-checked-checkbox" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled checked</label>
</div>
{{< /example >}}

## Checkbox link

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>
{{< /example >}}

## Helper text

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    </div>
    <div class="ml-2 text-sm">
        <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Free shipping via Flowbite</label>
        <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
    </div>
</div>
{{< /example >}}

## Inline

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex">
    <div class="flex items-center mr-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline 1</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline 2</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="inline-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline checked</label>
    </div>
    <div class="flex items-center">
        <input disabled id="inline-disabled-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="inline-disabled-checkbox" class="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Inline disabled</label>
    </div>
</div>
{{< /example >}}

## Colors

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex flex-wrap">
    <div class="flex items-center mr-4">
        <input checked id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="red-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red checkbox</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="green-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="green-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green checkbox</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="purple-checkbox" type="checkbox" value="" class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="purple-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple checkbox</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="teal-checkbox" type="checkbox" value="" class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="teal-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal checkbox</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="yellow-checkbox" type="checkbox" value="" class="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="yellow-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow checkbox</label>
    </div>
</div>
{{< /example >}}

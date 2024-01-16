---
layout: home
title: Tailwind CSS Copy to Clipboard - Flowbite
description: Use the copy to clipboard component to copy text, data or lines of code to the clipboard with a single click based on various styles and examples coded with Tailwind CSS and Flowbite
group: components
toc: true
requires_js: true

previous: Carousel
previousLink: components/carousel/
next: Device mockups
nextLink: components/device-mockups/
---

The chat bubble component is the building block for creating chat interfaces where users can send messages to each other by text, voice notes, images, galleries and other attachments. These components are usually used in chat applications and social media platforms such as Facebook, Twitter/X, WhatsApp, and more.

The examples below provide multiple variations of default, outline, and clean styles coded with the utility classes from Tailwind CSS. Some of the components may require you to include the Flowbite JavaScript to enable the dropdowns and tooltips functionality.

## Default copy to clipboard

Use this example to copy the content of an input text field by clicking on a button.

{{< example id="clipboard-example" class="flex justify-center" github="components/clipboard.md" show_dark=true iframeHeight="380" >}}
<div class="mb-5 grid grid-cols-4 gap-2 w-full max-w-xs">
    <label for="npm_install" class="sr-only">Label</label>
    <input id="npm_install" type="text" class="col-span-3 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readonly>
    <button data-copy-to-clipboard-target="npm_install" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy</button>
</div>
{{< /example >}}

=---
layout: home
title: Tailwind CSS Speed Dial - Flowbite
description: Use the popover component to show detailed information inside a pop-up box relative to the element that is being clicked or hovered based on multiple styles
group: components
toc: true
requires_js: true

previous: Progress bar
previousLink: components/progress/

next: Tables
nextLink: components/tables/
---

Get started with the popover component to show any type of content inside a pop-up box when hovering or clicking over a trigger element. There are multiple examples that you can choose from, such as showing more information about a user profile, company profile, password strength, and more.

Make sure that you have the Flowbite JavaScript included in your project to enable the popover interactivity by following the <a href="{{< ref "getting-started/quickstart" >}}">quickstart guide</a>.

## Default speed dial

Initialize a new popover by adding the `data-popover-target="{elementId}"` data attribute to the trigger element where `elementId` is the id of the popover component.

{{< example id="default-popover-example" class="flex justify-center pt-24" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
<div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

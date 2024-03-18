---
layout: home
title: Tailwind CSS Timepicker - Flowbite
description: Use the timepicker component from Flowbite to select the time of the day in terms of hours, minutes and even seconds using an input selector based on Tailwind CSS
group: components
toc: true
requires_js: true

previous: Timeline
previousLink: components/timeline/
next: Toast
nextLink: components/toast/
---

## Default timepicker

{{< example id="timepicker-default-example" github="components/timepicker.md" show_dark=true >}}
<form class="max-w-[8rem] mx-auto">
    <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </div>
        <input type="time" id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
    </div>
</form>
{{< /example >}}

## Timepicker with icon

{{< example id="timepicker-input-group-example" github="components/timepicker.md" show_dark=true >}}
<form class="max-w-[8.5rem] mx-auto">
    <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
    <div class="flex">
        <input type="time" id="time" class="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required>
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </span>
    </div>
</form>
{{< /example >}}
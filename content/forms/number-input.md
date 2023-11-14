---
layout: home
title: Tailwind CSS Number Input - Flowbite
description: Use the number input component to set a numeric value inside a form field based on multiple styles, variants, and layouts that can be used in product pages, forms, and more
group: components
toc: true

previous: Search Input
previousLink: forms/search-input/
next: Select
nextLink: components/select/
---


## Default number input


{{< example id="default-number-input" github="components/number-input.md" show_dark=true >}}
<form action="#" class="max-w-sm mx-auto">
    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required>
</form>
{{< /example >}}

## ZIP code input

{{< example id="zip-code-number-input" github="components/number-input.md" show_dark=true >}}
<form action="#" class="max-w-sm mx-auto">
    <label for="zip-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP code:</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
        </div>
        <input type="text" id="zip-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12345 or 12345-6789" pattern="^\d{5}(-\d{4})?$" required>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p>
</form>

{{< /example >}}

## Phone number

## Control buttons

## Credit card input

## Pin code input

## Number input with dropdown
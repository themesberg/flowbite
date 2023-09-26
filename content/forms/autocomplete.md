
---
layout: home
title: Tailwind CSS Autocomplete - Flowbite
description: Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants
group: forms
toc: true

previous: Search Input
previousLink: forms/search-input/
next: Textarea
nextLink: forms/textarea/
---

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Select input example

Get started with the default example of a select input component to get a single option selection.

{{< example class="dark:bg-gray-800" github="forms/select.md" show_dark=true >}}
<div class="relative w-80">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    </div>
    <input data-autocomplete="autocomplete-menu" data-autocomplete-options="['United States', 'Germany', 'France', 'United Kingdom']" autocomplete="off" list="" id="autocomplete" aria-expanded="false" aria-label="Search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quick search for anything">
    <div id="autocomplete-menu" class="absolute bg-white border mt-2 border-gray-200 rounded-lg z-[60] text-gray-500 text-sm py-3 w-full hidden">
        <div class="px-5 mb-3 font-semibold text-gray-900">Recent</div>
        <ul role="listbox" class="font-medium text-gray-500">
            <li aria-selected="false" role="presentation" tabindex="-1" aria-posinset="1" class="flex items-center py-2 px-5 cursor-pointer hover:bg-gray-100">
                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span>United States</span>
            </li>
            <li aria-selected="false" role="presentation" tabindex="-1" aria-posinset="2" class="flex items-center py-2 px-5 cursor-pointer hover:bg-gray-100">
                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span>Germany</span>
            </li>
            <li aria-selected="false" role="presentation" tabindex="-1" aria-posinset="3" class="flex items-center py-2 px-5 cursor-pointer hover:bg-gray-100">
                <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span>France</span>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## JavaScript behaviour

Get started with the default example of a select input component to get a single option selection.

{{< example class="dark:bg-gray-800" github="forms/select.md" show_dark=true >}}
<div class="relative w-80">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    </div>
    <input autocomplete="off" list="" id="autocomplete-js" aria-expanded="false" aria-label="Search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quick search for anything">
</div>
{{< /example >}}

## Datalist

Get started with the default example of a select input component to get a single option selection.

{{< example class="dark:bg-gray-800" github="forms/select.md" show_dark=true >}}
<!-- <label for="autocomplete" class="sr-only">Search</label>
<div class="relative w-96">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    </div>
    <input autocomplete="off" data-autocomplete="autocomplete-data" list="" id="autocomplete" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quick search for anything">
    <div class="absolute bg-white border mt-2 border-gray-200 rounded-lg z-[60] text-gray-500 text-sm p-3 w-full hidden">
        <div class="px-2 mb-3 font-semibold text-gray-900">Recent</div>
        <datalist id="autocomplete-data" class="block space-y-2 text-sm text-gray-500">
            <option value="tailwind" class="p-2 font-medium rounded-lg cursor-pointer hover:bg-gray-100">Tailwind CSS</option>
            <option value="bootstrap" class="p-2 font-medium rounded-lg cursor-pointer hover:bg-gray-100">Bootstrap</option>
            <option value="flowbite" class="p-2 font-medium rounded-lg cursor-pointer hover:bg-gray-100">Flowbite</option>
            <option value="mui" class="p-2 font-medium rounded-lg cursor-pointer hover:bg-gray-100">Material UI</option>
        </datalist>
    </div>
</div> -->
{{< /example >}}

---
layout: home
title: Tailwind CSS Tabs - Flowbite
description: Use the following Tailwind CSS table components to show complex data in an organized layout
group: components
toc: true

previous: Progress
previousLink: components/progress
next: Tooltips
nextLink: components/tooltips
---

## Default

Use the following HTML markup and Tailwind CSS utility classes to show a data set using a table component.

{{< example class="dark:bg-gray-900" >}}
<ul class="flex border-b border-gray-200 space-x-2 mb-4 dark:border-gray-700" id="myTab" role="tablist">
    <li role="presentation">
        <button class="bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 dark:text-blue-500" id="example-tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Profile</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-blue-500" id="example-tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Dashboard</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-500" id="example-tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Settings</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-blue-500" id="example-tab-4" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Contacts</button>
    </li>
</ul>
<div id="myTabContent">
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-4" role="tabpanel" aria-labelledby="tab-4-tab">Tab 3 content</div>
</div>
{{< /example >}}

## With underline

Use the following HTML markup and Tailwind CSS utility classes to show a data set using a table component.

{{< example class="dark:bg-gray-900" >}}
<div class="border-b border-gray-200 mb-4 dark:border-gray-700">
    <ul class="flex space-x-2 -mb-px" id="myTab" role="tablist">
        <li role="presentation">
            <button class="text-gray-500 hover:text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-blue-500" id="example-tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Profile</button>
        </li>
        <li role="presentation">
            <button class="text-blue-600 rounded-t-lg border-b-2 border-blue-600 py-4 px-4 text-sm font-medium text-center active dark:text-blue-500 dark:border-blue-500" id="example-tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Dashboard</button>
        </li>
        <li role="presentation">
            <button class="text-gray-500 hover:text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-blue-500" id="example-tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="text-gray-500 hover:text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-blue-500" id="example-tab-4" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="myTabContent">
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-4" role="tabpanel" aria-labelledby="tab-4-tab">Tab 3 content</div>
</div>
{{< /example >}}

## With icons

Use the following HTML markup and Tailwind CSS utility classes to show a data set using a table component.

{{< example class="dark:bg-gray-900" >}}
<div class="border-b border-gray-200 mb-4 dark:border-gray-700">
    <ul class="flex space-x-2 -mb-px" id="myTab" role="tablist">
        <li role="presentation">
            <button class="text-gray-500 hover:text-blue-600 rounded-t-lg inline-flex items-center group py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-blue-500" id="example-tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">
                <svg class="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                <span>Profile</span>
            </button>
        </li>
        <li role="presentation">
            <button class="text-blue-600 rounded-t-lg border-b-2 border-blue-600 inline-flex items-center py-4 px-4 text-sm font-medium text-center active dark:text-blue-500 dark:border-blue-500" id="example-tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">
                <svg class="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Dashboard
            </button>
        </li>
        <li role="presentation">
            <button class="text-gray-500 hover:text-blue-600 rounded-t-lg inline-flex items-center group py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-blue-500" id="example-tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">
                <svg class="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                Settings
            </button>
        </li>
        <li role="presentation">
            <button class="text-gray-500 hover:text-blue-600 rounded-t-lg inline-flex items-center group py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-blue-500" id="example-tab-4" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">
            <svg class="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                Activity
            </button>
        </li>
    </ul>
</div>
<div id="myTabContent">
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-4" role="tabpanel" aria-labelledby="tab-4-tab">Tab 3 content</div>
</div>
{{< /example >}}

## Pills

Use the following HTML markup and Tailwind CSS utility classes to show a data set using a table component.

{{< example class="dark:bg-gray-900" >}}
<ul class="flex space-x-2 mb-4" id="myTab" role="tablist">
    <li role="presentation">
        <button class="bg-blue-600 text-white rounded-lg py-3 px-4 text-sm font-medium text-center active" id="example-tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg py-3 px-4 text-sm font-medium text-center dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white" id="example-tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg py-3 px-4 text-sm font-medium text-center dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white" id="example-tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</button>
    </li>
</ul>
<div id="myTabContent">
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
</div>
{{< /example >}}

## Full width

Use the following HTML markup and Tailwind CSS utility classes to show a data set using a table component.

{{< example class="dark:bg-gray-900" >}}
<div class="sm:hidden mb-4">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Profile</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
    </select>
</div>
<ul class="hidden sm:flex rounded-lg shadow flex divide-x divide-gray-200 mb-4 dark:divide-gray-700" id="myTab" role="tablist">
    <li class="w-full" role="presentation">
        <button class="w-full bg-gray-50 text-gray-900 rounded-l-lg py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 active dark:bg-gray-700 dark:text-white" id="tab-1-tab" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Profile</button>
    </li>
    <li class="w-full" role="presentation">
        <button class="w-full bg-white text-gray-500 hover:text-gray-700 py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800  dark:hover:bg-gray-700 dark:text-white" id="tab-2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Dashboard</button>
    </li>
    <li class="w-full" role="presentation">
        <button class="w-full bg-white text-gray-500 hover:text-gray-700 py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white" id="tab-3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Settings</button>
    </li>
    <li class="w-full" role="presentation">
        <button class="w-full bg-white text-gray-500 hover:text-gray-700 rounded-r-lg py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white" id="tab-4-tab" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Invoice</button>
    </li>
</ul>
<div id="myTabContent">
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
    <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-4" role="tabpanel" aria-labelledby="tab-4-tab">Tab 3 content</div>
</div>
{{< /example >}}






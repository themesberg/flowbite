---
layout: home
title: Tailwind CSS Table - Flowbite
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
        <button class="bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 dark:text-blue-500" id="example-tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-blue-500" id="example-tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</button>
    </li>
    <li role="presentation">
        <button class="text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-500" id="example-tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</button>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
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
<div class="tab-content" id="myTabContent">
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
</div>
{{< /example >}}

## Full width

Use the following HTML markup and Tailwind CSS utility classes to show a data set using a table component.

{{< example class="dark:bg-gray-900" >}}
<ul class="rounded-lg shadow flex divide-x divide-gray-200 mb-4 dark:divide-gray-700" id="myTab" role="tablist">
    <li class="w-full" role="presentation">
        <button class="w-full bg-gray-50 text-gray-900 rounded-l-lg py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 active dark:bg-gray-700 dark:text-white" id="tab-1-tab" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</button>
    </li>
    <li class="w-full" role="presentation">
        <button class="w-full bg-white text-gray-500 hover:text-gray-700 py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800  dark:hover:bg-gray-700 dark:text-white" id="tab-2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</button>
    </li>
    <li class="w-full" role="presentation">
        <button class="w-full bg-white text-gray-500 hover:text-gray-700 rounded-r-lg py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:ring-2 focus:ring-blue-300 relative focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white" id="tab-3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</button>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg active dark:bg-gray-800 dark:text-gray-400" id="tab-1" role="tabpanel" aria-labelledby="tab-1-tab">Tab 1 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-2" role="tabpanel" aria-labelledby="tab-2-tab">Tab 2 content</div>
  <div class="text-gray-500 bg-gray-50 p-4 rounded-lg hidden dark:bg-gray-800 dark:text-gray-400" id="tab-3" role="tabpanel" aria-labelledby="tab-3-tab">Tab 3 content</div>
</div>
{{< /example >}}






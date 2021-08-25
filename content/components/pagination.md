---
layout: home
title: Pagination
description: Use the Tailwind CSS pagination element to indicate a series of content across various pages
group: components
toc: true
---

## Default example

Use the following list of pagination items powered by Tailwind CSS utility classes to indicate a series of content for your website.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3">Previous</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">1</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="bg-blue-50 border border-blue-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700 leading-tight z-10 py-2 px-3">3</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">4</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">5</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3">Next</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

{{< example >}}
<nav aria-label="Page navigation example">
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a href="#" class="block bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3">
        <span class="sr-only">Previous</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">1</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="bg-blue-50 border border-blue-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700 leading-tight z-10 py-2 px-3">3</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">4</a>
    </li>
    <li>
      <a href="#" class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3">5</a>
    </li>
    <li>
      <a href="#" class="block bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3">
        <span class="sr-only">Next</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Previous and next

Use the following markup to show simple previous and next elements.

{{< example >}}
<!-- Previous Button -->
<a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-4 py-2">
  Previous
</a>

<!-- Next Button -->
<a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-4 py-2 ml-3">
  Next
</a>
{{< /example >}}

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

{{< example >}}
<!-- Previous Button -->
<a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-4 py-2">
  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
  Previous
</a>
<a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg inline-flex items-center px-4 py-2">
  Next
  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
{{< /example >}}

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

{{< example >}}
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700">
      Showing <span class="font-semibold text-gray-900">1</span> to <span class="font-semibold text-gray-900">10</span> of <span class="font-semibold text-gray-900">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-2 xs:mt-0">
      <button class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-l py-2 px-4">
          Prev
      </button>
      <button class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-r border-0 border-l border-gray-700 py-2 px-4">
          Next
      </button>
  </div>
</div>
{{< /example >}}

## Table data pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

{{< example >}}
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700">
      Showing <span class="font-semibold text-gray-900">1</span> to <span class="font-semibold text-gray-900">10</span> of <span class="font-semibold text-gray-900">100</span> Entries
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
    <!-- Buttons -->
    <button class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-l inline-flex items-center py-2 px-4">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Prev
    </button>
    <button class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-r border-0 border-l border-gray-700 inline-flex items-center py-2 px-4">
        Next
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</div>
{{< /example >}}






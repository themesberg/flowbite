---
layout: home
title: Pagination
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

{{< prose >}}
## Default

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<nav aria-label="Page navigation example">
  <!-- List -->
	<ul class="flex pl-0 list-none rounded -space-x-px">
    <!-- Page links -->
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight ml-0 rounded-l">
      <a class="page-link" href="#">Previous</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">1</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">2</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="bg-white border border-blue-300 text-blue-600 bg-blue-100 hover:bg-blue-200 hover:text-blue-700 relative block py-2 px-3 leading-tight z-10">
      <a class="page-link" href="#">4</a>
    </li>
    <li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">5</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight rounded-r">
      <a class="page-link" href="#">Next</a>
    </li>
	</ul>
</nav>
{{< /example >}}

{{< prose >}}
## With icons

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<nav aria-label="Page navigation example">
  <!-- List -->
	<ul class="flex pl-0 list-none rounded -space-x-px">
    <!-- Page links -->
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-200 hover:text-gray-700 relative block py-2 px-3 leading-tight ml-0 rounded-l inline-flex items-center">
      <a class="page-link" href="#">
        <span class="sr-only">Previous</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">1</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">2</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="bg-white border border-blue-300 text-blue-600 bg-blue-100 hover:bg-blue-200 hover:text-blue-700 relative block py-2 px-3 leading-tight z-10">
      <a class="page-link" href="#">4</a>
    </li>
    <li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight">
      <a class="page-link" href="#">5</a>
    </li>
		<li class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 relative block py-2 px-3 leading-tight rounded-r">
      <span class="sr-only">Next</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </li>
	</ul>
</nav>
{{< /example >}}

{{< prose >}}
## Simple with buttons

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div class="flex justify-between sm:justify-start">
  <!-- Previous Button -->
  <a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg relative inline-flex items-center px-4 py-2">
    Previous
  </a>
  <!-- Next Button -->
  <a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg relative inline-flex items-center px-4 py-2 ml-3">
    Next
  </a>
</div>
{{< /example >}}

{{< prose >}}
## Simple with buttons & icons

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div class="flex justify-between sm:justify-start">
  <!-- Previous Button -->
  <a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg relative inline-flex items-center px-4 py-2">
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
    Previous
  </a>
  <!-- Next Button -->
  <a href="#" class="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-sm font-medium rounded-lg relative inline-flex items-center px-4 py-2 ml-3">
    Next
    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </a>
</div>
{{< /example >}}

{{< prose >}}
## Centered

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

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

{{< prose >}}
## Centered & icons

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

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






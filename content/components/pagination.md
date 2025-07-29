---
layout: home
title: Tailwind CSS Pagination - Flowbite
description: Use the Tailwind CSS pagination element to indicate a series of content across various pages based on multiple styles and sizes
group: components
toc: true

previous: Navbar
previousLink: components/navbar/
next: Popover
nextLink: components/popover/
---

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Default pagination

Use the following list of pagination items based on two sizes powered by Tailwind CSS utility classes to indicate a series of content for your website.

{{< example id="default-pagination-example" class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-10 focus:outline-none">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-10 focus:outline-none">Next</a>
    </li>
  </ul>
</nav>

{{< /example >}}

## Pagination with icons

The following pagination component example shows how you can use [SVG icons](https://flowbite.com/icons/) instead of text to show the previous and next pages.

{{< example id="pagination-icons-example" class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-9 h-9 focus:outline-none">
        <span class="sr-only">Previous</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none">
        <span class="sr-only">Next</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-10 h-10 focus:outline-none">
        <span class="sr-only">Previous</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-10 h-10 focus:outline-none">
        <span class="sr-only">Next</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
      </a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Previous and next

Use the following markup to show simple previous and next elements.

{{< example id="pagination-prev-next-example" class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex">
  <!-- Previous Button -->
  <a href="#" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Previous
  </a>

  <!-- Next Button -->
  <a href="#" class="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
  </a>
</div>

<div class="flex">
  <!-- Previous Button -->
  <a href="#" class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Previous
  </a>

  <!-- Next Button -->
  <a href="#" class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
  </a>
</div>
{{< /example >}}

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

{{< example id="pagination-prev-next-icons-example" class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex">
  <!-- Previous Button -->
  <a href="#" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </a>
  <a href="#" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
</div>
<div class="flex">
  <!-- Previous Button -->
  <a href="#" class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </a>
  <a href="#" class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
</div>
{{< /example >}}

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

{{< example id="pagination-table-example" class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-2 xs:mt-0">
      <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
      </button>
      <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
      </button>
  </div>
</div>
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-2 xs:mt-0">
      <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
      </button>
      <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
      </button>
  </div>
</div>
{{< /example >}}

## Table data pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

{{< example id="pagination-table-icons-example" class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
    <!-- Buttons -->
    <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
</div>
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
    <!-- Buttons -->
    <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
</div>
{{< /example >}}

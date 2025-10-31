---
layout: docs
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

{{< example class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-10 focus:outline-none">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-10 focus:outline-none">Next</a>
    </li>
  </ul>
</nav>

{{< /example >}}

## Pagination with icons

The following pagination component example shows how you can use [SVG icons](https://flowbite.com/icons/) instead of text to show the previous and next pages.

{{< example class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-9 h-9 focus:outline-none">
        <span class="sr-only">Previous</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none">
        <span class="sr-only">Next</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-10 h-10 focus:outline-none">
        <span class="sr-only">Previous</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-10 h-10 focus:outline-none">
        <span class="sr-only">Next</span>
        <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
      </a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Previous and next

Use the following markup to show simple previous and next elements.

{{< example class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex space-x-2">
  <!-- Previous Button -->
  <a href="#" class="text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
    Previous
  </a>

  <!-- Next Button -->
  <a href="#" class="text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
    Next
  </a>
</div>

<div class="flex space-x-2">
  <!-- Previous Button -->
  <a href="#" class="text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    Previous
  </a>

  <!-- Next Button -->
  <a href="#" class="text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    Next
  </a>
</div>
{{< /example >}}

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

{{< example class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}
<div class="flex space-x-2">
  <!-- Previous Button -->
  <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
    <svg class="w-4 h-4 me-1.5 -ms-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
    Previous
  </a>

  <!-- Next Button -->
  <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
    Next
    <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
  </a>
</div>

<div class="flex space-x-2">
  <!-- Previous Button -->
  <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    <svg class="w-4 h-4 me-1.5 -ms-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
    Previous
  </a>

  <!-- Next Button -->
  <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    Next
    <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
  </a>
</div>
{{< /example >}}

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

{{< example class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-body">
      Showing <span class="font-semibold text-heading">1</span> to <span class="font-semibold text-heading">10</span> of <span class="font-semibold text-heading">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-4 -space-x-px">
    <!-- Previous Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
      Previous
    </button>
    <!-- Next Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
      Next
    </button>
  </div>
</div>
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-body">
      Showing <span class="font-semibold text-heading">1</span> to <span class="font-semibold text-heading">10</span> of <span class="font-semibold text-heading">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-4 -space-x-px">
    <!-- Previous Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
      Previous
    </button>
    <!-- Next Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
      Next
    </button>
  </div>
</div>
{{< /example >}}

## Table pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

{{< example class="flex flex-col space-y-4 items-center justify-center" github="components/pagination.md" show_dark=true >}}

<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-body">
      Showing <span class="font-semibold text-heading">1</span> to <span class="font-semibold text-heading">10</span> of <span class="font-semibold text-heading">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-4 -space-x-px">
    <!-- Previous Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">
      <svg class="w-4 h-4 me-1.5 -ms-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
      Previous
    </button>
    <!-- Next Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">
      Next
      <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </button>
  </div>
</div>
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-body">
      Showing <span class="font-semibold text-heading">1</span> to <span class="font-semibold text-heading">10</span> of <span class="font-semibold text-heading">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-4 -space-x-px">
    <!-- Previous Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
      <svg class="w-4 h-4 me-1.5 -ms-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
      Previous
    </button>
    <!-- Next Button -->
    <button type="button" class="inline-flex items-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
      Next
      <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </button>
  </div>
</div>
{{< /example >}}

## Pagination with dropdown

Use this example of a pagination component with a dropdown to select the number of items per page.

{{< example class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example" class="flex items-center space-x-4">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
    </li>
  </ul>
  <form class="w-32 mx-auto">
    <label for="countries" class="sr-only">Select an option</label>
    <select id="countries" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm leading-4 rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
      <option selected>10 per page</option>
      <option value="25">25 per page</option>
      <option value="50">50 per page</option>
      <option value="100">100 per page</option>
    </select>
  </form>
</nav>

{{< /example >}}

## Pagination with input

Use this pagination component with an input field to navigate through pages directly.

{{< example class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example" class="flex items-center space-x-4">
  <ul class="flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
    </li>
  </ul>
  <form class="mx-auto">
    <div class="flex items-center space-x-2">
        <label for="visitors" class="text-sm font-medium text-body shrink-0">Go to</label>
        <input type="text" id="visitors" class="bg-neutral-secondary-medium w-10 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="99" required />
        <span class="text-sm font-medium text-body">page</span>
    </div>
  </form>
</nav>

{{< /example >}}

## Input field and button

This example can be used to introduce the page number inside the input field and navigate by clicking on a button.

{{< example class="flex flex-col space-y-6 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <form class="mx-auto flex items-center space-x-3">
    <div class="flex items-center space-x-2">
        <label for="visitors" class="text-sm font-medium text-heading shrink-0">Go to</label>
        <input type="text" id="visitors" class="bg-neutral-secondary-medium w-10 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="99" />
        <span class="text-sm font-medium text-heading">page</span>
    </div>
    <button type="submit" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Go</button>
  </form>
</nav>

{{< /example >}}

## Select input and buttons

This example can be used to select the number of pages and navigate using the left and right arrows.

{{< example class="flex flex-col space-y-6 py-8 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <form class="mx-auto flex items-center space-x-3">
    <label for="countries" class="sr-only">Select an option</label>
    <select id="countries" class="block w-16 px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm leading-4 rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
      <option selected>03</option>
      <option value="4">04</option>
      <option value="5">05</option>
      <option value="6">06</option>
      <option value="7">07</option>
      <option value="8">08</option>
      <option value="9">09</option>
      <option value="10">10</option>
    </select>
    <input type="text" id="visitors" class="bg-disabled w-28 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block px-2.5 py-2 shadow-xs placeholder:text-fg-disabled" placeholder="of 99 pages" disabled/>
    <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
      <button data-tooltip-target="tooltip-previous" type="button" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-s-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
      </button>
      <div id="tooltip-previous" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
        Previous
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button data-tooltip-target="tooltip-next" type="button" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-e-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
      </button>
      <div id="tooltip-next" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
        Next
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </form>
</nav>

{{< /example >}}

## Single pagination

This example can be used to show an interval of items per page and navigate using the left and right arrows.

{{< example class="flex flex-col space-y-6 py-8 items-center" github="components/pagination.md" show_dark=true >}}

<nav aria-label="Page navigation example">
  <div class="inline-flex rounded-base shadow-xs -space-x-px" role="group">
    <button data-tooltip-target="tooltip-previous" type="button" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-s-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
    </button>
    <div id="tooltip-previous" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Previous
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <button type="button" class="inline-flex shrink-0 text-sm items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading leading-5 px-3 h-9 focus:outline-none">
      1 of 99
    </button>
    <button data-tooltip-target="tooltip-next" type="button" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-e-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
    </button>
    <div id="tooltip-next" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Next
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</nav>

{{< /example >}}
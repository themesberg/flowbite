---
layout: docs
title: Tailwind CSS Accordion - Flowbite
description: Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options
group: components
toc: true
requires_js: true

previous: RTL (Right-To-Left)
previousLink: customize/rtl/
next: Alerts
nextLink: components/alerts/
---

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the "Frequently Asked Questions" section of a website or page when you can show questions and answers for each child element.

There are two main options to initialize the accordion component:

- `data-accordion="collapse"` show only one active child element
- `data-accordion="open"` keep multiple elements open

Don't forget to set the `data-accordion-target="{selector}"` data attribute to the header element where the value is the id or class of the accordion body element and the `aria-expanded="{true|false}"` attribute to mark the active or inactive state of the accordion.

## Default accordion

Use the `data-accordion="collapse"` to collapse every other child element when expanding a single one.

{{< example github="components/accordion.md" show_dark=true >}}
<div id="accordion-collapse" data-accordion="collapse" class="rounded-base border border-default overflow-hidden shadow-xs">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-body">Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
      <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-body">Learn more about these technologies:</p>
      <ul class="ps-5 text-body list-disc">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Separated cards

Use this example of an accordion with space delimitation between the accordion items.

{{< example github="components/accordion.md" show_dark=true >}}
<div id="accordion-card" data-accordion="collapse">
  <h2 id="accordion-card-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-1" aria-expanded="true" aria-controls="accordion-card-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-1" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-1">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-card-heading-2" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-2" aria-expanded="false" aria-controls="accordion-card-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-2" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-2">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-body">Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-card-heading-3" class="mt-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-base shadow-xs border border-default hover:text-heading hover:bg-neutral-secondary-medium gap-3 [&[aria-expanded='true']]:rounded-b-none [&[aria-expanded='true']]:shadow-none" data-accordion-target="#accordion-card-body-3" aria-expanded="false" aria-controls="accordion-card-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-card-body-3" class="hidden border border-t-0 border-default rounded-b-base shadow-xs" aria-labelledby="accordion-card-heading-3">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-body">Learn more about these technologies:</p>
      <ul class="ps-5 text-body list-disc">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Always open

Use the `data-accordion="open"` option to keep previously opened accordion elements unchanged.

{{< example github="components/accordion.md" show_dark=true >}}
<div id="accordion-open" data-accordion="open" class="rounded-base border border-default overflow-hidden shadow-xs">
  <h2 id="accordion-open-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>What is Flowbite?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-open-heading-1">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
      <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-open-heading-2">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-body">Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
      <span class="flex items-center"><svg class="w-5 h-5 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg> What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
    <div class="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
      <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-body">Learn more about these technologies:</p>
      <ul class="ps-5 text-body list-disc">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Color options

Use the `data-active-classes` and `data-inactive-classes` to set the active and inactive classes for the header element whenever the accordion is expanded by applying as many classes as you want, but make sure to separate them with a space. If the data attribute is not set or empty, it will apply the default classes.

Here's an example where we apply the blue colors instead of gray:

{{< example github="components/accordion.md" show_dark=true >}}
<div id="accordion-color" data-accordion="collapse" class="rounded-base border border-default overflow-hidden shadow-xs">
  <h2 id="accordion-color-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-fg-brand hover:bg-brand-softer gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-color-body-1" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-color-heading-1">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-color-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-fg-brand hover:bg-brand-softer gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-color-body-2" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-color-heading-2">
    <div class="p-4 md:p-5">
      <p class="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-body">Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-color-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-fg-brand hover:bg-brand-softer gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
    <div class="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
      <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-body">Learn more about these technologies:</p>
      <ul class="ps-5 text-body list-disc">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Flush accordion

Use this example to remove the background color and rounded borders from the accordion component.

{{< example github="components/accordion.md" show_dark=true >}}
<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-neutral-primary text-heading" data-inactive-classes="text-body">
  <h2 id="accordion-flush-heading-1">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
    <div class="py-5 border-b border-default text-body">
      <p class="mb-2">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p>Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-2">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
    <div class="py-5 border-b border-default text-body">
      <p class="mb-2">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p>Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-3">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
    <div class="py-5 text-body border-b border-default">
      <p class="mb-2">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2">Learn more about these technologies:</p>
      <ul class="ps-5 list-disc">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Arrow style

Use the `data-accordion-icon` data attribute to optionally set an element to rotate 180 degrees when the accordion element is expanded. If the data attribute is not set, then it will not rotate.

{{< example github="components/accordion.md" show_dark=true >}}
<div id="accordion-arrow" data-accordion="collapse" data-active-classes="bg-neutral-primary text-heading" data-inactive-classes="text-body">
  <h2 id="accordion-arrow-heading-1">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3" data-accordion-target="#accordion-arrow-body-1" aria-expanded="true" aria-controls="accordion-arrow-body-1">
      <span>Accordion without an arrow</span>
    </button>
  </h2>
  <div id="accordion-arrow-body-1" class="hidden" aria-labelledby="accordion-arrow-heading-1">
    <div class="py-5 border-b border-default text-body">
      <p class="mb-2">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p>Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-arrow-heading-2">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3" data-accordion-target="#accordion-arrow-body-2" aria-expanded="false" aria-controls="accordion-arrow-body-2">
      <span>Accordion with another icon</span>
      <svg class="w-5 h-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-arrow-body-2" class="hidden" aria-labelledby="accordion-arrow-heading-2">
    <div class="py-5 border-b border-default text-body">
      <p class="mb-2">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p>Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-arrow-heading-3">
    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3" data-accordion-target="#accordion-arrow-body-3" aria-expanded="false" aria-controls="accordion-arrow-body-3">
      <span>Accordion without arrow rotation</span>
      <svg class="w-5 h-5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
    </button>
  </h2>
  <div id="accordion-arrow-body-3" class="hidden" aria-labelledby="accordion-arrow-heading-3">
    <div class="py-5 text-body border-b border-default">
      <p class="mb-2">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2">Learn more about these technologies:</p>
      <ul class="ps-5 list-disc">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## Nesting accordions

Accordions can be nested. All of the mentioned options are supported.

To enable nested accordions you need to wrap the nested accordion in an element with the `data-accordion` attribute and don't accidentally initialize an accordion with nested accordions' items (e.g. by using `$accordionBodyEl.querySelectorAll`), when using <a href="#javascript-behaviour">custom JavaScript</a>.

{{< example github="components/accordion.md" show_dark=true >}}

<div id="accordion-collapse-2" data-accordion="collapse" class="rounded-base border border-default overflow-hidden shadow-xs">
  <h2 id="accordion-collapse-heading-6">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="true" aria-controls="accordion-collapse-body-6">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-6" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default p-4 md:p-5" aria-labelledby="accordion-collapse-heading-6">
      <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-body mb-4">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    <!-- Nested accordion -->
    <div id="accordion-nested" data-accordion="collapse" class="rounded-base border border-default overflow-hidden shadow-xs">
      <h2 id="accordion-nested-heading-1">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-nested-body-1" aria-expanded="true" aria-controls="accordion-nested-body-1">
          <span>What is Flowbite?</span>
          <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
        </button>
      </h2>
      <div id="accordion-nested-body-1" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-nested-heading-1">
        <div class="p-4 md:p-5">
          <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
          <p class="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
      </div>
      <h2 id="accordion-nested-heading-2">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 bg-neutral-primary-soft hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-nested-body-2" aria-expanded="false" aria-controls="accordion-nested-body-2">
          <span>Is there a Figma file available?</span>
          <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
        </button>
      </h2>
      <div id="accordion-nested-body-2" class="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-nested-heading-2">
        <div class="p-4 md:p-5">
          <p class="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
          <p class="text-body">Check out the <a href="https://flowbite.com/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
        </div>
      </div>
      <h2 id="accordion-nested-heading-3">
        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body bg-neutral-primary-soft hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-nested-body-3" aria-expanded="false" aria-controls="accordion-nested-body-3">
          <span>What are the differences between Flowbite and Tailwind UI?</span>
          <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
        </button>
      </h2>
      <div id="accordion-nested-body-3" class="hidden" aria-labelledby="accordion-nested-heading-3">
        <div class="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
          <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
          <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
          <p class="mb-2 text-body">Learn more about these technologies:</p>
          <ul class="text-body ps-5 list-disc">
            <li><a href="https://flowbite.com/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
            <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- End of  Nested accordion -->
  </div>
  <h2 id="accordion-collapse-heading-7">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body bg-neutral-primary-soft hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-7">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-7" class="hidden" aria-labelledby="accordion-collapse-heading-7">
    <div class="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
      <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-body">Learn more about these technologies:</p>
      <ul class="text-body list-disc ps-5">
        <li><a href="https://flowbite.com/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## JavaScript behaviour

Use the **Accordion** object from Flowbite to create a collection of vertically collapsing heading and content elements using object parameters, options, methods, and callback functions directly from JavaScript.

### Object parameters

Create a new Accordion object by passing an array of accordion items and an optional options object to customize the styles and add callback functions.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm rtl:text-right text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Parameter
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Required
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">accordionEl</code>
                </td>
                <td class="px-6 py-4">
                    Element
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    The parent HTML element of the accordion component.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">items</code>
                </td>
                <td class="px-6 py-4">
                    Array
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Array of accordion items objects including the unique identifier, heading element, content element, and the active state.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">options</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                    Object of options that you can set to customize the style of the accordion items and set callback functions.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">instanceOptions</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                   Object of options that allows you to set a custom ID for the instance that is being added to the <a href="https://flowbite.com/docs/getting-started/javascript/#instance-options" class="underline hover:no-underline">Instance Manager</a> and whether to override or not an existing instance.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Options

Use the following options as the second parameter for the Accordion object to customize the behaviour, styles, and to set callback functions.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm rtl:text-right text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Option
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
              <tr class="border-b bg-neutral-primary border-default">
                  <td class="px-6 py-4 font-medium">
                      <code class="text-fg-brand">alwaysOpen</code>
                  </td>
                  <td class="px-6 py-4">
                      Boolean
                  </td>
                  <td class="px-6 py-4">
                      If set to true then multiple accordion elements can be open at the same time. By default it's false.
                  </td>
              </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">activeClasses</code>
                </td>
                <td class="px-6 py-4">
                    Array
                </td>
                <td class="px-6 py-4">
                    Set an array of Tailwind CSS class names to apply for the active accordion heading element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">inactiveClasses</code>
                </td>
                <td class="px-6 py-4">
                    Array
                </td>
                <td class="px-6 py-4">
                    Apply an array of Tailwind CSS class names to apply for the inactive accordion heading elements.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onOpen</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when a new accordion item has been opened.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onClose</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when a new accordion item has been closed.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the object methods on the Accordion object to programmatically open, close, or toggle the visibility of a given accordion item.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm rtl:text-right text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Method
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">toggle(id)</code>
                </td>
                <td class="px-6 py-4">
                    Use this function to toggle an accordion item based on its current state.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">open(id)</code>
                </td>
                <td class="px-6 py-4">
                    Use this function to open an accordion item based on the id.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">close(id)</code>
                </td>
                <td class="px-6 py-4">
                    Use this function to close an accordion item based on the id.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnOpen(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a callback function when an accordion item has been opened.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnClose(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a callback function when an accordion item has been closed.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnToggle(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a callback function when an accordion item has been toggled.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Learn more about using the Accordion object from Flowbite in this example in JavaScript.

To get started you need to create an array of accordion item objects including a unique identifier (it can be a number as well), a trigger element (eg. a button), a content element (the content body), and the active state.

Additionally, you can also set some options to change the default behaviour of the accordion, customize the styles, and set callback functions.

{{< code lang="javascript" file="accordion.js" icon="file" >}}
const accordionElement = document.getElementById('accordion-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    }
];

// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-body',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

// instance options object
const instanceOptions = {
    id: 'accordion-example',
    override: true
};
{{< /code >}}

Create a new Accordion object using the options set above as the parameters.

{{< code lang="javascript" file="accordion.js" icon="file" >}}
import { Accordion } from 'flowbite';

/*
* accordionEl: HTML element (required)
* accordionItems: array of accordion item objects (required)
* options (optional)
* instanceOptions (optional)
*/
const accordion = new Accordion(accordionElement, accordionItems, options, instanceOptions);
{{< /code >}}

Now you can access the object methods to programmatically open, close, and toggle the accordion items based on the unique identifier.

{{< code lang="javascript" file="accordion.js" icon="file" >}}
// open accordion item based on id
accordion.open('accordion-example-heading-2');

// close accordion item based on id
accordion.close('accordion-example-heading-2');

// toggle visibility of item based on id
accordion.toggle('accordion-example-heading-3');
{{< /code >}}

### HTML Markup

Use the following HTML markup example for the JavaScript script above.

{{< code lang="html" file="accordion.html" icon="file" >}}
<div id="accordion-example">
  <h2 id="accordion-example-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-b-0 border-default rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="true" aria-controls="accordion-example-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-example-body-1" class="hidden" aria-labelledby="accordion-example-heading-1">
    <div class="p-5 border border-b-0 border-default dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-body">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p class="text-body">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-fg-brand hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-example-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-b-0 border-default focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" aria-controls="accordion-example-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-example-body-2" class="hidden" aria-labelledby="accordion-example-heading-2">
    <div class="p-5 border border-b-0 border-default dark:border-gray-700">
      <p class="mb-2 text-body">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p class="text-body">Check out the <a href="{{< param homepage >}}/figma/" class="text-fg-brand hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-example-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-default focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" aria-controls="accordion-example-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-example-body-3" class="hidden" aria-labelledby="accordion-example-heading-3">
    <div class="p-5 border border-t-0 border-default dark:border-gray-700">
      <p class="mb-2 text-body">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p class="mb-2 text-body">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p class="mb-2 text-body">Learn more about these technologies:</p>
      <ul class="ps-5 text-body list-disc dark:text-gray-400">
        <li><a href="{{< param homepage >}}/pro/" class="text-fg-brand hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-fg-brand hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Accordion object, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="accordion.ts" icon="file" >}}
import { Accordion } from "flowbite";
import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";
import type { InstanceOptions } from 'flowbite';

const accordionEl = document.querySelector('#accordion-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems: AccordionItem[] = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    }
];

// options with default values
const options: AccordionOptions = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-body',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

// instance options object
const instanceOptions: InstanceOptions = {
    id: 'accordion-example',
    override: true
};

/*
* accordionEl: HTML element (required)
* accordionItems: array of accordion item objects (required)
* options (optional)
* instanceOptions (optional)
*/
const accordion: AccordionInterface = new Accordion(accordionEl, accordionItems, options, instanceOptions);

// open accordion item based on id
accordion.open('accordion-example-heading-2');

// destroy accordion
accordion.destroy();

// re-initialize accordion
accordion.init();
{{< /code >}}
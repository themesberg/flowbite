---
layout: home
title: Tailwind CSS Accordion - Flowbite
description: Use the accordion component to show hidden information based on the collapse and expand state of the child elements
group: components
toc: true
requires_js: true

previous: Optimization
previousLink: customize/optimization/
next: Badges
nextLink: components/badge/
---

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the "Frequently Asked Questions" section of a website or page when you can show questions and answers for each child element.

There are two main options to initialize the accordion component:

- `data-accordion="collapse"` show only one active child element
- `data-accordion="open"` keep multiple elements open

Don't forget to set the `data-accordion-target="{selector}"` data attribute to the header element where the value is the id or class of the accordion body element and the `aria-expanded="{true|false}"` attribute to mark the active or inactive state of the accordion.

## Default accordion

Use the `data-accordion="collapse"` to collapse every other child element when expanding a single one. 

{{< example class="dark:bg-gray-800" github="components/accordion.md" >}}
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex justify-between p-5 w-full font-medium text-left border border-gray-200 border-b-0 text-gray-900 bg-gray-100 hover:bg-gray-100 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Can I use Flowbite in open-source projects?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-gray-200 border-b-0">
      <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
      <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex justify-between p-5 w-full font-medium border border-gray-200 border-b-0 text-left text-gray-900 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>How do you achieve the "blurry" effect?</span>
      <svg data-accordion-icon class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-gray-200 border-b-0">
      <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
      <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex border border-gray-200 justify-between p-5 w-full font-medium text-left text-gray-900 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What about browser support?</span>
      <svg data-accordion-icon class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-gray-200 border-t-0">
      <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
      <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
    </div>
  </div>
</div>
{{< /example >}}

## Always open

Use the `data-accordion="open"` option to keep previously opened accordion elements unchanged.

{{< example class="dark:bg-gray-800" github="components/accordion.md" >}}
<div id="accordion-open" data-accordion="open">
  <h2 id="accordion-open-heading-1">
    <button type="button" class="flex justify-between p-5 w-full font-medium text-left text-gray-900 bg-gray-100 rounded-t-xl border border-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span>Can I use Flowbite in open-source projects?</span>
      <svg data-accordion-icon class="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1">
    <div class="p-5 border border-gray-200 border-y-0">
      <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
      <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-2">
    <button type="button" class="flex justify-between p-5 w-full font-medium text-left text-gray-900 border border-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
      <span>How do you achieve the "blurry" effect?</span>
      <svg data-accordion-icon class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
    <div class="p-5 border border-gray-200 border-y-0">
      <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
      <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-3">
    <button type="button" class="flex justify-between p-5 w-full font-medium text-left text-gray-900 border border-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
      <span>What about browser support?</span>
      <svg data-accordion-icon class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
    <div class="p-5 border border-t-0 border-gray-200">
      <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
      <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
    </div>
  </div>
</div>
{{< /example >}}

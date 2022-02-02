---
layout: home
title: Tailwind CSS Accordion - Flowbite
description: Show contextual information to your users using alert elements based on Tailwind CSS
group: components
toc: true

previous: Optimization
previousLink: customize/optimization/
next: Badges
nextLink: components/badge/
---

## Default accordion

{{< example class="dark:bg-gray-800" github="components/alerts.md" >}}
<div id="accordion">
  <div>
    <h2 id="accordion-1">
      <button type="button" class="flex justify-between p-5 w-full font-medium text-left text-gray-900 bg-gray-50 rounded-t-xl border border-gray-200 hover:bg-gray-100" data-bs-toggle="collapse" data-bs-target="#accordion-1" aria-expanded="true" aria-controls="accordion-1">
        <span>Can I use Flowbite in open-source projects?</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </h2>
    <div id="accordion-1" class="accordion-collapse collapse show" aria-labelledby="accordion-1" data-bs-parent="#accordionExample">
      <div class="p-5 border border-gray-200 border-y-0">
        <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
        <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
      </div>
    </div>
    <h2 id="accordion-2">
      <button type="button" class="flex justify-between p-5 w-full font-medium text-left text-gray-900 border border-gray-200 hover:bg-gray-50" data-bs-toggle="collapse" data-bs-target="#accordion-1" aria-expanded="true" aria-controls="accordion-1">
        <span>How do you achieve the "blurry" effect?</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </h2>
    <div id="accordion-2" class="hidden accordion-collapse collapse show" aria-labelledby="accordion-1" data-bs-parent="#accordionExample">
      <div class="p-5 border border-gray-200 border-y-0">
        <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
        <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
      </div>
    </div>
    <h2 id="accordion-2">
      <button type="button" class="flex justify-between p-5 w-full font-medium text-left text-gray-900 border border-gray-200 hover:bg-gray-50" data-bs-toggle="collapse" data-bs-target="#accordion-1" aria-expanded="true" aria-controls="accordion-1">
        <span>What about browser support?</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </h2>
    <div id="accordion-2" class="hidden accordion-collapse collapse show" aria-labelledby="accordion-1" data-bs-parent="#accordionExample">
      <div class="p-5 border border-t-0 border-gray-200">
        <p class="mb-2 text-gray-500">Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.</p>
        <p class="text-gray-500">With that being said, feel free to use this design kit for your open-source projects.</p>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

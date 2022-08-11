---
layout: home
title: Tailwind CSS Paragraphs - Flowbite
description: Use the typography plugin from Flowbite to apply styles to all inline elements like headings, paragraphs, lists, and images using a single format class
group: components
toc: true

previous: List group
previousLink: components/list-group/
next: Modals
nextLink: components/modal/
---

The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants coded with the utility classes from Tailwind CSS and with support for dark mode.

Make sure that you have included Flowbite as a plugin inside your Tailwind CSS project to apply all the necessary styles for the checkbox component.

## Default example

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}


## Leading paragraph

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 text-lg font-light text-gray-500 md:text-xl dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work and deploy.</p>
<p class="font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## First letter

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Paragraph link

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. <a href="#" class="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Link issues across Jira</a> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph bold

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. <strong class="font-semibold text-gray-900 dark:text-white">Link issues across Jira</strong> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph underline

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. <u class="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph italic

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. <em class="font-italic">Link issues across Jira</em> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph popover

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" class="pt-60" github="forms/checkbox.md" show_dark=true >}}
<p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="#" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>
<div id="popover-image" role="tooltip" class="inline-block absolute invisible z-10 w-96 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
    <div class="grid grid-cols-5">
        <div class="col-span-3 p-3">
            <div class="space-y-2">
                <h3 class="font-semibold text-gray-900 dark:text-white">About Italy</h3>
                <p>Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
                <a href="#" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
            </div>
        </div>
        <img src="/docs/images/popovers/italy.png" class="col-span-2 h-full" alt="Italy map" />
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Layout

### One column

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

### Two columns even

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
</div>
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

### Three columns even

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
</div>
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

### Two columns alternative

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="col-span-2">
        <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
    </div>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
</div>
<p class="mb-3 font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Alignment

### Left

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-left text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

### Center

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-center text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

### Right

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-3 font-light text-right text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}
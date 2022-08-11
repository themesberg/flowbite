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

## Default

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-2 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}


## With leading text

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-2 text-lg font-light text-gray-500 md:text-xl dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work and deploy.</p>
<p class="font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## With popover

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="#" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" data-popover-target="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>
<div id="popover-image" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-96 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
    <div class="grid grid-cols-5">
        <div class="col-span-3 p-3">
            <div class="space-y-2">
                <h3 class="font-semibold text-gray-900 dark:text-white">About Italy</h3>
                <p>Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
                <a href="#" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700">Read more <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
            </div>
        </div>
        <img src="/docs/images/popovers/italy.png" class="h-full col-span-2" alt="Italy map" />
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## With link

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<p class="mb-2 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<a href="#" class="inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline">
Read more
<svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
</a>
{{< /example >}}

## Split with image & heading

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<section class="bg-white dark:bg-gray-900">
    <div class="items-center gap-16 px-4 py-8 mx-auto md:grid md:grid-cols-2">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple.</p>
        </div>
        <div>
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
        </div>
    </div>
</section>
{{< /example >}}

## As a feature

Use this default example of a checbkox element in a checked and unchecked state.

{{< example id="default-checkbox-example" github="forms/checkbox.md" show_dark=true >}}
<div class="space-y-8 md:grid sm:grid-cols-2 md:gap-12 md:space-y-0">
    <div>
        <div class="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-full md:h-12 md:w-12 dark:bg-blue-900">
            <svg class="w-5 h-5 text-blue-600 md:w-6 md:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
        <p class="text-gray-500 dark:text-gray-400">Create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
    </div>
    <div>
        <div class="flex items-center justify-center w-10 h-10 mb-4 bg-blue-100 rounded-full md:h-12 md:w-12 dark:bg-blue-900">
            <svg class="w-5 h-5 text-blue-600 md:w-6 md:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>
        <p class="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
    </div>
</div>
{{< /example >}}
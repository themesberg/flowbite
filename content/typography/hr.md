---
layout: home
title: Tailwind CSS Horizontal Line (HR) - Flowbite
description: Create a horizontal line using the HR tag to separate content such as paragraphs, blockquotes, and other elements using the utility classes from Tailwind CSS
group: typography
toc: true

previous: Text
previousLink: typography/text/
next: Datepicker
nextLink: plugins/datepicker/
---

The HR component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

## Default HR

Use this example to separate text content with a `<hr>` horizontal line.

{{< example id="default-hr-example" github="typography/hr.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
<p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Trimmed

Use this example to show a shorter version of the horizontal line.

{{< example id="hr-trimmed-example" github="typography/hr.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
<p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Icon HR

This example can be used to set a custom SVG icon in the middle of the HR element.

{{< example id="hr-icon-example" class="text-center" github="typography/hr.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
</div>
<p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
{{< /example >}}

## HR with text

Use this example to add a text in the middle of the HR component.

{{< example id="hr-text-example" class="text-center" github="typography/hr.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
</div>
<p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
{{< /example >}}

## HR shape

This example can be used to separate content with a HR tag as a shape instead of a line.

{{< example id="hr-shape-example" github="typography/hr.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<hr class="w-8 h-8 mx-auto my-8 bg-gray-200 border-0 rounded md:my-12 dark:bg-gray-700">
<blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

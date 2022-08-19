---
layout: home
title: Tailwind CSS Horizontal Line (HR) - Flowbite
description: Use the typography plugin from Flowbite to apply styles to all inline elements like headings, paragraphs, lists, and images using a single format class
group: typography
toc: true

previous: Text
previousLink: typography/text/
next: Datepicker
nextLink: plugins/datepicker/
---

## Default

Use this example of a paragraph element to use inside article content or a landing page.

{{< example id="default-paragraph-example" github="typography/paragraphs.md" show_dark=true >}}
<p class="text-gray-500 md:text-lg dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700">
<p class="text-gray-500 md:text-lg dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Centered

Use this example of a paragraph element to use inside article content or a landing page.

{{< example id="default-paragraph-example" class="text-center" github="typography/paragraphs.md" show_dark=true >}}
<blockquote>
    <p class="text-xl italic font-semibold text-gray-900 dark:text-white">"It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
</blockquote>
<hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700">
<blockquote>
    <p class="text-xl italic font-semibold text-gray-900 dark:text-white">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
</blockquote>
{{< /example >}}

## Dot

Use this example of a paragraph element to use inside article content or a landing page.

{{< example id="default-paragraph-example" github="typography/paragraphs.md" show_dark=true >}}
<figure class="mx-auto max-w-screen-md text-center">
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
    </figcaption>
</figure>
<hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700">
<figure class="mx-auto max-w-screen-md text-center">
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Bergside</cite>
        </div>
    </figcaption>
</figure>
{{< /example >}}

## Split with icon

Use this example of a paragraph element to use inside article content or a landing page.

{{< example id="default-paragraph-example" class="text-center" github="typography/paragraphs.md" show_dark=true >}}
<p class="text-gray-500 md:text-lg dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="inline-flex justify-center items-center py-6 w-full">
    <hr class="w-32 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700">
    <svg class="mx-4 w-5 h-5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"/></svg>
    <hr class="w-32 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700">
</div>
<p class="text-gray-500 md:text-lg dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
{{< /example >}}

## Split with text

Use this example of a paragraph element to use inside article content or a landing page.

{{< example id="default-paragraph-example" class="text-center" github="typography/paragraphs.md" show_dark=true >}}
<p class="text-gray-500 md:text-lg dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="inline-flex justify-center items-center w-full">
    <hr class="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700">
    <span class="absolute left-1/2 py-3 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white">or</span>
</div>
<p class="text-gray-500 md:text-lg dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
{{< /example >}}
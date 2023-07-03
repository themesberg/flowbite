---
layout: home
title: Tailwind CSS Blockquote - Flowbite
description: The blockquote component can be used to quote text content from an external source that can be used for testimonials, reviews, and quotes inside an article
group: typography
toc: true

previous: Paragraphs
previousLink: typography/paragraphs/
next: Images
nextLink: typography/images/
---

Get started with a collection of blockquote components when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

The main `<blockquote>` HTML tag can be used together with the `<cite>` tag or attribute to also mention the source of the quote content.

## Default blockquote

Use this example to quote an external source inside a blockquote element.

{{< example id="default-blockquote-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

## Solid background

This example can be used as an alternative style to the default one by applying a solid background color.

{{< example id="blockquote-background-example" github="typography/blockquote.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">
Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.
</p>
<blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
<p class="text-gray-500 dark:text-gray-400">
First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.
</p>
{{< /example >}}

## Blockquote icon

Use this example to show an icon above the blockquote text content.

{{< example id="blockquote-icon-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

## Paragraph context

Use this example to show a blockquote component between multiple paragraph elements.

{{< example id="blockquote-paragraph-example" github="typography/blockquote.md" show_dark=true >}}
<p class="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
    <p class="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <blockquote class="mb-3">
        <p class="text-xl italic font-semibold text-gray-900 dark:text-white">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
    </blockquote>
</div>
<p class="mb-3 text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## User testimonial

This example can be used for user testimonials by mentioning the author and occupation of the author.

{{< example id="blockquote-testimonial-example" github="typography/blockquote.md" show_dark=true >}}
<figure class="max-w-screen-md mx-auto text-center">
    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
        </div>
    </figcaption>
</figure>
{{< /example >}}

## User Review

Use this example to show a user review with rating stars and the name and occupation of the author.

{{< example id="blockquote-review-example" github="typography/blockquote.md" show_dark=true >}}
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <svg class="w-5 h-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <blockquote>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    <figcaption class="flex items-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture">
        <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
        </div>
    </figcaption>
</figure>
{{< /example >}}

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

### Left

The default alignment of the blockquote text content is the left side of the document.

{{< example id="default-blockquote-left-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-left text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Center

Use the `text-center` class from Tailwind CSS to align the text content inside the blockquote to the center.

{{< example id="default-blockquote-center-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Right

Use the `text-right` utility class from Tailwind CSS to align the blockquote text content to the right side of the page.

{{< example id="default-blockquote-right-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-right text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

## Sizes

Choose from one of the multiple sizes for the default blockquote component based on the surrounding elements and sizes.

### Small

Use the `text-lg` font size class from Tailwind CSS to apply the small size for the blockquote component.

{{< example id="default-blockquote-small-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-lg italic font-semibold text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Medium

Use the `text-xl` utility class to set the default size for the blockquote element.

{{< example id="default-blockquote-medium-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Large

The `text-2xl` class can be used to set a large size for the blockquote component.

{{< example id="default-blockquote-large-example" github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-2xl italic font-semibold text-gray-900 dark:text-white">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}
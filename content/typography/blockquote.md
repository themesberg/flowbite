---
layout: docs
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

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold tracking-tight text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned pages starting from login screen to complex dashboard. Best choice for your SaaS application."</p>
</blockquote>
{{< /example >}}

## Solid background

This example can be used as an alternative style to the default one by applying a solid background color.

{{< example github="typography/blockquote.md" show_dark=true >}}
<p class="text-body">
Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.
</p>
<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
    <p class="text-xl italic font-medium leading-relaxed text-heading">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
<p class="text-body">
First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.
</p>
{{< /example >}}

## Blockquote icon

Use this example to show an icon above the blockquote text content.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-heading tracking-tight">
    <svg class="w-9 h-9 text-heading mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/></svg>
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

## Paragraph context

Use this example to show a blockquote component between multiple paragraph elements.

{{< example github="typography/blockquote.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
    <p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <blockquote class="mb-3">
        <p class="text-xl italic font-semibold text-heading">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</p>
    </blockquote>
</div>
<p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## User testimonial

This example can be used for user testimonials by mentioning the author and occupation of the author.

{{< example github="typography/blockquote.md" show_dark=true >}}
<figure class="max-w-screen-md mx-auto text-center">
    <svg class="w-11 h-11 text-heading mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/></svg>
    <blockquote>
        <p class="text-2xl italic font-semibold tracking-tight text-heading">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
        <div class="flex items-center divide-x rtl:divide-x-reverse divide-default">
            <cite class="pe-3 font-medium text-heading">Michael Gough</cite>
            <cite class="ps-3 text-sm text-body">CEO at Google</cite>
        </div>
    </figcaption>
</figure>
{{< /example >}}

## User Review

Use this example to show a user review with rating stars and the name and occupation of the author.

{{< example github="typography/blockquote.md" show_dark=true >}}
<figure class="max-w-screen-md">
    <div class="flex items-center space-x-1 mb-4">
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    </div>
    <blockquote>
        <p class="text-2xl font-semibold text-heading tracking-tight">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
    </blockquote>
    <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture">
        <div class="flex items-center divide-x rtl:divide-x-reverse divide-default">
            <cite class="pe-3 font-medium text-heading">Bonnie Green</cite>
            <cite class="ps-3 text-sm text-body">CTO at Flowbite</cite>
        </div>
    </figcaption>
</figure>
{{< /example >}}

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

### Left

The default alignment of the blockquote text content is the left side of the document.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-left text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Center

Use the `text-center` class from Tailwind CSS to align the text content inside the blockquote to the center.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-center text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Right

Use the `text-right` utility class from Tailwind CSS to align the blockquote text content to the right side of the page.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-right text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

## Sizes

Choose from one of the multiple sizes for the default blockquote component based on the surrounding elements and sizes.

### Small

Use the `text-lg` font size class from Tailwind CSS to apply the small size for the blockquote component.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-lg italic font-semibold text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Medium

Use the `text-xl` utility class to set the default size for the blockquote element.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-xl italic font-semibold text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}

### Large

The `text-2xl` class can be used to set a large size for the blockquote component.

{{< example github="typography/blockquote.md" show_dark=true >}}
<blockquote class="text-2xl italic font-semibold text-heading">
    <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</blockquote>
{{< /example >}}
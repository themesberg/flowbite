---
layout: docs
title: Tailwind CSS Paragraphs - Flowbite
description: Use the paragraph component to create multiple blocks of text separated by blank lines and write content based on multiple layouts and styles based on Tailwind CSS
group: typography
toc: true

previous: Headings
previousLink: typography/headings/
next: Blockquote
nextLink: typography/blockquote/
---

The paragraph element is one of the most commonly used HTML tags on a document page because it is used to write longer blocks of text separated by a blank line and can massively improve the on-page SEO of the page when used correctly.

Get started with a collection of paragraph components based on multiple styles, layouts, colors and sizes to use for your website built with the utility classes from Tailwind CSS.

## Default paragraph

Use this example of a paragraph element to use inside article content or a landing page.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}


## Leading paragraph

The leading text can be used as the first paragraph inside an article content page.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-lg text-body md:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work and deploy.</p>
<p class="text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## First letter

Use this example to highlight the first letter of the paragraph, often used in e-books and PDF documents.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-heading first-letter:me-3 first-letter:float-start">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Paragraph link

This example can be used to add a custom styled link element inside the paragraph.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. <a href="#" class="font-medium text-fg-brand underline hover:no-underline">Link issues across Jira</a> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph bold

Use this example to highlight a piece of text inside the paragraph by using a bolder font weight.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. <strong class="font-semibold text-heading">Link issues across Jira</strong> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph underline

This example can be used to underline a certain part of the text inside the paragraph.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. <u class="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph italic

Use this example to make the font style of the text inside the paragraph italic.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. <em class="font-italic">Link issues across Jira</em> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

## Paragraph popover

Get started with this example to show a popover with extra information inside paragraph elements.

{{< example class="pt-60" github="typography/paragraphs.md" show_dark=true >}}
<p class="text-body">Due to its central geographic location in Southern Europe, <a href="#" class="text-fg-brand font-medium underline hover:no-underline" data-popover-target="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p>
<div data-popover id="popover-image" role="tooltip" class="absolute z-10 p-3 invisible inline-block text-sm text-body transition-opacity duration-300 bg-neutral-primary-soft border border-default rounded-lg shadow-xs opacity-0 w-96">
    <div class="grid grid-cols-5">
        <div class="col-span-3 pe-3">
            <div class="space-y-2">
                <h3 class="font-semibold text-heading">About Italy</h3>
                <p class="mb-2">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also part of Western Europe.</p>
                <p>A unitary parliamentary republic with Rome as its capital and largest city.</p>
                <a href="#" class="flex items-center font-medium text-fg-brand hover:underline">
                    Read more 
                    <svg class="w-4 h-4 ms-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
        </div>
        <img src="/docs/images/popovers/italy.png" class="h-full col-span-2 rounded" alt="Italy map" />
    </div>
    <div data-popper-arrow></div>
</div>

{{< /example >}}

## Layout

Get started with examples of layouts for the paragraph component to separate content into multiple rows and columns.

### One column

Use this example to show multiple paragraphs on a single line.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

### Two columns even

Use this example to separate paragraphs into two columns for better readability.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
</div>
<p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

### Three columns even

This example can be used to separate paragraphs into three separate columns.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
    <p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
    <p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
</div>
<p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

### Two columns uneven

Use this example to separate paragraphs into two uneven columns.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
    <div class="col-span-2">
        <p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
    </div>
    <p class="mb-3 text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
</div>
<p class="mb-3 text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
{{< /example >}}

## Text alignment

Align the paragraph component to the left (default), center or right side of the document page using the `text-{left|center|right}` utility class from Tailwind CSS.

### Left

The default alignment of the paragraph is to the left side and you can use the `text-left` class to align it manually.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-left rtl:text-right text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

### Center

Use the `text-center` class to align the paragraph text to the center.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-center text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}

### Right

Use the `text-right` utility class to align the paragraph text the right side of the page.

{{< example github="typography/paragraphs.md" show_dark=true >}}
<p class="mb-3 text-right rtl:text-left text-body">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
{{< /example >}}
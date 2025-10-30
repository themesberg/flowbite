---
layout: docs
title: Tailwind CSS Headings - Flowbite
description: The heading component defines six levels of title elements from H1 to H6 that are used as titles and subtitles on a web page based on multiple styles and layouts
group: typography
toc: true

previous: Floating label
previousLink: forms/floating-label/
next: Paragraphs
nextLink: typography/paragraphs/
---

Get started with the heading component to define titles and subtitles on a web page and also improve the on-page SEO metrics of your website by targeting high-traffic keywords on Google.

At least one unique H1 tag should be available for each page on your website with the next tags starting from H2 to H6 for each section. Choose from a collection of custom heading components based on multiple styles and layouts built with the utility classes from Tailwind CSS.

## Default heading

Use this example of a H1 heading in the context of a paragraph and CTA button for landing pages.

{{< example class="text-center py-16" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
<p class="mb-6 text-lg font-normal text-body lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Learn more</a>
{{< /example >}}

## Second-level heading

Use this example of a second-level H2 heading as the main subtitle for each section of your web page.

{{< example class="py-16" github="typography/headings.md" show_dark=true >}}
<h2 class="text-4xl font-bold">Payments tool for companies</h2>
<p class="my-4 text-lg text-body">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
<p class="mb-4 text-lg font-normal text-body">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
<a href="#" class="inline-flex items-center text-lg font-medium text-fg-brand hover:underline">
  Read more
  <svg class="w-5 h-5 ms-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
</a>
{{< /example >}}

## Highlighted heading

Use this example to highlight a certain portion of the heading text with a different color.

{{< example class="py-16" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Get back to growth with <span class="text-fg-brand">the world's #1</span> CRM.</h1>
<p class="text-lg font-normal text-body lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Heading mark

This example can be used to mark one part of the heading text with a solid background for highlighting.

{{< example class="py-16" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Regain <mark class="px-2 pb-0.5 text-white bg-brand rounded-base">control</mark> over your days</h1>
<p class="text-lg font-normal text-body lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Heading gradient

Use this example to highlight a portion of the heading text by using a gradient style.

{{< example class="py-16" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
<p class="text-lg font-normal text-body lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Heading underline

Get started with this example to underline an important part of the heading component using the offset feature from Tailwind CSS.

{{< example class="py-16" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">We invest in the <span class="underline underline-offset-3 decoration-8 decoration-brand">world’s potential</span></h1>
<p class="text-lg font-normal text-body lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Breadcrumb context

Get started with this example to position a breadcrumb component above the H1 heading component.

{{< example class="py-8" github="typography/headings.md" show_dark=true >}}
<nav class="flex mb-2.5" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center space-x-1.5">
        <svg class="w-3.5 h-3.5 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
        <a href="#" class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center space-x-1.5">
        <svg class="w-3.5 h-3.5 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
        <span class="inline-flex items-center text-sm font-medium text-body-subtle">Flowbite</span>
      </div>
    </li>
  </ol>
</nav>
<h2 class="text-3xl font-bold tracking-tight text-heading md:text-4xl">Team management</h2>
{{< /example >}}

## Badge context

Use this example to show a badge component inside the heading text element as a secondary indicator.

{{< example github="typography/headings.md" show_dark=true >}}
<h1 class="text-heading flex items-center text-5xl font-bold tracking-tight">Flowbite <span class="inline-flex ms-3 px-2 py-1 ring-1 ring-inset ring-brand-subtle text-fg-brand-strong text-sm font-medium rounded bg-brand-softer">PRO</span></h1>
{{< /example >}}

## Secondary text

This example can be used to add a secondary text inside the main heading component.

{{< example github="typography/headings.md" show_dark=true >}}
<h1 class="text-5xl font-bold text-heading">Flowbite<small class="ms-2 font-medium text-body">This is secondary text</small></h1>
{{< /example >}}

## Sizes

The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.

### Heading one (H1)

Use the H1 tag as the most important text element to indicate the title of your web page.

{{< example github="typography/headings.md" show_dark=true >}}
<h1 class="text-5xl font-bold text-heading">Heading 1</h1>
{{< /example >}}

### Heading two (H2)

The H2 tag can be used as subtitles of the page's sections.

{{< example github="typography/headings.md" show_dark=true >}}
<h2 class="text-4xl font-bold text-heading">Heading 2</h2>
{{< /example >}}

### Heading three (H3)

Use the H3 tags inside sections that already have a H2 available.

{{< example github="typography/headings.md" show_dark=true >}}
<h3 class="text-3xl font-bold text-heading">Heading 3</h3>
{{< /example >}}

### Heading four (H4)

The H4 can be generally used after H2 and H3 tags are already present and you need a more in-depth hierarchy.

{{< example github="typography/headings.md" show_dark=true >}}
<h4 class="text-2xl font-bold text-heading">Heading 4</h4>
{{< /example >}}

### Heading five (H5)

The H5 tag is most often used in longer articles with other heading already available or in sidebars.

{{< example github="typography/headings.md" show_dark=true >}}
<h5 class="text-xl font-bold text-heading">Heading 5</h5>
{{< /example >}}

### Heading six (H6)

Using the H6 tag is quite rare because it means that you've already used all heading from H1 to H5, but you can still use it if you have a very complex article with lots of headings.

{{< example github="typography/headings.md" show_dark=true >}}
<h6 class="text-lg font-bold text-heading">Heading 6</h6>
{{< /example >}}
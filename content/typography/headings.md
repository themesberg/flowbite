---
layout: home
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

{{< example id="default-heading-example" class="text-center" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
{{< /example >}}

## Second-level heading

Use this example of a second-level H2 heading as the main subtitle for each section of your web page.

{{< example id="second-level-heading-example" github="typography/headings.md" show_dark=true >}}
<h2 class="text-4xl font-extrabold dark:text-white">Payments tool for companies</h2>
<p class="my-4 text-lg text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
<p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
<a href="#" class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
Read more
<svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</a>
{{< /example >}}

## Highlighted heading

Use this example to highlight a certain portion of the heading text with a different color.

{{< example id="highlighted-heading-example" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span class="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Heading mark

This example can be used to mark one part of the heading text with a solid background for highlighting.

{{< example id="heading-mark-example" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Regain <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">control</mark> over your days</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Heading gradient

Use this example to highlight a portion of the heading text by using a gradient style.

{{< example id="heading-gradient-example" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Heading underline

Get started with this example to underline an important part of the heading component using the offset feature from Tailwind CSS.

{{< example id="heading-underline-example" github="typography/headings.md" show_dark=true >}}
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
{{< /example >}}

## Breadcrumb context

Get started with this example to position a breadcrumb component above the H1 heading component.

{{< example id="heading-breadcrumb-example" github="typography/headings.md" show_dark=true >}}
<nav class="flex mb-4" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
      </div>
    </li>
  </ol>
</nav>
<h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Team management</h2>
{{< /example >}}

## Badge context

Use this example to show a badge component inside the heading text element as a secondary indicator.

{{< example id="heading-badge-example" github="typography/headings.md" show_dark=true >}}
<h1 class="flex items-center text-5xl font-extrabold dark:text-white">Flowbite<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></h1>
{{< /example >}}

## Secondary text

This example can be used to add a secondary text inside the main heading component.

{{< example id="heading-secondary-example" github="typography/headings.md" show_dark=true >}}
<h1 class="text-5xl font-extrabold dark:text-white">Flowbite<small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">This is secondary text</small></h1>
{{< /example >}}

## Sizes

The heading component has six levels of importance starting from H1 which has to be unique on the page and has the greatest weight of importance all the way to H6.

### Heading one (H1)

Use the H1 tag as the most important text element to indicate the title of your web page.

{{< example id="heading-one-example" github="typography/headings.md" show_dark=true >}}
<h1 class="text-5xl font-extrabold dark:text-white">Heading 1</h1>
{{< /example >}}

### Heading two (H2)

The H2 tag can be used as subtitles of the page's sections.

{{< example id="heading-two-example" github="typography/headings.md" show_dark=true >}}
<h2 class="text-4xl font-bold dark:text-white">Heading 2</h2>
{{< /example >}}

### Heading three (H3)

Use the H3 tags inside sections that already have a H2 available.

{{< example id="heading-three-example" github="typography/headings.md" show_dark=true >}}
<h3 class="text-3xl font-bold dark:text-white">Heading 3</h3>
{{< /example >}}

### Heading four (H4)

The H4 can be generally used after H2 and H3 tags are already present and you need a more in-depth hierarchy.

{{< example id="heading-four-example" github="typography/headings.md" show_dark=true >}}
<h4 class="text-2xl font-bold dark:text-white">Heading 4</h4>
{{< /example >}}

### Heading five (H5)

The H5 tag is most often used in longer articles with other heading already available or in sidebars.

{{< example id="heading-five-example" github="typography/headings.md" show_dark=true >}}
<h5 class="text-xl font-bold dark:text-white">Heading 5</h5>
{{< /example >}}

### Heading six (H6)

Using the H6 tag is quite rare because it means that you've already used all heading from H1 to H5, but you can still use it if you have a very complex article with lots of headings.

{{< example id="heading-six-example" github="typography/headings.md" show_dark=true >}}
<h6 class="text-lg font-bold dark:text-white">Heading 6</h6>
{{< /example >}}
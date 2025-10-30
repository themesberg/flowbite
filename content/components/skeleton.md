---
layout: docs
title: Tailwind CSS Skeleton - Flowbite
description: The skeleton component can be used as an alternative loading indicator to the spinner by mimicking the content that will be loaded such as text, images, or video
group: components
toc: true

previous: Sidebar
previousLink: components/sidebar/
next: Speed Dial
nextLink: components/speed-dial/
---

Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, heading, images, videos, and more.

You can set the width and height of these skeleton components based on the size of the content and element that it is being loaded in, such as a card or an article page.

You can also animate the skeleton component by using the `.animate-pulse` utility class from Tailwind CSS.

## Default skeleton

Use this example to show a placeholder when loading text content.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>

{{< /example >}}

## Image placeholder

This example can be used to show a placeholder when loading an image and text content.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div class="flex items-center justify-center w-full h-48 bg-neutral-quaternary rounded-base sm:w-96">
        <svg class="w-11 h-11 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
        <div class="h-2 bg-neutral-quaternary rounded-full max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
        <div class="h-2 bg-neutral-quaternary rounded-full max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-neutral-quaternary rounded-full max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-neutral-quaternary rounded-full max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

{{< /example >}}

## Video placeholder

Use this example to show a skeleton placeholder when loading video content.

{{< example github="components/skeleton.md" show_dark=true >}}

<div role="status" class="flex items-center justify-center h-56 max-w-sm bg-neutral-quaternary rounded-base animate-pulse">
    <svg class="w-11 h-11 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"/></svg>
    <span class="sr-only">Loading...</span>
</div>
{{< /example >}}

## Text placeholder

Use this example to show a placeholder when loading longer pagraphs and headings.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="space-y-2.5 animate-pulse max-w-lg">
    <div class="flex items-center w-full">
        <div class="h-2.5 bg-neutral-quaternary rounded-full w-32"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-24"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
    </div>
    <div class="flex items-center w-full max-w-[480px]">
        <div class="h-2.5 bg-neutral-quaternary rounded-full w-full"></div>
                <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-24"></div>
    </div>
    <div class="flex items-center w-full max-w-[400px]">
        <div class="h-2.5 bg-neutral-quaternary rounded-full w-full"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-80"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
    </div>
    <div class="flex items-center w-full max-w-[480px]">
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
                <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-24"></div>
    </div>
    <div class="flex items-center w-full max-w-[440px]">
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-32"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-24"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
    </div>
    <div class="flex items-center w-full max-w-[360px]">
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-80"></div>
        <div class="h-2.5 ms-2 bg-neutral-quaternary rounded-full w-full"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
{{< /example >}}

## Card placeholder

Use this example to show a placeholder when loading content inside a card.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="max-w-sm p-4 border border-default rounded-base shadow-xs animate-pulse md:p-6">
    <div role="status" class="flex items-center justify-center h-48 max-w-sm bg-neutral-quaternary rounded-base animate-pulse mb-4 sm:mb-6">
        <svg class="w-11 h-11 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
    <div class="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full"></div>
    <div class="flex items-center mt-4">
        <svg class="w-8 h-8 text-fg-disabled me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-32 mb-2"></div>
            <div class="w-48 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
{{< /example >}}

## Widget placeholder

This example can be used to show a placeholder of skeleton when fetching data for widgets and cards inside an application.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="max-w-sm p-4 border border-default rounded-base shadow-xs animate-pulse md:p-6">
    <div class="h-2.5 bg-neutral-quaternary rounded-full w-32 mb-2.5"></div>
    <div class="w-48 h-2 mb-10 bg-neutral-quaternary rounded-full"></div>
    <div class="flex items-baseline mt-4">
        <div class="w-full bg-neutral-quaternary rounded-t-full h-72"></div>
        <div class="w-full h-56 ms-6 bg-neutral-quaternary rounded-t-full"></div>
        <div class="w-full bg-neutral-quaternary rounded-t-full h-72 ms-6"></div>
        <div class="w-full h-64 ms-6 bg-neutral-quaternary rounded-t-full"></div>
        <div class="w-full bg-neutral-quaternary rounded-t-full h-80 ms-6"></div>
        <div class="w-full bg-neutral-quaternary rounded-t-full h-72 ms-6"></div>
        <div class="w-full bg-neutral-quaternary rounded-t-full h-80 ms-6"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
{{< /example >}}

## List placeholder

Use this example to show a placeholder when loading a list of items.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="max-w-md p-4 border border-default divide-y divide-default rounded-base shadow-xs animate-pulse md:p-6">
    <div class="flex items-center justify-between pb-4">
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
        <div class="h-2.5 bg-default rounded-full w-12"></div>
    </div>
    <div class="flex items-center justify-between py-4">
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
        <div class="h-2.5 bg-default rounded-full w-12"></div>
    </div>
    <div class="flex items-center justify-between py-4">
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
        <div class="h-2.5 bg-default rounded-full w-12"></div>
    </div>
    <div class="flex items-center justify-between py-4">
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
        <div class="h-2.5 bg-default rounded-full w-12"></div>
    </div>
    <div class="flex items-center justify-between py-4">
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
        <div class="h-2.5 bg-default rounded-full w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
{{< /example >}}

## Testimonial placeholder

This example can be used to show a skeleton placeholder when loading data for a testimonial section.

{{< example github="components/skeleton.md" show_dark=true >}}
<div role="status" class="animate-pulse">
    <div class="h-2.5 bg-default rounded-full max-w-[640px] mb-2.5 mx-auto"></div>
    <div class="h-2.5 mx-auto bg-default rounded-full max-w-[540px]"></div>
    <div class="flex items-center justify-center mt-4">
        <svg class="w-7 h-7 text-fg-disabled me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        <div class="w-20 h-2.5 bg-neutral-quaternary rounded-full me-3"></div>
        <div class="w-24 h-2 bg-neutral-quaternary rounded-full"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
{{< /example >}}

## Accessibility

Use the `role="status"` attribute on the `<div>` wrapper element to notify Assistive Technologies when content is about to be updated and show the "Loading..." text inside a `<span>` tag with the `.sr-only` class to make it visible only to screen readers.

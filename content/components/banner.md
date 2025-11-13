---
layout: docs
title: Tailwind CSS Sticky Banner - Flowbite
description: Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS
group: components
toc: true
requires_js: true

previous: Badge
previousLink: components/badge/
next: Bottom Navigation
nextLink: components/bottom-navigation/
---

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scroll down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

## Default sticky banner

Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.

{{< example class="p-0" github="components/banner.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div id="sticky-banner" tabindex="-1" class="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-default bg-neutral-primary-soft">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-body">
            <span class="inline-flex items-center justify-center w-6 h-6 shrink-0 me-2.5 bg-neutral-tertiary rounded-full">
                <svg class="w-3.5 h-3.5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"/></svg>
                <span class="sr-only">Bullhorn</span>
            </span>
            <span>New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-fg-brand underline hover:no-underline">Flowbite Library</a></span>
        </p>
    </div>
    <div class="flex items-center">
        <button data-dismiss-target="#sticky-banner" type="button" class="shrink-0 inline-flex justify-center text-sm w-7 h-7 items-center text-body hover:bg-neutral-tertiary hover:text-heading rounded-sm">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>

{{< /example >}}

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side.

{{< example class="p-0" github="components/banner.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div id="bottom-banner" tabindex="-1" class="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-default bg-neutral-primary-soft">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-body">
            <span class="inline-flex items-center justify-center w-6 h-6 shrink-0 me-2.5 bg-neutral-tertiary rounded-full">
                <svg class="w-3.5 h-3.5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"/></svg>
                <span class="sr-only">Discount</span>
            </span>
            <span>Get 5% commission per sale <a href="https://flowbite.com" class="flex items-center ms-0 text-sm font-medium text-fg-brand md:ms-1 md:inline-flex hover:underline">Become a partner
                <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </span>
        </p>
    </div>
    <div class="flex items-center">
        <button data-dismiss-target="#bottom-banner" type="button" class="shrink-0 inline-flex justify-center text-sm w-7 h-7 items-center text-body hover:bg-neutral-tertiary hover:text-heading rounded-sm">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>
{{< /example >}}

## Marketing CTA banner

Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner. Set a different width by using the `max-w-{*}` utility classes from Tailwind CSS.

{{< example class="p-0" github="components/banner.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div id="marketing-banner" tabindex="-1" class="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-neutral-primary-soft border border-default rounded-base shadow-xs lg:max-w-7xl left-1/2 top-6">
    <div class="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
        <a href="https://flowbite.com/" class="flex items-center mb-2 border-default md:pe-4 md:me-4 md:border-e md:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-2" alt="Flowbite Logo">
            <span class="text-heading self-center text-lg font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        <p class="flex items-center text-sm font-normal text-body">Build websites even faster with components on top of Tailwind</p>
    </div>
    <div class="flex items-center shrink-0">
        <button type="button" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none me-2">Sign Up</button>
        <button data-dismiss-target="#marketing-banner" type="button" class="hidden shrink-0 md:inline-flex justify-center text-sm w-7 h-7 items-center text-body hover:bg-neutral-tertiary hover:text-heading rounded-sm">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            <span class="sr-only">Close banner</span>
        </button>
        <button type="button" class="md:hidden text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Close</button>
    </div>
</div>

{{< /example >}}

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

{{< example class="p-0" github="components/banner.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div id="newsletter-banner" tabindex="-1" class="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-default bg-neutral-primary-soft">
    <div class="flex items-center shrink-0 w-full mx-auto sm:w-auto">
        <form class="flex flex-col items-center w-full md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <label for="email" class="shrink-0 mb-4 me-auto text-sm font-medium text-heading md:mb-0 md:me-4 md:m-0">Sign up now</label>
            <input type="email" id="email" class="block w-full md:w-64 px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Enter your email" required>
            <button type="submit" class="w-full md:w-auto text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Subscribe</button>
        </form>
    </div>
    <div class="flex items-center absolute top-2.5 end-2.5 md:relative md:top-auto md:end-auto">
        <button data-dismiss-target="#newsletter-banner" type="button" class="shrink-0 inline-flex justify-center text-sm w-7 h-7 items-center text-body hover:bg-neutral-tertiary hover:text-heading rounded-sm">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>
{{< /example >}}

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

{{< example class="p-0" github="components/banner.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div id="informational-banner" tabindex="-1" class="fixed top-0 start-0 z-50 flex flex-col justify-between w-full p-4 border-b border-default md:flex-row bg-neutral-secondary-soft">
    <div class="mb-4 md:mb-0 md:me-4">
        <h2 class="mb-1 text-base font-semibold text-heading">Integration is the key</h2>
        <p class="flex items-center text-sm font-normal text-body">You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind.</p>
    </div>
    <div class="flex items-center shrink-0 space-x-2">
        <button type="button" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Sign Up</button>
        <button data-dismiss-target="#informational-banner" type="button" class="shrink-0 inline-flex justify-center text-sm w-7 h-7 items-center text-body hover:bg-neutral-tertiary hover:text-heading rounded-sm">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>
{{< /example >}}

## More examples

For more sticky banner examples you can check [banner sections](https://flowbite.com/blocks/marketing/banner/) from Flowbite Blocks.

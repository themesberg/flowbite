---
layout: docs
title: Tailwind CSS Bottom Navigation - Flowbite
description: Use the bottom navigation bar component to allow users to navigate through your website or create a control bar using a menu that is positioned at the bottom of the page
group: components
toc: true

previous: Banner
previousLink: components/banner/
next: Breadcrumbs
nextLink: components/breadcrumb/
---

The bottom bar component can be used to allow menu items and certain control actions to be performed by the user through the usage of a fixed bar positioning to the bottom side of your page.

Check out multiple examples of the bottom navigation component based on various styles, controls, sizes, content and leverage the utility classes from Tailwind CSS to integrate into your own project.

## Default bottom navigation

Use the default bottom navigation bar example to show a list of menu items as buttons to allow the user to navigate through your website based on a fixed position. You can also use anchor tags instead of buttons.

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-neutral-primary-soft border-t border-default">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Home</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Wallet</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Settings</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Profile</span>
        </button>
    </div>
</div>
{{< /example >}}

## Menu items with border

This example can be used to show a border between the menu items inside the bottom navbar.

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-neutral-primary-soft border-t border-default">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-default border-x hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Home</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-e border-default hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Wallet</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Settings</span>
        </button>
        <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-default hover:bg-neutral-secondary-medium group border-x">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <span class="text-sm text-body group-hover:text-fg-brand">Profile</span>
        </button>
    </div>
</div>
{{< /example >}}

## Application bar example

Use this example to show a CTA button in the center of the navigation component to create new items.

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-neutral-primary-soft border border-default rounded-full bottom-4 left-1/2">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
            <span class="sr-only">Home</span>
        </button>
        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-wallet" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"/></svg>
            <span class="sr-only">Wallet</span>
        </button>
        <div id="tooltip-wallet" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Wallet
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div class="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded-full w-8 h-8 focus:outline-none">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                <span class="sr-only">New item</span>
            </button>
        </div>
        <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Create new item
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
            <span class="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <span class="sr-only">Profile</span>
        </button>
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
{{< /example >}}

## Example with pagination

This example be used to paginate multiple pages on a single view alongside other menu items.

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div class="fixed bottom-0 z-50 w-full h-16 -translate-x-1/2 bg-neutral-primary-soft border-t border-default left-1/2">
    <div class="grid h-full max-w-lg grid-cols-6 mx-auto">
        <button data-tooltip-target="tooltip-document" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/></svg>
            <span class="sr-only">New document</span>
        </button>
        <div id="tooltip-document" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            New document
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-bookmark" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/></svg>
            <span class="sr-only">Bookmark</span>
        </button>
        <div id="tooltip-bookmark" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Bookmark
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div class="flex items-center justify-center col-span-2">
            <div class="flex items-center justify-between w-full text-body bg-neutral-secondary-medium rounded-base border border-default-medium max-w-[128px] mx-2">
                <button type="button" class="inline-flex items-center justify-center h-8 px-1 w-6 rounded-s-base hover:bg-neutral-tertiary-medium focus:outline-none focus:ring-2 focus:ring-neutral-quaternary">
                    <svg class="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
                    <span class="sr-only">Previous page</span>
                </button>
                <span class="shrink-0 mx-1 text-sm font-medium space-x-0.5 rtl:space-x-reverse">1 of 34</span>
                <button type="button" class="inline-flex items-center justify-center h-8 px-1 w-6 rounded-e-base hover:bg-neutral-tertiary-medium focus:outline-none focus:ring-2 focus:ring-neutral-quaternary">
                    <svg class="w-3.5 h-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
                    <span class="sr-only">Next page</span>
                </button>
            </div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
            <span class="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <span class="sr-only">Profile</span>
        </button>
        <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
{{< /example >}}

## Button group bottom bar

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true show_dark=true >}}

<div class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-neutral-primary-soft border-t border-default left-1/2">
    <div class="w-full">
        <div class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-neutral-tertiary rounded-base" role="group">
            <button type="button" class="px-5 py-1.5 text-xs font-medium text-body hover:bg-dark-strong hover:text-white rounded">
                New
            </button>
            <button type="button" class="px-5 py-1.5 text-xs font-medium text-white bg-dark-strong rounded">
                Popular
            </button>
            <button type="button" class="px-5 py-1.5 text-xs font-medium text-body hover:bg-dark-strong hover:text-white rounded">
                Following
            </button>
        </div>
    </div>
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
        <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center p-4 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
            <span class="sr-only">Home</span>
        </button>
        <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Home
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-bookmark" type="button" class="inline-flex flex-col items-center justify-center p-4 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"/></svg>
            <span class="sr-only">Bookmark</span>
        </button>
        <div id="tooltip-bookmark" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Bookmark
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-post" type="button" class="inline-flex flex-col items-center justify-center p-4 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
            <span class="sr-only">New post</span>
        </button>
        <div id="tooltip-post" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            New post
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-search" type="button" class="inline-flex flex-col items-center justify-center p-4 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            <span class="sr-only">Search</span>
        </button>
        <div id="tooltip-search" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Search
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center p-4 hover:bg-neutral-secondary-medium group">
            <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
            <span class="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
{{< /example >}}

## Card with bottom bar

This example can be used to position a bottom navigation bar inside of a card element with scroll enabled on the Y axis to allow changing the content inside of the card, enable certain actions or show a list of menu items.

You can even use the other bottom navbar examples to exchange the default one presented here.

{{< example class="flex items-center justify-center p-4" github="components/bottom-navigation.md" show_dark=true >}}
 
<div class="relative w-full max-w-sm overflow-y-scroll bg-neutral-primary-soft border border-default shadow-xs rounded-base h-96">
    <ul>
        <li class="border-b border-default">
            <a href="#" class="flex items-center justify-center w-full px-4 py-3 hover:bg-neutral-secondary-medium dark:hover:bg-gray-800">
                <img class="me-3 rounded-full w-11 h-11" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos Avatar">
                <div>
                    <p class="text-sm text-body">New message from <span class="font-medium text-heading">Jese Leos</span>: "Hey, what's up? All set for the presentation?"</p>
                    <span class="text-xs text-fg-brand">a few moments ago</span>
                </div>
            </a>
        </li>
        <li class="border-b border-default">
            <a href="#" class="flex items-center justify-center w-full px-4 py-3 hover:bg-neutral-secondary-medium">
                <img class="me-3 rounded-full w-11 h-11" src="/docs/images/people/profile-picture-2.jpg" alt="Joseph McFall Avatar">
                <div>
                    <p class="text-sm text-body"><span class="font-medium text-heading">Joseph McFall</span> and <span class="font-medium text-heading">5 others</span> started following you.</p>
                    <span class="text-xs text-fg-brand">10 minutes ago</span>
                </div>
            </a>
        </li>
        <li class="border-b border-default">
            <a href="#" class="flex items-center justify-center w-full px-4 py-3 hover:bg-neutral-secondary-medium">
                <img class="me-3 rounded-full w-11 h-11" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green Avatar">
                <div>
                    <p class="text-sm text-body"><span class="font-medium text-heading">Bonnie Green</span> and <span class="font-medium text-heading">141 others</span> love your story. See it and view more stories.</p>
                    <span class="text-xs text-fg-brand">23 minutes ago</span>
                </div>
            </a>
        </li>
        <li class="border-b border-default">
            <a href="#" class="flex items-center justify-center w-full px-4 py-3 hover:bg-neutral-secondary-medium">
                <img class="me-3 rounded-full w-11 h-11" src="/docs/images/people/profile-picture-4.jpg" alt="Leslie Livingston Avatar">
                <div>
                    <p class="text-sm text-body"><span class="font-medium text-heading">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-fg-brand hover:underline">@bonnie.green</span> what do you say?</p>
                    <span class="text-xs text-fg-brand">23 minutes ago</span>
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="flex items-center justify-center w-full px-4 py-3 hover:bg-neutral-secondary-medium">
                <img class="me-3 rounded-full w-11 h-11" src="/docs/images/people/profile-picture-5.jpg" alt="Robert Brown Avatar">
                <div>
                    <p class="text-sm text-body"><span class="font-medium text-heading">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend. </p>
                    <span class="text-xs text-fg-brand">23 minutes ago</span>
                </div>
            </a>
        </li>
    </ul>
    <div class="sticky bottom-0 left-0 z-50 w-full h-16 bg-neutral-primary-soft border-t border-default">
        <div class="grid h-full max-w-lg grid-cols-3 mx-auto">
            <button type="button" class="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-neutral-secondary-medium group">
                <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                <span class="text-sm text-body group-hover:text-fg-brand">Latest</span>
            </button>
            <button type="button" class="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-neutral-secondary-medium group">
                <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
                <span class="text-sm text-body group-hover:text-fg-brand">Following</span>
            </button>
            <button type="button" class="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-neutral-secondary-medium group">
                <svg class="w-6 h-6 mb-1 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/></svg>
                <span class="text-sm text-body group-hover:text-fg-brand">Favorites</span>
            </button>
        </div>
    </div>
</div>
{{< /example >}}

## Online meeting control bar

Use this component to show a list of options for online video meetings by showing a list of options such as muting the microphone, hiding the camera, adjusting the volume and more.

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true disable_init_js=true show_dark=true >}}

<div class="fixed bottom-0 left-0 z-50 grid w-full h-16 grid-cols-1 px-8 bg-neutral-primary-soft border-t border-default md:grid-cols-3">
    <div class="items-center justify-center hidden text-body me-auto md:flex">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span class="text-sm">12:43 PM</span>
    </div>
    <div class="flex items-center justify-center mx-auto space-x-3">
        <button data-tooltip-target="tooltip-microphone" type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm p-2.5 focus:outline-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/></svg>
            <span class="sr-only">Mute microphone</span>
        </button>
        <div id="tooltip-microphone" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Mute microphone
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-camera" type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm p-2.5 focus:outline-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/></svg>
            <span class="sr-only">Hide camera</span>
        </button>
        <div id="tooltip-camera" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Hide camera
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-feedback" type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm p-2.5 focus:outline-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.99 9H15M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .507 2.397 1.494 3.216a5.5 5.5 0 0 0 7.022 0C16.503 15.397 17 14 17 13c0 0-1.99 1-4.995 1S7 13 7 13Z"/></svg>
            <span class="sr-only">Share feedback</span>
        </button>
        <div id="tooltip-feedback" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Share feedback
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm p-2.5 focus:outline-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
            <span class="sr-only">Video settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Video settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="moreOptionsDropdownButton" data-dropdown-toggle="moreOptionsDropdown" type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm p-2.5 focus:outline-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
            <span class="sr-only">Show options</span>
        </button>
        <div id="moreOptionsDropdown" class="hidden z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-48 block">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="moreOptionsDropdownButton">
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Show participants</a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Adjust volume</a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Show information</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="items-center justify-center hidden ms-auto md:flex">
        <button data-tooltip-target="tooltip-participants" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <span class="sr-only">Show participants</span>
        </button>
        <div id="tooltip-participants" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Show participants
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-volume" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/></svg>
            <span class="sr-only">Adjust volume</span>
        </button>
        <div id="tooltip-volume" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Adjust volume
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-information" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="sr-only">Show information</span>
        </button>
        <div id="tooltip-information" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Show information
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
{{< /example >}}

## Video player bar

Use this component to show control buttons for a video or audio that is playing in the browser to control the volume, navigate between videos, pause or start the video, and more.

{{< example class="p-0" github="components/bottom-navigation.md" iframeHeight="480" iframeMaxHeight="480" disable_init_js=true skeletonPlaceholders=true show_dark=true >}}

<div class="fixed bottom-0 left-0 z-50 grid w-full h-24 grid-cols-1 px-8 bg-neutral-primary-soft border-t border-default md:grid-cols-3">
    <div class="items-center justify-center hidden me-auto md:flex">
        <img class="h-8 me-3 rounded-sm" src="/docs/images/misc/flowbite-yt-screenshot.png" alt="Video preview">
        <span class="text-sm text-body">Flowbite Crash Course</span>
    </div>
    <div class="flex items-center w-full">
        <div class="w-full">
            <div class="flex items-center justify-center mx-auto mb-1">
                <button data-tooltip-target="tooltip-shuffle" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"/></svg>
                    <span class="sr-only">Shuffle video</span>
                </button>
                <div id="tooltip-shuffle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Shuffle video
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-previous" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
                    <svg class="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6v12m8-12v12l-8-6 8-6Z"/></svg>
                    <span class="sr-only">Previous video</span>
                </button>
                <div id="tooltip-previous" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Previous video
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-pause" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm mx-2 p-2.5 focus:outline-none">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z" clip-rule="evenodd"/></svg>
                    <span class="sr-only">Pause video</span>
                </button>
                <div id="tooltip-pause" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Pause video
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-next" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
                    <svg class="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6v12M8 6v12l8-6-8-6Z"/></svg>
                    <span class="sr-only">Next video</span>
                </button>
                <div id="tooltip-next" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Next video
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button data-tooltip-target="tooltip-restart" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/></svg>
                    <span class="sr-only">Restart video</span>
                </button>
                <div id="tooltip-restart" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Restart video
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <div class="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-medium text-body">3:45</span>
                <div class="w-full bg-neutral-quaternary rounded-full h-1.5">
                    <div class="bg-brand h-1.5 rounded-full" style="width: 65%"></div>
                </div>
                <span class="text-sm font-medium text-body">5:00</span>
            </div>
        </div>
    </div>
    <div class="items-center justify-center hidden ms-auto md:flex">
        <button data-tooltip-target="tooltip-playlist" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 15.5V5s3 1 3 4m-7-3H4m9 4H4m4 4H4m13 2.4c0 1.326-1.343 2.4-3 2.4s-3-1.075-3-2.4 1.343-2.4 3-2.4 3 1.075 3 2.4Z"/></svg>
            <span class="sr-only">View playlist</span>
        </button>
        <div id="tooltip-playlist" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            View playlist
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-captions" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.855 14.322a2.475 2.475 0 1 1 .133-4.241m6.053 4.241a2.475 2.475 0 1 1 .133-4.241M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
            <span class="sr-only">Captions</span>
        </button>
        <div id="tooltip-captions" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Toggle captions
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-expand" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/></svg>
            <span class="sr-only">Expand</span>
        </button>
        <div id="tooltip-expand" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Full screen
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-volume" type="button" class="p-2 group rounded-full text-body hover:bg-neutral-tertiary-medium hover:text-heading me-1 focus:outline-none focus:ring-4 focus:ring-neutral-tertiary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/></svg>
            <span class="sr-only">Adjust volume</span>
        </button>
        <div id="tooltip-volume" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
            Adjust volume
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
{{< /example >}}

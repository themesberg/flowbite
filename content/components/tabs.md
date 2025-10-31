---
layout: docs
title: Tailwind CSS Tabs - Flowbite
description: Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container
group: components
toc: true

previous: Tables
previousLink: components/tables/
next: Timeline
nextLink: components/timeline/
---

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Default tabs

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

{{< example github="components/tabs.md" show_dark=true >}}

<ul class="flex flex-wrap text-sm font-medium text-center text-body border-b border-default">
    <li class="me-2">
        <a href="#" aria-current="page" class="inline-block p-4 text-fg-brand bg-neutral-secondary-soft rounded-t-base active">Profile</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-base hover:text-heading hover:bg-neutral-secondary-soft">Dashboard</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-base hover:text-heading hover:bg-neutral-secondary-soft">Settings</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-base hover:text-heading hover:bg-neutral-secondary-soft">Contacts</a>
    </li>
    <li>
        <a class="inline-block p-4 text-fg-disabled rounded-t-base cursor-not-allowed">Disabled</a>
    </li>
</ul>
{{< /example >}}

## Tabs with underline

Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

{{< example github="components/tabs.md" show_dark=true >}}

<div class="text-sm font-medium text-center text-body border-b border-default">
    <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand">Profile</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 text-fg-brand border-b border-brand rounded-t-base active" aria-current="page">Dashboard</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand">Settings</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand">Contacts</a>
        </li>
        <li>
            <a class="inline-block p-4 text-fg-disabled rounded-t-base cursor-not-allowed dark:text-body">Disabled</a>
        </li>
    </ul>
</div>
{{< /example >}}

## Tabs with icons

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs.

{{< example github="components/tabs.md" show_dark=true >}}

<div class="border-b border-default">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-body">
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group">
                <svg class="w-4 h-4 me-2 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                Profile
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 text-fg-brand border-b border-brand rounded-t-base active group" aria-current="page">
                <svg class="w-4 h-4 me-2 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
                Dashboard
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group">
                <svg class="w-4 h-4 me-2 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
                Settings
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group">
                <svg class="w-4 h-4 me-2 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/></svg>
                Contacts
            </a>
        </li>
        <li>
            <a class="inline-block p-4 text-fg-disabled rounded-t-base cursor-not-allowed">Disabled</a>
        </li>
    </ul>
</div>
{{< /example >}}

## Pills tabs

If you want to use pills as a style for the tabs component you can do so by using this example.

{{< example github="components/tabs.md" show_dark=true >}}

<ul class="flex flex-wrap text-sm font-medium text-center text-body">
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-2.5 text-white bg-brand rounded-base active" aria-current="page">Tab 1</a>
    </li>
    <li class="me-2">
        <a href="#"  class="inline-block px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft">Tab 2</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft">Tab 3</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft">Tab 4</a>
    </li>
    <li>
        <a class="inline-block px-4 py-3 text-fg-disabled cursor-not-allowed">Tab 5</a>
    </li>
</ul>
{{< /example >}}

## Vertical tabs

Use this example to show a vertically aligned set of tabs on the left side of the page.

{{< example github="components/tabs.md" show_dark=true >}}

<div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-body md:me-4 mb-4 md:mb-0">
        <li>
            <a href="#" class="inline-flex items-center px-4 py-2.5 text-white bg-brand rounded-base active w-full" aria-current="page">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                Profile
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft w-full">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/></svg>
                Dashboard
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft w-full">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
                Settings
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-base hover:text-heading hover:bg-neutral-secondary-soft w-full">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.079 6.839a3 3 0 0 0-4.255.1M13 20h1.083A3.916 3.916 0 0 0 18 16.083V9A6 6 0 1 0 6 9v7m7 4v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"/></svg>
                Contact
            </a>
        </li>
        <li>
            <a class="inline-flex items-center px-4 py-3 text-fg-disabled rounded-base cursor-not-allowed w-full">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                Disabled
            </a>
        </li>
    </ul>
    <div class="p-6 bg-neutral-secondary text-medium text-body rounded-base w-full">
        <h3 class="text-lg font-semibold text-heading mb-4">Profile Tab</h3>
        <p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
    </div>
</div>

{{< /example >}}


## Full width tabs

If you want to show the tabs on the full width relative to the parent element you can do so by using the full width tabs component example.

{{< example github="components/tabs.md" show_dark=true >}}

<div class="sm:hidden">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body">
        <option>Profile</option>
        <option>Dashboard</option>
        <option>setting</option>
        <option>Invoice</option>
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-body sm:flex -space-x-px">
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full text-body bg-neutral-primary-soft border border-default rounded-s-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none" aria-current="page">Profile</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Dashboard</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Settings</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full text-body bg-neutral-primary-soft border border-default rounded-e-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">Invoice</a>
    </li>
</ul>
{{< /example >}}

## Tabs with icons

This example can be used to show a list of tabs with icons from our [SVG icons](https://flowbite.com/icons/).

{{< example github="components/tabs.md" show_dark=true >}}

<div class="sm:hidden">
    <label for="tabs-icons" class="sr-only">Select your country</label>
    <select id="tabs-icons" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body">
        <option>Profile</option>
        <option>Dashboard</option>
        <option>setting</option>
        <option>Invoice</option>
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-body sm:flex -space-x-px">
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-flex items-center justify-center w-full text-body bg-neutral-primary-soft border border-default rounded-s-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none" aria-current="page">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            Profile
        </a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-flex items-center justify-center  w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
        Dashboard
        </a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-flex items-center justify-center  w-full text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/></svg>
            Settings
        </a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-flex items-center justify-center  w-full text-body bg-neutral-primary-soft border border-default rounded-e-base hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-secondary-strong font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/></svg>
            Invoice
        </a>
    </li>
</ul>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Interactive tabs

Use the dynamic tabs component to interactively show and hide the content below the tabs based on the currently active tab item. Make sure that you initialize the component by using the `data-tabs-toggle="{parentTabContentSelector}"` and also apply an `id` attribute to the same element.

Each tab toggle button requires a `role="tab"` attribute and a `data-tabs-target="{tabContentSelector}"` to target the tab content element that will be shown when clicked.

Use the `aria-selected="true"` data attribute so that Flowbite can target the currently active tab component and hide it when another is shown. If not set, it will show the first tab as active.

Apply the `role="tabpanel"` data attribute to every tab content element and set the `id` attribute which will be equal to the `data-tabs-target={tabContentSelector}` from the tabs toggles.

You can use multiple tab components on a single page but make sure that the id's are different.

{{< example github="components/tabs.md" show_dark=true >}}

<div class="mb-4 border-b border-default">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
{{< /example >}}

## Active tab style

Use the `data-tabs-active-classes` and the `data-tabs-inactive-classes` to set the active and inactive tab Tailwind CSS classes. In this example we set the active classes to the purple color instead of blue.

{{< example github="components/tabs.md" show_dark=true >}}

<div class="mb-4 border-b border-default">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple hover:text-purple border-purple" data-tabs-inactive-classes="dark:border-transparent text-body hover:text-fg-brand border-default hover:border-brand" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-base hover:text-fg-brand hover:border-brand" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-styled-tab-content">
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-base bg-neutral-secondary-soft" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-body">This is some placeholder content the <strong class="font-medium text-heading">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
{{< /example >}}

## JavaScript behaviour

The **Tabs** class from Flowbite can be used to create an object that will enable the interactive navigation between tabs and its content based on the parameters, options, methods, and callback functions that you apply.

### Object parameters

Create a new Tabs object with parameters such as an array of the tab and content elements.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body dark:text-gray-400">
        <thead class="bg-neutral-secondary-soft text-heading">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Parameter
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Required
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">tabsElement</code>
                </td>
                <td class="px-6 py-4">
                    Element
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Parent HTML element of the tabs component.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">items</code>
                </td>
                <td class="px-6 py-4">
                    Array
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Array of the tab objects including the id, trigger element, and the content element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">options</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                    An object of options for the appearances of the tabs and to use callback functions.
                </td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">instanceOptions</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                   Object of options that allows you to set a custom ID for the instance that is being added to the <a href="https://flowbite.com/docs/getting-started/javascript/#instance-options" class="underline hover:no-underline">Instance Manager</a> and whether to override or not an existing instance.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Options

Use the following options as the second parameter for the Tabs object to set the appearance of the active tab elements and use callback functions.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body dark:text-gray-400">
        <thead class="bg-neutral-secondary-soft text-heading">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Option
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">defaultTabId</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set the currently active tab element based on the ID.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">activeClasses</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set a string of Tailwind CSS class names to apply to the active tab element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">inactiveClasses</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set a string of Tailwind CSS class names to apply to the inactive tab elements.
                </td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onShow</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the a new tab has been shown.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the methods from the Tabs object to programmatically change the current active tab using JavaScript.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body dark:text-gray-400">
        <thead class="bg-neutral-secondary-soft text-heading">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Method
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">show(id)</code>
                </td>
                <td class="px-6 py-4">
                    Use the show function on the Tab object to change the current active tab element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">getTab(id)</code>
                </td>
                <td class="px-6 py-4">
                    Return the tab element based on the ID.
                </td>
            </tr>
            <tr>
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnShow(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a custom callback function whenever a tab has been shown.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Check out the following example to learn how to initialize and manipulate a Tabs object in JavaScript.

First of all, create an array of objects that contains the id, trigger element, and content element of each tab, set the active tab based on the id, and optionally set a callback function after a new tab has been shown.

{{< code lang="javascript" file="tabs.js" icon="file" >}}
const tabsElement = document.getElementById('tabs-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example'),
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example'),
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example'),
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example'),
    },
];

// options with default values
const options = {
    defaultTabId: 'settings',
    activeClasses:
        'text-fg-brand hover:text-fg-brand border-brand',
    inactiveClasses:
        'text-body hover:text-fg-brand border-base hover:border-brand',
    onShow: () => {
        console.log('tab is shown');
    },
};

// instance options with default values
const instanceOptions = {
  id: 'tabs-example',
  override: true
};
{{< /code >}}

Create a new Tabs object based on the parameters we've previously set.

{{< code lang="javascript" file="tabs.js" icon="file" >}}
import { Tabs } from 'flowbite';

/*
* tabsElement: parent element of the tabs component (required)
* tabElements: array of tab objects (required)
* options (optional)
* instanceOptions (optional)
*/
const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
{{< /code >}}

Lastly, you can now use the methods on the Tabs object to show another tab element, get a tab element based on the id, or get the current active tab element.

{{< code lang="javascript" file="tabs.js" icon="file" >}}
// shows another tab element
tabs.show('dashboard');

// get the tab object based on ID
tabs.getTab('contacts');

// get the current active tab object
tabs.getActiveTab();
{{< /code >}}

### HTML Markup

You can use this HTML code as an example for the JavaScript code from above.

{{< code lang="html" file="tabs.html" icon="file" >}}
<div class="mb-4 border-b border-default dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-body dark:text-gray-400" id="tabs-example" role="tablist">
        <li class="me-2" role="presentation">
            <button
                class="inline-block rounded-t-base border-b border-transparent p-4 hover:border-brand hover:text-gray-600 dark:hover:text-gray-300"
                id="profile-tab-example"
                type="button"
                role="tab"
                aria-controls="profile-example"
                aria-selected="false"
            >
                Profile
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button
                class="inline-block rounded-t-base border-b border-transparent p-4 hover:border-brand hover:text-gray-600 dark:hover:text-gray-300"
                id="dashboard-tab-example"
                type="button"
                role="tab"
                aria-controls="dashboard-example"
                aria-selected="false"
            >
                Dashboard
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button
                class="inline-block rounded-t-base border-b border-transparent p-4 hover:border-brand hover:text-gray-600 dark:hover:text-gray-300"
                id="settings-tab-example"
                type="button"
                role="tab"
                aria-controls="settings-example"
                aria-selected="false"
            >
                Settings
            </button>
        </li>
        <li role="presentation">
            <button
                class="inline-block rounded-t-base border-b border-transparent p-4 hover:border-brand hover:text-gray-600 dark:hover:text-gray-300"
                id="contacts-tab-example"
                type="button"
                role="tab"
                aria-controls="contacts-example"
                aria-selected="false"
            >
                Contacts
            </button>
        </li>
    </ul>
</div>
<div id="tabContentExample">
    <div
        class="hidden rounded-base bg-gray-50 p-4 dark:bg-gray-800"
        id="profile-example"
        role="tabpanel"
        aria-labelledby="profile-tab-example"
    >
        <p class="text-sm text-body">
            This is some placeholder content the
            <strong class="font-medium text-heading"
                >Profile tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
        class="hidden rounded-base bg-gray-50 p-4 dark:bg-gray-800"
        id="dashboard-example"
        role="tabpanel"
        aria-labelledby="dashboard-tab-example"
    >
        <p class="text-sm text-body">
            This is some placeholder content the
            <strong class="font-medium text-heading"
                >Dashboard tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
        class="hidden rounded-base bg-gray-50 p-4 dark:bg-gray-800"
        id="settings-example"
        role="tabpanel"
        aria-labelledby="settings-tab-example"
    >
        <p class="text-sm text-body">
            This is some placeholder content the
            <strong class="font-medium text-heading"
                >Settings tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
        class="hidden rounded-base bg-gray-50 p-4 dark:bg-gray-800"
        id="contacts-example"
        role="tabpanel"
        aria-labelledby="contacts-tab-example"
    >
        <p class="text-sm text-body">
            This is some placeholder content the
            <strong class="font-medium text-heading"
                >Contacts tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Tabs class, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="tabs.ts" icon="file" >}}
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

const tabsElement: HTMLElement = document.getElementById('tabs-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements: TabItem[] = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example'),
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example'),
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example'),
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example'),
    },
];

// options with default values
const options: TabsOptions = {
    defaultTabId: 'settings',
    activeClasses:
        'text-fg-brand hover:text-fg-brand border-brand',
    inactiveClasses:
        'text-body hover:text-fg-brand border-base hover:border-brand',
    onShow: () => {
        console.log('tab is shown');
    },
};

// instance options with default values
const instanceOptions: InstanceOptions = {
  id: 'tabs-example',
  override: true
};

/*
* tabsElement: parent element of the tabs component (required)
* tabElements: array of tab elements (required)
* options (optional)
* instanceOptions (optional)
*/
const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

// open tab item based on id
tabs.show('contacts');
{{< /code >}}

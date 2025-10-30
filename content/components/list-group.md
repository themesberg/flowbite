---
layout: docs
title: Tailwind CSS List Group - Flowbite
description: Use the list group component to display a series of items, buttons or links inside a single element
group: components
toc: true

previous: KBD (Keyboard)
previousLink: components/kbd/
next: Mega menu
nextLink: components/mega-menu/
---

The list group component can be used to display a series of elements, buttons or links inside a single card component similar to a sidebar.

## Default list group

Here's an example of a list group that you can use right away.

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<ul class="w-48 text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
    <li class="w-full px-4 py-2 border-b border-default rounded-t-lg">Profile</li>
    <li class="w-full px-4 py-2 border-b border-default">Settings</li>
    <li class="w-full px-4 py-2 border-b border-default">Messages</li>
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li>
</ul>
{{< /example >}}

## List group with links

You can also display a series of links inside the list group element.

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<div class="w-48 text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
    <a href="#" aria-current="true" class="block w-full px-4 py-2 text-fg-brand bg-neutral-secondary-medium border-b border-default rounded-t-base cursor-pointer">
        Profile
    </a>
    <a href="#" class="block w-full px-4 py-2 border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        Settings
    </a>
    <a href="#" class="block w-full px-4 py-2 border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        Messages
    </a>
    <a href="#" class="block w-full px-4 py-2 rounded-b-base cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        Download
    </a>
</div>
{{< /example >}}

## List group with buttons

It is also possible to display a list of button element inside the list group component. The following example includes an active and disabled item as well.

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<div class="w-48 text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
    <button aria-current="true" type="button" class="w-full px-4 py-2 font-medium text-left rtl:text-right text-fg-brand bg-neutral-secondary-medium border-b border-default rounded-t-base cursor-pointer focus:outline-none">
        Profile
    </button>
    <button type="button" class="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        Settings
    </button>
    <button type="button" class="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        Messages
    </button>
    <button type="button" class="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        Options
    </button>
    <button disabled type="button" class="w-full px-4 py-2 font-medium text-left rtl:text-right rounded-b-base cursor-not-allowed text-fg-disabled">
        Download
    </button>
</div>
{{< /example >}}

## List group with icons

Use the following example to create a list of buttons as a menu together with [SVG icons](https://flowbite.com/icons/).

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<div class="w-48 text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-base">
    <a href="#" aria-current="true" class="flex items-center w-full px-4 py-2 text-fg-brand bg-neutral-secondary-medium border-b border-default rounded-t-base cursor-pointer">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        Profile
    </a>
    <a href="#" class="flex items-center w-full px-4 py-2 border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/></svg>
        Settings
    </a>
    <a href="#" class="flex items-center w-full px-4 py-2 border-b border-default cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
        Messages
    </a>
    <a href="#" class="flex items-center w-full px-4 py-2 rounded-b-base cursor-pointer hover:bg-neutral-secondary-medium hover:text-fg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:text-fg-brand">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
        Download
    </a>
</div>
{{< /example >}}


## Features list group

Use this example to show a list of features with icons in a card component.

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<div class="w-72 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <ul role="list" class="space-y-4 p-6">
        <li class="flex items-center">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">2 team members</span>
        </li>
        <li class="flex items-center">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">20GB Cloud storage</span>
        </li>
        <li class="flex items-center">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">Integration help</span>
        </li>
        <li class="flex items-center line-through decoration-body">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">Sketch Files</span>
        </li>
        <li class="flex items-center line-through decoration-body">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">API Access</span>
        </li>
        <li class="flex items-center line-through decoration-body">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">Complete documentation</span>
        </li>
        <li class="flex items-center line-through decoration-body">
            <svg class="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span class="text-body">24×7 phone support</span>
        </li>
    </ul>
</div>
{{< /example >}}

## Statistic list with divider

This example can be used to show a list of statistical data in a card component.

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<div class="w-96 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <ul role="list" class="space-y-3 p-6 divide-y divide-default">
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/></svg>
                <span>Electronics</span>
            </div>
            <span class="text-body font-medium">$5B</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 5h-.16667c-.86548 0-1.70761.28071-2.4.8L3.5 8l2 3.5L8 10v9h8v-9l2.5 1.5 2-3.5-2.9333-2.2c-.6924-.51929-1.5346-.8-2.4-.8H15M9 5c0 1.5 1.5 3 3 3s3-1.5 3-3M9 5h6"></svg>
                <span>Fashion</span>
            </div>
            <span class="text-body font-medium">$2.78B</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>
                <span>Home Furnishings</span>
            </div>
            <span class="text-body font-medium">$1.8B</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
                <span>Auto & Moto</span>
            </div>
            <span class="text-body font-medium">$1.1B</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14c2.7614 0 5-2.6679 5-5.42928C17 7.18458 15.8809 4.06255 15.5 3h-7C8.15198 4.02095 7 7.17202 7 8.57072 7 11.3321 9.23858 14 12 14Zm0 0v7m0 0H9m3 0h3M7 9h9"/></svg>
                <span>Food and Beverage</span>
            </div>
            <span class="text-body font-medium">$987</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.5 15C6.11929 15 5 16.1193 5 17.5S6.11929 20 7.5 20s2.5-1.1193 2.5-2.5S8.88071 15 7.5 15Zm0 0 1.67693-4.1693m6.69787-3.82761C17.0117 7.00309 18 6.10457 18 5c0-1.10457-.9217-2-2.0586-2-.8963 0-1.6853.74312-1.9679 1.51992M8.12719 6.99544C7.00181 6.99544 6 6.10457 6 5s.9123-2 2.03768-2c.93446 0 1.70666.67806 1.94698 1.51992M14 18h-4m6-3-1.4578-3.8912m-6.63506 2.8789-.44889.1929C6.24889 14.5837 5 13.6836 5 12.4088c0-.8339.55278-1.5667 1.35457-1.7958L8.5 10m7.1055 3.9877.4133.1446c1.2127.4242 2.4812-.476 2.4812-1.7607 0-.8159-.5302-1.5371-1.309-1.7805l-1.7458-.5575M12 9.06243v-.01m-1.3779-1.55397v-.01m3.0337.01v-.01M16 8c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Zm3 9.5c0 1.3807-1.1193 2.5-2.5 2.5S14 18.8807 14 17.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z"/></svg>
                <span>Toys</span>
            </div>
            <span class="text-body font-medium">$705</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/></svg>
                <span>Books & Music</span>
            </div>
            <span class="text-body font-medium">$688</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
                <span>Office Equipment</span>
            </div>
            <span class="text-body font-medium">$534</span>
        </li>
        <li class="flex items-center justify-between pb-3">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/></svg>
                <span>Audio & Video Equipment</span>
            </div>
            <span class="text-body font-medium">$502</span>
        </li>
        <li class="flex items-center justify-between">
            <div class="flex items-center text-body">
                <svg class="w-5 h-5 me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
                <span>Other Categories</span>
            </div>
            <span class="text-body font-medium">$95M</span>
        </li>
    </ul>
</div>
{{< /example >}}

## List with avatars and CTA

Use this component to show a list of users with avatars and CTA buttons.

{{< example class="flex justify-center" github="components/list-group.md" show_dark=true >}}

<div class="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
    <h5 class="text-xl font-semibold text-heading mb-6">Latest users</h5>
    <div class="flow-root">
        <ul role="list" class="divide-y divide-default">
            <li class="pb-4 sm:pb-4">
                <div class="flex items-center gap-2">
                    <div class="shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-medium text-heading truncate">
                            Neil Sims
                        </p>
                        <p class="text-sm text-body truncate">
                            neil@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center space-x-1.5">
                        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                        <button data-tooltip-target="tooltip-remove-1" type="button" class="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                        </button>
                        <div id="tooltip-remove-1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                           Remove
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="py-4 sm:py-4">
                <div class="flex items-center gap-2">
                    <div class="shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-medium text-heading truncate">
                            Bonnie Green
                        </p>
                        <p class="text-sm text-body truncate">
                            bonnie@flowbite.com
                        </p>
                    </div>
                    <div class="inline-flex items-center space-x-1.5">
                        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                        <button data-tooltip-target="tooltip-remove-2" type="button" class="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                        </button>
                        <div id="tooltip-remove-2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                           Remove
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="py-4 sm:py-4">
                <div class="flex items-center gap-2">
                    <div class="shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-medium text-heading truncate">
                            Michael Gough
                        </p>
                        <p class="text-sm text-body truncate">
                            michael@themesberg.com
                        </p>
                    </div>
                    <div class="inline-flex items-center space-x-1.5">
                        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                        <button data-tooltip-target="tooltip-remove-3" type="button" class="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                        </button>
                        <div id="tooltip-remove-3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                           Remove
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="py-4 sm:py-4">
                <div class="flex items-center gap-2">
                    <div class="shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-medium text-heading truncate">
                            Lana Byrd
                        </p>
                        <p class="text-sm text-body truncate">
                            lana@apple.com
                        </p>
                    </div>
                    <div class="inline-flex items-center space-x-1.5">
                        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                        <button data-tooltip-target="tooltip-remove-4" type="button" class="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                        </button>
                        <div id="tooltip-remove-4" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                           Remove
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="pt-4 pb-0">
                <div class="flex items-center gap-2">
                    <div class="shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="font-medium text-heading truncate">
                            Thomas Lean
                        </p>
                        <p class="text-sm text-body truncate">
                            thomas@google.com
                        </p>
                    </div>
                    <div class="inline-flex items-center space-x-1.5">
                        <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none shrink-0">Follow</button>
                        <button data-tooltip-target="tooltip-remove-5" type="button" class="inline-flex items-center justify-center text-fg-danger bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base h-9 w-9 focus:outline-none">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>
                        </button>
                        <div id="tooltip-remove-5" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs force:opacity-0 tooltip">
                           Remove
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

{{< /example >}}

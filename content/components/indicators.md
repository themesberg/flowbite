---
layout: docs
title: Tailwind CSS Indicators - Flowbite
description: Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS
group: components
toc: true

previous: Gallery
previousLink: components/gallery/
next: Jumbotron
nextLink: components/jumbotron/
---

The indicator component can be used as a small element positioned absolutely relative to another component such as a button or card and show a number count, account status (red for offline, green for online) and other useful information.

Check out the following examples for multiple sizes, colors, positionings, styles, and more all coded with Tailwind CSS and Flowbite.

## Default indicator

Use this example to create a simple indicator with multiple colors and position it anywhere on the website.

{{< example class="flex items-center justify-center" github="components/indicators.md" show_dark=true >}}
<span class="flex w-3 h-3 me-3 bg-neutral-quaternary rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-dark rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-brand rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-success rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-danger rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-purple rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-indigo rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-warning rounded-full"></span>
<span class="flex w-3 h-3 me-3 bg-teal rounded-full"></span>
{{< /example >}}

## Legend indicator

This example can be used as a legend indicator for charts to also add a text next to the bullet point.

{{< example class="flex items-center justify-center" github="components/indicators.md" show_dark=true >}}
<span class="flex items-center text-sm font-medium text-heading me-3"><span class="flex w-2.5 h-2.5 bg-brand rounded-full me-1.5 shrink-0"></span>Visitors</span>
<span class="flex items-center text-sm font-medium text-heading me-3"><span class="flex w-2.5 h-2.5 bg-purple rounded-full me-1.5 shrink-0"></span>Sessions</span>
<span class="flex items-center text-sm font-medium text-heading me-3"><span class="flex w-2.5 h-2.5 bg-indigo rounded-full me-1.5 shrink-0"></span>Customers</span>
<span class="flex items-center text-sm font-medium text-heading me-3"><span class="flex w-2.5 h-2.5 bg-teal rounded-full me-1.5 shrink-0"></span>Revenue</span>
{{< /example >}}

## Indicator count

This example can be used to show a number count inside the indicator and position it relative to a button component.

{{< example github="components/indicators.md" class="flex items-center justify-center" show_dark=true >}}
<button type="button" class="relative inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
    <span class="sr-only">Notifications</span>
    Messages
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-danger border-2 border-buffer rounded-full -top-2 -end-2">8</div>
</button>
{{< /example >}}

## Status indicator

Use this example to show a status indicator for the currently logged in user by showing red for offline and green for online.

{{< example github="components/indicators.md" class="flex items-center justify-center" show_dark=true >}}

<div class="relative me-4">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="profile image">
    <span class="top-0 start-7 absolute w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="profile image">
    <span class="top-0 start-7 absolute w-3.5 h-3.5 bg-danger border-2 border-buffer rounded-full"></span>
</div>
{{< /example >}}

## Badge indicator

This example can be used to add an indicator inside of a badge component.

{{< example github="components/indicators.md" class="flex items-center justify-center" show_dark=true >}}

<ul role="list" class="max-w-md divide-y divide-default">
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-heading truncate">
                    Neil Sims
                </p>
                <p class="text-sm text-body truncate ">
                    email@flowbite.com
                </p>
            </div>
            <span class="inline-flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                <span class="w-2 h-2 me-1 bg-success rounded-full"></span>
                Available
            </span>
        </div>
    </li>
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-heading truncate">
                    Bonnie Green
                </p>
                <p class="text-sm text-body truncate ">
                    email@flowbite.com
                </p>
            </div>
            <span class="inline-flex items-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                <span class="w-2 h-2 me-1 bg-danger rounded-full"></span>
                Unavailable
            </span>
        </div>
    </li>
</ul>
{{< /example >}}

## Stepper indicator

You can also use the indicators inside of a stepper component when completing a form element.

{{< example class="space-y-8" github="components/indicators.md" show_dark=true >}}

<ol class="flex items-center">
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
            </div>
            <div class="flex w-full bg-base h-0.5"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 1</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
            </div>
            <div class="flex w-full bg-base h-0.5"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
            </div>
            <div class="flex w-full bg-base h-0.5"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-neutral-tertiary rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
            </div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 3</h3>
        </div>
    </li>
</ol>
<ol class="flex items-center">
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand-subtle rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <span class="flex w-3 h-3 bg-brand rounded-full"></span>
            </div>
            <div class="flex w-full bg-base h-0.5"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 1</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand-subtle rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <span class="flex w-3 h-3 bg-brand rounded-full"></span>
            </div>
            <div class="flex w-full bg-base h-0.5"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand-subtle rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <span class="flex w-3 h-3 bg-brand rounded-full"></span>
            </div>
            <div class="flex w-full bg-base h-0.5"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-6">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-neutral-tertiary rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <span class="flex w-3 h-3 bg-heading rounded-full"></span>
            </div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-heading">Step 3</h3>
        </div>
    </li>
</ol>
{{< /example >}}

## Loading indicator

Use this animated loading indicator when content inside of a card is still loading.

{{< example class="space-y-8 flex items-center justify-center" github="components/indicators.md" show_dark=true >}}

<div class="flex items-center justify-center bg-neutral-secondary-soft h-56 w-56 border border-default text-fg-brand-strong text-xs font-medium rounded-base">
    <div class="px-2 py-px ring-1 ring-inset ring-brand-subtle text-fg-brand-strong text-xs font-medium rounded-sm bg-brand-softer animate-pulse">loading...</div>
</div>
{{< /example >}}

## Spinner indicator

Use this animated spinner component inside of a card component that hasn't loaded yet.

{{< example class="space-y-8 flex items-center justify-center" github="components/indicators.md" show_dark=true >}}

<div class="flex items-center justify-center bg-neutral-secondary-soft h-56 w-56 border border-default text-fg-brand-strong text-xs font-medium rounded-base">
    <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 text-neutral-quaternary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
{{< /example >}}

## Indicator position

Use these examples to position the indicator component anywhere relative to the parent element.

{{< example class="flex items-center justify-center space-y-8" github="components/indicators.md" show_dark=true >}}

<div class="relative bg-neutral-secondary-soft h-56 w-56 border border-default text-fg-brand-strong text-xs font-medium rounded-base">
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute -translate-y-1/2 translate-x-1/2 right-1/2">top-center</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute -translate-y-1/2 -translate-x-1/2 right-auto top-0 left-0">top-left</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0">top-right</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2">middle-center</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute -translate-y-1/2 -translate-x-1/2 right-auto left-0 top-2/4">middle-left</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute -translate-y-1/2 translate-x-1/2 left-auto right-0 top-2/4">middle-right</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute translate-y-1/2 translate-x-1/2 bottom-0 right-1/2">bottom-center</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute translate-y-1/2 -translate-x-1/2 right-auto bottom-0 left-0">bottom-left</span>
    <span class="bg-brand-softer text-xs font-medium text-fg-brand text-center p-0.5 ring-1 ring-inset ring-brand-subtle rounded-base px-2 absolute translate-y-1/2 translate-x-1/2 left-auto bottom-0 right-0">bottom-right</span>
</div>
{{< /example >}}

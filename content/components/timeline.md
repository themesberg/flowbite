---
layout: home
title: Tailwind CSS Timeline - Flowbite
description: Get started with the responsive timeline component to show data in a chronological order with support for multiple styles, sizes, and variants
group: components
toc: true

previous: Tabs
previousLink: components/tabs/
next: Toast
nextLink: components/toast/
---

The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more. Get started with multiple vertical timeline styles built with the utility classes from Tailwind CSS and Flowbite.

## Default timeline

Use this responsive Tailwind CSS timeline component to show a series of data entries with a date, title, and description with a vertical line with dots on the left or right side of the wrapper element.

Optionally, you can also add a CTA button to any of the timeline elements.

{{< example id="default-timeline-example" github="components/timeline.md" show_dark=true >}}
<ol class="relative border-s border-default">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time class="text-sm font-normal leading-none text-body">February 2022</time>
        <h3 class="text-lg font-semibold text-heading my-2">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-body">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Learn more
            <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
        </a>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time class="text-sm font-normal leading-none text-body">March 2022</time>
        <h3 class="text-lg font-semibold text-heading my-2">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-body">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time class="mb-1 text-sm font-normal leading-none text-body">April 2022</time>
        <h3 class="text-lg font-semibold text-heading my-2">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-body">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>

{{< /example >}}

## Vertical timeline

Use this vertical timeline component with icons and badges to show a more advanced set of data.

{{< example id="timeline-vertical-example" github="components/timeline.md" show_dark=true >}}
<ol class="relative border-s border-default">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-buffer">
            <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
        </span>
        <time class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">March 13th, 2025</time>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-heading my-2">Flowbite Application UI v2.0.0 <span class="ms-2 bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded">Latest</span></h3>
        <p class="mb-4 text-body">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Zm-4 1h.01v.01H15V5Zm-2 2h.01v.01H13V7Zm2 2h.01v.01H15V9Zm-2 2h.01v.01H13V11Zm2 2h.01v.01H15V13Zm-2 2h.01v.01H13V15Zm2 2h.01v.01H15V17Zm-2 2h.01v.01H13V19Z"/></svg>
            Download ZIP
        </a>
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-buffer">
            <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
        </span>
        <time class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">January 09th, 2025</time>
        <h3 class="my-2 text-lg font-semibold text-heading">Flowbite Figma v1.3.0</h3>
        <p class="text-body">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full -start-3 ring-8 ring-buffer">
            <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
        </span>
        <time class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">October 14th, 2024</time>
        <h3 class="my-2 text-lg font-semibold text-heading">Flowbite Library v1.2.2</h3>
        <p class="text-body">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>

{{< /example >}}

## Stepper timeline

Use this horizontally aligned timeline component to show a series of data in a chronological order.

{{< example id="timeline-stepper-example" github="components/timeline.md" show_dark=true >}}
<ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
            </div>
            <div class="hidden sm:flex w-full bg-quaternary h-px"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <time class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">January 09th, 2025</time>
            <h3 class="text-lg font-semibold text-heading my-2">Flowbite Library v1.0.0</h3>
            <p class="text-body mb-4">Get started with dozens of web components and interactive elements.</p>
            <button type="button" class="text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Read more</button>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
            </div>
            <div class="hidden sm:flex w-full bg-quaternary h-px"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <time class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">March 14th, 2025</time>
            <h3 class="text-lg font-semibold text-heading my-2">Flowbite Library v1.2.0</h3>
            <p class="text-body mb-4">Get started with dozens of web components and interactive elements.</p>
            <button type="button" class="text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Read more</button>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full ring-0 ring-buffer sm:ring-8 shrink-0">
                <svg class="w-3 h-3 text-fg-brand-strong" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
            </div>
            <div class="hidden sm:flex w-full bg-quaternary h-px"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <time class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">September 26th, 2025</time>
            <h3 class="text-lg font-semibold text-heading my-2">Flowbite Library v1.3.0</h3>
            <p class="text-body mb-4">Get started with dozens of web components and interactive elements.</p>
            <button type="button" class="text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Read more</button>
        </div>
    </li>
</ol>

{{< /example >}}

## Activity log

This component can be used to show the timline of a user's activity history inside your application by using an avatar, datetime, description, and links to specific pages.

{{< example id="timeline-activity-log-example" github="components/timeline.md" show_dark=true >}}
<ol class="relative border-s border-default">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-buffer">
            <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        </span>
        <div class="items-center justify-between p-4 bg-primary-soft border border-default rounded-base shadow-xs sm:flex">
            <time class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded sm:order-last mb-1 sm:mb-0">just now</time>
            <div class="text-body"><a href="#" class="font-medium text-heading hover:underline">Bonnie Green</a> moved <a href="#" class="font-medium text-heading hover:underline">Jese Leos</a> to <span class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">Funny Group</span></div>
        </div>
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-buffer">
            <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas Lean image"/>
        </span>
        <div class="p-4 bg-primary-soft border border-default rounded-base shadow-xs">
            <div class="items-center justify-between mb-3 sm:flex">
                <time class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded sm:order-last mb-1 sm:mb-0">2 hours ago</time>
                <div class="text-body">Thomas Lean commented on <a href="#" class="font-medium text-heading hover:underline">Flowbite Pro</a></div>
            </div>
            <div class="p-3 text-xs italic font-normal text-body border border-default-medium rounded-base bg-secondary-medium">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
            <div class="flex items-center space-x-3 mt-4">
                <button type="button" class="text-body bg-secondary-medium box-border border border-default-medium hover:bg-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">View comment</button> 
                <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                    <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/></svg>
                    Reply
                </button>              
            </div>
        </div>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-buffer">
            <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
        </span>
        <div class="items-center justify-between p-4 bg-primary-soft border border-default rounded-base shadow-xs sm:flex">
            <time class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded sm:order-last mb-1 sm:mb-0">3 hours ago</time>
            <div class="text-body"><a href="#" class="font-medium text-heading hover:underline">Bonnie Green</a> moved <a href="#" class="font-medium text-heading hover:underline">Jese Leos</a> to <span class="bg-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">Funny Group</span></div>
        </div>
    </li>
</ol>

{{< /example >}}

## Grouped timeline

Use this component to group multiple data entries inside a single date and show elements like the avatar, title, description, tag and link to a relevant page.

{{< example id="timeline-grouped-example" github="components/timeline.md" show_dark=true >}}
<div class="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mb-4">
    <time class="text-lg font-semibold text-heading">January 12th, 2022</time>
    <ol class="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-4.jpg" alt="Laura Romeros image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Laura Romeros</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-2.jpg" alt="Mike Willi image"/>
                <div>
                    <div class="text-base font-normal text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Mike Willi</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-5.jpg" alt="Jese Leos image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> Top figma designs</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
    </ol>
</div>
<div class="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <time class="text-lg font-semibold text-heading">January 12th, 2022</time>
    <ol class="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-4.jpg" alt="Laura Romeros image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Laura Romeros</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-2.jpg" alt="Mike Willi image"/>
                <div>
                    <div class="text-base font-normal text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Mike Willi</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-5.jpg" alt="Jese Leos image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> Top figma designs</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
    </ol>
</div>

{{< /example >}}

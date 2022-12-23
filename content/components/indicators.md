---
layout: home
title: Tailwind CSS Indicators - Flowbite
description: Show contextual information to your users using alert elements based on Tailwind CSS
group: components
toc: true

previous: forms
previousLink: customize/forms/
next: kbd
nextLink: components/kbd/
---

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Default 

You can also use SVG icons inside the badge elements.

{{< example id="default-example" class="flex items-center space-x-3" github="components/badge.md" show_dark=true >}}
<span class="flex w-3 h-3 bg-gray-200 rounded-full"></span>
<span class="flex w-3 h-3 bg-gray-900 rounded-full"></span>
<span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
<span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
<span class="flex w-3 h-3 bg-red-500 rounded-full"></span>
<span class="flex w-3 h-3 bg-purple-500 rounded-full"></span>
<span class="flex w-3 h-3 bg-indigo-500 rounded-full"></span>
<span class="flex w-3 h-3 bg-yellow-300 rounded-full"></span>
<span class="flex w-3 h-3 bg-teal-500 rounded-full"></span>
{{< /example >}}

## Notification 

You can also use SVG icons inside the badge elements.

{{< example id="notification-example" github="components/badge.md" show_dark=true >}}
<button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  <span class="sr-only">Notifications</span>
  Messages
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">8</div>
</button>
{{< /example >}}


## Status indicator 

You can also use SVG icons inside the badge elements.

{{< example id="status-example" github="components/badge.md" show_dark=true >}}
<div class="relative">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="profile image">
    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
{{< /example >}}


## Badge indicator 

You can also use SVG icons inside the badge elements.

{{< example id="badge-example" github="components/badge.md" show_dark=true >}}
<ul role="list" class="divide-y divide-gray-200 w-96 dark:divide-gray-700">
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Neil Sims
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                </p>
            </div>
            <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                <span class="mr-1 w-2 h-2 bg-green-500 rounded-full"></span>
                Available
            </span>
        </div>
    </li>
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Bonnie Green
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                </p>
            </div>
            <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                <span class="mr-1 w-2 h-2 bg-red-500 rounded-full"></span>
                Unavailable
            </span>
        </div>
    </li>
</ul>
{{< /example >}}

## Stepper indicator 

You can also use SVG icons inside the badge elements.

{{< example id="stepper-example" class="space-y-8" github="components/badge.md" show_dark=true >}}
<ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
        </div>
    </li>
</ol>
<ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0 w-full">
        <div class="flex items-center">
            <div class="flex z-10 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-gray-900 rounded-full dark:bg-gray-300"></span>
            </div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
        </div>
    </li>
</ol>
{{< /example >}}

## Loading indicator 

You can also use SVG icons inside the badge elements.

{{< example id="loading-example" class="space-y-8" github="components/badge.md" show_dark=true >}}
<div class="bg-gray-100 border border-gray-200 rounded-lg w-56 h-56 flex items-center justify-center dark:bg-gray-800 dark:border-gray-700">
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full animate-pulse px-2 dark:bg-blue-900 dark:text-blue-200">loading...</div>
</div>
{{< /example >}}

## Positions

You can also use SVG icons inside the badge elements.

{{< example id="loading-example" class="space-y-8 justify-center items-center flex" github="components/badge.md" show_dark=true >}}
<div class="bg-gray-100 border border-gray-200 rounded-lg w-56 h-56 dark:bg-gray-800 dark:border-gray-700 relative">
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 right-1/2">top-center</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 -translate-x-1/2 right-auto top-0 left-0">top-left</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0">top-right</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2">middle-center</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 -translate-x-1/2 right-auto left-0 top-2/4">middle-left</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto right-0 top-2/4">middle-right</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute translate-y-1/2 translate-x-1/2 bottom-0 right-1/2">bottom-center</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute translate-y-1/2 -translate-x-1/2 right-auto bottom-0 left-0">bottom-left</div>
    <div class="bg-blue-200 text-xs font-medium text-blue-800 text-center p-0.5 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute translate-y-1/2 translate-x-1/2 left-auto bottom-0 right-0">bottom-right</div>
</div>
{{< /example >}}


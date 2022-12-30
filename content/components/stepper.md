---
layout: home
title: Tailwind CSS Stepper - Flowbite
description: Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG using the utility classes from Tailwind CSS
group: components
toc: true

previous: Spinner
previousLink: components/spinner/
next: Tables
nextLink: components/tables/
---

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Default

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="flex items-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base w-full">
    <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <div class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </div>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <div class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <div class="mr-2">2</div>
            Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        </div>
    </li>
    <li class="flex items-center">
        <div class="mr-2">3</div>
        Confirmation
    </li>
</ol>
{{< /example >}}

## Progress

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="flex items-center w-full">
    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </div>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </div>
    </li>
    <li class="flex w-full items-center">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </div>
    </li>
</ol>
{{< /example >}}


## Number & Description

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="sm:flex items-center w-full sm:space-x-8 space-y-4 sm:space-y-0">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
        <div class="flex justify-center items-center w-8 h-8 rounded-full shrink-0 border border-blue-600 dark:border-blue-500">
            1
        </div>
        <div>
            <h3 class="font-medium leading-tight">User info</h3>
            <p class="text-sm">Step details here<p>
        </div>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <div class="flex justify-center items-center w-8 h-8 rounded-full shrink-0 border border-gray-500 dark:border-gray-400">
            2
        </div>
        <div>
            <h3 class="font-medium leading-tight">User info</h3>
            <p class="text-sm">Step details here<p>
        </div>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
        <div class="flex justify-center items-center w-8 h-8 rounded-full shrink-0 border border-gray-500 dark:border-gray-400">
            3
        </div>
        <div>
            <h3 class="font-medium leading-tight">User info</h3>
            <p class="text-sm">Step details here<p>
        </div>
    </li>
</ol>
{{< /example >}}

## Vertical Alerts

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="w-72 space-y-4">
    <li>
        <div id="alert-additional-content-3" class="p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 w-full dark:border-green-800 dark:text-green-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">User info</span>
                <h3 class="font-medium">1. User info</h3>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    </li>
    <li>
        <div id="alert-additional-content-3" class="p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 w-full dark:border-green-800 dark:text-green-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Account info</span>
                <h3 class="font-medium">2. Account info</h3>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    </li>
    <li>
        <div id="alert-additional-content-3" class="p-4 text-blue-700 border border-blue-300 rounded-lg bg-blue-100 dark:bg-gray-800 w-full dark:border-blue-800 dark:text-blue-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Social accounts</span>
                <h3 class="font-medium">3. Social accounts</h3>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    </li>
    <li>
        <div id="alert-additional-content-3" class="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-800 w-full dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Review</span>
                <h3 class="font-medium">4. Review</h3>
            </div>
        </div>
    </li>
        <li>
        <div id="alert-additional-content-3" class="p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-800 w-full dark:border-gray-700 dark:text-gray-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Confirmation</span>
                <h3 class="font-medium">5. Confirmation</h3>
            </div>
        </div>
    </li>
</ol>
{{< /example >}}

## Background

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="flex items-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 sm:p-4 shadow-sm rounded-lg space-x-2 sm:space-x-4">
    <li class="flex items-center text-blue-600 dark:text-blue-500">
        <div class="flex justify-center text-xs mr-2 items-center w-5 h-5 rounded-full shrink-0 border border-blue-600 dark:border-blue-500">
            1
        </div>
        Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        <svg class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center">
        <div class="flex justify-center text-xs mr-2 items-center w-5 h-5 rounded-full shrink-0 border border-gray-500 dark:border-gray-400">
            2
        </div>
        Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
        <svg class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center">
        <div class="flex justify-center text-xs mr-2 items-center w-5 h-5 rounded-full shrink-0 border border-gray-500 dark:border-gray-400">
            3
        </div>
        Review
    </li>
</ol>
{{< /example >}}

## Vertical

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="relative border-l border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">                  
    <li class="mb-10 ml-6">            
        <span class="flex absolute -left-4 justify-center items-center w-8 h-8 bg-green-200 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg aria-hidden="true" class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="leading-tight font-medium">Personal Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ml-6">
        <span class="flex absolute -left-4 justify-center items-center w-8 h-8 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="leading-tight font-medium">Account Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ml-6">
        <span class="flex absolute -left-4 justify-center items-center w-8 h-8 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="leading-tight font-medium">Review</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="ml-6">
        <span class="flex absolute -left-4 justify-center items-center w-8 h-8 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 class="leading-tight font-medium">Confirmation</h3>
        <p class="text-sm">Step details here</p>
    </li>
</ol>
{{< /example >}}

## With content

Use the following SVG element with the `animate-spin` animation class to show a loading animation:

{{< example id="default-spinner-example" github="components/spinner.md" show_dark=true >}}
<ol class="flex items-center w-full mb-4 sm:mb-5">
    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </div>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
        </div>
    </li>
    <li class="flex w-full items-center">
        <div class="flex justify-center items-center w-10 h-10 rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </div>
    </li>
</ol>
<form action="#">
    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4 leading-none">Invoice details</h3>
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username.example" required="">
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div>                        <div>
            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" name="confirm-password" id="confirm-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Next Step: Payment Info
    </button>
</form>
{{< /example >}}
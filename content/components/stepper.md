---
layout: docs
title: Tailwind CSS Stepper - Flowbite
description: Use the stepper component to show the number of steps required to complete a form inside your application based on Tailwind CSS
group: components
toc: true

previous: Spinner
previousLink: components/spinner/
next: Tables
nextLink: components/tables/
---

The stepper component can be used to show a numbered list of steps next to a form component to indicate the progress and number of steps that are required to complete and submit the form data.

There are multiple examples that you can use including horizontal or vertical aligned stepper components, different sizes, styles, and showing icons or numbers all coded with the utility classes from Tailwind CSS.

## Default stepper

Use this example to show a list of form steps with a number and title of the step in a horizontal alignment.

{{< example github="components/stepper.md" show_dark=true >}}

<ol class="flex items-center w-full text-sm font-medium text-center text-body sm:text-base">
    <li class="flex md:w-full items-center text-fg-brand sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-px after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-fg-disabled">
            <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-px after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-fg-disabled">
            <span class="me-2">2</span>
            Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex items-center">
        <span class="me-2">3</span>
        Confirmation
    </li>
</ol>
{{< /example >}}

## Progress stepper

This example can be used to show the progress of the stepper component based only on icons and showing a checkmark when the step has been finished.

{{< example github="components/stepper.md" show_dark=true >}}

<ol class="flex items-center w-full space-x-4">
    <li class="flex w-full items-center text-fg-brand after:content-[''] after:w-full after:h-1 after:border-b after:border-brand-subtle after:border-4 after:inline-block after:ms-4 after:rounded-full">
        <span class="flex items-center justify-center w-10 h-10 bg-brand-softer rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        </span>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-4 after:inline-block  after:ms-4 after:rounded-full">
        <span class="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
        </span>
    </li>
    <li class="flex items-center w-full">
        <span class="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/></svg>
        </span>
    </li>
</ol>
{{< /example >}}

## Detailed stepper

Use this example to show an extra subtitle next to the number and the title of the steppper component based on an ordered list element.

{{< example github="components/stepper.md" show_dark=true >}}
<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
    <li class="flex items-center text-fg-brand space-x-3 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-10 h-10 bg-brand-softer rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        </span>
        <span>
            <h3 class="font-medium leading-tight">User info</h3>
            <p class="text-sm">Step details here</p>
        </span>
    </li>
    <li class="flex items-center text-body space-x-3 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
        </span>
        <span>
            <h3 class="font-medium leading-tight">Company info</h3>
            <p class="text-sm">Step details here</p>
        </span>
    </li>
    <li class="flex items-center text-body space-x-3 rtl:space-x-reverse">
        <span class="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/></svg>
        </span>
        <span>
            <h3 class="font-medium leading-tight">Payment info</h3>
            <p class="text-sm">Step details here</p>
        </span>
    </li>
</ol>

{{< /example >}}

## Vertical stepper

This example can be used to show a list of steps aligned vertically where you can indicate the completed, currently active, and the unexplored steps.

{{< example github="components/stepper.md" show_dark=true >}}
<ol class="space-y-4 w-72">
    <li>
        <div class="w-full p-4 bg-success-soft border border-success-subtle text-fg-success-strong rounded-base" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">User info</span>
                <h3 class="font-medium">1. User info</h3>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 bg-success-soft border border-success-subtle text-fg-success-strong rounded-base" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Account info</span>
                <h3 class="font-medium">2. Account info</h3>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 bg-brand-softer border border-brand-subtle text-fg-brand-strong rounded-base" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Social accounts</span>
                <h3 class="font-medium">3. Social accounts</h3>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 bg-neutral-secondary-soft border border-default text-body rounded-base" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Review</span>
                <h3 class="font-medium">4. Review</h3>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 bg-neutral-secondary-soft border border-default text-body rounded-base" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Confirmation</span>
                <h3 class="font-medium">5. Confirmation</h3>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </div>
        </div>
    </li>
</ol>
{{< /example >}}

## Breadcrumb stepper

This example can be used to show the number of steps similar to how a breadcrumb component looks like by using double chevron icons between the items.

{{< example github="components/stepper.md" show_dark=true >}}
<ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-body bg-neutral-primary-soft border border-default rounded-base shadow-xs sm:p-4 sm:space-x-4 rtl:space-x-reverse">
    <li class="flex items-center text-fg-brand">
        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-brand rounded-full shrink-0">
            1
        </span>
        Personal <span class="hidden sm:inline-flex ms-2">Info</span>
        <svg class="w-5 h-5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/></svg>
    </li>
    <li class="flex items-center">
        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-body rounded-full shrink-0">
            2
        </span>
        Account <span class="hidden sm:inline-flex ms-2">Info</span>
        <svg class="w-5 h-5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/></svg>
    </li>
    <li class="flex items-center">
        <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-body rounded-full shrink-0">
            3
        </span>
        Review
    </li>
</ol>

{{< /example >}}

## Timeline stepper

Use this example to show the number of steps inside a timeline component using icons, title, and subtitle for each step.

{{< example github="components/stepper.md" class="p-4" show_dark=true >}}

<ol class="relative text-body border-s border-default">                  
    <li class="mb-10 ms-7">            
        <span class="absolute flex items-center justify-center w-8 h-8 text-fg-success-strong bg-success-soft rounded-full -start-4 ring-4 ring-buffer">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Personal Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ms-7">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-neutral-tertiary text-body rounded-full -start-4 ring-4 ring-buffer">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Account Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ms-7">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-neutral-tertiary text-body rounded-full -start-4 ring-4 ring-buffer">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Review</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="ms-7">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-neutral-tertiary text-body rounded-full -start-4 ring-4 ring-buffer">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Confirmation</h3>
        <p class="text-sm">Step details here</p>
    </li>
</ol>
{{< /example >}}

## Stepper with form

Use this example to show the stepper component next to a form layout and change the content based on which currently step your are completing.

{{< example github="components/stepper.md" show_dark=true >}}

<ol class="flex items-center w-full space-x-4 mb-8">
    <li class="flex w-full items-center text-fg-brand after:content-[''] after:w-full after:h-1 after:border-b after:border-brand-subtle after:border-4 after:inline-block after:ms-4 after:rounded-full">
        <span class="flex items-center justify-center w-10 h-10 bg-brand-softer rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        </span>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-4 after:inline-block  after:ms-4 after:rounded-full">
        <span class="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>
        </span>
    </li>
    <li class="flex items-center w-full">
        <span class="flex items-center justify-center w-10 h-10 bg-neutral-tertiary rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/></svg>
        </span>
    </li>
</ol>

<form class="max-w-sm">
    <h3 class="mb-6 text-lg font-medium leading-none text-heading">Sign In details</h3>
  <div class="mb-5">
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</label>
  </div>
  <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Next Step: Payment Info</button>
</form>

{{< /example >}}

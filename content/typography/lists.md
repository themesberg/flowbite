---
layout: docs
title: Tailwind CSS Lists - Flowbite
description: Use the list component to show an unordered or ordered list of items based on multiple styles, layouts, and variants built with Tailwind CSS and Flowbite
group: typography
toc: true

previous: Images
previousLink: typography/images/
next: Links
nextLink: typography/links/
---

Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.

## Unordered list

Use this example to create a default unordered list of items using the `list-disc` class.

{{< example github="typography/lists.md" show_dark=true >}}
<h2 class="mb-2 text-lg font-medium text-heading">Password requirements:</h2>
<ul class="max-w-md space-y-1 text-body list-disc list-inside">
    <li>
        At least 10 characters (and up to 100 characters)
    </li>
    <li>
        At least one lowercase character
    </li>
    <li>
        Inclusion of at least one special character, e.g., ! @ # ?
    </li>
</ul>
{{< /example >}}

### Icons

This example can be used to apply custom icons instead of the default bullets for the list items.

{{< example github="typography/lists.md" show_dark=true >}}
<h2 class="mb-2 text-lg font-medium text-heading">Password requirements:</h2>
<ul class="max-w-md space-y-1 text-body list-inside">
    <li class="flex items-center">
         <svg class="w-4 h-4 text-fg-success me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        At least 10 characters
    </li>
    <li class="flex items-center">
         <svg class="w-4 h-4 text-fg-success me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        At least one lowercase character
    </li>
    <li class="flex items-center">
         <svg class="w-4 h-4 text-body me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        At least one special character, e.g., ! @ # ?
    </li>
</ul>
{{< /example >}}

### Nested

Use this example to nested another list of items inside the parent list element.

{{< example github="typography/lists.md" show_dark=true >}}
<ul class="space-y-4 text-body list-disc list-inside">
    <li>
        List item one
        <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>You might feel like you are being really "organized" o</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ol>
    </li>
    <li>
        List item two
        <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>I'm not sure if we'll bother styling more than two levels deep.</li>
            <li>Two is already too much, three is guaranteed to be a bad idea.</li>
            <li>If you nest four levels deep you belong in prison.</li>
        </ul>
    </li>
    <li>
        List item three
        <ul class="ps-5 mt-2 space-y-1 list-decimal list-inside">
            <li>Again please don't nest lists if you want</li>
            <li>Nobody wants to look at this.</li>
            <li>I'm upset that we even have to bother styling this.</li>
        </ul>
    </li>
</ul>
{{< /example >}}

### Unstyled

Use the `list-none` class to disable the list style bullets or numbers.

{{< example github="typography/lists.md" show_dark=true >}}
<h2 class="mb-3 text-lg font-medium text-heading">Password requirements:</h2>
<ul class="max-w-md space-y-2 text-body list-none list-inside">
    <li>
        At least 10 characters (and up to 100 characters)
    </li>
    <li>
        At least one lowercase character
    </li>
    <li>
        Inclusion of at least one special character, e.g., ! @ # ?
    </li>
</ul>
{{< /example >}}

## Ordered list

Use the `<ol>` tag to create an ordered list of items with numbers.

{{< example github="typography/lists.md" show_dark=true >}}
<h2 class="mb-3 text-lg font-medium text-heading">Top students:</h2>
<ol class="max-w-md space-y-2 text-body list-decimal list-inside">
    <li>
        <span class="font-medium text-heading">Bonnie Green</span> with <span class="font-medium text-heading">70</span> points
    </li>
    <li>
        <span class="font-medium text-heading">Jese Leos</span> with <span class="font-medium text-heading">63</span> points
    </li>
    <li>
        <span class="font-medium text-heading">Leslie Livingston</span> with <span class="font-medium text-heading">57</span> points
    </li>
</ol>
{{< /example >}}

### Nested

This example can be used to nest multiple lists into each other.

{{< example github="typography/lists.md" show_dark=true >}}
<ol class="space-y-4 text-body list-decimal list-inside">
   <li>
      List item one
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>You might feel like you are being really "organized" o</li>
         <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
         <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
   </li>
   <li>
      List item two
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>I'm not sure if we'll bother styling more than two levels deep.</li>
         <li>Two is already too much, three is guaranteed to be a bad idea.</li>
         <li>If you nest four levels deep you belong in prison.</li>
      </ul>
   </li>
   <li>
      List item three
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>Again please don't nest lists if you want</li>
         <li>Nobody wants to look at this.</li>
         <li>I'm upset that we even have to bother styling this.</li>
      </ul>
   </li>
</ol>
{{< /example >}}

## Description list

Create a description list by using the `<dl>` tag and set the term and name with the following example.

{{< example github="typography/lists.md" show_dark=true >}}
<dl class="max-w-md text-heading divide-y divide-default">
    <div class="flex flex-col pb-3">
        <dt class="mb-1 text-body">Email address</dt>
        <dd class="text-lg font-medium">yourname@flowbite.com</dd>
    </div>
    <div class="flex flex-col py-3">
        <dt class="mb-1 text-body">Home address</dt>
        <dd class="text-lg font-medium">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
    </div>
    <div class="flex flex-col pt-3">
        <dt class="mb-1 text-body">Phone number</dt>
        <dd class="text-lg font-medium">+00 123 456 789 / +12 345 678</dd>
    </div>
</dl>
{{< /example >}}

## List with icons

Use this example to create a list of items with [custom SVG icons](https://flowbite.com/icons/) instead of the default bullets.

{{< example github="typography/lists.md" show_dark=true >}}
<ul class="space-y-4 text-left text-body">
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
         <svg class="w-4 h-4 text-fg-success shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span>Individual configuration</span>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
         <svg class="w-4 h-4 text-fg-success shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span>No setup, or hidden fees</span>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
         <svg class="w-4 h-4 text-fg-success shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span>Team size: <span class="font-medium text-heading">1 developer</span></span>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
         <svg class="w-4 h-4 text-fg-success shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span>Premium support: <span class="font-medium text-heading">6 months</span></span>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
         <svg class="w-4 h-4 text-fg-success shrink-0 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span>Free updates: <span class="font-medium text-heading">6 months</span></span>
    </li>
</ul>
{{< /example >}}

## Advanced layout

This example can be used to show more details for each list item such as the user's name, email and profile picture.

{{< example github="typography/lists.md" show_dark=true >}}
<ul class="max-w-md divide-y divide-default">
   <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-heading truncate">
               Neil Sims
            </p>
            <p class="text-sm text-body truncate">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-heading">
            $320
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-heading truncate">
               Bonnie Green
            </p>
            <p class="text-sm text-body truncate">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-heading">
            $3467
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-heading truncate">
               Michael Gough
            </p>
            <p class="text-sm text-body truncate">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-heading">
            $67
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-heading truncate">
               Thomas Lean
            </p>
            <p class="text-sm text-body truncate">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-heading">
            $2367
         </div>
      </div>
   </li>
   <li class="pt-3 pb-0 sm:pt-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
         <div class="shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image">
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-heading truncate">
               Lana Byrd
            </p>
            <p class="text-sm text-body truncate">
               email@flowbite.com
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-heading">
            $367
         </div>
      </div>
   </li>
</ul>
{{< /example >}}

## Features list card

Use this example to show a list of features inside a card component.

{{< example github="typography/lists.md" show_dark=true >}}

<div class="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs mx-auto">
    <h5 class="mb-4 text-xl font-medium text-body">Standard plan</h5>
    <div class="flex items-baseline text-heading">
        <span class="text-5xl font-extrabold tracking-tight">$49</span>
        <span class="ms-2 font-medium text-body">/month</span>
    </div>
    <ul role="list" class="space-y-4 my-6">
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
            <span class="text-body">24×7 phone & email support</span>
        </li>
    </ul>
    <button type="button" class="w-full text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Choose plan</button>
</div>

{{< /example >}}

## Horizontal list

Use this example to create a horizontally aligned list of items.

{{< example github="typography/lists.md" show_dark=true >}}
<ul class="flex flex-wrap items-center justify-center text-heading">
    <li>
        <a href="#" class="me-4 hover:underline md:me-6 ">About</a>
    </li>
    <li>
        <a href="#" class="me-4 hover:underline md:me-6">Premium</a>
    </li>
    <li>
        <a href="#" class="me-4 hover:underline md:me-6 ">Campaigns</a>
    </li>
    <li>
        <a href="#" class="me-4 hover:underline md:me-6">Blog</a>
    </li>
    <li>
        <a href="#" class="me-4 hover:underline md:me-6">Affiliate Program</a>
    </li>
    <li>
        <a href="#" class="me-4 hover:underline md:me-6">FAQs</a>
    </li>
    <li>
        <a href="#" class="me-4 hover:underline md:me-6">Contact</a>
    </li>
</ul>
{{< /example >}}



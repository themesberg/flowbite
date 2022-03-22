---
layout: home
title: Tailwind CSS Avatar - Flowbite
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
group: components
toc: true

previous: Accordion
previousLink: components/accordion/
next: Breadcrumbs
nextLink: components/breadcrumb/
---

## Default avatar

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
{{< /example >}}

## Rounded full

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
{{< /example >}}

## With ring

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
{{< /example >}}

## Placeholder icon

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute text-gray-300 top-2 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
{{< /example >}}

## Top active dot

{{< example class="flex space-x-4 dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <div class="relative">
        <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
        <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
    </div>
    <div class="relative">
        <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
        <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
    </div>
{{< /example >}}

## Bottom active dot

{{< example class="flex space-x-4 dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <div class="relative">
        <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
    </div>
    <div class="relative">
        <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
        <span class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
    </div>
{{< /example >}}

## Stacked

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <div class="flex -space-x-4">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-4.jpg" alt="Laura image">
    </div>
{{< /example >}}

## Stacked & CTA

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <div class="flex -space-x-4">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
        <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
        <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
    </div>
{{< /example >}}

## With text

{{< example class="dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <div class="flex items-center space-x-4">
        <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
        <div class="space-y-1 font-medium dark:text-white">
            <h3>Jese Leos</h3>
            <span class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</span>
        </div>
    </div>
{{< /example >}}

## Sizes

{{< example class="flex items-center space-x-6 dark:bg-gray-800" github="components/badge.md" show_dark=true >}}
    <img class="w-6 h-6 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
    <img class="w-8 h-8 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
    <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
    <img class="w-20 h-20 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
    <img class="rounded w-36 h-36" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image">
{{< /example >}}

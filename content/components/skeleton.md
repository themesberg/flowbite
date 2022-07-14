---
layout: home
title: Tailwind CSS Skeleton - Flowbite
description: Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo
group: components
toc: true

previous: Sidebar
previousLink: components/sidebar/
next: Spinner
nextLink: components/spinner/
---

The footer is one of the most underestimated sections of a website being located at the very bottom of every page, however, it can be used as a way to try to convince users to stay on your website if they haven't found the information they've been looking for inside the main content area.

Use these footer sections coded with the utility classes from Tailwind CSS and components from Flowbite to offer valuable information to your users such as the brand's logo, sitemap links, copyright notice, social media profiles, and more.

## Default

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" class="max-w-sm" show_dark=true >}}
<div class="animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
</div>
{{< /example >}}

## Paragraph

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" class="max-w-lg" show_dark=true >}}
<div class="space-y-2.5 animate-pulse">
    <div class="flex items-center w-full space-x-2">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-24"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  w-full"></div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-24"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[400px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  w-full"></div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-24"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[440px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-32"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-24"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[360px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600  w-full"></div>
    </div>
</div>
{{< /example >}}

## Card

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" show_dark=true >}}
<div class="max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 animate-pulse dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4 space-x-3">
        <svg class="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
        <div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
</div>
{{< /example >}}

## Video

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" show_dark=true >}}
    <div class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg dark:bg-gray-700 animate-pulse">
        <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
    </div>
{{< /example >}}

## Blog post

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" show_dark=true >}}
<div class="space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center animate-pulse">
    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
</div>
{{< /example >}}

## Testimonial

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" show_dark=true >}}
<div class="animate-pulse">
    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
    <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
    <div class="flex items-center justify-center mt-4">
        <svg class="w-10 h-10 mr-2 text-gray-200 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
        <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
        <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
</div>
{{< /example >}}

## Chart widget

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" show_dark=true >}}
<div class="max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 animate-pulse dark:border-gray-700">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
    <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-baseline mt-4 space-x-6">
        <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div class="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div class="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div class="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
    </div>
</div>
{{< /example >}}


## List

Use this footer component to show a copyright notice and some helpful website links.

{{< example id="default-footer-example" github="components/footer.md" class="p-2" show_dark=true >}}
<div class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 md:p-6 animate-pulse dark:border-gray-700">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
</div>
{{< /example >}}





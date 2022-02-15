---
layout: home
title: Tailwind CSS Carousel - Flowbite
description: Get started with the responsive timeline component to show data in a chronological order with support for multiple styles, sizes, and variants
group: components
toc: true

previous: Pagination
previousLink: components/pagination/
next: Progress
nextLink: components/progress/
---

## Default slider

{{< example github="components/carousel.md" >}}
<div id="default-carousel" class="relative" data-carousel="slide">
    <div class="overflow-hidden relative h-96 rounded-lg">
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-3xl font-semibold text-white -translate-x-1/2 -translate-y-1/2">First Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-1.png" class="block w-full" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-3xl font-semibold text-white -translate-x-1/2 -translate-y-1/2">Second Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-2.png" class="block w-full" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-3xl font-semibold text-white -translate-x-1/2 -translate-y-1/2">Third Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-3.png" class="block w-full" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <span class="absolute top-1/2 left-1/2 text-3xl font-semibold text-white -translate-x-1/2 -translate-y-1/2">Fourth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-4.png" class="block w-full" alt="...">
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-3xl font-semibold text-white -translate-x-1/2 -translate-y-1/2">Fifth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-5.png" class="block w-full" alt="...">
        </div>
    </div>
    <div class="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group" data-carousel-prev>
        <button class="inline-flex justify-center items-center w-10 h-10 bg-white bg-opacity-30 rounded-full group-hover:bg-opacity-50" type="button">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        <span class="hidden">Previous</span>
        </button>
    </div>
    <div class="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group" data-carousel-next>
        <button class="inline-flex justify-center items-center w-10 h-10 bg-white bg-opacity-30 rounded-full group-hover:bg-opacity-50" type="button">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        <span class="hidden">Next</span>
        </button>
    </div>
</div>
{{< /example >}}

---
layout: home
title: Tailwind CSS Timeline - Flowbite
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
    <div class="overflow-hidden relative h-96">
        <div class="absolute inset-0 transition-all duration-500 ease-in-out transform translate-x-0" data-carousel-item="active">
            <img src="https://placekitten.com/800/400" class="d-block w-100" alt="...">
        </div>
        <div class="absolute inset-0 transition-all duration-500 ease-in-out transform translate-x-full" data-carousel-item="">
            <img src="https://placekitten.com/801/400" class="d-block w-100" alt="...">
        </div>
        <div class="absolute inset-0 transition-all duration-500 ease-in-out transform translate-x-full" data-carousel-item="">
            <img src="https://placekitten.com/802/400" class="d-block w-100" alt="...">
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

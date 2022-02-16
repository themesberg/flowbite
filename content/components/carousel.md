---
layout: home
title: Tailwind CSS Carousel Slider - Flowbite
description: Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options
group: components
toc: true
requires_js: true

previous: Card
previousLink: components/card/
next: Dropdown
nextLink: components/dropdowns/
---

The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators based on the JavaScript object from Flowbite.

## Default slider

The carousel component can be initialized by using the `data-carousel={static|slide}` data attribute and by applying a unique `id` attribute to the parent element.

- `data-carousel="static"` to prevent the carousel sliding by default
- `data-carousel="slide"` to infinitely cycle through the items

You can add as many carousel items as you want, but make sure that you add the `data-carousel-item` data attribute to each of them and set a single item to active by applying the `active` value to the data attribute.

Use the `duration-*` and the animation classes from Tailwind CSS to apply custom effects to the carousel items and don't forget to set the `hidden` class by default to prevent flickering.

{{< example github="components/carousel.md" >}}
<div id="default-carousel" class="relative">

    <!-- Carousel wrapper -->
    <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-1.png" class="block w-full" alt="...">
        </div>

        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Second Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-2.png" class="block w-full" alt="...">
        </div>

        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Third Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-3.png" class="block w-full" alt="...">
        </div>

        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fourth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-4.png" class="block w-full" alt="...">
        </div>

        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fifth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-5.png" class="block w-full" alt="...">
        </div>
    </div>

    <!-- Slider indicators -->
    <div class="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 bg-white rounded-full dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <!-- Slider controls -->
    <button type="button" class="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## Controls

Use the `data-carousel-prev` and `data-carousel-next` data attribute to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the classes from Tailwind CSS anyhow you want.

{{< example github="components/carousel.md" >}}
<div id="controls-carousel" class="relative" data-carousel="static">

    <!-- Carousel wrapper -->
    <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-1.png" class="block w-full" alt="...">
        </div>

        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Second Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-2.png" class="block w-full" alt="...">
        </div>

        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Third Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-3.png" class="block w-full" alt="...">
        </div>

        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fourth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-4.png" class="block w-full" alt="...">
        </div>

        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fifth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-5.png" class="block w-full" alt="...">
        </div>
    </div>

    <!-- Slider controls -->
    <button type="button" class="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## Indicators

Show the carousel indicators by adding the `data-carousel-slide-to={position}` to any number or style of indicator elements where the value equals the position of the slider element.

{{< example github="components/carousel.md" >}}
<div id="indicators-carousel" class="relative" data-carousel="static">

    <!-- Carousel wrapper -->
    <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-1.png" class="block w-full" alt="...">
        </div>

        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Second Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-2.png" class="block w-full" alt="...">
        </div>

        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Third Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-3.png" class="block w-full" alt="...">
        </div>

        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fourth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-4.png" class="block w-full" alt="...">
        </div>

        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fifth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-5.png" class="block w-full" alt="...">
        </div>
    </div>

    <!-- Slider indicators -->
    <div class="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 bg-white rounded-full dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <!-- Slider controls -->
    <button type="button" class="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## Animation

You can easily customize the duration and animation style of the carousel component by using the `duration-*` and `ease-*` utility classes from Tailwind CSS.

{{< example github="components/carousel.md" >}}
<div id="animation-carousel" class="relative" data-carousel="static">

    <!-- Carousel wrapper -->
    <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">

         <!-- Item 1 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-1.png" class="block w-full" alt="...">
        </div>

        <!-- Item 2 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Second Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-2.png" class="block w-full" alt="...">
        </div>

        <!-- Item 3 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Third Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-3.png" class="block w-full" alt="...">
        </div>

        <!-- Item 4 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fourth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-4.png" class="block w-full" alt="...">
        </div>

        <!-- Item 5 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="">
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">Fifth Slide</span>
            <img src="/docs/images/gradients/mesh-gradient-5.png" class="block w-full" alt="...">
        </div>
    </div>

    <!-- Slider controls -->
    <button type="button" class="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button type="button" class="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

<!-- ## JavaScript

Alternatively to the data attributes, you can also choose to initialise a new carousel component based on the `new Carousel(id, options)` object constructor and access the public methods.

Here's an example:

```javascript
const carousel = new Carousel('carousel-id', {
    interval: 2000 // by default 3000
})
```

Use the `nextSlide()` and `prevSlide()` public methods on the carousel object to jump to the left or right carousel slide item based on the position of the current active item.

```javascript
// goes to the next (right) slide
carousel.nextSlide()

// goes to the previous (left) slide
carousel.prevSlide()
```

Use the `slideTo(position)` public method to jump to the carousel slide item with the specified position.

```javascript
// jumps to the 3rd position (position starts from 0)
carousel.slideTo(2)
```

Use the `cycle(duration)` method to start an automated cycling where the duration is the miliseconds of time between each slide and the `pause()` method to clear the cycle event.

```javascript
// starts or resumes the carousel cycling (automated sliding)
carousel.cycle()

// pauses the cycling (automated sliding)
carousel.pause()
``` -->
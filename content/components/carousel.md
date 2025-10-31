---
layout: docs
title: Tailwind CSS Carousel - Flowbite
description: Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options
group: components
toc: true
requires_js: true

previous: Card
previousLink: components/card/
next: Chat bubble
nextLink: components/chat-bubble/
---

The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators based on the JavaScript object from Flowbite.

## Default slider

The carousel component can be initialized by using the `data-carousel={static|slide}` data attribute and by applying a unique `id` attribute to the parent element.

-   `data-carousel="static"` to prevent the carousel sliding by default
-   `data-carousel="slide"` to infinitely cycle through the items

You can add as many carousel items as you want, but make sure that you add the `data-carousel-item` data attribute to each of them and set a single item to active by applying the `active` value to the data attribute.

Use the `duration-*` and the animation classes from Tailwind CSS to apply custom effects to the carousel items and don't forget to set the `hidden` class by default to prevent flickering.

{{< example github="components/carousel.md" show_dark=true >}}

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-base md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## Controls

Use the `data-carousel-prev` and `data-carousel-next` data attribute to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the classes from Tailwind CSS anyhow you want.

{{< example github="components/carousel.md" show_dark=true >}}

<div id="controls-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-base md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## Indicators

Show the carousel indicators by adding the `data-carousel-slide-to={position}` to any number or style of indicator elements where the value equals the position of the slider element.

{{< example github="components/carousel.md" show_dark=true >}}

<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-base md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## Animation

You can easily customize the duration and animation style of the carousel component by using the `duration-*` and `ease-*` utility classes from Tailwind CSS.

{{< example github="components/carousel.md" show_dark=true >}}

<div id="animation-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-base md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
{{< /example >}}

## JavaScript behaviour

Use the **Carousel** class from Flowbite to create an object that you can use to apply custom styles, change the active slide item, set callback functions directly from JavaScript.

### Object parameters

Pass the object parameters for the Carousel object to set the carousel items and options.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="text-heading bg-neutral-secondary-soft">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Parameter
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Required
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">carouselElement</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Parent HTML element of the carousel component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">items</code>
              </td>
              <td class="px-6 py-4">
                  Array
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Pass an array of carousel item objects including the position and the element.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">options</code>
              </td>
              <td class="px-6 py-4">
                Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Pass an object of options to set the interval, indicators, and callback functions.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">instanceOptions</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                   Object of options that allows you to set a custom ID for the instance that is being added to the <a href="https://flowbite.com/docs/getting-started/javascript/#instance-options" class="underline hover:no-underline">Instance Manager</a> and whether to override or not an existing instance.
                </td>
            </tr>
      </tbody>
  </table>
</div>

### Options

Use these options for the Carousel object to set the default position, interval, indicators, custom styles, and callback functions.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Option
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">defaultPosition</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the default active slider item based on its position (starts from [0-x]).
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">interval</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the interval duration in milliseconds when the carousel is cycling.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">indicators</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Array
              </td>
              <td class="px-6 py-4">
                 An optional object of indicator elements and custom classes.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onNext</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the next carousel item has been shown.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onPrev</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the previous carousel item has been shown.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onChange</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the position of the carousel item has been changed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the following methods on the Carousel object to programmatically manipulate the behaviour.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="px-6 py-3">
                  Method
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">next()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to go to the next slide of the carousel component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">prev()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to go to the previous slide of the carousel component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">slideTo(position)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to go the carousel with the position that you set as a parameter.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">cycle()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to start cycling the carousel component based on the default interval duration.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">pause()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to stop the automatic cycling of the carousel component.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">getItem(position)</code>
              </td>
              <td class="px-6 py-4">
                  Get the carousel item based on the position number that you set as a parameter.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">getActiveItem()</code>
              </td>
              <td class="px-6 py-4">
                  Get the current active carousel item.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnNext(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the next carousel item has been shown.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnPrev(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the previous carousel item has been shown.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnChange(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the the slide item inside the carousel has been changed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following example to learn how to programmatically create a new Carousel object by passing the parameters, using the methods, and the callback functions.

{{< code lang="javascript" file="carousel.js" icon="file" >}}
const carouselElement = document.getElementById('carousel-example');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4'),
    },
];

// options with default values
const options = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3'),
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4'),
            },
        ],
    },

    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: () => {
        console.log('previous slider item is shown');
    },
    onChange: () => {
        console.log('new slider item has been shown');
    },
};

// instance options object
const instanceOptions = {
  id: 'carousel-example',
  override: true
};
{{< /code >}}

Create a new carousel object using the options set above.

{{< code lang="javascript" file="carousel.js" icon="file" >}}
import { Carousel } from 'flowbite';

const carousel = new Carousel(carouselElement, items, options, instanceOptions);
{{< /code >}}

Use the `next()` and `prev()` public methods on the carousel object to jump to the left or right carousel slide item based on the position of the current active item.

{{< code lang="javascript" file="carousel.js" icon="file" >}}
// goes to the next (right) slide
carousel.next();

// goes to the previous (left) slide
carousel.prev();
{{< /code >}}

Use the `slideTo(position)` public method to jump to the carousel slide item with the specified position.

{{< code lang="javascript" file="carousel.js" icon="file" >}}
// jumps to the 3rd position (position starts from 0)
carousel.slideTo(2);
{{< /code >}}

Use the `cycle()` method to start an automated cycling where the duration is the milliseconds of time between each slide and the `pause()` method to clear the cycle event.

{{< code lang="javascript" file="carousel.js" icon="file" >}}
// starts or resumes the carousel cycling (automated sliding)
carousel.cycle();

// pauses the cycling (automated sliding)
carousel.pause();
{{< /code >}}

### HTML Markup

Here is an example of the HTML markup that you can use for the JavaScript example above. Please note that you should use the `hidden` class from Tailwind CSS to hide the carousel items by default.

{{< code lang="html" file="carousel.html" icon="file" >}}
<div id="carousel-example" class="relative w-full">
    <!-- Carousel wrapper -->
    <div
        class="relative h-56 overflow-hidden rounded-base sm:h-64 xl:h-80 2xl:h-96"
    >
        <!-- Item 1 -->
        <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
            <img
                src="/docs/images/carousel/carousel-1.svg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
            />
        </div>
        <!-- Item 2 -->
        <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
            <img
                src="/docs/images/carousel/carousel-2.svg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
            />
        </div>
        <!-- Item 3 -->
        <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
            <img
                src="/docs/images/carousel/carousel-3.svg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
            />
        </div>
        <!-- Item 4 -->
        <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
            <img
                src="/docs/images/carousel/carousel-4.svg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
            />
        </div>
    </div>
    <!-- Slider indicators -->
    <div
        class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse"
    >
        <button
            id="carousel-indicator-1"
            type="button"
            class="h-3 w-3 rounded-base"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            id="carousel-indicator-2"
            type="button"
            class="h-3 w-3 rounded-base"
            aria-current="false"
            aria-label="Slide 2"
        ></button>
        <button
            id="carousel-indicator-3"
            type="button"
            class="h-3 w-3 rounded-base"
            aria-current="false"
            aria-label="Slide 3"
        ></button>
        <button
            id="carousel-indicator-4"
            type="button"
            class="h-3 w-3 rounded-base"
            aria-current="false"
            aria-label="Slide 4"
        ></button>
    </div>
    <!-- Slider controls -->
    <button
        id="data-carousel-prev"
        type="button"
        class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    >
        <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
            <svg
                class="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                />
            </svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button
        id="data-carousel-next"
        type="button"
        class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
    >
        <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
        >
            <svg
                class="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                />
            </svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
{{< /code >}}

If you want to set trigger the next or previous slide item for the any button, just add some event listeners and call the `next()` and `prev()` methods on the Carousel object.

{{< code lang="javascript" file="carousel.js" icon="file" >}}
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Carousel class, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="carousel.ts" icon="file" >}}
import { Carousel } from 'flowbite';
import type {
    CarouselItem,
    CarouselOptions,
    CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';

const carouselElement: HTMLElement = document.getElementById('carousel-example');

const items: CarouselItem[] = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4'),
    },
];

// object options with default values
const options: CarouselOptions = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3'),
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4'),
            },
        ],
    },

    // callback functions
    onNext: () => {
        console.log('next slider item is shown');
    },
    onPrev: () => {
        console.log('previous slider item is shown');
    },
    onChange: () => {
        console.log('new slider item has been shown');
    },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'carousel-example',
  override: true
};

const carousel: CarouselInterface = new Carousel(carouselElement, items, options, instanceOptions);

carousel.cycle();

// set event listeners for prev and next buttons
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');

$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});
{{< /code >}}

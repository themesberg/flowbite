---
layout: home
title: Cards
description: Get started with pre-built Tailwind CSS card elements for your web project
group: components
toc: true
---

## Default example

Use the following simple card with a title and description.

{{< example >}}
<a href="#" class="block p-6 bg-white hover:bg-gray-100 shadow-md border border-gray-200 rounded-lg max-w-sm">
    <h3 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h3>
    <p class="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
{{< /example >}}

## Card with action button

Use the following example of a card element if you also want to have an action button.

{{< example >}}
<div class="bg-white p-6 shadow-md border border-gray-200 rounded-lg max-w-sm">
    <a href="#">
        <h3 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h3>
    </a>
    <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
        Read more
        <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div>
{{< /example >}}

## Card with image

You can use the following example of a card element with an image for blog posts, user cards, and many more.

{{< example >}}
<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="blog image" />
    </a>
    <div class="p-5">
        <a href="#">
            <h3 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h3>
        </a>
        <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            Read more
            <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
{{< /example >}}

## Horizontal card

If you want to spice up your cards you can use the following card which has its child elements aligned horizontally.

{{< example >}}
<a href="#" class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white hover:bg-gray-100 border shadow-md items-center">
    <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg">
    <div class="p-4 flex flex-col justify-between leading-normal">
        <h3 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h3>
        <p class="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
{{< /example >}}
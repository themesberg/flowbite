---
layout: home
title: Tailwind CSS Tooltip - Flowbite
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
group: components
toc: true
requires_js: true

previous: Toast
previousLink: components/toast/

next: Datepicker
nextLink: plugins/datepicker/
---

Flowbite allows you to use the Tailwind CSS tooltip component to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

Before continuing, make sure that you have the <a href="{{< ref "getting-started/quickstart" >}}" rel="nofollow" target="_blank">Flowbite JavaScript file</a> included in your project in order to make the tooltip component work.

## Using tooltips

To get started with using tooltips all you need to do is add the `data-tooltip-target="{elementId}"` data attribute to an element where `elementId` is the id of the tooltip component. In the following example you can see the button that will trigger the `tooltip-default` element to be shown when hovered or focused.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" >}}
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `data-tooltip-style="{light|dark}"` data attribute.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" >}}
<!-- Light style tooltip -->
<button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Light tooltip</button>
<div id="tooltip-light" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Dark style tooltip -->
<button data-tooltip-target="tooltip-dark" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dark tooltip</button>
<div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `data-tooltip-placement="{top|right|bottom"left}"` data attribute.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" >}}
<!-- Show tooltip on top -->
<button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip top</button>
<div id="tooltip-top" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on top
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on right -->
<button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip right</button>
<div id="tooltip-right" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on right
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on bottom -->
<button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip bottom</button>
<div id="tooltip-bottom" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on bottom
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on left -->
<button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip left</button>
<div id="tooltip-left" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip on left
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Triggering

You can choose the triggering event by using the `data-tooltip-trigger="{hover|click}"` data attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `hover`.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" >}}
<!-- Show tooltip on hover -->
<button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip hover</button>
<div id="tooltip-hover" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on click -->
<button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip click</button>
<div id="tooltip-click" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Animation

You can set tooltip animation styles by using the transition utility classes from Tailwind CSS. Make sure that you add `transition-opacity` and `duration-{x}` to set the animation duration.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" >}}
<button data-tooltip-target="tooltip-animation" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Animated tooltip</button>
<div id="tooltip-animation" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Disable arrow

You can also disable the tooltip arrow by not including the `data-popper-arrow` element.

{{< example class="dark:bg-gray-800" github="components/tooltips.md" >}}
<button data-tooltip-target="tooltip-no-arrow" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-no-arrow" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
</div>
{{< /example >}}

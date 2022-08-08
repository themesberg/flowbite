---
layout: home
title: Tailwind CSS Popover - Flowbite
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
group: components
toc: true
requires_js: true

previous: Toast
previousLink: components/toast/

next: Input Field
nextLink: forms/input-field/
---

Flowbite allows you to use the Tailwind CSS tooltip component to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

Before continuing, make sure that you have the <a href="{{< ref "getting-started/quickstart" >}}" rel="nofollow">Flowbite JavaScript file</a> included in your project in order to make the tooltip component work.

## Default popover

To get started with using tooltips all you need to do is add the `data-popover-target="{elementId}"` data attribute to an element where `elementId` is the id of the tooltip component. In the following example you can see the button that will trigger the `popover-default` element to be shown when hovered or focused.

{{< example id="default-popover-example" class="flex justify-center pt-24" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
<div id="popover-default" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## User profile

{{< example id="popover-user-profile-example" class="flex justify-center pt-48" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-user-profile" data-popover-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
<div id="popover-user-profile" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="p-3">
        <div class="flex justify-between items-center mb-2">
            <a href="#">
                <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos">
            </a>
            <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
            </div>
        </div>
        <p class="text-base font-semibold leading-none text-gray-900">
            <a href="#">Jese Leos</a>
        </p>
        <p class="mb-3 text-sm font-normal text-gray-500">
            <a href="#" class="hover:underline">@jeseleos</a>
        </p>
        <p class="mb-4 text-sm font-light text-gray-500">Open-source contributor. Building <a href="#" class="text-blue-600 hover:underline">flowbite.com</a>.</p>
        <ul class="flex text-sm font-light text-gray-500">
            <li class="mr-2">
                <a href="#" class="hover:underline">
                    <span class="font-semibold text-gray-900">799</span>
                    <span class="text-gray-500">Following</span>
                </a>
            </li>
            <li>
                <a href="#" class="hover:underline">
                    <span class="font-semibold text-gray-900">3,758</span>
                    <span class="text-gray-500">Followers</span>
                </a>
            </li>
        </ul>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Image popover

{{< example id="popover-image-example" class="flex justify-center pt-64" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-image" data-popover-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Description popover</button>
<div id="popover-image" role="tooltip" class="inline-block absolute invisible z-10 w-96 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="grid grid-cols-5">
        <div class="col-span-3 p-3">
            <div class="space-y-2">
                <h3 class="font-semibold text-gray-900">About Italy</h3>
                <p>Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
                <a href="#" class="flex items-center font-medium text-blue-600 hover:text-blue-700">Read more <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
            </div>
        </div>
        <img src="/docs/images/popovers/italy.png" class="col-span-2 h-full" alt="Italy map" />
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Description popover

{{< example id="popover-description-example" class="flex justify-center pt-96" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-description" data-popover-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Description popover</button>
<div id="popover-description" role="tooltip" class="inline-block absolute invisible z-10 w-72 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="p-3 space-y-2">
        <h3 class="font-semibold text-gray-900">Activity growth - Incremental</h3>
        <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
        <h3 class="font-semibold text-gray-900">Calculation</h3>
        <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
        <a href="#" class="flex items-center font-medium text-blue-600 hover:text-blue-700">Read more <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Progress popover

{{< example id="popover-description-example" class="flex justify-center pt-96" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-description" data-popover-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Description popover</button>
<div id="popover-description" role="tooltip" class="inline-block absolute invisible z-10 w-72 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="p-3 space-y-2">
        <h3 class="font-semibold text-gray-900">Available storage</h3>
        <p>This server has <span class="font-semibold text-gray-900">30</span> of <span class="font-semibold text-gray-900">150 GB</span> of block storage remaining.</p>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div class="bg-red-600 h-2.5 rounded-full" style="width: 85%"></div>
        </div>
        <a href="#" class="flex items-center font-medium text-blue-600 hover:text-blue-700">Upgrade now <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `data-popover-placement="{top|right|bottom"left}"` data attribute.

{{< example id="popover-placement-example" class="flex justify-center py-24 space-x-4" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-top" data-popover-placement="top" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Top popover</button>
<div id="popover-top" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover top</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
<button data-popover-target="popover-right" data-popover-placement="right" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Right popover</button>
<div id="popover-right" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover right</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
<button data-popover-target="popover-bottom" data-popover-placement="bottom" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Bottom popover</button>
<div id="popover-bottom" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover bottom</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
<button data-popover-target="popover-left" data-popover-placement="left" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Left popover</button>
<div id="popover-left" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover left</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Triggering

You can choose the triggering event by using the `data-popover-trigger="{hover|click}"` data attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `hover`.

{{< example id="popover-triggering-example" class="pt-24" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-hover" data-popover-trigger="hover" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hover popover</button>
<div id="popover-hover" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover hover</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>

<button data-popover-target="popover-click" data-popover-trigger="click" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Click popover</button>
<div id="popover-click" role="tooltip" class="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-700">
    <div class="py-2 px-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover click</h3>
    </div>
    <div class="py-2 px-3">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>
{{< /example >}}

## Animation

You can set tooltip animation styles by using the transition utility classes from Tailwind CSS. Make sure that you add `transition-opacity` and `duration-{x}` to set the animation duration.

{{< example id="popover-animation-example" class="pt-8" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-animation" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Animated tooltip</button>
<div id="popover-animation" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="popover-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Disable arrow

You can also disable the tooltip arrow by not including the `data-popper-arrow` element.

{{< example id="popover-disable-arrow-example" class="pt-8" github="components/popover.md" show_dark=true >}}
<button data-popover-target="popover-no-arrow" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="popover-no-arrow" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
</div>
{{< /example >}}

## JavaScript behaviour

The **Tooltip** class from Flowbite can be used to create an object that will show a tooltip element relative to the main trigger element, such as a button, based on the parameters, options, and methods that you provide.

### Object parameters

Initialize a Tooltip object with the object parameters including the trigger element, the tooltip content element, and extra options to set the positioning and offsets of the tooltip.

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="py-3 px-6">
                    Parameter
                </th>
                <th scope="col" class="py-3 px-6">
                    Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Required
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">targetEl</code>
                </td>
                <td class="py-4 px-6">
                    Element
                </td>
                <td class="py-4 px-6">
                    Required
                </td>
                <td class="py-4 px-6">
                    Apply the tooltip content element to show and hide it either using the methods or the hover or click status of the trigger element.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">triggerEl</code>
                </td>
                <td class="py-4 px-6">
                    Element
                </td>
                <td class="py-4 px-6">
                    Required
                </td>
                <td class="py-4 px-6">
                    Set an element to trigger the tooltip when clicking or hovering (ie. a button, text).
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">options</code>
                </td>
                <td class="py-4 px-6">
                    Object
                </td>
                <td class="py-4 px-6">
                    Optional
                </td>
                <td class="py-4 px-6">
                    Use the options parameter to set the positioning of the tooltip element, trigger type, offsets, and more.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Options

Use the following options as the third parameter for the Tooltip class to set the positioning, offset, and the trigger type (hover or click) for the tooltip element.

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="py-3 px-6">
                    Option
                </th>
                <th scope="col" class="py-3 px-6">
                    Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">placement</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    String
                </td>
                <td class="py-4 px-6">
                    Set the position of the tooltip element relative to the trigger element choosing from <code class="text-purple-600 dark:text-purple-400">top|right|bottom|left</code>.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">triggerType</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    String
                </td>
                <td class="py-4 px-6">
                    Set the event type that will trigger the tooltip content choosing between <code class="text-purple-600 dark:text-purple-400">hover|click</code>.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">onHide</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    Function
                </td>
                <td class="py-4 px-6">
                    Set a callback function when the tooltip is hidden.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">onShow</code>
                </td>
                <td class="py-4 px-6 font-medium">
                    Function
                </td>
                <td class="py-4 px-6">
                    Set a callback function when the tooltip is shown.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the methods from the Tooltip object to programatically show or hide the tooltip from JavaScript.

<div class="overflow-x-auto relative my-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="py-3 px-6">
                    Method
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">show()</code>
                </td>
                <td class="py-4 px-6">
                    Use this method on the Tooltip object to show the tooltip content.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 px-6 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">hide()</code>
                </td>
                <td class="py-4 px-6">
                    Use this method on the Tooltip object to hide the tooltip content.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Tooltip object.

First of all, set the target element as the tooltip itself and the trigger element which can be a button or text element.

After that you can also set the options object to change the placement and trigger type of the tooltip, alongside with the callback functions.

```javascript
// set the tooltip content element
const targetEl = document.getElementById('tooltipContent');

// set the element that trigger the tooltip using hover or click
const triggerEl = document.getElementById('tooltipButton');

// options with default values
const options = {
  placement: 'bottom',
  triggerType: 'hover',
  onHide: () => {
      console.log('tooltip is shown');
  },
  onShow: () => {
      console.log('tooltip is hidden');
  }
};
```

Create a new Tooltip object based on the options above.

```javascript
/*
* targetEl: required
* triggerEl: required
* options: optional
*/
const tooltip = new Tooltip(targetEl, triggerEl, options);
```

Use the `show` and `hide` methods on the Tooltip object to programatically show and hide the tooltip element using JavaScript.

```javascript
// show the tooltip
tooltip.show();

// hide the tooltip
tooltip.hide();
```

### HTML Markup

Use the following HTML code for the JavaScript example above.

```html
<button id="tooltipButton" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltipContent" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="popover-arrow" data-popper-arrow></div>
</div>
```
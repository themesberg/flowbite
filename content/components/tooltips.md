---
layout: home
title: Tailwind CSS Tooltip - Flowbite
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or clicking on an element
group: components
toc: true
requires_js: true

previous: Tables
previousLink: components/tables
---

FlowBite includes custom styles using Tailwind CSS and Tippy JS to enable tooltips that can be shown when hovering or clicking on an element powered by data attributes.

## Using tooltips

Apply the `data-tooltip` data attribute to any element and the content inside will be applied as the tooltip text.

{{< example >}}
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="tooltip z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 transition">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Placement

You can also set the positioning of the tooltips by using the `data-tippy-placement={placement}` data attribute.

{{< example >}}
<button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip top</button>
<div id="tooltip-top" role="tooltip" class="tooltip z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 transition">
    Tooltip on top
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip right</button>
<div id="tooltip-right" role="tooltip" class="tooltip z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 transition">
    Tooltip on right
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip bottom</button>
<div id="tooltip-bottom" role="tooltip" class="tooltip z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 transition">
    Tooltip on bottom
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip left</button>
<div id="tooltip-left" role="tooltip" class="tooltip z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 transition">
    Tooltip on left
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Delay

You can also apply a delay before the tooltip shows up using the `data-tippy-delay={amount}`. The following example applies a one second delay to the tooltip.

{{< example >}}
<button data-tippy-content="Tooltip Content" data-tippy-delay="1000" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Default tooltip</button>
{{< /example >}}

## Animation

You can also use an animation for the tooltips by using the `data-tippy-animation="scale"` or `data-tippy-animation="fade"` data attributes.

{{< example >}}
<button data-tippy-content="Tooltip Content" data-tippy-animation="scale" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Default tooltip</button>
<button data-tippy-content="Tooltip Content" data-tippy-animation="fade" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Default tooltip</button>
{{< /example >}}

## Disable arrow

You can also use tooltips without the arrow styling by using the `data-tippy-arrow="false"` data attribute.

{{< example >}}
<button data-tippy-content="Tooltip Content" data-tippy-arrow="false" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Default tooltip</button>
{{< /example >}}

## Additional options

Learn more about what options you can apply using Tailwind CSS and the tooltip plugin on <a href="https://atomiks.github.io/tippyjs/v6/all-props/" target="_blank">Tippy.js</a>.
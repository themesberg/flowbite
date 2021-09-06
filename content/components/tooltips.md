---
layout: home
title: Tooltips
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or clicking on an element
group: components
toc: true
---

FlowBite includes custom styles using Tailwind CSS and Tippy JS to enable tooltips that can be shown when hovering or clicking on an element powered by data attributes.

## Using tooltips

If you want to use tooltips, make sure that you have **Tippy JS** included in your project. Learn how to do that by reading the official guide on <a href="https://atomiks.github.io/tippyjs/v6/getting-started/" target="_blank">Tippy JS</a>. 

Apply the `data-tippy-content` data attribute to any element and the content inside will be applied as the tooltip text.

{{< example >}}
<button data-tippy-content="Tooltip Content" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Default tooltip</button>
{{< /example >}}

## Positioning

You can also set the positioning of the tooltips by using the `data-tippy-placement={placement}` data attribute.

{{< example >}}
<button data-tippy-content="Tooltip placement top" data-tippy-placement="top" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip top</button>
<button data-tippy-content="Tooltip placement right" data-tippy-placement="right" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip right</button>
<button data-tippy-content="Tooltip placement bottom" data-tippy-placement="bottom" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip bottom</button>
<button data-tippy-content="Tooltip placement left" data-tippy-placement="left" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tooltip left</button>
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
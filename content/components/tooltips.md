---
layout: docs
title: Tailwind CSS Tooltip - Flowbite
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
group: components
toc: true
requires_js: true

previous: Toast
previousLink: components/toast/

next: Typography
nextLink: components/typography/
---

Flowbite allows you to use the Tailwind CSS tooltip component to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

Before continuing, make sure that you have the <a href="{{< ref "getting-started/quickstart" >}}">Flowbite JavaScript file</a> included in your project in order to make the tooltip component work.

## Default tooltip example

To get started with using tooltips all you need to do is add the `data-tooltip-target="{elementId}"` data attribute to an element where `elementId` is the id of the tooltip component. In the following example you can see the button that will trigger the `tooltip-default` element to be shown when hovered or focused.

{{< example class="flex justify-center pt-8" github="components/tooltips.md" show_dark=true >}}
<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default tooltip</button>

<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Tooltip styles

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `data-tooltip-style="{light|dark}"` data attribute.

{{< example class="flex justify-center pt-8 " github="components/tooltips.md" show_dark=true >}}

<!-- Light style tooltip -->

<button data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Light tooltip</button>

<div id="tooltip-light" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-heading bg-neutral-primary-medium border border-default rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Dark style tooltip -->

<button data-tooltip-target="tooltip-dark" type="button" class="ms-3 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Dark tooltip</button>

<div id="tooltip-dark" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `data-tooltip-placement="{top|right|bottom|left}"` data attribute.

{{< example class="flex flex-wrap justify-center py-8" github="components/tooltips.md" show_dark=true >}}

<!-- Show tooltip on top -->

<button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" class="mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Tooltip top</button>

<div id="tooltip-top" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip on top
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on right -->

<button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="ms-3 mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Tooltip right</button>

<div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip on right
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on bottom -->

<button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="ms-3 mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Tooltip bottom</button>

<div id="tooltip-bottom" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip on bottom
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on left -->

<button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" class="ms-3 mb-2 md:mb-0 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Tooltip left</button>

<div id="tooltip-left" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip on left
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Triggering

You can choose the triggering event by using the `data-tooltip-trigger="{hover|click}"` data attributes to choose whether you want to show the tooltip when hovering or clicking on the element. By default this option is set to `hover`.

{{< example class="flex justify-center pt-8" github="components/tooltips.md" show_dark=true >}}

<!-- Show tooltip on hover -->

<button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Tooltip hover</button>

<div id="tooltip-hover" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Show tooltip on click -->

<button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" class="ms-3 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Tooltip click</button>

<div id="tooltip-click" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Animation

You can set tooltip animation styles by using the transition utility classes from Tailwind CSS. Make sure that you add `transition-opacity` and `duration-{x}` to set the animation duration.

{{< example class="flex justify-center pt-8" github="components/tooltips.md" show_dark=true >}}
<button data-tooltip-target="tooltip-animation" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Animated tooltip</button>

<div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /example >}}

## Disable arrow

You can also disable the tooltip arrow by not including the `data-popper-arrow` element.

{{< example class="flex justify-center pt-8" github="components/tooltips.md" show_dark=true >}}
<button data-tooltip-target="tooltip-no-arrow" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Default tooltip</button>

<div id="tooltip-no-arrow" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-dark rounded-base shadow-xs opacity-0 tooltip">
    Tooltip content
</div>
{{< /example >}}

## JavaScript behaviour

The **Tooltip** class from Flowbite can be used to create an object that will show a tooltip element relative to the main trigger element, such as a button, based on the parameters, options, and methods that you provide.

### Object parameters

Initialize a Tooltip object with the object parameters including the trigger element, the tooltip content element, and extra options to set the positioning and offsets of the tooltip.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
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
                    <code class="text-fg-brand">targetEl</code>
                </td>
                <td class="px-6 py-4">
                    Element
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Apply the tooltip content element to show and hide it either using the methods or the hover or click status of the trigger element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">triggerEl</code>
                </td>
                <td class="px-6 py-4">
                    Element
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Set an element to trigger the tooltip when clicking or hovering (ie. a button, text).
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
                    Use the options parameter to set the positioning of the tooltip element, trigger type, offsets, and more.
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

Use the following options as the third parameter for the Tooltip class to set the positioning, offset, and the trigger type (hover or click) for the tooltip element.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
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
                    <code class="text-fg-brand">placement</code>
                </td>
                <td class="px-6 py-4 font-medium">
                    String
                </td>
                <td class="px-6 py-4">
                    Set the position of the tooltip element relative to the trigger element choosing from <code class="text-fg-brand">top|right|bottom|left</code>.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">triggerType</code>
                </td>
                <td class="px-6 py-4 font-medium">
                    String
                </td>
                <td class="px-6 py-4">
                    Set the event type that will trigger the tooltip content choosing between <code class="text-fg-brand">hover|click|none</code>.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onHide</code>
                </td>
                <td class="px-6 py-4 font-medium">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the tooltip is hidden.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onShow</code>
                </td>
                <td class="px-6 py-4 font-medium">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the tooltip is shown.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onToggle</code>
                </td>
                <td class="px-6 py-4 font-medium">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the tooltip visibility is toggled.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the methods from the Tooltip object to programmatically show or hide the tooltip from JavaScript.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
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
                    <code class="text-fg-brand">show()</code>
                </td>
                <td class="px-6 py-4">
                    Use this method on the Tooltip object to show the tooltip content.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">hide()</code>
                </td>
                <td class="px-6 py-4">
                    Use this method on the Tooltip object to hide the tooltip content.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">toggle()</code>
                </td>
                <td class="px-6 py-4">
                    Use this method on the Tooltip object to toggle the visibility of the tooltip content.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnShow(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a custom callback function when the tooltip has been shown.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnHide(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a custom callback function when the tooltip has been hidden.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnToggle(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a custom callback function when the tooltip visibility has been toggled.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Tooltip object.

First of all, set the target element as the tooltip itself and the trigger element which can be a button or text element.

After that you can also set the options object to change the placement and trigger type of the tooltip, alongside with the callback functions.

{{< code lang="javascript" file="tooltip.js" icon="file" >}}
// set the tooltip content element
const $targetEl = document.getElementById('tooltipContent');

// set the element that trigger the tooltip using hover or click
const $triggerEl = document.getElementById('tooltipButton');

// options with default values
const options = {
    placement: 'bottom',
    triggerType: 'hover',
    onHide: () => {
        console.log('tooltip is shown');
    },
    onShow: () => {
        console.log('tooltip is hidden');
    },
    onToggle: () => {
        console.log('tooltip is toggled');
    },
};


// instance options with default values
const instanceOptions = {
  id: 'tooltipContent',
  override: true
};
{{< /code >}}

Create a new Tooltip object based on the options above.

{{< code lang="javascript" file="tooltip.js" icon="file" >}}
import { Tooltip } from 'flowbite';

/*
 * $targetEl: required
 * $triggerEl: required
 * options: optional
 */
const tooltip = new Tooltip($targetEl, $triggerEl, options, instanceOptions);
{{< /code >}}

Use the `show` and `hide` methods on the Tooltip object to programmatically show and hide the tooltip element using JavaScript.

{{< code lang="javascript" >}}
// show the tooltip
tooltip.show();

// hide the tooltip
tooltip.hide();

// toggle the tooltip
tooltip.toggle();

// destroy tooltip object (removes event listeners and off-canvas Popper.js)
tooltip.destroy();

// re-initialize tooltip object
tooltip.init();
{{< /code >}}

### HTML Markup

Use the following HTML code for the JavaScript example above.

{{< code lang="html" file="tooltip.html" icon="file" >}}
<button
    id="tooltipButton"
    type="button"
    class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Default tooltip
</button>
<div
    id="tooltipContent"
    role="tooltip"
    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xs transition-opacity duration-300 dark:bg-gray-700"
>
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Tooltip class, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="tooltip.ts" icon="file" >}}
import { Tooltip } from 'flowbite';
import type { TooltipOptions, TooltipInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the tooltip content element
const $targetEl: HTMLElement = document.getElementById('tooltipContent');

// set the element that trigger the tooltip using hover or click
const $triggerEl: HTMLElement = document.getElementById('tooltipButton');

// options with default values
const options: TooltipOptions = {
    placement: 'top',
    triggerType: 'hover',
    onHide: () => {
        console.log('tooltip is shown');
    },
    onShow: () => {
        console.log('tooltip is hidden');
    },
    onToggle: () => {
        console.log('tooltip is toggled');
    },
};

// instance options with default values
const instanceOptions: InstanceOptions = {
  id: 'tooltipContent',
  override: true
};

/*
 * targetEl: required
 * triggerEl: required
 * options: optional
 */
const tooltip: TooltipInterface = new Tooltip($targetEl, $triggerEl, options, instanceOptions);

// show the tooltip
tooltip.show();
{{< /code >}}

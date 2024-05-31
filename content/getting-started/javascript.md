---
layout: home
title: Tailwind CSS JavaScript - Flowbite
description: Learn how to set up a Tailwind CSS project with the JavaScript from Flowbite and start working with the interactive UI components based on the Flowbite API and data attributes interface
group: getting-started
toc: true
requires_javascript: true

previous: Quickstart
previousLink: getting-started/quickstart/
next: TypeScript
nextLink: getting-started/typescript/
---

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is one of the most popular programming languages in the world, basically powering the client side of nearly 98% percent of all websites alongside HTML and CSS. It is a high-level language which uses dynamic typing and supports features such as object orientation, first-class functions and the web based API allows you access to the DOM (Document Object Model).

Flowbite uses JavaScript to power the interactivity of the more complex UI components such as datepickers, dropdowns, and modals while also leveraging the utility classes from Tailwind CSS. 

There are two main ways you can use JavaScript to power the interactive UI components:

- use the data attributes interface and include the Flowbite JavaScript via NPM or CDN
- programmatically create instances of the UI components and call methods and attach events to elements

On this page you will learn how to leverage the Flowbite API to work with the interactivity part of the UI library and how you can customize the default behaviour of the UI components using JavaScript.

## Flowbite API

Flowbite is written in JavaScript with optional support for TypeScript and provides an extensive API for the interactive UI components that you use by creating new instances of the objects, setting them up with various options, calling methods such as to show or hide a component and even access a global instance manager to get access to the initialised objects.

Each component page on the documentation has a section called "JavaScript Behaviour" that documents how you can create and manage an object such as a Modal, Carousel, Dropdown, or any other interactive UI components that requires JavaScript to function.

Here is an extensive example on how you can work with the Modal component:

```javascript
// set the modal menu element
const $targetEl = document.getElementById('modalEl');

// options with default values
const options = {
  placement: 'bottom-right',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
  closable: true,
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};
```

Create a new Modal object based on the options above.

```javascript
import { Modal } from 'flowbite';

/*
* $targetEl: required
* options: optional
*/
const modal = new Modal($targetEl, options);
```

Use the `show` and `hide` methods to show and hide the modal component directly from JavaScript.

```javascript
// show the modal
modal.show();

// hide the modal
modal.hide();
```

Use the `toggle` method to toggle the visibility of the modal.

```javascript
// toggle the modal
modal.toggle();
```

Use the `isHidden` or `isVisible` method to check if the modal is visible or not.

```javascript
// true if hidden
modal.isHidden();

// true if visible
modal.isVisible();
```

Please take into consideration that for this example you also need to have the appropriate HTML markup available on the page where the JS is loaded:

```html
<div id="modalEl" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
```

Each component that requires JavaScript is well documented on their respective pages under the "JavaScript Behaviour" section as described above.

## Data attributes

The recommended and quickest way of using Flowbite is to use the data attributes interface that automatically creates instances and behaviour for the UI components by applying inline data attributes to the HTML elements, thus making them interactive via the Flowbite JavaScript API.

All of the examples on the Flowbite Docs already have the data attributes applied and they are also documented just above the component preview. 

Here's an example of how you can set up the modal behaviour and apply "show" and "hide" actions:

{{< example id="default-modal-example" github="components/modal.md" class="flex justify-center" show_dark=true iframeHeight="600" >}}
<!-- Modal toggle -->
<button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

In order to create a modal with Tailwind CSS you only have to add `data-modal-target="modalId"` data attribute where `modalId` is the ID of the modal that you are targeting.

If you want to toggle the visibility, show, or hide the modal you can use the following data attributes where the value is the unique ID of the modal component:

- `data-modal-toggle="modalID"` - toggle the modal
- `data-modal-show="modalID"` - show the modal

This is just one example that shows you how Flowbite leverages the data attributes and sets up the JavaScript API, without having to create new instances of the objects yourself.

## Init functions

If you want to programmatically call the initialisation functions when using data attributes (for example, you might want to call it after the DOM re-rendered) then you can use the `initFlowbite()` function or the separate component initialisation functions such as `initModals()` or `initDropdowns()` wherever you want in your JS code:

```javascript
<script type="application/javascript">
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
initFlowbite();
</script>
```

Basically, the `initFlowbite()` function parses your DOM for all of the data attributes and creates new instances of the appropriate components like modals or dropdowns and sets up the behaviour of the examples from the Flowbite Docs - applying the functionality of showing and hiding the components such as hiding the modal when clicking on the "X" (close) button.

### Targeted initialisation

All the initialisation functions can be called with an optional argument. This optional argument allows you to specify which node from the DOM you want to target for initialisation. It can be especially useful when content is created or loaded after the document has been parsed and needs to be made interactive.

Consider the following example for [HTMX](https://htmx.org/):

```javascript
import { initFlowbite } from 'flowbite'

// this method is called when new content is loaded
htmx.onLoad(function (content) {
    initFlowbite(content);
})
```

**Be mindful that only the ***descendants*** of the node will be made interactive, and not the node itself.**

## Instance manager

Since version `2.0.0`, the Flowbite JS API also provides a way to globally access all of the instances even if they were created via the data attributes interface. This allows you to programmatically handle the components while also giving you the possibility to use the recommended and quick way of accessing the data attributes interface and UI component examples.

After the window has loaded and the UI components from Flowbite have been initialised (either via CDN or the `initFlowbite()` function) you can use the following global object and methods to get access to the object instances:

```javascript
window.addEventListener('load', function() {
    const modal = FlowbiteInstances.getInstance('Modal', 'modal-id');
})
```

As you can see, the `FlowbiteInstances` global object has two main parameters:

- the first parameter is the component type which can be `Modal`, `Carousel`, `Dropdown` (ie. the name of the object class)
- the second parameter is the target ID or parent ID of the main element and it's always a string

If you provide the wrong category or ID then the console will give you a warning.

If you have provided the correct category and element ID then you can now access the object as if you've created it yourself and work with it programmatically via JavaScript:

```javascript
// show the modal
modal.show();

// hide the modal
modal.hide();
```

You can even remove the instance form the instance manager:

```javascript
// remove the instance object from the global FlowbiteInstances manager
modal.removeInstance();
```

You can also both destroy and remove the instance at the same time:

```javascript
modal.destroyAndRemoveInstance();
```

This in turn will basically remove the object instance from the global `flowbiteStorage` instance manager - you might want to do this if you want to reset certain elements from the DOM in single page applications.

Another example if you want to show or hide a tooltip that was created via data attributes would be:

```javascript
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-id');
```

And now you can show or hide the tooltip programmatically:

```javascript
// show the tooltip
tooltip.show();

// hide the tooltip
tooltip.hide();
```

You can call the `destroy()` and `init()` methods to re-calculate the positioning of the tooltip:

```javascript
// destroy the tooltip event listeners
tooltip.destroy();

// re-init the tooltip object and event listeners
tooltip.init();

// show the tooltip
tooltip.show();
```

A component is added to the `flowbiteStorage` global instance manager automatically when it's created via the `constructor` method of the object class, regardless of which component is being used from Flowbite.

Finally, you can also access all of the instances by calling the following method:

```javascript
FlowbiteInstances.getAllInstances();
```

Alternatively, you can also get all of the instances from one component pool such as from the modals:

```javascript
FlowbiteInstances.getInstances('Modal');
```

## Instance options

When creating a new object you can also use the last parameter to set the `instanceOptions` object through which you can set custom options for the Instance manager:

```javascript
import type { InstanceOptions } from 'flowbite';

const instanceOptions: InstanceOptions = {
    id: "my-unique-id",
    override: true,
};

const modal = new Modal($targetEl, options, instanceOptions);
```

In this example, the ID of the instance that you can get it from the `FlowbiteInstances` global instance manager object will be `my-unique-id` instead of the `$targetEl` unique ID.

This can be used to override existing instances if you want to re-initialise the same component with different options, such as when using the collapse object for the same object ID.

In our default UI components we use this when we want to toggle the mobile navigation both with the hamburger menu icon and the search icon, even though the target element is the same.

## TypeScript support

Flowbite has support for type declarations of the Flowbite JS API which helps you to keep your code more maintainable and predictable by giving you safety constraints for the parameters and object methods that you're using through your application.

Learn more about Flowbite and TypeScript in the [introduction guide](https://flowbite.com/docs/getting-started/typescript/).

## Frameworks support

You can use all of the JS frameworks for the UI components that don't require JavaScript to function (such as buttons, badges, cards) and for the UI components that require JS to work you need to set up the `initFlowbite()` function whenever the DOM has rendered so that you can re-apply the event listeners and object instances to the HTML elements that have data attributes. Otherwise, you need to create the objects and set the event listeners yourself.

We have written integration guides for all major front-end and back-end frameworks - generally we have standalone libraries for the major front-end frameworks such as [Flowbite React](https://www.flowbite-react.com/), [Flowbite Svelte](https://www.flowbite-svelte.com/), and [Flowbite Vue](https://flowbite-vue.com/).

For all of the back-end frameworks we recommend the vanilla JS version of Flowbite which integrates very well with frameworks such as [Laravel](https://flowbite.com/docs/getting-started/laravel/), [Django](https://flowbite.com/docs/getting-started/django/), or [Flask](https://flowbite.com/docs/getting-started/flask/).

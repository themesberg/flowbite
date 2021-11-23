---
layout: home
title: Tailwind CSS Modal - Flowbite
description: Use FlowBite's custom modals built with Tailwind CSS to add dialogs for your site
group: components
toc: true
requires_js: true

previous: Typography
previousLink: components/typography
next: Navbar
nextLink: components/navbar
---

The modal component is an interactive element that you can use to show user dialogs using data attributes but also programatically show or hide using JavaScript.

## Default example

In order to create a modal with Tailwind CSS you only have to add `data-modal-toggle="modalId"` data attribute where `modalId` is the id of the modal that you are targeting.

Make sure that you also have `aria-hidden="true"` applied as an attribute when the modal is hidden by default so that Flowbite can check whether the modal is being shown or not.

If you forget to apply the attribute, the Flowbite JavaScript will still set it up for you as a fallback.

{{< example class="dark:bg-gray-900" >}}
<!-- Modal toggle -->
<button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="default-modal">
  Toggle modal
</button>

<!-- Main modal -->
<div id="default-modal" aria-hidden="true" class="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
    <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
        <!-- Modal content -->
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="default-modal" type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500">Decline</button>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Javascript

If you want to programatically show or hide the modal element using JavaScript, all you need to do is call the `toggleModal(modalId, show)` function where the first parameter is the id of the modal element and the second is a true or false boolean that will show or hide the modal.

```javascript
// shows the #modal element
toggleModal('modal');

// hides the #modal element
toggleModal('modal', false);

// also shows the #modal element
toggleModal('modal', true);
```

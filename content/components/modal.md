---
layout: home
title: Modal
description: Use FlowBite's custom modals built with Tailwind CSS to add dialogs for your site
group: components
toc: true

previous: Typography
previousLink: components/typography
next: Navbar
nextLink: components/navbar
---

## Default example

In order to create a modal with Tailwind CSS you only have to add `data-modal-toggle="modalId"` data attribute where `modalId` is the id of the modal that you are targeting.

{{< example >}}
<!-- Modal toggle -->
<button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" data-modal-toggle="default-modal">
  Toggle modal
</button>

<!-- Main modal -->
<div class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center" id="default-modal">
    <div class="relative w-full max-w-2xl px-4">
        <!-- Modal content -->
        <div class="bg-white rounded-lg shadow relative flex flex-col">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-5 border-b rounded-t">
                <h3 class="text-xl lg:text-2xl font-semibold">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="default-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-gray-500 text-base leading-relaxed">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-gray-500 text-base leading-relaxed">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b">
                <button data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
                <button data-modal-toggle="default-modal" type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Decline</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal backdrop -->
<div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-40" id="default-modal-backdrop"></div>
{{< /example >}}

## Javascript

The JavaScript code that enables modals to work is the following;

```javascript
function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}
```

If you want to show or hide the modal programatically, all you need to do us use the following function where the parameter is the id of your modal:

```javascript
// Show or hide a modal
toggleModal(modalId);
```
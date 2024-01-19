---
layout: home
title: Tailwind CSS Copy to Clipboard - Flowbite
description: Use the copy to clipboard component to copy text, data or lines of code to the clipboard with a single click based on various styles and examples coded with Tailwind CSS and Flowbite
group: components
toc: true
requires_js: true

previous: Carousel
previousLink: components/carousel/
next: Device mockups
nextLink: components/device-mockups/
---

The chat bubble component is the building block for creating chat interfaces where users can send messages to each other by text, voice notes, images, galleries and other attachments. These components are usually used in chat applications and social media platforms such as Facebook, Twitter/X, WhatsApp, and more.

The examples below provide multiple variations of default, outline, and clean styles coded with the utility classes from Tailwind CSS. Some of the components may require you to include the Flowbite JavaScript to enable the dropdowns and tooltips functionality.

## Default copy to clipboard

Use this example to copy the content of an input text field by clicking on a button.

{{< example id="clipboard-example" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="280" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'npm-install');
const $defaultMessage = document.getElementById('default-message');
const $successMessage = document.getElementById('success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');

    // reset to default state
    setTimeout(() => {
        $defaultMessage.classList.remove('hidden');
        $successMessage.classList.add('hidden');
    }, 2000);
})
` >}}
<div class="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
    <label for="npm-install" class="sr-only">Label</label>
    <input id="npm-install" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readonly>
    <button data-copy-to-clipboard-target="npm-install" class="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center">
        <span id="default-message">Copy</span>
        <span id="success-message" class="hidden inline-flex items-center">
            <svg class="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
            Copied!
        </span>
    </button>
</div>
{{< /example >}}

## Input with copy button

This example can be used to copy the content of an input field by clicking on a button with an icon positioned inside the form element and also show a tooltip with a message when the text has been copied.

{{< example id="clipboard-button-input-example" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="280" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'npm-install-copy-button');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-copy-npm-install-copy-button');

const $defaultIcon = document.getElementById('default-icon');
const $successIcon = document.getElementById('success-icon');

const $defaultTooltipMessage = document.getElementById('default-tooltip-message');
const $successTooltipMessage = document.getElementById('success-tooltip-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultIcon.classList.add('hidden');
    $successIcon.classList.remove('hidden');
    $defaultTooltipMessage.classList.add('hidden');
    $successTooltipMessage.classList.remove('hidden');    
    tooltip.show();
}

const resetToDefault = () => {
    $defaultIcon.classList.remove('hidden');
    $successIcon.classList.add('hidden');
    $defaultTooltipMessage.classList.remove('hidden');
    $successTooltipMessage.classList.add('hidden');
    tooltip.hide();
}
` >}}
<div class="w-full max-w-[16rem]">
    <div class="relative">
        <label for="npm-install-copy-button" class="sr-only">Label</label>
        <input id="npm-install-copy-button" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readonly>
        <button data-copy-to-clipboard-target="npm-install-copy-button" data-tooltip-target="tooltip-copy-npm-install-copy-button" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-copy-npm-install-copy-button" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message">Copy to clipboard</span>
            <span id="success-tooltip-message" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
{{< /example >}}

## Copy button with text

{{< example id="clipboard-button-text-input-example" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="280" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'npm-install-copy-text');

const $defaultMessage = document.getElementById('default-message');
const $successMessage = document.getElementById('success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
` >}}
<div class="w-full max-w-[16rem]">
    <div class="relative">
        <label for="npm-install-copy-text" class="sr-only">Label</label>
        <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readonly>
        <button data-copy-to-clipboard-target="npm-install-copy-text" class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            <span id="default-message" class="inline-flex items-center">
                <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
                <span class="text-xs font-semibold">Copy</span>
            </span>
            <span id="success-message" class="hidden inline-flex items-center">
                <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
                <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
            </span>
        </button>
    </div>
</div>
{{< /example >}}

## Input group with copy

{{< example id="clipboard-button-group-example" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="280" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'website-url');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-website-url');

const $defaultIcon = document.getElementById('default-icon');
const $successIcon = document.getElementById('success-icon');

const $defaultTooltipMessage = document.getElementById('default-tooltip-message');
const $successTooltipMessage = document.getElementById('success-tooltip-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultIcon.classList.add('hidden');
    $successIcon.classList.remove('hidden');
    $defaultTooltipMessage.classList.add('hidden');
    $successTooltipMessage.classList.remove('hidden');    
    tooltip.show();
}

const resetToDefault = () => {
    $defaultIcon.classList.remove('hidden');
    $successIcon.classList.add('hidden');
    $defaultTooltipMessage.classList.remove('hidden');
    $successTooltipMessage.classList.add('hidden');
    tooltip.hide();
}
` >}}
<div class="w-full max-w-sm">
    <div class="mb-2 flex justify-between items-center">
        <label for="website-url" class="text-sm font-medium text-gray-900 dark:text-white">Verify your website:</label>
    </div>
    <div class="flex items-center">
    <button class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600" type="button">URL</button>
        <div class="relative w-full">
            <input id="website-url" type="text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="https://flowbite.com" readonly disabled />
        </div>
        <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url" class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700" type="button">
            <span id="default-icon">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon" class="hidden inline-flex items-center">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-website-url" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message">Copy link</span>
            <span id="success-tooltip-message" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Security certificate is required for approval</p>
</div>
{{< /example >}}
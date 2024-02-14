---
layout: home
title: Tailwind CSS Copy to Clipboard - Flowbite
description: Use the clipboard component to copy text, data or lines of code to the clipboard with a single click based on various styles and examples coded with Tailwind CSS and Flowbite
group: components
toc: true
requires_js: true

previous: Chat Bubble
previousLink: components/chat-bubble/
next: Device mockups
nextLink: components/device-mockups/
---

The copy to clipboard component allows you to copy text, lines of code, contact details or any other data to the clipboard with a single click on a trigger element such as a button. This component can be used to copy text from an input field, textarea, code block or even address fields in a form element.

Use cases for websites can be found in the examples below and they include copying code installation commands, API keys, URLs, addresses, contact details, sharing course URLs inside a modal and more. 

These components are built with Tailwind CSS and Flowbite and can be found on the internet on websites such as Bitly, Cloudflare, Amazon AWS and almost all open-source projects and documentations.

## Default copy to clipboard

Make sure that you add the `data-copy-to-clipboard-target="elementID"` data attribute to the trigger element (ie. the button) to initialize the JS behavior where the `elementID` is the ID of the element where the source text can be found (such as input field).

Use this example to copy the content of an input text field by clicking on a button and update the button text by applying the JavaScript code from the tab below based on the `updateOnCopyCallback()` function callback from the Flowbite JS API.

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

If you also want to update the text inside the tooltip and the icon, then you need to apply the JavaScript code based on the `updateOnCopyCallback()` function callback from the Flowbite JS API.

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

Use this example to show a copy button inside the input field with a text label and icon that updates to a success state when the text has been copied. Make sure that you also apply the custom JavaScript code below to enable the success and default message states.

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

This example can be used to show a copy to clipboard button inside an input group which has a label positioned inside the input field. The icon inside the button will switch to a success state if you also apply the custom JavaScript code below.

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
        <span class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">URL</span>
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

## URL shortener input group

Use this example to copy a shortened URL to the clipboard by clicking on a button with an icon positioned inside the input field and also show a tooltip with a message when the text has been copied.

{{< example id="clipboard-url-shortener-example" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="280" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'url-shortener');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-url-shortener');

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
        <label for="url-shortener" class="text-sm font-medium text-gray-900 dark:text-white">Shorten URL:</label>
    </div>
    <div class="flex items-center">
        <button class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700 dark:bg-blue-600 border hover:bg-blue-800 dark:hover:bg-blue-700 rounded-s-lg border-blue-700 dark:border-blue-600 hover:border-blue-700 dark:hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Generate</button>
        <div class="relative w-full">
            <input id="url-shortener" type="text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="https://bit.ly/3U2SXcF" readonly disabled />
        </div>
        <button data-tooltip-target="tooltip-url-shortener" data-copy-to-clipboard-target="url-shortener" class="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600" type="button">
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
        <div id="tooltip-url-shortener" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message">Copy link</span>
            <span id="success-tooltip-message" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Make sure that your URL is valid</p>
</div>
{{< /example >}}

## Copy source code block

This example can be used to copy and paste code inside a `<pre>` and `<code>` block by clicking on a button with an icon position inside the block and also show a tooltip with a message when the text has been copied.

You need to add an extra `data-copy-to-clipboard-content-type="innerHTML"` data attribute to the trigger element (ie. the button) to specify that the content that is to be copied is from the `innerHTML` of the target element (ie. the code block). 

You also need to add the `data-copy-to-clipboard-html-entities="true"` option to the trigger element so that the copied text will be decoded from HTML entities to plain text that will work inside your code editor.

{{< example id="clipboard-source-block" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="480" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'code-block');

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
<div class="w-full max-w-lg">
    <div class="mb-2 flex justify-between items-center">
        <p class="text-sm font-medium text-gray-900 dark:text-white">Card example with CTA button:</p>
    </div>
    <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-64">
        <div class="overflow-scroll max-h-full">
            <pre><code id="code-block" class="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">&#x27;use client&#x27;;

import Link from &#x27;next/link&#x27;;
import { Navbar } from &#x27;flowbite-react&#x27;;

function Component() {
  return (
    &#x3C;Navbar fluid rounded&#x3E;
      &#x3C;Navbar.Brand as={Link} href=&#x22;https://flowbite-react.com&#x22;&#x3E;
        &#x3C;img src=&#x22;/favicon.svg&#x22; className=&#x22;mr-3 h-6 sm:h-9&#x22; alt=&#x22;Flowbite React Logo&#x22; /&#x3E;
        &#x3C;span className=&#x22;self-center whitespace-nowrap text-xl font-semibold dark:text-white&#x22;&#x3E;Flowbite React&#x3C;/span&#x3E;
      &#x3C;/Navbar.Brand&#x3E;
      &#x3C;Navbar.Toggle /&#x3E;
      &#x3C;Navbar.Collapse&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22; active&#x3E;
          Home
        &#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link as={Link} href=&#x22;#&#x22;&#x3E;
          About
        &#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22;&#x3E;Services&#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22;&#x3E;Pricing&#x3C;/Navbar.Link&#x3E;
        &#x3C;Navbar.Link href=&#x22;#&#x22;&#x3E;Contact&#x3C;/Navbar.Link&#x3E;
      &#x3C;/Navbar.Collapse&#x3E;
    &#x3C;/Navbar&#x3E;
  );
}
</code></pre>
        </div>
    <div class="absolute top-2 end-2 bg-gray-50 dark:bg-gray-700">
        <button data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" class="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            <span id="default-message" class="inline-flex items-center">
                <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
                <span class="text-xs font-semibold">Copy code</span>
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
    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Configure Tailwind CSS and Flowbite before copying the code</p>
</div>
{{< /example >}}

## Card with API keys

Use this example to show multiple input field elements that have the copy to clipboard button inside a card component for more complex applications where you need to copy API keys, account IDs and more.

Make sure that you also apply the custom JavaScript code with the function callback to enable the success and default message states for each input field and copy button.

{{< example id="clipboard-api-keys" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="580" javascript=`
const clipboardAccountID = FlowbiteInstances.getInstance('CopyClipboard', 'account-id');
const clipboardExternalID = FlowbiteInstances.getInstance('CopyClipboard', 'api-key');
const clipboardRoleARN = FlowbiteInstances.getInstance('CopyClipboard', 'role-arn');

const tooltipAccountID = FlowbiteInstances.getInstance('Tooltip', 'tooltip-account-id');
const tooltipExternalID = FlowbiteInstances.getInstance('Tooltip', 'tooltip-api-key');
const tooltipRoleARN = FlowbiteInstances.getInstance('Tooltip', 'tooltip-role-arn');

const clipboards = [
    {
        clipboard: clipboardAccountID,
        tooltip: tooltipAccountID,
        defaultMessage: document.getElementById('default-tooltip-message-account-id'),
        successMessage: document.getElementById('success-tooltip-message-account-id'),
        defaultIcon: document.getElementById('default-icon-account-id'),
        successIcon: document.getElementById('success-icon-account-id')
    },
    {
        clipboard: clipboardExternalID,
        tooltip: tooltipExternalID,
        defaultMessage: document.getElementById('default-tooltip-message-api-key'),
        successMessage: document.getElementById('success-tooltip-message-api-key'),
        defaultIcon: document.getElementById('default-icon-api-key'),
        successIcon: document.getElementById('success-icon-api-key')
    },
    {
        clipboard: clipboardRoleARN,
        tooltip: tooltipRoleARN,
        defaultMessage: document.getElementById('default-tooltip-message-role-arn'),
        successMessage: document.getElementById('success-tooltip-message-role-arn'),
        defaultIcon: document.getElementById('default-icon-role-arn'),
        successIcon: document.getElementById('success-icon-role-arn')
    }
]

clipboards.forEach((item) => {
    item.clipboard.updateOnCopyCallback(() => {
        showSuccess(item.defaultMessage, item.successMessage);
        showSuccess(item.defaultIcon, item.successIcon);
        item.tooltip.show();

        // reset to default state
        setTimeout(() => {
            resetToDefault(item.defaultMessage, item.successMessage);
            resetToDefault(item.defaultIcon, item.successIcon);
            item.tooltip.hide();
        }, 2000);
    })
})

const showSuccess = ($defaultEl, $successEl) => {
    $defaultEl.classList.add('hidden');
    $successEl.classList.remove('hidden');
}

const resetToDefault = ($defaultEl, $successEl) => {
    $defaultEl.classList.remove('hidden');
    $successEl.classList.add('hidden');
}
` >}}
<div class="w-full max-w-lg bg-white dark:bg-gray-800 border-gray-200 border dark:border-gray-700 shadow rounded-lg p-5">
    <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Create a role with read only in-line policies</h2>
    <p class="text-gray-500 dark:text-gray-400 mb-6">To give Flowbite read access, please create an IAM Role following <a href="#" class="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium">trust relationship</a> and <a href="#" class="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium">inline policy</a>.</p>
    <label for="account-id" class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Flowbite account ID:</label>
    <div class="relative mb-4">
        <input id="account-id" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="756593826" disabled readonly>
        <button data-copy-to-clipboard-target="account-id" data-tooltip-target="tooltip-account-id" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-account-id">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-account-id" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-account-id" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-account-id">Copy to clipboard</span>
            <span id="success-tooltip-message-account-id" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    <label for="api-key" class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">API key:</label>
    <div class="relative mb-4">
        <input id="api-key" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="f4h6sd3t-jsy63ind-hsgdt7rs-jdhf76st" disabled readonly>
        <button data-copy-to-clipboard-target="api-key" data-tooltip-target="tooltip-api-key" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-api-key">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-api-key" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-api-key" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-api-key">Copy to clipboard</span>
            <span id="success-tooltip-message-api-key" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    <label for="role-arn" class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Role ARN:</label>
    <div class="relative mb-6">
        <input id="role-arn" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="123456789012:user/Flowbite" disabled readonly>
        <button data-copy-to-clipboard-target="role-arn" data-tooltip-target="tooltip-role-arn" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-role-arn">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-role-arn" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-role-arn" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-role-arn">Copy to clipboard</span>
            <span id="success-tooltip-message-role-arn" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next step</button>
    </div>
</div>
{{< /example >}}

## Copy contact details

This example can be used to copy the text content (ie. contact details) inside of the `<address>` field by clicking on the copy to clipboard button positioned inside of the address card.

Make sure that you set the `data-copy-to-clipboard-content-type="textContent"` data attribute to the trigger element (ie. the button) to specify the source of the content that is to be copied.

{{< example id="contact-details-clipboard" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="380" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'contact-details');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-contact-details');

const $defaultIcon = document.getElementById('default-icon-contact-details');
const $successIcon = document.getElementById('success-icon-contact-details');

const $defaultTooltipMessage = document.getElementById('default-tooltip-message-contact-details');
const $successTooltipMessage = document.getElementById('success-tooltip-message-contact-details');

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
<div class="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg p-5">
    <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact details</h2>
    <address class="relative bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
        <div class="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
            Name <br />
            Email <br />
            Phone Number
        </div>
        <div id="contact-details" class="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
            Bonnie Green <br />
            name@flowbite.com <br />
            + 12 345 67890
        </div>
        <button data-copy-to-clipboard-target="contact-details" data-copy-to-clipboard-content-type="textContent" data-tooltip-target="tooltip-contact-details" class="absolute end-2 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-contact-details">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-contact-details" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
        <div id="tooltip-contact-details" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-contact-details">Copy to clipboard</span>
            <span id="success-tooltip-message-contact-details" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </address>
</div>
{{< /example >}}

## Copy button with modal

Use this example to show an input field where you can copy the URL of the current page and also show a modal with the copied URL when the copy button is clicked.

{{< example id="copy-to-clipboard-modal" class="flex justify-center items-center h-full" github="components/clipboard.md" show_dark=true iframeHeight="580" javascript=`
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'course-url');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-course-url');

const $defaultIcon = document.getElementById('default-icon-course-url');
const $successIcon = document.getElementById('success-icon-course-url');

const $defaultTooltipMessage = document.getElementById('default-tooltip-message-course-url');
const $successTooltipMessage = document.getElementById('success-tooltip-message-course-url');

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
<button type="button" data-modal-target="course-modal" data-modal-toggle="course-modal" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z"/>
</svg>
Share course
</button>

<!-- Main modal -->
<div id="course-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5">
                <h3 class="text-lg text-gray-500 dark:text-gray-400">
                    Share course
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="course-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 pb-4 md:px-5 md:pb-5">
                <label for="course-url" class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">Share the course link below with your friends:</label>
                <div class="relative mb-4">
                    <input id="course-url" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="https://flowbite.com/docs/components/alerts/" disabled readonly>
                    <button data-copy-to-clipboard-target="course-url" data-tooltip-target="tooltip-course-url" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                        <span id="default-icon-course-url">
                            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                        <span id="success-icon-course-url" class="hidden inline-flex items-center">
                            <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </span>
                    </button>
                    <div id="tooltip-course-url" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        <span id="default-tooltip-message-course-url">Copy to clipboard</span>
                        <span id="success-tooltip-message-course-url" class="hidden">Copied!</span>
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <button type="button" data-modal-hide="course-modal" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## JavaScript behaviour

Use the **CopyClipboard** object from the Flowbite JS API to create a component with a trigger element (ie. an input field, code blocks, address tag) and target element (ie. button or text) where the content of the target element is copied to the clipboard when the trigger element is clicked.

### Object parameters

Use the object parameters from the CopyClipboard object to set options such as the content type of the text that is to be copied (ie. value of an input field, text content or inner HTML) and other options.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs  uppercase">
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">triggerEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Pass the trigger element (ie. a button or text) that will trigger the copy to clipboard event when being clicked.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">targetEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Set the target element where the text that will be copied to the clipboard is located (ie. an input field, code block, address tag).
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">options</code>
              </td>
              <td class="px-6 py-4">
                Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Set these options to set the the content type, HTML decoder and callback function for the copy to clipboard event.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">instanceOptions</code>
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

Use these optional options for the CopyClipboard object to set the content type from where the text will be copied from, an optional HTML decoder for code blocks and function callbacks to set success and default messages.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs  uppercase">
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">contentType</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                  Set the source of the text that will be copied: input (default), innerHTML or textContent.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">htmlEntities</code>
              </td>
              <td class="px-6 py-4 ">
                  String
              </td>
              <td class="px-6 py-4">
                  Set this option to true if you want to decode the HTML entities for code blocks. Default is false.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">onCopy</code>
              </td>
              <td class="px-6 py-4 ">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the text has been copied to the clipboard.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the following methods from the CopyClipboard component to programmatically work with the component such as copying the text on demand or updating the callback function.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs  uppercase">
              <th scope="col" class="px-6 py-3">
                  Method
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">getTargetValue()</code>
              </td>
              <td class="px-6 py-4">
                 Get the value of the target element (ie. input field, code block, address tag).
              </td>
          </tr>
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">copy()</code>
              </td>
              <td class="px-6 py-4">
                 Use this method to copy the text from the target element to the clipboard.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">decodeHTML()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to decode the HTML entities from the target element.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">updateOnCopyCallback(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to update the callback function that is called when the text has been copied to the clipboard.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following example to learn how to create a new CopyClipboard component via the Flowbite JavaScript API and set up the class, options, and methods to programmatically work with the component.

```javascript
// set the trigger element such as a button or text field
const $triggerEl = document.getElementById('copy-clipboard-button');

// set the trigger element such as an input field or code block
const $targetEl = document.getElementById('copy-text');

// optional options with default values and callback functions
const options = {
    contentType: 'input',
    htmlEntities: false, // infinite
    onCopy: () => {
        console.log('text copied successfully!');
    }
};

const instanceOptions = {
  id: 'copy-clipboard-example',
  override: true
};
```

Next step is to create a new instance of a CopyClipboard object using the parameters we have set above.

```javascript
import { CopyClipboard } from 'flowbite';

/*
 * $triggerEl: required
 * $targetEl: required
 * options: optional
 * instanceOptions: optional
 */
const clipboard = new CopyClipboard($triggerEl, $targetEl, options, instanceOptions);
```

Set the event listeners on the button to copy the text from the input field:

```javascript
$triggerEl.addEventListener('click', () => {
    clipboard.copy();
});
```

Now you can programmatically call the methods of the CopyClipboard component:

```javascript
// get the value, inner HTML or text content of the target element
clipboard.getTargetValue();

// copy the target element text value
clipboard.copy();

// update the on copy function callback
clipboard.updateOnCopyCallback(() => {
    // do something when the text has been copied to the clipboard
    console.log('updated on copy callback success message');
});
```

### HTML Markup

Here is an example of the HTML markup that you can use for the JavaScript example above.

```html
<div class="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
    <label for="copy-text" class="sr-only">Label</label>
    <input id="copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readonly>
    <button id="copy-clipboard-button" class="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center">
        <span id="default-message">Copy</span>
        <span id="success-message" class="hidden inline-flex items-center">
            <svg class="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
            Copied!
        </span>
    </button>
</div>
```

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the CopyClipboard object, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

```javascript
import { CopyClipboard } from 'flowbite';
import type { CopyClipboardOptions, CopyClipboardInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the trigger element which will be clicked (ie. a button or text)
const $triggerEl: HTMLElement = document.getElementById('copy-clipboard-button') as HTMLElement;

// set the target element where the text will be copied from (ie. input field, code block)
const $targetEl: HTMLInputElement = document.getElementById('copy-text') as HTMLInputElement;

// optional options with default values and callback functions
const options: CopyClipboardOptions = {
    contentType: 'input',
    htmlEntities: false, // infinite
    onCopy: () => {
        console.log('text copied successfully!');
    }
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'copy-clipboard-example',
  override: true
};

/*
 * $triggerEl: required
 * $targetEl: required
 * options: optional
 * instanceOptions: optional
 */
const clipboard: CopyClipboardInterface = new CopyClipboard(
    $triggerEl,
    $targetEl,
    options,
    instanceOptions
);

// copy the value of the target element
clipboard.copy();
```
---
layout: docs
title: Tailwind CSS QR Code - Flowbite
description: Use this component to show QR codes that can be scanned with phone cameras and other devices
group: components
toc: true

previous: Accordion
previousLink: components/accordion/
next: Avatar
nextLink: components/avatar/
---

QR codes are a popular way to encode information such as website links, texts, and other data into a two-dimensional barcode that can be scanned with a phone camera or other devices. The Flowbite component allows you to couple them with other elements such as input fields, tooltips, tab selectors, and more.

Use the following input field to generate a QR code for all the examples below:

<div class="grid grid-cols-2 gap-8">
  <div>
    <label for="qr_code_value" class="block mb-2.5 text-sm font-medium text-heading">QR value:</label>
    <input type="text" id="qr_code_value" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="https://flowbite.com" required />
    <label for="qr_code_color" class="block mb-2.5 text-sm font-medium text-heading">Color:</label>
    <input type="color" id="qr_code_color" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="https://flowbite.com" required />
    <label for="qr_code_bg_color" class="block mb-2.5 text-sm font-medium text-heading">Background:</label>
    <input type="color" id="qr_code_bg_color" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="https://flowbite.com" required />
  </div>
  <div>
    <div id="qrcode" class="w-56 h-56"></div>
  </div>
</div>

## Default QR code

Use this example as a simple QR code with SVG embedded directly in the HTML.

{{< example github="components/alerts.md" class="flex justify-center" show_dark=true >}}
<div id="qrcode" class="w-48 h-48">
  <svg class="text-heading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges"><path fill="none" d="M0 0h29v29H0z"></path><path stroke="currentColor" d="M4 4.5h7m1 0h1m1 0h2m2 0h7M4 5.5h1m5 0h1m4 0h2m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h1m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m5 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2M5 12.5h7m3 0h2m2 0h2m3 0h1M6 13.5h1m1 0h1m6 0h1m1 0h1m2 0h5M4 14.5h3m1 0h3m1 0h2m3 0h2m2 0h1m1 0h1M4 15.5h1m2 0h1m3 0h1m5 0h1m1 0h4m1 0h1M4 16.5h1m1 0h2m2 0h2m3 0h1m2 0h1m4 0h1M12 17.5h2m2 0h2m1 0h4m1 0h1M4 18.5h7m1 0h3m2 0h1m3 0h3M4 19.5h1m5 0h1m1 0h1m2 0h1m1 0h1m3 0h2m1 0h1M4 20.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m5 0h1M4 21.5h1m1 0h3m1 0h1m1 0h2m2 0h2m1 0h4M4 22.5h1m1 0h3m1 0h1m1 0h1m1 0h2m2 0h1M4 23.5h1m5 0h1m1 0h1m1 0h1m5 0h3M4 24.5h7m2 0h3m5 0h1m1 0h1"></path></svg>
</div>
{{< /example >}}

## QR code with copy

Use this example to show a QR code with SVG and a copy to clipboard input element below.

{{< example github="components/alerts.md" class="flex justify-center" show_dark=true javascript=`

window.addEventListener('load', function () {
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
})
` >}}
<div class="w-56 flex justify-center items-center flex-col">
  <div id="qrcode" class="w-48 h-48">
    <svg class="text-heading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges"><path fill="none" d="M0 0h29v29H0z"></path><path stroke="currentColor" d="M4 4.5h7m1 0h1m1 0h2m2 0h7M4 5.5h1m5 0h1m4 0h2m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h1m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m5 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2M5 12.5h7m3 0h2m2 0h2m3 0h1M6 13.5h1m1 0h1m6 0h1m1 0h1m2 0h5M4 14.5h3m1 0h3m1 0h2m3 0h2m2 0h1m1 0h1M4 15.5h1m2 0h1m3 0h1m5 0h1m1 0h4m1 0h1M4 16.5h1m1 0h2m2 0h2m3 0h1m2 0h1m4 0h1M12 17.5h2m2 0h2m1 0h4m1 0h1M4 18.5h7m1 0h3m2 0h1m3 0h3M4 19.5h1m5 0h1m1 0h1m2 0h1m1 0h1m3 0h2m1 0h1M4 20.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m5 0h1M4 21.5h1m1 0h3m1 0h1m1 0h2m2 0h2m1 0h4M4 22.5h1m1 0h3m1 0h1m1 0h1m1 0h2m2 0h1M4 23.5h1m5 0h1m1 0h1m1 0h1m5 0h3M4 24.5h7m2 0h3m5 0h1m1 0h1"></path></svg>
  </div>

  <div class="w-full max-w-[18rem]">
      <div class="relative">
          <label for="npm-install-copy-button" class="sr-only">Label</label>
          <input id="npm-install-copy-button" type="text" class="col-span-6 bg-neutral-secondary-medium border border-default-medium text-body text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" value="npm install flowbite" disabled readonly>
          <button data-copy-to-clipboard-target="npm-install-copy-button" data-tooltip-target="tooltip-copy-npm-install-copy-button" class="absolute end-2 top-1/2 -translate-y-1/2 text-body hover:bg-neutral-quaternary rounded p-1.5 inline-flex items-center justify-center">
              <span id="default-icon">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/></svg>
              </span>
              <span id="success-icon" class="hidden">
                  <svg class="w-4 h-4 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/></svg>
              </span>
          </button>
          <div id="tooltip-copy-npm-install-copy-button" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
              <span id="default-tooltip-message">Copy to clipboard</span>
              <span id="success-tooltip-message" class="hidden">Copied!</span>
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
      </div>
  </div>
</div>
{{< /example >}}

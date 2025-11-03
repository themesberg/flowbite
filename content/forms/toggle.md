---
layout: docs
title: Tailwind CSS Toggle - Flowbite
description: Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors
group: forms
toc: true

previous: Timepicker
previousLink: forms/timepicker/
next: Range Slider
nextLink: forms/range/
---

The toggle component can be used to receive a simple "yes" or "no" type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Toggle example

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

{{< example class="flex justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Toggle me</span>
</label>
{{< /example >}}

## Checked state

Apply the `checked` attribute to the toggle component to activate the selection by default.

{{< example class="flex justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Checked toggle</span>
</label>
{{< /example >}}

## Disabled state

Apply the `disabled` attribute to disallow the users from making any further selections.

{{< example class="flex flex-col flex-wrap items-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" disabled>
  <div class="relative w-9 h-5 bg-neutral-tertiary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none ms-3 text-sm font-medium text-fg-disabled">Disabled toggle</span>
</label>

<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked disabled>
  <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none ms-3 text-sm font-medium text-fg-disabled">Disabled checked</span>
</label>
{{< /example >}}

## Double labels

Use this example to show labels on the left and right of the toggle component.

{{< example class="flex justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center cursor-pointer">
  <span class="select-none text-sm font-medium text-heading">Monthly</span>
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative mx-3 w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none text-sm font-medium text-heading">Yearly</span>
</label>
{{< /example >}}

## Toggle with icons

This example can be used to show [SVG icons](https://flowbite.com/icons/) on either side of the toggle component.

{{< example class="flex justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center cursor-pointer">
  <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 8.43A4.985 4.985 0 0 1 19 12a4.984 4.984 0 0 1-1.43 3.5M14 6.135v11.73a1 1 0 0 1-1.64.768L8 15H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/></svg>
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative mx-3 w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <svg class="w-5 h-5 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A4.985 4.985 0 0 1 17 12a4.984 4.984 0 0 1-1.43 3.5m2.794 2.864A8.972 8.972 0 0 0 21 12a8.972 8.972 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768Z"/></svg>
</label>
{{< /example >}}

## Toggle card

This example can be used to add a toggle input field inside a card element with a description.

{{< example class="flex flex-col flex-wrap items-center" github="forms/toggle.md" show_dark=true >}}
<label class="w-80 inline-flex cursor-pointer p-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="shrink-0 relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <div class="ms-2.5 select-none">
    <p class="text-sm font-medium text-heading mb-1">Weekly newsletter</p>
    <p class="text-sm font-normal text-body">Save my credentials for easier sign-in in the future.</p>
  </div>
</label>
{{< /example >}}

## Toggle card with icon

This example can be used to add a toggle input field inside a card element with an icon.

{{< example class="flex flex-col flex-wrap items-center" github="forms/toggle.md" show_dark=true >}}
<label class="w-112 inline-flex cursor-pointer p-4 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
  <div class="me-2.5">
    <svg class="h-8 mb-2 text-heading" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.62 3.33333C5.19995 3.33333 0 8.53328 0 14.9533C0 20.0952 3.32622 24.4382 7.94517 25.9778C8.52617 26.0795 8.74405 25.7309 8.74405 25.4259C8.74405 25.1499 8.72952 24.2348 8.72952 23.2616C5.81 23.7991 5.0547 22.5499 4.8223 21.8963C4.69157 21.5622 4.1251 20.5309 3.63125 20.255C3.22455 20.0371 2.64355 19.4997 3.61672 19.4851C4.5318 19.4706 5.18542 20.3276 5.4033 20.6762C6.4491 22.4337 8.11947 21.9399 8.78762 21.6348C8.8893 20.8795 9.19432 20.3712 9.5284 20.0807C6.94295 19.7902 4.2413 18.7879 4.2413 14.3433C4.2413 13.0796 4.69157 12.0338 5.43235 11.2204C5.31615 10.9299 4.90945 9.73886 5.54855 8.14111C5.54855 8.14111 6.52172 7.83608 8.74405 9.33216C9.67365 9.07071 10.6613 8.93998 11.649 8.93998C12.6367 8.93998 13.6244 9.07071 14.554 9.33216C16.7764 7.82156 17.7495 8.14111 17.7495 8.14111C18.3886 9.73886 17.9819 10.9299 17.8657 11.2204C18.6065 12.0338 19.0568 13.0651 19.0568 14.3433C19.0568 18.8025 16.3406 19.7902 13.7552 20.0807C14.1764 20.4438 14.5395 21.141 14.5395 22.2304C14.5395 23.7845 14.525 25.0337 14.525 25.4259C14.525 25.7309 14.7429 26.094 15.3239 25.9778C17.6307 25.1991 19.6351 23.7165 21.0552 21.7389C22.4753 19.7612 23.2394 17.388 23.24 14.9533C23.24 8.53328 18.04 3.33333 11.62 3.33333Z" fill="currentColor"/>
<path d="M54.1705 20.562H54.1434C54.1556 20.562 54.1637 20.5756 54.1759 20.5769H54.1841L54.1705 20.5634V20.562ZM54.1759 20.5769C54.0498 20.5783 53.7326 20.6447 53.3978 20.6447C52.3403 20.6447 51.9743 20.1567 51.9743 19.5195V15.2749H54.1298C54.2518 15.2749 54.3467 15.1665 54.3467 15.0173V12.7127C54.3467 12.5907 54.2383 12.4822 54.1298 12.4822H51.9743V9.62178C51.9743 9.51333 51.9065 9.44555 51.7845 9.44555H48.8563C48.7343 9.44555 48.6665 9.51333 48.6665 9.62178V12.5636C48.6665 12.5636 47.1888 12.9296 47.0939 12.9432C46.9855 12.9703 46.9177 13.0652 46.9177 13.1736V15.0173C46.9177 15.1665 47.0261 15.2749 47.1481 15.2749H48.6529V19.7215C48.6529 23.0293 50.9576 23.3682 52.5301 23.3682C53.2486 23.3682 54.1163 23.1378 54.2518 23.07C54.3332 23.0429 54.3738 22.948 54.3738 22.8531V20.8196C54.3757 20.7619 54.3567 20.7055 54.3204 20.6607C54.284 20.6159 54.2327 20.5856 54.1759 20.5756V20.5769ZM86.2998 17.5931C86.2998 15.1393 85.3102 14.814 84.2663 14.9224C83.4529 14.9767 82.8022 15.3834 82.8022 15.3834V20.1553C82.8022 20.1553 83.4664 20.6162 84.4561 20.6433C85.8524 20.684 86.2998 20.1824 86.2998 17.5931ZM89.5941 17.3762C89.5941 22.0261 88.0893 23.3547 85.4593 23.3547C83.236 23.3547 82.043 22.2295 82.043 22.2295C82.043 22.2295 81.9888 22.8531 81.921 22.9344C81.8803 23.0158 81.8125 23.0429 81.7312 23.0429H79.7248C79.5892 23.0429 79.4672 22.9344 79.4672 22.8124L79.4943 7.75096C79.4943 7.62895 79.6028 7.5205 79.7248 7.5205H82.6124C82.7344 7.5205 82.8428 7.62895 82.8428 7.75096V12.8618C82.8428 12.8618 83.9545 12.1433 85.5813 12.1433L85.5677 12.1162C87.1945 12.1162 89.5941 12.7263 89.5941 17.3762ZM77.7726 12.4822H74.9257C74.7766 12.4822 74.6953 12.5907 74.6953 12.7398V20.1146C74.6953 20.1146 73.9497 20.6433 72.9329 20.6433C71.9162 20.6433 71.6179 20.1824 71.6179 19.1657V12.7263C71.6179 12.6042 71.5095 12.4958 71.3875 12.4958H68.4863C68.3643 12.4958 68.2559 12.6042 68.2559 12.7263V19.6537C68.2559 22.6362 69.9233 23.3818 72.2144 23.3818C74.0988 23.3818 75.6307 22.3379 75.6307 22.3379C75.6307 22.3379 75.6985 22.8666 75.7391 22.948C75.7663 23.0158 75.8612 23.07 75.956 23.07H77.7726C77.9218 23.07 78.0031 22.9615 78.0031 22.8395L78.0302 12.7127C78.0302 12.5907 77.9218 12.4822 77.7726 12.4822ZM45.6434 12.4687H42.7558C42.6338 12.4687 42.5253 12.5907 42.5253 12.7398V22.6904C42.5253 22.9615 42.7016 23.0564 42.932 23.0564H45.5349C45.806 23.0564 45.8738 22.9344 45.8738 22.6904V12.6991C45.8738 12.5771 45.7654 12.4687 45.6434 12.4687ZM44.2199 7.88653C43.176 7.88653 42.3491 8.71349 42.3491 9.75735C42.3491 10.8012 43.176 11.6282 44.2199 11.6282C45.2367 11.6282 46.0636 10.8012 46.0636 9.75735C46.0636 8.71349 45.2367 7.88653 44.2199 7.88653ZM66.5748 7.54761H63.7144C63.5924 7.54761 63.4839 7.65607 63.4839 7.77808V13.3228H58.9967V7.77808C58.9967 7.65607 58.8882 7.54761 58.7662 7.54761H55.8786C55.7566 7.54761 55.6482 7.65607 55.6482 7.77808V22.8395C55.6482 22.9615 55.7702 23.07 55.8786 23.07H58.7662C58.8882 23.07 58.9967 22.9615 58.9967 22.8395V16.4001H63.4839L63.4568 22.8395C63.4568 22.9615 63.5653 23.07 63.6873 23.07H66.5748C66.6969 23.07 66.8053 22.9615 66.8053 22.8395V7.77808C66.8053 7.65607 66.6969 7.54761 66.5748 7.54761ZM40.9934 14.2175V21.999C40.9934 22.0532 40.9799 22.1481 40.9121 22.1753C40.9121 22.1753 39.2175 23.3818 36.4248 23.3818C33.0492 23.3818 29.05 22.3244 29.05 15.3563C29.05 8.38813 32.5476 6.95112 35.9639 6.96468C38.9192 6.96468 40.1122 7.62895 40.302 7.75096C40.3563 7.81875 40.3834 7.87297 40.3834 7.94076L39.814 10.3538C39.814 10.4759 39.692 10.625 39.5429 10.5843C39.0548 10.4352 38.3228 10.1369 36.6011 10.1369C34.6082 10.1369 32.4663 10.7063 32.4663 15.1936C32.4663 19.6808 34.4998 20.2095 35.9639 20.2095C37.2111 20.2095 37.6585 20.0604 37.6585 20.0604V16.9424H35.6656C35.5165 16.9424 35.4081 16.8339 35.4081 16.7119V14.2175C35.4081 14.0955 35.5165 13.987 35.6656 13.987H40.7358C40.885 13.987 40.9934 14.0955 40.9934 14.2175Z" fill="currentColor"/>
</svg>
    <p class="text-sm font-normal text-body select-none">Integrate your knowledge base and customer success seamlessy with your app.</p>
  </div>
    <input type="checkbox" value="" class="sr-only peer">
  <div class="shrink-0 relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
</label>
{{< /example >}}

## Colors

Change the color of the toggle component by updating the color classes of `peer-focus` and `peer-checked`.

{{< example class="flex inline-flex-wrap justify-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Red</span>
</label>

<label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Green</span>
</label>

<label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600 dark:peer-checked:bg-purple-600"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Purple</span>
</label>

<label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Yellow</span>
</label>

<label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Teal</span>
</label>

<label class="inline-flex items-center me-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500 dark:peer-checked:bg-orange-500"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Orange</span>
</label>
{{< /example >}}

## Sizes

Get started with small, default, or large sizes of the toggle component based on your needs.

{{< example class="flex flex-col flex-wrap items-center" github="forms/toggle.md" show_dark=true >}}
<label class="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Base toggle</span>
</label>

<label class="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-11 h-6 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
  <span class="select-none ms-3 text-sm font-medium text-heading">Large toggle</span>
</label>

{{< /example >}}
---
layout: home
title: Tailwind CSS Progress Bar - Flowbite
description: Use the progress bar component to show the completion rate of a data indicator or use it as a loader element
group: components
toc: true

previous: Popover
previousLink: components/popover/
next: Rating
nextLink: components/rating/
---

The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

## Default progress bar

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

{{< example id="default-progress-example" github="components/progress.md" show_dark=true >}}
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## Sizes

You can also use different sizes by using various sizing utility classes from Flowbite and Tailwind CSS.

{{< example id="progress-sizes-example" github="components/progress.md" show_dark=true >}}
<div class="mb-1 text-base font-medium dark:text-white">Small</div>
<div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
  <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium dark:text-white">Default</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-lg font-medium dark:text-white">Large</div>
<div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
<div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 45%"></div>
</div>
{{< /example >}}

## With label inside

Here is an example of using a progress bar with the label inside the bar.

{{< example id="progress-label-example" github="components/progress.md" show_dark=true >}}
  <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 45%</div>
  </div>
{{< /example >}}

## With label outside

And this is an example of using a progress bar outside the bar.

{{< example id="progress-label-outside-example" github="components/progress.md" show_dark=true >}}
<div class="flex justify-between mb-1">
  <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
  <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## Colors

You can also apply any color using the `bg-{color}` utility classes from Tailwind CSS and Flowbite.

{{< example id="progress-colors-example" github="components/progress.md" show_dark=true >}}
<div class="mb-1 text-base font-medium dark:text-white">Dark</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">Indigo</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Purple</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style="width: 45%"></div>
</div>
{{< /example >}}

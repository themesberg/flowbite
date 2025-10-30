---
layout: docs
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

{{< example github="components/progress.md" show_dark=true >}}
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-brand h-2 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## Sizes

You can also use different sizes by using various sizing utility classes from Flowbite and Tailwind CSS.

{{< example class="space-y-4" github="components/progress.md" show_dark=true >}}
<div class="mb-1 text-sm font-medium text-heading">Small</div>
<div class="w-full bg-neutral-quaternary rounded-full h-1.5">
  <div class="bg-brand h-1.5 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-sm font-medium text-heading">Default</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-brand h-2 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-base font-medium text-heading">Large</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2.5">
  <div class="bg-brand h-2.5 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## With label inside

Here is an example of using a progress bar with the label inside the bar.

{{< example github="components/progress.md" show_dark=true >}}
  <div class="w-full bg-neutral-quaternary rounded-full">
    <div class="bg-brand text-xs font-medium text-white text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center" style="width: 45%"> 45%</div>
  </div>
{{< /example >}}

## With label outside

And this is an example of using a progress bar outside the bar.

{{< example github="components/progress.md" show_dark=true >}}
<div class="flex justify-between mb-1">
  <span class="text-sm font-medium text-body">Flowbite</span>
  <span class="text-sm font-medium text-body">45%</span>
</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-brand h-2 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## Colors

You can also apply any color using the `bg-{color}` utility classes from Tailwind CSS and Flowbite.

{{< example class="space-y-4" github="components/progress.md" show_dark=true >}}
<div class="mb-1 text-sm font-medium text-heading">Dark</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-dark h-2 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-sm font-medium text-fg-brand">Brand</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-brand h-2 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-sm font-medium text-fg-success">Success</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-success h-2 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-sm font-medium text-fg-danger">Danger</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-danger h-2 rounded-full" style="width: 45%"></div>
</div>
<div class="mb-1 text-sm font-medium text-fg-warning">Danger</div>
<div class="w-full bg-neutral-quaternary rounded-full h-2">
  <div class="bg-warning h-2 rounded-full" style="width: 45%"></div>
</div>

{{< /example >}}

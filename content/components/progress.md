---
layout: home
title: Progress
description: Use these Tailwind CSS progress bar elements to show the completion rate of something
group: components
toc: true
---

## Default example

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

{{< example >}}
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## Sizing

You can also use different sizes by using various sizing utility classes from FlowBite and Tailwind CSS.

{{< preview >}}
<div class="text-base font-medium mb-1">Small</div>
<div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
  <div class="bg-gray-600 h-1.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base font-medium mb-1">Default</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-gray-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-lg font-medium mb-1">Large</div>
<div class="w-full bg-gray-200 rounded-full h-4 mb-4">
  <div class="bg-gray-600 h-4 rounded-full" style="width: 45%"></div>
</div>
<div class="text-lg font-medium mb-1">Extra Large</div>
<div class="w-full bg-gray-200 rounded-full h-6">
  <div class="bg-gray-600 h-6 rounded-full" style="width: 45%"></div>
</div>
{{< /preview >}}

```html
<div class="text-base font-medium mb-1">Small</div>
<div class="w-full bg-gray-200 rounded-full h-1.5">
  <div class="bg-gray-600 h-1.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base font-medium mb-1">Default</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-gray-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-lg font-medium mb-1">Large</div>
<div class="w-full bg-gray-200 rounded-full h-4">
  <div class="bg-gray-600 h-4 rounded-full" style="width: 45%"></div>
</div>

<div class="text-lg font-medium mb-1">Extra Large</div>
<div class="w-full bg-gray-200 rounded-full h-6">
  <div class="bg-gray-600 h-6 rounded-full" style="width: 45%"></div>
</div>
```

## With label inside

Here is an example of using a progress bar with the label inside the bar.

{{< example >}}
  <div class="w-full bg-gray-200 rounded-full">
    <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 45%"> 45%</div>
  </div>
{{< /example >}}

## With label outside

And this is an example of using a progress bar outside the bar.

{{< example >}}
<div class="mb-1 flex justify-between">
  <span class="text-base text-blue-700 font-medium">Themesberg project</span>
  <span class="text-sm font-medium text-blue-700">45%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
{{< /example >}}

## Colors

You can also apply any color using the `bg-{color}` utility classes from Tailwind CSS and FlowBite.

{{< preview >}}
<div class="text-base font-medium mb-1">Dark</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-gray-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base text-blue-700 font-medium mb-1">Blue</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base text-red-700 font-medium mb-1">Red</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-red-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base text-green-700 font-medium mb-1">Green</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-green-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base text-yellow-700 font-medium mb-1">Yellow</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base text-indigo-700 font-medium mb-1">Indigo</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
<div class="text-base text-purple-700 font-medium mb-1">Purple</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-purple-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
{{< /preview >}}

```html
<div class="text-base font-medium mb-1">Dark</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-gray-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base text-blue-700 font-medium mb-1">Blue</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base text-red-700 font-medium mb-1">Red</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-red-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base text-green-700 font-medium mb-1">Green</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-green-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base text-yellow-700 font-medium mb-1">Yellow</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base text-indigo-700 font-medium mb-1">Indigo</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>

<div class="text-base text-purple-700 font-medium mb-1">Purple</div>
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-purple-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
```

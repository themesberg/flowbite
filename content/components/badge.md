---
layout: home
title: Badge
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
group: components
toc: true
---

## Default example

Use the following badge elements to indicate counts or labels inside or outside components.

{{< example >}}
<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Default</span>
<span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Dark</span>
<span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Red</span>
<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Green</span>
<span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Yellow</span>
<span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Indigo</span>
<span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Purple</span>
<span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Pink</span>
{{< /example >}}

## Larger badges

Use the `text-sm` to create a larger variant of the badges.

{{< example >}}
<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Default</span>
<span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Dark</span>
<span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Red</span>
<span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Green</span>
<span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Yellow</span>
<span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Indigo</span>
<span class="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Purple</span>
<span class="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Pink</span>
{{< /example >}}

## Badges as links

You can also use badges as anchor elements to link to another page.

{{< example >}}
<a href="#" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md">Default</a>
<a href="#" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md">Default</a>
{{< /example >}}

## Badges with icon

You can also use SVG icons inside the badge elements.

{{< example >}}
<span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mr-2">
  <svg class="w-3 h-3 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
  3 days ago
</span>
<span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md">
  <svg class="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
  2 minutes ago
</span>
{{< /example >}}

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon.

{{< example >}}
<span class="bg-gray-100 text-gray-800 text-sm font-medium inline-flex items-center p-1 rounded-full mr-2">
  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
</span>
<span class="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center p-1 rounded-full mr-2">
  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
</span>
<span class="bg-gray-100 text-gray-800 text-sm font-medium inline-flex items-center p-1.5 rounded-full mr-2">
  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
</span>
<span class="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center p-1.5 rounded-full">
  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
</span>
{{< /example >}}

---
layout: home
title: Button group
description: Learn how to group buttons together verticall or horizontally and use them as radios or checkboxes
group: components
toc: true
---

## Group buttons

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<div class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
    Profile
  </button>
  <button type="button" class="-ml-px relative border border-gray-300 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
    Settings
  </button>
  <button type="button" class="-ml-px relative rounded-r-md border border-gray-300 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
    Messages
  </button>
</div>
{{< /example >}}

## Group buttons with icons

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<div class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center ">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Profile
  </button>
  <button type="button" class="-ml-px relative border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    Settings
  </button>
  <button type="button" class="-ml-px relative rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Downloads
  </button>
</div>
{{< /example >}}

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<div class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative rounded-l-lg border border-gray-900 bg-transparent text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
    Profile
  </button>
  <button type="button" class="-ml-px relative border border-gray-900 bg-transparent text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
    Settings
  </button>
  <button type="button" class="-ml-px relative rounded-r-md border border-gray-900 bg-transparent text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
    Downloads
  </button>
</div>
{{< /example >}}

## Outlined with icon

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<div class="relative z-0 inline-flex shadow-sm rounded-md">
  <button type="button" class="relative rounded-l-lg border border-gray-900 bg-transparent text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white inline-flex items-center ">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Profile
  </button>
  <button type="button" class="-ml-px relative border border-gray-900 bg-transparent text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    Settings
  </button>
  <button type="button" class="-ml-px relative rounded-r-md border border-gray-900 bg-transparent text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Downloads
  </button>
</div>
{{< /example >}}
## Vertical 

Make a set of buttons appear vertically stacked rather than horizontally.

{{< example >}}
<div class="bg-white rounded-lg border border-gray-200">
    <button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full rounded-t-lg inline-flex items-center">Profile</button>
    <button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full inline-flex items-center">Settings</button>
    <button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full inline-flex items-center">Messages</button>
    <button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full rounded-b-lg inline-flex items-center">Download</button>
</div>
{{< /example >}}

## Vertical with icons 

Make a set of buttons appear vertically stacked rather than horizontally.

{{< example >}}
<div class="bg-white rounded-lg border border-gray-200">
<button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full rounded-t-lg inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Profile
</button>
<button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    Settings
</button>
<button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
    Messages
</button>
<button class="px-4 py-2 relative hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 w-full rounded-b-lg inline-flex items-center">
    <svg class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    Download
</button>
</div>
{{< /example >}}
---
layout: home
title: Tailwind CSS Alerts - Flowbite
description: Show contextual information to your users using alert elements based on Tailwind CSS
group: components
toc: true

previous: Optimization
previousLink: customize/optimization/
next: Accordion
nextLink: components/accordion/
---

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Default alert

Use the following examples of alert components to show messages as feedback to your users.

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</div>
{{< /example >}}

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div>
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div>
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div>
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div>
    <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
  <svg class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div>
    <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
  </div>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Dismissing

Use the following alert elements that are also dismissable.

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<div id="alert-1" class="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
    A simple info alert with an <a href="#" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
<div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
    A simple info alert with an <a href="#" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
<div id="alert-3" class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
    A simple info alert with an <a href="#" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
<div id="alert-4" class="flex p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div class="ml-3 text-sm font-medium text-yellow-700 dark:text-yellow-800">
    A simple info alert with an <a href="#" class="font-semibold underline hover:text-yellow-800 dark:hover:text-yellow-900">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300" data-dismiss-target="#alert-4" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
<div id="alert-5" class="flex p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
    A simple dark alert with an <a href="#" class="font-semibold underline hover:text-gray-800 dark:hover:text-white">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white" data-dismiss-target="#alert-5" aria-label="Close">
    <span class="sr-only">Dismiss</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
{{< /example >}}

## Border accent

Use the following alert components with a border accent as an alternative style.

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<div id="alert-border-1" class="flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium text-blue-700">
      A simple info alert with an <a href="#" class="font-semibold underline hover:text-blue-800">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 dark:bg-blue-200 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 dark:hover:bg-blue-300 inline-flex h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
<div id="alert-border-2" class="flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium text-red-700">
      A simple danger alert with an <a href="#" class="font-semibold underline hover:text-red-800">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"  data-dismiss-target="#alert-border-2" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
<div id="alert-border-3" class="flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium text-green-700">
      A simple success alert with an <a href="#" class="font-semibold underline hover:text-green-800">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8"  data-dismiss-target="#alert-border-3" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
<div id="alert-border-4" class="flex p-4 mb-4 bg-yellow-100 border-t-4 border-yellow-500 dark:bg-yellow-200" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium text-yellow-700">
      A simple danger alert with an <a href="#" class="font-semibold underline hover:text-yellow-800">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 dark:bg-yellow-200 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 dark:hover:bg-yellow-300 inline-flex h-8 w-8" data-dismiss-target="#alert-border-4" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
<div id="alert-border-5" class="flex p-4 mb-4 bg-gray-100 border-t-4 border-gray-500 dark:bg-gray-700" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
      A simple dark alert with an <a href="#" class="font-semibold underline hover:text-gray-800 dark:hover:text-white">example link</a>. Give it a click if you like.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white" data-dismiss-target="#alert-border-5" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
{{< /example >}}

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

{{< example class="dark:bg-gray-800" github="components/alerts.md" show_dark=true >}}
<div id="alert-additional-content-1" class="p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
<div id="alert-additional-content-2" class="p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-lg font-medium text-red-700 dark:text-red-800">This is a danger alert</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-red-700 dark:text-red-800">
    More info about this info danger goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
<div id="alert-additional-content-3" class="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-lg font-medium text-green-700 dark:text-green-800">This is a success alert</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
    More info about this info success goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-3" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
<div id="alert-additional-content-4" class="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-lg font-medium text-yellow-700 dark:text-yellow-800">This is a warning alert</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
    More info about this info warning goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
<div id="alert-additional-content-5" class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
  <div class="flex items-center">
    <svg class="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">This is a dark alert</h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
    More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <div class="flex">
    <button type="button" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-gray-700 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white" data-dismiss-target="#alert-additional-content-5" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
{{< /example >}}

## JavaScript behaviour

The **Dismiss class** from Flowbite can be used to create an object that will hide a target element or elements based on the parameters, options, and methods that you provide.

### Object parameters

The parameters for the Dismiss object can be used to programatically initialize and manipulate the behaviour of the dismissal of multiple elements.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs font-medium uppercase">
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
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">targetQuery</code>
              </td>
              <td class="px-6 py-4">
                  String
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Apply the query value for <code>querySelectorAll</code> for the target elements that will be dismissed.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">triggerElement</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Set an optional element object which will dismiss all the target elements when clicked.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">options</code>
              </td>
              <td class="px-6 py-4">
                Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Set these options to override the default transition, duration, and timing function of the dismiss animation.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Options

Use these optional options for the Dismiss object to set the transition, duration, and timing function types based on the utility classes from Tailwind CSS.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-4000">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs font-medium uppercase">
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
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">transition</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">String</code>
              </td>
              <td class="px-6 py-4">
                  Use one of the Transition Property utility classes from Tailwind CSS to set transition type for the main element. The default value is <code class="text-purple-600 dark:text-purple-400">transition-opacity</code>.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">duration</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">Integer</code>
              </td>
              <td class="px-6 py-4">
                  Set the duration of the dismissing animation. The default value is <code class="text-purple-600 dark:text-purple-400">300</code> (300 miliseconds).
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">timing</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">String</code>
              </td>
              <td class="px-6 py-4">
                  Set the transition timing function utility class from Tailwind CSS. The default value is <code class="text-purple-600 dark:text-purple-400">ease-out</code>.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">onHide</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">Function</code>
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the item has been dismissed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the following methods on the Dismiss object to programatically manipulate the behaviour.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs font-medium uppercase">
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
              <td class="px-6 py-4 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">hide()</code>
              </td>
              <td class="px-6 py-4">
                  Use the <code class="text-blue-600 dark:text-blue-400">hide()</code> method on the Dismiss object to hide all target elements.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Dismiss object:

```javascript
// dismiss all elements based on querySelectorAll
const targetQuery = '#alertId';

// element which trigger the dismiss based on a click
const triggerEl = document.getElementById('closeButton');

// optional options with default values
const options = {
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out'
};

/*
* targetQuery: required
* triggerEl: optional
* options: optional
*/
const alert = new Dismiss(targetQuery, triggerEl, options);

// hide the target element or elements
alert.hide();
```
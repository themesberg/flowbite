---
layout: home
title: Alerts
description: Show contextual information as a feedback to the users using your website
group: components
toc: true
---

{{< prose >}}
## Default alerts

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<!-- Alert -->
<div class="bg-blue-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-blue-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-red-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-green-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-green-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-yellow-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-yellow-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-gray-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-gray-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
{{< /example >}}

{{< prose >}}
## Dismissable alerts

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<!-- Alert -->
<div class="bg-blue-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-blue-700">
        A simple info alert with an <a href="#" class="font-semibold hover:text-blue-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-red-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-red-700">
        A simple danger alert with an <a href="#" class="font-semibold hover:text-red-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-green-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-green-700">
        A simple success alert with an <a href="#" class="font-semibold hover:text-green-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-yellow-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-yellow-700">
        A simple warning alert with an <a href="#" class="font-semibold hover:text-yellow-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-gray-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-700">
        A simple dark alert with an <a href="#" class="font-semibold hover:text-gray-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

{{< prose >}}
## Bordered
Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div class="bg-blue-100 rounded-lg border border-blue-300 p-4 mb-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div class="h-8 w-8 rounded-lg bg-blue-700 text-white flex items-center justify-center">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-blue-700">
        A simple info alert with an <a href="#" class="font-semibold hover:text-blue-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 justify-end">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-red-100 rounded-lg border border-red-300 p-4 mb-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div class="h-8 w-8 rounded-lg bg-red-700 text-white flex items-center justify-center">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-red-700">
        A simple danger alert with an <a href="#" class="font-semibold hover:text-red-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-green-100 rounded-lg border border-green-300 p-4 mb-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div class="h-8 w-8 rounded-lg bg-green-700 text-white flex items-center justify-center">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-green-700">
        A simple success alert with an <a href="#" class="font-semibold hover:text-green-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-yellow-100 rounded-lg border border-yellow-300 p-4 mb-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div class="h-8 w-8 rounded-lg bg-yellow-700 text-white flex items-center justify-center">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-yellow-700">
        A simple warning alert with an <a href="#" class="font-semibold hover:text-yellow-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-gray-100 rounded-lg border border-gray-300 p-4 mb-4">
  <div class="flex items-center">
    <div class="flex-shrink-0">
      <div class="h-8 w-8 rounded-lg bg-gray-700 text-white flex items-center justify-center">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-700">
        A simple dark alert with an <a href="#" class="font-semibold hover:text-gray-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

{{< prose >}}
## With accent border
Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div class="bg-blue-100 border-t-4 border-blue-500 p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-blue-700">
        A simple info alert with an <a href="#" class="font-semibold hover:text-blue-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-red-100 border-t-4 border-red-500 p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-green-100 border-t-4 border-green-500 p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-green-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-yellow-100 border-t-4 border-yellow-500 p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-yellow-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
<!-- Alert -->
<div class="bg-gray-100 border-t-4 border-gray-500 p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-gray-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
{{< /example >}}

{{< prose >}}
## Additional content
Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<!-- Alert -->
<div class="bg-blue-100 rounded-lg p-4 mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-blue-700 text-lg font-medium">
      Note !     
    </h3>
  </div>
  <div class="mt-2 text-sm text-blue-700">
    <p>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
  </div>
  <div class="flex mt-4">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      Dismiss
    </button>
  </div>
</div>
<!-- Alert -->
<div class="bg-red-100 rounded-lg p-4 mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-red-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
    <h3 class="text-red-700 text-lg font-medium">
      Credit Card expired !     
    </h3>
  </div>
  <div class="mt-2 text-sm text-red-700">
    <p>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
  </div>
  <div class="flex mt-4">
    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
      Update details
    </button>
    <button type="button" class="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      Dismiss
    </button>
  </div>
</div>
<!-- Alert -->
<div class="bg-green-100 rounded-lg p-4 mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <h3 class="text-green-700 text-lg font-medium">
      Your file was uploaded!     
    </h3>
  </div>
  <div class="mt-2 text-sm text-green-700">
    <p>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
  </div>
  <div class="flex mt-4">
    <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
      Copy link
    </button>
    <button type="button" class="text-green-700 bg-transparent border border-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      Done
    </button>
  </div>
</div>
<!-- Alert -->
<div class="bg-yellow-100 rounded-lg p-4 mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-yellow-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <h3 class="text-yellow-700 text-lg font-medium">
      Caution!     
    </h3>
  </div>
  <div class="mt-2 text-sm text-yellow-700">
    <p>
      This email originated from outside of the organization. Do not click links or open attachments unless you recognize the sender and know the content is safe.
    </p>
  </div>
  <div class="flex mt-4">
    <button type="button" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      Show
    </button>
    <button type="button" class="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      Dismiss
    </button>
  </div>
</div>
<!-- Alert -->
{{< /example >}}
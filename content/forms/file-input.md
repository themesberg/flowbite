---
layout: home
title: Tailwind CSS File Input - Flowbite
description: Get started with the file input element to let the user to choose one or more files from their device storage based on multiple styles and sizes
group: forms
toc: true

previous: Input Field
previousLink: forms/input-field/
next: Search Input
nextLink: forms/search-input/
---

## File input example

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">A profile picture is useful to confirm your are logged into your account.</p>
{{< /example >}}

## Multiple files

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload multiple files</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="multiple_files_help" id="multiple_files" type="file" multiple>
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="multiple_files_help">Upload screenshots for your web application as SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
{{< /example >}}

## Disabled state

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload multiple files</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="multiple_files_help" id="multiple_files" type="file" disabled>
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="multiple_files_help">Upload screenshots for your web application as SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
{{< /example >}}

## Sizes

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Small file input</label>
<input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="multiple_files_help" id="multiple_files" type="file">

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Default size</label>
<input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="multiple_files_help" id="multiple_files" type="file">

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Large file input</label>
<input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="multiple_files_help" id="multiple_files" type="file">
{{< /example >}}

## Dropzone

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex items-center justify-center w-full">
    <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input type="file" class="hidden" />
    </label>
</div> 
{{< /example >}}

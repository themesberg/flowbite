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

The file input component can be used to receive one or more files from the device storage of the user available in multiple sizes, styles, and variants and built with the utility-first classes from Tailwind CSS including support for dark mode.

## File input example

Get started with a simple file input component to let users upload one single file.

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
{{< /example >}}

## Helper text

Add a descriptive helper text to inform users the allowed extensions and sizes of the files.

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
{{< /example >}}

## Multiple files

Apply the `multiple` attribute to the file input component to allow more files to be uploaded.

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload multiple files</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>
{{< /example >}}

## Sizes

Choose from the small, default, and large file input sizing options.

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="small_size">Small file input</label>
<input class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file">

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="default_size">Default size</label>
<input class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file">

<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="large_size">Large file input</label>
<input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file">
{{< /example >}}

## Dropzone

The dropzone file input component can be used to upload one or more files by clicking anywhere in the area.

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
{{< /example >}}
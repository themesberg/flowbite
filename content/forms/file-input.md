---
layout: docs
title: Tailwind CSS File Input - Flowbite
description: Get started with the file input component to let the user to upload one or more files from their device storage based on multiple styles and sizes
group: forms
toc: true
requires_js: true

previous: Input Field
previousLink: forms/input-field/
next: Search Input
nextLink: forms/search-input/
---

The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, and variants and built with the utility-first classes from Tailwind CSS including support for dark mode.

Make sure that you have included Flowbite as a plugin inside your Tailwind CSS project to apply all the necessary styles for the file input component.

## File upload example

Get started with a simple file input component to let users upload one single file.

{{< example github="forms/file-input.md" show_dark=true >}}
<label class="block mb-2.5 text-sm font-medium text-heading" for="file_input">Upload file</label>
<input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" type="file">
{{< /example >}}

## Helper text

Add a descriptive helper text to inform users the allowed extensions and sizes of the files.

{{< example github="forms/file-input.md" show_dark=true >}}
<label class="block mb-2.5 text-sm font-medium text-heading" for="file_input">Upload file</label>
<input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" aria-describedby="file_input_help" id="file_input" type="file">
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
{{< /example >}}

## Multiple files

Apply the `multiple` attribute to the file input component to allow more files to be uploaded.

{{< example github="forms/file-input.md" show_dark=true >}}
<label class="block mb-2.5 text-sm font-medium text-heading" for="multiple_files">Upload multiple files</label>
<input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="multiple_files" type="file" multiple>
{{< /example >}}

## Sizes

Choose from the small, default, and large file input sizing options.

{{< example class="space-y-6" github="forms/file-input.md" show_dark=true >}}
<label class="block mb-2.5 text-sm font-medium text-heading" for="small_size">Base file input</label>
<input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="small_size" type="file">


<label class="block mb-2.5 text-sm font-medium text-heading" for="large_size">Large file input</label>
<input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-lg rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="large_size" type="file">
{{< /example >}}

## Dropzone

The dropzone file input component can be used to upload one or more files by clicking anywhere in the area.

{{< example class="space-y-6" github="forms/file-input.md" show_dark=true >}}
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
        <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
            <svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
            <p class="mb-2 text-sm"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
{{< /example >}}

## Dropzone with button

Use this dropzone component to upload files with a button element.

{{< example class="space-y-6" github="forms/file-input.md" show_dark=true >}}
<div class="flex items-center justify-center w-full">
  <div class="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base">
    <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
      <svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/></svg>
      <p class="mb-2 text-sm">Click the button below to upload</p>
      <p class="text-xs mb-4">Max. File Size: <span class="font-semibold">30MB</span></p>
      <!-- Upload Button -->
      <button type="button" onclick="document.getElementById('dropzone-file-2').click()" class="inline-flex items-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Browse file
      </button>
    </div>
  </div>
  <!-- Hidden File Input (Outside Label) -->
  <input id="dropzone-file-2" type="file" class="hidden" />
</div>
{{< /example >}}
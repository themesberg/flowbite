---
layout: home
title: Tailwind CSS Floating Label - Flowbite
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
group: forms
toc: true

previous: Range Slider
previousLink: forms/range-slider/
next: Datepicker
nextLink: plugins/datepicker/
---

## Floating label example

Use these form elements inspired by material design from Google to adjust the `label` tag as the visual placeholder for the input elements using the `peer-placeholder-shown` and `peer-focus` utility classes. These components require Tailwind CSS v3.x and above.

{{< example class="grid items-end gap-6 lg:grid-cols-3 dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="relative z-0 w-full group">
    <input type="text" id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating filled</label>
</div>
<div class="relative z-0 w-full group">
    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
</div>
<div class="relative z-0 w-full group">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Floating standard</label>
</div>
{{< /example >}}

## Disabled state

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="relative z-0 w-full group">
      <input type="email" id="disabled" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled/>
      <label for="disabled" class="absolute text-sm text-gray-400 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
{{< /example >}}

## Validation

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="relative z-0 w-full mb-6 group">
    <input type="text" aria-describedby="success-message-explanation" id="floating_success" class="block py-2.5 px-0 w-full text-sm text-green-600 bg-transparent border-0 border-b-2 appearance-none dark:text-green-400 dark:border-green-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 border-green-600 focus:border-green-600 peer" placeholder=" "/>
    <label for="floating_success" class="absolute text-sm text-green-600 dark:text-green-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 dark:peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Success input</label>
    <p id="success-message-explanation" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium">Well done!</span> Some success message.</p>
</div>
<div class="relative z-0 w-full group">
    <input type="text" aria-describedby="error-message-explanation" id="floating_error" class="block py-2.5 px-0 w-full text-sm text-red-600 bg-transparent border-0 border-b-2 appearance-none dark:text-red-400 dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 peer" placeholder=" "/>
    <label for="floating_error" class="absolute text-sm text-red-600 dark:text-red-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 dark:peer-focus:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Error input</label>
    <p id="error-message-explanation" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
</div>  
{{< /example >}}

## Filled

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="relative z-0 w-full mb-6 group">
      <input type="email" id="email_background" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="email_background" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email address</label>
  </div> 
{{< /example >}}

## Outlined

{{< example class="dark:bg-gray-800" github="components/forms.md" show_dark=true >}}
<div class="relative z-0 w-full mb-6 group">
      <input type="email" id="email_background" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="email_background" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email address</label>
  </div> 
{{< /example >}}
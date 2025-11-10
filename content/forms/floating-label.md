---
layout: docs
title: Tailwind CSS Floating Label - Flowbite
description: Use the floating label style for the input field elements to replicate the Material UI design system from Google and choose from multiple styles and sizes
group: forms
toc: true

previous: Range Slider
previousLink: forms/range/
next: Headings
nextLink: typography/headings/
---

The floating label style was first pioneered by Google in its infamous Material UI design system and it's basically a label tag which floats just above the input field when it is being focused or already has content inside.

On this page you will find a three different input field styles including a standard, outlined, and filled style including validation styles and sizes coded with Tailwind CSS and supported for dark mode.

## Floating label example

Get started with the following three styles for the floating label component and use the `label` tag as a visual placeholder using the `peer-placeholder-shown` and `peer-focus` utility classes from Tailwind CSS.

{{< example class="grid items-end w-full gap-6 md:grid-cols-3" github="forms/floating-label.md" show_dark=true >}}
<div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-neutral-secondary-medium border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_filled" class="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating filled</label>
</div>
<div class="relative">
    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_outlined" class="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Floating outlined</label>
</div>
<div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_standard" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating standard</label>
</div>
{{< /example >}}

## Floating label with icons

Use these examples of floating label input fields with a descriptive [SVG icon](https://flowbite.com/icons/).

{{< example class="grid items-end w-full gap-6 md:grid-cols-3" github="forms/floating-label.md" show_dark=true >}}
<div class="relative">
    <input type="text" id="floating_filled" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-neutral-secondary-medium border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_filled" class="inline-flex items-center absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
    Floating filled
    </label>
</div>
<div class="relative">
    <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_outlined" class="inline-flex items-center absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
        Floating outlined
    </label>
</div>
<div class="relative z-0">
    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_standard" class="inline-flex items-center absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
    <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
    Floating standard
    </label>
</div>
{{< /example >}}

## Disabled state

Apply the `disabled` attribute to the input fields to disallow the user from changing the content.

{{< example class="grid items-end gap-6 md:grid-cols-3" github="forms/floating-label.md" show_dark=true >}}
<div class="relative">
    <input type="text" id="disabled_filled" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-neutral-secondary-medium border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " disabled />
    <label for="disabled_filled" class="absolute text-sm text-fg-disabled duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Disabled filled</label>
</div>
<div class="relative">
    <input type="text" id="disabled_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " disabled />
    <label for="disabled_outlined" class="absolute text-sm text-fg-disabled duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Disabled outlined</label>
</div>
<div class="relative z-0">
    <input type="text" id="disabled_standard" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " disabled />
    <label for="disabled_standard" class="absolute text-sm text-fg-disabled duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Disabled standard</label>
</div>
{{< /example >}}

## Validation

Use the following examples of input validation for the success and error messages by applying the validation text below the input field and using the green or red color classes from Tailwind CSS.

{{< example github="forms/floating-label.md" show_dark=true >}}
<!-- Success messages -->
<div class="grid items-end gap-6 mb-6 md:grid-cols-3">
    <div>
        <div class="relative">
            <input type="text" id="filled_success" aria-describedby="filled_success_help" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-success-soft border-0 border-b-2 border-success appearance-none focus:outline-none focus:ring-0 focus:border-success peer" placeholder=" " />
            <label for="filled_success" class="absolute text-sm text-fg-success-strong duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Filled success</label>
        </div>
        <p id="filled_success_help" class="mt-2 text-xs text-fg-success-strong"><span class="font-medium">Well done!</span> Some success message.</p>
    </div>
    <div>   
        <div class="relative">
            <input type="text" id="outlined_success" aria-describedby="outlined_success_help" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-success appearance-none focus:outline-none focus:ring-0 focus:border-success peer" placeholder=" " />
            <label for="outlined_success" class="absolute text-sm text-fg-success-strong duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Outlined success</label>
        </div>
        <p id="outlined_success_help" class="mt-2 text-xs text-fg-success-strong"><span class="font-medium">Well done!</span> Some success message.</p>    
    </div>
    <div>
        <div class="relative z-0">
            <input type="text" id="standard_success" aria-describedby="standard_success_help" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-success appearance-none focus:outline-none focus:ring-0 focus:border-success peer" placeholder=" " />
            <label for="standard_success" class="absolute text-sm text-fg-success-strong duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Standard success</label>
        </div>
        <p id="standard_success_help" class="mt-2 text-xs text-fg-success-strong"><span class="font-medium">Well done!</span> Some success message.</p>
    </div>
</div>

<!-- Error messages -->
<div class="grid items-end gap-6 md:grid-cols-3">
    <div>
        <div class="relative">
            <input type="text" id="filled_error" aria-describedby="filled_error_help" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-danger-soft border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-danger focus:border-danger peer" placeholder=" " />
            <label for="filled_error" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 text-fg-danger-strong peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Filled error</label>
        </div>
        <p id="filled_error_help" class="mt-2 text-xs text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
    </div>
    <div>   
        <div class="relative">
            <input type="text" id="outlined_error" aria-describedby="outlined_error_help" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 appearance-none border-danger focus:outline-none focus:ring-0 focus:border-danger peer" placeholder=" " />
            <label for="outlined_error" class="absolute text-sm text-fg-danger-strong duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Outlined error</label>
        </div>
        <p id="outlined_error_help" class="mt-2 text-xs text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span> Some error message.</p>    
    </div>
    <div>
        <div class="relative z-0">
            <input type="text" id="standard_error" aria-describedby="standard_error_help" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-danger appearance-none focus:outline-none focus:ring-0 focus:border-danger peer" placeholder=" " />
            <label for="standard_error" class="absolute text-sm text-fg-danger-strong duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Standard error</label>
        </div>
        <p id="standard_error_help" class="mt-2 text-xs text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
    </div>
</div>
{{< /example >}}

## Sizes

Use the small and default sizes of the floating label input fields from the following example.

{{< example github="forms/floating-label.md" show_dark=true >}}
<div class="grid items-end gap-6 mb-6 md:grid-cols-3">
    <div class="relative">
        <input type="text" id="small_filled" class="block rounded-t-base px-2.5 pb-1.5 pt-4 w-full text-sm text-heading bg-neutral-secondary-medium border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
        <label for="small_filled" class="absolute text-sm text-body duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Small filled</label>
    </div>
    <div class="relative">
        <input type="text" id="small_outlined" class="block px-2.5 pb-1.5 pt-3 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
        <label for="small_outlined" class="absolute text-sm text-body duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Small outlined</label>
    </div>
    <div class="relative z-0">
        <input type="text" id="small_standard" class="block w-full px-0 py-2 text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
        <label for="small_standard" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Small standard</label>
    </div>
</div>
<div class="grid items-end gap-6 md:grid-cols-3">
    <div class="relative">
        <input type="text" id="default_filled" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-neutral-secondary-medium border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
        <label for="default_filled" class="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Default filled</label>
    </div>
    <div class="relative">
        <input type="text" id="default_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-heading bg-transparent rounded-base border-1 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
        <label for="default_outlined" class="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-primary px-2 peer-focus:px-2 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Default outlined</label>
    </div>
    <div class="relative z-0">
        <input type="text" id="default_standard" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
        <label for="default_standard" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Default standard</label>
    </div>
</div>
{{< /example >}}

## Helper text

Add a helper text in addition to the label if you want to show more information below the input field.

{{< example github="forms/floating-label.md" show_dark=true >}}
<div class="relative">
    <input type="text" id="floating_helper" aria-describedby="floating_helper_text" class="block rounded-t-base px-2.5 pb-2.5 pt-5 w-full text-sm text-heading bg-neutral-secondary-medium border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " />
    <label for="floating_helper" class="absolute text-sm text-body duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating helper</label>
</div>
<p id="floating_helper_text" class="mt-2.5 text-xs text-body">Remember, contributions to this topic should follow our <a href="#" class="text-fg-brand hover:underline">Community Guidelines</a>.</p>
{{< /example >}}
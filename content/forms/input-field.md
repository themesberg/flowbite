---
layout: docs
title: Tailwind CSS Input Field - Flowbite
description: Get started with a collection of input fields built with Tailwind CSS to start accepting data from the user based on multiple sizes, variants, and input types
group: forms
toc: true

previous: Video
previousLink: components/video/
next: File Input
nextLink: forms/file-input/
---

The input field is an important part of the form element that can be used to create interactive controls to accept data from the user based on multiple input types, such as text, email, number, password, URL, phone number, and more.

On this page you will find all of the input types based on multiple variants, styles, colors, and sizes built with the utility classes from Tailwind CSS and components from Flowbite.

## Input fields

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

{{< example github="forms/input-field.md" show_dark=true >}}
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading">First name</label>
            <input type="text" id="first_name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2.5 text-sm font-medium text-heading">Last name</label>
            <input type="text" id="last_name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Doe" required />
        </div>
        <div>
            <label for="company" class="block mb-2.5 text-sm font-medium text-heading">Company</label>
            <input type="text" id="company" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Flowbite" required />
        </div>  
        <div>
            <label for="phone" class="block mb-2.5 text-sm font-medium text-heading">Phone number</label>
            <input type="tel" id="phone" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label for="website" class="block mb-2.5 text-sm font-medium text-heading">Website URL</label>
            <input type="url" id="website" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="flowbite.com" required />
        </div>
        <div>
            <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Unique visitors (per month)</label>
            <input type="number" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required />
        </div>
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Email address</label>
        <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="john.doe@company.com" required />
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Password</label>
        <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2.5 text-sm font-medium text-heading">Confirm password</label>
        <input type="password" id="confirm_password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-heading">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>
{{< /example >}}

## Input sizes

Use the following examples to apply a small, default or large size for the input fields.

{{< example class="space-y-6" github="forms/input-field.md" show_dark=true >}}
        <div>
            <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Small Input</label>
            <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
        </div>
        <div>
            <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Base Input</label>
            <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required />
        </div>
        <div>
            <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Large Input</label>
            <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body" placeholder="" required />
        </div>
        <div>
            <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Extra Large Input</label>
            <input type="text" id="visitors" class="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="" required />
        </div>
{{< /example >}}

## Disabled state

Get started with this example if you want to apply the disabled state to an input field.

{{< example class="space-y-6" github="forms/input-field.md" show_dark=true >}}
<input type="text" id="disabled-input" aria-label="disabled input" class="bg-neutral-secondary-medium border border-default-medium text-fg-disabled text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" value="Disabled input" disabled>
<input type="text" id="disabled-input-2" aria-label="disabled input 2" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" value="Disabled readonly input" disabled readonly>
{{< /example >}}

## Validation

Use the following example to apply validation styles for success and error messages.

{{< example github="forms/input-field.md" show_dark=true >}}
<div class="mb-6">
  <label for="success" class="block mb-2.5 text-sm font-medium text-fg-success-strong">Your name</label>
  <input type="text" id="success" class="bg-success-soft border border-success-subtle text-fg-success-strong text-sm rounded-base focus:ring-success focus:border-success block w-full px-3 py-2.5 shadow-xs placeholder:text-fg-success-strong" placeholder="Success input">
  <p class="mt-2.5 text-sm text-fg-success-strong"><span class="font-medium">Well done!</span> Some success message.</p>
</div>
<div class="mb-6">
  <label for="danger" class="block mb-2.5 text-sm font-medium text-fg-danger-strong">Your name</label>
  <input type="text" id="danger" class="bg-danger-soft border border-danger-subtle text-fg-danger-strong text-sm rounded-base focus:ring-danger focus:border-danger block w-full px-3 py-2.5 shadow-xs placeholder:text-fg-danger-strong" placeholder="Error input">
  <p class="mt-2.5 text-sm text-fg-danger-strong"><span class="font-medium">Oh, snapp!</span> Some error message.</p>
</div>
{{< /example >}}

## Input group

This example can be used to add a descriptive icon or additional text inside the input field.

{{< example class="space-y-6" github="forms/input-field.md" show_dark=true >}}
<label for="input-group-1" class="block mb-2.5 text-sm font-medium text-heading">Your Email</label>
<div class="relative">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
  </div>
  <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="name@flowbite.com">
</div>
<label for="website-admin" class="block mb-2.5 text-sm font-medium text-heading">Username</label>
<div class="flex shadow-xs rounded-base">
  <span class="inline-flex items-center px-3 text-sm text-body bg-neutral-tertiary border rounded-e-0 border-default-medium border-e-0 rounded-s-base">
    <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
  </span>
  <input type="text" id="website-admin" class="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body" placeholder="elonmusk">
</div>

<label for="website" class="block mb-2.5 text-sm font-medium text-heading">Website</label>
<div class="flex shadow-xs rounded-base">
  <span class="inline-flex items-center px-3 text-sm text-body bg-neutral-tertiary border rounded-e-0 border-default-medium border-e-0 rounded-s-base">
https://
  </span>
  <input type="text" id="website" class="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body" placeholder="flowbite.com">
</div>
{{< /example >}}

## Helper text

Use this example to show a helper text below the input field for additional explanation and links.

{{< example github="forms/input-field.md" show_dark=true >}}
<label for="input-group-1" class="block mb-2.5 text-sm font-medium text-heading">Your Email</label>
<div class="relative">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
  </div>
  <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="name@flowbite.com">
</div>
<p id="helper-text-explanation" class="mt-2.5 text-sm text-body">We’ll never share your details. Read our <a href="#" class="font-medium text-fg-brand hover:underline">Privacy Policy</a>.</p>
{{< /example >}}

## Search input

Get started with this example where the submit button is positioned inside the input field.

{{< example github="forms/input-field.md" show_dark=true >}}
<form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
        <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
    </div>
</form>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Dropdown input

Use this example to show a dropdown menu right next to the input field.

{{< example github="forms/input-field.md" show_dark=true iframeHeight="290" >}}
<form>
    <div class="flex shadow-xs rounded-base -space-x-0.5">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
            All categories
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button">
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Shopping</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Images</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">News</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Finance</a>
                </li>
            </ul>
        </div>
        <input type="search" id="search-dropdown" id="input-group-1" class="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search for products" required>
        <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Search
        </button>
    </div>
</form>
{{< /example >}}

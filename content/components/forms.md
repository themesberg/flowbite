---
layout: docs
title: Tailwind CSS Forms - Flowbite
description: Use the Tailwind CSS form and input elements such as checkboxes, radios, textarea, text inputs to collect information from users with Flowbite
group: components
toc: true
requires_js: true

previous: Footer
previousLink: components/footer/
next: Gallery
nextLink: components/gallery/
---

Get started with these custom Tailwind CSS form components to gather information from your users using input text elements, checkboxes, radios, textareas, selects, file uploads, toggle switches, and more.

## Default form

This is an example of a form component including an email, password, checkbox, and submit button that you can use as a starting point for any form element in your website using Flowbite and Tailwind CSS.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
  </div>
  <label for="remember" class="flex items-center mb-5">
    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
    <p class="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</p>
  </label>
  <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_tw3 >}}
</div>

## Floating labels

Use these form elements inspired by material design from Google to adjust the `label` tag as the visual placeholder for the input elements using the `peer-placeholder-shown` and `peer-focus` utility classes. These components require Tailwind CSS v3.x and above.

{{< example github="components/forms.md" show_dark=true >}}

<form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
      <label for="floating_email" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
      <label for="floating_password" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
      <label for="floating_repeat_password" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label for="floating_first_name" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label for="floating_last_name" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label for="floating_phone" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label for="floating_company" class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>
{{< /example >}}

## Input Sizes

Use the following utility classes to create three different sizing options (large, base, and small) for your form input elements.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto space-y-4">
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
</form>
{{< /example >}}

## Disabled inputs

Use the following utility classes to indicate a disabled form input item.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto space-y-4">
  <input type="text" id="disabled-input" aria-label="disabled input" class="bg-neutral-secondary-medium border border-default-medium text-fg-disabled text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" value="Disabled input" disabled>
  <input type="text" id="disabled-input-2" aria-label="disabled input 2" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" value="Disabled readonly input" disabled readonly>
</form>
{{< /example >}}

## Shadow inputs

Alternatively, you can decide to apply a shadow styling using the `shadow-xs` class to any of your form input elements.

{{< example github="components/forms.md" show_dark=true >}}

<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email-alternative" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" id="email-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password-alternative" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password" id="password-alternative" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body" placeholder="••••••••" required />
  </div>
  <div class="flex items-start mb-5">
    <label for="remember-alternative" class="flex items-center h-5">
      <input id="remember-alternative" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
      <p class="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</p>
    </label>
  </div>
  <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>

{{< /example >}}

## Helper text

Use the following markup to also add a helper text below your form input item. Usually used for newsletter signup elements.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto"> 
  <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
  <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com">

  <p id="helper-text-explanation" class="mt-2.5 text-sm text-body">Read our <a href="#" class="font-medium text-fg-brand hover:underline ">Privacy Policy</a>.</p>
</form>
{{< /example >}}

## Input element with icon

Use the following Tailwind utility classes and [SVG icon](https://flowbite.com/icons/) to add an icon inside input form elements.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
  <label for="input-group-1" class="block mb-2.5 text-sm font-medium text-heading">Your Email</label>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
    </div>
    <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="name@flowbite.com">
  </div>
</form>
{{< /example >}}

## Input element with addon

Use this example to add a SVG icon or special character with an addon style to the input element.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
  <label for="website-admin" class="block mb-2.5 text-sm font-medium text-heading">Username</label>
  <div class="flex shadow-xs rounded-base">
    <span class="inline-flex items-center px-3 text-sm text-body bg-neutral-tertiary border rounded-e-0 border-default-medium border-e-0 rounded-s-base">
      <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
    </span>
    <input type="text" id="website-admin" class="rounded-none rounded-e-base block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:text-body" placeholder="elonmusk">
  </div>
</form>
{{< /example >}}

## Form validation

Use the following two success and error styles when validation your forms.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
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
</form>
{{< /example >}}

## Textarea

Use the following code to create a textarea form element.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
  <label for="message" class="block mb-2.5 text-sm font-medium text-heading">Your message</label>
  <textarea id="message" rows="4" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>
</form>
{{< /example >}}

## Select input

Use the following select input element to show selectable list of items.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
  <label for="countries" class="block mb-2.5 text-sm font-medium text-heading">Select an option</label>
  <select id="countries" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>
{{< /example >}}

## Checkbox

The code below can be used to create a fieldset of checkbox elements inside a form. We also created a checkbox variant with extra description and one in a disabled form.

{{< example github="components/forms.md" show_dark=true >}}

<fieldset>
  <legend class="sr-only">Checkbox variants</legend>

  <div class="flex items-center mb-4">
      <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" >
      <label for="checkbox-1" class="ms-2 text-sm font-medium text-heading select-none">I agree to the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</label>
  </div>

  <div class="flex items-center mb-4">
      <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
      <label for="checkbox-2" class="ms-2 text-sm font-medium text-heading select-none">I want to get promotional offers</label>
  </div>

  <div class="flex items-center mb-4">
      <input id="checkbox-3" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
      <label for="checkbox-3" class="ms-2 text-sm font-medium text-heading select-none">I am 18 years or older</label>
  </div>
  
  <div class="flex mb-4">
      <div class="flex items-center h-5">
          <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
      </div>
      <div class="ms-2 text-sm select-none">
          <label for="helper-checkbox" class="text-sm font-medium text-heading">Free shipping via Flowbite</label>
          <p id="helper-checkbox-text" class="text-xs text-body">For orders shipped from $25 in books or $29 in other categories</p>
      </div>
  </div>

  <div class="flex items-center">
      <input id="international-shipping-disabled" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" disabled>
      <label for="international-shipping-disabled" class="ms-2 text-sm font-medium text-fg-disabled select-none">Eligible for international shipping (disabled)</label>
  </div>
</fieldset>
{{< /example >}}

## Radio buttons

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example github="components/forms.md" show_dark=true >}}

<fieldset>
  <legend class="sr-only">Countries</legend>

  <div class="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none" checked>
    <label for="country-option-1" class="select-none ms-2 text-sm font-medium text-heading">
      United States
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
    <label for="country-option-2" class="select-none ms-2 text-sm font-medium text-heading">
      Germany
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-3" type="radio" name="countries" value="Spain" class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
    <label for="country-option-3" class="select-none ms-2 text-sm font-medium text-heading">
      Spain
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" value="United Kingdom" class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none">
    <label for="country-option-4" class="select-none ms-2 text-sm font-medium text-heading">
      United Kingdom
    </label>
  </div>

  <div class="flex items-center">
    <input id="option-disabled" type="radio" name="countries" value="China" class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none" disabled>
    <label for="option-disabled" class="block ms-2 text-sm font-medium text-fg-disabled select-none">
      China (disabled)
    </label>
  </div>
</fieldset>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## File upload

Use the following Tailwind CSS file upload element to receive any type of file from users.

{{< example github="components/forms.md" show_dark=true >}}
<form class="max-w-lg mx-auto">
  <label class="block mb-2.5 text-sm font-medium text-heading" for="file_input">Upload file</label>
  <input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" type="file">
</form>
{{< /example >}}

## Toggle Switch

Use the following toggle switch component to ask for a yes or no type of input from your users without the use of JavaScript.

{{< example class="flex flex-col flex-wrap space-y-4" github="components/forms.md" show_dark=true >}}
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="ms-3 text-sm font-medium text-heading select-none">Toggle me</span>
</label>

<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked>
  <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
  <span class="ms-3 text-sm font-medium text-heading select-none">Checked toggle</span>
</label>
{{< /example >}}

## More examples

You can check out the following resources for more form components from Flowbite Blocks:

-   [Register forms](https://flowbite.com/blocks/marketing/register/)
-   [Login forms](https://flowbite.com/blocks/marketing/login/)
-   [Reset password forms](https://flowbite.com/blocks/marketing/reset-password/)
-   [Account recovery forms](https://flowbite.com/blocks/marketing/account-recovery/)
-   [Contact forms](https://flowbite.com/blocks/marketing/contact/)
-   [CRUD create forms](https://flowbite.com/blocks/application/crud-create-forms/)
-   [CRUD update forms](https://flowbite.com/blocks/application/crud-update-forms/)
-   [User onboarding forms](https://flowbite.com/blocks/marketing/user-onboarding/)

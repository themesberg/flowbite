---
layout: home
title: Forms
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

{{< prose >}}
## Default

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <label for="email-address" class="sr-only">Email address</label>
  <input type="text" name="email" id="email-address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
</div>
{{< /example >}}

{{< prose >}}
## With shadow

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <label for="email-address-example-2" class="sr-only">Email address</label>
  <input type="text" name="email" id="email-address-example-2" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
</div>
{{< /example >}}

{{< prose >}}
## With label

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <label for="email-address-example-3" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
  <input type="text" name="email" id="email-address-example-3" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
</div>
{{< /example >}}

{{< prose >}}
## With help text

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="email-address-help-text" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
  <!-- Input -->
  <input type="text" name="email" id="email-address-help-text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
  <!-- Help text -->
  <p class="mt-2 text-sm text-gray-500">We’ll never share your details. See our <a href="#" class="font-medium">Privacy Policy</a></p>
</div>
{{< /example >}}

{{< prose >}}
## Textarea

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="message" class="text-sm font-medium text-gray-900 block mb-2">Your message</label>
  <!-- Textarea -->
  <textarea id="message" name="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></textarea>
</div>
{{< /example >}}

{{< prose >}}
## With icon 

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="email-adress-icon" class="text-sm font-medium text-gray-900 block mb-2">Your Email</label>
  <div class="mt-1 relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <!-- Icon -->
      <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    </div>
    <!-- Input -->
    <input type="text" name="email" id="email-adress-icon" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@company.com">
  </div>
</div>
{{< /example >}}

{{< prose >}}
## With addon 

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="website-admin" class="text-sm font-medium text-gray-900 block mb-2">Username</label>
  <div class="flex">
    <!-- Addon -->
    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-200 text-gray-900 sm:text-sm">
      @
    </span>
    <!-- Input -->
    <input type="text" name="website-admin" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full sm:text-sm border-gray-300 p-2.5" placeholder="Bonnie Green">
  </div>
</div>
{{< /example >}}

{{< prose >}}
## Success form

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="username-success" class="text-sm font-medium text-green-700 block mb-2">Your name</label>
  <!-- Input -->
  <input type="text" name="username" id="username-success" class="bg-green-50 border-green-500 text-green-900 placeholder-green-700 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Bonnie Green">
  <!-- Help text -->
  <p class="mt-2 text-sm text-green-600"><span class="font-medium">Alright!</span> Username available!</p>
</div>
{{< /example >}}

{{< prose >}}
## Error form

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="username-error" class="text-sm font-medium text-red-700 block mb-2">Your name</label>
  <!-- Input -->
  <input type="text" name="username" id="username-error" class="bg-red-50 border-red-500 text-red-900 placeholder-red-700 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="Bonnie Green">
  <!-- Help text -->
  <p class="mt-2 text-sm text-red-600"><span class="font-medium">Oops!</span> Username already taken!</p>
</div>
{{< /example >}}

{{< prose >}}
## Select without label

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="country" class="sr-only">Your country</label>
  <!-- Select -->
  <select id="country" name="country" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option>Select your country</option>
    <option>USA</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</div>
{{< /example >}}

{{< prose >}}
## Select with label

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="country-2" class="text-sm font-medium text-gray-900 block mb-2">Select your country</label>
  <!-- Select -->
  <select id="country-2" name="country" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option>USA</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</div>
{{< /example >}}

{{< prose >}}
## Toggle

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< preview >}}
<div class="flex items-center mb-4">
  <!-- Toggle -->
  <div class="bg-gray-200 border-2 border-gray-200 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer" role="switch" aria-checked="false" aria-labelledby="hide-window-label">
    <span aria-hidden="true" class="bg-white border border-gray-300 h-5 w-5 rounded-full ring-0"></span>
  </div>
  <!-- Toggle description -->
  <span class="ml-3" id="hide-window-label">
    <span class="text-gray-900 text-sm font-medium">Hide window at start up </span>
  </span>
</div>

<div class="flex items-center">
  <!-- Toggle -->
  <div class="bg-blue-600 border-2 border-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer" role="switch" aria-checked="false" aria-labelledby="hide-window-label-preview">
    <span aria-hidden="true" class="bg-white border border-white h-5 w-5 rounded-full ring-0 transform translate-x-5"></span>
  </div>
  <!-- Toggle description -->
  <span class="ml-3" id="hide-window-label-preview">
    <span class="text-gray-900 text-sm font-medium">Hide window at start up </span>
  </span>
</div>
{{< /preview >}}

```html
<div class="flex items-center">
  <!-- Toggle -->
  <div class="bg-gray-200 border-2 border-gray-200 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer" role="switch" aria-checked="false" aria-labelledby="hide-window-label">
    <span aria-hidden="true" class="bg-white border border-gray-300 h-5 w-5 rounded-full ring-0"></span>
  </div>
  <!-- Toggle description -->
  <span class="ml-3" id="hide-window-label">
    <span class="text-gray-900 text-sm font-medium">Hide window at start up </span>
  </span>
</div>

<div class="flex items-center">
  <!-- Toggle -->
  <div class="bg-blue-600 border-2 border-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer" role="switch" aria-checked="false" aria-labelledby="hide-window-label-active">
    <span aria-hidden="true" class="bg-white border border-white h-5 w-5 rounded-full ring-0 transform translate-x-5"></span>
  </div>
  <!-- Toggle description -->
  <span class="ml-3" id="hide-window-label-active">
    <span class="text-gray-900 text-sm font-medium">Hide window at start up </span>
  </span>
</div>
```

{{< prose >}}
## Toggle with icons

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< preview >}}
<div class="flex items-center mb-4">
  <span class="text-yellow-600">
      <svg class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  </span>
  <!-- Toggle -->
  <div class="bg-gray-200 border-2 border-gray-200 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer mx-2" role="switch" aria-checked="false" aria-labelledby="hide-window-label">
    <span aria-hidden="true" class="bg-white border border-gray-300 h-5 w-5 rounded-full ring-0"></span>
  </div>
  <span class="text-blue-600">
    <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
  </span>
</div>

<div class="flex items-center">
  <span class="text-yellow-600">
      <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  </span>
  <!-- Toggle -->
  <div class="bg-blue-600 border-2 border-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer mx-2" role="switch" aria-checked="false" aria-labelledby="hide-window-label">
    <span aria-hidden="true" class="bg-white border border-white h-5 w-5 rounded-full ring-0 transform translate-x-5"></span>
  </div>
  <span class="text-teal-400">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
  </span>
</div>
{{< /preview >}}

```html
<div class="flex items-center">
  <span class="text-yellow-600">
      <svg class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  </span>
  <!-- Toggle -->
  <div class="bg-gray-200 border-2 border-gray-200 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer mx-2" role="switch" aria-checked="false" aria-labelledby="hide-window-label">
    <span aria-hidden="true" class="bg-white border border-gray-300 h-5 w-5 rounded-full ring-0"></span>
  </div>
  <span class="text-blue-600">
    <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
  </span>
</div>

<div class="flex items-center">
  <span class="text-yellow-600">
      <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  </span>
  <!-- Toggle -->
  <div class="bg-blue-600 border-2 border-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex h-6 w-11 rounded-full cursor-pointer mx-2" role="switch" aria-checked="false" aria-labelledby="hide-window-label">
    <span aria-hidden="true" class="bg-white border border-white h-5 w-5 rounded-full ring-0 transform translate-x-5"></span>
  </div>
  <span class="text-teal-400">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
  </span>
</div>
```


{{< prose >}}
## Rounded checkbox with label and description

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<fieldset>
  <legend class="sr-only">Shipping Details</legend>
  <div class="flex items-start mb-4">
    <div class="flex items-center h-5">
      <input id="shipping" aria-describedby="shipping-description" name="shipping" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded">
    </div>
    <div class="text-sm ml-3">
      <label for="shipping" class="font-medium text-gray-900">Free shipping via Flowbite</label>
      <div id="shipping-description" class="text-gray-500"><span class="font-normal text-xs">For orders shipped from Flowbite from <span class="font-medium">€ 25</span> in books or <span>€ 29</span> on other categories</span></div>
    </div>
  </div>
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input id="international-shipping" aria-describedby="international-shipping" name="international-shipping" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked>
    </div>
    <div class="text-sm ml-3">
      <label for="international-shipping" class="font-medium text-gray-900">Eligible for international shipping</label>
    </div>
  </div>
</fieldset>
{{< /example >}}

{{< prose >}}
## Full rounded checkbox with label and description

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<fieldset>
  <legend class="sr-only">Shipping Details</legend>
  <div class="flex items-start mb-4">
    <div class="flex items-center h-5">
      <input id="shipping-2" aria-describedby="shipping-2" name="shipping-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-full">
    </div>
    <div class="text-sm ml-3">
      <label for="shipping-2" class="font-medium text-gray-900">Free shipping via Flowbite</label>
      <div class="text-gray-500"><span class="font-normal text-xs">For orders shipped from Flowbite from <span class="font-medium">€ 25</span> in books or <span>€ 29</span> on other categories</span></div>
    </div>
  </div>
  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input id="international-shipping-2" aria-describedby="international-shipping-2" name="international-shipping-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-full" checked>
    </div>
    <div class="text-sm ml-3">
      <label for="international-shipping-2" class="font-medium text-gray-900">Eligible for international shipping</label>
    </div>
  </div>
</fieldset>
{{< /example >}}

{{< prose >}}
## Disabled

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<fieldset>
  <legend class="sr-only">Shipping Details</legend>
  <div class="flex items-start mb-4">
    <div class="flex items-center h-5">
      <input id="shipping-disabled" aria-describedby="shipping-disabled" name="shipping-disabled" type="checkbox" class="bg-gray-50 text-blue-300 border-gray-200 h-4 w-4 rounded-full" disabled checked>
    </div>
    <div class="text-sm ml-3">
      <label for="shipping-disabled" class="font-medium text-gray-400">Free shipping via Flowbite</label>
      <div class="text-gray-400"><span class="font-normal text-xs">For orders shipped from Flowbite from <span class="font-medium">€ 25</span> in books or <span>€ 29</span> on other categories</span></div>
    </div>
  </div>

  <div class="flex items-start">
    <div class="flex items-center h-5">
      <input id="international-shipping-disabled" aria-describedby="international-shipping-disabled" name="international-shipping" type="checkbox" class="bg-gray-50 border-gray-200 h-4 w-4 rounded-full" disabled>
    </div>
    <div class="text-sm ml-3">
      <label for="international-shipping-disabled" class="font-medium text-gray-400">Eligible for international shipping</label>
    </div>
  </div>
</fieldset>
{{< /example >}}


{{< prose >}}
## Radios

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<fieldset>
  <legend class="sr-only">
    Countries
  </legend>
  <!-- Option 1 -->
  <div class="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1">
    <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
      USA
    </label>
  </div>
  <!-- Option 2 -->
  <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" checked>
    <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
      Germany
    </label>
  </div>
  <!-- Option 3 -->
  <div class="flex items-center mb-4">
    <input id="country-option-3" type="radio" name="countries" value="Spain" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3">
    <label for="country-option-3" class="text-sm font-medium text-gray-900 ml-2 block">
      Spain
    </label>
  </div>
</fieldset>
{{< /example >}}

{{< prose >}}
## Disabled radios

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<fieldset>
  <legend class="sr-only">
    Countries
  </legend>
  <!-- Option 1 -->
  <div class="flex items-center mb-4">
    <input id="option-1" type="radio" name="countries-disabled" value="USA" class="h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300" aria-labelledby="option-1" aria-describedby="option-1" disabled>
    <label for="option-1" class="text-sm font-medium text-gray-400 ml-2 block">
      USA
    </label>
  </div>
  <!-- Option 2 -->
  <div class="flex items-center mb-4">
    <input id="option-2" type="radio" name="countries-disabled" value="Germany" class="h-4 w-4 text-blue-200 border-blue-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="option-2" aria-describedby="option-2" disabled checked>
    <label for="option-2" class="text-sm font-medium text-gray-400 ml-2 block">
      Germany
    </label>
  </div>
</fieldset>
{{< /example >}}

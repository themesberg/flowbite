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
  <input type="text" name="email" id="email-address" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
</div>
{{< /example >}}

{{< prose >}}
## With shadow

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <label for="email-address" class="sr-only">Email address</label>
  <input type="text" name="email" id="email-address" class="shadow-sm bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
</div>
{{< /example >}}

{{< prose >}}
## With label

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <label for="email-address" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
  <input type="text" name="email" id="email-address" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
</div>
{{< /example >}}

{{< prose >}}
## With help text

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="email-address" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
  <!-- Input -->
  <input type="text" name="email" id="email-address" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com">
  <!-- Help text -->
  <p class="mt-2 text-sm text-gray-500" id="email-help">We’ll never share your details. See our <a href="#" class="font-medium">Privacy Policy</a></p>
</div>
{{< /example >}}

{{< prose >}}
## With icon 

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="email-adress" class="text-sm font-medium text-gray-900 block mb-2">Your Email</label>
  <div class="mt-1 relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <!-- Icon -->
      <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
    </div>
    <!-- Input -->
    <input type="text" name="email" id="email-adress" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@company.com">
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
  <label for="username" class="text-sm font-medium text-green-700 block mb-2">Your name</label>
  <!-- Input -->
  <input type="text" name="username" id="username" class="bg-green-50 border-green-500 text-green-900 placeholder-green-700 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Bonnie Green">
  <!-- Help text -->
  <p class="mt-2 text-sm text-green-600" id="username-help"><span class="font-medium">Alright!</span> Username available!</p>
</div>
{{< /example >}}

{{< prose >}}
## Error form

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div>
  <!-- Label -->
  <label for="username" class="text-sm font-medium text-red-700 block mb-2">Your name</label>
  <!-- Input -->
  <input type="text" name="username" id="username" class="bg-red-50 border-red-500 text-red-900 placeholder-red-700 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="Bonnie Green">
  <!-- Help text -->
  <p class="mt-2 text-sm text-red-600" id="username-help"><span class="font-medium">Oops!</span> Username already taken!</p>
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
  <label for="country" class="text-sm font-medium text-gray-900 block mb-2">Select your country</label>
  <!-- Select -->
  <select id="country" name="country" class="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option>USA</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>
</div>
{{< /example >}}

{{< prose >}}
## Toggles

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<button type="button" class="bg-gray-300 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-gray-300 focus:ring-4 focus:ring-blue-300 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200" role="switch" aria-checked="false">
  <span class="sr-only">Use setting</span>
  <span aria-hidden="true" class="bg-white translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"></span>
</button>
{{< /example >}}

{{< prose >}}
## Rounded checkbox

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
  <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="text-blue-600 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded">
{{< /example >}}

{{< prose >}}
## Full rounded checkbox

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
  <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="text-blue-600 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-full">
{{< /example >}}

{{< prose >}}
## With description

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
<div class="flex items-center mb-4">
  <!-- Input -->
  <input id="terms-checkbox" aria-describedby="candidates-description" name="candidates" type="checkbox" class="text-blue-600 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded-full">
  <!-- Label -->
  <label for="terms-checkbox" class="text-sm text-gray-900 ml-2 block">
    I agree to the <a href="#" class="font-medium underline">terms and conditions</a>
  </label>
</div>

<div class="flex items-center">
  <!-- Input -->
  <input id="terms-checkbox" aria-describedby="candidates-description" name="candidates" type="checkbox" class="text-blue-600 bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded">
  <!-- Label -->
  <label for="terms-checkbox" class="text-sm text-gray-900 ml-2 block">
    I agree to the <a href="#" class="font-medium underline">terms and conditions</a>
  </label>
</div>
{{< /example >}}

{{< prose >}}
## Radio

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
  <!-- Radio 1 -->
  <input type="radio" name="option-1" value="Option 1" class="h-4 w-4 border-gray-300 focus:ring-3 focus:ring-blue-500" aria-labelledby="option-1-label" aria-describedby="option-0-description">
  <!-- Radio 2 -->
  <input type="radio" name="option-2" value="Option 2" class="h-4 w-4 border-gray-300 focus:ring-3 focus:ring-blue-500" aria-labelledby="option-2-label" aria-describedby="option-1-description">
  <!-- Radio 3 -->
  <input type="radio" name="option-3" value="Option 3" class="h-4 w-4 border-gray-300 focus:ring-3 focus:ring-blue-500" aria-labelledby="option-2-label" aria-describedby="option-2-description">
{{< /example >}}


{{< prose >}}
## With description

Group a series of buttons together on a single line or stack them in a vertical column.
{{< /prose >}}

{{< example >}}
  <!-- Option 1 -->
  <div class="flex items-center mb-4">
    <input type="radio" name="option-1" value="Option 1" class="h-4 w-4 border-gray-300 focus:ring-3 focus:ring-blue-500" aria-labelledby="option-1-label" aria-describedby="option-1-description">
    <label for="option-1" class="text-sm text-gray-900 ml-2 block">
      Option A
    </label>
  </div>
  <!-- Option 2 -->
  <div class="flex items-center mb-4">
    <input type="radio" name="option-2" value="Option 2" class="h-4 w-4 border-gray-300 focus:ring-3 focus:ring-blue-500" aria-labelledby="option-2-label" aria-describedby="option-2-description">
    <label for="option-2" class="text-sm text-gray-900 ml-2 block">
      Option B
    </label>
  </div>
  <!-- Option 3 -->
  <div class="flex items-center mb-4">
    <input type="radio" name="option-3" value="Option 3" class="h-4 w-4 border-gray-300 focus:ring-3 focus:ring-blue-500" aria-labelledby="option-3-label" aria-describedby="option-3-description">
    <label for="option-3" class="text-sm text-gray-900 ml-2 block">
      Option C
    </label>
  </div>
{{< /example >}}

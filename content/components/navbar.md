---
layout: home
title: Tailwind CSS Navbar - Flowbite
description: Use these responsive Tailwind CSS navbar elements to show a navigational bar at the top side of your website
group: components
toc: true
requires_js: true

previous: Tabs
previousLink: components/tabs/
next: Footer
nextLink: components/footer/
---

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.
## Default navbar

Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate between the pages of your website.

{{< example github="components/navbar.md" show_dark=true >}}
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com" class="flex items-center">
        <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

## Navbar with dropdown

Use this example to create a navigation bar with a user profile or button to toggle a dropdown menu.

{{< example github="components/navbar.md" show_dark=true >}}
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com" class="flex items-center">
      <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
        <div class="py-3 px-4">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{{< /example >}}

## Navbar with search

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

{{< example github="components/navbar.md" show_dark=true >}}
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com" class="flex items-center">
      <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2">
      <div class="hidden relative mr-3 md:mr-0 md:block">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{{< /example >}}

## Navbar with CTA button

Use the following navbar element to show a call to action button alongside the logo and page links.

{{< example github="components/navbar.md" show_dark=true >}}
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com" class="flex items-center">
      <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{{< /example >}}

## JavaScript behaviour

The **Dismiss class** from Flowbite can be used to create an object that will hide a target element or elements based on the parameters, options, and methods that you provide.

### Object parameters

The parameters for the Dismiss object can be used to programatically initialize and manipulate the behaviour of the dismissal of multiple elements.

<div class="overflow-x-auto my-10 shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="py-3 px-6">
                  Parameter
              </th>
              <th scope="col" class="py-3 px-6">
                  Type
              </th>
              <th scope="col" class="py-3 px-6">
                  Required
              </th>
              <th scope="col" class="py-3 px-6">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">targetElement</code>
              </td>
              <td class="py-4 px-6">
                  Element
              </td>
              <td class="py-4 px-6">
                  Required
              </td>
              <td class="py-4 px-6">
                  Pass the target element object that will be expanded or collapsed.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">triggerElement</code>
              </td>
              <td class="py-4 px-6">
                  Element
              </td>
              <td class="py-4 px-6">
                  Optional
              </td>
              <td class="py-4 px-6">
                  Set an optional element object which will expand or collapse the target element when clicked.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">options</code>
              </td>
              <td class="py-4 px-6">
                Object
              </td>
              <td class="py-4 px-6">
                  Optional
              </td>
              <td class="py-4 px-6">
                  Set these options to override the default transition, duration, and timing function of the collapse animation.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Options

Use these optional options for the Dismiss object to set the transition, duration, and timing function types based on the utility classes from Tailwind CSS.

<div class="overflow-x-auto my-10 shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="py-3 px-6">
                  Option
              </th>
              <th scope="col" class="py-3 px-6">
                  Type
              </th>
              <th scope="col" class="py-3 px-6">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">transition</code>
              </td>
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">String</code>
              </td>
              <td class="py-4 px-6">
                  Use one of the Transition Property utility classes from Tailwind CSS to set transition type for the main element. The default value is <code class="text-purple-600 dark:text-purple-400">transition-opacity</code>.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">duration</code>
              </td>
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">Integer</code>
              </td>
              <td class="py-4 px-6">
                  Set the duration of the dismissing animation. The default value is <code class="text-purple-600 dark:text-purple-400">300</code> (300 miliseconds).
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">timing</code>
              </td>
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">String</code>
              </td>
              <td class="py-4 px-6">
                  Set the transition timing function utility class from Tailwind CSS. The default value is <code class="text-purple-600 dark:text-purple-400">ease-out</code>.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">onHide</code>
              </td>
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">Function</code>
              </td>
              <td class="py-4 px-6">
                  Set a callback function when the item has been dismissed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the following methods on the Dismiss object to programatically manipulate the behaviour.

<div class="overflow-x-auto my-10 shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-xs font-medium uppercase">
              <th scope="col" class="py-3 px-6">
                  Method
              </th>
              <th scope="col" class="py-3 px-6">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6 font-medium">
                  <code class="text-blue-600 dark:text-blue-400">hide()</code>
              </td>
              <td class="py-4 px-6">
                  Use the <code class="text-blue-600 dark:text-blue-400">hide()</code> method on the Dismiss object to hide all target elements.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Dismiss object:

```javascript
// dismiss all elements based on querySelectorAll
const targetElement = document.getElementById('targetCollapse');

// element which trigger the dismiss based on a click
const triggerElement = document.getElementById('triggerCollapse');

// optional options with default values
const options = {
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out'
};

/*
* targetQuery: required
* triggerEl: optional
* options: optional
*/
const alert = new Dismiss(targetQuery, triggerEl, options);

// hide the target element or elements
alert.hide();
```

### Data attributes

If you want to show or hide any element you can use the `data-collapse-toggle="elementId"` data attribute where `elementId` is the target element that will be toggled.

```html
<button data-collapse-toggle="elementId">Show menu</button>

<div id="elementId">This will be toggled when the button is clicked.</div>
```

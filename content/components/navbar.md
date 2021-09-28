---
layout: home
title: Tailwind CSS Navigation Bar - Flowbite
description: Use these Tailwind CSS navbar elements to show a navigational bar at the top side of your website
group: components
toc: true

previous: Modals
previousLink: components/modal
next: Pagination
nextLink: components/pagination
---

## Default navbar

Use this example of a navigation bar built with Tailwind CSS to create a navigation element for your website.

{{< example >}}
<nav class="bg-white border-gray-200 px-2 sm:px-4 lg:px-5 flex items-center justify-between h-16">
    <!-- Logo -->
    <div class="flex-2 flex items-center sm:justify-start">
      <a href="#">
        <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
      </a>
      <!-- Mobile menu button-->
      <button data-collapse-toggle="mobile-menu" type="button" class="sm:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <!-- Open mobile menu icon -->
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <!-- Close mobile menu icon -->
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden sm:block sm:ml-6" id="mobile-menu">
        <ul class="flex-column sm:flex-row space-x-8">
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">About us</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Features</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Pricing</a>
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
{{< /example >}}

## Navbar with dropdown

Use this navbar element with an element that open a dropdown menu.

{{< example >}}
<nav class="bg-white border-gray-200">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center sm:justify-start">
        <a href="#">
          <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <ul class="flex space-x-8">
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Dashboard</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center sm:static sm:inset-auto sm:ml-6">
        <button class="text-gray-500 hover:text-gray-900 mr-3">
          <span class="sr-only">View notifications</span>
          <!-- Bell icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
        </button>
        <!-- Profile dropdown -->
        <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
        </button>
        <!-- Dropdown menu -->
        <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
            <div class="px-4 py-3" role="none">
              <p class="text-sm" role="none">
                Bonnie Green
              </p>
              <p class="text-sm font-medium text-gray-900 truncate" role="none">
                name@company.com
              </p>
            </div>
            <ul class="py-1" role="none">
              <li>
                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Dashboard</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Settings</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Earnings</a>
              </li>
              <li>
                <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Sign out</a>
              </li>
            </ul>
        </div>
        <!-- Mobile menu button-->
        <button data-collapse-toggle="mobile-menu-2" type="button" class="sm:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden hidden" id="mobile-menu-2">
    <ul class="pt-2">
      <li>
        <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Dashboard</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Team</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Projects</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Calendar</a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

## Navbar with search

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

{{< example >}}
<nav class="bg-white border-gray-200">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="flex justify-between h-16">
      <div class="flex-shrink-0 flex items-center">
        <a href="#">
          <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
      </div>
      <ul class="hidden lg:ml-6 lg:flex lg:space-x-8 items-center">
        <li>
          <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Dashboard</a>
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</a>
        </li>
        <li>
          <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
        </li>
      </ul>
      <!-- Search input -->
      <div class="flex-1 flex items-center justify-center lg:ml-6 lg:justify-end">
        <div class="max-w-lg w-full lg:max-w-xs">
          <div class="relative">
            <label for="navbar-search" class="sr-only">Email address</label>
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <!-- Icon -->
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <!-- Input -->
            <input type="text" name="navbar-search" id="navbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search">
          </div>
        </div>
      </div>
      <div class="flex items-center ml-2 lg:hidden">
        <!-- Mobile menu button -->
        <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu-3" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="hidden md:hidden" id="mobile-menu-3">
    <ul class="pt-2">
      <li>
        <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Dashboard</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Team</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Projects</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Calendar</a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

## Navbar with CTA button

Use the following navbar element to show a call to action button.

{{< example >}}
<nav class="bg-white border-gray-200">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center justify-start">
        <a href="#">
          <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden md:block sm:ml-6">
          <ul class="flex space-x-6">
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">About</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Services</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-3 text-center inline-flex items-center">
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>
          New task
        </button>
        <div class="hidden md:inline-flex">
          <button class="text-gray-500 hover:text-gray-900">
            <span class="sr-only">View notifications</span>
            <!-- Bell icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
          </button>
          <!-- Profile dropdown -->
          <div class="ml-3">
            <div>
              <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300" id="user-menu-button-2" aria-expanded="false" type="button" data-dropdown-toggle="dropdown-2">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
              </button>
            </div>
            <!-- Dropdown -->
            <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown-2">
              <div class="px-4 py-3" role="none">
                <p class="text-sm" role="none">
                  Bonnie Green
                </p>
                <p class="text-sm font-medium text-gray-900 truncate" role="none">
                  name@company.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Mobile menu button-->
        <button data-collapse-toggle="mobile-menu-4" type="button" class="sm:hidden ml-1 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-4" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <ul class="hidden md:hidden" id="mobile-menu-4">
    <li>
      <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">About</a>
    </li>
    <li>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Services</a>
    </li>
    <li>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Contact</a>
    </li>
  </ul>
</nav>
{{< /example >}}

## Color

Alternatively, you can also use different color schemes for the navbar element.

{{< example >}}
<nav class="bg-white border-gray-200 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <ul class="flex space-x-8">
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Features</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Pricing</a>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Mobile menu button-->
        <button data-collapse-toggle="mobile-menu-5" type="button" class="sm:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-menu-5" class="hidden sm:hidden pt-2">
    <ul class="pt-2">
      <li>
        <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Home</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">About</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Features</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Pricing</a>
      </li>
      <li>
        <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:text-gray-900 block px-3 py-2">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<nav class="bg-gray-800 border-gray-600 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <ul class="flex space-x-8">
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Features</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Pricing</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Mobile menu button-->
        <button data-collapse-toggle="mobile-menu-6" type="button" class="sm:hidden ml-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-menu-6" class="hidden sm:hidden pt-2">
      <ul>
        <li>
          <a href="#" class="bg-gray-700 text-white text-base font-normal block pl-3 pr-4 py-2">Home</a>
        </li>
        <li>
          <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">About</a>
        </li>
        <li>
          <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">Features</a>
        </li>
        <li>
          <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">Pricing</a>
        </li>
        <li>
          <a href="#" class="text-gray-300 hover:bg-gray-700 text-base font-normal hover:white block px-3 py-2">Contact</a>
        </li>
      </ul>
  </div>
</nav>

<nav class="bg-blue-700 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/docs/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <ul class="flex space-x-8">
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">About us</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Features</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Pricing</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Mobile menu button-->
      <button data-collapse-toggle="mobile-menu-8" type="button" class="sm:hidden ml-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <!-- Open mobile menu icon -->
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <!-- Close mobile menu icon -->
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  </div>
  <!-- Mobile menu -->
  <div id="mobile-menu-8" class="hidden sm:hidden">
    <ul class="pt-2">
      <li>
        <a href="#" class="bg-blue-600 text-white text-base font-normal block pl-3 pr-4 py-2">Home</a>
      </li>
      <li>
        <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">About Us</a>
      </li>
      <li>
        <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">Features</a>
      </li>
      <li>
        <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">Pricing</a>
      </li>
      <li>
        <a href="#" class="text-gray-300 hover:bg-blue-600 text-base font-normal hover:text-white block px-3 py-2">Contact</a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

## JavaScript

If you want to show or hide any element you can use the `data-collapse-toggle="elementId"` data attribute where `elementId` is the target element that will be toggled.

```html
<button data-collapse-toggle="elementId">Show menu</button>

<div id="elementId">This will be toggled when the button is clicked.</div>
```

Although if you have included `flowbite.js` in your project this will already work you can also manually add this code to make toggle elements work.

```javascript
document.querySelectorAll('[data-collapse-toggle]').forEach(function (collapseToggleEl) {
    var collapseId = collapseToggleEl.getAttribute('data-collapse-toggle');
    var collapseEl = document.getElementById(collapseId);

    collapseToggleEl.addEventListener('click', function() {
        if (collapseEl.classList.contains("hidden")) {
            collapseEl.classList.remove("hidden");
        } else {
            collapseEl.classList.add("hidden");
        }
    });
});
```
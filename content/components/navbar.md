---
layout: home
title: Navbar
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

## Default

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<nav class="bg-white border-b border-gray-200">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">About Us</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Features</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="pt-2">
      <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Dashboard</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Team</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Projects</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Calendar</a>
    </div>
  </div>
</nav>
{{< /example >}}

## With Dropdown

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<nav class="bg-white border-b border-gray-200 mb-60">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="text-gray-500 hover:text-gray-900">
          <span class="sr-only">View notifications</span>
          <!-- Bell icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
        </button>
        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="/img/people/profile-picture-3.jpg" alt="user photo">
            </button>
          </div>
          <!-- Dropdown -->
          <div class="bg-white origin-top-right absolute right-0 mt-6 w-48 rounded-lg shadow divide-y divide-gray-200 py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <div class="pb-1">
              <a href="#" class="block font-medium text-gray-900 text-sm px-4 py-2" role="menuitem">
                Bonnie Green
                <span class="font-normal">name@company.com</span>
              </a>
              <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block px-4 py-2" role="menuitem">Earnings</a>
              <a href="#" class="text-sm text-gray-500 hover:bg-gray-50 block text-gray-500 px-4 py-2" role="menuitem">Downloads</a>
              <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block text-gray-500 px-4 py-2" role="menuitem">Settings</a>
            </div>
            <div class="pt-1">
              <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block text-gray-500 px-4 py-2" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden" id="mobile-menu-2">
    <div class="pt-2">
      <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Dashboard</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Team</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Projects</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Calendar</a>
    </div>
  </div>
</nav>
{{< /example >}}

## With search

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<nav class="bg-white border-b border-gray-200">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="flex justify-between h-16">
      <div class="flex px-2 lg:px-0">
        <div class="flex-shrink-0 flex items-center">
          <a href="#">
            <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
          </a>
        </div>
        <div class="hidden lg:ml-6 lg:flex lg:space-x-8 items-center">
          <!-- Links -->
          <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Dashboard</a>
          <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</a>
          <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
        </div>
      </div>
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
      <div class="flex items-center lg:hidden">
        <!-- Mobile menu button -->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
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
  <div class="lg:hidden" id="mobile-menu-3">
    <div class="pt-2">
      <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Dashboard</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Team</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Projects</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Calendar</a>
    </div>
  </div>
</nav>
{{< /example >}}

## With Action Button

Group a series of buttons together on a single line or stack them in a vertical column.

{{< example >}}
<nav class="bg-white border-b border-gray-200 mb-60">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex flex-1 items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden md:block sm:ml-6">
          <div class="flex space-x-6">
            <!-- Links -->
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">About</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
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
              <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:ring-4 focus:ring-gray-300" id="user-menu-button-2" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="/img/people/profile-picture-3.jpg" alt="user photo">
              </button>
            </div>
            <!-- Dropdown -->
            <div class="bg-white origin-top-right absolute right-0 mt-6 w-48 rounded-lg shadow divide-y divide-gray-200 py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button-2" tabindex="-1">
              <div class="pb-1">
                <a href="#" class="block font-medium text-gray-900 text-sm px-4 py-2" role="menuitem">
                  Bonnie Green
                  <span class="font-normal">name@company.com</span>
                </a>
                <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block px-4 py-2" role="menuitem">Earnings</a>
                <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block text-gray-500 px-4 py-2" role="menuitem">Downloads</a>
                <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block text-gray-500 px-4 py-2" role="menuitem">Settings</a>
              </div>
              <div class="pt-1">
                <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 block text-gray-500 px-4 py-2" role="menuitem">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center md:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Open mobile menu icon -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <!-- Close mobile menu icon -->
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="lg:hidden" id="mobile-menu-4">
    <div class="pt-2 pb-3">
      <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">About</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Services</a>
      <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2">Contact</a>
    </div>
    <div class="pt-4 bg-dark-900">
      <div class="flex items-center px-4">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" src="/img/people/profile-picture-3.jpg" alt="user photo">
        </div>
        <div class="ml-3">
          <div class="text-base font-medium text-gray-900">Bonnie Green</div>
          <div class="text-sm font-normal text-gray-500">name@company.com</div>
        </div>
        <button class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="sr-only">View notifications</span>
          <!-- Icon (bell) -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
      </div>
      <div class="mt-3 space-y-1">
        <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 font-normal block px-4 py-2">Earnings</a>
        <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 font-normal block px-4 py-2">Downloads</a>
        <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 font-normal block px-4 py-2">Settings</a>
        <a href="#" class="text-sm text-gray-500 hover:bg-gray-100 font-normal block px-4 py-2">Sign out</a>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

## Color schemes

Group a series of buttons together on a single line or stack them in a vertical column.

{{< preview >}}
<nav class="bg-white border-b border-gray-200 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">About Us</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Features</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden pt-2">
    <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Home</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">About</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Features</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Pricing</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:text-gray-900 block px-3 py-2">Contact</a>
  </div>
</nav>

<nav class="bg-gray-800 border-b border-gray-600 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">About Us</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Features</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden pt-2">
      <a href="#" class="bg-gray-700 text-white text-base font-normal block pl-3 pr-4 py-2">Home</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">About</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">Features</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">Pricing</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 text-base font-normal hover:white block px-3 py-2">Contact</a>
  </div>
</nav>

<nav class="bg-blue-700 border-b border-blue-600 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-blue-300 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">About Us</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Features</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden">
    <div class="pt-2">
      <a href="#" class="bg-blue-600 text-white text-base font-normal block pl-3 pr-4 py-2">Home</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">About Us</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">Features</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">Pricing</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 text-base font-normal hover:text-white block px-3 py-2">Contact</a>
    </div>
  </div>
</nav>
{{< /preview >}}

```html
<!-- Light navbar -->
<nav class="bg-white border-b border-gray-200 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">About Us</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Features</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-700 hover:text-blue-700 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden pt-2">
    <a href="#" class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2">Home</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">About</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Features</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:text-gray-900 block px-3 py-2">Pricing</a>
    <a href="#" class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:text-gray-900 block px-3 py-2">Contact</a>
  </div>
</nav>

<!-- Dark navbar -->
<nav class="bg-gray-800 border-b border-gray-600 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">About us</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Features</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden pt-2">
      <a href="#" class="bg-gray-700 text-white text-base font-normal block pl-3 pr-4 py-2">Home</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">About Us</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">Features</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 border-b border-gray-700 text-base font-normal hover:text-white block px-3 py-2">Pricing</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 text-base font-normal hover:white block px-3 py-2">Contact</a>
  </div>
</nav>

<!-- Blue Navbar -->
<nav class="bg-blue-700 border-b border-blue-600 rounded mb-4">
  <div class="px-2 sm:px-4 lg:px-5">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2 " aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Open mobile menu icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <!-- Close mobile menu icon -->
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <!-- Logo -->
      <div class="flex-1 flex items-center justify-center sm:justify-start">
        <a href="#">
          <img src="/images/logo.svg" class="h-10 mr-4" alt="FlowBite Logo" />
        </a>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-8">
            <!-- Links -->
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium" aria-current="page">Home</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">About Us</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Features</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu -->
  <div class="sm:hidden">
    <div class="pt-2">
      <a href="#" class="bg-blue-600 text-white text-base font-normal block pl-3 pr-4 py-2">Home</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">About</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">Features</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 border-b border-blue-600 text-base font-normal hover:text-white block px-3 py-2">Pricing</a>
      <a href="#" class="text-gray-300 hover:bg-blue-600 text-base font-normal hover:text-white block px-3 py-2">Contact</a>
    </div>
  </div>
</nav>
```
---
layout: home
title: Tailwind CSS Tabs - Flowbite
description: Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container
group: components
toc: true

previous: Tables
previousLink: components/tables/
next: Timeline
nextLink: components/timeline/
---

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Default tabs

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

{{< example id="default-tabs-example" github="components/tabs.md" show_dark=true >}}

<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li class="me-2">
        <a href="#" aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Profile</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
    </li>
    <li>
        <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
    </li>
</ul>
{{< /example >}}

## Tabs with underline

Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

{{< example id="tabs-underline-example" github="components/tabs.md" show_dark=true >}}

<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
        </li>
        <li>
            <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
        </li>
    </ul>
</div>
{{< /example >}}

## Tabs with icons

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs.

{{< example id="tabs-icons-example" github="components/tabs.md" show_dark=true >}}

<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>Profile
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                <svg class="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Dashboard
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                </svg>Settings
            </a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>Contacts
            </a>
        </li>
        <li>
            <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
        </li>
    </ul>
</div>
{{< /example >}}

## Pills tabs

If you want to use pills as a style for the tabs component you can do so by using this example.

{{< example id="tabs-pill-example" github="components/tabs.md" show_dark=true >}}

<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">Tab 1</a>
    </li>
    <li class="me-2">
        <a href="#"  class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 2</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 3</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab 4</a>
    </li>
    <li>
        <a class="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">Tab 5</a>
    </li>
</ul>
{{< /example >}}

## Vertical tabs

Use this example to show a vertically aligned set of tabs on the left side of the page.

{{< example id="tabs-vertical-example" github="components/tabs.md" show_dark=true >}}

<div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                <svg class="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                Profile
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
                Dashboard
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                </svg>
                Settings
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                    <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                </svg>
                Contact
            </a>
        </li>
        <li>
            <a class="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
                <svg class="w-4 h-4 me-2 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            Disabled</a>
        </li>
    </ul>
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
        <p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
    </div>
</div>

{{< /example >}}


## Full width tabs

If you want to show the tabs on the full width relative to the parent element you can do so by using the full width tabs component example.

{{< example id="tabs-full-width-example" github="components/tabs.md" show_dark=true >}}

<div class="sm:hidden">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>Profile</option>
        <option>Dashboard</option>
        <option>setting</option>
        <option>Invoioce</option>
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
    </li>
</ul>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Interactive tabs

Use the dynamic tabs component to interactively show and hide the content below the tabs based on the currently active tab item. Make sure that you initialize the component by using the `data-tabs-toggle="{parentTabContentSelector}"` and also apply an `id` attribute to the same element.

Each tab toggle button requires a `role="tab"` attribute and a `data-tabs-target="{tabContentSelector}"` to target the tab content element that will be shown when clicked.

Use the `aria-selected="true"` data attribute so that Flowbite can target the currently active tab component and hide it when another is shown. If not set, it will show the first tab as active.

Apply the `role="tabpanel"` data attribute to every tab content element and set the `id` attribute which will be equal to the `data-tabs-target={tabContentSelector}` from the tabs toggles.

You can use multiple tab components on a single page but make sure that the id's are different.

{{< example id="tabs-interactive-example" github="components/tabs.md" show_dark=true >}}

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
{{< /example >}}

## Active tab style

Use the `data-tabs-active-classes` and the `data-tabs-inactive-classes` to set the active and inactive tab Tailwind CSS classes. In this example we set the active classes to the purple color instead of blue.

{{< example id="tabs-interactive-active-example" github="components/tabs.md" show_dark=true >}}

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-styled-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
{{< /example >}}

## JavaScript behaviour

The **Tabs** class from Flowbite can be used to create an object that will enable the interactive navigation between tabs and its content based on the parameters, options, methods, and callback functions that you apply.

### Object parameters

Create a new Tabs object with parameters such as an array of the tab and content elements.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Parameter
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Required
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">tabsElement</code>
                </td>
                <td class="px-6 py-4">
                    Element
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Parent HTML element of the tabs component.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">items</code>
                </td>
                <td class="px-6 py-4">
                    Array
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Array of the tab objects including the id, trigger element, and the content element.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">options</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                    An object of options for the appearances of the tabs and to use callback functions.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">instanceOptions</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                   Object of options that allows you to set a custom ID for the instance that is being added to the <a href="https://flowbite.com/docs/getting-started/javascript/#instance-options" class="underline hover:no-underline">Instance Manager</a> and whether to override or not an existing instance.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Options

Use the following options as the second parameter for the Tabs object to set the appearance of the active tab elements and use callback functions.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Option
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">defaultTabId</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set the currently active tab element based on the ID.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">activeClasses</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set a string of Tailwind CSS class names to apply to the active tab element.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">inactiveClasses</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set a string of Tailwind CSS class names to apply to the inactive tab elements.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">onShow</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the a new tab has been shown.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the methods from the Tabs object to programmatically change the current active tab using JavaScript.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50 dark:bg-gray-700">
            <tr class="text-xs font-medium uppercase">
                <th scope="col" class="px-6 py-3">
                    Method
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">show(id)</code>
                </td>
                <td class="px-6 py-4">
                    Use the show function on the Tab object to change the current active tab element.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">getTab(id)</code>
                </td>
                <td class="px-6 py-4">
                    Return the tab element based on the ID.
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">updateOnShow(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Use this method to set a custom callback function whenever a tab has been shown.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Check out the following example to learn how to initialize and manipulate a Tabs object in JavaScript.

First of all, create an array of objects that contains the id, trigger element, and content element of each tab, set the active tab based on the id, and optionally set a callback function after a new tab has been shown.

```javascript
const tabsElement = document.getElementById('tabs-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example'),
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example'),
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example'),
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example'),
    },
];

// options with default values
const options = {
    defaultTabId: 'settings',
    activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    },
};

// instance options with default values
const instanceOptions = {
  id: 'tabs-example',
  override: true
};
```

Create a new Tabs object based on the parameters we've previously set.

```javascript
import { Tabs } from 'flowbite';

/*
* tabsElement: parent element of the tabs component (required)
* tabElements: array of tab objects (required)
* options (optional)
* instanceOptions (optional)
*/
const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
```

Lastly, you can now use the methods on the Tabs object to show another tab element, get a tab element based on the id, or get the current active tab element.

```javascript
// shows another tab element
tabs.show('dashboard');

// get the tab object based on ID
tabs.getTab('contacts');

// get the current active tab object
tabs.getActiveTab();
```

### HTML Markup

You can use this HTML code as an example for the JavaScript code from above.

```html
<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabs-example" role="tablist">
        <li class="me-2" role="presentation">
            <button
                class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="profile-tab-example"
                type="button"
                role="tab"
                aria-controls="profile-example"
                aria-selected="false"
            >
                Profile
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button
                class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="dashboard-tab-example"
                type="button"
                role="tab"
                aria-controls="dashboard-example"
                aria-selected="false"
            >
                Dashboard
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button
                class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="settings-tab-example"
                type="button"
                role="tab"
                aria-controls="settings-example"
                aria-selected="false"
            >
                Settings
            </button>
        </li>
        <li role="presentation">
            <button
                class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="contacts-tab-example"
                type="button"
                role="tab"
                aria-controls="contacts-example"
                aria-selected="false"
            >
                Contacts
            </button>
        </li>
    </ul>
</div>
<div id="tabContentExample">
    <div
        class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
        id="profile-example"
        role="tabpanel"
        aria-labelledby="profile-tab-example"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
                >Profile tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
        class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
        id="dashboard-example"
        role="tabpanel"
        aria-labelledby="dashboard-tab-example"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
                >Dashboard tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
        class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
        id="settings-example"
        role="tabpanel"
        aria-labelledby="settings-tab-example"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
                >Settings tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
    <div
        class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
        id="contacts-example"
        role="tabpanel"
        aria-labelledby="contacts-tab-example"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the
            <strong class="font-medium text-gray-800 dark:text-white"
                >Contacts tab's associated content</strong
            >. Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
        </p>
    </div>
</div>
```

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Tabs class, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

```javascript
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

const tabsElement: HTMLElement = document.getElementById('tabs-example');

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements: TabItem[] = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example'),
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example'),
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example'),
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example'),
    },
];

// options with default values
const options: TabsOptions = {
    defaultTabId: 'settings',
    activeClasses:
        'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses:
        'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    },
};

// instance options with default values
const instanceOptions: InstanceOptions = {
  id: 'tabs-example',
  override: true
};

/*
* tabsElement: parent element of the tabs component (required)
* tabElements: array of tab elements (required)
* options (optional)
* instanceOptions (optional)
*/
const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

// open tab item based on id
tabs.show('contacts');
```

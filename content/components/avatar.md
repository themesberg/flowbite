---
layout: home
title: Tailwind CSS Avatar - Flowbite
description: Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes
group: components
toc: true

previous: Accordion
previousLink: components/accordion/
next: Badge
nextLink: components/badge/
---

The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Flowbite to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

## Default avatar

Use this example to create a circle and rounded avatar on an image element.

{{< example id="default-avatar-example" class="flex space-x-4 dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
<img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar">
{{< /example >}}

## Bordered

Apply a border around the avatar component you can use the `ring-{color}` class from Tailwind CSS.

{{< example id="avatar-bordered-example" class="dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<img class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
{{< /example >}}

## Placeholder

Use this example as a placeholder icon for the user profile when there is no custom image available.

{{< example id="avatar-placeholder-example" class="dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
{{< /example >}}

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

{{< example id="avatar-dot-indicator-example" class="flex space-x-4 dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<div class="relative">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
{{< /example >}}

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components.

{{< example id="avatar-stacked-example" class="dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<div class="flex mb-5 -space-x-4">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-4.jpg" alt="">
</div>
<div class="flex -space-x-4">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="">
    <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="">
    <a class="flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
</div>
{{< /example >}}

## Avatar text

This example can be used if you want to show additional information in the form of text elements such as the user's name and join date.

{{< example id="avatar-text-example" class="dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<div class="flex items-center space-x-4">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <div class="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
{{< /example >}}

## User dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component.

{{< example id="avatar-user-dropdown-example" class="flex space-x-4 dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<img id="avatar" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown">

<!-- Dropdown menu -->
<div id="userDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
{{< /example >}}

## Sizes

Choose from multiple sizing options for the avatar component from this example.

{{< example id="avatar-sizes-example" class="flex flex-wrap items-center space-x-6 dark:bg-gray-800" github="components/avatar.md" show_dark=true >}}
<img class="w-6 h-6 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Extra small avatar">
<img class="w-8 h-8 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Small avatar">
<img class="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Medium avatar">
<img class="w-20 h-20 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Large avatar">
<img class="w-36 h-36 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Extra large avatar">
{{< /example >}}

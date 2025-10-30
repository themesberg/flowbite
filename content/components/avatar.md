---
layout: docs
title: Tailwind CSS Avatar - Flowbite
description: Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes
group: components
toc: true

previous: Alerts
previousLink: components/alerts/
next: Badge
nextLink: components/badge/
---

The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Flowbite to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

## Default avatar

Use this example to create a circle and rounded avatar on an image element.

{{< example class="flex justify-center gap-4" github="components/avatar.md" show_dark=true >}}
<img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
<img class="w-10 h-10 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar">
{{< /example >}}

## Bordered

Apply a border around the avatar component you can use the `ring-{color}` class from Tailwind CSS.

{{< example class="flex justify-center" github="components/avatar.md" show_dark=true >}}
<img class="w-10 h-10 p-1 rounded-full ring-2 ring-default" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar">
{{< /example >}}

## Placeholder icon

Use this example as a placeholder icon for the user profile when there is no custom image available.

{{< example class="flex justify-center" github="components/avatar.md" show_dark=true >}}
<div class="relative w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full">
    <svg class="absolute w-12 h-12 text-body-subtle -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
{{< /example >}}

## Placeholder initials

This example can be used to show the initials of the user's first and last name as a placeholder when no profile picture is available.

{{< example class="flex justify-center" github="components/avatar.md" show_dark=true >}}
<div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-tertiary rounded-full">
    <span class="font-medium text-body">JL</span>
</div>
{{< /example >}}

## Avatar tooltip

Use this example to show a tooltip when hovering over the avatar.

{{< example class="flex items-center justify-center pt-8 gap-4" github="components/avatar.md" show_dark=true >}}
<div>
  <div id="tooltip-jese" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Jese Leos
      <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
  <img data-tooltip-target="tooltip-jese" class="w-10 h-10 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="Medium avatar">
</div>
<div>
  <div id="tooltip-roberta" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Roberta Casas
      <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
  <img data-tooltip-target="tooltip-roberta" class="w-10 h-10 rounded-base" src="/docs/images/people/profile-picture-4.jpg" alt="Medium avatar">
</div>
<div>
  <div id="tooltip-bonnie" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
      Bonnie Green
      <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
  <img data-tooltip-target="tooltip-bonnie" class="w-10 h-10 rounded-base" src="/docs/images/people/profile-picture-3.jpg" alt="Medium avatar">
</div>
{{< /example >}}

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

{{< example class="flex justify-center gap-4" github="components/avatar.md" show_dark=true >}}
<div class="relative">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-danger border-2 border-buffer rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full"></span>
</div>
<div class="relative">
    <img class="w-10 h-10 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <span class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-success border-2 border-buffer rounded-full"></span>
</div>
{{< /example >}}

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components.

{{< example class="flex justify-center gap-4 rtl:gap-8" github="components/avatar.md" show_dark=true >}}
<div class="flex -space-x-4 rtl:space-x-reverse">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="">
</div>
<div class="flex -space-x-4 rtl:space-x-reverse">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="">
    <img class="w-10 h-10 border-2 border-buffer rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="">
    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-dark-strong border-2 border-buffer rounded-full" href="#">+99</a>
</div>
{{< /example >}}

## Avatar text

This example can be used if you want to show additional information in the form of text elements such as the user's name and join date.

{{< example class="flex justify-center" github="components/avatar.md" show_dark=true >}}
<div class="flex items-center gap-2.5">
    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
    <div class="font-medium text-heading">
        <div>Jese Leos</div>
        <div class="text-sm font-normal text-body">Joined in August 2014</div>
    </div>
</div>
{{< /example >}}

## User dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component.

{{< example class="flex justify-center gap-4" github="components/avatar.md" show_dark=true iframeHeight="360" >}}
<img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown">

<!-- Dropdown menu -->
<div id="userDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
    <div class="px-4 py-3 border-b border-default-medium text-sm text-heading">
      <div class="font-medium">Bonnie Green</div>
      <div class="truncate">name@flowbite.com</div>
    </div>
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="avatarButton">
      <li>
        <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Settings</a>
      </li>
      <li>
        <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Earnings</a>
      </li>
      <li>
        <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium text-fg-danger rounded-md">Sign out</a>
      </li>
    </ul>
</div>
{{< /example >}}

## Sizes

Choose from multiple sizing options for the avatar component from this example.

{{< example class="flex flex-wrap items-center justify-center gap-6" github="components/avatar.md" show_dark=true >}}
<img class="w-4.5 h-4.5 rounded-sm" src="/docs/images/people/profile-picture-5.jpg" alt="Extra small avatar">
<img class="w-6 h-6 rounded-sm" src="/docs/images/people/profile-picture-5.jpg" alt="Small avatar">
<img class="w-8 h-8 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="Base avatar">
<img class="w-11 h-11 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="Large avatar">
<img class="w-14 h-14 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="xl avatar">
<img class="w-16 h-16 rounded-base" src="/docs/images/people/profile-picture-5.jpg" alt="2xl avatar">
{{< /example >}}

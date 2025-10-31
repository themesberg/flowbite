---
layout: docs
title: Tailwind CSS Drawer (offcanvas) - Flowbite
description: The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and placements
group: components
requires_js: true
toc: true

previous: Device mockups
previousLink: components/device-mockups/
next: Dropdowns
nextLink: components/dropdowns/
---

Use the Drawer component (or "off-canvas") to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions.

You can set multiple options such as the placement, activate body scrolling, show or hide the backdrop and even use the swipeable edge functionality to show a small part of the drawer when it is not shown completely.

To enable interactivity via data attributes and the Drawer API you need to include [Flowbite's JavaScript file]({{< ref "getting-started/quickstart" >}}).

## Default drawer

To initiate the drawer component you need to set the `data-drawer-target="{id}"` data attribute to an element such as a button where the value needs to be the id of the drawer component itself.

Then you can use the following attributes to either show, hide or toggle the drawer visibility where the value is the id of the drawer component:

-   `data-drawer-show="{id}"` - show the drawer component
-   `data-drawer-hide="{id}"` - hide the drawer component
-   `data-drawer-toggle="{id}"` - toggle the visibility of the drawer component

For accessibility you should also apply the `aria-controls={id}` attribute to the element that triggers the drawer and the `aria-labelledby={id}` attribute to the drawer component where the value is the id of the drawer title.

You can also avoid the drawer flickering and hide it by default by applying the following classes to the Drawer element: `transition-transform left-0 top-0 -translate-x-full`. This will set the component off-canvas.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
   Show drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft w-96 border-e border-default" tabindex="-1" aria-labelledby="drawer-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-label" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Drawer heading
      </h5>
      <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <p class="mb-3 text-sm text-body">Upgrade your Figma toolkit with a design system built on top <a href="#" class="font-medium text-heading underline hover:no-underline">Flowbite CSS</a> featuring variants, style guide and auto layout.</p>
   <p class="mb-5 text-sm text-body">Recommended for professional developers and companies building enterprise-level.</p>
   <div class="flex items-center gap-4">
      <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Pricing & FAQ</button>
      <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Get access
         <svg class="rtl:rotate-180 w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </button>
   </div>
</div>
{{< /example >}}

## Drawer navigation

Use this example to show a navigational sidebar inside the drawer component.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and show -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
   </button>
</div>

<!-- drawer component -->
<div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft w-80 border-e border-default" tabindex="-1" aria-labelledby="drawer-navigation-label">
   <div class="border-b border-default pb-4 flex items-center">
      <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
      </a>
      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
  <div class="py-5 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Products</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Contact form

Use this example to show a contact form inside the drawer component.

{{< example github="components/drawer.md" show_dark=true iframeHeight="840" iframeMaxHeight="840" skeletonPlaceholders=true >}}

<!-- drawer init and show -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact">
   Show contact form
   </button>
</div>

<!-- drawer component -->
<div id="drawer-contact" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft w-80 border-e border-default" tabindex="-1" aria-labelledby="drawer-contact-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-label-contact" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.283 8h-4.285m3.85 3h-3.85m4.061-6H11v11h8.27l1.715-9.847A.983.983 0 0 0 20.059 5ZM6.581 13.23h-.838A13.752 13.752 0 0 1 5.622 11c-.02-.745.02-1.49.12-2.23h1.04c.252 0 .496-.088.683-.245a.927.927 0 0 0 .329-.61l.2-1.872a.888.888 0 0 0-.045-.39.936.936 0 0 0-.212-.34 1.017 1.017 0 0 0-.341-.231A1.08 1.08 0 0 0 6.983 5h-2.06a1.27 1.27 0 0 0-.699.204 1.135 1.135 0 0 0-.442.543A15.066 15.066 0 0 0 3.007 11a15.656 15.656 0 0 0 .795 5.229c.165.462 1.342.771 1.864.771h1.116c.142 0 .283-.028.413-.082.13-.053.246-.132.341-.23a.936.936 0 0 0 .212-.34.889.889 0 0 0 .046-.391l-.201-1.873a.927.927 0 0 0-.33-.609 1.059 1.059 0 0 0-.682-.245ZM10 18v1h10v-1a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Z"/></svg>
         Contact Us
      </h5>
      <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <form class="mb-6 space-y-4">
      <label for="input-group-1" class="block mb-2.5 text-sm font-medium text-heading">Your Email<span class="ms-1 text-fg-danger">*</span></label>
      <div class="relative">
         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
         </div>
         <input type="text" id="input-group-1" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required>
      </div>
      <label for="input-group-2" class="block mb-2.5 text-sm font-medium text-heading">Subject<span class="ms-1 text-fg-danger">*</span></label>
      <div class="relative">
         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
         </div>
         <input type="text" id="input-group-2" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Let us know how we can help you" required>
      </div>
      <label for="message" class="block mb-2.5 text-sm font-medium text-heading">Your message</label>
      <textarea id="message" rows="4" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>
      <button type="submit" class="w-full text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Send message</button>
   </form>
   <p class="mb-2 text-sm text-body">
      <a href="#" class="hover:underline">info@company.com</a>
   </p>
   <p class="text-sm text-body">
      <a href="#" class="hover:underline">212-456-7890</a>
   </p>
</div>
{{< /example >}}

## Form elements

Use this example if you want to add form elements inside the drawer component including datepickers.

{{< example github="components/drawer.md" show_dark=true iframeHeight="840" iframeMaxHeight="840" skeletonPlaceholders=true >}}

<!-- drawer init and show -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-form" data-drawer-show="drawer-form" aria-controls="drawer-form">
   Show drawer form
   </button>
</div>

<!-- drawer component -->
<div id="drawer-form" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft w-80 border-e border-default" tabindex="-1" aria-labelledby="drawer-form-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-label-event" class="text-lg font-medium text-body">
         New event
      </h5>
      <button type="button" data-drawer-hide="drawer-form" aria-controls="drawer-form" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <form class="mb-6 space-y-4">
        <div>
            <label for="title" class="block mb-2.5 text-sm font-medium text-heading">Title<span class="ms-1 text-fg-danger">*</span></label>
            <input type="text" id="title" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Apple Keynote" required />
        </div>
      <label for="description" class="block mb-2.5 text-sm font-medium text-heading">Description</label>
      <textarea id="description" rows="4" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your description here..."></textarea>
      <div class="relative max-w-sm">
         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
         </div>
         <input datepicker id="default-datepicker" type="text" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Select date">
      </div>
      <div class="mb-4">
         <label for="guests" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Invite guests</label>
         <div class="relative">
            <input type="search" id="guests" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Add guest email" required />
            <button class="absolute flex items-center end-1.5 top-1/2 -translate-y-1/2 text-body bg-neutral-primary-strong border border-default-strong hover:bg-neutral-secondary-strong/70 hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">
               <span class="flex items-center">
                  <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                  <span class="text-xs font-semibold">Add</span>
               </span>
            </button>
         </div>
      </div>
      <div class="flex mb-4 -space-x-4 rtl:space-x-reverse">
         <img class="w-8 h-8 border-2 border-buffer-medium rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
         <img class="w-8 h-8 border-2 border-buffer-medium rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="">
         <img class="w-8 h-8 border-2 border-buffer-medium rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="">
         <img class="w-8 h-8 border-2 border-buffer-medium rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="">
      </div>
      <button type="submit" class="inline-flex items-center justify-center w-full text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z"/></svg>
         Create event
      </button>
   </form>
</div>
{{< /example >}}

## Placement

Use the placement options to position the drawer component either on the top, right, bottom, or left side of the document page. This can be done using the `data-drawer-placement="{top|right|bottom|left}"` data attribute where the default value is "left".

### Left drawer

Use this example where you can position the drawer component on the left side of the page.

To span the full height of the page you'll have to add the `h-screen` class to the drawer component.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-left-example" data-drawer-show="drawer-left-example" data-drawer-placement="left" aria-controls="drawer-left-example">
  Show left drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-left-example" class="fixed top-0 left-0 z-40 h-screen bg-neutral-primary-soft p-4 overflow-y-auto transition-transform -translate-x-full w-96" tabindex="-1" aria-labelledby="drawer-left-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-left-example" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Left drawer
      </h5>
      <button type="button" data-drawer-hide="drawer-left-example" aria-controls="drawer-left-example" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <p class="mb-3 text-sm text-body">Upgrade your Figma toolkit with a design system built on top <a href="#" class="font-medium text-heading underline hover:no-underline">Flowbite CSS</a> featuring variants, style guide and auto layout.</p>
   <p class="mb-5 text-sm text-body">Recommended for professional developers and companies building enterprise-level.</p>
   <div class="flex items-center gap-4">
      <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Pricing & FAQ</button>
      <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Get access
         <svg class="rtl:rotate-180 w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </button>
   </div>
</div>
{{< /example >}}

### Right drawer

Use this example to show the drawer component on the right side of the page.

To span the full height of the page you'll have to add the `h-screen` class to the drawer component.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
   Show right drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-neutral-primary-soft w-96" tabindex="-1" aria-labelledby="drawer-right-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-right-example" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Right drawer
      </h5>
      <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <p class="mb-3 text-sm text-body">Upgrade your Figma toolkit with a design system built on top <a href="#" class="font-medium text-heading underline hover:no-underline">Flowbite CSS</a> featuring variants, style guide and auto layout.</p>
   <p class="mb-5 text-sm text-body">Recommended for professional developers and companies building enterprise-level.</p>
   <div class="flex items-center gap-4">
      <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Pricing & FAQ</button>
      <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Get access
         <svg class="rtl:rotate-180 w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </button>
   </div>
</div>
{{< /example >}}

### Top drawer

Use this example to show the drawer on the top side of the page.

{{< example github="components/drawer.md" show_dark=true iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="overflow-y-auto inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example">
   Show top drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-top-example" class="fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-neutral-primary-soft border-b border-default" tabindex="-1" aria-labelledby="drawer-top-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-top-example" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Top drawer
      </h5>
      <button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <p class="mb-3 text-sm text-body max-w-xl">Upgrade your Figma toolkit with a design system built on top <a href="#" class="font-medium text-heading underline hover:no-underline">Flowbite CSS</a> featuring variants, style guide and auto layout.</p>
   <p class="mb-5 text-sm text-body max-w-xl">Recommended for professional developers and companies building enterprise-level.</p>
   <div class="flex items-center gap-4">
      <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Pricing & FAQ</button>
      <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Get access
         <svg class="rtl:rotate-180 w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </button>
   </div>
</div>
{{< /example >}}

### Bottom drawer

Use this example to show the drawer on the bottom side of the page.

{{< example github="components/drawer.md" show_dark=true iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true >}}

<div class="text-center">
   <button class="overflow-y-auto inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
   Show bottom drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-bottom-example" class="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-neutral-primary-soft border-t border-default transform-none" tabindex="-1" aria-labelledby="drawer-bottom-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-bottom-example" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Top drawer
      </h5>
      <button type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <p class="mb-3 text-sm text-body max-w-xl">Upgrade your Figma toolkit with a design system built on top <a href="#" class="font-medium text-heading underline hover:no-underline">Flowbite CSS</a> featuring variants, style guide and auto layout.</p>
   <p class="mb-5 text-sm text-body max-w-xl">Recommended for professional developers and companies building enterprise-level.</p>
   <div class="flex items-center gap-4">
      <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Pricing & FAQ</button>
      <button type="button" class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Get access
         <svg class="rtl:rotate-180 w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </button>
   </div>
</div>
{{< /example >}}

## Body scrolling

By default, body scrolling is disabled when the drawer is visible, however, you can choose to enable it using the `data-drawer-body-scrolling="{true|false}"` data attribute.

### Disabled (default)

This is an example where the body scrolling behaviour is disabled when the drawer is visible.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-disable-body-scrolling" data-drawer-show="drawer-disable-body-scrolling" data-drawer-body-scrolling="false" aria-controls="drawer-disable-body-scrolling">
   Show body scrolling disabled
   </button>
</div>

<!-- drawer component -->
<div id="drawer-disable-body-scrolling" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft w-80 border-e border-default" tabindex="-1" aria-labelledby="drawer-disable-body-scrolling-label">
  <div class="border-b border-default pb-4 flex items-center">
      <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
      </a>
      <button type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
  <div class="py-5 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Products</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

### Enabled

Get started with this example in order to enable body scrolling even if the drawer component is visible by using the `data-drawer-body-scrolling="false"` data attribute.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-body-scrolling" data-drawer-show="drawer-body-scrolling" data-drawer-body-scrolling="true" aria-controls="drawer-body-scrolling">
   Show body scrolling
   </button>
</div>

<!-- drawer component -->
<div id="drawer-body-scrolling" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft border-e border-default w-80" tabindex="-1" aria-labelledby="drawer-body-scrolling-label">
    <div class="border-b border-default pb-4 flex items-center">
      <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
      </a>
      <button type="button" data-drawer-hide="drawer-body-scrolling" aria-controls="drawer-body-scrolling" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
  <div class="py-5 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Products</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Backdrop

The backdrop element can be used to dim out the background elements when the drawer is visible and also automatically hide the component when clicking outside of it.

Use the `data-drawer-backdrop="{true|false}"` data attribute where you can disable or enable the backdrop element.

### Enabled (default)

Use this example to enable the backdrop element by default.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-backdrop" data-drawer-show="drawer-backdrop" data-drawer-backdrop="true" aria-controls="drawer-backdrop">
   Show drawer with backdrop
   </button>
</div>

<!-- drawer component -->
<div id="drawer-backdrop" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft border-e border-default w-80 tabindex="-1" aria-labelledby="drawer-backdrop-label">
    <div class="border-b border-default pb-4 flex items-center">
      <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
      </a>
      <button type="button" data-drawer-hide="drawer-backdrop" aria-controls="drawer-backdrop" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
  <div class="py-5 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Products</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

### Disabled

Use the `data-drawer-backdrop="false"` data attribute to disable the backdrop element when the drawer is shown.

{{< example github="components/drawer.md" show_dark=true iframeHeight="640" iframeMaxHeight="640" iframeMaxHeight="640" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-disabled-backdrop" data-drawer-show="drawer-disabled-backdrop" data-drawer-backdrop="false" aria-controls="drawer-disabled-backdrop">
   Show drawer without backdrop
   </button>
</div>

<!-- drawer component -->
<div id="drawer-disabled-backdrop" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft border-e border-default w-80" tabindex="-1" aria-labelledby="drawer-disabled-backdrop-label">
    <div class="border-b border-default pb-4 flex items-center">
      <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
      </a>
      <button type="button" data-drawer-hide="drawer-disabled-backdrop" aria-controls="drawer-disabled-backdrop" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
  <div class="py-5 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Products</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Swipeable edge

The drawer edge functionality allows you to show a small part of the drawer when it is not shown completely by applying the `data-drawer-edge="{true|false}"` data attribute.

In this example we also use the `data-drawer-toggle="id"` option to toggle the visibility of the drawer component by clicking on the "edge" part of the element.

Use the `data-drawer-edge-offset="bottom-[*px]"` data attribute where you can apply a class from Tailwind CSS to set the offset. Default value is `bottom-[60px]`.

{{< example github="components/drawer.md" show_dark=true iframeHeight="480" iframeMaxHeight="480" skeletonPlaceholders=true >}}

<!-- drawer init and toggle -->
<div class="text-center">
   <button class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-swipe" data-drawer-show="drawer-swipe" data-drawer-placement="bottom" data-drawer-edge="true" data-drawer-edge-offset="bottom-[60px]" aria-controls="drawer-swipe">
   Show swipeable drawer
   </button>
</div>

<!-- drawer component -->
<div id="drawer-swipe" class="fixed z-40 w-full overflow-y-auto bg-neutral-primary-soft border-t border-default rounded-t-base transition-transform bottom-0 left-0 right-0 translate-y-full bottom-[60px]" tabindex="-1" aria-labelledby="drawer-swipe-label">
   <div class="p-4 cursor-pointer hover:bg-neutral-secondary-soft" data-drawer-toggle="drawer-swipe">
      <span class="absolute w-8 h-1 -translate-x-1/2 bg-neutral-quaternary rounded-lg top-3 left-1/2"></span>
      <h5 id="drawer-swipe-label" class="inline-flex items-center text-base text-body font-medium">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"/></svg>
         Add widget
      </h5>
   </div>
   <div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
      <div class="p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
         </div>
         <div class="font-medium text-center text-body">Chart</div>
      </div>
      <div class="p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M3 11h18M3 15h18M8 10.792V19m4-8.208V19m4-8.208V19M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
         </div>
         <div class="font-medium text-center text-body">Table</div>
      </div>
      <div class="hidden p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium lg:block">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 12A2.5 2.5 0 0 1 21 9.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 1 0 5V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
         </div>
         <div class="hidden font-medium text-center text-body">Ticket</div>
      </div>
      <div class="p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"/></svg>
         </div>
         <div class="font-medium text-center text-body">List</div>
      </div>
      <div class="p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>
         </div>
         <div class="font-medium text-center text-body">Price</div>
      </div>
      <div class="p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
         </div>
         <div class="font-medium text-center text-body">Users</div>
      </div>
      <div class="hidden p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium lg:block">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/></svg>
         </div>
         <div class="font-medium text-center text-body">Task</div>
      </div>
      <div class="p-4 rounded-base cursor-pointer bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium">
         <div class="flex justify-center items-center p-2 mx-auto mb-2 bg-neutral-primary-strong border border-default-strong rounded-full w-12 h-12">
            <svg class="w-7 h-7 inline text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/></svg>
         </div>
         <div class="font-medium text-center text-body">Custom</div>
      </div>
   </div>
</div>
{{< /example >}}

## More examples

For more drawer component examples you can check out the following resources from Flowbite Blocks:

-   [CRUD read drawers](https://flowbite.com/blocks/application/crud-read-drawers/)
-   [CRUD create drawers](https://flowbite.com/blocks/application/crud-create-drawers/)
-   [CRUD update drawers](https://flowbite.com/blocks/application/crud-update-drawers/)
-   [Application shell layouts](https://flowbite.com/blocks/application/shells/)

## JavaScript behaviour

The Drawer API can be used to create an instance of the class, use methods to manipulate the component by showing or hiding it on demand and also set custom behaviour options for placement, enabling or disabling the backdrop element, enabling or disabling the body scroll, and more.

### Object parameters

Initialize a Drawer object with parameters such as the target element and the options object.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
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
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">targetEl</code>
                </td>
                <td class="px-6 py-4">
                    Element
                </td>
                <td class="px-6 py-4">
                    Required
                </td>
                <td class="px-6 py-4">
                    Set the main drawer element as a JavaScript object.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">options</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                    Use the options parameter to set the default state of the drawer, placement, and other options.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">instanceOptions</code>
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

Use the following options for the Drawer object to set the placement, enable or disable the backdrop, enable or disable body scrolling, and more.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
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
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">placement</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set the position of the drawer component relative to the document body by choosing one of the values from <code class="text-fg-brand">{top|right|bottom|left}</code>.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">backdrop</code>
                </td>
                <td class="px-6 py-4">
                    Boolean
                </td>
                <td class="px-6 py-4">
                  Enable or disable the backdrop element. Values can be <code class="text-fg-brand">true</code> or <code class="text-fg-brand">false</code>.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">bodyScrolling</code>
                </td>
                <td class="px-6 py-4">
                    Boolean
                </td>
                <td class="px-6 py-4">
                    Enable or disable body scrolling behaviour when the drawer is active. Values can be <code class="text-fg-brand">true</code> or <code class="text-fg-brand">false</code>.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">edge</code>
                </td>
                <td class="px-6 py-4">
                    Boolean
                </td>
                <td class="px-6 py-4">
                    Enable or disable the edge functionality by showing a small part of the drawer component even when inactive. Values can be <code class="text-fg-brand">true</code> or <code class="text-fg-brand">false</code>.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">edgeOffset</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set the offset height that should be shown when the drawer is inactive. Default value is <code class="text-fg-brand">bottom-[60px]</code>
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">backdropClasses</code>
                </td>
                <td class="px-6 py-4">
                    String
                </td>
                <td class="px-6 py-4">
                    Set a string of Tailwind CSS utility classes to override the custom backdrop classes.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onShow()</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the drawer has been shown.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onHide()</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the drawer has been hidden.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">onToggle()</code>
                </td>
                <td class="px-6 py-4">
                    Function
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the drawer visibility has been toggled.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Methods

Use the following methods on the Drawer object to show, hide or check the visibility.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left text-body">
        <thead class="bg-neutral-secondary-soft text-heading">
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
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">show()</code>
                </td>
                <td class="px-6 py-4">
                    Use the show function to show the drawer element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">hide()</code>
                </td>
                <td class="px-6 py-4">
                    Use the hide function to hide the drawer element.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">toggle()</code>
                </td>
                <td class="px-6 py-4">
                    Use the toggle function to toggle the drawer element's visibility.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">isVisible()</code>
                </td>
                <td class="px-6 py-4">
                    Use the isVisible function to check whether the element is visible or not.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnShow(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the drawer has been shown.
                </td>
            </tr>
            <tr class="border-b bg-neutral-primary border-default">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnHide(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the drawer has been hidden.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">updateOnToggle(callback)</code>
                </td>
                <td class="px-6 py-4">
                    Set a callback function when the drawer visibility has been toggled.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Drawer object.

First of all, create a new JavaScript element object for the first parameter of the Drawer object and another options object to set the placement, backdrop settings, and callback functions.

{{< code lang="javascript" file="drawer.js" icon="file" >}}
// set the drawer menu element
const $targetEl = document.getElementById('drawer-js-example');

// options with default values
const options = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
        'bg-dark/50 fixed inset-0 z-30',
    onHide: () => {
        console.log('drawer is hidden');
    },
    onShow: () => {
        console.log('drawer is shown');
    },
    onToggle: () => {
        console.log('drawer has been toggled');
    },
};

// instance options object
const instanceOptions = {
  id: 'drawer-js-example',
  override: true
};
{{< /code >}}

Initialize the Drawer positioning by creating a new object:

{{< code lang="javascript" file="drawer.js" icon="file" >}}
import { Drawer } from 'flowbite';

/*
 * $targetEl (required)
 * options (optional)
 * instanceOptions (optional)
 */
const drawer = new Drawer($targetEl, options, instanceOptions);
{{< /code >}}

Use the `show` and `hide` methods to show and hide the drawer component directly from JavaScript.

{{< code lang="javascript" file="drawer.js" icon="file" >}}
// show the drawer
drawer.show();

// hide the drawer
drawer.hide();
{{< /code >}}

Use the `toggle` method to toggle the visibility of the drawer.

{{< code lang="javascript" file="drawer.js" icon="file" >}}
// toggle the drawer
drawer.toggle();
{{< /code >}}

Use the `isVisible` method to check the visibility of the drawer:

{{< code lang="javascript" file="drawer.js" icon="file" >}}
// true or false
drawer.isVisible();
{{< /code >}}

### HTML Markup

Use the following HTML code for the JavaScript example above.

{{< code lang="html" file="drawer.html" icon="file" >}}
<!-- drawer component -->
<div id="drawer-js-example" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft border-e border-default w-80" tabindex="-1" aria-labelledby="drawer-js-example">
    <div class="border-b border-default pb-4 flex items-center">
      <a href="https://flowbite.com/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">Flowbite</span>
      </a>
      <button type="button" data-drawer-hide="drawer-js-example-backdrop" aria-controls="drawer-js-example-backdrop" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
  <div class="py-5 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full justify-between px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Products</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="pl-10 flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-4.5 h-4.5 ms-2 text-xs font-medium text-fg-danger-strong bg-danger-soft border border-danger-subtle rounded-full">2</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <svg class="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Drawer (off-canvas) class, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="drawer.ts" icon="file" >}}
import { Drawer } from 'flowbite';
import type { DrawerOptions, DrawerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the drawer menu element
const $targetEl: HTMLElement = document.getElementById('drawer-js-example');

// options with default values
const options: DrawerOptions = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onHide: () => {
        console.log('drawer is hidden');
    },
    onShow: () => {
        console.log('drawer is shown');
    },
    onToggle: () => {
        console.log('drawer has been toggled');
    },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'drawer-js-example',
  override: true
};

/*
 * $targetEl (required)
 * options (optional)
 * instanceOptions (optional)
 */
const drawer: DrawerInterface = new Drawer($targetEl, options, instanceOptions);

// show the drawer
drawer.show();
{{< /code >}}

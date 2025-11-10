---
layout: docs
title: Tailwind CSS Chat Bubble - Flowbite
description: Use the chat bubble component to show chat messages in your web application including voice notes, images, galleries and other attachments based on multiple styles and variations
group: components
toc: true
requires_js: true

previous: Carousel
previousLink: components/carousel/
next: Clipboard
nextLink: components/clipboard/
---

The chat bubble component is the building block for creating chat interfaces where users can send messages to each other by text, voice notes, images, galleries and other attachments. These components are usually used in chat applications and social media platforms such as Facebook, Twitter/X, WhatsApp, and more.

The examples below provide multiple variations of default, outline, and clean styles coded with the utility classes from Tailwind CSS. Some of the components may require you to include the Flowbite JavaScript to enable the dropdowns and tooltips functionality.

## Default chat bubble

Use this example to show a simple chat bubble with a text message, user profile and a timestamp.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="380" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <p class="text-sm py-2.5 text-body">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Voice note message

This example can be used to show a voice note message with control buttons and a dropdown menu.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="380" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <button class="inline-flex self-center items-center text-body hover:text-heading" type="button">
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         </button>
         <svg aria-hidden="true" class="w-[145px] md:w-[185px] md:h-[40px] text-fg-brand" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
            <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
            <rect x="66" y="16" width="8" height="8" rx="4" fill="currentColor"/>
         </svg>
         <span class="inline-flex self-center items-center text-sm font-medium text-heading">3:42</span>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="shrink-0 inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## File attachment

Use this example to send a file attachment inside a chat bubble with the ability to download the file.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="380" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image">
   <div class="flex flex-col gap-1">
      <div class="flex flex-col w-full max-w-[326px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
         <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
         </div>
         <div class="flex items-start my-2.5 bg-neutral-tertiary rounded-base p-2">
            <div class="me-1.5">
               <span class="flex items-center gap-2 text-sm font-medium text-heading pb-2">
                  <svg fill="none" aria-hidden="true" class="w-5 h-5 shrink-0" viewBox="0 0 20 21">
                     <g clip-path="url(#clip0_3173_1381)">
                        <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                        <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                        <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                        <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                        <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                        <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                     </g>
                     <defs>
                        <clipPath id="clip0_3173_1381">
                           <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                        </clipPath>
                     </defs>
                  </svg>
                  Flowbite Terms & Conditions
               </span>
               <span class="flex text-xs font-normal text-heading gap-2">
                  12 Pages 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  18 MB 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  PDF
               </span>
            </div>
            <div class="inline-flex self-center items-center">
               <button class="text-heading bg-neutral-tertiary box-border border border-transparent hover:bg-neutral-quaternary focus:ring-4 focus:ring-neutral-quaternary font-medium leading-5 rounded-base p-2 focus:outline-none" type="button">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
               </button>
            </div>
         </div>
         <span class="text-sm text-body">Delivered</span>
      </div>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Image attachment

This example can be used to show an image attachment with a download button when hovering over.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="480" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image">
   <div class="flex flex-col gap-1">
      <div class="flex flex-col w-full max-w-[326px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
         <div class="flex items-center space-x-1.5 rtl:space-x-reverse mb-2">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
         </div>
         <p class="text-sm text-body">This is the new office <3</p>
         <div class="group relative my-2.5">
            <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                <button data-tooltip-target="download-image" class="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-white">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                </button>
                <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Download image
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <img src="/docs/images/blog/image-2.jpg" class="rounded-base" />
         </div>
         <span class="text-sm text-body">Delivered</span>
      </div>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Image gallery

Use this example to show an image gallery based on a grid layout with the ability to download images.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="480" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image">
   <div class="flex flex-col gap-1">
      <div class="flex flex-col w-full max-w-[326px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
         <div class="flex items-center space-x-1.5 rtl:space-x-reverse mb-2">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
         </div>
         <p class="text-sm text-body">This is the new office <3</p>
         <div class="grid gap-4 grid-cols-2 my-2.5">
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-1" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-1.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-2" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                        <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-2.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-3" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                        <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-3.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <button class="absolute w-full h-full bg-brand/90 hover:bg-brand/30 transition-all duration-300 rounded-base flex items-center justify-center">
                    <span class="text-xl font-medium text-white">+7</span>
                    <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </button>
                <img src="/docs/images/blog/image-1.jpg" class="rounded-base" />
            </div>
         </div>
         <div class="flex justify-between items-center">
            <span class="text-sm text-body">Delivered</span>
            <button class="text-sm text-fg-brand font-medium inline-flex items-center hover:underline">
               <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
               Save all
            </button>
         </div>
      </div>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## URL preview sharing

Use this example to show a OG preview of the URL that is being shared inside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="520" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <p class="text-sm py-2.5 text-body">Check out this open-source UI component library based on Tailwind CSS:</p>
      <p class="text-sm pb-2.5"><a href="https://github.com/themesberg/flowbite" class="text-fg-brand underline hover:no-underline font-medium break-all">https://github.com/themesberg/flowbite</a></p>
      <a href="#" class="bg-neutral-tertiary rounded-base p-4 mb-2 hover:bg-neutral-quaternary">
        <img src="https://flowbite.com/docs/images/og-image.png" class="rounded-base mb-2" />
        <span class="text-sm font-medium text-heading">GitHub - themesberg/flowbite: The most popular and open source libra ...</span>
        <p class="text-xs text-body font-normal mt-2">github.com</p>
      </a>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Outline chat bubble

Use this example to show a text message with the user profile and timestamp outside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="370" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-1 w-full max-w-[320px]">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="flex flex-col leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-bas">
         <p class="text-sm text-body"> That's awesome. I think our users will really appreciate the improvements.</p>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Outline voice note

This example can be used to show a voice note with the user profile and timestamp outside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="370" >}}
<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
        <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
        </div>
        <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
            <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
               <button class="inline-flex self-center items-center text-body hover:text-heading" type="button">
                  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
               </button>
               <svg aria-hidden="true" class="w-[145px] md:w-[185px] md:h-[40px] text-fg-brand" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="66" y="16" width="8" height="8" rx="4" fill="currentColor"/>
               </svg>
               <span class="inline-flex self-center items-center text-sm font-medium text-heading">3:42</span>
            </div>
        </div>
        <span class="text-sm text-body">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
    </button>
    <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
        <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
            </li>
            <li>
                <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
            </li>
            <li>
                <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
            </li>
            <li>
                <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
            </li>
            <li>
                <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## Outline file attachment

Use this example to show a file attachment with the user profile and timestamp outside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="380" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-1">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
                 <div class="flex items-start my-2.5 bg-neutral-tertiary rounded-base p-2">
            <div class="me-1.5">
               <span class="flex items-center gap-2 text-sm font-medium text-heading pb-2">
                  <svg fill="none" aria-hidden="true" class="w-5 h-5 shrink-0" viewBox="0 0 20 21">
                     <g clip-path="url(#clip0_3173_1381)">
                        <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                        <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                        <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                        <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                        <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                        <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                     </g>
                     <defs>
                        <clipPath id="clip0_3173_1381">
                           <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                        </clipPath>
                     </defs>
                  </svg>
                  Flowbite Terms & Conditions
               </span>
               <span class="flex text-xs font-normal text-heading gap-2">
                  12 Pages 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  18 MB 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  PDF
               </span>
            </div>
            <div class="inline-flex self-center items-center">
               <button class="text-heading bg-neutral-tertiary box-border border border-transparent hover:bg-neutral-quaternary focus:ring-4 focus:ring-neutral-quaternary font-medium leading-5 rounded-base p-2 focus:outline-none" type="button">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
               </button>
            </div>
         </div>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Outline image attachment

This example can be used to send an image attachment with the user profile outside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="460" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-1">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
        <p class="text-sm text-body">I'm working from home today! 😅</p>
        <div class="group relative my-2.5">
            <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                <button data-tooltip-target="download-image" class="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                </button>
                <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Download image
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <img src="/docs/images/blog/image-1.jpg" class="rounded-base"/>
        </div>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Outline image gallery

Use this example to show an image gallery with the user profile and timestamp outside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="480" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-1">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-base">
        <p class="text-sm text-body">I'm working from home today! 😅</p>
        <div class="grid gap-4 grid-cols-2 my-2.5">
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-1" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-1.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-2" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                        <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-2.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-3" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                        <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-3.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <button class="absolute w-full h-full bg-brand/90 hover:bg-brand/30 transition-all duration-300 rounded-base flex items-center justify-center">
                    <span class="text-xl font-medium text-white">+7</span>
                    <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </button>
                <img src="/docs/images/blog/image-1.jpg" class="rounded-base" />
            </div>
         </div>
         <div class="flex justify-end items-center">
            <button class="text-sm text-fg-brand font-medium inline-flex items-center hover:underline">
               <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
               Save all
            </button>
         </div>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Outline URL preview sharing

Use this example to show a URL preview with the user profile and timestamp outside the chat bubble.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="520" >}}
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-1 w-full max-w-[320px]">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="flex flex-col leading-1.5 p-4 bg-neutral-secondary-soft rounded-e-base rounded-es-bas">
      <p class="text-sm py-2.5 text-body">Check out this open-source UI component library based on Tailwind CSS:</p>
      <p class="text-sm pb-2.5"><a href="https://github.com/themesberg/flowbite" class="text-fg-brand underline hover:no-underline font-medium break-all">https://github.com/themesberg/flowbite</a></p>
      <a href="#" class="bg-neutral-tertiary rounded-base p-4 mb-2 hover:bg-neutral-quaternary">
        <img src="https://flowbite.com/docs/images/og-image.png" class="rounded-base mb-2" />
        <span class="text-sm font-medium text-heading">GitHub - themesberg/flowbite: The most popular and open source libra ...</span>
        <p class="text-xs text-body font-normal mt-2">github.com</p>
      </a>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none" type="button">
      <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"/></svg>
   </button>
   <div id="dropdownDots" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40 block hidden">
      <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
         </li>
         <li>
            <a href="#" class="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Clean chat bubble

Use this example to show a text message with the user profile and timestamp with a transparent background.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="180" >}}
<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col w-full max-w-[320px] leading-1.5">
        <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
        </div>
        <p class="text-sm py-2 text-heading"> That's awesome. I think our users will really appreciate the improvements.</p>
        <span class="text-sm text-body">Delivered</span>
    </div>
</div>
{{< /example >}}

## Clean voice note

This example can be used to show a voice note with a transparent background.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="180" >}}
<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
        <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
        </div>
        <div class="flex flex-col w-full max-w-[320px] leading-1.5 py-2 rounded-e-base rounded-es-base">
            <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
               <button class="inline-flex self-center items-center text-body hover:text-heading" type="button">
                  <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
               </button>
               <svg aria-hidden="true" class="w-[145px] md:w-[185px] md:h-[40px] text-fg-brand" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                  <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" class="dark:fill-quaternary"/>
                  <rect x="66" y="16" width="8" height="8" rx="4" fill="currentColor"/>
               </svg>
               <span class="inline-flex self-center items-center text-sm font-medium text-heading">3:42</span>
            </div>
        </div>
        <span class="text-sm text-body">Delivered</span>
    </div>
</div>
{{< /example >}}

## Clean file attachment

Use this example to show a file attachment and a download button with a transparent background.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="200" >}}
<div class="flex items-start gap-2.5">
   <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
   <div class="flex flex-col gap-2.5">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="leading-1.5 flex w-full max-w-[320px] flex-col">
         <div class="flex items-start bg-neutral-secondary-soft rounded-xl p-2">
            <div class="me-1.5">
               <span class="flex items-center gap-2 text-sm font-medium text-heading pb-2">
                  <svg fill="none" aria-hidden="true" class="w-5 h-5 shrink-0" viewBox="0 0 20 21">
                     <g clip-path="url(#clip0_3173_1381)">
                        <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                        <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                        <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                        <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                        <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                        <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                     </g>
                     <defs>
                        <clipPath id="clip0_3173_1381">
                           <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                        </clipPath>
                     </defs>
                  </svg>
                  Flowbite Terms & Conditions
               </span>
               <span class="flex text-xs font-normal text-heading gap-2">
                  12 Pages 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  18 MB 
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                     <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                  </svg>
                  PDF
               </span>
            </div>
            <div class="inline-flex self-center items-center">
               <button class="text-heading bg-neutral-secondary-soft box-border border border-transparent hover:bg-neutral-quaternary focus:ring-4 focus:ring-neutral-quaternary font-medium leading-5 rounded-base p-2 focus:outline-none" type="button">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
               </button>
            </div>
         </div>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
</div>
{{< /example >}}

## Clean image attachment

This example can be used to show an image and a download button with a transparent background.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="380" >}}
<div class="flex items-start gap-2.5">
   <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
   <div class="flex flex-col gap-2.5">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="leading-1.5 flex w-full max-w-[320px] flex-col">
         <p class="text-sm text-body">This is the new office <3</p>
         <div class="group relative mt-2">
            <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                <button data-tooltip-target="download-image" class="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                </button>
                <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    Download image
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <img src="/docs/images/blog/image-2.jpg" class="rounded-base" />
         </div>
      </div>
      <span class="text-sm text-body">Delivered</span>
   </div>
</div>
{{< /example >}}

## Clean image gallery

Use this example to show an image gallery with a transparent background as a chat message.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="390" >}}
<div class="flex items-start gap-2.5">
   <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
   <div class="flex flex-col gap-2.5">
      <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-heading">Bonnie Green</span>
         <span class="text-sm text-body">11:46</span>
      </div>
      <div class="leading-1.5 flex w-full max-w-[320px] flex-col">
         <p class="text-sm text-body">This is the new office <3</p>
         <div class="grid gap-4 grid-cols-2 mt-2">
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-1" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-1" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-1.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-2" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-2.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-base flex items-center justify-center">
                    <button data-tooltip-target="download-image-3" class="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                  <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
                    </button>
                    <div id="download-image-3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <img src="/docs/images/blog/image-3.jpg" class="rounded-base" />
            </div>
            <div class="group relative">
                <button class="absolute w-full h-full bg-brand/90 hover:bg-brand/30 transition-all duration-300 rounded-base flex items-center justify-center">
                    <span class="text-xl font-medium text-white">+7</span>
                    <div id="download-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                        Download image
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </button>
                <img src="/docs/images/blog/image-1.jpg" class="rounded-base" />
            </div>
         </div>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-sm text-body">Delivered</span>
        <button class="text-sm text-fg-brand font-medium inline-flex items-center hover:underline">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/></svg>
            Save all
        </button>
        </div>
   </div>
</div>
{{< /example >}}

## Clean URL preview sharing

This example can be used to show a URL preview with a transparent background.

{{< example class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="450" >}}
<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col w-full max-w-[320px] leading-1.5">
        <div class="flex items-center space-x-1.5 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-heading">Bonnie Green</span>
            <span class="text-sm text-body">11:46</span>
        </div>
      <p class="text-sm py-2.5 text-body">Check out this open-source UI component library based on Tailwind CSS:</p>
      <p class="text-sm pb-2.5"><a href="https://github.com/themesberg/flowbite" class="text-fg-brand underline hover:no-underline font-medium break-all">https://github.com/themesberg/flowbite</a></p>
      <a href="#" class="bg-neutral-tertiary rounded-base p-4 mb-2 hover:bg-neutral-quaternary">
        <img src="https://flowbite.com/docs/images/og-image.png" class="rounded-base mb-2" />
        <span class="text-sm font-medium text-heading">GitHub - themesberg/flowbite: The most popular and open source libra ...</span>
        <p class="text-xs text-body font-normal mt-2">github.com</p>
      </a>
      <span class="text-sm text-body">Delivered</span>
    </div>
</div>
{{< /example >}}
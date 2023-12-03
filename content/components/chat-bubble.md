---
layout: home
title: Tailwind CSS Chat Bubble - Flowbite
description:
group: components
toc: true

previous: Carousel
previousLink: components/carousel/
next: Drawer
nextLink: components/drawer/
---

## Default chat bubble

{{< example id="chat-bubble-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <p class="text-base font-normal py-2.5 text-gray-900 dark:text-white"> That's awesome. I think our users will really appreciate the improvements.</p>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## Outside chat bubble

{{< example id="outside-chat-bubble-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
    <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div class="flex flex-col w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <p class="text-base font-normal text-gray-900 dark:text-white"> That's awesome. I think our users will really appreciate the improvements.</p>
    </div>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## Inside Voice note chat bubble

{{< example id="inside-voice-note-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
        <div class="flex flex-col gap-2.5 w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                    <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <svg width="185" height="40" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="66" y="16" width="8" height="8" rx="4" fill="#1C64F2"/>
                </svg>
                <span class="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 dark:text-white">3:42</span>
            </div>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## Voice note chat bubble

{{< example id="voice-note-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <div class="flex flex-col w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-gray-800 dark:text-white inline-flex self-center items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                    <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                </svg>
                 <svg width="185" height="40" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280"class="dark:fill-white"/>
                    <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="66" y="16" width="8" height="8" rx="4" fill="#1C64F2"/>
                </svg>
                <span class="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 dark:text-white">3:42</span>
            </div>
        </div>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## PDF download outside chat bubble

{{< example id="download-outside-chat-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
    <div class="flex flex-col w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div class="flex items-start gap-4 my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
       <div>
        <span class="flex gap-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap pb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <g clip-path="url(#clip0_3173_1381)">
    <path d="M5.02393 0.5C4.33643 0.5 3.77393 1.0625 3.77393 1.75V19.25C3.77393 19.9375 4.33643 20.5 5.02393 20.5H17.5239C18.2114 20.5 18.7739 19.9375 18.7739 19.25V5.5L13.7739 0.5H5.02393Z" fill="#E2E5E7"/>
    <path d="M15.0239 5.5H18.7739L13.7739 0.5V4.25C13.7739 4.9375 14.3364 5.5 15.0239 5.5Z" fill="#B0B7BD"/>
    <path d="M18.7739 9.25L15.0239 5.5H18.7739V9.25Z" fill="#CAD1D8"/>
    <path d="M16.2739 16.75C16.2739 17.0938 15.9927 17.375 15.6489 17.375H1.89893C1.55518 17.375 1.27393 17.0938 1.27393 16.75V10.5C1.27393 10.1562 1.55518 9.875 1.89893 9.875H15.6489C15.9927 9.875 16.2739 10.1562 16.2739 10.5V16.75Z" fill="#F15642"/>
    <path d="M3.9983 12.3419C3.9983 12.1769 4.1283 11.9969 4.33768 11.9969H5.49205C6.14205 11.9969 6.72705 12.4319 6.72705 13.2656C6.72705 14.0556 6.14205 14.4956 5.49205 14.4956H4.65768V15.1556C4.65768 15.3756 4.51768 15.5 4.33768 15.5C4.17268 15.5 3.9983 15.3756 3.9983 15.1556V12.3419ZM4.65768 12.6262V13.8712H5.49205C5.82705 13.8712 6.09205 13.5756 6.09205 13.2656C6.09205 12.9162 5.82705 12.6262 5.49205 12.6262H4.65768Z" fill="white"/>
    <path d="M7.7058 15.5C7.5408 15.5 7.3608 15.41 7.3608 15.1906V12.3519C7.3608 12.1725 7.5408 12.0419 7.7058 12.0419H8.85018C11.1339 12.0419 11.0839 15.5 8.89518 15.5H7.7058ZM8.0208 12.6519V14.8906H8.85018C10.1996 14.8906 10.2596 12.6519 8.85018 12.6519H8.0208Z" fill="white"/>
    <path d="M11.8939 13.4862H13.1683C13.3483 13.4862 13.5283 13.6662 13.5283 13.8406C13.5283 14.0056 13.3483 14.1406 13.1683 14.1406H11.8939V15.19C11.8939 15.365 11.7696 15.4994 11.5946 15.4994C11.3746 15.4994 11.2402 15.365 11.2402 15.19V12.3512C11.2402 12.1719 11.3752 12.0412 11.5946 12.0412H13.3489C13.5689 12.0412 13.6989 12.1719 13.6989 12.3512C13.6989 12.5112 13.5689 12.6913 13.3489 12.6913H11.8939V13.4862Z" fill="white"/>
    <path d="M15.6489 17.375H3.77393V18H15.6489C15.9927 18 16.2739 17.7188 16.2739 17.375V16.75C16.2739 17.0938 15.9927 17.375 15.6489 17.375Z" fill="#CAD1D8"/>
  </g>
  <defs>
    <clipPath id="clip0_3173_1381">
      <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>Flowbite Pro Terms & Conditions</span>
        <span class="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">12 Pages 
          <svg xmlns="http://www.w3.org/2000/svg" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
          </svg>
          18 MB 
          <svg xmlns="http://www.w3.org/2000/svg" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
          </svg>
          PDF</span>
       </div>
        <div class="inline-flex self-center items-center">
            <button class="text-sm font-medium text-center text-gray-900 rounded-lg hover:text-gray-700 dark:hover:text-gray-100 dark:text-white focus:ring-gray-50  dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg>
    </button>
        </div>
    </div>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
        </ul>
    </div>

</div>
{{< /example >}}

## PDF download chat bubble

{{< example id="download-chat-bubble-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
    <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div class="flex flex-col w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
    <div class="flex items-start gap-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
       <div>
        <span class="flex gap-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap pb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <g clip-path="url(#clip0_3173_1381)">
    <path d="M5.02393 0.5C4.33643 0.5 3.77393 1.0625 3.77393 1.75V19.25C3.77393 19.9375 4.33643 20.5 5.02393 20.5H17.5239C18.2114 20.5 18.7739 19.9375 18.7739 19.25V5.5L13.7739 0.5H5.02393Z" fill="#E2E5E7"/>
    <path d="M15.0239 5.5H18.7739L13.7739 0.5V4.25C13.7739 4.9375 14.3364 5.5 15.0239 5.5Z" fill="#B0B7BD"/>
    <path d="M18.7739 9.25L15.0239 5.5H18.7739V9.25Z" fill="#CAD1D8"/>
    <path d="M16.2739 16.75C16.2739 17.0938 15.9927 17.375 15.6489 17.375H1.89893C1.55518 17.375 1.27393 17.0938 1.27393 16.75V10.5C1.27393 10.1562 1.55518 9.875 1.89893 9.875H15.6489C15.9927 9.875 16.2739 10.1562 16.2739 10.5V16.75Z" fill="#F15642"/>
    <path d="M3.9983 12.3419C3.9983 12.1769 4.1283 11.9969 4.33768 11.9969H5.49205C6.14205 11.9969 6.72705 12.4319 6.72705 13.2656C6.72705 14.0556 6.14205 14.4956 5.49205 14.4956H4.65768V15.1556C4.65768 15.3756 4.51768 15.5 4.33768 15.5C4.17268 15.5 3.9983 15.3756 3.9983 15.1556V12.3419ZM4.65768 12.6262V13.8712H5.49205C5.82705 13.8712 6.09205 13.5756 6.09205 13.2656C6.09205 12.9162 5.82705 12.6262 5.49205 12.6262H4.65768Z" fill="white"/>
    <path d="M7.7058 15.5C7.5408 15.5 7.3608 15.41 7.3608 15.1906V12.3519C7.3608 12.1725 7.5408 12.0419 7.7058 12.0419H8.85018C11.1339 12.0419 11.0839 15.5 8.89518 15.5H7.7058ZM8.0208 12.6519V14.8906H8.85018C10.1996 14.8906 10.2596 12.6519 8.85018 12.6519H8.0208Z" fill="white"/>
    <path d="M11.8939 13.4862H13.1683C13.3483 13.4862 13.5283 13.6662 13.5283 13.8406C13.5283 14.0056 13.3483 14.1406 13.1683 14.1406H11.8939V15.19C11.8939 15.365 11.7696 15.4994 11.5946 15.4994C11.3746 15.4994 11.2402 15.365 11.2402 15.19V12.3512C11.2402 12.1719 11.3752 12.0412 11.5946 12.0412H13.3489C13.5689 12.0412 13.6989 12.1719 13.6989 12.3512C13.6989 12.5112 13.5689 12.6913 13.3489 12.6913H11.8939V13.4862Z" fill="white"/>
    <path d="M15.6489 17.375H3.77393V18H15.6489C15.9927 18 16.2739 17.7188 16.2739 17.375V16.75C16.2739 17.0938 15.9927 17.375 15.6489 17.375Z" fill="#CAD1D8"/>
  </g>
  <defs>
    <clipPath id="clip0_3173_1381">
      <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>
Flowbite Pro Terms & Conditions
</span>
        <span class="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">12 Pages 
          <svg xmlns="http://www.w3.org/2000/svg" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
          </svg>
          18 MB 
          <svg xmlns="http://www.w3.org/2000/svg" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
            <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
          </svg>
          PDF</span>
       </div>
        <div class="inline-flex self-center items-center">
            <button class="text-sm font-medium text-center text-gray-900 rounded-lg hover:text-gray-700 dark:hover:text-gray-100 dark:text-white focus:ring-gray-50  dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg>
    </button>
        </div>
    </div>
    </div>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
            </li>
        </ul>
    </div>
</div>
{{< /example >}}

## Default chat

{{< example id="noframe-chat-bubble-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col w-[320px] leading-1.5 p-4">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <p class="text-base font-normal py-2.5 text-gray-900 dark:text-white"> That's awesome. I think our users 
will really appreciate the improvements.</p>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
</div>
{{< /example >}}

## Voice note chat

{{< example id="noframe-voice-note-bubble-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col gap-1">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <div class="flex flex-col w-[320px] leading-1.5 p-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-gray-800 dark:text-white inline-flex self-center items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                    <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                </svg>
                 <svg width="185" height="40" viewBox="0 0 185 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="17" width="3" height="6" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="7" y="15.5" width="3" height="9" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="21" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280"class="dark:fill-white"/>
                    <rect x="14" y="6.5" width="3" height="27" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="28" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="35" y="3" width="3" height="34" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="42" y="5.5" width="3" height="29" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="49" y="10" width="3" height="20" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="56" y="13.5" width="3" height="13" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="63" y="16" width="3" height="8" rx="1.5" fill="#6B7280" class="dark:fill-white"/>
                    <rect x="70" y="12.5" width="3" height="15" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="77" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="84" y="3" width="3" height="34" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="91" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="98" y="0.5" width="3" height="39" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="105" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="112" y="6.5" width="3" height="27" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="119" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="126" y="11.5" width="3" height="17" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="133" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="140" y="2" width="3" height="36" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="147" y="7" width="3" height="26" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="154" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="161" y="9" width="3" height="22" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="168" y="13.5" width="3" height="13" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="175" y="16" width="3" height="8" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="182" y="17.5" width="3" height="5" rx="1.5" fill="#E5E7EB" class="dark:fill-gray-500"/>
                    <rect x="66" y="16" width="8" height="8" rx="4" fill="#1C64F2"/>
                </svg>
                <span class="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 dark:text-white">3:42</span>
            </div>
        </div>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
    </div>
</div>

{{< /example >}}

## PDF download chat

{{< example id="noframe-pdf-chat-bubble-example" class="flex justify-center" github="components/chat-bubble.md" show_dark=true iframeHeight="420" >}}

<div class="flex items-start gap-2.5">
  <img class="h-8 w-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
  <div class="flex flex-col gap-2.5">
    <div class="flex items-center space-x-2 rtl:space-x-reverse">
      <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
    </div>
    <div class="leading-1.5 flex w-[320px] flex-col">
      <div class="flex items-start justify-between rounded-xl bg-gray-50 p-2 dark:bg-gray-600">
        <div>
          <span class="flex gap-2 whitespace-nowrap pb-2 text-sm font-medium text-gray-900 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <g clip-path="url(#clip0_3173_1381)">
                <path d="M5.02393 0.5C4.33643 0.5 3.77393 1.0625 3.77393 1.75V19.25C3.77393 19.9375 4.33643 20.5 5.02393 20.5H17.5239C18.2114 20.5 18.7739 19.9375 18.7739 19.25V5.5L13.7739 0.5H5.02393Z" fill="#E2E5E7" />
                <path d="M15.0239 5.5H18.7739L13.7739 0.5V4.25C13.7739 4.9375 14.3364 5.5 15.0239 5.5Z" fill="#B0B7BD" />
                <path d="M18.7739 9.25L15.0239 5.5H18.7739V9.25Z" fill="#CAD1D8" />
                <path d="M16.2739 16.75C16.2739 17.0938 15.9927 17.375 15.6489 17.375H1.89893C1.55518 17.375 1.27393 17.0938 1.27393 16.75V10.5C1.27393 10.1562 1.55518 9.875 1.89893 9.875H15.6489C15.9927 9.875 16.2739 10.1562 16.2739 10.5V16.75Z" fill="#F15642" />
                <path d="M3.9983 12.3419C3.9983 12.1769 4.1283 11.9969 4.33768 11.9969H5.49205C6.14205 11.9969 6.72705 12.4319 6.72705 13.2656C6.72705 14.0556 6.14205 14.4956 5.49205 14.4956H4.65768V15.1556C4.65768 15.3756 4.51768 15.5 4.33768 15.5C4.17268 15.5 3.9983 15.3756 3.9983 15.1556V12.3419ZM4.65768 12.6262V13.8712H5.49205C5.82705 13.8712 6.09205 13.5756 6.09205 13.2656C6.09205 12.9162 5.82705 12.6262 5.49205 12.6262H4.65768Z" fill="white" />
                <path d="M7.7058 15.5C7.5408 15.5 7.3608 15.41 7.3608 15.1906V12.3519C7.3608 12.1725 7.5408 12.0419 7.7058 12.0419H8.85018C11.1339 12.0419 11.0839 15.5 8.89518 15.5H7.7058ZM8.0208 12.6519V14.8906H8.85018C10.1996 14.8906 10.2596 12.6519 8.85018 12.6519H8.0208Z" fill="white" />
                <path d="M11.8939 13.4862H13.1683C13.3483 13.4862 13.5283 13.6662 13.5283 13.8406C13.5283 14.0056 13.3483 14.1406 13.1683 14.1406H11.8939V15.19C11.8939 15.365 11.7696 15.4994 11.5946 15.4994C11.3746 15.4994 11.2402 15.365 11.2402 15.19V12.3512C11.2402 12.1719 11.3752 12.0412 11.5946 12.0412H13.3489C13.5689 12.0412 13.6989 12.1719 13.6989 12.3512C13.6989 12.5112 13.5689 12.6913 13.3489 12.6913H11.8939V13.4862Z" fill="white" />
                <path d="M15.6489 17.375H3.77393V18H15.6489C15.9927 18 16.2739 17.7188 16.2739 17.375V16.75C16.2739 17.0938 15.9927 17.375 15.6489 17.375Z" fill="#CAD1D8" />
              </g>
              <defs>
                <clipPath id="clip0_3173_1381">
                  <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            Flowbite Pro Terms & Conditions
          </span>
          <span class="flex gap-2 text-xs font-normal text-gray-500 dark:text-gray-400"
            >12 Pages
            <svg xmlns="http://www.w3.org/2000/svg" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
              <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
            </svg>
            18 MB
            <svg xmlns="http://www.w3.org/2000/svg" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
              <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
            </svg>
            PDF</span
          >
        </div>
        <div class="inline-flex items-center self-center">
          <button class="rounded-lg text-center text-sm font-medium text-gray-900 hover:text-gray-700 focus:ring-gray-50 dark:text-white dark:hover:bg-gray-600 dark:hover:text-gray-100 dark:focus:ring-gray-600" type="button">
            <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
  </div>
</div>

{{< /example >}}

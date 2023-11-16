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

## Default example

{{< example id="default-chat-bubble" github="components/chat-bubble.md" show_dark=true >}}

<div class="relative mx-auto border-gray-900 dark:border-gray-800 dark:bg-gray-800 border-8 rounded-[2.5rem] h-[982px] w-[400px] overflow-hidden">
    <div class="rounded-[2rem] bg-white dark:bg-gray-800 flex flex-col h-full">
        <div class="flex items-center p-3 border-b border-gray-200 dark:border-gray-500">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-blue-700 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                </svg>
                <div class="flex items-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="text-sm font-semibold whitespace-nowrap ml-2 rtl:ml-0 rtl:mr-2">Micheal Gough</div>
                </div>
            </div>
            <button type="button" class="ms-auto p-2 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                    <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
                </svg>
                <span class="sr-only">video call</span>
            </button>
            <button type="button" class="p-2 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                </svg>
                <span class="sr-only">phone call</span>
            </button>
        </div>

        <div class="overflow-y-auto h-full flex-1">
        <div class="flex w-320 items-start gap-2 my-8 ml-4 mr-10 rtl:ml-10 rtl:mr-4">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
            <div class="flex flex-col flex-1 items-start gap-1">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <p class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
                    <p class="text-sm font-normal text-gray-500"> 11:46 </p>
                </div>
                <div class="text-sm font-normal p-4 border-gray-200 bg-gray-100 rounded-tl-none rtl:rounded-tl-xl rounded-tr-xl rtl:rounded-tr-none rounded-br-xl rounded-bl-xl whitespace-pre-line dark:text-white dark:bg-gray-700">Hello there,

                    We need to have a meeting to discuss the latest changes to be able to launch the product, please confirm when you are available.

                    Thank you
                </div>
                <p class="text-sm font-normal text-gray-500"> Seen </p>
            </div>
     <button type="button" class="flex items-center gap-6 self-stretch">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
        </div>

<div class="flex w-320 items-start gap-2 my-8 ml-10 mr-4 rtl:ml-4 rtl:mr-10 ">
   <button type="button" class="flex items-center self-stretch">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div class="flex flex-col flex-1 items-end gap-1">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Micheal Gough</p>
            <p class="text-sm font-normal text-gray-500"> 11:46 </p>
        </div>
        <div class="text-sm font-normal p-4 border-gray-200 bg-gray-100 rounded-tl-xl rtl:rounded-tl-none rounded-tr-none rtl:rounded-tr-xl rounded-br-xl rounded-bl-xl dark:bg-gray-700 dark:text-white">I will immediately send you a calendar where you will see the times when I would be available for a call.</div>
    </div>
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
</div>

<div class="flex w-320 items-start gap-2 my-8 ml-10 mr-4 rtl:ml-4 rtl:mr-10 ">
    <button type="button" class="flex items-center self-stretch">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
    <div class="flex flex-col flex-1 items-end gap-1">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Micheal Gough</p>
            <p class="text-sm font-normal text-gray-500"> 11:46 </p>
        </div>
        <div class="w-full text-sm font-normal text-gray-500 dark:text-gray-400 p-4 border-gray-200 bg-gray-100 rounded-tl-xl rtl:rounded-tl-none rounded-tr-none rtl:rounded-tr-xl rounded-br-xl rounded-bl-xl dark:bg-gray-700">
            Google calendar: <img class="mt-1 w-full" src="/docs/images/chatbubble/calendar.png" alt="Jese image">
        </div>
    </div>
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
</div>

<div class="flex w-320 items-start gap-2 my-8 ml-4 mr-10 rtl:ml-10 rtl:mr-4 ">
    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
    <div class="flex flex-col flex-1 items-start gap-1">
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <p class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
            <p class="text-sm font-normal text-gray-500"> 11:46 </p>
        </div>
        <div class="text-sm font-normal p-4 border-gray-200 bg-gray-100 rounded-tl-none rtl:rounded-tl-xl rounded-tr-xl rtl:rounded-tr-none rounded-br-xl rounded-bl-xl dark:bg-gray-700 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</div>
    </div>
    <button type="button" class="flex items-center gap-6 self-stretch">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
        </svg>
    </button>
</div>
        </div>

<form class="bg-white w-full border-t border-gray-200 dark:border-gray-500">
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center dark:bg-gray-700 gap-3 px-4">
        <button type="button" class="inline-flex justify-center text-blue-600 cursor-pointer hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
            <span class="sr-only">More</span>
        </button>
        <textarea id="chat" rows="1" class="block p-2 my-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Write message..."></textarea>
                <button type="button" class="text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-1.382l-.171-.342A2.985 2.985 0 0 0 14.764 3H9.236a2.984 2.984 0 0 0-2.683 1.658L6.382 5H5a3 3 0 0 0-3 3v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a3 3 0 0 0-3-3Zm-3.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/>
            </svg>
            <span class="sr-only">Open camera</span>
        </button>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 inline-flex text-gray-500 cursor-pointer hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 19">
                <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z"/>
                <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z"/>
            </svg>
            <span class="sr-only">Voice note</span>
        </button>

    </div>

</form>

</div>
</div>
{{< /example >}}

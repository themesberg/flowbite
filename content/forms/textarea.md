---
layout: docs
title: Tailwind CSS Textarea - Flowbite
description: Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants
group: forms
toc: true

previous: Select
previousLink: forms/select/
next: Timepicker
nextLink: forms/timepicker/
---

The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.

From the examples on this page you will find multiple styles and variants of the textarea component coded with the utility classes from Tailwind CSS including a WYSIWYG editor, comment box, chatroom textarea, all available in dark mode as well. 

## Textarea example

Get started with the default example of a textarea component below.

{{< example github="forms/textarea.md" show_dark=true >}}
<label for="message" class="block mb-2.5 text-sm font-medium text-heading">Your message</label>
<textarea id="message" rows="4" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>
{{< /example >}}

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

{{< example github="forms/textarea.md" show_dark=true >}}
<form>
   <div class="w-full mb-4 border border-default-medium rounded-base bg-neutral-secondary-medium shadow-xs">
       <div class="flex items-center justify-between px-3 py-2 border-b border-default-medium">
           <div class="flex flex-wrap items-center divide-default-medium sm:divide-x sm:rtl:divide-x-reverse">
               <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/></svg>
                       <span class="sr-only">Attach file</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/></svg>
                       <span class="sr-only">Embed map</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>
                       <span class="sr-only">Upload image</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m5 4-2 2 2 2m4-4 2 2-2 2m5-12v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/></svg>
                        <span class="sr-only">Format code</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.81 0H6.6Z"/></svg>
                       <span class="sr-only">Add emoji</span>
                   </button>
               </div>
               <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"/></svg>
                       <span class="sr-only">Add list</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
                       <span class="sr-only">Settings</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 11.5 2.071 1.994M4 10h5m11 0h-1.5M12 7V4M7 7V4m10 3V4m-7 13H8v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L10 17Zm-5 3h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                       <span class="sr-only">Timeline</span>
                   </button>
                   <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
                       <span class="sr-only">Download</span>
                   </button>
               </div>
           </div>
           <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-body rounded-sm cursor-pointer sm:ms-auto hover:text-heading hover:bg-neutral-tertiary-medium">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/></svg>
               <span class="sr-only">Full screen</span>
           </button>
           <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
               Show full screen
               <div class="tooltip-arrow" data-popper-arrow></div>
           </div>
       </div>
       <div class="px-4 py-2 bg-neutral-secondary-medium rounded-b-base">
           <label for="editor" class="sr-only">Publish post</label>
           <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body" placeholder="Write an article..." required ></textarea>
       </div>
   </div>
    <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Publish post</button>
</form>
{{< /example >}}

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

{{< example github="forms/textarea.md" show_dark=true >}}
<form>
   <div class="w-full mb-4 border border-default-medium rounded-base bg-neutral-secondary-medium shadow-xs">
       <div class="px-4 py-2 bg-neutral-secondary-medium rounded-t-base">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea id="comment" rows="4" class="block w-full px-0 text-sm text-heading bg-neutral-secondary-medium border-0 focus:ring-0 placeholder:text-body" placeholder="Write a comment..." required ></textarea>
       </div>
       <div class="flex items-center px-3 py-2 border-t border-default-medium">
            <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Post comment</button>
           <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.81 0H6.6Z"/></svg>
                    <span class="sr-only">Add emoji</span>
                </button>
                <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/></svg>
                    <span class="sr-only">Attach file</span>
                </button>
                <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/></svg>
                    <span class="sr-only">Embed map</span>
                </button>
                <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>
                    <span class="sr-only">Upload image</span>
                </button>
           </div>
       </div>
   </div>
</form>
<p class="ms-auto text-xs text-body">Remember, contributions to this topic should follow our <a href="#" class="text-fg-brand hover:underline">Community Guidelines</a>.</p>
{{< /example >}}

## Chatroom input

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

{{< example github="forms/textarea.md" show_dark=true >}}
<form>
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center px-3 py-2 rounded-base bg-neutral-secondary-soft">
        <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/></svg>
            <span class="sr-only">Attach file</span>
        </button>
        <button type="button" class="p-2 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-tertiary-medium">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/></svg>
            <span class="sr-only">Upload image</span>
        </button>
        <textarea id="chat" rows="1" class="mx-4 bg-neutral-primary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 placeholder:text-body" placeholder="Your message..."></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-fg-brand rounded-full cursor-pointer hover:bg-brand-softer">
            <svg class="w-6 h-6 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/></svg>
            <span class="sr-only">Send message</span>
        </button>
    </div>
</form>
{{< /example >}}

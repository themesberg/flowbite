---
layout: docs
title: Tailwind CSS Toast - Flowbite
description: Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions
group: components
requires_js: true
toc: true

previous: Timeline
previousLink: components/timeline/
next: Tooltips
nextLink: components/tooltips/
---

The toast component can be used to enhance your website's interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component by using the `data-dismiss-target` data attribute from Flowbite.

## Default toast

Use this simple toast component with an icon, message, and dismissible close button to show alert messages to your website visitors. Make sure that you set the correct id for the `data-dismiss-target` data attribute to enable the dismissible feature.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <svg class="w-6 h-6 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/></svg>
    <div class="ms-2.5 text-sm border-s border-default ps-3.5">Set yourself free.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>

{{< /example >}}

## Colors

Use these contextual toast components to show success, danger, or warning alert messages to your users.

{{< example class="flex flex-col items-center space-y-4" github="components/toast.md" show_dark=true >}}

<div id="toast-success" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-success bg-success-soft rounded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>
<div id="toast-danger" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-danger bg-danger-soft rounded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        <span class="sr-only">Error icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Item has been deleted.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-danger" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>
<div id="toast-warning" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-warning bg-warning-soft rounded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        <span class="sr-only">Warning icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Improve password difficulty.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-warning" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>

{{< /example >}}

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-simple" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <svg class="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/></svg>
    <div class="ms-2.5 text-sm border-s border-default ps-3.5">Message sent successfully.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-simple" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>
{{< /example >}}

## Undo button

Use this toast component to also show an "undo" button to reverse the action of the user.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-undo" class="flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="text-sm font-normal">
       Conversation archived.
    </div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <a class="text-sm font-medium text-fg-brand hover:underline" href="#">Undo</a>
        <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-undo" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>
</div>

{{< /example >}}

## Toast message

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-message-cta" class="relative flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
        <div class="ms-3 text-sm font-normal">
            <span class="text-base font-semibold text-heading">Jese Leos</span>
            <div class="mb-3 mt-1">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> 
            <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/></svg>
                Reply
            </button> 
        </div>
        <button type="button" class="absolute top-2 end-2 ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>
</div>
{{< /example >}}

## Push notification

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-notification" class="w-full space-y-4 max-w-xs p-3 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="flex items-center bg-neutral-tertiary py-2 px-2.5 rounded">
        <span class="text-sm font-medium text-heading">New notification</span>
    </div>
    <div class="flex">
        <div class="relative inline-block shrink-0">
            <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese Leos image"/>
        </div>
        <div class="ms-3 text-sm font-normal text-body">
            <div class="text-base font-medium text-heading">Bonnie Green</div>
            <div>commented on your photo</div> 
            <span class="text-xs text-fg-brand">a few seconds ago</span>   
        </div>
    </div>
    <div class="flex items-center space-x-3">
        <button type="button" data-dismiss-target="#toast-notification" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Close</button>
        <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/></svg>
            Reply
        </button> 
    </div>
</div>

{{< /example >}}

## Interactive toast

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-interactive" class="w-full space-y-4 max-w-xs p-3 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="flex">
        <div class="inline-flex items-center justify-center shrink-0 w-9 h-9 text-fg-brand bg-brand-softer rounded">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
            <span class="sr-only">Refresh icon</span>
        </div>
        <div class="ms-3 text-sm font-normal text-body">
            <span class="mb-1 text-base font-medium text-heading">Update available</span>
            <div class="mb-3">A new software version is available for download.</div> 
            <div class="grid grid-cols-2 gap-3">
                <button type="button" data-dismiss-target="#toast-interactive" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Not now</button>
                <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                    <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
                    Update
                </button> 
            </div>    
        </div>
    </div>
</div>

{{< /example >}}

## Toast illustration

This example can be used to show a notification as a toast component with an illustration.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-illustration" class="w-full space-y-4 max-w-sm p-3 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="flex items-start">
        <img src="/docs/images/illustrations/smartphone-application-features.svg" class="dark:hidden w-24 h-auto max-w-full" alt="Smartphone application features">
        <img src="/docs/images/illustrations/smartphone-application-features-dark.svg" class="hidden w-24 h-auto dark:block" alt="Smartphone application features">
        <div class="ms-4 text-sm font-normal text-body">
            <span class="mb-1 text-base font-medium text-heading">Connect your wallet</span>
            <div class="mb-3">Connect your wallet by clicking the bottom-right blue button.</div> 
            <div class="grid grid-cols-2 gap-3">
                <button type="button" data-dismiss-target="#toast-illustration" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Not now</button>
                <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                    <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"/></svg>
                    Connect
                </button> 
            </div>    
        </div>
    </div>
</div>

{{< /example >}}

## Toast progress bar

Use this example to show a toast component that is dismissble with a progress bar.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-interactive" class="w-full space-y-4 max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-9 h-9 text-fg-brand bg-brand-softer rounded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
        <span class="sr-only">Refresh icon</span>
    </div>
    <div class="text-sm font-normal text-body">
        <span class="mb-1 text-base font-medium text-heading">Uploading in progress</span>
        <div class="mb-4 mt-1">Please wait while your file is being uploaded. This may take a moment.</div> 
        <div class="flex items-center space-x-2 mb-4">
            <div class="w-full bg-neutral-quaternary rounded-full h-1.5">
                <div class="bg-brand h-1.5 rounded-full" style="width: 75%"></div>
            </div>
            <div class="text-xs font-medium text-heading">75%</div>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <button type="button" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Cancel upload</button>
            <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                Go to uploads
            </button> 
        </div>    
    </div>
</div>

{{< /example >}}

## Toast danger alert

Use this example to show an alert to your users inside a toast component with a description.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-danger" class="w-full max-w-xs p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft border border-danger-subtle" role="alert">
    <h3 class="font-semibold">Whoops! Something went wrong</h3>
    <div class="mt-2 mb-4">
        The file format is not supported. Please upload a valid file type <span class="font-medium">(PDF, JPG, PNG)</span>.
    </div>
    <div class="flex items-center space-x-3">
        <button type="button" class="inline-flex items-center text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/></svg>
            Try again
        </button>
        <button type="button" data-dismiss-target="#toast-danger" class="inline-flex items-center text-fg-danger bg-transparent box-border border border-danger hover:bg-danger-strong hover:border-danger-strong hover:text-white focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            Close
        </button>
    </div>
</div>

{{< /example >}}

## Toast warning alert

This example can be used to warn users before they perform a certain action inside a toast component.

{{< example class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-warning" class="w-full max-w-md p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft border border-warning-subtle" role="alert">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span class="sr-only">Info</span>
      <h3 class="font-semibold">Upload your invoice</h3>
    </div>
    <button type="button" data-dismiss-target="#toast-warning" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 bg-warning-soft text-fg-warning-strong rounded focus:ring-2 focus:ring-warning-medium p-1.5 hover:bg-warning-medium inline-flex items-center justify-center h-8 w-8">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
  </div>
  <div class="mt-2 mb-4">
    Upload your invoice in one of the supported formats <span class="font-medium">(PDF, JPG, PNG)</span> with a maximum file size of <span class="font-medium">5MB</span>. Ensure that all relevant details are visible for verification.
  </div>
    <div class="flex items-center space-x-3">
        <button type="button" class="inline-flex items-center text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            Upload invoice
        </button>
        <button type="button" data-dismiss-target="#toast-warning" class="inline-flex items-center text-fg-warning-subtle bg-transparent box-border border border-warning hover:bg-warning-strong hover:border-warning-strong hover:text-white focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            Remind me later
        </button>
    </div>
</div>

{{< /example >}}

## Positioning

Use the `fixed` class from Tailwind CSS to position these toast components relative to the main content wrapper element from your document:

-   Top left: `fixed top-5 left-5`
-   Top right: `fixed top-5 right-5`
-   Bottom left: `fixed bottom-5 left-5`
-   Bottom right: `fixed bottom-5 right-5`

{{< example github="components/toast.md" class="relative h-56" show_dark=true >}}

<div id="toast-top-left" class="fixed flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default top-5 start-5" role="alert">
    <div class="text-sm font-normal">Top left positioning.</div>
</div>
<div id="toast-top-right" class="fixed flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default top-5 end-5" role="alert">
    <div class="text-sm font-normal">Top right positioning.</div>
</div>
<div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default end-5 bottom-5" role="alert">
    <div class="text-sm font-normal">Bottom right positioning.</div>
</div>
<div id="toast-bottom-left" class="fixed flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default bottom-5 start-5" role="alert">
    <div class="text-sm font-normal">Bottom left positioning.</div>
</div>
{{< /example >}}

You can set your own distance for the `top-*|right-*|bottom-*|left-*` positioning classes.

## JavaScript behaviour

Please check out the <a href="{{< ref "components/alerts" >}}#javascript-behaviour">Dismiss object</a> documentation to learn how to programmatically work with the toast component directly from JavaScript.

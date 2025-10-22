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

{{< example id="default-toast-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <svg class="w-6 h-6 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/></svg>
    <div class="ms-2.5 text-sm border-s border-default ps-3.5">Set yourself free.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>

{{< /example >}}

## Colors

Use these contextual toast components to show success, danger, or warning alert messages to your users.

{{< example id="toast-colors-example" class="flex flex-col items-center space-y-4" github="components/toast.md" show_dark=true >}}

<div id="toast-success" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-success bg-success-soft rounded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-success" aria-label="Close">
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
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-danger" aria-label="Close">
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
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-warning" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>

{{< /example >}}

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

{{< example id="toast-simple-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-simple" class="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <svg class="w-5 h-5 text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/></svg>
    <div class="ms-2.5 text-sm border-s border-default ps-3.5">Message sent successfully.</div>
    <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-simple" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>
{{< /example >}}

## Undo button

Use this toast component to also show an "undo" button to reverse the action of the user.

{{< example id="toast-undo-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-undo" class="flex items-center w-full max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="text-sm font-normal">
       Conversation archived.
    </div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <a class="text-sm font-medium text-fg-brand hover:underline" href="#">Undo</a>
        <button type="button" class="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-undo" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>
</div>

{{< /example >}}

## Toast message

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

{{< example id="toast-message-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

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
        <button type="button" class="absolute top-2 end-2 ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>
</div>
{{< /example >}}

## Push notification

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

{{< example id="toast-push-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-notification" class="w-full space-y-4 max-w-xs p-3 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="flex items-center bg-tertiary py-2 px-2.5 rounded">
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
        <button type="button" data-dismiss-target="#toast-notification" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Close</button>
        <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
            <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"/></svg>
            Reply
        </button> 
    </div>
</div>

{{< /example >}}

## Interactive toast

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

{{< example id="toast-interactive-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

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
                <button type="button" data-dismiss-target="#toast-interactive" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Not now</button>
                <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                    <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>
                    Update
                </button> 
            </div>    
        </div>
    </div>
</div>

{{< /example >}}

## With illustration (New)

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

{{< example id="toast-interactive-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-illustration" class="w-full space-y-4 max-w-xs p-3 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="flex items-start">
        <svg class="w-32 h-auto" aria-hidden="true" width="533" height="651" viewBox="0 0 533 651" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M533 266.5C533 413.684 413.684 533 266.5 533C119.316 533 0 413.684 0 266.5C0 119.316 119.316 0 266.5 0C413.684 0 533 119.316 533 266.5Z" fill="url(#paint0_linear_344_2435)"/>
            <path d="M86 616C86 612.686 88.6863 610 92 610H440C443.314 610 446 612.686 446 616V644C446 647.314 443.314 650 440 650H92C88.6863 650 86 647.314 86 644V616Z" fill="#c8d8fa"/>
            <path d="M86 616C86 612.686 88.6863 610 92 610H440C443.314 610 446 612.686 446 616V644C446 647.314 443.314 650 440 650H92C88.6863 650 86 647.314 86 644V616Z" fill="url(#paint1_linear_344_2435)"/>
            <path d="M130 122.871C130 98.6417 149.642 79 173.871 79H358.129C382.358 79 402 98.6417 402 122.871V606.548C402 630.778 382.358 650.419 358.129 650.419H173.871C149.642 650.419 130 630.778 130 606.548V122.871Z" fill="#d6e2fb"/>
            <path d="M130 122.871C130 98.6417 149.642 79 173.871 79H358.129C382.358 79 402 98.6417 402 122.871V606.548C402 630.778 382.358 650.419 358.129 650.419H173.871C149.642 650.419 130 630.778 130 606.548V122.871Z" fill="url(#paint2_linear_344_2435)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M358.129 89.9677H173.871C155.699 89.9677 140.968 104.699 140.968 122.871V606.548C140.968 624.72 155.699 639.452 173.871 639.452H358.129C376.301 639.452 391.032 624.72 391.032 606.548V122.871C391.032 104.699 376.301 89.9677 358.129 89.9677ZM173.871 79C149.642 79 130 98.6417 130 122.871V606.548C130 630.778 149.642 650.419 173.871 650.419H358.129C382.358 650.419 402 630.778 402 606.548V122.871C402 98.6417 382.358 79 358.129 79H173.871Z" fill="#d6e2fb"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M358.129 89.9677H173.871C155.699 89.9677 140.968 104.699 140.968 122.871V606.548C140.968 624.72 155.699 639.452 173.871 639.452H358.129C376.301 639.452 391.032 624.72 391.032 606.548V122.871C391.032 104.699 376.301 89.9677 358.129 89.9677ZM173.871 79C149.642 79 130 98.6417 130 122.871V606.548C130 630.778 149.642 650.419 173.871 650.419H358.129C382.358 650.419 402 630.778 402 606.548V122.871C402 98.6417 382.358 79 358.129 79H173.871Z" fill="url(#paint3_linear_344_2435)"/>
            <path d="M232 108.613C232 104.373 235.437 100.936 239.677 100.936H293.419C297.659 100.936 301.097 104.373 301.097 108.613C301.097 112.853 297.659 116.29 293.419 116.29H239.677C235.437 116.29 232 112.853 232 108.613Z" fill="#c8d8fa"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M230 624C230 622.895 230.895 622 232 622H301C302.105 622 303 622.895 303 624C303 625.105 302.105 626 301 626H232C230.895 626 230 625.105 230 624Z" fill="#9ab7f6"/>
            <path d="M95 467C95 464.791 96.7909 463 99 463H185C187.209 463 189 464.791 189 467V553C189 555.209 187.209 557 185 557H99C96.7909 557 95 555.209 95 553V467Z" fill="#9ab7f6"/>
            <path d="M109 514.455C109 513.351 109.895 512.455 111 512.455H126.416C127.52 512.455 128.416 513.351 128.416 514.455V530.715C128.416 531.819 127.52 532.715 126.416 532.715H111C109.895 532.715 109 531.819 109 530.715V514.455Z" fill="#F9FAFB"/>
            <path d="M131.793 500.948C131.793 499.844 132.688 498.948 133.793 498.948H149.209C150.313 498.948 151.209 499.844 151.209 500.948V530.715C151.209 531.819 150.313 532.715 149.209 532.715H133.793C132.688 532.715 131.793 531.819 131.793 530.715V500.948Z" fill="#F9FAFB"/>
            <path d="M154.584 488.286C154.584 487.182 155.479 486.286 156.584 486.286H172C173.104 486.286 174 487.182 174 488.286V530.715C174 531.819 173.104 532.715 172 532.715H156.584C155.479 532.715 154.584 531.819 154.584 530.715V488.286Z" fill="#F9FAFB"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.345 185C73.9216 185 71.957 186.965 71.957 189.388V274.954C71.957 277.378 73.9216 279.342 76.345 279.342H103.77V292.702C103.77 294.355 105.529 295.414 106.991 294.641L135.888 279.342H306.715C309.139 279.342 311.104 277.378 311.104 274.954V189.388C311.104 186.965 309.139 185 306.715 185H76.345Z" fill="#c8d8fa"/>
            <path d="M101.878 211.708C113.032 211.708 122.074 220.75 122.074 231.904C122.074 243.059 113.032 252.101 101.878 252.101C90.7236 252.101 81.6813 243.059 81.6813 231.904C81.6813 220.75 90.7236 211.708 101.878 211.708Z" fill="#F9FAFB" stroke="#F9FAFB" stroke-width="2"/>
            <path d="M96.2287 229.647C96.2287 232.765 98.7567 235.293 101.875 235.293C104.994 235.293 107.521 232.765 107.521 229.647C107.521 226.528 104.994 224 101.875 224C98.7567 224 96.2287 226.528 96.2287 229.647Z" fill="#c8d8fa"/>
            <mask id="mask0_344_2435" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="82" y="212" width="40" height="40">
            <path d="M121.074 231.907C121.074 221.305 112.48 212.71 101.878 212.71C91.2759 212.71 82.6813 221.305 82.6813 231.907C82.6813 242.509 91.2759 251.103 101.878 251.103C112.48 251.103 121.074 242.509 121.074 231.907Z" fill="#F2E0CF"/>
            </mask>
            <g mask="url(#mask0_344_2435)">
            <path d="M87.1993 252.232C87.1993 260.34 93.7716 266.912 101.879 266.912C109.986 266.912 116.559 260.34 116.559 252.232C116.559 244.125 109.986 237.553 101.879 237.553C93.7716 237.553 87.1993 244.125 87.1993 252.232Z" fill="#c8d8fa"/>
            </g>
            <path d="M131.195 232.194C131.195 230.982 132.178 230 133.389 230H248.805C250.017 230 250.999 230.982 250.999 232.194C250.999 233.406 250.017 234.388 248.805 234.388H133.389C132.178 234.388 131.195 233.406 131.195 232.194Z" fill="#F9FAFB"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M455.655 301.282C458.078 301.282 460.043 303.247 460.043 305.67V391.236C460.043 393.66 458.078 395.624 455.655 395.624H428.23V408.984C428.23 410.637 426.471 411.697 425.009 410.923L396.112 395.624H225.285C222.861 395.624 220.896 393.66 220.896 391.236V305.67C220.896 303.247 222.861 301.282 225.285 301.282H455.655Z" fill="#c8d8fa"/>
            <path d="M429.878 327.708C441.032 327.708 450.074 336.75 450.074 347.904C450.074 359.059 441.032 368.101 429.878 368.101C418.724 368.101 409.681 359.059 409.681 347.904C409.681 336.75 418.724 327.708 429.878 327.708Z" fill="#F9FAFB" stroke="#F9FAFB" stroke-width="2"/>
            <path d="M424.229 345.647C424.229 348.765 426.757 351.293 429.875 351.293C432.994 351.293 435.521 348.765 435.521 345.647C435.521 342.528 432.994 340 429.875 340C426.757 340 424.229 342.528 424.229 345.647Z" fill="#c8d8fa"/>
            <mask id="mask1_344_2435" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="410" y="328" width="40" height="40">
            <path d="M449.074 347.907C449.074 337.305 440.48 328.71 429.878 328.71C419.276 328.71 410.681 337.305 410.681 347.907C410.681 358.509 419.276 367.103 429.878 367.103C440.48 367.103 449.074 358.509 449.074 347.907Z" fill="#F2E0CF"/>
            </mask>
            <g mask="url(#mask1_344_2435)">
            <path d="M415.199 368.232C415.199 376.34 421.772 382.912 429.879 382.912C437.986 382.912 444.559 376.34 444.559 368.232C444.559 360.125 437.986 353.553 429.879 353.553C421.772 353.553 415.199 360.125 415.199 368.232Z" fill="#c8d8fa"/>
            </g>
            <path d="M400.805 341.871C400.805 340.659 399.822 339.677 398.611 339.677H266.97C265.759 339.677 264.776 340.659 264.776 341.871C264.776 343.083 265.759 344.065 266.97 344.065H398.611C399.822 344.065 400.805 343.083 400.805 341.871Z" fill="#F9FAFB"/>
            <path d="M400.805 353.938C400.805 352.726 399.822 351.744 398.611 351.744H329.5C328.288 351.744 327.306 352.726 327.306 353.938C327.306 355.15 328.288 356.132 329.5 356.132H398.611C399.822 356.132 400.805 355.15 400.805 353.938Z" fill="#F9FAFB"/>
            <path d="M211 467C211 464.791 212.791 463 215 463H301C303.209 463 305 464.791 305 467V553C305 555.209 303.209 557 301 557H215C212.791 557 211 555.209 211 553V467Z" fill="#9ab7f6"/>
            <path d="M286.286 517.213C290.546 501.315 281.111 484.973 265.212 480.713C249.314 476.453 232.972 485.888 228.712 501.787C224.452 517.685 233.887 534.027 249.786 538.287C265.684 542.547 282.026 533.112 286.286 517.213Z" fill="#F9FAFB"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M270.673 516.463L270.673 516.464C270.757 516.714 270.841 516.96 270.929 517.207C271.662 519.277 272.444 519.919 273.624 520.886L273.633 520.894C274.164 521.328 274.826 521.874 275.682 522.715C277.711 524.718 277.299 526.255 276.396 529.625L276.294 530.007C275.912 531.433 275.437 532.648 274.926 533.677C270.824 536.63 265.995 538.53 260.893 539.116C261.94 536.551 261.727 533.808 261.599 532.815C261.124 529.135 260.893 525.796 256.113 520.21C254.74 518.605 255.524 517.75 256.551 515.351L256.802 514.77L257.044 514.221C257.862 512.424 261.599 512.452 265.749 512.197C270.125 511.927 269.918 514.208 270.673 516.463ZM241.561 484.318C248.35 480.023 256.843 478.47 265.213 480.713C268.993 481.726 272.408 483.422 275.36 485.632C272.989 486.448 271.666 485.632 268.456 486.757C268.291 486.889 268.73 486.395 268.456 486.757C266.258 487.528 265.695 492.353 263.907 492.106C263.293 492.021 262.512 491.757 261.683 491.477L261.662 491.47C259.42 490.711 256.352 489.675 254.63 492.107C253.537 493.648 253.587 498.016 253.587 501.222C253.587 503.066 252.969 505.152 252.532 505.892C251.957 506.863 250.379 506.919 250.053 506.592C249.753 506.295 250.053 503.917 249.578 502.938C248.783 501.297 248.786 499.028 247.066 498.016C246.461 497.661 245.785 497.32 245.127 496.987L245.059 496.952C243.156 495.992 241.001 494.902 240.772 493.633C240.606 492.705 240.911 491.57 241.234 490.371L241.235 490.369C241.643 488.847 242.104 487.127 241.803 485.254C241.749 484.92 241.667 484.608 241.561 484.318Z" fill="#c8d8fa"/>
            <path d="M333 189C333 186.791 334.791 185 337 185H423C425.209 185 427 186.791 427 189V275C427 277.209 425.209 279 423 279H337C334.791 279 333 277.209 333 275V189Z" fill="#9ab7f6"/>
            <path d="M344.002 215.358C344.002 213.63 345.402 212.229 347.13 212.229H411.873C413.601 212.229 415.001 213.63 415.001 215.358V248.45C415.001 250.178 413.601 251.578 411.873 251.578H347.13C345.402 251.578 344.002 250.178 344.002 248.45V215.358Z" fill="#F9FAFB"/>
            <mask id="mask2_344_2435" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="344" y="212" width="71" height="40">
            <path d="M344 215.358C344 213.631 345.401 212.23 347.128 212.23L411.871 212.23C413.599 212.23 414.999 213.631 414.999 215.358V248.451C414.999 250.178 413.599 251.579 411.871 251.579L347.128 251.579C345.401 251.579 344 250.178 344 248.451V215.358Z" fill="#E8D4C3"/>
            </mask>
            <g mask="url(#mask2_344_2435)">
            <path d="M339 208L420 208L382.082 240.055C381.36 240.666 380.445 241 379.5 241L-nan -nanL379.5 241C378.555 241 377.64 240.666 376.918 240.055L339 208Z" fill="#F9FAFB"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M339 208L376.918 240.055C377.64 240.666 378.555 241 379.5 241C380.445 241 381.36 240.666 382.082 240.055L420 208L339 208ZM344.464 210L378.209 238.528C378.57 238.833 379.027 239 379.5 239C379.973 239 380.43 238.833 380.791 238.528L414.536 210L344.464 210Z" fill="#9ab7f6"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_344_2435" x1="266.5" y1="0" x2="266.5" y2="533" gradientUnits="userSpaceOnUse">
            <stop stop-color="#d6e2fb"/>
            <stop offset="1" stop-color="#d6e2fb" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_344_2435" x1="266" y1="574" x2="266" y2="662" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9ab7f6"/>
            <stop offset="1" stop-color="#9ab7f6" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_344_2435" x1="266" y1="79" x2="266" y2="650.419" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F9FAFB"/>
            <stop offset="1" stop-color="#F9FAFB" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_344_2435" x1="332.628" y1="586" x2="332.628" y2="-255.516" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9ab7f6"/>
            <stop offset="1" stop-color="#9ab7f6" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <div class="ms-4 text-sm font-normal text-body">
            <span class="mb-1 text-base font-medium text-heading">Connect your wallet</span>
            <div class="mb-3">Connect your wallet by clicking the bottom-right blue button.</div> 
            <div class="grid grid-cols-2 gap-3">
                <button type="button" data-dismiss-target="#toast-illustration" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Not now</button>
                <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                    <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"/></svg>
                    Connect
                </button> 
            </div>    
        </div>
    </div>
</div>

{{< /example >}}

## With progress bar (New)

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

{{< example id="toast-interactive-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

<div id="toast-interactive" class="w-full space-y-4 max-w-xs p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div class="inline-flex items-center justify-center shrink-0 w-9 h-9 text-fg-brand bg-brand-softer rounded">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
        <span class="sr-only">Refresh icon</span>
    </div>
    <div class="text-sm font-normal text-body">
        <span class="mb-1 text-base font-medium text-heading">Uploading in progress</span>
        <div class="mb-4 mt-1">Please wait while your file is being uploaded. This may take a moment.</div> 
        <div class="flex items-center space-x-2 mb-4">
            <div class="w-full bg-quaternary rounded-full h-1.5">
                <div class="bg-brand h-1.5 rounded-full" style="width: 75%"></div>
            </div>
            <div class="text-xs font-medium text-heading">75%</div>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <button type="button" class="w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Cancel upload</button>
            <button type="button" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
                Go to uploads
            </button> 
        </div>    
    </div>
</div>

{{< /example >}}

## Danger (New)

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

{{< example id="toast-interactive-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

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

## Warning (New)

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

{{< example id="toast-interactive-example" class="flex justify-center" github="components/toast.md" show_dark=true >}}

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

{{< example id="toast-positioning-example" github="components/toast.md" class="relative h-56" show_dark=true >}}

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

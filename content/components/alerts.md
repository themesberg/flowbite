---
layout: docs
title: Tailwind CSS Alerts - Flowbite
description: Show contextual information to your users using alert elements based on Tailwind CSS
group: components
toc: true

previous: Accordion
previousLink: components/accordion/
next: Avatar
nextLink: components/avatar/
---

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

Flowbite also includes dismissible alerts which can be hidden by the users by clicking on the close icon.

## Default alert

Use the following examples of alert components to show messages as feedback to your users.

{{< example github="components/alerts.md" show_dark=true >}}
<div class="p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer" role="alert">
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
  <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft" role="alert">
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft" role="alert">
  <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
</div>
<div class="p-4 text-sm text-heading rounded-base bg-neutral-secondary-medium" role="alert">
  <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
</div>
{{< /example >}}

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

{{< example github="components/alerts.md" show_dark=true >}}
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Info alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Danger alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Success alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Warning alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 text-sm text-heading rounded-base bg-neutral-secondary-medium" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Dark alert!</span> Change a few things up and try submitting again.</p>
</div>
{{< /example >}}

## Bordered alerts 

Use this example to add a border accent to the alert component instead of just a plain background.

{{< example github="components/alerts.md" show_dark=true >}}
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer border border-brand-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Info alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft border border-danger-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Danger alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft border border-success-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Success alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft border border-warning-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Warning alert!</span> Change a few things up and try submitting again.</p>
</div>
<div class="flex items-start sm:items-center p-4 text-sm text-heading rounded-base bg-neutral-secondary-medium border border-default-medium" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <p><span class="font-medium me-1">Dark alert!</span> Change a few things up and try submitting again.</p>
</div>
{{< /example >}}

## Alerts with list

Use this example to show a list and a description inside an alert component.

{{< example github="components/alerts.md" show_dark=true >}}
<div class="flex p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer border border-brand-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-2 list-disc list-outside space-y-1 ps-2.5">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft border border-danger-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Danger</span>
  <div>
    <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-2 list-disc list-outside space-y-1 ps-2.5">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft border border-success-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Success</span>
  <div>
    <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-2 list-disc list-outside space-y-1 ps-2.5">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </div>
</div>
<div class="flex p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft border border-warning-subtle" role="alert">
  <svg class="w-4 h-4 me-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Success</span>
  <div>
    <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-2 list-disc list-outside space-y-1 ps-2.5">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </div>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Dismissing

Use the following alert elements that are also dismissible.

{{< example github="components/alerts.md" show_dark=true >}}
<div id="alert-1" class="flex sm:items-center p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-brand-medium hover:bg-brand-soft inline-flex items-center justify-center h-8 w-8 shrink-0 shrink-0" data-dismiss-target="#alert-1" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-2" class="flex sm:items-center p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-danger-soft text-fg-danger-strong rounded focus:ring-2 focus:ring-danger-medium p-1.5 hover:bg-danger-medium inline-flex items-center justify-center h-8 w-8 shrink-0 shrink-0" data-dismiss-target="#alert-2" aria-label="Close">
    <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-3" class="flex sm:items-center p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-success-medium p-1.5 hover:bg-success-medium inline-flex items-center justify-center h-8 w-8 shrink-0 shrink-0" data-dismiss-target="#alert-3" aria-label="Close">
    <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-4" class="flex smitems-center flex items-center p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-warning-medium p-1.5 hover:bg-warning-medium inline-flex items-center justify-center h-8 w-8 shrink-0 shrink-0" data-dismiss-target="#alert-4" aria-label="Close">
    <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-5" class="flex sm:items-center p-4 text-sm text-heading rounded-base bg-neutral-secondary-medium" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple dark alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-neutral-tertiary p-1.5 hover:bg-neutral-tertiary-medium inline-flex items-center justify-center h-8 w-8 shrink-0 shrink-0" data-dismiss-target="#alert-5" aria-label="Close">
    <span class="sr-only">Dismiss</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
{{< /example >}}

## Border accent

Use this example to add a border accent on top of the alert component for further visual distinction.

{{< example github="components/alerts.md" show_dark=true >}}
<div id="alert-border-1" class="flex sm:items-center p-4 mb-4 text-sm text-fg-brand-strong bg-brand-softer border-t-4 border-brand-subtle" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-brand-medium hover:bg-brand-soft inline-flex items-center justify-center h-8 w-8 shrink-0" data-dismiss-target="#alert-border-1" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-border-2" class="flex sm:items-center p-4 mb-4 text-sm text-fg-danger-strong bg-danger-soft border-t-4 border-danger-subtle" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-danger-soft text-fg-danger-strong rounded focus:ring-2 focus:ring-danger-medium p-1.5 hover:bg-danger-medium inline-flex items-center justify-center h-8 w-8 shrink-0" data-dismiss-target="#alert-border-2" aria-label="Close">
    <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-border-3" class="flex sm:items-center p-4 mb-4 text-sm text-fg-success-strong bg-success-soft border-t-4 border-success-subtle" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-success-medium p-1.5 hover:bg-success-medium inline-flex items-center justify-center h-8 w-8 shrink-0" data-dismiss-target="#alert-border-3" aria-label="Close">
    <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-border-4" class="flex sm:items-center p-4 mb-4 text-sm text-fg-warning bg-warning-soft border-t-4 border-warning-subtle" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple info alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-warning-medium p-1.5 hover:bg-warning-medium inline-flex items-center justify-center h-8 w-8 shrink-0" data-dismiss-target="#alert-border-4" aria-label="Close">
    <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
<div id="alert-border-5" class="flex sm:items-center p-4 text-sm text-heading bg-neutral-secondary-medium border-t-4 border-default-medium" role="alert">
  <svg class="w-4 h-4 shrink-0 mt-0.5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
  <span class="sr-only">Info</span>
  <div class="ms-2 text-sm ">
    A simple dark alert with an <a href="#" class="font-medium underline hover:no-underline">example link</a>. Give it a click if you like.
  </div>
  <button type="button" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-neutral-tertiary p-1.5 hover:bg-neutral-tertiary-medium inline-flex items-center justify-center h-8 w-8 shrink-0" data-dismiss-target="#alert-border-5" aria-label="Close">
    <span class="sr-only">Dismiss</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  </button>
</div>
{{< /example >}}

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

{{< example github="components/alerts.md" show_dark=true >}}
<div id="alert-additional-content-1" class="p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer border border-brand-subtle" role="alert">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span class="sr-only">Info</span>
      <h3 class="font-medium">This is a info alert</h3>
    </div>
    <button type="button" data-dismiss-target="#alert-additional-content-1" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-brand-medium hover:bg-brand-soft inline-flex items-center justify-center h-8 w-8 shrink-0">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
  </div>
  <div class="mt-2 mb-4">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
  <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
  View more
  </button>
</div>

<div id="alert-additional-content-2" class="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft border border-danger-subtle" role="alert">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span class="sr-only">Info</span>
      <h3 class="font-medium">This is a danger alert</h3>
    </div>
    <button type="button" data-dismiss-target="#alert-additional-content-2" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 bg-danger-soft text-fg-danger-strong rounded focus:ring-2 focus:ring-danger-medium p-1.5 hover:bg-danger-medium inline-flex items-center justify-center h-8 w-8 shrink-0">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
  </div>
  <div class="mt-2 mb-4">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <button type="button" class="inline-flex items-center text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
  <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
  View more
  </button>
</div>

<div id="alert-additional-content-3" class="p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-success-soft border border-success-subtle" role="alert">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span class="sr-only">Info</span>
      <h3 class="font-medium">This is a success alert</h3>
    </div>
    <button type="button" data-dismiss-target="#alert-additional-content-3" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 bg-success-soft text-fg-success-strong rounded focus:ring-2 focus:ring-success-medium p-1.5 hover:bg-success-medium inline-flex items-center justify-center h-8 w-8 shrink-0">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
  </div>
  <div class="mt-2 mb-4">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <button type="button" class="inline-flex items-center text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
  <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
  View more
  </button>
</div>

<div id="alert-additional-content-4" class="p-4 mb-4 text-sm text-fg-warning rounded-base bg-warning-soft border border-warning-subtle" role="alert">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span class="sr-only">Info</span>
      <h3 class="font-medium">This is a warning alert</h3>
    </div>
    <button type="button" data-dismiss-target="#alert-additional-content-4" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 bg-warning-soft text-fg-warning-strong rounded focus:ring-2 focus:ring-warning-medium p-1.5 hover:bg-warning-medium inline-flex items-center justify-center h-8 w-8 shrink-0">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
  </div>
  <div class="mt-2 mb-4">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <button type="button" class="inline-flex items-center text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
  <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
  View more
  </button>
</div>

<div id="alert-additional-content-5" class="p-4 text-sm text-heading rounded-base bg-neutral-secondary-medium border border-default-medium" role="alert">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <svg class="w-4 h-4 shrink-0 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
      <span class="sr-only">Info</span>
      <h3 class="font-medium">This is a default alert</h3>
    </div>
    <button type="button" data-dismiss-target="#alert-additional-content-5" aria-label="Close" class="ms-auto -mx-1.5 -my-1.5 rounded focus:ring-2 focus:ring-neutral-tertiary p-1.5 hover:bg-neutral-tertiary-medium inline-flex items-center justify-center h-8 w-8 shrink-0">
      <span class="sr-only">Close</span>
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
  </div>
  <div class="mt-2 mb-4">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </div>
  <button type="button" class="inline-flex items-center text-white bg-dark-soft box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">
  <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/><path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
  View more
  </button>
</div>

{{< /example >}}

## Announcement alerts

Use this alert component to make announcements with a CTA link.

{{< example github="components/alerts.md" show_dark=true >}}
<div id="alert-small-1" class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-fg-brand-strong rounded-full bg-brand-softer border border-brand-subtle" role="alert">
  <span class="bg-brand-soft text-fg-brand-strong py-0.5 px-2 rounded-full">New</span>
  <div class="ms-2 text-sm">
    Great job! You've acknowledged this <a href="#" class="font-medium underline hover:no-underline">significant</a> alert message.
  </div>
  <svg class="w-4 h-4 ms-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</div>

<div id="alert-small-2" class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-fg-danger-strong rounded-full bg-danger-soft border border-danger-subtle" role="alert">
  <span class="bg-danger-medium text-fg-danger-strong py-0.5 px-2 rounded-full">New</span>
  <div class="ms-2 text-sm">
    Great job! You've acknowledged this <a href="#" class="font-medium underline hover:no-underline">significant</a> alert message.
  </div>
  <svg class="w-4 h-4 ms-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</div>

<div id="alert-small-3" class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-fg-success-strong rounded-full bg-success-soft border border-success-subtle" role="alert">
  <span class="bg-success-medium text-fg-success-strong py-0.5 px-2 rounded-full">New</span>
  <div class="ms-2 text-sm">
    Great job! You've acknowledged this <a href="#" class="font-medium underline hover:no-underline">significant</a> alert message.
  </div>
  <svg class="w-4 h-4 ms-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</div>

<div id="alert-small-4" class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-fg-warning rounded-full bg-warning-soft border border-warning-subtle" role="alert">
  <span class="bg-warning-medium text-fg-warning py-0.5 px-2 rounded-full">New</span>
  <div class="ms-2 text-sm">
    Great job! You've acknowledged this <a href="#" class="font-medium underline hover:no-underline">significant</a> alert message.
  </div>
  <svg class="w-4 h-4 ms-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</div>

<div id="alert-small-5" class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-heading rounded-full bg-neutral-secondary-medium border border-default-medium" role="alert">
  <span class="bg-neutral-quaternary text-heading py-0.5 px-2 rounded-full">New</span>
  <div class="ms-2 text-sm">
    Great job! You've acknowledged this <a href="#" class="font-medium underline hover:no-underline">significant</a> alert message.
  </div>
  <svg class="w-4 h-4 ms-1 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
</div>
{{< /example >}}

## JavaScript behaviour

The **Dismiss** class from Flowbite can be used to create an object that will hide a target element or elements based on the parameters, options, and methods that you provide.

### Object parameters

The parameters for the Dismiss object can be used to programmatically initialize and manipulate the behaviour of the dismissal of the target element.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft">
          <tr class="text-heading text-xs font-medium uppercase">
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
                  Pass the element object that will be dismissed.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">triggerEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Pass the element object that will trigger the targetEl dismission on click.
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
                  Pass the options object to set the trigger element, transition, duration, timing classes of the dismiss animation and callback functions.
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

Use these optional options for the Dismiss object to set the transition, duration, and timing function types based on the utility classes from Tailwind CSS.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body0">
      <thead class="bg-neutral-secondary-soft">
          <tr class="text-heading text-xs font-medium uppercase">
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
      <tbody class="text-body">
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">transition</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Use one of the Transition Property utility classes from Tailwind CSS to set transition type for the main element. The default value is <code class="text-fg-brand">transition-opacity</code>.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">duration</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the duration of the dismissing animation. The default value is <code class="text-fg-brand">300</code> (300 milliseconds).
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">timing</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  String
              </td>
              <td class="px-6 py-4">
                  Set the transition timing function utility class from Tailwind CSS. The default value is <code class="text-fg-brand">ease-out</code>.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">onHide</code>
              </td>
              <td class="px-6 py-4 font-medium">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the item has been dismissed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the following methods on the Dismiss object to programmatically manipulate the behaviour.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="text-heading bg-neutral-secondary-soft">
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
                  <code class="text-fg-brand">hide()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the Dismiss object to hide the target element.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 font-medium">
                  <code class="text-fg-brand">updateOnHide(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set the callback function when the item has been dismissed.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following JavaScript example to learn how to initialize, set the options, and use the methods for the Dismiss object.

First of all, you should set the required target element and optionally set a trigger element which will dismiss the target element when clicked and other options to customize the animation.

{{< code lang="javascript" file="dismiss.js" icon="file" >}}
// target element that will be dismissed
const $targetEl = document.getElementById('targetElement');

// optional trigger element
const $triggerEl = document.getElementById('triggerElement');

// options object
const options = {
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out',

  // callback functions
  onHide: (context, targetEl) => {
    console.log('element has been dismissed')
    console.log(targetEl)
  }
};

// instance options object
const instanceOptions = {
  id: 'targetElement',
  override: true
};
{{< /code >}}

Create a new Dismiss object based on the options set above.

{{< code lang="javascript" file="dismiss.js" icon="file" >}}
import { Dismiss } from 'flowbite';

/*
* $targetEl (required)
* $triggerEl (optional)
* options (optional)
* instanceOptions (optional)
*/
const dismiss = new Dismiss($targetEl, $triggerEl, options, instanceOptions);
{{< /code >}}

You can now use the methods on the Dismiss object.

{{< code lang="javascript" >}}
// hide the target element
dismiss.hide();
{{< /code >}}

### HTML Markup

Use this HTML code for the JavaScript code example above.

{{< code lang="html" file="dismiss.html" icon="file" >}}
<button id="triggerElement" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Hide alert</button>

<div id="targetElement" class="p-4 mb-4 text-sm text-fg-brand-strong rounded-base bg-brand-softer" role="alert">
  <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the Dismiss class, parameters and its options. 

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="dismiss.ts" icon="file" >}}
import { Dismiss } from "flowbite";
import type { DismissOptions, DismissInterface } from "flowbite";
import type { InstanceOptions } from 'flowbite';

// target element that will be dismissed
const $targetEl: HTMLElement = document.getElementById('targetElement');

// optional trigger element
const $triggerEl: HTMLElement = document.getElementById('triggerElement');

// options object
const options: DismissOptions = {
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out',

  // callback functions
  onHide: (context, targetEl) => {
    console.log('element has been dismissed')
    console.log(targetEl)
  }
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'targetElement',
  override: true
};

/*
* $targetEl (required)
* $triggerEl (optional)
* options (optional)
* instanceOptions (optional)
*/
const dismiss: DismissInterface = new Dismiss($targetEl, $triggerEl, options, instanceOptions);

// programmatically hide it
dismiss.hide();
{{< /code >}}
---
layout: home
title: Tailwind CSS Badges - Flowbite
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
group: components
toc: true

previous: Avatar
previousLink: components/avatar/
next: Banner
nextLink: components/banner/
---

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a `span` element.

## Default badge

Use the following badge elements to indicate counts or labels inside or outside components.

{{< example id="Brand-badge-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="bg-brand-softer text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Brand</span>
<span class="bg-primary-soft text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Alternative</span>
<span class="bg-secondary-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Gray</span>
<span class="bg-danger-soft text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Danger</span>
<span class="bg-success-soft text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Success</span>
<span class="bg-warning-soft text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-sm">Warning</span>
{{< /example >}}

## Bordered badge

This example can be used to add a border accent to the badge component.

{{< example id="bordered-badge-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Brand</span>
<span class="bg-primary-soft border border-base text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Alternative</span>
<span class="bg-secondary-medium border border-base-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Gray</span>
<span class="bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Danger</span>
<span class="bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Success</span>
<span class="bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-sm">Warning</span>
{{< /example >}}

## Large default badges

Use the `text-sm` utility class and increase the paddings to create a larger variant of the badges.

{{< example id="badge-sizes-example" class="gap-4" github="components/badge.md" show_dark=true >}}
<span class="bg-brand-softer text-fg-brand-strong text-sm leading-none font-medium px-2 py-1 rounded-sm">Brand</span>
<span class="bg-primary-soft text-heading text-sm leading-none font-medium px-2 py-1 rounded-sm">Alternative</span>
<span class="bg-secondary-medium text-heading text-sm leading-none font-medium px-2 py-1 rounded-sm">Gray</span>
<span class="bg-danger-soft text-fg-danger-strong text-sm leading-none font-medium px-2 py-1 rounded-sm">Danger</span>
<span class="bg-success-soft text-fg-success-strong text-sm leading-none font-medium px-2 py-1 rounded-sm">Success</span>
<span class="bg-warning-soft text-fg-warning text-sm leading-none font-medium px-2 py-1 rounded-sm">Warning</span>
{{< /example >}}

## Large bordered badges (New)

Use the `text-sm` utility class and increase the paddings to create a larger variant of the badges.

{{< example id="badge-sizes-example" class="gap-4" github="components/badge.md" show_dark=true >}}
<span class="px-2 py-1 ring-1 ring-inset ring-brand-subtle text-fg-brand-strong text-sm leading-none font-medium rounded-sm bg-brand-softer">Brand</span>
<span class="px-2 py-1 ring-1 ring-inset ring-base text-heading text-sm leading-none font-medium rounded-sm bg-primary-soft">Alternative</span>
<span class="px-2 py-1 ring-1 ring-inset ring-base-medium text-heading text-sm leading-none font-medium rounded-sm bg-secondary-medium">Gray</span>
<span class="px-2 py-1 ring-1 ring-inset ring-danger-subtle text-fg-danger-strong text-sm leading-none font-medium rounded-sm bg-danger-soft">Danger</span>
<span class="px-2 py-1 ring-1 ring-inset ring-success-subtle text-fg-success-strong text-sm leading-none font-medium rounded-sm bg-success-soft">Success</span>
<span class="px-2 py-1 ring-1 ring-inset ring-warning-subtle text-fg-warning text-sm leading-none font-medium rounded-sm bg-warning-soft">Warning</span>
{{< /example >}}


## Pills badge

Use this example to make the corners even more rounded-sm like pills for the badge component.

{{< example id="pills-badge-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="bg-brand-softer text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-full">Brand</span>
<span class="bg-primary-soft text-heading text-xs font-medium px-1.5 py-0.5 rounded-fullm">Alternative</span>
<span class="bg-secondary-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-full">Gray</span>
<span class="bg-danger-soft text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-full">Danger</span>
<span class="bg-success-soft text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-full">Success</span>
<span class="bg-warning-soft text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-full">Warning</span>
{{< /example >}}

## Pills badge bordered (New)

Use this example to make the corners even more rounded-sm like pills for the badge component.

{{< example id="pills-badge-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-full">Brand</span>
<span class="bg-primary-soft border border-base text-heading text-xs font-medium px-1.5 py-0.5 rounded-full">Alternative</span>
<span class="bg-secondary-medium border border-base-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-full">Gray</span>
<span class="bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-full">Danger</span>
<span class="bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-full">Success</span>
<span class="bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-full">Warning</span>
{{< /example >}}

## Badges as links

You can also use badges as anchor elements to link to another page.

{{< example id="badge-links-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
  <a href="#" class="bg-brand-softer hover:bg-brand-soft border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Brand</a>
  <a href="#" class="bg-primary-soft hover:bg-secondary-medium border border-base text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Alternative</a>
  <a href="#" class="bg-secondary-medium hover:bg-tertiary-medium border border-base-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">Gray</a>
  <a href="#" class="bg-danger-soft hover:bg-danger-medium border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Danger</a>
  <a href="#" class="bg-success-soft hover:bg-success-medium border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">Success</a>
  <a href="#" class="bg-warning-soft hover:bg-warning-medium border border-warning-subtle text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-sm">Warning</a>
{{< /example >}}

## Badges with icon

You can also use [SVG icons](https://flowbite.com/icons/) inside the badge elements.

{{< example id="badge-icons-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
<svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-primary-soft border border-base text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
<svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
<svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
<svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
<svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-sm">
<svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins agong
</span>
{{< /example >}}

## Large badges with icon (New)

You can also use [SVG icons](https://flowbite.com/icons/) inside the badge elements.

{{< example id="badge-icons-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="inline-flex items-center leading-none bg-brand-softer border border-brand-subtle text-fg-brand-strong text-sm font-medium px-2 py-1 rounded-sm">
<svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="inline-flex items-center leading-none bg-primary-soft border border-base text-heading text-sm font-medium px-2 py-1 rounded-sm">
<svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="inline-flex items-center leading-none bg-secondary-medium border border-base-medium text-heading text-sm font-medium px-2 py-1 rounded-sm">
<svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="inline-flex items-center leading-none bg-danger-soft border border-danger-subtle text-fg-danger-strong text-sm font-medium px-2 py-1 rounded-sm">
<svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="inline-flex items-center leading-none bg-success-soft border border-success-subtle text-fg-success-strong text-sm font-medium px-2 py-1 rounded-sm">
<svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins ago
</span>
<span class="inline-flex items-center leading-none bg-warning-soft border border-warning-subtle text-fg-warning text-sm font-medium px-2 py-1 rounded-sm">
<svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
2 mins agong
</span>
{{< /example >}}

## Notification badge

Use the following example to show a badge inside of a button component.

{{< example id="badge-notification-example" class="flex justify-center" github="components/badge.md" show_dark=true >}}
<button type="button" class="relative text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm p-3 focus:outline-none">
  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
  <span class="sr-only">Notifications</span>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-danger border-2 border-buffer rounded-full -top-2 -end-2">20</div>
</button>
{{< /example >}}

## Button with badge

Use this example to add a badge inside a button component for a count indicator.

{{< example id="badge-button-example" class="flex justify-center" github="components/badge.md" show_dark=true >}}
<button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
Messages
<span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-danger rounded-full">
2
</span>
</button>
{{< /example >}}

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon.

{{< example id="badge-icon-only-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="flex items-center justify-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium h-5 w-5 rounded-full">
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-primary-soft border border-base text-heading text-xs font-medium h-5 w-5 rounded-full">
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium h-5 w-5 rounded-full">
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium h-5 w-5 rounded-full">
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium h-5 w-5 rounded-full">
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium h-5 w-5 rounded-full">
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
{{< /example >}}

## Large badge with icon only (New)

Alternatively you can also use badges which indicate only a SVG icon.

{{< example id="badge-icon-only-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="flex items-center justify-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium h-6 w-6 rounded-full">
<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-primary-soft border border-base text-heading text-xs font-medium h-6 w-6 rounded-full">
<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium h-6 w-6 rounded-full">
<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium h-6 w-6 rounded-full">
<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium h-6 w-6 rounded-full">
<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
<span class="flex items-center justify-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium h-6 w-6 rounded-full">
<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
</span>
{{< /example >}}

## Badges with dot (New)

You can also use [SVG icons](https://flowbite.com/icons/) inside the badge elements.

{{< example id="badge-icons-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
<span class="h-1.5 w-1.5 bg-fg-brand-strong rounded-full me-1"></span>
2 mins ago
</span>
<span class="flex items-center bg-primary-soft border border-base text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
<span class="h-1.5 w-1.5 bg-heading rounded-full me-1"></span>
2 mins ago
</span>
<span class="flex items-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
<span class="h-1.5 w-1.5 bg-heading rounded-full me-1"></span>
2 mins ago
</span>
<span class="flex items-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
<span class="h-1.5 w-1.5 bg-fg-danger-strong rounded-full me-1"></span>
2 mins ago
</span>
<span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
<span class="h-1.5 w-1.5 bg-fg-success-strong rounded-full me-1"></span>
2 mins ago
</span>
<span class="flex items-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-sm">
<span class="h-1.5 w-1.5 bg-fg-warning rounded-full me-1"></span>
2 mins agong
</span>
{{< /example >}}

## Badges with loader (New)

You can also use [SVG icons](https://flowbite.com/icons/) inside the badge elements.

{{< example id="badge-icons-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span class="flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
  <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-brand-soft" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/></svg>
  2 mins ago
</span>
<span class="flex items-center bg-primary-soft border border-base text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
  <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-tertiary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded-sm">
  <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-quaternary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
  <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-danger-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#C70036"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
  <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-success-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#009966"/></svg>
2 mins ago
</span>
<span class="flex items-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium px-1.5 py-0.5 rounded-sm">
  <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-warning-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#D03801"/></svg>
2 mins agong
</span>
{{< /example >}}

## Chips (dismissible badges)

Use the `data-dismiss-target` data attribute to dismiss the current badge where the value is the id of the target element using a transition animation.

{{< example id="badge-dismiss-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span id="badge-dismiss-brand" class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
Brand
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-brand-soft" data-dismiss-target="#badge-dismiss-brand" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-dismiss-alternative" class="inline-flex items-center bg-primary-soft border border-base text-heading text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
Alternative
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-tertiary" data-dismiss-target="#badge-dismiss-alternative" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-dismiss-gray" class="inline-flex items-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
Gray
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-quaternary" data-dismiss-target="#badge-dismiss-gray" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-dismiss-danger" class="inline-flex items-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
Danger
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-danger-medium" data-dismiss-target="#badge-dismiss-danger" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-dismiss-success" class="inline-flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
Success
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-success-medium" data-dismiss-target="#badge-dismiss-success" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-dismiss-warning" class="inline-flex items-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
Warning
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-warning-medium" data-dismiss-target="#badge-dismiss-warning" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>
{{< /example >}}

## Dismissible badges with avatar (New)

Use the `data-dismiss-target` data attribute to dismiss the current badge where the value is the id of the target element using a transition animation.

{{< example id="badge-dismiss-example" class="flex justify-center gap-4" github="components/badge.md" show_dark=true >}}
<span id="badge-avatar-dismiss-brand" class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
<img class="w-3.5 h-3.5 rounded-full me-1" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
Brand
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-brand-soft" data-dismiss-target="#badge-avatar-dismiss-brand" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-avatar-dismiss-alternative" class="inline-flex items-center bg-primary-soft border border-base text-heading text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
<img class="w-3.5 h-3.5 rounded-full me-1" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
Alternative
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-tertiary" data-dismiss-target="#badge-avatar-dismiss-alternative" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-avatar-dismiss-gray" class="inline-flex items-center bg-secondary-medium border border-base-medium text-heading text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
<img class="w-3.5 h-3.5 rounded-full me-1" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
Gray
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-quaternary" data-dismiss-target="#badge-avatar-dismiss-gray" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-avatar-dismiss-danger" class="inline-flex items-center bg-danger-soft border border-danger-subtle text-fg-danger-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
<img class="w-3.5 h-3.5 rounded-full me-1" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
Danger
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-danger-medium" data-dismiss-target="#badge-avatar-dismiss-danger" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-avatar-dismiss-success" class="inline-flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
<img class="w-3.5 h-3.5 rounded-full me-1" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
Success
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-success-medium" data-dismiss-target="#badge-avatar-dismiss-success" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>

<span id="badge-avatar-dismiss-warning" class="inline-flex items-center bg-warning-soft border border-warning-subtle text-fg-warning text-xs font-medium ps-1.5 pe-0.5 py-0.5 rounded-sm">
<img class="w-3.5 h-3.5 rounded-full me-1" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
Warning
<button type="button" class="ms-0.5 inline-flex items-center p-0.5 text-sm bg-transparent rounded-xs hover:bg-warning-medium" data-dismiss-target="#badge-avatar-dismiss-warning" aria-label="Remove">
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
  <span class="sr-only">Remove badge</span>
</button>
</span>
{{< /example >}}

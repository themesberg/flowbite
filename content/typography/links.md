---
layout: docs
title: Tailwind CSS Links - Flowbite
description: The link component can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card
group: typography
toc: true

previous: Lists
previousLink: typography/lists/
next: Text
nextLink: typography/text/
---

Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons, cards, inside paragraphs, and more.

Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning user.

## Default link

Use this example to set default styles to an inline link element.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="font-medium text-fg-brand hover:underline">Read more</a>
{{< /example >}}

## Button

This example can be used to set a hyperlink on a button component.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Read more</a>
{{< /example >}}

## Paragraph

Use this example to set a link inside a paragraph with an underline style.

{{< example github="typography/links.md" show_dark=true >}}
<p class="text-body">The free updates that will be provided is based on the <a href="#" class="font-medium text-fg-brand underline hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
{{< /example >}}

## Icon link

This example can be used to set a custom [SVG icon](https://flowbite.com/icons/) inside the hyperlink element.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<p class="text-body">500,000 people & companies have made over a million apps with Glide. <a href="#" class="inline-flex items-center font-medium text-fg-brand hover:underline">
Read their stories
<svg class="w-5 h-5 ms-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
</a></p>

{{< /example >}}

## CTA link

Use this example to set a hyperlink on a CTA element with text and a custom icon.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium border border-default hover:border-default-medium text-body rounded-base bg-neutral-secondary-soft hover:text-heading hover:bg-neutral-tertiary">
    <svg aria-hidden="true" class="w-5 h-5 me-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83"/><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF"/><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E"/><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262"/><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE"/></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)"/></clipPath></defs></svg>                                              
    <span class="w-full">Get started with our  Figma Design System</span>
    <svg class="w-6 h-6 ms-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
</a> 
{{< /example >}}

## Card link

Use this example to set a hyperlink on a card component.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
    <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
    <p class="text-body">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
{{< /example >}}

## Image link

This example can be used to set a hyperlink on an image inside a card component.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<div class="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
    <a href="#">
        <img class="rounded-t-base" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-6 text-center">
        <span class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
            <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/></svg>
            Trending
        </span>
        <a href="#">
            <h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Streamlining your design process with Flowbite.</h5>
        </a>
        <a href="#" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Read more
            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
        </a>
    </div>
</div>
{{< /example >}}

## Card inner link

Use this example to show a highlighted link inside a card component.

{{< example class="flex justify-center" github="typography/links.md" show_dark=true >}}
<div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <svg class="w-7 h-7 mb-3 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"/></svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 text-body">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex font-medium items-center text-fg-brand hover:underline">
        See our guideline
        <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
    </a>
</div>
{{< /example >}}
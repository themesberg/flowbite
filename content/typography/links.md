---
layout: home
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

{{< example id="default-link-example" class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
{{< /example >}}

## Button

This example can be used to set a hyperlink on a button component.

{{< example id="link-button-example" class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more</a>
{{< /example >}}

## Paragraph

Use this example to set a link inside a paragraph with an underline style.

{{< example id="paragraph-link-example" github="typography/links.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">The free updates that will be provided is based on the <a href="#" class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
{{< /example >}}

## Icon link

This example can be used to set a custom [SVG icon](https://flowbite.com/icons/) inside the hyperlink element.

{{< example id="link-icon-example" class="flex justify-center" github="typography/links.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">500,000 people & companies have made over a million apps with Glide. <a href="#" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
Read their stories
<svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</a></p>

{{< /example >}}

## CTA link

Use this example to set a hyperlink on a CTA element with text and a custom icon.

{{< example id="link-cta-example" class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg aria-hidden="true" class="w-5 h-5 mr-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83"/><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF"/><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E"/><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262"/><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE"/></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)"/></clipPath></defs></svg>                                              
    <span class="w-full">Get started with our  Figma Design System</span>
    <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a> 
{{< /example >}}

## Card link

Use this example to set a hyperlink on a card component.

{{< example id="link-card-example" class="flex justify-center" github="typography/links.md" show_dark=true >}}
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
{{< /example >}}

## Image link

This example can be used to set a hyperlink on an image inside a card component.

{{< example id="link-image-example" class="flex justify-center" github="typography/links.md" show_dark=true >}}
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
{{< /example >}}

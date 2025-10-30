---
layout: docs
title: Tailwind CSS Mega Menu - Flowbite
description: Use the mega menu component as a full-width dropdown inside the navbar to show a list of menu items based on multiple sizes, variants, and styles.
group: components
toc: true
requires_js: true

previous: List group
previousLink: components/list-group/
next: Modal
nextLink: components/modal/
---

The mega menu component is a full-width dropdown that can be triggered by clicking on the menu item and it shows a list of links that you can use to navigate through the pages on a website.

Make sure that you have included the Flowbite JavaScript file inside your project to enable the interactivity of the hamburger icon on mobile devices and the dropdown functionality.

## Default mega menu

Use this example to show a list of links aligned on three columns inside the mega menu dropdown.

{{< example bodyClass="!p-0" github="components/mega-menu.md" show_dark=true iframeHeight="300" >}}

<nav class="bg-neutral-primary border-default">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">Flowbite</span>
        </a>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a href="#" class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Login</a>
            <a href="#" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Sign Up</a>
            <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
            </button>
        </div>
        <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                        Company 
                        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                    </button>
                    <div id="mega-menu-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-neutral-primary-soft border border-default rounded-base shadow md:grid-cols-3">
                        <div class="p-4 pb-0 text-heading md:pb-4">
                            <ul class="space-y-3" aria-labelledby="mega-menu-dropdown-button">
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4 pb-0 md:pb-4">
                            <ul class="space-y-3">
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4">
                            <ul class="space-y-3">
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-body hover:text-fg-brand">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Team</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
{{< /example >}}

## Mega menu with icons

This example of a mega menu dropdown can be used to also show an icon near the text of the link.

{{< example bodyClass="!p-0" github="components/mega-menu.md" show_dark=true iframeHeight="300" >}}

<nav class="bg-neutral-primary border-default">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">Flowbite</span>
        </a>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a href="#" class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Login</a>
            <a href="#" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Sign Up</a>
            <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-icons" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
            </button>
        </div>
        <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                        Company 
                        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                    </button>
                    <div id="mega-menu-icons-dropdown" class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-neutral-primary-soft border border-default rounded-base shadow md:grid-cols-3">
                        <div class="p-4 pb-0 text-heading md:pb-4">
                            <ul class="space-y-3 font-normal" aria-labelledby="mega-menu-icons-dropdown-button">
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/></svg>
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11H4m15.5 5a.5.5 0 0 0 .5-.5V8a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44l-1.436-2.12a1 1 0 0 0-.828-.44H8a1 1 0 0 0-1 1M4 9v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3.75a1 1 0 0 1-.829-.44L9.985 8.44A1 1 0 0 0 9.157 8H5a1 1 0 0 0-1 1Z"/></svg>
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"/></svg>
                                        Pro Version
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4 pb-0 md:pb-4">
                            <ul class="space-y-3 font-normal">
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/></svg>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/></svg>
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4.07141 14v6h5.99999v-6H4.07141Zm4.5-4h6.99999l-3.5-6-3.49999 6Zm7.99999 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z"/></svg>
                                        Playground
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z"/></svg>
                                        License
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="p-4">
                            <ul class="space-y-3 font-normal">
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/></svg>
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                                        Support Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="inline-flex items-center text-body hover:text-fg-brand">
                                        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z"/></svg>
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Team</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
{{< /example >}}

## Full width dropdown

Use this example to show a mega menu dropdown that spans the entire width of the document page.

{{< example bodyClass="!p-0" github="components/mega-menu.md" show_dark=true iframeHeight="440" >}}

<nav class="bg-neutral-primary-soft border-default">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">Flowbite</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-full" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                        Company 
                        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                    </button>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" class="mt-1 bg-neutral-primary-soft border-default shadow-xs border-y">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-heading sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul class="hidden md:block">
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Audience Management</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Creative Tools</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Marketing Automation</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
{{< /example >}}

## Full width with CTA

This example can be used to also show a CTA button or link next to the menu items inside the dropdown.

{{< example bodyClass="!p-0" github="components/mega-menu.md" show_dark=true iframeHeight="360" >}}

<nav class="bg-neutral-primary-soft border-default">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">Flowbite</span>
        </a>
        <button data-collapse-toggle="mega-menu-full-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-full-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div id="mega-menu-full-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-cta-dropdown-button" data-collapse-toggle="mega-menu-full-cta-dropdown" data-dropdown-placement="bottom" class="flex items-center justify-between w-full py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft hover:text-fg-brand md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                        Company
                        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                    </button>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-cta-dropdown" class="mt-1 bg-neutral-primary-soft border-default shadow-xs border-y">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-body md:grid-cols-3 md:px-6">
            <ul class="space-y-3 sm:mb-4 md:mb-0" aria-labelledby="mega-menu-full-cta-button">
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul class="hidden mb-4 space-y-3 md:mb-0 sm:block">
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Resources
                    </a>
                </li>
            </ul>
            <div class="mt-4 md:mt-0">
                <h2 class="mb-2.5 font-semibold text-heading">Our brands</h2>
                <p class="mb-2.5 text-body">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                <a href="#" class="inline-flex items-center text-sm font-medium text-fg-brand hover:underline">
                    Explore our brands 
                    <span class="sr-only">Explore our brands </span>
                    <svg class="w-4 h-4 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
        </div>
    </div>
</nav>
{{< /example >}}

## Full width with image

This example can be used to also show a CTA with a backdround image inside the dropdown next to the other menu items and links.

{{< example bodyClass="!p-0" github="components/mega-menu.md" show_dark=true iframeHeight="360" >}}

<nav class="bg-neutral-primary-soft border-default">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">Flowbite</span>
        </a>
        <button data-collapse-toggle="mega-menu-full-image" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-full-image" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-cta-image-button" data-collapse-toggle="mega-menu-full-image-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft hover:text-fg-brand md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                        Company 
                        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                    </button>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-image-dropdown" class="mt-1 bg-neutral-primary-soft border-default shadow-xs border-y">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-body md:grid-cols-3 md:px-6">
            <ul class="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0">
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-fg-brand">
                        Resources
                    </a>
                </li>
            </ul>
            <a href="#" class="p-8 bg-local bg-dark bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply" style="background-image: url(/docs/images/dashboard-overview.png)">
                <p class="max-w-xl mb-5 font-medium leading-tight tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
                <button type="button" class="inline-flex items-center px-3 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-dark focus:ring-4 focus:outline-none">
                    Get started
                    <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </button>
            </a>
        </div>
    </div>
</nav>
{{< /example >}}

## More examples

You can check out more mega menu examples on the [header components](https://flowbite.com/blocks/marketing/header/) page from Flowbite Blocks.

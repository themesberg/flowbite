---
layout: docs
title: Tailwind CSS Jumbotron - Flowbite
description: Use the jumbotron component to show a marketing message to your users based on a headline and image inside of a card box based on Tailwind CSS
group: components
toc: true

previous: Indicators
previousLink: components/indicators/
next: KBD (Keyboard)
nextLink: components/kbd/
---

The Jumbotron (hero) component can be used as the first section of your website with a focus on a marketing message to increase the likelihood of the user to continue browsing your website.

This UI component features a heading title, a short description, an optional CTA button, background image, gradient or solid background color and it's generally inside of a card element.

The jumbotron component from Flowbite is responsive on all devices, natively supports dark mode and is coded with the utility classes from Tailwind CSS.

## Default jumbotron

Use this default example to show a title, description, and two CTA buttons for the jumbotron component.

{{< example bodyClass="p-0" github="components/jumbotron.md" show_dark=true >}}

<section class="bg-neutral-primary">
    <div class="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16">
        <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-base font-normal text-body md:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
            <button type="button" class="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
                Getting started
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </button>
            <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Learn more</button>
        </div>
    </div>
</section>
{{< /example >}}

## Background image

Use this jumbotron to apply a background image with a darkening opacity effect to improve readability.

{{< example bodyClass="!p-0" github="components/jumbotron.md" show_dark=true >}}

<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-dark bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-base font-normal text-white md:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
            <button type="button" class="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
                Getting started
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </button>
            <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Learn more</button>
        </div>
    </div>
</section>
{{< /example >}}

## Featured video

This component can be used to feature a video together with a heading title, description, and CTA buttons.

{{< example bodyClass="!p-0" github="components/jumbotron.md" show_dark=true >}}

<section class="bg-neutral-primary">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
            <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p class="mb-8 text-base font-normal text-body md:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 md:space-x-4">
                <button type="button" class="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
                    Getting started
                    <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </button>
                <button type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Learn more</button>
            </div>
        </div>
        <div>
            <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-base sm:h-96 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</section>
{{< /example >}}

## Authentication form

Use this component to show a sign in or register form as the first section of your website.

{{< example bodyClass="!p-0 bg-gray-50 dark:bg-gray-900" github="components/jumbotron.md" show_dark=true >}}

<section class="bg-neutral-primary">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
            <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p class="mb-8 text-base font-normal text-body md:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <a href="#" class="text-fg-brand hover:underline font-medium text-lg inline-flex items-center">Read more about our app 
            <svg class="w-6 h-6 rtl:rotate-180 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </a>
        </div>
        <div>
            <div class="w-full bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
                <form action="#">
                    <h5 class="text-xl font-semibold text-heading mb-6">Sign in to our platform</h5>
                    <div class="mb-4">
                        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                        <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                    </div>
                    <div class="flex items-start my-6">
                        <div class="flex items-center">
                            <input id="checkbox-remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                            <label for="checkbox-remember" class="ms-2 text-sm font-medium text-heading">Remember me</label>
                        </div>
                        <a href="#" class="ms-auto text-sm font-medium text-fg-brand hover:underline">Lost Password?</a>
                    </div>
                    <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3">Login to your account</button>
                    <div class="text-sm font-medium text-body">Not registered? <a href="#" class="text-fg-brand hover:underline">Create account</a></div>
                </form>
            </div>
        </div>
    </div>
</section>
{{< /example >}}

## Gradient background

Use this component to show a hero pattern with a linear gradient layout as an overlay for added effects.

{{< example bodyClass="!p-0" github="components/jumbotron.md" show_dark=true >}}

<section class="bg-neutral-primary bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <div class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-fg-brand-strong rounded-full bg-brand-softer border border-brand-subtle" role="alert">
            <span class="bg-brand-soft text-fg-brand-strong py-0.5 px-2 rounded-full">New</span>
            <div class="ms-2 text-sm">
                Great job! You've acknowledged this <a href="#" class="font-medium underline hover:no-underline">significant</a> alert message.
            </div>
            <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
        </div>
        <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-base font-normal text-body md:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <form class="max-w-md mx-auto">   
            <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                </div>
                <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
            </div>
        </form>
    </div>
    <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
</section>
{{< /example >}}

## Jumbotron with cards

This example can be used to show cards with headings, descriptions, and CTA buttons inside a grid layout.

{{< example bodyClass="!p-0" github="components/jumbotron.md" show_dark=true >}}

<section class="bg-neutral-primary">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div class="bg-neutral-secondary-soft border border-default rounded-base p-8 md:p-12 mb-8">
            <span class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/></svg>
                Tutorial
            </span>
            <h1 class="text-heading tracking-tighter text-3xl md:text-5xl font-bold my-6">How to quickly deploy <br>a static website</h1>
            <p class="md:text-lg font-normal text-body mb-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence web designers.</p>
            <button type="button" class="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none">
                Getting started
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
            </button>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-neutral-secondary-soft border border-default rounded-base p-8 md:p-12">
                <span class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                    <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/></svg>
                    Design
                </span>
                <h2 class="text-heading text-3xl font-semobild my-4">Start with Flowbite Design System</h2>
                <p class=" font-normal text-body mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                <a href="#" class="text-fg-brand hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-6 h-6 rtl:rotate-180 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
            <div class="bg-neutral-secondary-soft border border-default rounded-base p-8 md:p-12">
                <span class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                    <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/></svg>
                    Code
                </span>
                <h2 class="text-heading text-3xl font-semobild my-4">Best react libraries around the web</h2>
                <p class=" font-normal text-body mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                <a href="#" class="text-fg-brand hover:underline font-medium text-lg inline-flex items-center">Read more
                    <svg class="w-6 h-6 rtl:rotate-180 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>
{{< /example >}}

## More examples

For more jumbotron examples you can check out the [hero sections](https://flowbite.com/blocks/marketing/hero/) from Flowbite Blocks.

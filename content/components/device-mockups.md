---
layout: docs
title: Tailwind CSS Device Mockups - Flowbite
description: Use the device mockups component to add content and screenshot previews of your application inside phone and tablet frames coded with Tailwind CSS and Flowbite
group: components
toc: true

previous: Datepicker
previousLink: components/datepicker/
next: Drawer
nextLink: components/drawer/
---

The device mockup component can be used to feature a preview and screenshot of your application as if you would already use it on a mobile phone and it's a great use case for hero and CTA sections.

This component is built using only the utility classes from Tailwind CSS and has built-in dark mode support so it's easy to customize, it loads very fast and integrates perfectly with Tailwind CSS and Flowbite.

You can choose from multiple examples of mockups including phone, tablet, laptop, and even desktop devices with iOS or Android support.

## Default mockup

Use this example to show a standard phone mockup based on Tailwind CSS and add your app screenshot inside of it with dark mode support included.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div class="h-[32px] w-[3px] bg-base absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-base absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-neutral-primary ">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
    </div>
</div>
{{< /example >}}

## iPhone 12 mockup (iOS)

Use this example to clearly show that the preview of your application is being used on an iPhone with iOS.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div class="w-[148px] h-[18px] bg-base top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-base absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-neutral-primary ">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
    </div>
</div>
{{< /example >}}

## Google Pixel (Android)

Use this alternative phone mockup example if you want to feature previews for android gadgets.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
    <div class="w-[148px] h-[18px] bg-base top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div class="h-[32px] w-[3px] bg-base absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-base absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-xl overflow-hidden w-[272px] h-[572px] bg-neutral-primary ">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
    </div>
</div>
{{< /example >}}

## Tablet mockup

This component can be used to show an application preview inside of a responsive tablet mockup.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
    <div class="h-[32px] w-[3px] bg-base absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-base absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-neutral-primary ">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt="">
    </div>
</div>
{{< /example >}}

## Laptop mockup

This example can be used to show a screenshot of your application inside a laptop mockup.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-neutral-primary ">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt="">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="">
    </div>
</div>
<div class="relative mx-auto bg-base rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
    <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-base"></div>
</div>
{{< /example >}}

## Desktop mockup

Use this example to show a preview of your application inside a desktop device such as an iMac.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
    <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="">
    </div>
</div>
<div class="relative mx-auto bg-base rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
<div class="relative mx-auto bg-base rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
{{< /example >}}

## Smartwatch mockup

This component can be used to showcase applications built for smartwatches.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto bg-base rounded-t-[2.5rem] h-[63px] max-w-[133px]"></div>
<div class="relative mx-auto bg-base border-default border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
    <div class="h-[41px] w-[6px] bg-base absolute -end-[16px] top-[40px] rounded-e-lg"></div>
    <div class="h-[32px] w-[6px] bg-base absolute -end-[16px] top-[88px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" class="dark:hidden h-[193px] w-[188px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" class="hidden dark:block h-[193px] w-[188px]" alt="">
    </div>
</div>
<div class="relative mx-auto bg-base rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
{{< /example >}}

## Mockup colors

You can easily update the color of the mockup by changing the background color with Tailwind CSS.

{{< example github="components/device-mockups.md" show_dark=true >}}
<div class="relative mx-auto border-default bg-base dark:bg-base border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div class="h-[32px] w-[3px] bg-base absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-base absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-base absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-neutral-primary ">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
    </div>
</div>
{{< /example >}}
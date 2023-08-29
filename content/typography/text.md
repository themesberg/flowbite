---
layout: home
title: Tailwind CSS Text - Flowbite
description: Learn how to customize text-related styles and properties such as font size, font style, text decoration, font weight and more using Tailwind CSS classes
group: typography
toc: true

previous: Links
previousLink: typography/links/
next: Horizontal line (HR)
nextLink: typography/hr/
---

Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements using Tailwind CSS.

## Font size

Use this example to set the font size of inline text elements using the `text-{size}` class.

{{< example id="font-size-example" class="flex items-center space-x-4" github="typography/text.md" show_dark=true >}}
<p class="text-xs text-gray-900 dark:text-white">Aa</p>
<p class="text-sm text-gray-900 dark:text-white">Aa</p>
<p class="text-base text-gray-900 dark:text-white">Aa</p>
<p class="text-lg text-gray-900 dark:text-white">Aa</p>
<p class="text-xl text-gray-900 dark:text-white">Aa</p>
<p class="text-2xl text-gray-900 dark:text-white">Aa</p>
<p class="text-3xl text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl text-gray-900 dark:text-white">Aa</p>
<p class="text-5xl text-gray-900 dark:text-white">Aa</p>
<p class="text-6xl text-gray-900 dark:text-white">Aa</p>
<p class="text-gray-900 text-7xl dark:text-white">Aa</p>
<p class="text-gray-900 text-8xl dark:text-white">Aa</p>
<p class="text-gray-900 text-9xl dark:text-white">Aa</p>
{{< /example >}}

## Font weight

This example can be used to the font weight of an inline text element using the `font-{size}` class.

{{< example id="font-weight-example" class="flex items-center space-x-8" github="typography/text.md" show_dark=true >}}
<p class="text-4xl font-thin text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl text-gray-900 font-extralight dark:text-white">Aa</p>
<p class="text-4xl text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl font-normal text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl font-medium text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl font-semibold text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl font-bold text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl font-extrabold text-gray-900 dark:text-white">Aa</p>
<p class="text-4xl font-black text-gray-900 dark:text-white">Aa</p>
{{< /example >}}

## Text color

Use the `text-{color}` classes from Tailwind CSS to set the color of the inline text.

{{< example id="text-color-example" class="space-y-2" github="typography/text.md" show_dark=true >}}
<p class="text-blue-600">This text is in the blue color.</p>
<p class="text-green-500">This text is in the green color.</p>
<p class="text-red-600">This text is in the red color.</p>
<p class="text-purple-600">This text is in the purple color.</p>
<p class="text-teal-600">This text is in the teal color.</p>
{{< /example >}}

## Letter spacing

Increase or decrease the spacing between letters using the `tracking-{type}` class.

{{< example id="letter-spacing-example" class="space-y-3" github="typography/text.md" show_dark=true >}}
<p class="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-tight text-gray-500 md:text-lg dark:text-gray-400">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-normal text-gray-500 md:text-lg dark:text-gray-400">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-wide text-gray-500 md:text-lg dark:text-gray-400">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-wider text-gray-500 md:text-lg dark:text-gray-400">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-widest text-gray-500 md:text-lg dark:text-gray-400">Flowbite app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

## Text Decoration

Set decoration for the inline text elements such as underline, line through or uppercase using classes from Tailwind CSS.

### Underline

Underline text by using the `underline` class or disable it using `no-underline`.

{{< example id="text-underline-example" github="typography/text.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">Link issues across Jira</a> and ingest data from other <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">software development<a> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-green-500">requests</a>, <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-red-500">incidents</a>, and <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-sky-500">changes</a>.</p>
{{< /example >}}

### Line through

Set a strikethrough line on a text element using the `line-through` class.

{{< example id="text-line-through-example" github="typography/text.md" show_dark=true >}}
<span class="text-lg font-medium text-gray-900 line-through dark:text-white">$109</span><span class="ml-3 text-lg font-medium">$79</span>
{{< /example >}}

### Uppercase

Force uppercase characters for a given portion of text using the `uppercase` class.

{{< example id="text-uppercase-example" github="typography/text.md" show_dark=true >}}
<p class="text-lg font-medium text-gray-900 dark:text-white">The crypto <span class="uppercase">identity</span> primitive.</p>
{{< /example >}}

## Font style

Set italic or non italic styles with the utility classes from Tailwind CSS.

### Italic

Use the `italic` class from Tailwind CSS to set italic font style to a text element.

{{< example id="text-italic-example" github="typography/text.md" show_dark=true >}}
<p class="text-lg font-medium text-gray-900 dark:text-white">The crypto <span class="italic">identity</span> primitive.</p>
{{< /example >}}

### Normal

Text elements by default are non-italic.

{{< example id="text-normal-example" github="typography/text.md" show_dark=true >}}
<p class="text-lg font-medium text-gray-900 dark:text-white">The crypto identity primitive.</p>
{{< /example >}}

## Line Height

Set the height between lines using the `leading-{type}` classes from Tailwind CSS.

### Leading normal

Use the `leading-normal` class to set default line height.

{{< example id="font-leading-normal-example" github="typography/text.md" show_dark=true >}}
<p class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">The Al-powered app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

### Leading relaxed

Use the `leading-relaxed` class to increase the space between lines.

{{< example id="leading-relaxed-example" github="typography/text.md" show_dark=true >}}
<p class="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white">The Al-powered app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

### Leading loose

Use the `leading-loose` class to set a large amount of space between text lines.

{{< example id="leading-loose-example" github="typography/text.md" show_dark=true >}}
<p class="max-w-lg text-3xl font-semibold leading-loose text-gray-900 dark:text-white">The Al-powered app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

## Text Align

Use the following examples to align the text content to the left, center, or right side of the page.

### Left

Use the `text-left` class to align the text to the left side of the page.

{{< example id="text-left-example" github="typography/text.md" show_dark=true >}}
<p class="text-left text-gray-500 dark:text-gray-400">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

### Center

Use the `text-center` class to align the text content to the center of the page.

{{< example id="text-center-example" github="typography/text.md" show_dark=true >}}
<p class="text-center text-gray-500 dark:text-gray-400">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

### Right

Use the `text-right` class to align the text element to the right side of the page.

{{< example id="text-right-example" github="typography/text.md" show_dark=true >}}
<p class="text-right text-gray-500 dark:text-gray-400">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

### Text justify

Use the `text-justify` class to justify the text content.

{{< example id="text-justify-example" github="typography/text.md" show_dark=true >}}
<p class="text-justify text-gray-500 dark:text-gray-400">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

## Whitespace

Configure the whitespace behaviour of inline text elements using classes from Tailwind CSS.

### Normal

Use the `whitespace-normal` class to set the default whitespace behaviour.

{{< example id="whitespace-normal-example" github="typography/text.md" show_dark=true >}}
<p class="text-gray-500 whitespace-normal dark:text-gray-400">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
<p>
{{< /example >}}

### Nowrap

Use the `whitespace-nowrap` class to prevent text being added to a new line when the full width has been reached.

{{< example id="whitespace-nowrap-example" github="typography/text.md" show_dark=true >}}
<p class="text-gray-500 whitespace-nowrap dark:text-gray-400">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
<p>
{{< /example >}}

### Pre line

Use the `whitespace-pre-line` class to add whitespace exactly how it has been set from the source code.

{{< example id="whitespace-preline-example" github="typography/text.md" show_dark=true >}}
<p class="text-gray-500 whitespace-pre-line dark:text-gray-400">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
<p>
{{< /example >}}

## Text Decoration Style

Update the text decoration style using the `decoration-{*}` classes from Tailwind CSS.

{{< example id="text-decoration-style-example" github="typography/text.md" show_dark=true >}}
<p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500">Link issues across Jira</a> and ingest data from other <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double">software development<a> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-green-500 decoration-dotted">requests</a>, <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-red-500 decoration-dashed">incidents</a>, and <a href="#" class="font-semibold text-gray-900 underline dark:text-white decoration-sky-500 decoration-wavy">changes</a>.</p>
{{< /example >}}

## Opacity

Use the `text-{color}-{opacity}` class from Tailwind CSS to set the opacity of inline text elements.

{{< example id="text-opacity-example" class="space-y-3" github="typography/text.md" show_dark=true >}}
<p class="text-xl font-semibold text-blue-600/100 dark:text-blue-500/100">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="text-xl font-semibold text-blue-600/75 dark:text-blue-500/75">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="text-xl font-semibold text-blue-600/50 dark:text-blue-500/50">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="text-xl font-semibold text-blue-600/25 dark:text-blue-500/25">Flowbite app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

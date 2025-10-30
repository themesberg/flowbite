---
layout: docs
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

{{< example class="flex items-center space-x-4 rtl:space-x-reverse" github="typography/text.md" show_dark=true >}}
<p class="text-xs text-heading">Aa</p>
<p class="text-sm text-heading">Aa</p>
<p class="text-base text-heading">Aa</p>
<p class="text-lg text-heading">Aa</p>
<p class="text-xl text-heading">Aa</p>
<p class="text-2xl text-heading">Aa</p>
<p class="text-3xl text-heading">Aa</p>
<p class="text-4xl text-heading">Aa</p>
<p class="text-5xl text-heading">Aa</p>
<p class="text-6xl text-heading">Aa</p>
<p class="text-7xl text-heading">Aa</p>
<p class="text-8xl text-heading">Aa</p>
<p class="text-9xl text-heading">Aa</p>
{{< /example >}}

## Font weight

This example can be used to the font weight of an inline text element using the `font-{size}` class.

{{< example class="flex items-center space-x-8 rtl:space-x-reverse" github="typography/text.md" show_dark=true >}}
<p class="text-4xl font-thin text-heading">Aa</p>
<p class="text-4xl font-extralight text-heading">Aa</p>
<p class="text-4xl text-heading">Aa</p>
<p class="text-4xl font-normal text-heading">Aa</p>
<p class="text-4xl font-medium text-heading">Aa</p>
<p class="text-4xl font-semibold text-heading">Aa</p>
<p class="text-4xl font-bold text-heading">Aa</p>
<p class="text-4xl font-extrabold text-heading">Aa</p>
<p class="text-4xl font-black text-heading">Aa</p>
{{< /example >}}

## Text color

Use the `text-{color}` classes from Tailwind CSS to set the color of the inline text.

{{< example class="space-y-2" github="typography/text.md" show_dark=true >}}
<p class="text-fg-brand">This text is in the brand color.</p>
<p class="text-success">This text is in the green color.</p>
<p class="text-danger">This text is in the red color.</p>
<p class="text-purple">This text is in the purple color.</p>
<p class="text-teal">This text is in the teal color.</p>
{{< /example >}}

## Letter spacing

Increase or decrease the spacing between letters using the `tracking-{type}` class.

{{< example class="space-y-3" github="typography/text.md" show_dark=true >}}
<p class="tracking-tighter text-body md:text-lg">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-tight text-body md:text-lg">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-normal text-body md:text-lg">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-wide text-body md:text-lg">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-wider text-body md:text-lg">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="tracking-widest text-body md:text-lg">Flowbite app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

## Text Decoration

Set decoration for the inline text elements such as underline, line through or uppercase using classes from Tailwind CSS.

### Underline

Underline text by using the `underline` class or disable it using `no-underline`.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-body">Track work across the enterprise through an open, collaborative platform. <a href="#" class="font-semibold text-heading underline decoration-indigo">Link issues across Jira</a> and ingest data from other <a href="#" class="font-semibold text-heading underline decoration-brand">software development<a> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <a href="#" class="font-semibold text-heading underline decoration-success">requests</a>, <a href="#" class="font-semibold text-heading underline decoration-danger">incidents</a>, and <a href="#" class="font-semibold text-heading underline decoration-sky">changes</a>.</p>
{{< /example >}}

### Line through

Set a strikethrough line on a text element using the `line-through` class.

{{< example github="typography/text.md" show_dark=true >}}
<span class="text-lg font-medium text-heading line-through">$109</span><span class="ms-3 text-lg font-medium text-heading">$79</span>
{{< /example >}}

### Uppercase

Force uppercase characters for a given portion of text using the `uppercase` class.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-lg font-medium text-heading">The crypto <span class="uppercase">identity</span> primitive.</p>
{{< /example >}}

## Font style

Set italic or non italic styles with the utility classes from Tailwind CSS.

### Italic

Use the `italic` class from Tailwind CSS to set italic font style to a text element.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-lg font-medium text-heading">The crypto <span class="italic">identity</span> primitive.</p>
{{< /example >}}

### Normal

Text elements by default are non-italic.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-lg font-medium text-heading">The crypto identity primitive.</p>
{{< /example >}}

## Line Height

Set the height between lines using the `leading-{type}` classes from Tailwind CSS.

### Leading normal

Use the `leading-normal` class to set default line height.

{{< example github="typography/text.md" show_dark=true >}}
<p class="max-w-lg text-3xl font-semibold leading-normal text-heading">The Al-powered app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

### Leading relaxed

Use the `leading-relaxed` class to increase the space between lines.

{{< example github="typography/text.md" show_dark=true >}}
<p class="max-w-lg text-3xl font-semibold leading-relaxed text-heading">The Al-powered app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

### Leading loose

Use the `leading-loose` class to set a large amount of space between text lines.

{{< example github="typography/text.md" show_dark=true >}}
<p class="max-w-lg text-3xl font-semibold leading-loose text-heading">The Al-powered app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

## Text Align

Use the following examples to align the text content to the left, center, or right side of the page.

### Left

Use the `text-left` class to align the text to the left side of the page.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-left rtl:text-right text-body">Get started with an enterprise-level, professionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

### Center

Use the `text-center` class to align the text content to the center of the page.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-center text-body">Get started with an enterprise-level, professionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

### Right

Use the `text-right` class to align the text element to the right side of the page.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-right rtl:text-left text-body">Get started with an enterprise-level, professionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

### Text justify

Use the `text-justify` class to justify the text content.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-justify text-body">Get started with an enterprise-level, professionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</p>
{{< /example >}}

## Whitespace

Configure the whitespace behaviour of inline text elements using classes from Tailwind CSS.

### Normal

Use the `whitespace-normal` class to set the default whitespace behaviour.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-body whitespace-normal">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
<p>
{{< /example >}}

### Nowrap

Use the `whitespace-nowrap` class to prevent text being added to a new line when the full width has been reached.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-body whitespace-nowrap">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
<p>
{{< /example >}}

### Pre line

Use the `whitespace-pre-line` class to add whitespace exactly how it has been set from the source code.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-body whitespace-pre-line">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
<p>
{{< /example >}}

## Text Decoration Style

Update the text decoration style using the `decoration-{*}` classes from Tailwind CSS.

{{< example github="typography/text.md" show_dark=true >}}
<p class="text-body">Track work across the enterprise through an open, collaborative platform. <a href="#" class="font-semibold text-heading underline decoration-indigo">Link issues across Jira</a> and ingest data from other <a href="#" class="font-semibold text-heading underline decoration-brand decoration-double">software development<a> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <a href="#" class="font-semibold text-heading underline decoration-success decoration-dotted">requests</a>, <a href="#" class="font-semibold text-heading underline decoration-danger decoration-dashed">incidents</a>, and <a href="#" class="font-semibold text-heading underline decoration-sky decoration-wavy">changes</a>.</p>
{{< /example >}}

## Opacity

Use the `text-{color}-{opacity}` class from Tailwind CSS to set the opacity of inline text elements.

{{< example class="space-y-3" github="typography/text.md" show_dark=true >}}
<p class="text-xl font-semibold text-fg-brand/100">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="text-xl font-semibold text-fg-brand/75">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="text-xl font-semibold text-fg-brand/50">Flowbite app will help you improve yourself by analysing your everyday life.</p>
<p class="text-xl font-semibold text-fg-brand/25">Flowbite app will help you improve yourself by analysing your everyday life.</p>
{{< /example >}}

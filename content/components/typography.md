---
layout: home
title: Tailwind CSS Typography - Flowbite
description: Use the typography and the utility classes from Tailwind CSS to style text with FlowBite
group: components
toc: true

previous: List group
previousLink: components/list-group/
next: Modals
nextLink: components/modal/
---

The typography for FlowBite is completely based on the utility classes from Tailwind CSS.

We have listed some of the commonly used typography classes that we use throughout the FlowBite UI, however, you can also check out all of the utility classes on the [Tailwind CSS documentation](https://tailwindcss.com/docs/font-family) directly.

## Font Size

Use the following `text-{size}` utility classes from Tailwind to set the font size for any text element.

{{< example github="components/typography.md" >}}
<p class="text-xs dark:text-white">Flowbite</p>
<p class="text-sm dark:text-white">FlowBite</p>
<p class="text-base dark:text-white">FlowBite</p>
<p class="text-lg dark:text-white">FlowBite</p>
<p class="text-xl dark:text-white">FlowBite</p>
<p class="text-2xl dark:text-white">FlowBite</p>
<p class="text-3xl dark:text-white">FlowBite</p>
<p class="text-4xl dark:text-white">FlowBite</p>
<p class="text-5xl dark:text-white">FlowBite</p>
<p class="text-6xl dark:text-white">FlowBite</p>
<p class="text-7xl dark:text-white">FlowBite</p>
<p class="text-8xl dark:text-white">FlowBite</p>
<p class="text-9xl dark:text-white">FlowBite</p>
{{< /example >}}

## Font Weight

Use the following `font-{weight}` utility classes to set the font weight for any text element.

{{< preview github="components/typography.md" >}}
<p class="text-4xl font-thin dark:text-white">FlowBite</p>
<p class="text-4xl font-extralight dark:text-white">FlowBite</p>
<p class="text-4xl font-light dark:text-white">FlowBite</p>
<p class="text-4xl font-normal dark:text-white">FlowBite</p>
<p class="text-4xl font-medium dark:text-white">FlowBite</p>
<p class="text-4xl font-semibold dark:text-white">FlowBite</p>
<p class="text-4xl font-bold dark:text-white">FlowBite</p>
<p class="text-4xl font-extrabold dark:text-white">FlowBite</p>
<p class="text-4xl font-black dark:text-white">FlowBite</p>
{{< /preview >}}

```html
<p class="font-thin dark:text-white">FlowBite</p>
<p class="font-extralight dark:text-white">FlowBite</p>
<p class="font-light dark:text-white">FlowBite</p>
<p class="font-normal dark:text-white">FlowBite</p>
<p class="font-medium dark:text-white">FlowBite</p>
<p class="font-semibold dark:text-white">FlowBite</p>
<p class="font-bold dark:text-white">FlowBite</p>
<p class="font-extrabold dark:text-white">FlowBite</p>
<p class="font-black dark:text-white">FlowBite</p>
```

## Line Height

Use the following `leading-{type}` utility classes to set the line height for any text element.

{{< preview github="components/typography.md" >}}
<span class="font-normal text-blue-700 dark:text-blue-500">.leading-none</span>
<p class="mb-4 leading-none text-gray-700 dark:text-gray-400">Themesberg was created to bring quality code and templates together. They use unique and new design trends created solely by their team and innovate the process of developers by their products.</p>
<span class="font-normal text-blue-700 dark:text-blue-500">.leading-tight</span>
<p class="mb-4 leading-tight text-gray-700 dark:text-gray-400">Themesberg was created to bring quality code and templates together. They use unique and new design trends created solely by their team and innovate the process of developers by their products.</p>
<span class="font-normal text-blue-700 dark:text-blue-500">.leading-snug</span>
<p class="mb-4 leading-snug text-gray-700 dark:text-gray-400">Themesberg was created to bring quality code and templates together. They use unique and new design trends created solely by their team and innovate the process of developers by their products.</p>
<span class="font-normal text-blue-700 dark:text-blue-500">.leading-normal</span>
<p class="mb-4 leading-normal text-gray-700 dark:text-gray-400">Themesberg was created to bring quality code and templates together. They use unique and new design trends created solely by their team and innovate the process of developers by their products.</p>
<span class="font-normal text-blue-700 dark:text-blue-500">.leading-relaxed</span>
<p class="mb-4 leading-relaxed text-gray-700 dark:text-gray-400">Themesberg was created to bring quality code and templates together. They use unique and new design trends created solely by their team and innovate the process of developers by their products.</p>
<span class="font-normal text-blue-700 dark:text-blue-500">.leading-loose</span>
<p class="mb-4 leading-loose text-gray-700 dark:text-gray-400">Themesberg was created to bring quality code and templates together. They use unique and new design trends created solely by their team and innovate the process of developers by their products.</p>
{{< /preview >}}

```html
<p class="leading-none dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-tight dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-snug dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-normal dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-relaxed dark:text-gray-400">Themesberg was created to bring quality ...</p>
<p class="leading-loose dark:text-gray-400">Themesberg was created to bring quality ...</p>
```

## Lists

Use the following code to create list items with ordered and unordered lists.

{{< preview github="components/typography.md" >}}
<span class="font-normal text-blue-700 dark:text-blue-500">.list-disc</span>
<ul class="pl-4 mb-6 list-disc text-gray-700 dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>

<span class="font-normal text-blue-700 dark:text-blue-500">.list-decimal</span>
<ol class="pl-4 mb-6 list-decimal text-gray-700 dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ol>

<span class="font-normal text-blue-700 dark:text-blue-500">.list-default</span>
<ul class="text-gray-700 dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>
{{< /preview >}}

```html
<ul class="list-disc dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>

<ol class="list-decimal dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ol>

<ul class=" dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>
```

## List position

Use the `list-inside` and `list-outside` classes to set the list item position inside a list component.

{{< preview github="components/typography.md" >}}
<span class="font-normal text-blue-700 dark:text-blue-500">.list-inside</span>
<ul class="mt-2 mb-6 list-disc list-inside text-green-700 bg-green-100 rounded-lg dark:bg-gray-700 dark:text-green-500">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>
<span class="font-normal text-blue-700 dark:text-blue-500">.list-outside</span>
<ul class="mt-2 list-disc list-outside text-green-700 bg-green-100 rounded-lg dark:bg-gray-700 dark:text-green-500">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>
{{< /preview >}}

```html
<ul class="list-disc list-inside dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>

<ul class="list-disc list-outside dark:text-gray-400">
    <li>Design</li>
    <li>Develop</li>
    <li>Test</li>
</ul>
```

## Text Decoration

You can use the following classes to set the text decoration for any inline text element.

{{< preview github="components/typography.md" >}}
<span class="font-normal text-blue-700 dark:text-blue-500">.underline</span>
<p class="mt-2 mb-4 underline dark:text-gray-400">please read our terms and services</p>
<span class="font-normal text-blue-700 dark:text-blue-500">.line-through</span>
<p class="mt-2 mb-4 line-through dark:text-gray-400">please read our terms and services</p>
{{< /preview >}}

```html
<p class="underline dark:text-gray-400">please read our terms and services</p>
<p class="line-through dark:text-gray-400">please read our terms and services</p>
```
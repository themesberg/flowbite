---
layout: home
title: Tailwind CSS Typography - Flowbite
description: Use the typography plugin from Flowbite to apply styles to all inline elements like headings, paragraphs, lists, and images using a single format class
group: components
toc: true

previous: Tooltips
previousLink: components/tooltips/
next: Video
nextLink: components/video/
---

Get started with the [Flowbite Typography](https://github.com/themesberg/flowbite-typography) plugin forked from the official [Tailwind CSS Typography](https://tailwindcss.com/docs/typography-plugin) plugin to set a custom `format` class to a wrapper element to apply styles to all inline child elements such as headings, paragraphs, images, lists, and more and apply font sizes, font weights, colors, and spacings.

You can check out this [live demo](https://flowbite.com/plugins/typography/) to see how content inside an article will render like.

## Getting started

Make sure that you have both [Node.js](https://nodejs.org/) and [Tailwind CSS](https://tailwindcss.com/) already installed in your project.

1. Install the Flowbite Typography plugin via NPM:

```bash
npm i -D flowbite-typography
```

2. Require the plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
}
```

## Basic usage

Once you have installed the plugin inside your project you can add the `format` class to a wrapper element and use any type of inline elements such as headings, paragraphs, images, lists, captions, links, and tables.

All of these elements will be automatically styled with proper spacing, font sizing, font weight, colors, and more based on recommended UI/UX readability and accessibility standards.

```html
<article class="format lg:format-lg">
    <h1>Prototyping from A to Z: best practices for successful prototypes</h1>
    <p class="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
    <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
    
    ...

    <h2>When does design come in handy?</h2>
    <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
    <ol>
        <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
        <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
        <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
        <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
    </ol>
</article>
```

You can also set the `lg:format-lg` class to set increase font sizes and spacings for larger viewport devices.

## Link colors

You can update the default blue link color to anything you'd like by setting the `format-{color}` class:

```html
<article class="format lg:format-lg format-red">
    <h1>Prototyping from A to Z: best practices for successful prototypes</h1>
    <p class="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
    <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
</article>
```
## Dark mode

Enable dark mode for the typography by using the `dark:format-invert` class on the article wrapper element:

```html
<article class="format lg:format-lg dark:format-invert">
    <h1>The content inside this article will invert when switching to dark mode</h1>
    <p class="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
    <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
    
    ...

    <h2>When does design come in handy?</h2>
    <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
    <ol>
        <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
        <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
        <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
        <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
    </ol>
</article>
```

## Max width

Override the default maximum width by setting a custom `max-w-{size}` class next to the `format` class:

```html
<article class="max-w-none format lg:format-lg format-red">
    <h1>Prototyping from A to Z: best practices for successful prototypes</h1>
    <p class="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
    <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
</article>
```

## Disable format

If you want to disable formatting inside the typography content you can use the `not-format` class:

```html
<article class="format lg:format-lg dark:format-invert">
    <h1>The content inside this article will invert when switching to dark mode</h1>
    <p class="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
    <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
    <p>But then I found a <a href="#">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
    
    ...

    <!-- content that won't have styles applied -->
    <div class="not-format">
        <h2>When does design come in handy?</h2>
        <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
        <ol>
            <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
            <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
            <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
            <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
        </ol>
    </div>
</article>
```

## Options

Extend the plugin's options inside the Tailwind configuration file to set your own colors, class name, and more.

### Custom colors

You can set your own colors by extending the typography plugin inside the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        orange: {
          css: {
            '--tw-prose-body': theme('colors.orange[500]'),
            '--tw-prose-headings': theme('colors.orange[900]'),
            '--tw-prose-lead': theme('colors.orange[500]'),
            '--tw-prose-links': theme('colors.orange[600]'),
            '--tw-prose-bold': theme('colors.orange[900]'),
            '--tw-prose-counters': theme('colors.orange[500]'),
            '--tw-prose-bullets': theme('colors.orange[500]'),
            '--tw-prose-hr': theme('colors.orange[200]'),
            '--tw-prose-quotes': theme('colors.orange[900]'),
            '--tw-prose-quote-borders': theme('colors.orange[300]'),
            '--tw-prose-captions': theme('colors.orange[700]'),
            '--tw-prose-code': theme('colors.orange[900]'),
            '--tw-prose-code-bg': theme('colors.orange[50]'),
            '--tw-prose-pre-code': theme('colors.orange[100]'),
            '--tw-prose-pre-bg': theme('colors.orange[900]'),
            '--tw-prose-th-borders': theme('colors.orange[300]'),
            '--tw-prose-td-borders': theme('colors.orange[200]'),
            '--tw-format-th-bg': theme('colors.orange[50]'),
            '--tw-prose-invert-body': theme('colors.orange[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.orange[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.orange[400]'),
            '--tw-prose-invert-bullets': theme('colors.orange[600]'),
            '--tw-prose-invert-hr': theme('colors.orange[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.orange[700]'),
            '--tw-prose-invert-captions': theme('colors.orange[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.orange[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.orange[600]'),
            '--tw-prose-invert-td-borders': theme('colors.orange[700]'),
            '--tw-format-invert-th-bg': theme('colors.orange[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
}
```

Now you can use the `format-red` class and apply these styles.

### Wrapper class

Change the default `format` class to your own choosing by updating the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('flowbite-typography')({
      className: 'custom-class',
    }),
  ]
  ...
}
```

### Custom CSS

You can also customize the default CSS by extending the `css` key value pair from the Tailwind configuration file:

```javascript
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#666',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
}
```

## Blog templates

You can check out the following [blog template](https://flowbite.com/blocks/publisher/blog-templates/) layouts from Flowbite Blocks that use the Typography plugin.
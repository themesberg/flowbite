---
layout: home
title: Quickstart
description: Quickly get started with including Flowbite into your project and start developing
group: getting-started
toc: true

previous: Introduction
previousLink: getting-started/introduction
next: Build tools
nextLink: getting-started/build-tools
---

FlowBite is an open-source project and you there are multiple ways that you can include it into your project.

We recommend setting up your project using the [build tools]({{< ref "getting-started/build-tools" >}}) guide to be able to build for production.

## Include via CDN

The quickest way to get started working with FlowBite is to simply include the CSS and JavaScript into your project via CDN.

Require the following minified stylesheet inside the `head` tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.min.css" />
```

And include the following javascript file before the end of the `body` element:

```html
<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
```

**Important:** This is *not the recommended way* of working with FlowBite because you won't be able to purge the unnecessary CSS. Check out the [build tools]({{< ref "getting-started/build-tools" >}}) to properly set up FlowBite for development and production code.

## Require via NPM

You can also require FlowBite as a dependency using NPM by running the following command:

```bash
npm i @themesberg/flowbite
```

## Github repository

The source files are also available to be cloned or downloaded from the official <a href="https://github.com/themesberg/flowbite" target="_blank">FlowBite Github repository</a>. Don't forget to give it a star if you appreciate the project.

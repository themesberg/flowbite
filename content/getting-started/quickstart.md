---
layout: home
title: Quickstart
description: Quickly get started with including Flowbite into your project and start developing
group: getting-started
toc: true
---

FlowBite is an open-source project and you there are multiple ways that you can include it into your project.

We recommend setting up your project using the [build tools]({{< ref "getting-started/build-tools" >}}) guide to be able to build for production.

## Include via CDN

The quickest way to get started working with FlowBite is to simply include the CSS and JavaScript into your project via CDN.

Require the following stylesheet stylesheet inside the `head` tag:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css" />
```

And include the following javascript file before the end of the `body` element:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.js"></script>
```

**Important:** This is *not the recommended way* of working with FlowBite because you won't be able to purge the unnecessary CSS. Check out the [build tools]({{< ref "getting-started/build-tools" >}}) to properly set up FlowBite for development and production code.

## Require via NPM

You can also require FlowBite as a dependency using NPM by running the following command:

```bash
npm install flowbite
```

## Download as a zip

If you want to directly download the source and dist files of the FlowBite project you can do so by [creating an account for free on FlowBite](https://flowbite.design/) and download the project files from there.

## Clone it from Github

The source files are also available to be cloned or downloaded from the official [Github repository](https://github.com). Don't forget to give it a star if you appreciate the project.
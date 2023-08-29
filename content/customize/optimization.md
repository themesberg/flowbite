---
layout: home
title: Tailwind CSS Optimization - Flowbite
description: Optimize for production by using Purge CSS and remove unused CSS using the Tailwind configuration file
group: customize
toc: true

previous: Icons
previousLink: customize/icons/
next: Accordion
nextLink: components/accordion/
---

The default development build of FlowBite and Tailwind CSS is roughly 3566.2kB uncompressed, 289.2kB when minified and compressed with Gzip, and 71.3kB when compressed with Brotli.

If you have worked with Tailwind CSS previously, you should already know that you should **use Purge CSS to remove the unused CSS** which was helpful to you when developing.

## Remove unused CSS

First of all, you need to set the type of files that you want to be searched for when purging the CSS.

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {},
  plugins: [],
}
```

The `purge` object should include **all of the files that have classes**, including JavaScript, Markdown, and HTML files.

After that, make sure that you set `NODE_ENV` to `production`.

The command that you have to run in your terminal for production build would be:

```javascript
NODE_ENV=production npx tailwindcss -o flowbite.css
```

Learn more about how to optimize your code for production by reading the official <a href="https://tailwindcss.com/docs/optimizing-for-production">Tailwind CSS guide</a>.
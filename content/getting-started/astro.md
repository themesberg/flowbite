---
layout: home
title: Tailwind CSS Astro - FlowBite
description: Learn how to install Astro with Tailwind CSS and FlowBite and start building modern websites with the fast, content-focused web framework
group: getting-started
toc: true
requires_astro: true

previous: Laravel
previousLink: getting-started/laravel/
next: Svelte
nextLink: getting-started/svelte/
---

[Astro](https://astro.build/) is an all-in-one web framework for building fast, content-focused websites.

## Requirements

Make sure that you have <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> installed locally on your computer.

Follow the next steps to install Tailwind CSS and FlowBite with Astro. 

## Create a new project

1. Create a new project using Astro's CLI:

```bash
npm init astro
```

2. Select the default template and install the dependencies:

```bash
cd awesome-project
```

## Install Tailwind CSS

3. Install Tailwind CSS using Astro's build-in CLI:

```bash
npm run astro add tailwind
```

## Install Flowbite

4. Install FlowBite using NPM:

```bash
npm install -D flowbite
```

5. Require the FlowBite in tailwind.config.js 

```javascript
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }
``` 

## Flowbite components

## Astro starter project
---
layout: docs
title: Tailwind CSS Optimization - Flowbite
description: Optimize your project for production use by setting up Flowbite and Tailwind CSS using our guide
group: customize
toc: true

previous: Icons
previousLink: customize/icons/
next: Accordion
nextLink: components/accordion/
---

The default JavaScript development build of Flowbite and Tailwind CSS is roughly 310kB uncompressed, 136kB when minified via CDN.

Although working with the CDN can be quick and effective, it is not the most efficient way of working with Tailwind CSS and Flowbite. You should definitely check our [quickstart guide](https://flowbite.com/docs/getting-started/quickstart/) and set up Tailwind CSS in your local environment so that the only the CSS being used in your templates will be added to the final CSS file.

## Remove unused CSS

Since Tailwind v4 you no longer need to set the content paths for your templating files.

However, you might want to set custom sources for where the engine should look for utility classes.

{{< code lang="css" file="main.css" icon="file" >}}
@import "tailwindcss";

@source "../node_modules/flowbite";
{{< /code >}}

## Build for production

When building your CSS, make sure that you set `NODE_ENV` to `production`.

The command that you have to run in your terminal for production build would be:

{{< code lang="bash"  >}}
NODE_ENV=production npx @tailwindcss/cli -i input.css -o output.css
{{< /code >}}

This command will create an `output.css` file that you will include in your templating files.
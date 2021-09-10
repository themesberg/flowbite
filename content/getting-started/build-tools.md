---
layout: home
title: Build tools
description: Follow the steps below to configure, develop and build with FlowBite and Tailwind CSS
group: getting-started
toc: true

previous: Quickstart
previousLink: getting-started/quickstart
next: License
nextLink: getting-started/license
---

FlowBite is a collection of UI elements based on Tailwind CSS and uses a custom configuration file to extend the default utilities. This means that developing with FlowBite is almost the same as working with Tailwind CSS.

## Installation

Follow these steps to configure, develop and build with FlowBite and Tailwind CSS:

1. Make sure that you have [Node.js](https://nodejs.org/en/) and NPM installed on your machine
2. Create a new folder with `mkdir flowbite-project`
3. Move inside the newly created folder with `cd flowbite-project`
4. Run `npm init` to create a `package.json` file and follow the CLI instructions
5. Run the following code to install Tailwind CSS:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/forms@latest
```

6. Create a new file with `touch postcss.config.js` and insert the following code:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

8. Create a Tailwind configuration file by running:

```bash
npx tailwindcss init
```

And then add the following code inside the `tailwind.config.js` file:

```javascript
module.exports = {
  purge: {
    enabled: true,
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
      },
      red: {
        50: '#FDF2F2',
        100: '#FDE8E8',
        200: '#FBD5D5',
        300: '#F8B4B4',
        400: '#F98080',
        500: '#F05252',
        600: '#E02424',
        700: '#C81E1E',
        800: '#9B1C1C',
        900: '#771D1D'
      },
      orange: {
        50: '#FFF8F1',
        100: '#FEECDC',
        200: '#FCD9BD',
        300: '#FDBA8C',
        400: '#FF8A4C',
        500: '#FF5A1F',
        600: '#D03801',
        700: '#B43403',
        800: '#8A2C0D',
        900: '#771D1D'
      },
      yellow: {
        50: '#FDFDEA',
        100: '#FDF6B2',
        200: '#FCE96A',
        300: '#FACA15',
        400: '#E3A008',
        500: '#C27803',
        600: '#9F580A',
        700: '#8E4B10',
        800: '#723B13',
        900: '#633112'
      },
      green: {
        50: '#F3FAF7',
        100: '#DEF7EC',
        200: '#BCF0DA',
        300: '#84E1BC',
        400: '#31C48D',
        500: '#0E9F6E',
        600: '#057A55',
        700: '#046C4E',
        800: '#03543F',
        900: '#014737'
      },
      teal: {
        50: '#EDFAFA',
        100: '#D5F5F6',
        200: '#AFECEF',
        300: '#7EDCE2',
        400: '#16BDCA',
        500: '#0694A2',
        600: '#047481',
        700: '#036672',
        800: '#05505C',
        900: '#014451'
      },
      blue: {
        50: '#EBF5FF',
        100: '#E1EFFE',
        200: '#C3DDFD',
        300: '#A4CAFE',
        400: '#76A9FA',
        500: '#3F83F8',
        600: '#1C64F2',
        700: '#1A56DB',
        800: '#1E429F',
        900: '#233876'
      },
      indigo: {
        50: '#F0F5FF',
        100: '#E5EDFF',
        200: '#CDDBFE',
        300: '#B4C6FC',
        400: '#8DA2FB',
        500: '#6875F5',
        600: '#5850EC',
        700: '#5145CD',
        800: '#42389D',
        900: '#362F78'
      },
      purple: {
        50: '#F6F5FF',
        100: '#EDEBFE',
        200: '#DCD7FE',
        300: '#CABFFD',
        400: '#AC94FA',
        500: '#9061F9',
        600: '#7E3AF2',
        700: '#6C2BD9',
        800: '#5521B5',
        900: '#4A1D96'
      },
      pink: {
        50: '#FDF2F8',
        100: '#FCE8F3',
        200: '#FAD1E8',
        300: '#F8B4D9',
        400: '#F17EB8',
        500: '#E74694',
        600: '#D61F69',
        700: '#BF125D',
        800: '#99154B',
        900: '#751A3D'
      }
    }
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

9. Include Tailwind in your CSS by creating a new CSS file and use the `@directive` to inject the main styles:

```css
/* ./styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

10. Compile the CSS using the Tailwind CLI tool by running:

```bash
npx tailwindcss -o flowbite.css
```

11. Include the newly created `flowbite.css` file into your HTML template and start developing with FlowBite and Tailwind CSS.
12. Using ES6: make sure that you also create a JavaScript file called `flowbite.js` to make elements such as dropdowns and modals work and add the following code:

```javascript
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import { createPopper } from '@popperjs/core';

function toggleCollapse(collapseId) {
    const menu = document.getElementById(collapseId);
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}
window.toggleCollapse = toggleCollapse;

function toggleDropdown(event, dropdownID) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    createPopper(element, document.getElementById(dropdownID), {
        placement: 'bottom-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 10],
                },
            },
        ]
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
}
window.toggleDropdown = toggleDropdown;

function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

window.toggleModal = toggleModal;

document.addEventListener("DOMContentLoaded", function () {
    tippy('[data-tippy-content]');
});
```

Alternatively, you can also just use a CDN link with the compiled JS:

```html
<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
```

## Building for production

If you want to build for production use the following command and remove any unused CSS:

```bash
NODE_ENV=production npx tailwindcss -o flowbite.css
```

Congratulations! You can now get started using the [components included in this UI library]({{< ref "components/alerts" >}}).
---
layout: home
title: Tailwind CSS Dark Mode - Flowbite
description: Learn how to configure and build a dark mode switcher for Tailwind CSS using Flowbite and start developing with the components from the library
group: customize
toc: true

previous: Configuration
previousLink: customize/configuration/
next: Theming
nextLink: customize/theming/
---

Offering a dark version for your website is more of an expected feature rather than a nice to have nowadays. Luckily, Tailwind CSS has a dark mode functionality enabled and the components from Flowbite also support it by using the "class" option.

Learn how to enable and build a dark version switcher for Tailwind CSS and Flowbite by using JavaScript and the configuration file.

## Enable dark mode

All you need to do to enable dark mode for your Tailwind CSS project and Flowbite components is to add the following code inside your `tailwind.config.js` file and then add the `dark` class on your `html` element.

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

Alternatively, you can also just use the "media" option to automatically set the dark or light theme based on the browser's color scheme preference.

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'media',
  // ...
}
```

<div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
  <p>The "media" option is now set by default if you use version 3.x of Tailwind CSS.</p>
</div>

## Dark mode switcher

If you want to create a dark mode switcher for Tailwind CSS and Flowbite you'll have to add some JavaScript code and a toggle element that a user can use to change their preferences.

1. Toggle dark mode by checking user preference in the `<head>` tag of your HTML:

```html
<script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
</script>
```

This will first check if you've previously set the theme color preference manually using the local storage and as a fallback it will either set the dark or light mode based on your browser color scheme preference.

2. Create a `<button>` element that can be interacted with to manually change the theme color:

```html
<button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
```

In this example we used a `<button>` component where we change the icon inside based on the current color scheme. You can also use other elements, such as the [toggle component]({{< ref "components/forms" >}}).

3. Add the following JavaScript inside your main file to handle the click events on the `<button>` element:

```javascript
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
```

This script changes the icon inside the button based on previous preferences and also handles the click events by setting the dark mode preference using local storage and also adding or removing the `dark` class from the main `<html>` tag.

## Customize components

By using the components from Flowbite you automatically receive dark mode support because of the `dark:{*}` class variant, however, if you would like to customize the appearance of these components when in dark mode all you need to do is change the styles for these class variants.

```html
<div class="bg-white dark:bg-gray-800">
  <h1 class="text-gray-900 dark:text-white">Dark mode</h1>
  <p class="text-gray-600 dark:text-gray-300">
    Lorem ipsum...
  </p>
</div>
```

As you can see, when dark mode is activated the `.bg-gray-800` and `.text-white` takes over the default `.bg-white` and `.text-gray-900` classes. You can add as many styles using the `dark:{*}` variant.
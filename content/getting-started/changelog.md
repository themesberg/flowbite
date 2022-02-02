---
layout: home
title: Flowbite - Changelog
description: Read more about the releases made for FlowBite from the official changelog
group: getting-started
toc: true

previous: License
previousLink: getting-started/license/
next: Configuration
nextLink: customize/configuration/
---

## Changelog

We strive to keep a good accountability of all of the version changes that we make for the FlowBite library.

### v1.3.2

Released on February 2nd, 2022.

- add new footer component
- remove `.bundle` name convention
- remove `@themesberg` tag from NPM
### v1.3.1

Released on January 31th, 2022.

- add new spinner component
- add new floating labels for form elements

### v1.3.0

- add new timeline component
- update the main plugin file based on Tailwind CSS v3.x
- provide React, Vue, and Angular support for the interactive elements

### v1.2.0

Released on November 29th, 2021.

- full dark/light mode integration
- add new tabs component
- new modal component variations and sizes
- new card components
- dark mode switcher guide
- minor bug fixes

### v1.1.1

- fix the package `mini-svg-data-uri` not being included as a dependency

### v1.1.0

- separated the datepicker plugin from the main `flowbite.js` file and instead created a separate one which is optional to include
- added more dropdown component variants and placement options
- reset form styles and move the extra pseudo CSS styles inside the Flowbite Tailwind CSS plugin file (no longer need to write it yourself)
- create new styles and options for the tooltip component and remove Tippy JS as a dependency
- improve documentation container styles and spacing
- create separate files for each component inside the Flowbite JavaScript ES6 file

### v1.0.7

- apply checkbox and radio input styles as base styles using the plugin interface

### v1.0.6

- remove `@tailwindcss/forms` plugin as a dependency
- create a Tailwind CSS plugin that can be included after requiring via NPM
- remove some unnecessary HTML markup and classes from the component examples

### v1.0.4

- use single quotes for JavaScript code and event listeners
- update card button icons

### v1.0.3

Released on September 28th, 2021.

- improve the modal functionality by generating the backdrop on the fly and enable showing/hiding of the modal with JS not just data attributes by using the `toggleModal` function
- improve the semantic HTML markup of alerts, button groups, navigation bars, and dropdowns
- fix the responsive scroll issue for modals (if the content was larger than the viewport, elements inside the modal were unaccessible)
- create a new component called list group which got separated from the button group component
- improve navigation bar markup by requiring only one list of pages to prevent duplicate content
- add the possibility to programatically show or hide elements using the `toggleCollapse` global function

### v1.0.2

Released on September 25th, 2021.

- add datepicker plugin and documentation
- improve documentation

### v1.0.1

Released on September 12th, 2021.

- updated JavaScript code to use data attributes instead of inline event listeners
- fixed some of the purged CSS classes for the alerts components
- clicking outside the dropdown component will now also close the dropdown menu
- add previous and next links for the docs page

### v1.0.0

Released on September 9th, 2021.

- initial release files

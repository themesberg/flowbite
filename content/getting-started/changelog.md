---
layout: home
title: Flowbite - Changelog
description: Read more about the releases made for FlowBite from the official changelog
group: getting-started
toc: true

previous: License
previousLink: getting-started/license/
next: React
nextLink: getting-started/react/
---

## Changelog

We strive to keep a good accountability of all of the version changes that we make for the Flowbite library.

### 1.8.1

- fix `apexcharts` safelist warning in console

### 1.8.0

- added new chart components
- enable or disable styles via the Flowbite Plugin
- addded new API option to the dropdowns to prevent closing when clicking on certain elements
- small bug fixes and improvements overall

### 1.7.0

- integrate new [Flowbite Icons](https://flowbite.com/icons/) with all UI components
- added new pagination examples and sizes
- improved spacing and alignment for all buttons with icons
- improved examples for popovers, toasts, and modals
- updated docs and website icons
- update Svelte docs for Svelte 4.0

### 1.6.6

- new device mockups component
- add nested accordions feature ([#266](https://github.com/themesberg/flowbite/issues/266) issue fixed by (@jneuendorf)[https://github.com/jneuendorf])
- make init functions (ie. `initDropdowns`, `initFlowbite`) available via the `window` object
- fix Nuxt.js documentation config path for Tailwind CSS

### 1.6.5

- New gallery component
- New jumbotron component
- LiveView support ([issue #486](https://github.com/themesberg/flowbite/issues/486)) for Phoenix by [@jmnda-dev](https://github.com/jmnda-dev)
- Improve modal responsive behaviour by centering it vertically
- Improve Svelte getting started guide by [@shinokada](https://github.com/shinokada)
- Improve font smoothing by adding antialising to the docs and examples
- Improve navbar spacings and font sizes to reflect Figma design system

### v1.6.4

- New bottom navigation component
- New sticky banner component
- Export initFlowbite to set up event listeners for all data attributes
- Fix for Turbo Frame load events ([issue #88](https://github.com/themesberg/flowbite/issues/88))
- Include WindiCSS on NPM (thanks to [@rgvillanueva28](https://github.com/rgvillanueva28))
- Adds close tooltips with esc key to meet WCAG (by [@daveholst](https://github.com/daveholst))
- Astro integration guide
- GatsbyJS integration guide 
- Symfony integration guide
- SolidJS integration guide
- Phoenix (Elixir) integration guide

### v1.6.3

- Added dropdown hover functionality with delay option and examples ([issue #208](https://github.com/themesberg/flowbite/issues/208))
- Fixed clicking outside of the Popover component not closing when using the "click" trigger type ([issue #242](https://github.com/themesberg/flowbite/issues/242))
- Introduced the "none" option for Tooltip, Speed Dial, Popover and Dropdown components for trigger type ([issue #181](https://github.com/themesberg/flowbite/issues/181))
- Fixed Tooltip and Popover click events on Safari browsers when using mobile devices ([issue #246](https://github.com/themesberg/flowbite/issues/246) and [issue #413](https://github.com/themesberg/flowbite/issues/413))
- Improve the consistency of the dropdown components across the whole documentation using `border-lg` ([issue #276](https://github.com/themesberg/flowbite/issues/276))
- Added the optional closable option to the Modal component preventing it from being closed when hitting the ESC button (thanks for the PR [@CorwinDev](https://github.com/CorwinDev))
- Improved sidebar component examples by including a hamburger icon and multiple layouts

### v1.6.2

- add event listeners for data attributes back to `index.ts`
- fix import maps for `flowbite.turbo.min.js.map` for Ruby on Rails

### v1.6.1

- Nuxt integration guide + starter kit
- Add data attribute initialisation support for Vue 3 and Nuxt
- Remove event listeners from basic `index.js` file and keep it only for `index.umd.js`
- Fix drawer flickering issue
- Update Laravel integration guide with Vite (thanks to [@CorWinDev](https://github.com/CorwinDev) for the PR)
- Fixed checkbox dark mode focus state (thanks to [@CorWinDev](https://github.com/CorwinDev) for the PR)
- Added Datepicker turbo load support for Ruby on Rails 7 (thanks to [@travisgalloway](https://github.com/travisgalloway) for the PR)

### v1.6.0

- migrated code to TypeScript & introduced types and interfaces
- integrated ESlint and Prettier
- fixed event listeners stacking up for all interactive components
- improved NPM build scripts
- new stepper component
- new indicator component
- new breadcrumb components
- new spinner examples

Breaking changes:

- modals no longer get initialized via `data-modal-toggle` and you need to switch to `data-modal-target={modalID}` where the value is the id of the modal

### v1.5.5

- added support for Ruby on Rails 7 import map with turbo
- improved event listeners for interactive components

### v1.5.4

- released new Speed Dial component
- modals now close by default when clicking outside
- add new static options to modals to prevent closing when clicking outside
- add expand code feature to the docs
- normalize colors for all label inputs
- remove "for" and "id" attributes from toggle switch components
- improve hover and focus style of the hamburger icons
- update to Tailwind CSS v3.2.2

### v1.5.3

- fix popover / tooltip styles

### v1.5.2

- add new Popover component

### v1.5.1

- fix drawer js build

### v1.5.0

- added new Drawer component
- added new Skeleton component
- added new KBD component
- added new Dropdown and Table components
- added new Checkbox and Radio examples
- update documentation code and component preview
- update table of contents of the docs

### v1.4.7

- fix datepicker CDN JS

### v1.4.6

- fix datepicker colors issues on dark mode
- fix datepicker range selector issues

### v1.4.5

- show navbar search input on mobile devices
- fix interactive tabs default active/inactive classes for dark mode

### v1.4.4

- use `data-modal-show="true"` to show modal by default
- fix accordion onToggle JS bug
### v1.4.3

- removed `toggle-bg` class as a requirement for the toggle component
- added new input fields
- added new textarea components
- added new checkbox examples
- added new radio button examples
- added new toggle colors and sizes
- added new select component examples
- added new search input component
- added new range slider component
- added new file input examples


### v1.4.2

- pass relevant objects for callback functions

### v1.4.1

- fixed mini-css-extract-plugin dependency
- new avatar component
- new rating component

### v1.4.0

- refactored all interactive components using JavaScript objects, methods, and callback functions
- improved accessibility and removed unused classes

### v1.3.4

- added new carousel component

### v1.3.3

- added new accordion component
- added new sidebar component

### v1.3.2

- add new footer component
- add a new pricing card
- add new crypto wallet connect modal component
- add two new table components
- remove `.bundle` name convention
- remove `@themesberg` tag from NPM

### v1.3.1

- add new spinner component
- add new floating labels for form elements

### v1.3.0

- update plugin file to Tailwind CSS v3.x
- add React and Vue.js support for the interactive elements (data attributes only)

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
- add the possibility to programmatically show or hide elements using the `toggleCollapse` global function

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

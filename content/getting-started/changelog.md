---
layout: home
title: Flowbite - Changelog
description: Read more about the releases made for FlowBite from the official changelog
group: getting-started
toc: true

previous: License
previousLink: getting-started/license
next: Configuration
nextLink: customize/configuration
---

## Changelog

We strive to keep a good accountability of all of the version changes that we make for the FlowBite library.

### v1.0.2

- improve the modal functionality by generating the backdrop on the fly and enable showing/hiding of the modal with JS not just data attributes by using the `toggleModal` function
- improve the semantic HTML markup of alerts, button groups, navigation bars, and dropdowns
- fix the responsive scroll issue for modals (if the content was larger than the viewport, elements inside the modal were unaccessible)
- create a new component called list group which got separated from the button group component
- improve navigation bar markup by requiring only one list of pages to prevent duplicate content
- add the possibility to programatically show or hide elements using the `toggleCollapse` global function

### v1.0.1

Released on 10th of September 2021.

- updated JavaScript code to use data attributes instead of inline event listeners
- fixed some of the purged CSS classes for the alerts components
- clicking outside the dropdown component will now also close the dropdown menu
- add previous and next links for the docs page

### v1.0.0

Released on 9th of September 2021.

- initial release files

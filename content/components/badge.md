---
layout: home
title: Badge
description: Use badges as elements to show counts or labels separately or inside other components
group: components
toc: true
---

## Example

You can use badges inside text elements such as headings, and the size of the badge will match the size of the text. Here's an example of all headings:

{{< example >}}
<h1>Glassmorphism <span class="badge bg-primary">New</span></h1>
<h2>Glassmorphism <span class="badge bg-primary">New</span></h2>
<h3>Glassmorphism <span class="badge bg-primary">New</span></h3>
<h4>Glassmorphism <span class="badge bg-primary">New</span></h4>
<h5>Glassmorphism <span class="badge bg-primary">New</span></h5>
<h6>Glassmorphism <span class="badge bg-primary">New</span></h6>
{{< /example >}}

## Buttons

Badges can also be used inside elements, such as buttons, typically to show a count:

{{< example >}}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-secondary ms-2">4</span>
</button>
{{< /example >}}


## Background Colors

The color of the badge component can also be changed using the contextual classes `.bg-primary`, `.bg-secondary`, `.bg-success`, `.bg-danger`, `.bg-warning`, `.bg-info` just like with any other component. You can also override the text color using the `.text-white` or `.text-dark` classes:

{{< example >}}
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info">Info</span>
<span class="badge bg-gray-100 text-dark">Light</span>
<span class="badge bg-dark">Dark</span>
{{< /example >}}

## With Icons

The color of the badge component can also be changed using the contextual classes `.bg-primary`, `.bg-secondary`, `.bg-success`, `.bg-danger`, `.bg-warning`, `.bg-info` just like with any other component. You can also override the text color using the `.text-white` or `.text-dark` classes:

{{< example >}}
<span class="badge bg-primary">
  <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
  3 days ago
</span>
<span class="badge bg-danger">
  2 unread messages
  <svg class="icon icon-xxs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
</span>
{{< /example >}}
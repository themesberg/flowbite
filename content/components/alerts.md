---
layout: home
title: Alerts
description: Show contextual information as a feedback to the users using your website
group: components
toc: true
---

## How it works

The alert component can be used for any length of text, and it also has an optional close functionality. Use the contextual classes, such as `.alert-primary`, `.alert-success` or `.alert-danger` to add special styling to the element.

## Example

Use one of the following alert components as a basic element to notify a user:

{{< example >}}
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</div>
<div class="alert alert-gray-100" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-gray-800" role="alert">
  A simple dark alert—check it out!
</div>
{{< /example >}}

## Glassmorphism effect

Use one of the following alert components as a basic element to notify a user:

{{< example >}}
<div class="alert bg-gray-900 border border-primary text-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</div>
<div class="alert alert-gray-100" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-gray-800" role="alert">
  A simple dark alert—check it out!
</div>
{{< /example >}}

## Alerts with icons

Use these alert components to also add a contextual icon to improve de usability and experience of the users:

{{< example >}}
<div class="alert alert-primary d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-primary icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>    
  </span> 
  <div>
    <strong class="me-1">Primary!</strong>You successfully read this important alert message.
  </div>
</div>
<div class="alert alert-secondary d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-secondary icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>   
  </span>
  <div>
    <strong class="me-1">Secondary!</strong>You successfully read this important alert message. 
  </div>  
</div>
<div class="alert alert-tertiary d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-tertiary icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg> 
  </span> 
  <div>
    <strong class="me-1">Well done!</strong>You successfully read this important alert message.
  </div>
</div>
<div class="alert alert-success d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-success icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>   
  </span>
  <div> 
    <strong class="me-1">Well done!</strong>You successfully read this important alert message.
  </div>
</div>
<div class="alert alert-danger d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-danger icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </span>
  <div>
    <strong class="me-1">Oh snap!</strong> Change a few things up and try submitting again. 
  </div> 
</div>
<div class="alert alert-warning d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-warning icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>  
  </span>
  <div>
    <strong class="me-1">Warning!</strong> Better check yourself, you're not looking too good. 
  </div>  
</div>
<div class="alert alert-info d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-info icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </span> 
  <div>
    <strong class="me-1">Heads up!</strong> You successfully read this important alert message.
  </div> 
</div>
<div class="alert alert-gray-100 d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-gray-600 icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
  </span>
  <div> 
    <strong class="me-1">Light alert!</strong> You successfully read this important alert message.
  </div>  
</div>
<div class="alert alert-dark d-lg-flex align-items-center" role="alert">
  <span class="icon-shape icon-shape-dark icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
  </span>
  <div> 
    <strong class="me-1">Dark alert!</strong> You successfully read this important alert message. 
  </div>  
</div>
{{< /example >}}

## Link colors

Use the `alert-link` class for the anchor element inside the alert component to match the colors:

{{< example >}}
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
  A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
{{< /example >}}

## Aditional content

Alert components can also contain elements, such as headings, multiple paragraphs, buttons, and many more:

{{< example >}}
<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{{< /example >}}

## Dismissing

Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:

- add a `button` element with the `data-bs-dismiss="alert"` and the `aria-label="Close"` attributes
- make sure you add the `alert-dismissble` class to the main `alert` component
- use the `fade` and `show` classes to animate the action

{{< example >}}
<div class="alert alert-primary alert-dismissible d-lg-flex align-items-center fade show" role="alert">
  <span class="icon-shape icon-shape-primary icon-xs rounded me-3 mb-2 mb-lg-0">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>    
  </span> 
  <div>Big news! We're excited to announce a brand new product.</div>
  <button type="button" class="btn-close align-middle ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{< /example >}}



---
layout: docs
title: Tailwind CSS Rating - Flowbite
description: Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes
group: components
toc: true

previous: Progress bar
previousLink: components/progress/
next: Sidebar
nextLink: components/sidebar/
---

Get started with the rating component to show an aggregate of reviews and scores in the forms of stars or numbers using the utility classes from Tailwind CSS and components from Flowbite.

You can find multiple examples on this page including different styles, sizes, and variants of the rating component and other associated elements such as a comment or card.

## Default rating

Use this simple example of a star rating component for showing review results.

{{< example class="flex justify-center" github="components/rating.md" show_dark=true >}}

<div class="flex items-center space-x-1">
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
</div>
{{< /example >}}

## Rating with text

If you also want to show a text near the stars you can use this example as a reference.

{{< example class="flex justify-center" github="components/rating.md" show_dark=true >}}

<div class="flex items-center">
    <div class="flex items-center space-x-1">
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    </div>
    <p class="ms-2 text-sm font-medium text-body">4.95 out of 5</p>
</div>
{{< /example >}}

## Rating count

Aggregate more results by using this example to show the amount of reviews and the average score.

{{< example class="flex justify-center" github="components/rating.md" show_dark=true >}}

<div class="flex items-center">
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <p class="ms-2 text-sm font-bold text-heading">4.95</p>
    <span class="w-1 h-1 mx-1.5 bg-neutral-quaternary rounded-full"></span>
    <a href="#" class="text-sm font-medium text-heading underline hover:no-underline">73 reviews</a>
</div>
{{< /example >}}

## Star sizes

Check out the different sizing options for the star review component from small, medium, and large.

{{< example class="flex flex-col items-center space-y-4" github="components/rating.md" show_dark=true >}}
<div class="flex items-center space-x-1">
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
</div>
<div class="flex items-center space-x-1">
    <svg class="w-6 h-6 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-6 h-6 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-6 h-6 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-6 h-6 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-6 h-6 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
</div>
<div class="flex items-center space-x-1">
    <svg class="w-7 h-7 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-7 h-7 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-7 h-7 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-7 h-7 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg class="w-7 h-7 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
</div>
{{< /example >}}

## Advanced rating

This advanced rating component can be used to also show how many reviews have been posted for each star rating (eg. 4% for the 2 star ratings, 17% for 4 star rating etc).

{{< example github="components/rating.md" show_dark=true >}}

<div class="flex items-center mb-3">
    <div class="flex items-center space-x-1">
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    </div>
    <p class="ms-2 text-sm font-medium text-body">4.95 out of 5</p>
</div>
<p class="text-sm font-medium text-body">1,745 global ratings</p>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-fg-brand hover:underline w-14">5 star</a>
    <div class="w-2/4 h-4 mx-4 bg-neutral-quaternary rounded-base">
        <div class="h-4 bg-warning rounded-base" style="width: 70%"></div>
    </div>
    <span class="text-sm font-medium text-body">70%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-fg-brand hover:underline w-14">4 star</a>
    <div class="w-2/4 h-4 mx-4 bg-neutral-quaternary rounded-base">
        <div class="h-4 bg-warning rounded-base" style="width: 17%"></div>
    </div>
    <span class="text-sm font-medium text-body">17%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-fg-brand hover:underline w-14">3 star</a>
    <div class="w-2/4 h-4 mx-4 bg-neutral-quaternary rounded-base">
        <div class="h-4 bg-warning rounded-base" style="width: 8%"></div>
    </div>
    <span class="text-sm font-medium text-body">8%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-fg-brand hover:underline w-14">2 star</a>
    <div class="w-2/4 h-4 mx-4 bg-neutral-quaternary rounded-base">
        <div class="h-4 bg-warning rounded-base" style="width:4%"></div>
    </div>
    <span class="text-sm font-medium text-body">4%</span>
</div>
<div class="flex items-center mt-4">
    <a href="#" class="text-sm font-medium text-fg-brand hover:underline w-14">1 star</a>
    <div class="w-2/4 h-4 mx-4 bg-neutral-quaternary rounded-base">
        <div class="h-4 bg-warning rounded-base" style="width:1%"></div>
    </div>
    <span class="text-sm font-medium text-body">1%</span>
</div>
{{< /example >}}

## Score rating

This component can be used to break up a general rating score into multiple categories using progress bars.

{{< example github="components/rating.md" show_dark=true >}}

<div class="flex items-center mb-5">
    <p class="bg-brand-softer text-fg-brand-strong text-sm font-semibold inline-flex items-center p-1.5 rounded-base">8.7</p>
    <p class="ms-2 font-medium text-heading">Excellent</p>
    <span class="w-1 h-1 mx-2 rounded-full bg-neutral-quaternary"></span>
    <p class="text-sm font-medium text-body">376 reviews</p>
    <a href="#" class="ms-auto text-sm font-medium text-fg-brand hover:underline">Read all reviews</a>
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
    <div>
        <dl>
            <dt class="text-sm font-medium text-body">Staff</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 88%"></div>
                </div>
                <span class="text-sm font-medium text-body">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-body">Comfort</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 89%"></div>
                </div>
                <span class="text-sm font-medium text-body">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-body">Free WiFi</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 88%"></div>
                </div>
                <span class="text-sm font-medium text-body">8.8</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-body">Facilities</dt>
            <dd class="flex items-center">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 54%"></div>
                </div>
                <span class="text-sm font-medium text-body">5.4</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt class="text-sm font-medium text-body">Value for money</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 89%"></div>
                </div>
                <span class="text-sm font-medium text-body">8.9</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-body">Cleanliness</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 70%"></div>
                </div>
                <span class="text-sm font-medium text-body">7.0</span>
            </dd>
        </dl>
        <dl>
            <dt class="text-sm font-medium text-body">Location</dt>
            <dd class="flex items-center">
                <div class="w-full bg-neutral-quaternary rounded-base h-2.5 me-2">
                    <div class="bg-brand h-2.5 rounded-base" style="width: 89%"></div>
                </div>
                <span class="text-sm font-medium text-body">8.9</span>
            </dd>
        </dl>
    </div>
</div>
{{< /example >}}

## Rating comment

Use this component to show a single rating comment and its score alongside other components such as the user profile avatar, name, post date, and more.

{{< example github="components/rating.md" show_dark=true >}}

<article>
    <div class="flex items-center mb-4">
        <img class="w-10 h-10 me-3 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
        <div class="font-medium text-heading">
            <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-body">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <svg class="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
        <h3 class="ms-2 text-sm font-semibold text-heading leading-none">Thinking to buy another one!</h3>
    </div>
    <footer class="mb-5 text-sm text-body mt-1"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p class="mb-2 text-body">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p class="mb-3 text-body">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" class="block mb-5 text-sm font-medium text-fg-brand hover:underline">Read more</a>
    <aside>
        <p class="mt-1 text-xs text-body">19 people found this helpful</p>
        <div class="flex items-center mt-3">
            <button type="button" class="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none">Helpful</button>
            <a href="#" class="ps-4 text-sm font-medium text-fg-brand hover:underline border-default ms-4 border-s md:mb-0">Report abuse</a>
        </div>
    </aside>
</article>
{{< /example >}}

## Review content

Use this component to show the review content from a user alongside the avatar, location, details, and the score inside a card element.

{{< example github="components/rating.md" show_dark=true >}}

<article class="md:gap-8 md:grid md:grid-cols-3">
    <div>
        <div class="flex items-center mb-6">
            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
            <div class="ms-3 font-medium text-heading">
                <p>Jese Leos</p>
                <div class="flex items-center text-sm text-body">
                    <svg class="w-4 h-4 me-1" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00023 16.5C13.1425 16.5 16.5005 13.1421 16.5005 9C16.5005 4.85786 13.1425 1.5 9.00023 1.5C4.85797 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85797 16.5 9.00023 16.5Z" fill="white"/><path d="M8.67548 8.99996H16.5012C16.5012 8.32308 16.4109 7.66735 16.2428 7.04358H8.67548V8.99996Z" fill="#D80027"/><path d="M8.67548 5.08712H15.4004C14.9413 4.338 14.3543 3.67585 13.6699 3.13074H8.67548V5.08712Z" fill="#D80027"/><path d="M9.0005 16.5001C10.7655 16.5001 12.3878 15.89 13.6689 14.8698H4.33209C5.61318 15.89 7.23548 16.5001 9.0005 16.5001Z" fill="#D80027"/><path d="M2.60125 12.9132H15.4C15.7686 12.3118 16.0545 11.6543 16.2425 10.9567H1.75879C1.94679 11.6543 2.23265 12.3118 2.60125 12.9132Z" fill="#D80027"/><path d="M4.97397 2.67114H5.65741L5.0217 3.13297L5.26453 3.88024L4.62884 3.41841L3.99316 3.88024L4.20292 3.23468C3.6432 3.7009 3.15262 4.24713 2.74834 4.85575H2.96732L2.56266 5.14972C2.49962 5.25489 2.43915 5.36173 2.38121 5.47015L2.57444 6.06485L2.21393 5.80293C2.12432 5.99279 2.04235 6.18692 1.96867 6.3851L2.18156 7.04036H2.96732L2.33161 7.50219L2.57444 8.24947L1.93876 7.78764L1.55798 8.0643C1.51986 8.37066 1.5 8.6827 1.5 8.99941H8.99964C8.99964 4.85763 8.99964 4.36934 8.99964 1.5C7.51811 1.5 6.13703 1.92975 4.97397 2.67114ZM5.26453 8.24947L4.62884 7.78764L3.99316 8.24947L4.23599 7.50219L3.60028 7.04036H4.38604L4.62884 6.29309L4.87165 7.04036H5.65741L5.0217 7.50219L5.26453 8.24947ZM5.0217 5.31758L5.26453 6.06485L4.62884 5.60303L3.99316 6.06485L4.23599 5.31758L3.60028 4.85575H4.38604L4.62884 4.10848L4.87165 4.85575H5.65741L5.0217 5.31758ZM7.95461 8.24947L7.31893 7.78764L6.68325 8.24947L6.92608 7.50219L6.29037 7.04036H7.07613L7.31893 6.29309L7.56173 7.04036H8.34749L7.71178 7.50219L7.95461 8.24947ZM7.71178 5.31758L7.95461 6.06485L7.31893 5.60303L6.68325 6.06485L6.92608 5.31758L6.29037 4.85575H7.07613L7.31893 4.10848L7.56173 4.85575H8.34749L7.71178 5.31758ZM7.71178 3.13297L7.95461 3.88024L7.31893 3.41841L6.68325 3.88024L6.92608 3.13297L6.29037 2.67114H7.07613L7.31893 1.92386L7.56173 2.67114H8.34749L7.71178 3.13297Z" fill="#1A47B8"/></svg>
                    United States
                </div>
            </div>
        </div>
        <ul class="space-y-4 text-sm text-body">
            <li class="flex items-center">
                <svg class="w-4 h-4 text-body me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/></svg>
                Apartament with city view
            </li>
            <li class="flex items-center">
                <svg class="w-4 h-4 text-body me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                3 nights December 2021
            </li>
            <li class="flex items-center">
                <svg class="w-4 h-4 text-body me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
                Family
            </li>
        </ul>
    </div>
    <div class="col-span-2 mt-6 md:mt-0">
        <div class="flex items-start mb-5">
            <div class="pe-4">
                <footer>
                    <p class="mb-2 text-sm text-body">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                </footer>
                <h4 class="text-xl font-semibold text-heading">Spotless, good appliances, excellent layout, host was genuinely nice and helpful.</h4>
            </div>
            <p class="bg-brand-softer text-fg-brand-strong text-sm font-semibold inline-flex items-center p-1.5 rounded-base">8.7</p>
        </div>
        <p class="mb-4 text-body">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
        <p class="mb-4 text-body">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside class="flex items-center space-x-4">
            <a href="#" class="inline-flex items-center text-sm font-medium text-fg-brand hover:underline">
                <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/></svg>
                Helpful
            </a>
            <a href="#" class="inline-flex items-center text-sm font-medium text-fg-brand hover:underline">
                <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"/></svg>
                Not helpful
            </a>
        </aside>
    </div>
</article>
{{< /example >}}

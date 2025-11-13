---
layout: docs
title: Tailwind CSS Table - Flowbite
description: Use the table component to show text, images, links, and other elements inside a structured set of data made up of rows and columns of table cells
group: components
toc: true

previous: Stepper
previousLink: components/stepper/
next: Tabs
nextLink: components/tabs/
---

The table component represents a set of structured elements made up of rows and columns as table cells that can be used to show data sets to your website users.

Get started with multiple variants and styles of these table components built with the utility classes from Tailwind CSS and components from Flowbite.

## Default table

Use the following example of a responsive table component to show multiple rows and columns of text data.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Stock
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    231
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    423
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    121
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Highlight

Accentuate certain elements inside the table such as the rows, columns or data cells based on your needs.

### Striped rows

Use this example to increase the readability of the data sets by alternating the background color of every second table row.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="bg-neutral-secondary-soft border-b border-default">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Striped columns

Use this example to increase the readability of the table cells by alternating the background color of every second table column.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body border-b border-default">
            <tr>
                <th scope="col" class="px-6 py-3 bg-neutral-secondary-soft font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 bg-neutral-secondary-soft font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4 bg-neutral-secondary-soft">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4 bg-neutral-secondary-soft">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4 bg-neutral-secondary-soft">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr class="border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4 bg-neutral-secondary-soft">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4 bg-neutral-secondary-soft">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Hover state

Use the `hover:{bg-*}` utility class from Tailwind CSS to change the background color of a data row when hovering over the element with the cursor.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Table layout

Use the following examples of table layouts to show the head, foot or caption of the table.

### Table head (sortable)

This example can be used to show the head of the table component with sortable icons.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    <div class="flex items-center">
                        Color
                        <a href="#">
                            <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/></svg>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    <div class="flex items-center">
                        Category
                        <a href="#">
                            <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/></svg>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    <div class="flex items-center">
                        Price
                        <a href="#">
                            <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/></svg>
                        </a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b  border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b  border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Table foot

Use this example where the `<tfoot>` HTML element can be used in conjunction with the head and caption of the table component.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium">
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-base font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-base font-medium">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                   1
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-semibold text-heading">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>
{{< /example >}}

### Table caption

Improve accessibility by using a caption inside the table as a heading to better describe what the table is about for screen readers.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <caption class="p-5 text-lg font-medium text-left rtl:text-right text-heading">
            Our products
            <p class="mt-1.5 text-sm font-normal text-body">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Table styles

Get started with the following table styles and choose the one that best fits your application.

### Without border

Use this example of a table component without any border between the table cells.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-heading">
            <tr>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Table with shadow

Use this example to apply a shadow-sm border to the table component.

{{< example github="components/tables.md" class="pb-4 overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b  border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b  border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Overflow scrolling

Use this example where we apply `overflow-x-auto` to enable horizontal scrolling if the content inside the table overflows that maximum width.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Accessories
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Available
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Weight
                </th>
                <th scope="col" class="px-6 py-3  font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-2" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-2" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-3" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-3" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    1.0 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-4" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-4" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    0.2 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-5" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-5" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Watches
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $199
                </td>
                <td class="px-6 py-4">
                    0.12 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-6" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-6" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple iMac
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    7.0 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-7" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-7" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple AirPods
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $399
                </td>
                <td class="px-6 py-4">
                    38 g
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-8" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-8" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    iPad Pro
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    1.3 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-9" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-9" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Keyboard
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    453 g
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-10" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-10" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple TV 4K
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    TV
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    1.78 lb.
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-11" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-11" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    AirTag
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    Yes
                </td>
                <td class="px-6 py-4">
                    No
                </td>
                <td class="px-6 py-4">
                    $29
                </td>
                <td class="px-6 py-4">
                    53 g
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                    <a href="#" class="font-medium text-danger hover:underline ms-3">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Table search

Use this example to show a search bar that can be used to query through data inside the table component.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <div class="p-4">
        <label for="input-group-1" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Search">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-12" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-12" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-13" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-13" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-14" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-14" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-15" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-15" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-16" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-16" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-17" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-17" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    iPad
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                     <div class="flex items-center">
                        <input id="table-checkbox-18" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-18" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Table filter

Use this example with a filter bar to select certain data sets inside the table based on the options that you've selected.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <div class="p-4 flex items-center justify-between space-x-4">
        <label for="input-group-1" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search">
        </div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="shrink-0 inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none" type="button">
            <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/></svg>
            Filter by
            <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Color</a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Category</a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Price</a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
            </li>
            </ul>
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-20" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-20" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-21" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-21" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-22" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-22" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-23" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-23" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-24" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-24" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-25" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-25" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    iPad
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-26" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-26" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Table pagination

Paginate the table data when using larger data sets based on any given amount of results per page.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-27" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-27" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-28" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-28" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-29" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-29" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-30" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-30" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-31" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-31" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Watches
                </td>
                <td class="px-6 py-4">
                    $199
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-32" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-32" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple iMac
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-33" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-33" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple AirPods
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $399
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-34" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-34" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    iPad Pro
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-35" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-35" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Keyboard
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-36" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-36" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Smart Folio iPad Air
                </th>
                <td class="px-6 py-4">
                    Blue
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $79
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-37" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-37" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    AirTag
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $29
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-body mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-heading">1-10</span> of <span class="font-semibold text-heading">1000</span></span>
        <ul class="flex -space-x-px text-sm">
            <li>
                <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">...</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
            </li>
        </ul>
    </nav>
</div>
{{< /example >}}

## Checkbox selection

Checkboxes can be used inside table data rows to select multiple data sets and apply a bulk action.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-38" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-38" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-39" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-39" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-40" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-40" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-41" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-41" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-42" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-42" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-43" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-43" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    iPad
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-44" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-44" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Table with users

Use this example of a table where we show a data set of users and showing a profile picture, name, email, online status, and more.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4">
        <div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none" type="button">
            Action
            <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Reward</a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Promote</a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Archive</a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">Delete</a>
            </li>
            </ul>
        </div>
        </div>
        <label for="input-group-1" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-45" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-45" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Position
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-46" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-46" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Neil Sims</div>
                        <div class="font-normal text-body">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    React Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-47" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-47" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Bonnie Green</div>
                        <div class="font-normal text-body">bonnie@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Designer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-danger me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-48" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-48" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Jese Leos</div>
                        <div class="font-normal text-body">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Vue JS Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-49" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-49" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-body">thames@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    UI/UX Engineer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-50" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-50" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Leslie Livingston</div>
                        <div class="font-normal text-body">leslie@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    SEO Specialist
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-danger me-2"></div> Offline
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Table with products

Get started with this example to show a list of products inside the table and show a preview image, product name, quantity selector, price and actions tab.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="p-4">
                    <img src="/docs/images/products/apple-watch.png" class="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch">
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                    Apple Watch
                </td>
                <td class="px-6 py-4">
                    <form class="max-w-xs mx-auto">
                        <label for="counter-input-1" class="sr-only">Choose quantity:</label>
                        <div class="relative flex items-center">
                            <button type="button" id="decrement-button-1" data-input-counter-decrement="counter-input-1" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
                            </button>
                            <input type="text" id="counter-input-1" data-input-counter class="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
                            <button type="button" id="increment-button-1" data-input-counter-increment="counter-input-1" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                            </button>
                        </div>
                    </form>
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                    $599
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-danger hover:underline">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="p-4">
                    <img src="/docs/images/products/imac.png" class="w-16 md:w-24 max-w-full max-h-full" alt="Apple iMac">
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                    iMac 27"
                </td>
                <td class="px-6 py-4">
                    <form class="max-w-xs mx-auto">
                        <label for="counter-input-2" class="sr-only">Choose quantity:</label>
                        <div class="relative flex items-center">
                            <button type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
                            </button>
                            <input type="text" id="counter-input-2" data-input-counter class="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
                            <button type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                            </button>
                        </div>
                    </form>
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                    $2499
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-danger hover:underline">Remove</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="p-4">
                    <img src="/docs/images/products/iphone-12.png" class="w-16 md:w-24 max-w-full max-h-full" alt="iPhone 12">
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                    IPhone 12 
                </td>
                <td class="px-6 py-4">
                    <form class="max-w-xs mx-auto">
                        <label for="counter-input-3" class="sr-only">Choose quantity:</label>
                        <div class="relative flex items-center">
                            <button type="button" id="decrement-button-3" data-input-counter-decrement="counter-input-3" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
                            </button>
                            <input type="text" id="counter-input-3" data-input-counter class="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
                            <button type="button" id="increment-button-3" data-input-counter-increment="counter-input-3" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
                                <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                            </button>
                        </div>
                    </form>
                </td>
                <td class="px-6 py-4 font-semibold text-heading">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-fg-danger hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Table with modal

Use this example to show a modal with a form where you can edit table data by clicking on one of the rows.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true iframeHeight="640" >}}
<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 p-4">
        <div>
            <button id="dropdownDefaultButton2" data-dropdown-toggle="dropdown-2" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none" type="button">
                Action
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdown-2" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
                <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton2">
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Reward</a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Promote</a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Archive</a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded">Delete</a>
                </li>
                </ul>
            </div>
        </div>
        <label for="input-group-1" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
            </div>
            <input type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-51" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-51" class="sr-only">Table checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Position
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-52" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-52" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Neil Sims</div>
                        <div class="font-normal text-body">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    React Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-53" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-53" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Bonnie Green</div>
                        <div class="font-normal text-body">bonnie@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Designer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-54" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-54" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Jese Leos</div>
                        <div class="font-normal text-body">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Vue JS Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-55" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-55" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-body">thomas@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    UI/UX Engineer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-success me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-neutral-primary-soft hover:bg-neutral-secondary-medium">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="table-checkbox-56" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-56" class="sr-only">Table checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-heading whitespace-nowrap">
                    <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Leslie Livingston</div>
                        <div class="font-normal text-body">leslie@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    SEO Specialist
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-danger me-2"></div> Offline
                    </div>
                </td>
                <td class="px-6 py-4">
                    <!-- Modal toggle -->
                    <a href="#" type="button" data-modal-show="editUserModal" class="font-medium text-fg-brand hover:underline">Edit user</a>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Main modal -->
<div id="editUserModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <!-- Modal header -->
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 class="text-lg font-medium text-heading">
                    Create new product
                </h3>
                <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="editUserModal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form action="#">
                <div class="grid gap-4 grid-cols-2 py-4 md:py-6">
                    <div class="col-span-2">
                        <label for="name" class="block mb-2.5 text-sm font-medium text-heading">Name</label>
                        <input type="text" name="name" id="name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Bonnie Green" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="position" class="block mb-2.5 text-sm font-medium text-heading">Position</label>
                        <input type="text" name="position" id="position" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="React Developer" required="">
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <label for="category" class="block mb-2.5 text-sm font-medium text-heading">Status</label>
                        <select id="category" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body">
                            <option selected="">Online</option>
                            <option value="offline">Offline</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>
                    <div class="col-span-2">
                        <label for="biography" class="block mb-2.5 text-sm font-medium text-heading">Biography</label>
                        <textarea id="biography" rows="4" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write a short biography here"></textarea>                    
                    </div>
                </div>
                <div class="flex items-center space-x-4 border-t border-default pt-4 md:pt-6">
                    <button type="submit" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Update user
                    </button>
                    <button data-modal-hide="crud-modal" type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div> 
</div>
{{< /example >}}

## Table colors

Apply any color to the table element by using the `bg-{color}` and `text-{color}` color class variants from Tailwind CSS.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-fg-brand-subtle">
        <thead class="text-sm text-white bg-brand-strong">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Striped rows color

Use this example to apply a different color to every second row inside the table.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-fg-brand-subtle">
        <thead class="text-sm text-white bg-brand-strong">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand-strong border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand-strong border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Striped columns color

Use this example to apply a different color to every second column inside a colored table.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-fg-brand-subtle">
        <thead class="text-sm text-white bg-brand">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium bg-brand-strong">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium bg-brand-strong">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium bg-brand-strong">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap bg-brand-strong">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap bg-brand-strong">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap bg-brand-strong">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap bg-brand-strong">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap bg-brand-strong">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4 bg-brand-strong">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

### Hover state

Use this example to apply a different color to every second row inside the table with a colored background.

{{< example github="components/tables.md" class="overflow-hidden" show_dark=true >}}

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-fg-brand-subtle">
        <thead class="text-sm text-white bg-brand border-b border-brand-light">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-brand border-b border-brand-light hover:bg-brand-strong">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light hover:bg-brand-strong">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light hover:bg-brand-strong">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand border-b border-brand-light hover:bg-brand-strong">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-brand hover:bg-brand-strong">
                <th scope="row" class="px-6 py-4 font-medium text-fg-brand-subtle whitespace-nowrap">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## More examples

You can check out more table component examples from the following resources from Flowbite Blocks:

-   [Advanced tables](https://flowbite.com/blocks/application/advanced-tables/)
-   [Table headers](https://flowbite.com/blocks/application/table-headers/)
-   [Table footers](https://flowbite.com/blocks/application/table-footers/)
-   [Pricing tables](https://flowbite.com/blocks/marketing/pricing/)

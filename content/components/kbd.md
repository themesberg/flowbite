---
layout: docs
title: Tailwind CSS KBD (Keyboard) - Flowbite
description: Use the KBD component as an inline element to denote textual user input from the keyboard inside paragraphs, tables, and other components
group: components
toc: true

previous: Jumbotron
previousLink: components/jumbotron/
next: List group
nextLink: components/list-group/
---

The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables, cards, and more.

Use the semantic `<kbd>` keyboard input tag to use the default monospace font which is best suited for representing input keys.

## Default KBD

Here's a list of KBD components that you can use inside any other element.

{{< example github="components/kbd.md" show_dark=true >}}
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Shift</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Ctrl</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Tab</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Caps Lock</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Esc</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Spacebar</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Enter</kbd>
{{< /example >}}

## KBD inside text

Use this example by nesting an inline KBD component inside a paragraph.

{{< example github="components/kbd.md" show_dark=true >}}

<p class="text-body">
    Please press <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Ctrl</kbd> + <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Shift</kbd> + <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">R</kbd> to re-render an MDN page.
</p>
{{< /example >}}

## KBD inside table

The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.

{{< example github="components/kbd.md" show_dark=true >}}

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-xs text-body uppercase bg-neutral-tertiary">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Key
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-body whitespace-nowrap">
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Shift</kbd>
                        <span class="mx-2">or</span>
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Tab</kbd>
                </th>
                <td class="px-6 py-4">
                    Navigate to interactive elements
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-body whitespace-nowrap">
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Enter</kbd>
                    <span class="mx-2">or</span>
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Spacebar</kbd>
                </th>
                <td class="px-6 py-4">
                    Ensure elements with ARIA role="button" can be activated with both key commands.
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="inline-flex items-center px-6 py-4 font-medium text-body whitespace-nowrap">
                    <kbd class="inline-flex items-center me-1 px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z"/>
                        </svg>
                        <span class="sr-only">Arrow key up</span>
                    </kbd>
                    <kbd class="inline-flex items-center px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
                        </svg>
                        <span class="sr-only">Arrow key down</span>
                    </kbd>
                    <span class="mx-2">or</span>
                    <kbd class="rtl:rotate-180 inline-flex items-center me-1 px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
                        </svg>
                        <span class="sr-only">Arrow key left</span>
                    </kbd>
                    <kbd class="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
                        </svg>
                        <span class="sr-only">Arrow key right</span>
                    </kbd>
                </th>
                <td class="px-6 py-4">
                    Choose and activate previous/next tab.
                </td>
            </tr>
        </tbody>
    </table>
</div>
{{< /example >}}

## Arrow keys

Use this example to show arrow keys inside the KBD styled element.

{{< example github="components/list-group.md" show_dark=true >}}
<kbd class="inline-flex items-center px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
<svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
<path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z"/>
</svg>
<span class="sr-only">Arrow key up</span>
</kbd>
<kbd class="inline-flex items-center px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
<svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
<path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
</svg>
<span class="sr-only">Arrow key down</span>
</kbd>
<kbd class="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
<svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
<path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
</svg>
<span class="sr-only">Arrow key left</span>
</kbd>
<kbd class="rtl:rotate-180 inline-flex items-center px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">
<svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
<path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
</svg>
<span class="sr-only">Arrow key right</span>
</kbd>
{{< /example >}}

## Letter keys

Use this example if you need to show a key from the latin alphabet

{{< example github="components/kbd.md" show_dark=true >}}
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Q</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">W</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">E</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">R</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">T</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Y</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">U</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">I</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">O</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">P</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">A</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">S</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">D</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">G</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">H</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">J</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">K</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">L</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">Z</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">X</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">C</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">V</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">B</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">N</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">M</kbd>
{{< /example >}}

## Number keys

Use this example to show a key inside a KBD component from the english numeral system.

{{< example github="components/kbd.md" show_dark=true >}}
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">1</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">2</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">3</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">4</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">5</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">6</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">7</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">8</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">9</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">0</kbd>
{{< /example >}}

## Function keys

This example can be used to denote function keys inside the KBD component.

{{< example github="components/kbd.md" show_dark=true >}}
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F1</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F2</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F3</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F4</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F5</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F6</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F7</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F8</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F9</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F10</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F11</kbd>
<kbd class="px-2 py-1.5 text-xs font-semibold text-heading bg-neutral-tertiary border border-default-medium rounded-base">F12</kbd>
{{< /example >}}

---
layout: docs
title: Tailwind CSS WYSIWYG Text Editor - Flowbite
description: Use the wysiwyg text editor component from Flowbite to create and modify content by manipulating paragraphs, headings, images and styling them using all available options
group: plugins
toc: true
requires_js: true

previous: Datatables
previousLink: plugins/datatables/
---

The WYSIWYG text editor from Flowbite is open-source under the MIT license based on the [Tip Tap library](https://github.com/ueberdosis/tiptap) and allows you to easily edit complex text data with typography styles, links, images, videos, and more.

The markup and styles provided by Flowbite are all built with the utility classes from Tailwind CSS and the styles for the content inside the WYSIWYG text editor are based on the [Flowbite Typography](https://flowbite.com/docs/components/typography/) plugin.

All examples provided on this page have support for dark mode, RTL (right-to-left) styles, responsiveness on mobile devices and you can easily add your own functionality using JavaScript and the Flowbite API.

## Getting started

Before continuing make sure that you have Tailwind CSS, Flowbite, and Tip Tap installed in your project.

1. Follow the [quickstart guide](https://flowbite.com/docs/getting-started/quickstart/) from Flowbite to enable the interactive elements

2. Install the [Flowbite Typography](https://flowbite.com/docs/components/typography/) plugin to format the content of text inside the WYSYIWYG editor preview:

{{< code lang="bash" >}}
npm i flowbite-typography
{{< /code >}}

3. Import the `flowbite-typography` plugin inside your main Tailwind CSS file:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
@plugin "flowbite-typography";
{{< /code >}}

Alternatively you can do the same but in your `tailwind.config.js` file:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
// import the tailwind.config.js file in your main CSS file if using Tailwind CSS v4
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('flowbite-typography'),
    // ...
  ],
}
{{< /code >}}

4. Finally, install Tip Tap either via NPM or skip this step if you're using CDN:

{{< code lang="bash" >}}
npm install @tiptap/core @tiptap/pm @tiptap/starter-kit
{{< /code >}}

Now you're ready to use the examples below by copying the HTML markup and the JavaScript code.

## Default text editor

Use this example of a WYSIWYG text editor to enable basic typography styling and formatting, adding lists, links, images, videos, code blocks, aligning text, blockquotes, setting headers and paragraphs and more.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Highlight from 'https://esm.sh/@tiptap/extension-highlight@2.6.6';
import Underline from 'https://esm.sh/@tiptap/extension-underline@2.6.6';
import Link from 'https://esm.sh/@tiptap/extension-link@2.6.6';
import TextAlign from 'https://esm.sh/@tiptap/extension-text-align@2.6.6';
import Image from 'https://esm.sh/@tiptap/extension-image@2.6.6';
import YouTube from 'https://esm.sh/@tiptap/extension-youtube@2.6.6';
import TextStyle from 'https://esm.sh/@tiptap/extension-text-style@2.6.6';
import FontFamily from 'https://esm.sh/@tiptap/extension-font-family@2.6.6';
import { Color } from 'https://esm.sh/@tiptap/extension-color@2.6.6';
import Bold from 'https://esm.sh/@tiptap/extension-bold@2.6.6'; // Import the Bold extension


window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-example")) {

    const FontSizeTextStyle = TextStyle.extend({
        addAttributes() {
            return {
            fontSize: {
                default: null,
                parseHTML: element => element.style.fontSize,
                renderHTML: attributes => {
                if (!attributes.fontSize) {
                    return {};
                }
                return { style: 'font-size: ' + attributes.fontSize };
                },
            },
            };
        },
    });
    const CustomBold = Bold.extend({
        // Override the renderHTML method
        renderHTML({ mark, HTMLAttributes }) {
            const { style, ...rest } = HTMLAttributes;

            // Merge existing styles with font-weight
            const newStyle = 'font-weight: bold;' + (style ? ' ' + style : '');

            return ['span', { ...rest, style: newStyle.trim() }, 0];
        },
        // Ensure it doesn't exclude other marks
        addOptions() {
            return {
                ...this.parent?.(),
                HTMLAttributes: {},
            };
        },
    });
    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-example'),
        extensions: [
            StarterKit.configure({
                textStyle: false,
                bold: false,
                marks: {
                    bold: false,
                },
            }),
            // Include the custom Bold extension
            CustomBold,
            TextStyle,
            Color,
            FontSizeTextStyle,
            FontFamily,
            Highlight,
            Underline,
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image,
            YouTube,
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleBoldButton').addEventListener('click', () => editor.chain().focus().toggleBold().run());
    document.getElementById('toggleItalicButton').addEventListener('click', () => editor.chain().focus().toggleItalic().run());
    document.getElementById('toggleUnderlineButton').addEventListener('click', () => editor.chain().focus().toggleUnderline().run());
    document.getElementById('toggleStrikeButton').addEventListener('click', () => editor.chain().focus().toggleStrike().run());
    document.getElementById('toggleHighlightButton').addEventListener('click', () => {
    const isHighlighted = editor.isActive('highlight');
    // when using toggleHighlight(), judge if is is already highlighted.
    editor.chain().focus().toggleHighlight({
        color: isHighlighted ? undefined : '#ffc078' // if is already highlighted，unset the highlight color
    }).run();
    });

    document.getElementById('toggleLinkButton').addEventListener('click', () => {
        const url = window.prompt('Enter image URL:', 'https://flowbite.com');
        editor.chain().focus().toggleLink({ href: url }).run();
    });
    document.getElementById('removeLinkButton').addEventListener('click', () => {
        editor.chain().focus().unsetLink().run()
    });
    document.getElementById('toggleCodeButton').addEventListener('click', () => {
        editor.chain().focus().toggleCode().run();
    })

    document.getElementById('toggleLeftAlignButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('left').run();
    });
    document.getElementById('toggleCenterAlignButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('center').run();
    });
    document.getElementById('toggleRightAlignButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('right').run();
    });
    document.getElementById('toggleListButton').addEventListener('click', () => {
       editor.chain().focus().toggleBulletList().run();
    });
    document.getElementById('toggleOrderedListButton').addEventListener('click', () => {
        editor.chain().focus().toggleOrderedList().run();
    });
    document.getElementById('toggleBlockquoteButton').addEventListener('click', () => {
        editor.chain().focus().toggleBlockquote().run();
    });
    document.getElementById('toggleHRButton').addEventListener('click', () => {
        editor.chain().focus().setHorizontalRule().run();
    });
    document.getElementById('addImageButton').addEventListener('click', () => {
        const url = window.prompt('Enter image URL:', 'https://placehold.co/600x400');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    });
    document.getElementById('addVideoButton').addEventListener('click', () => {
        const url = window.prompt('Enter YouTube URL:', 'https://www.youtube.com/watch?v=KaLxCiilHns');
        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: 640,
                height: 480,
            })
        }
    });

    // typography dropdown
    const typographyDropdown = FlowbiteInstances.getInstance('Dropdown', 'typographyDropdown');

    document.getElementById('toggleParagraphButton').addEventListener('click', () => {
        editor.chain().focus().setParagraph().run();
        typographyDropdown.hide();
    });
    
    document.querySelectorAll('[data-heading-level]').forEach((button) => {
        button.addEventListener('click', () => {
            const level = button.getAttribute('data-heading-level');
            editor.chain().focus().toggleHeading({ level: parseInt(level) }).run()
            typographyDropdown.hide();
        });
    });

    const textSizeDropdown = FlowbiteInstances.getInstance('Dropdown', 'textSizeDropdown');

    // Loop through all elements with the data-text-size attribute
    document.querySelectorAll('[data-text-size]').forEach((button) => {
        button.addEventListener('click', () => {
            const fontSize = button.getAttribute('data-text-size');

            // Apply the selected font size via pixels using the TipTap editor chain
            editor.chain().focus().setMark('textStyle', { fontSize }).run();

            // Hide the dropdown after selection
            textSizeDropdown.hide();
        });
    });

    // Listen for color picker changes
    const colorPicker = document.getElementById('color');
    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;

        // Apply the selected color to the selected text
        editor.chain().focus().setColor(selectedColor).run();
    })

    document.querySelectorAll('[data-hex-color]').forEach((button) => {
        button.addEventListener('click', () => {
            const selectedColor = button.getAttribute('data-hex-color');

            // Apply the selected color to the selected text
            editor.chain().focus().setColor(selectedColor).run();
        });
    });

    document.getElementById('reset-color').addEventListener('click', () => {
        editor.commands.unsetColor();
    })

    const fontFamilyDropdown = FlowbiteInstances.getInstance('Dropdown', 'fontFamilyDropdown');

    // Loop through all elements with the data-font-family attribute
    document.querySelectorAll('[data-font-family]').forEach((button) => {
        button.addEventListener('click', () => {
            const fontFamily = button.getAttribute('data-font-family');

            // Apply the selected font size via pixels using the TipTap editor chain
            editor.chain().focus().setFontFamily(fontFamily).run();

            // Hide the dropdown after selection
            fontFamilyDropdown.hide();
        });
    });
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                <button id="toggleBoldButton" data-tooltip-target="tooltip-bold" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/></svg>
                    <span class="sr-only">Bold</span>
                </button>
                <div id="tooltip-bold" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle bold
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleItalicButton" data-tooltip-target="tooltip-italic" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/></svg>
                    <span class="sr-only">Italic</span>
                </button>
                <div id="tooltip-italic" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle italic
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleUnderlineButton" data-tooltip-target="tooltip-underline" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/></svg>
                    <span class="sr-only">Underline</span>
                </button>
                <div id="tooltip-underline" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle underline
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleStrikeButton" data-tooltip-target="tooltip-strike" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/></svg>
                    <span class="sr-only">Strike</span>
                </button>
                <div id="tooltip-strike" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle strike
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleHighlightButton" data-tooltip-target="tooltip-highlight" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 20H5.5c-.27614 0-.5-.2239-.5-.5v-3c0-.2761.22386-.5.5-.5h13c.2761 0 .5.2239.5.5v3c0 .2761-.2239.5-.5.5H18m-6-1 1.42 1.8933c.04.0534.12.0534.16 0L15 19m-7-6 3.9072-9.76789c.0335-.08381.1521-.08381.1856 0L16 13m-8 0H7m1 0h1.5m6.5 0h-1.5m1.5 0h1m-7-3.00001h4"/></svg>
                    <span class="sr-only">Highlight</span>
                </button>
                <div id="tooltip-highlight" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle highlight
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleCodeButton" type="button" data-tooltip-target="tooltip-code" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/></svg>
                    <span class="sr-only">Code</span>
                </button>
                <div id="tooltip-code" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Format code
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleLinkButton" data-tooltip-target="tooltip-link" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/></svg>
                    <span class="sr-only">Link</span>
                </button>
                <div id="tooltip-link" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Add link
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="removeLinkButton" data-tooltip-target="tooltip-remove-link" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.2131 9.78732c-.6359-.63557-1.4983-.99259-2.3974-.99259-.89911 0-1.76143.35702-2.39741.99259l-3.4253 3.42528C4.35719 13.8485 4 14.7108 4 15.61c0 .8992.35719 1.7616.99299 2.3974.63598.6356 1.4983.9926 2.39742.9926.89912 0 1.76144-.357 2.39742-.9926l.32157-.3043m-.32157-4.4905c.63587.6358 1.49827.993 2.39747.993.8991 0 1.7615-.3572 2.3974-.993l3.4243-3.42528c.6358-.63585.993-1.49822.993-2.39741 0-.89919-.3572-1.76156-.993-2.39741C17.3712 4.357 16.509 4 15.6101 4c-.899 0-1.7612.357-2.397.9925l-1.0278.96062m7.3873 14.04678-1.7862-1.7862m0 0L16 16.4274m1.7864 1.7863 1.7862-1.7863m-1.7862 1.7863L16 20"/></svg>
                    <span class="sr-only">Remove link</span>
                </button>
                <div id="tooltip-remove-link" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Remove link
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleTextSizeButton" data-dropdown-toggle="textSizeDropdown" type="button" data-tooltip-target="tooltip-text-size" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"/></svg>
                    <span class="sr-only">Text size</span>
                </button>
                <div id="tooltip-text-size" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Text size
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="textSizeDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
                    <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="toggleTextSizeButton">
                        <li>
                            <button data-text-size="16px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">16px (Default) 
                            </button>
                        </li>
                        <li>
                            <button data-text-size="12px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-xs">12px (Tiny)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="14px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm">14px (Small)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="18px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-lg">18px (Lead)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="24px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-2xl">24px (Large)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="36px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-4xl">36px (Huge)
                            </button>
                        </li>
                    </ul>
                </div>
                <button id="toggleTextColorButton" data-dropdown-toggle="textColorDropdown" type="button" data-tooltip-target="tooltip-text-color" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m6.08169 15.9817 1.57292-4m-1.57292 4h-1.1m1.1 0h1.65m-.07708-4 2.72499-6.92967c.0368-.09379.1673-.09379.2042 0l2.725 6.92967m-5.65419 0h-.00607m.00607 0h5.65419m0 0 .6169 1.569m5.1104 4.453c0 1.1025-.8543 1.9963-1.908 1.9963s-1.908-.8938-1.908-1.9963c0-1.1026 1.908-4.1275 1.908-4.1275s1.908 3.0249 1.908 4.1275Z"/></svg>
                    <span class="sr-only">Text color</span>
                </button>
                <div id="tooltip-text-color" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Text color
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="textColorDropdown" class="z-10 hidden w-48 rounded-sm bg-neutral-primary-soft p-2 shadow-sm">
                    <div class="grid grid-cols-6 gap-2 group mb-3 items-center p-1.5 rounded hover:bg-neutral-tertiary">
                        <input type="color" id="color" value="#e66465" class="border-default-medium
                         border bg-neutral-tertiary rounded p-px px-1 w-full h-8 col-span-3" />
                        <label for="color" class="text-body text-xs font-medium col-span-3 group-hover:text-heading">Pick a color</label>
                    </div>
                    <div class="grid grid-cols-6 gap-1 mb-3">
                        <button type="button" data-hex-color="#1A56DB" style="background-color: #1A56DB" class="w-6 h-6 rounded-md"><span class="sr-only">Blue</span></button>
                        <button type="button" data-hex-color="#0E9F6E" style="background-color: #0E9F6E" class="w-6 h-6 rounded-md"><span class="sr-only">Green</span></button>
                        <button type="button" data-hex-color="#FACA15" style="background-color: #FACA15" class="w-6 h-6 rounded-md"><span class="sr-only">Yellow</span></button>
                        <button type="button" data-hex-color="#F05252" style="background-color: #F05252" class="w-6 h-6 rounded-md"><span class="sr-only">Red</span></button>
                        <button type="button" data-hex-color="#FF8A4C" style="background-color: #FF8A4C" class="w-6 h-6 rounded-md"><span class="sr-only">Orange</span></button>
                        <button type="button" data-hex-color="#0694A2" style="background-color: #0694A2" class="w-6 h-6 rounded-md"><span class="sr-only">Teal</span></button>
                        <button type="button" data-hex-color="#B4C6FC" style="background-color: #B4C6FC" class="w-6 h-6 rounded-md"><span class="sr-only">Light indigo</span></button>
                        <button type="button" data-hex-color="#8DA2FB" style="background-color: #8DA2FB" class="w-6 h-6 rounded-md"><span class="sr-only">Indigo</span></button>
                        <button type="button" data-hex-color="#5145CD" style="background-color: #5145CD" class="w-6 h-6 rounded-md"><span class="sr-only">Purple</span></button>
                        <button type="button" data-hex-color="#771D1D" style="background-color: #771D1D" class="w-6 h-6 rounded-md"><span class="sr-only">Brown</span></button>
                        <button type="button" data-hex-color="#FCD9BD" style="background-color: #FCD9BD" class="w-6 h-6 rounded-md"><span class="sr-only">Light orange</span></button>
                        <button type="button" data-hex-color="#99154B" style="background-color: #99154B" class="w-6 h-6 rounded-md"><span class="sr-only">Bordo</span></button>
                        <button type="button" data-hex-color="#7E3AF2" style="background-color: #7E3AF2" class="w-6 h-6 rounded-md"><span class="sr-only">Dark Purple</span></button>
                        <button type="button" data-hex-color="#CABFFD" style="background-color: #CABFFD" class="w-6 h-6 rounded-md"><span class="sr-only">Light</span></button>
                        <button type="button" data-hex-color="#D61F69" style="background-color: #D61F69" class="w-6 h-6 rounded-md"><span class="sr-only">Dark Pink</span></button>
                        <button type="button" data-hex-color="#F8B4D9" style="background-color: #F8B4D9" class="w-6 h-6 rounded-md"><span class="sr-only">Pink</span></button>
                        <button type="button" data-hex-color="#F6C196" style="background-color: #F6C196" class="w-6 h-6 rounded-md"><span class="sr-only">Cream</span></button>
                        <button type="button" data-hex-color="#A4CAFE" style="background-color: #A4CAFE" class="w-6 h-6 rounded-md"><span class="sr-only">Light Blue</span></button>
                        <button type="button" data-hex-color="#5145CD" style="background-color: #5145CD" class="w-6 h-6 rounded-md"><span class="sr-only">Dark Blue</span></button>
                        <button type="button" data-hex-color="#B43403" style="background-color: #B43403" class="w-6 h-6 rounded-md"><span class="sr-only">Orange Brown</span></button>
                        <button type="button" data-hex-color="#FCE96A" style="background-color: #FCE96A" class="w-6 h-6 rounded-md"><span class="sr-only">Light Yellow</span></button>
                        <button type="button" data-hex-color="#1E429F" style="background-color: #1E429F" class="w-6 h-6 rounded-md"><span class="sr-only">Navy Blue</span></button>
                        <button type="button" data-hex-color="#768FFD" style="background-color: #768FFD" class="w-6 h-6 rounded-md"><span class="sr-only">Light Purple</span></button>
                        <button type="button" data-hex-color="#BCF0DA" style="background-color: #BCF0DA" class="w-6 h-6 rounded-md"><span class="sr-only">Light Green</span></button>
                        <button type="button" data-hex-color="#EBF5FF" style="background-color: #EBF5FF" class="w-6 h-6 rounded-md"><span class="sr-only">Sky Blue</span></button>
                        <button type="button" data-hex-color="#16BDCA" style="background-color: #16BDCA" class="w-6 h-6 rounded-md"><span class="sr-only">Cyan</span></button>
                        <button type="button" data-hex-color="#E74694" style="background-color: #E74694" class="w-6 h-6 rounded-md"><span class="sr-only">Pink</span></button>
                        <button type="button" data-hex-color="#83B0ED" style="background-color: #83B0ED" class="w-6 h-6 rounded-md"><span class="sr-only">Darker Sky Blue</span></button>
                        <button type="button" data-hex-color="#03543F" style="background-color: #03543F" class="w-6 h-6 rounded-md"><span class="sr-only">Forest Green</span></button>
                        <button type="button" data-hex-color="#111928" style="background-color: #111928" class="w-6 h-6 rounded-md"><span class="sr-only">Black</span></button>
                        <button type="button" data-hex-color="#4B5563" style="background-color: #4B5563" class="w-6 h-6 rounded-md"><span class="sr-only">Stone</span></button>
                        <button type="button" data-hex-color="#6B7280" style="background-color: #6B7280" class="w-6 h-6 rounded-md"><span class="sr-only">Gray</span></button>
                        <button type="button" data-hex-color="#D1D5DB" style="background-color: #D1D5DB" class="w-6 h-6 rounded-md"><span class="sr-only">Light Gray</span></button>
                        <button type="button" data-hex-color="#F3F4F6" style="background-color: #F3F4F6" class="w-6 h-6 rounded-md"><span class="sr-only">Cloud Gray</span></button>
                        <button type="button" data-hex-color="#F3F4F6" style="background-color: #F3F4F6" class="w-6 h-6 rounded-md"><span class="sr-only">Cloud Gray</span></button>
                        <button type="button" data-hex-color="#F9FAFB" style="background-color: #F9FAFB" class="w-6 h-6 rounded-md"><span class="sr-only">Heaven Gray</span></button>
                    </div>
                    <button type="button" id="reset-color" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none w-full">Reset color</button>
                </div>
                <button id="toggleFontFamilyButton" data-dropdown-toggle="fontFamilyDropdown" type="button" data-tooltip-target="tooltip-font-family" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.5785 19 4.2979-10.92966c.0369-.09379.1674-.09379.2042 0L19.3785 19m-8.8 0H9.47851m1.09999 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.9846h4.4M3 16l1.56685-3.9846m0 0 2.73102-6.94506c.03688-.09379.16738-.09379.20426 0l2.50367 6.94506H4.56685Z"/></svg>
                    <span class="sr-only">Font family</span>
                </button>
                <div id="tooltip-font-family" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Font Family
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="fontFamilyDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-48">
                    <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="toggleFontFamilyButton">
                        <li>
                            <button data-font-family="Inter, ui-sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm">Default
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Arial, sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Arial, sans-serif;">Arial
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Courier New', monospace" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Courier New', monospace;">Courier New
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Georgia, serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Georgia, serif;">Georgia
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Lucida Sans Unicode', sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Lucida Sans Unicode', sans-serif;">Lucida Sans Unicode
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Tahoma, sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Tahoma, sans-serif;">Tahoma
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Times New Roman', serif;" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Times New Roman', serif;">Times New Roman
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Trebuchet MS', sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Trebuchet MS', sans-serif;">Trebuchet MS
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Verdana, sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Verdana, sans-serif;">Verdana
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="px-1">
                    <span class="block w-px h-4 bg-neutral-quaternary"></span>
                </div>
                <button id="toggleLeftAlignButton" type="button" data-tooltip-target="tooltip-left-align" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/></svg>
                    <span class="sr-only">Align left</span>
                </button>
                <div id="tooltip-left-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Align left
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleCenterAlignButton" type="button" data-tooltip-target="tooltip-center-align" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12"/></svg>
                    <span class="sr-only">Align center</span>
                </button>
                <div id="tooltip-center-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Align center
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleRightAlignButton" type="button" data-tooltip-target="tooltip-right-align" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6h-8m8 4H6m12 4h-8m8 4H6"/></svg>
                    <span class="sr-only">Align right</span>
                </button>
                <div id="tooltip-right-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Align right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
    </div>
    <div class="flex items-center gap-2 pt-2 flex-wrap">
        <button id="typographyDropdownButton" data-dropdown-toggle="typographyDropdown" class="flex items-center justify-center text-body bg-neutral-primary-strong border border-default-strong hover:bg-neutral-secondary-strongest hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none" type="button">
            Format
            <svg class="w-3.5 h-3.5 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div class="ps-1.5">
            <span class="block w-px h-4 bg-neutral-quaternary"></span>
        </div>
        <!-- Heading Dropdown -->
        <div id="typographyDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
            <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="typographyDropdownButton">
                <li>
                    <button id="toggleParagraphButton" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Paragraph 
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">0</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button data-heading-level="1" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 1 
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">1</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="2" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 2 
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">2</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="3" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 3
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">3</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="4" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 4
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">4</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button data-heading-level="5" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 5
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">5</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="6" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 6
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">6</kbd>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <button id="addImageButton" type="button" data-tooltip-target="tooltip-image" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg>
                <span class="sr-only">Add image</span>
            </button>
            <div id="tooltip-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add image
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="addVideoButton" type="button" data-tooltip-target="tooltip-video" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"/></svg>
                <span class="sr-only">Add video</span>
            </button>
            <div id="tooltip-video" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add video
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="toggleListButton" type="button" data-tooltip-target="tooltip-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/></svg>
                <span class="sr-only">Toggle list</span>
            </button>
            <div id="tooltip-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Toggle list
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="toggleOrderedListButton" type="button" data-tooltip-target="tooltip-ordered-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"/></svg>
            <span class="sr-only">Toggle ordered list</span>
        </button>
        <div id="tooltip-ordered-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Toggle ordered list
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="toggleBlockquoteButton" type="button" data-tooltip-target="tooltip-blockquote-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"/></svg>
            <span class="sr-only">Toggle blockquote</span>
        </button>
        <div id="tooltip-blockquote-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Toggle blockquote
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="toggleHRButton" type="button" data-tooltip-target="tooltip-hr-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 12h14"/><path stroke="currentColor" stroke-linecap="round" d="M6 9.5h12m-12-2h12m-12-2h12m-12 13h12m-12-2h12m-12-2h12"/></svg>
            <span class="sr-only">Toggle Horizontal Rule</span>
        </button>
        <div id="tooltip-hr-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Toggle Horizontal Rule
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
<div class="px-4 py-2 bg-neutral-primary rounded-b-lg">
    <label for="wysiwyg-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>
{{< /example >}}

Notice: there is a <a href="https://github.com/ueberdosis/tiptap/issues/577" target="_blank" rel="nofollow noreferrer">known issue from TipTap</a> when splitting blocks (ie. using enter to create break lines) and using the bullet list item. A quickfix for `v2.6.6` when using CDN is to match the import statements:

{{< code lang="html" file="wysiwyg.html" icon="file" >}}
<script type="importmap">
    {
        "imports": {
            "https://esm.sh/v135/prosemirror-model@1.22.3/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.19.3/es2022/prosemirror-model.mjs", 
            "https://esm.sh/v135/prosemirror-model@1.22.1/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.19.3/es2022/prosemirror-model.mjs"
        }
    }
</script>
{{< /code >}}

If you're importing the package with Yarn or NPM then you need to add this in your `package.json` file:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
// when using Yarn
"resolutions": {
    "prosemirror-model": "1.19.3"
}

// when using NPM
"overrides": {
    "prosemirror-model": "1.19.3"
}
{{< /code >}}

We recommend later checking the Tip Tap library for a proper update to prevent this quickfix in the future.

## Text formatting

Use this example of a WYSIWYG text editor to enable typography styling, formatting and marking such as underline, bold, italic, strikethrough, code, highlight and also selecting text size, color, font family and more using the utility classes from Tailwind CSS.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Highlight from 'https://esm.sh/@tiptap/extension-highlight@2.6.6';
import Underline from 'https://esm.sh/@tiptap/extension-underline@2.6.6';
import Subscript from 'https://esm.sh/@tiptap/extension-subscript@2.6.6';
import Superscript from 'https://esm.sh/@tiptap/extension-superscript@2.6.6';
import TextStyle from 'https://esm.sh/@tiptap/extension-text-style@2.6.6';
import FontFamily from 'https://esm.sh/@tiptap/extension-font-family@2.6.6';
import { Color } from 'https://esm.sh/@tiptap/extension-color@2.6.6';
import Bold from 'https://esm.sh/@tiptap/extension-bold@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-text-example")) {

    const FontSizeTextStyle = TextStyle.extend({
        addAttributes() {
            return {
            fontSize: {
                default: null,
                parseHTML: element => element.style.fontSize,
                renderHTML: attributes => {
                if (!attributes.fontSize) {
                    return {};
                }
                return { style: 'font-size: ' + attributes.fontSize };
                },
            },
            };
        },
    });
    const CustomBold = Bold.extend({
    // Override the renderHTML method
    renderHTML({ HTMLAttributes }) {
    return ['span', { ...HTMLAttributes, style: 'font-weight: bold;' }, 0];
    },
    // Ensure it doesn't exclude other marks
    excludes: '',
    });

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-text-example'),
          extensions: [
            StarterKit.configure({
                textStyle: false,
                bold: false,
                marks: {
                    bold: false,
                },
            }),
            // Include the custom Bold extension
            CustomBold,
            Highlight,
            Underline,
            Subscript,
            Superscript,
            TextStyle,
            FontSizeTextStyle,
            Color,
            FontFamily
        ],
        content: '<p>Flowbite React is an <strong>open-source library of UI components</strong> built using React and Tailwind CSS. It supports dark mode, a Figma design system, and more.</p><p>It includes essential components for web apps like buttons, dropdowns, navigation bars, modals, datepickers, and charts, all optimized for React.</p><p>Example button component in Flowbite React:</p><code>import &#123; Button &#125; from &#39;flowbite-react&#39;; &lt;Button color&#x3D;&quot;blue&quot;&gt;Default&lt;/Button&gt;</code><p>These components can also be easily customized using the theme props from the Flowbite Docs and allows you to add your own Tailwind CSS utility classes to override the default styles.</p><p>Explore more components and props values in the Flowbite Docs.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleBoldButton').addEventListener('click', () => editor.chain().focus().toggleBold().run());
    document.getElementById('toggleItalicButton').addEventListener('click', () => editor.chain().focus().toggleItalic().run());
    document.getElementById('toggleUnderlineButton').addEventListener('click', () => editor.chain().focus().toggleUnderline().run());
    document.getElementById('toggleStrikeButton').addEventListener('click', () => editor.chain().focus().toggleStrike().run());
    document.getElementById('toggleSubscriptButton').addEventListener('click', () => editor.chain().focus().toggleSubscript().run());
    document.getElementById('toggleSuperscriptButton').addEventListener('click', () => editor.chain().focus().toggleSuperscript().run());
    document.getElementById('toggleHighlightButton').addEventListener('click', () => {
    const isHighlighted = editor.isActive('highlight');
    // when using toggleHighlight(), judge if is is already highlighted.
    editor.chain().focus().toggleHighlight({
        color: isHighlighted ? undefined : '#ffc078' // if is already highlighted，unset the highlight color
    }).run();
    });

    document.getElementById('toggleCodeButton').addEventListener('click', () => {
        editor.chain().focus().toggleCode().run();
    });

    const textSizeDropdown = FlowbiteInstances.getInstance('Dropdown', 'textSizeDropdown');

    // Loop through all elements with the data-text-size attribute
    document.querySelectorAll('[data-text-size]').forEach((button) => {
        button.addEventListener('click', () => {
            const fontSize = button.getAttribute('data-text-size');

            // Apply the selected font size via pixels using the TipTap editor chain
            editor.chain().focus().setMark('textStyle', { fontSize }).run();

            // Hide the dropdown after selection
            textSizeDropdown.hide();
        });
    });

    // Listen for color picker changes
    const colorPicker = document.getElementById('color');
    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;

        // Apply the selected color to the selected text
        editor.chain().focus().setColor(selectedColor).run();
    })

    document.querySelectorAll('[data-hex-color]').forEach((button) => {
        button.addEventListener('click', () => {
            const selectedColor = button.getAttribute('data-hex-color');

            // Apply the selected color to the selected text
            editor.chain().focus().setColor(selectedColor).run();
        });
    });

    document.getElementById('reset-color').addEventListener('click', () => {
        editor.commands.unsetColor();
    })

    const fontFamilyDropdown = FlowbiteInstances.getInstance('Dropdown', 'fontFamilyDropdown');

    // Loop through all elements with the data-font-family attribute
    document.querySelectorAll('[data-font-family]').forEach((button) => {
        button.addEventListener('click', () => {
            const fontFamily = button.getAttribute('data-font-family');

            // Apply the selected font size via pixels using the TipTap editor chain
            editor.chain().focus().setFontFamily(fontFamily).run();

            // Hide the dropdown after selection
            fontFamilyDropdown.hide();
        });
    });

    }
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                <button id="toggleBoldButton" data-tooltip-target="tooltip-bold" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/></svg>
                    <span class="sr-only">Bold</span>
                </button>
                <div id="tooltip-bold" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle bold
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleItalicButton" data-tooltip-target="tooltip-italic" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/></svg>
                    <span class="sr-only">Italic</span>
                </button>
                <div id="tooltip-italic" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle italic
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleUnderlineButton" data-tooltip-target="tooltip-underline" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/></svg>
                    <span class="sr-only">Underline</span>
                </button>
                <div id="tooltip-underline" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle underline
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleStrikeButton" data-tooltip-target="tooltip-strike" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/></svg>
                    <span class="sr-only">Strike</span>
                </button>
                <div id="tooltip-strike" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle strike
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleSubscriptButton" data-tooltip-target="tooltip-subscript" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20h-4v-.5c1.0989-1.0329 3.75-2.5 3.75-3.5v-1.0001c0-.5523-.4477-.9999-1-.9999H17c-.5522 0-1 .4477-1 1M4.00004 4l9.12206 11.3932m0-11.3932L4 15.3932"/></svg>
                    <span class="sr-only">Subscript</span>
                </button>
                <div id="tooltip-subscript" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle subscript
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleSuperscriptButton" data-tooltip-target="tooltip-superscript" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10h-4v-.5C17.0989 8.46711 19.75 7 19.75 6V4.99989c0-.55228-.4477-.99989-1-.99989H17c-.5523 0-1 .44772-1 1M4 7.30341l9.1221 11.39319m0-11.39319L4 18.6966"/></svg>
                    <span class="sr-only">Superscript</span>
                </button>
                <div id="tooltip-superscript" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle superscript
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleHighlightButton" data-tooltip-target="tooltip-highlight" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 20H5.5c-.27614 0-.5-.2239-.5-.5v-3c0-.2761.22386-.5.5-.5h13c.2761 0 .5.2239.5.5v3c0 .2761-.2239.5-.5.5H18m-6-1 1.42 1.8933c.04.0534.12.0534.16 0L15 19m-7-6 3.9072-9.76789c.0335-.08381.1521-.08381.1856 0L16 13m-8 0H7m1 0h1.5m6.5 0h-1.5m1.5 0h1m-7-3.00001h4"/></svg>
                    <span class="sr-only">Highlight</span>
                </button>
                <div id="tooltip-highlight" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Toggle highlight
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleCodeButton" type="button" data-tooltip-target="tooltip-code" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/></svg>
                    <span class="sr-only">Code</span>
                </button>
                <div id="tooltip-code" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Format code
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleTextSizeButton" data-dropdown-toggle="textSizeDropdown" type="button" data-tooltip-target="tooltip-text-size" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"/></svg>
                    <span class="sr-only">Text size</span>
                </button>
                <div id="tooltip-text-size" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Text size
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="textSizeDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
                    <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="toggleTextSizeButton">
                        <li>
                            <button data-text-size="16px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm">16px (Default) 
                            </button>
                        </li>
                        <li>
                            <button data-text-size="12px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-xs">12px (Tiny)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="14px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm">14px (Small)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="18px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-lg">18px (Lead)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="24px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-2xl">24px (Large)
                            </button>
                        </li>
                        <li>
                            <button data-text-size="36px" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-4xl">36px (Huge)
                            </button>
                        </li>
                    </ul>
                </div>
                <button id="toggleTextColorButton" data-dropdown-toggle="textColorDropdown" type="button" data-tooltip-target="tooltip-text-color" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m6.08169 15.9817 1.57292-4m-1.57292 4h-1.1m1.1 0h1.65m-.07708-4 2.72499-6.92967c.0368-.09379.1673-.09379.2042 0l2.725 6.92967m-5.65419 0h-.00607m.00607 0h5.65419m0 0 .6169 1.569m5.1104 4.453c0 1.1025-.8543 1.9963-1.908 1.9963s-1.908-.8938-1.908-1.9963c0-1.1026 1.908-4.1275 1.908-4.1275s1.908 3.0249 1.908 4.1275Z"/></svg>
                    <span class="sr-only">Text color</span>
                </button>
                <div id="tooltip-text-color" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Text color
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="textColorDropdown" class="z-10 hidden w-48 rounded-sm bg-neutral-primary-soft p-2 shadow-sm">
                    <div class="grid grid-cols-6 gap-2 group mb-3 items-center p-1.5 rounded hover:bg-neutral-tertiary">
                        <input type="color" id="color" value="#e66465" class="border-default-medium
                         border bg-neutral-tertiary rounded p-px px-1 w-full h-8 col-span-3" />
                        <label for="color" class="text-body text-xs font-medium col-span-3 group-hover:text-heading">Pick a color</label>
                    </div>
                    <div class="grid grid-cols-6 gap-1 mb-3">
                        <button type="button" data-hex-color="#1A56DB" style="background-color: #1A56DB" class="w-6 h-6 rounded-md"><span class="sr-only">Blue</span></button>
                        <button type="button" data-hex-color="#0E9F6E" style="background-color: #0E9F6E" class="w-6 h-6 rounded-md"><span class="sr-only">Green</span></button>
                        <button type="button" data-hex-color="#FACA15" style="background-color: #FACA15" class="w-6 h-6 rounded-md"><span class="sr-only">Yellow</span></button>
                        <button type="button" data-hex-color="#F05252" style="background-color: #F05252" class="w-6 h-6 rounded-md"><span class="sr-only">Red</span></button>
                        <button type="button" data-hex-color="#FF8A4C" style="background-color: #FF8A4C" class="w-6 h-6 rounded-md"><span class="sr-only">Orange</span></button>
                        <button type="button" data-hex-color="#0694A2" style="background-color: #0694A2" class="w-6 h-6 rounded-md"><span class="sr-only">Teal</span></button>
                        <button type="button" data-hex-color="#B4C6FC" style="background-color: #B4C6FC" class="w-6 h-6 rounded-md"><span class="sr-only">Light indigo</span></button>
                        <button type="button" data-hex-color="#8DA2FB" style="background-color: #8DA2FB" class="w-6 h-6 rounded-md"><span class="sr-only">Indigo</span></button>
                        <button type="button" data-hex-color="#5145CD" style="background-color: #5145CD" class="w-6 h-6 rounded-md"><span class="sr-only">Purple</span></button>
                        <button type="button" data-hex-color="#771D1D" style="background-color: #771D1D" class="w-6 h-6 rounded-md"><span class="sr-only">Brown</span></button>
                        <button type="button" data-hex-color="#FCD9BD" style="background-color: #FCD9BD" class="w-6 h-6 rounded-md"><span class="sr-only">Light orange</span></button>
                        <button type="button" data-hex-color="#99154B" style="background-color: #99154B" class="w-6 h-6 rounded-md"><span class="sr-only">Bordo</span></button>
                        <button type="button" data-hex-color="#7E3AF2" style="background-color: #7E3AF2" class="w-6 h-6 rounded-md"><span class="sr-only">Dark Purple</span></button>
                        <button type="button" data-hex-color="#CABFFD" style="background-color: #CABFFD" class="w-6 h-6 rounded-md"><span class="sr-only">Light</span></button>
                        <button type="button" data-hex-color="#D61F69" style="background-color: #D61F69" class="w-6 h-6 rounded-md"><span class="sr-only">Dark Pink</span></button>
                        <button type="button" data-hex-color="#F8B4D9" style="background-color: #F8B4D9" class="w-6 h-6 rounded-md"><span class="sr-only">Pink</span></button>
                        <button type="button" data-hex-color="#F6C196" style="background-color: #F6C196" class="w-6 h-6 rounded-md"><span class="sr-only">Cream</span></button>
                        <button type="button" data-hex-color="#A4CAFE" style="background-color: #A4CAFE" class="w-6 h-6 rounded-md"><span class="sr-only">Light Blue</span></button>
                        <button type="button" data-hex-color="#5145CD" style="background-color: #5145CD" class="w-6 h-6 rounded-md"><span class="sr-only">Dark Blue</span></button>
                        <button type="button" data-hex-color="#B43403" style="background-color: #B43403" class="w-6 h-6 rounded-md"><span class="sr-only">Orange Brown</span></button>
                        <button type="button" data-hex-color="#FCE96A" style="background-color: #FCE96A" class="w-6 h-6 rounded-md"><span class="sr-only">Light Yellow</span></button>
                        <button type="button" data-hex-color="#1E429F" style="background-color: #1E429F" class="w-6 h-6 rounded-md"><span class="sr-only">Navy Blue</span></button>
                        <button type="button" data-hex-color="#768FFD" style="background-color: #768FFD" class="w-6 h-6 rounded-md"><span class="sr-only">Light Purple</span></button>
                        <button type="button" data-hex-color="#BCF0DA" style="background-color: #BCF0DA" class="w-6 h-6 rounded-md"><span class="sr-only">Light Green</span></button>
                        <button type="button" data-hex-color="#EBF5FF" style="background-color: #EBF5FF" class="w-6 h-6 rounded-md"><span class="sr-only">Sky Blue</span></button>
                        <button type="button" data-hex-color="#16BDCA" style="background-color: #16BDCA" class="w-6 h-6 rounded-md"><span class="sr-only">Cyan</span></button>
                        <button type="button" data-hex-color="#E74694" style="background-color: #E74694" class="w-6 h-6 rounded-md"><span class="sr-only">Pink</span></button>
                        <button type="button" data-hex-color="#83B0ED" style="background-color: #83B0ED" class="w-6 h-6 rounded-md"><span class="sr-only">Darker Sky Blue</span></button>
                        <button type="button" data-hex-color="#03543F" style="background-color: #03543F" class="w-6 h-6 rounded-md"><span class="sr-only">Forest Green</span></button>
                        <button type="button" data-hex-color="#111928" style="background-color: #111928" class="w-6 h-6 rounded-md"><span class="sr-only">Black</span></button>
                        <button type="button" data-hex-color="#4B5563" style="background-color: #4B5563" class="w-6 h-6 rounded-md"><span class="sr-only">Stone</span></button>
                        <button type="button" data-hex-color="#6B7280" style="background-color: #6B7280" class="w-6 h-6 rounded-md"><span class="sr-only">Gray</span></button>
                        <button type="button" data-hex-color="#D1D5DB" style="background-color: #D1D5DB" class="w-6 h-6 rounded-md"><span class="sr-only">Light Gray</span></button>
                        <button type="button" data-hex-color="#F3F4F6" style="background-color: #F3F4F6" class="w-6 h-6 rounded-md"><span class="sr-only">Cloud Gray</span></button>
                        <button type="button" data-hex-color="#F3F4F6" style="background-color: #F3F4F6" class="w-6 h-6 rounded-md"><span class="sr-only">Cloud Gray</span></button>
                        <button type="button" data-hex-color="#F9FAFB" style="background-color: #F9FAFB" class="w-6 h-6 rounded-md"><span class="sr-only">Heaven Gray</span></button>
                    </div>
                    <button type="button" id="reset-color" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none w-full">Reset color</button>
                </div>
                <button id="toggleFontFamilyButton" data-dropdown-toggle="fontFamilyDropdown" type="button" data-tooltip-target="tooltip-font-family" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.6 19 4.298-10.93a.11.11 0 0 1 .204 0L19.4 19m-8.8 0H9.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3.021 16l1.567-3.985m0 0L7.32 5.07a.11.11 0 0 1 .205 0l2.503 6.945h-5.44Z"/></svg>
                    <span class="sr-only">Font family</span>
                </button>
                <div id="tooltip-font-family" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Font Family
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="fontFamilyDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-48">
                    <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="toggleFontFamilyButton">
                        <li>
                            <button data-font-family="Inter, ui-sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm">Default
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Arial, sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Arial, sans-serif;">Arial
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Courier New', monospace" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Courier New', monospace;">Courier New
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Georgia, serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Georgia, serif;">Georgia
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Lucida Sans Unicode', sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Lucida Sans Unicode', sans-serif;">Lucida Sans Unicode
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Tahoma, sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Tahoma, sans-serif;">Tahoma
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Times New Roman', serif;" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Times New Roman', serif;">Times New Roman
                            </button>
                        </li>
                        <li>
                            <button data-font-family="'Trebuchet MS', sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: 'Trebuchet MS', sans-serif;">Trebuchet MS
                            </button>
                        </li>
                        <li>
                            <button data-font-family="Verdana, sans-serif" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded text-sm" style="font-family: Verdana, sans-serif;">Verdana
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-text-example" class="sr-only">Write comment</label>
    <div id="wysiwyg-text-example" class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>
{{< /example >}}

## Text alignment

Enable text alignment to the left, center, right, and justify for the content inside of the WYSIWYG component.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Highlight from 'https://esm.sh/@tiptap/extension-highlight@2.6.6';
import Underline from 'https://esm.sh/@tiptap/extension-underline@2.6.6';
import Link from 'https://esm.sh/@tiptap/extension-link@2.6.6';
import TextAlign from 'https://esm.sh/@tiptap/extension-text-align@2.6.6';
import Image from 'https://esm.sh/@tiptap/extension-image@2.6.6';
import YouTube from 'https://esm.sh/@tiptap/extension-youtube@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-alignment-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-alignment-example'),
        extensions: [
            StarterKit,
            Highlight,
            Underline,
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image,
            YouTube
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleLeftAlignButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('left').run();
    });
    document.getElementById('toggleCenterAlignButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('center').run();
    });
    document.getElementById('toggleRightAlignButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('right').run();
    });
    document.getElementById('toggleJustifyButton').addEventListener('click', () => {
        editor.chain().focus().setTextAlign('justify').run();
    });
    }
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                <button id="toggleLeftAlignButton" type="button" data-tooltip-target="tooltip-left-align" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/></svg>
                    <span class="sr-only">Align left</span>
                </button>
                <div id="tooltip-left-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Align left
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleCenterAlignButton" type="button" data-tooltip-target="tooltip-center-align" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12"/></svg>
                    <span class="sr-only">Align center</span>
                </button>
                <div id="tooltip-center-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Align center
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleRightAlignButton" type="button" data-tooltip-target="tooltip-right-align" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6h-8m8 4H6m12 4h-8m8 4H6"/>
                    </svg>
                    <span class="sr-only">Align right</span>
                </button>
                <div id="tooltip-right-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Align right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleJustifyButton" type="button" data-tooltip-target="tooltip-justify" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
                    </svg>
                    <span class="sr-only">Justify</span>
                </button>
                <div id="tooltip-justify" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Justify text
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-alignment-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-alignment-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>
{{< /example >}}

## Typography elements

Use this example to create typography elements like bullet lists, ordered lists, blockquotes, horizontal rules, paragraphs, headings, code blocks based on Tailwind CSS utility classees and the Flowbite API.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-typography-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-typography-example'),
        extensions: [
            StarterKit
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><ul><li>Over 600+ open-source UI components</li><li>Supports dark mode and RTL</li><li>Available in React, Vue, Svelte frameworks</li></ul><p>Here is an example of a button component:</p><pre><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code></pre><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleListButton').addEventListener('click', () => {
       editor.chain().focus().toggleBulletList().run();
    });
    document.getElementById('toggleOrderedListButton').addEventListener('click', () => {
        editor.chain().focus().toggleOrderedList().run();
    });
    document.getElementById('toggleBlockquoteButton').addEventListener('click', () => {
        editor.chain().focus().toggleBlockquote().run();
    });
    document.getElementById('toggleHRButton').addEventListener('click', () => {
        editor.chain().focus().setHorizontalRule().run();
    });
    document.getElementById('toggleCodeBlockButton').addEventListener('click', () => {
        editor.chain().focus().toggleCodeBlock().run();
    });

    // typography dropdown
    const typographyDropdown = FlowbiteInstances.getInstance('Dropdown', 'typographyDropdown');

    document.getElementById('toggleParagraphButton').addEventListener('click', () => {
        editor.chain().focus().setParagraph().run();
        typographyDropdown.hide();
    });
    
    document.querySelectorAll('[data-heading-level]').forEach((button) => {
        button.addEventListener('click', () => {
            const level = button.getAttribute('data-heading-level');
            editor.chain().focus().toggleHeading({ level: parseInt(level) }).run()
            typographyDropdown.hide();
        });
    });
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
    <div class="flex items-center gap-2">
        <button id="typographyDropdownButton" data-dropdown-toggle="typographyDropdown" class="flex items-center justify-center text-body bg-neutral-primary-strong border border-default-strong hover:bg-neutral-secondary-strongest hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-xs px-3 py-1.5 focus:outline-none" type="button">
            Format
            <svg class="w-3.5 h-3.5 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div class="ps-1.5">
            <span class="block w-px h-4 bg-neutral-tertiary"></span>
        </div>
        <!-- Heading Dropdown -->
        <div id="typographyDropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-72">
            <ul class="p-2 space-y-1 text-sm text-body font-medium" aria-labelledby="typographyDropdownButton">
                <li>
                    <button id="toggleParagraphButton" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Paragraph 
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">0</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button data-heading-level="1" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 1 
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">1</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="2" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 2 
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">2</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="3" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 3
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">3</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="4" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 4
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">4</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button data-heading-level="5" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 5
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">5</kbd>
                        </div>
                    </button>
                </li>
                <li>
                    <button  data-heading-level="6" type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Heading 6
                        <div class="space-x-1.5 ms-4">
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Cmd</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">Alt</kbd>
                            <kbd class="px-2 py-1 text-xs font-semibold text-body bg-neutral-tertiary-medium border border-default-strong rounded">6</kbd>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
            <button id="toggleCodeBlockButton" type="button" data-tooltip-target="tooltip-code-block" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                </svg>
                <span class="sr-only">Toggle code block</span>
            </button>
            <div id="tooltip-code-block" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Toggle code block
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="toggleListButton" type="button" data-tooltip-target="tooltip-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
                </svg>
                <span class="sr-only">Toggle list</span>
            </button>
            <div id="tooltip-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Toggle list
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="toggleOrderedListButton" type="button" data-tooltip-target="tooltip-ordered-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"/>
                </svg>
                <span class="sr-only">Create ordered list</span>
            </button>
            <div id="tooltip-ordered-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Toggle ordered list
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="toggleBlockquoteButton" type="button" data-tooltip-target="tooltip-blockquote-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" clip-rule="evenodd"/>
                </svg>
                <span class="sr-only">Toggle blockquote</span>
            </button>
            <div id="tooltip-blockquote-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Toggle blockquote
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="toggleHRButton" type="button" data-tooltip-target="tooltip-hr-list" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 12h14"/>
                    <path stroke="currentColor" stroke-linecap="round" d="M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12"/>
                </svg>
                <span class="sr-only">Toggle Horizontal Rule</span>
            </button>
            <div id="tooltip-hr-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Toggle Horizontal Rule
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-typography-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-typography-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>
{{< /example >}}

## Configuring links

Use this example to add and remove anchor links for the content inside of the WYSIWYG text editor.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Link from 'https://esm.sh/@tiptap/extension-link@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-links-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-links-example'),
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            })
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleLinkButton').addEventListener('click', () => {
        const url = window.prompt('Enter image URL:', 'https://flowbite.com');
        editor.chain().focus().toggleLink({ href: url }).run();
    });
    document.getElementById('removeLinkButton').addEventListener('click', () => {
        editor.chain().focus().unsetLink().run()
    });
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                <button id="toggleLinkButton" data-tooltip-target="tooltip-link" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                    </svg>
                    <span class="sr-only">Link</span>
                </button>
                <div id="tooltip-link" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Add link
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="removeLinkButton" data-tooltip-target="tooltip-remove-link" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1m7.4 14-1.8-1.8m0 0L16 16.4m1.8 1.8 1.8-1.8m-1.8 1.8L16 20"/>
                    </svg>
                    <span class="sr-only">Remove link</span>
                </button>
                <div id="tooltip-remove-link" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Remove link
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-links-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-links-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>
{{< /example >}}

## Using images

Use this example to learn how to add images inside of the WYSIWYG text editor and configure settings such as the image URL, image alt attribute which is important for SEO and accessibility and the image title.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Image from 'https://esm.sh/@tiptap/extension-image@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-images-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-images-example'),
        extensions: [
            StarterKit,
            Image
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><img src="https://placehold.co/600x400" contenteditable="false" draggable="true"><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('addImageButton').addEventListener('click', () => {
        const url = window.prompt('Enter image URL:', 'https://placehold.co/600x400');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    });

    const advancedImageModal = FlowbiteInstances.getInstance('Modal', 'advanced-image-modal');
    
    document.getElementById('advancedImageForm').addEventListener('submit', (e) => {

        e.preventDefault();
        
        const imageUrl = document.getElementById('URL').value;
        const imageAlt = document.getElementById('alt').value;
        const imageTitle = document.getElementById('title').value;

        if (imageUrl) {
            editor.chain().focus().setImage({ src: imageUrl, alt: imageAlt ? imageAlt : '', title: imageTitle ? imageTitle: '' }).run();
            document.getElementById('advancedImageForm').reset();
            advancedImageModal.hide();
        }
    });
    
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
    <div class="flex items-center gap-2">
        <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
            <button id="addImageButton" type="button" data-tooltip-target="tooltip-image" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"/>
                </svg>
                <span class="sr-only">Add image</span>
            </button>
            <div id="tooltip-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add image
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-tooltip-target="tooltip-advanced-image" data-modal-target="advanced-image-modal" data-modal-toggle="advanced-image-modal" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm.394 9.553a1 1 0 0 0-1.817.062l-2.5 6A1 1 0 0 0 8 19h8a1 1 0 0 0 .894-1.447l-2-4A1 1 0 0 0 13.2 13.4l-.53.706-1.276-2.553ZM13 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"/>
                </svg>
                <span class="sr-only">Insert advanced image</span>
            </button>
            <div id="tooltip-advanced-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Image with settings
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-images-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-images-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>

<!-- Main modal -->
<div id="advanced-image-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-sm max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <!-- Modal header -->
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 class="text-lg font-medium text-heading">
                    Insert advanced image
                </h3>
                <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="advanced-image-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form action="#">
                <div class="grid gap-4 grid-cols-2 py-4 md:py-6">
                    <div class="col-span-2">
                        <label for="image-url" class="block mb-2.5 text-sm font-medium text-heading">Image URL</label>
                        <input type="text" name="image-url" id="image-url" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="https://placehold.co/600x400" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="image-alt" class="block mb-2.5 text-sm font-medium text-heading">Image alt</label>
                        <input type="text" name="image-alt" id="image-alt" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required="">
                    </div>
                   <div class="col-span-2">
                        <label for="image-title" class="block mb-2.5 text-sm font-medium text-heading">Image title</label>
                        <input type="text" name="image-title" id="image-title" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required="">
                    </div>
                </div>
                <button type="submit" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                    Add image
                </button>
            </form>
        </div>
    </div>
</div> 
{{< /example >}}

## Adding videos

Use this example to embed videos inside the WYSIWYG text editor based on a YouTube URL source and set the width and height of the video by using the Flowbite modal component API.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import YouTube from 'https://esm.sh/@tiptap/extension-youtube@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-video-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-video-example'),
        extensions: [
            StarterKit,
            YouTube
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><img src="https://placehold.co/600x400" contenteditable="false" draggable="true"><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('addVideoButton').addEventListener('click', () => {
        const url = window.prompt('Enter YouTube URL:', 'https://www.youtube.com/watch?v=KaLxCiilHns');
        if (url) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: 640,
                height: 480,
            })
        }
    });

    const advancedVideoModal = FlowbiteInstances.getInstance('Modal', 'advanced-video-modal');
    
    document.getElementById('advancedVideoForm').addEventListener('submit', (e) => {

        e.preventDefault();
        
        const videoUrl = document.getElementById('URL').value;
        const videoWidth = document.getElementById('width').value;
        const videoHeight = document.getElementById('height').value;

        if (videoUrl) {
            editor.commands.setYoutubeVideo({ src: videoUrl, width: videoWidth ? videoWidth : 640, height: videoHeight ? videoHeight: 480 });
            document.getElementById('advancedVideoForm').reset();
            advancedVideoModal.hide();
        }
    });
    
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
    <div class="flex items-center gap-2">
        <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
            <button id="addVideoButton" type="button" data-tooltip-target="tooltip-video" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/></svg>
                <span class="sr-only">Add video</span>
            </button>
            <div id="tooltip-video" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add video
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button type="button" data-tooltip-target="tooltip-advanced-video" data-modal-target="advanced-video-modal" data-modal-toggle="advanced-video-modal" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"/></svg>
                <span class="sr-only">Insert advanced video</span>
            </button>
            <div id="tooltip-advanced-video" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Video with settings
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-video-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-video-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>

<!-- Main modal -->
<div id="advanced-video-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-sm max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <!-- Modal header -->
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 class="text-lg font-medium text-heading">
                    Insert advanced video
                </h3>
                <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="advanced-video-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form action="#">
                <div class="grid gap-4 grid-cols-2 py-4 md:py-6">
                    <div class="col-span-2">
                        <label for="video-url" class="block mb-2.5 text-sm font-medium text-heading">Youtube URL</label>
                        <input type="text" name="video-url" id="video-url" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="https://www.youtube.com/watch?v=KaLxCiilHns" required="">
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="video-width" class="block mb-2.5 text-sm font-medium text-heading">Video width</label>
                        <input type="text" name="video-width" id="video-width" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required="">
                    </div>
                   <div class="col-span-2 md:col-span-1">
                        <label for="video-height" class="block mb-2.5 text-sm font-medium text-heading">Video height</label>
                        <input type="text" name="video-height" id="video-height" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required="">
                    </div>
                </div>
                <button type="submit" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                    Add video
                </button>
            </form>
        </div>
    </div>
</div>
{{< /example >}}

## Editing tables

Use this example to edit table data inside the WYSIWYG text editor by adding and removing table column, rows, and cells and use other features to navigate through the table data for a convenient editing process.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Table from 'https://esm.sh/@tiptap/extension-table@2.6.6';
import TableCell from 'https://esm.sh/@tiptap/extension-table-cell@2.6.6';
import TableHeader from 'https://esm.sh/@tiptap/extension-table-header@2.6.6';
import TableRow from 'https://esm.sh/@tiptap/extension-table-row@2.6.6';

const TipTapExtensionTableCell = TableCell.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			backgroundColor: {
				default: null,
				renderHTML: (attributes) => {
					if (!attributes.backgroundColor) {
						return {}
					}

					return {
						style: 'background-color: ' + attributes.backgroundColor,
					}
				},
				parseHTML: (element) => {
					return element.style.backgroundColor.replace(/['"]+/g, '')
				},
			},
		}
	},
});

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-tables-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-tables-example'),
        extensions: [
            StarterKit,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            TipTapExtensionTableCell
        ],
        content: '<p>Understanding global <strong>population growth trends</strong> is essential for analyzing the development and future of nations. Population growth rates provide insights into economic prospects, resource allocation, and potential challenges for countries worldwide.</p><p>Here is an example of population data:</p><div class=tableWrapper><table style=min-width:75px><col><col><col><tr><th colspan=1 rowspan=1><p>Country<th colspan=1 rowspan=1><p>Population<th colspan=1 rowspan=1><p>Growth rate<tr><td colspan=1 rowspan=1><p>United States<td colspan=1 rowspan=1><p>333 million<td colspan=1 rowspan=1><p>0.4%<tr><td colspan=1 rowspan=1><p>China<td colspan=1 rowspan=1><p>1.41 billion<td colspan=1 rowspan=1><p>0%<tr><td colspan=1 rowspan=1><p>Germany<td colspan=1 rowspan=1><p>83.8 million<td colspan=1 rowspan=1><p>0.7%<tr><td colspan=1 rowspan=1><p>India<td colspan=1 rowspan=1><p>1.42 billion<td colspan=1 rowspan=1><p>1.0%<tr><td colspan=1 rowspan=1><p>Brazil<td colspan=1 rowspan=1><p>214 million<td colspan=1 rowspan=1><p>0.6%<tr><td colspan=1 rowspan=1><p>Indonesia<td colspan=1 rowspan=1><p>273 million<td colspan=1 rowspan=1><p>1.1%<tr><td colspan=1 rowspan=1><p>Pakistan<td colspan=1 rowspan=1><p>231 million<td colspan=1 rowspan=1><p>2.0%<tr><td colspan=1 rowspan=1><p>Nigeria<td colspan=1 rowspan=1><p>223 million<td colspan=1 rowspan=1><p>2.5%</table></div><p>Learn more about global population trends from reliable sources like the <a href=https://www.worldpopulationreview.com>World Population Review</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('addTableButton').addEventListener('click', () => {
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    });

    // add column before
    document.getElementById('addColumnBeforeButton').addEventListener('click', () => {
        editor.chain().focus().addColumnBefore().run();
    });

    // add column after
    document.getElementById('addColumnAfterButton').addEventListener('click', () => {
        editor.chain().focus().addColumnAfter().run();
    });

    // remove column
    document.getElementById('removeColumnButton').addEventListener('click', () => {
        editor.chain().focus().deleteColumn().run();
    });

    // add row before
    document.getElementById('addRowBeforeButton').addEventListener('click', () => {
        editor.chain().focus().addRowBefore().run();
    });

    // add row after
    document.getElementById('addRowAfterButton').addEventListener('click', () => {
        editor.chain().focus().addRowAfter().run();
    });

    // remove row
    document.getElementById('removeRowButton').addEventListener('click', () => {
        editor.chain().focus().deleteRow().run();
    });

    // delete table
    document.getElementById('deleteTableButton').addEventListener('click', () => {
        editor.chain().focus().deleteTable().run();
    });

    // merge cells
    document.getElementById('mergeCellsButton').addEventListener('click', () => {
        editor.chain().focus().mergeCells().run();
    });

    // split cells
    document.getElementById('splitCellsButton').addEventListener('click', () => {
        editor.chain().focus().splitCell().run();
    });

    // merge or split
    document.getElementById('mergeOrSplitButton').addEventListener('click', () => {
        editor.chain().focus().mergeOrSplit().run();
    });

    // toggle header column
    document.getElementById('toggleHeaderColumnButton').addEventListener('click', () => {
        editor.chain().focus().toggleHeaderColumn().run();
    });

    // toggle header row
    document.getElementById('toggleHeaderRowButton').addEventListener('click', () => {
        editor.chain().focus().toggleHeaderRow().run();
    });

    // toggle header cell
    document.getElementById('toggleHeaderCellButton').addEventListener('click', () => {
        editor.chain().focus().toggleHeaderCell().run();
    });

    const cellAttributeModal = FlowbiteInstances.getInstance('Modal', 'cell-attribute-modal');
    
    document.getElementById('addCellAttributeForm').addEventListener('submit', (e) => {

        e.preventDefault();
        
        const attributeName = document.getElementById('attribute-name').value;
        const attributeValue = document.getElementById('attribute-value').value;

        if (attributeName && attributeValue) {
            const result = editor.commands.setCellAttribute(attributeName ? attributeName : '', attributeValue ? attributeValue : '');
            document.getElementById('addCellAttributeForm').reset();
            cellAttributeModal.hide();
        }
    });

    // fix tables
    document.getElementById('fixTablesButton').addEventListener('click', () => {
       editor.commands.fixTables();
    });

    // go to previous cell
    document.getElementById('previousCellButton').addEventListener('click', () => {
        editor.chain().focus().goToPreviousCell().run();
    });

    // go to the next cell
    document.getElementById('nextCellButton').addEventListener('click', () => {
        editor.chain().focus().goToNextCell().run();
    });
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
    <div class="flex items-center gap-2">
        <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
            <button id="addTableButton" type="button" data-tooltip-target="tooltip-table" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3c0 .5523.44772 1 1 1h10.5M3 15v-4m0 4h11M3 11V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5M3 11h18m0 0v1M8 11v8m4-8v8m4-8v2m1 4h2m0 0h2m-2 0v2m0-2v-2"/>
                </svg>
                <span class="sr-only">Add table</span>
            </button>
            <div id="tooltip-table" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add table
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="deleteTableButton" type="button" data-tooltip-target="tooltip-delete-table" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h10.5M3 15.5v-4m0 4h11m-11-4v-5c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5m-18 0h18m0 0v1m-13-1v8m4-8v8m4-8v2m1.8956 5.9528 1.5047-1.5047m0 0 1.5048-1.5048m-1.5048 1.5048 1.4605 1.4604m-1.4605-1.4604-1.4604-1.4605"/>
                </svg>
                <span class="sr-only">Delete table</span>
            </button>
            <div id="tooltip-delete-table" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Delete table
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div class="px-1">
                <span class="block w-px h-4 bg-neutral-quaternary"></span>
            </div>
            <button id="addColumnBeforeButton" type="button" data-tooltip-target="tooltip-add-column-before" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5.5v14m-8-7h2m0 0h2m-2 0v2m0-2v-2m12 1h-6m6 4h-6m-11 4h16c.5523 0 1-.4477 1-1v-12c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z"/>
                </svg>
                <span class="sr-only">Add column before</span>
            </button>
            <div id="tooltip-add-column-before" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add column before
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="addColumnAfterButton" type="button" data-tooltip-target="tooltip-add-column-after" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5.5v14m8-7h-2m0 0h-2m2 0v2m0-2v-2m-12 1h6m-6 4h6m11 4H4c-.55228 0-1-.4477-1-1v-12c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"/>
                </svg>
                <span class="sr-only">Add column after</span>
            </button>
            <div id="tooltip-add-column-after" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add column after
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="removeColumnButton" type="button" data-tooltip-target="tooltip-remove-column" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5.5v14m-6-8h6m-6 4h6m4.5061-1.4939L15.0123 12.5m0 0 1.5061-1.5061M15.0123 12.5l1.5061 1.5061M15.0123 12.5l-1.5062-1.5061M20 19.5H4c-.55228 0-1-.4477-1-1v-12c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"/>
                </svg>
                <span class="sr-only">Remove column</span>
            </button>
            <div id="tooltip-remove-column" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Remove column
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div class="px-1">
                <span class="block w-px h-4 bg-neutral-quaternary"></span>
            </div>
            <button id="addRowBeforeButton" type="button" data-tooltip-target="tooltip-add-row-before" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3m-18 0v-9c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9m-18 0h18m-13 0v4m4-4v4m4-4v4m-6-9h2m0 0h2m-2 0v2m0-2v-2"/>
                </svg>
                <span class="sr-only">Add row before</span>
            </button>
            <div id="tooltip-add-row-before" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add row before
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="addRowAfterButton" type="button" data-tooltip-target="tooltip-add-row-after" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.5v-3c0-.55228.44772-1 1-1h16c.5523 0 1 .44771 1 1v3m-18 0v9c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-9m-18 0h18m-13 0v-4m4 4v-4m4 4v-4m-6 9h2m0 0h2m-2 0v-2m0 2v2"/>
                </svg>
                <span class="sr-only">Add row after</span>
            </button>
            <div id="tooltip-add-row-after" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Add row after
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button id="removeRowButton" type="button" data-tooltip-target="tooltip-remove-row" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3m-18 0v-9c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9m-18 0h18m-13 0v4m4-4v4m4-4v4m-5.5061-7.4939L12 10.5m0 0 1.5061-1.50614M12 10.5l1.5061 1.5061M12 10.5l-1.5061-1.50614"/>
                </svg>
                <span class="sr-only">Remove row</span>
            </button>
            <div id="tooltip-remove-row" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                Remove row
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
    <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
        <button id="mergeCellsButton" type="button" data-tooltip-target="tooltip-merge-cells" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18.5v2H4v-16h6v2m4 12v2h6v-16h-6v2m-6.49543 8.4954L10 12.5m0 0-2.49543-2.4954M10 12.5H4.05191m12.50199 2.5539L14 12.5m0 0 2.5539-2.55392M14 12.5h5.8319"/>
            </svg>
            <span class="sr-only">Merge cells</span>
        </button>
        <div id="tooltip-merge-cells" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Merge cells
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="splitCellsButton" type="button" data-tooltip-target="tooltip-split-cells" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18.5v2h6v-16H4v2m16 12v2h-6v-16h6v2M6.49545 14.9954 4.00003 12.5m0 0 2.49542-2.4954M4.00003 12.5h5.94809m7.49798 2.5539L20 12.5m0 0-2.5539-2.55392M20 12.5h-5.8319"/>
            </svg>
            <span class="sr-only">Split cells</span>
        </button>
        <div id="tooltip-split-cells" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Split cells
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="mergeOrSplitButton" type="button" data-tooltip-target="tooltip-merge-or-split" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5045 14.9954 21 12.5m0 0-2.4955-2.4954M21 12.5h-5.9481m-9.49798 2.5539L3 12.5m0 0 2.55392-2.55392M3 12.5h5.83192m.16807 7v-14H15v14H8.99999Z"/>
            </svg>
            <span class="sr-only">Merge or split</span>
        </button>
        <div id="tooltip-merge-or-split" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Merge or split
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div class="px-1">
            <span class="block w-px h-4 bg-neutral-quaternary"></span>
        </div>
        <button id="toggleHeaderColumnButton" type="button" data-tooltip-target="tooltip-toggle-header-column" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5.5v14m6-8h-6m6 4h-6m-9-3h1.99093M4 19.5h16c.5523 0 1-.4477 1-1v-12c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Zm8-7c0 1.1046-.8954 2-2 2-1.10457 0-2-.8954-2-2s.89543-2 2-2c1.1046 0 2 .8954 2 2Z"/>
            </svg>
            <span class="sr-only">Toggle header column</span>
        </button>
        <div id="tooltip-toggle-header-column" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Toggle header column
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="toggleHeaderRowButton" type="button" data-tooltip-target="tooltip-toggle-header-row" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3m-18 0v-9c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9m-18 0h18m-13 0v4m4-4v4m4-4v4m-7-9h1.9909M15 10.5c0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-1.10457.8954-2 2-2s2 .89543 2 2Z"/>
            </svg>
            <span class="sr-only">Toggle header row</span>
        </button>
        <div id="tooltip-toggle-header-row" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Toggle header row
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="toggleHeaderCellButton" type="button" data-tooltip-target="tooltip-toggle-header-cell" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3m-18 0v-9c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9m-18 0h18m-13 0v4m4-4v4m4-4v4m-7-9h1.9909M15 10.5c0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-1.10457.8954-2 2-2s2 .89543 2 2Z"/>
            </svg>
            <span class="sr-only">Toggle header cell</span>
        </button>
        <div id="tooltip-toggle-header-cell" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Toggle header cell
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-modal-toggle="cell-attribute-modal" data-modal-target="cell-attribute-modal" type="button" data-tooltip-target="tooltip-add-cell-attribute" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4v-5c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4m-18 1h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25m2.25-2.25c0-1.2426-1.0073-2.25-2.25-2.25m2.25 2.25H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.75v.75m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25m-2.25 2.25H15m3-2.25v-.75m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
            </svg>
            <span class="sr-only">Add cell attribute</span>
        </button>
        <div id="tooltip-add-cell-attribute" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Add cell attribute
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div class="px-1">
            <span class="block w-px h-4 bg-neutral-tertiary"></span>
        </div>
        <button id="fixTablesButton" type="button" data-tooltip-target="tooltip-fix-tables" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h4v-4m-5 0v-4m0 4h5m-5-4v-5c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v1.98935M3 11.5h5v4m9.4708 4.1718-.8696-1.4388-2.8164-.235-2.573-4.2573 1.4873-2.8362 1.4441 2.3893c.3865.6396 1.2183.8447 1.8579.4582.6396-.3866.8447-1.2184.4582-1.858l-1.444-2.38925h3.1353l2.6101 4.27715-1.0713 2.5847.8695 1.4388"/>
            </svg>
            <span class="sr-only">Fix tables</span>
        </button>
        <div id="tooltip-fix-tables" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Fix tables
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="previousCellButton" type="button" data-tooltip-target="tooltip-previous-cell" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h9.5M3 15.5v-4m0 4h9m-9-4v-5c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5H3Zm5 0v8m4-8v8m5.9001-1.0999L16 16.5m0 0 1.9001-1.9001M16 16.5h5"/>
            </svg>
            <span class="sr-only">Previous cell</span>
        </button>
        <div id="tooltip-previous-cell" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Previous cell
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="nextCellButton" type="button" data-tooltip-target="tooltip-next-cell" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15.5v3c0 .5523.44772 1 1 1h9.5M3 15.5v-4m0 4h9m-9-4v-5c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5H3Zm5 0v8m4-8v8m7.0999-1.0999L21 16.5m0 0-1.9001-1.9001M21 16.5h-5"/>
            </svg>
            <span class="sr-only">Next cell</span>
        </button>
        <div id="tooltip-next-cell" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
            Next cell
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-tables-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-tables-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>

<!-- Main modal -->
<div id="cell-attribute-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-sm max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <!-- Modal header -->
            <div class="flex items-center justify-between border-b border-default pb-4">
                <h3 class="text-lg font-medium text-heading">
                    Add cell attribute
                </h3>
                <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="cell-attribute-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form action="#">
                <div class="grid gap-4 grid-cols-2 py-4 md:py-6">
                    <div class="col-span-2">
                        <label for="attribute-name" class="block mb-2.5 text-sm font-medium text-heading">Attribute name</label>
                        <input type="text" name="attribute-name" id="attribute-name" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="backgroundColor" required="">
                    </div>
                    <div class="col-span-2">
                        <label for="attribute-value" class="block mb-2.5 text-sm font-medium text-heading">Attribute value</label>
                        <input type="text" name="attribute-value" id="attribute-value" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="#F1FF3F" required="">
                    </div>
                </div>
                <button type="submit" class="w-full inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
                    Set attribute
                </button>
            </form>
        </div>
    </div>
</div>
{{< /example >}}

## Undo and redo

Use the history functionality from the WYSIWYG text editor component to integrate undo and redo actions.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-history-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-history-example'),
        extensions: [
            StarterKit
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleUndoButton').addEventListener('click', () => {
        editor.chain().focus().undo().run();
    });
    document.getElementById('toggleRedoButton').addEventListener('click', () => {
        editor.chain().focus().redo().run()
    });

}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                <button id="toggleUndoButton" data-tooltip-target="tooltip-undo" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"/>
                    </svg>
                    <span class="sr-only">Undo</span>
                </button>
                <div id="tooltip-undo" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Undo
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleRedoButton" data-tooltip-target="tooltip-redo" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"/>
                    </svg>
                    <span class="sr-only">Redo</span>
                </button>
                <div id="tooltip-redo" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Redo
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-history-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-history-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>
{{< /example >}}

## Exporting data

Use the `editor.getJSON()` and the `editor.getHTML()` functions to export the text content inside of the WYSIWYG text editor in JSON or raw HTML format to persist into your database or API structure.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-export-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-export-example'),
        extensions: [
            StarterKit
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-base text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
            },
        }
    });

    const sourceCodeModal = FlowbiteInstances.getInstance('Modal', 'source-code-modal');
    const sourceCodeWrapper = document.getElementById('sourceCode');

    // set up custom event listeners for the buttons
    document.getElementById('toggleHTMLButton').addEventListener('click', () => {

        // basically just use editor.getHTML(); to get the raw html

        sourceCodeWrapper.innerHTML = editor.getHTML()
            .replace(/&/g, "&amp;") // Escape & character
            .replace(/</g, "&lt;")  // Escape < character
            .replace(/>/g, "&gt;")  // Escape > character
            .replace(/"/g, "&quot;") // Escape " character
            .replace(/'/g, "&#039;"); // Escape ' character
    });

    document.getElementById('toggleJSONButton').addEventListener('click', () => {

        // basically just use editor.getJSON(); to get the raw json

        sourceCode.innerHTML = JSON.stringify(editor.getJSON(), null, 2)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    });
}
})
` >}}
<div class="w-full bg-neutral-secondary-medium border border-default-medium rounded-base">
    <div class="p-2 border-b border-default-medium">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
                <button id="toggleJSONButton" data-tooltip-target="tooltip-json" data-modal-target="source-code-modal" data-modal-toggle="source-code-modal" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/>
                    </svg>
                    <span class="sr-only">JSON</span>
                </button>
                <div id="tooltip-json" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Get JSON
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleHTMLButton" data-tooltip-target="tooltip-html" data-modal-target="source-code-modal" data-modal-toggle="source-code-modal" type="button" class="p-1.5 text-body rounded-sm cursor-pointer hover:text-heading hover:bg-neutral-quaternary">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z"/>
                    </svg>
                    <span class="sr-only">HTML</span>
                </button>
                <div id="tooltip-html" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark-strong rounded-base shadow-xs opacity-0 tooltip">
                    Get HTML
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
    </div>
</div>
<div class="p-3 rounded-b-base bg-neutral-primary">
    <label for="wysiwyg-export-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-export-example"class="block w-full px-0 text-sm text-body bg-neutral-primary border-0 focus:ring-0"></div>
</div>
</div>

<div id="source-code-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-xl max-h-full">
        <!-- Modal content -->
        <div class="relative rounded-base shadow-sm bg-neutral-primary-soft">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-default">
                <h3 class="text-lg font-semibold text-heading">
                    JSON/HTML data export result
                </h3>
                <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="source-code-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 pb-4 md:px-5 pb-5 format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none">
                <pre class="bg-neutral-primary-medium"><code id="sourceCode"></code></pre>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Javascript behaviour

Learn more about how you can programmatically use the WYSIWYG editor using Javascript by creating a new instance of the object, setting options, method, event listeners, and more to integrate with your code base.

After you have installed Tip Tap via NPM or CDN you can create a new `Editor` object:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

new Editor({
  element: document.getElementById('wysiwyg'),
  extensions: [StarterKit],
  content: '<p>Welcome to Flowbite!</p>',
})
{{< /code >}}

Make sure that you also have an empty `div` element with the appropiate ID:

{{< code lang="html" file="wysiwyg.html" icon="file" >}}
<div id="wysiwyg"></div>
{{< /code >}}

This code will automatically set up the markup needed inside of the WYSIWYG component. Please note the fact that the Tip Tap library is headless so you need to style the elements yourself, but you can copy-paste the examples from Flowbite on this page.

### Content styling

We also recommend adding custom typography classes from the [Flowbite Typography](https://flowbite.com/docs/components/typography/) package so that the content inside of the text editor will be correctly styled:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
new Editor({
  element: document.getElementById('wysiwyg'),
  extensions: [StarterKit],
  content: '<p>Welcome to Flowbite!</p>',
  editorProps: {
        attributes: {
            class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
        },
    }
})
{{< /code >}}

### Extensions

Tip Tap is a modular library meaning that if you want to introduce images, videos, links and other elements inside the WYSIWYG component you need to specifically import that resources from the library and set it as an extension when initialising the `Editor` object.

Here is one example where we add the link extension:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

const editor = new Editor({
    element: document.querySelector('#wysiwyg-links-example'),
    extensions: [
        StarterKit,
        Link.configure({
            openOnClick: false,
            autolink: true,
            defaultProtocol: 'https',
        })
    ],
    content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
    editorProps: {
        attributes: {
            class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none',
        },
    }
});
{{< /code >}}

Links will now be available inside the WYSIWYG component. Learn more about all of the <a href="https://tiptap.dev/docs/editor/extensions/overview" target="_blank" rel="nofollow">extensions API</a>.

### Methods

You can easily call the methods from the `Editor` object to set text styles, links, images, and more. Here is one example where based upon a click event on a button you will be prompted with the URL of the link and it will add it to the currently selected text:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
// set up custom event listeners for the buttons
document.getElementById('toggleLinkButton').addEventListener('click', () => {
    const url = window.prompt('Enter image URL:', 'https://flowbite.com');
    editor.chain().focus().toggleLink({ href: url }).run();
});
{{< /code >}}

And here's another example where you can unset a link:

{{< code lang="javascript" file="wysiwyg.js" icon="file" >}}
// unset the links based on a button click
document.getElementById('removeLinkButton').addEventListener('click', () => {
    editor.chain().focus().unsetLink().run()
});
{{< /code >}}

Examples from this page have functional elements so you can check the JavaScript tab for the source code.

## License

Resources from this page are licensed under the MIT License, including the Flowbite examples and Tip Tap.

---
layout: home
title: Tailwind CSS WYSIWYG Editor - Flowbite
description: Use the wysiwyg text editor component from Flowbite to create and modify content by manipulating paragraphs, headings, images and styling them using all available options
group: plugins
toc: true
requires_js: true

previous: Datatables
previousLink: plugins/datatables/
---

## Default text editor

{{< example id="default-wysiwyg-example" class="flex justify-center dark:bg-gray-900" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true  disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Highlight from 'https://esm.sh/@tiptap/extension-highlight@2.6.6';
import Underline from 'https://esm.sh/@tiptap/extension-underline@2.6.6';
import Link from 'https://esm.sh/@tiptap/extension-link@2.6.6';
import TextAlign from 'https://esm.sh/@tiptap/extension-text-align@2.6.6';

import Image from 'https://esm.sh/@tiptap/extension-image@2.6.6';

if (document.getElementById("wysiwyg-example")) {

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-example'),
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
            Image
        ],
        content: '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>',
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
    document.getElementById('toggleHighlightButton').addEventListener('click', () => editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run());
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
    document.getElementById('addImageButton').addEventListener('click', () => {
        const url = window.prompt('Enter image URL:', 'https://placehold.co/600x400');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    });
}
` >}}
<div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div class="px-3 py-2 border-b dark:border-gray-600">
        <div class="flex flex-wrap items-center">
            <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <button id="toggleBoldButton" data-tooltip-target="tooltip-bold" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>
                    </svg>
                    <span class="sr-only">Bold</span>
                </button>
                <div id="tooltip-bold" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle bold
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleItalicButton" data-tooltip-target="tooltip-italic" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/>
                    </svg>
                    <span class="sr-only">Italic</span>
                </button>
                <div id="tooltip-italic" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle italic
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleUnderlineButton" data-tooltip-target="tooltip-underline" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/>
                    </svg>
                    <span class="sr-only">Underline</span>
                </button>
                <div id="tooltip-underline" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle underline
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleStrikeButton" data-tooltip-target="tooltip-strike" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/>
                    </svg>
                    <span class="sr-only">Strike</span>
                </button>
                <div id="tooltip-strike" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle strike
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleHighlightButton" data-tooltip-target="tooltip-highlight" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 20H5.5a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H18m-6-1 1.4 1.9h.2L15 19m-7-6 4-9.8s0 0 0 0l4 9.8m-6-3h4"/>
                    </svg>
                    <span class="sr-only">Highlight</span>
                </button>
                <div id="tooltip-highlight" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle highlight
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleLinkButton" data-tooltip-target="tooltip-link" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
                    </svg>
                    <span class="sr-only">Link</span>
                </button>
                <div id="tooltip-link" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Add link
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="removeLinkButton" data-tooltip-target="tooltip-remove-link" type="button" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1m7.4 14-1.8-1.8m0 0L16 16.4m1.8 1.8 1.8-1.8m-1.8 1.8L16 20"/>
                    </svg>
                    <span class="sr-only">Remove link</span>
                </button>
                <div id="tooltip-remove-link" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Remove link
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleCodeButton" type="button" data-tooltip-target="tooltip-code" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>
                    <span class="sr-only">Code</span>
                </button>
                <div id="tooltip-code" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Format code
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div class="px-1">
                    <span class="block w-px h-4 bg-gray-300 dark:bg-gray-600"></span>
                </div>
            </div>
            <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <button id="toggleLeftAlignButton" type="button" data-tooltip-target="tooltip-left-align" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                    </svg>
                    <span class="sr-only">Align left</span>
                </button>
                <div id="tooltip-left-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Align left
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleCenterAlignButton" type="button" data-tooltip-target="tooltip-center-align" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M6 10h12M8 14h8M6 18h12"/>
                    </svg>
                    <span class="sr-only">Align center</span>
                </button>
                <div id="tooltip-center-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Align center
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="toggleRightAlignButton" type="button" data-tooltip-target="tooltip-right-align" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M9 17h10"/>
                    </svg>
                    <span class="sr-only">Align right</span>
                </button>
                <div id="tooltip-right-align" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Align right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div class="px-1">
                    <span class="block w-px h-4 bg-gray-300 dark:bg-gray-600"></span>
                </div>
            </div>
            <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <button id="toggleListButton" type="button" data-tooltip-target="tooltip-list" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
                    </svg>
                    <span class="sr-only">Create list</span>
                </button>
                <div id="tooltip-list" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Create list
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button id="addImageButton" type="button" data-tooltip-target="tooltip-image" class="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">Add image</span>
                </button>
                <div id="tooltip-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Add image
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
        </div>
    </div>
    <div class="flex flex-wrap items-center pt-2">
        baga aici dropdown cu headings si normal
    </div>
</div>
<div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
    <label for="wysiwyg-example" class="sr-only">Publish post</label>
    <div id="wysiwyg-example" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required ></div>
</div>
</div>
{{< /example >}}

Notice: there is a <a href="https://github.com/ueberdosis/tiptap/issues/577" target="_blank" rel="nofollow noreferrer">known issue from TipTap</a> when splitting blocks (ie. using enter to create break lines) and using the bullet list item. A quickfix for `v2.6.6` when using CDN is to match the import statements:

```html
<script type="importmap">
    {
        "imports": {
            "https://esm.sh/v135/prosemirror-model@1.22.3/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.19.3/es2022/prosemirror-model.mjs", 
            "https://esm.sh/v135/prosemirror-model@1.22.1/es2022/prosemirror-model.mjs": "https://esm.sh/v135/prosemirror-model@1.19.3/es2022/prosemirror-model.mjs"
        }
    }
</script>
```

If you're importing the package with Yarn or NPM then you need to add this in your `package.json` file:

```javascript
// when using Yarn
"resolutions": {
    "prosemirror-model": "1.19.3"
}

// when using NPM
"overrides": {
    "prosemirror-model": "1.19.3"
}
```

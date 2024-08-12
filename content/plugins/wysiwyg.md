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

## Default WYSIWYG

{{< example id="default-wysiwyg-example" class="flex justify-center dark:bg-gray-900" github="plugins/wysiwyg.md" show_dark=true wysiwyg=true script_module=true disable_init_js=true javascript=`
import { Editor } from 'https://esm.sh/@tiptap/core';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit';

if (document.getElementById("wysiwyg-example")) {
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-example'),
        extensions: [StarterKit],
        content: '<p>Hello World!</p>',
    })
}
` >}}
<div id="wysiwyg-example">

</div>
{{< /example >}}
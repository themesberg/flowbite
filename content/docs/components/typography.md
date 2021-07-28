---
layout: docs
title: Typography
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---
## Headings
{{< example >}}
<h1>h1. Glass UI heading</h1>
<h2>h2. Glass UI heading</h2>
<h3>h3. Glass UI heading</h3>
<h4>h4. Glass UI heading</h4>
<h5>h5. Glass UI heading</h5>
<h6>h6. Glass UI heading</h6>
{{< /example >}}

## Display headings
Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.
{{< example >}}
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
{{< /example >}}

## Lead
Make a paragraph stand out by adding <span class="fw-bold text-danger">.lead</span>.
{{< example >}}
<p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
{{< /example >}}

## Inline text elements
Make a paragraph stand out by adding <span class="fw-bold text-danger">.lead</span>.
{{< example >}}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
{{< /example >}}

## Blockquotes
{{< example >}}
<blockquote class="blockquote text-center">
    "Themesberg makes beautiful products to help people with creative ideas succeed. Our company empowers millions of people."
    <footer class="blockquote-footer mt-3 text-primary">Jason Doe</footer>
</blockquote>   
{{< /example >}}

## Lists
{{< example >}}
<ul class="list-unstyled">
    <li>This is a list.</li>
    <li>It appears completely unstyled.</li>
    <li>Structurally, it's still a list.</li>
    <li>However, this style only applies to immediate child elements.</li>
    <li>Nested lists:
        <ul>
        <li>are unaffected by this style</li>
        <li>will still show a bullet</li>
        <li>and have appropriate left margin</li>
        </ul>
    </li>
    <li>This may still come in handy in some situations.</li>
</ul> 
{{< /example >}}
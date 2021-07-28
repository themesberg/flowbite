---
layout: docs
title: Dropdowns
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

## Simple Button
Any single .btn can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either < button > elements:
{{< example >}}
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item rounded-top" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item rounded-bottom" href="#">Something else here</a></li>
  </ul>
</div>
{{< /example >}}

## Split button and only icon button
Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <span class="fw-bold text-danger">.dropdown-toggle-split</span> for proper spacing around the dropdown caret.
{{< example >}}
<div class="btn-group me-2 mb-2">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
<div class="btn-group mb-2 me-2">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
{{< /example >}}

## Dropdown direction
Use <span class="fw-bold text-danger">dropup</span>, <span class="fw-bold text-danger">dropend</span> or <span class="fw-bold text-danger">dropstart</span> to set the direction of the dropdown:
{{< example >}}
<div class="btn-group dropup mb-2 me-2">
    <button type="button" class="btn btn-primary">Up</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider bg-gray-300"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
<div class="btn-group dropend mb-2 me-2">
    <button type="button" class="btn btn-primary">Right</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
<div class="btn-group mb-2 me-2">
    <button type="button" class="btn btn-primary">Down</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
<div class="btn-group dropstart mb-2 me-2">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split me-n1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
{{< /example >}}

## Dropdown sizing
Use the <span class="fw-bold text-danger">.btn-sm</span> and <span class="fw-bold text-danger">.btn-lg</span> modifier classes to change the size of the dropdown buttons:

{{< example >}}
<div class="btn-group me-2 mb-2">
    <button type="button" class="btn btn-sm btn-primary">Primary</button>
    <button type="button" class="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xxs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
<div class="btn-group me-2 mb-2">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
<div class="btn-group me-2 mb-2">
    <button type="button" class="btn btn-lg btn-primary">Primary</button>
    <button type="button" class="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu py-0">
        <a class="dropdown-item rounded-top" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item rounded-bottom" href="#">Separated link</a>
    </div>
</div>
{{< /example >}}

## Dropdown options
You can use <span class="fw-bold text-danger">data-bs-offset</span> or <span class="fw-bold text-danger">data-bs-reference</span> to change the location of the dropdown.
{{< example >}}
<div class="d-flex">
    <div class="dropdown me-1">
        <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
        Offset
        </button>
        <ul class="dropdown-menu py-0" aria-labelledby="dropdownMenuOffset">
            <li><a class="dropdown-item rounded-top" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item rounded-bottom" href="#">Something else here</a></li>
        </ul>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-secondary">Reference</button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu py-0" aria-labelledby="dropdownMenuReference">
            <li><a class="dropdown-item rounded-top" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item rounded-bottom" href="#">Separated link</a></li>
        </ul>
    </div>
</div>
{{< /example >}}

## Responsive alignment
If you want to use responsive alignment, disable dynamic positioning by adding the <span class="fw-bold text-danger">data-bs-display="static"</span> attribute and use the responsive variation classes.
<br><br>To align <span class="fw-bold text-dark">right</span> the dropdown menu with the given breakpoint or larger, add <span class="fw-bold text-danger">.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end</span>.
{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu py-0 dropdown-menu-lg-end">
    <li><button class="dropdown-item rounded-top" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item rounded-bottom" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}

To align left the dropdown menu with the given breakpoint or larger, add <span class="fw-bold text-danger">.dropdown-menu-end</span> and <span class="fw-bold text-danger">.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start</span>.
{{< example >}}
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-end py-0 dropdown-menu-lg-start">
    <li><button class="dropdown-item rounded-top" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item rounded-bottom" type="button">Something else here</button></li>
  </ul>
</div>
{{< /example >}}
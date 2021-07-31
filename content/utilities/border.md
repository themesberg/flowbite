---
layout: home
title: Border
description: Use the utility classes to style the color, width, and radius for the border of an element
group: utilities
toc: true
---

Glass UI extends the default utility classes from Bootstrap which specify the `border` of the elements.

## Border positioning

Use the `border` and `border-{direction}` classes to set a border and its direction for any element.

{{< example >}}
<div class="d-flex">
    <div class="w-24 h-24 bg-gray-100 me-4 border"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border-top"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border-end"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border-bottom"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border-start"></div>
</div>
{{< /example >}}

You can also use the `border-0` and `border-{position}-0` classes to remove the border.

{{< example >}}
<div class="d-flex">
    <div class="w-24 h-24 bg-gray-100 me-4 border-0"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border border-top-0"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border border-end-0"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border border-bottom-0"></div>
    <div class="w-24 h-24 bg-gray-100 me-4 border border-start-0"></div>
</div>
{{< /example >}}

## Border color

Use the `border-{color}` alongside the `border` class to set the color of the border. You can use the contextual theme colors from the `$theme-colors` variable.

{{< example >}}
<div class="d-flex flex-wrap">
    {{< border-colors.inline >}}
    {{- range (index $.Site.Data "theme-colors") }}<div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-{{ .name }}"></div>
    {{ end -}}
    {{< /border-colors.inline >}}
</div>
{{< /example >}}

You can also use all of the gray colors, including white and back to set the color of the border from the `$grays` variable.

{{< example >}}
<div class="d-flex flex-wrap">
    {{< border-colors.inline >}}
    {{- range (index $.Site.Data "grays") }}<div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-{{ .name }}"></div>
    {{ end -}}
    {{< /border-colors.inline >}}
</div>
{{< /example >}}

## Border width

You can set the width of the border using the `border` and `border-{width}` classes.

{{< example >}}
<div class="d-flex flex-wrap">
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-1"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-2"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-3"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-4"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border border-5"></div>
</div>
{{< /example >}}

## Border radius

Use the `rounded` and `rounded-{position}` classes to set a border radius to any element.

{{< example >}}
<div class="d-flex flex-wrap">
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-top"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-end"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-bottom"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-start"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-circle"></div>
    <div class="w-48 h-24 mb-4 bg-gray-100 me-4 border rounded-pill"></div>
</div>
{{< /example >}}

### Sizing

To change the size of the border radius, use the `border-{size}` classes.

{{< example >}}
<div class="d-flex flex-wrap">
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-sm"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-md"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-lg"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-xl"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-2xl"></div>
    <div class="w-24 h-24 mb-4 bg-gray-100 me-4 border rounded-3xl"></div>
</div>
{{< /example >}}

---
layout: home
title: Background
description: Use the background utility classes to apply colors, gradients, transparency, and blur to any element
group: utilities
toc: true
---

Glass UI includes custom utility classes that you can use to apply colors, gradients, transparency, and the glassmorphism blur to the background of any element.

## Background color

Use the `bg-{color}` utility classes to set a color to the background of an element, where `{color}` can be one of the contextual classes (ie. `success`, `primary`, `danger`) or part of the color palette.

{{< example >}}
{{< background-colors-contextual.inline >}}

{{- range (index $.Site.Data "theme-colors") }}<div class="bg-{{ .name }} p-5 mb-4 {{ if .contrast_color }}text-{{ .contrast_color }}{{ else }}text-white{{ end }} rounded">.bg-{{ .name }}</div>
{{ end -}}

{{< /background-colors-contextual.inline >}}
{{< /example >}}

## Shades of gray

You can also set any shade of gray using the `bg-{color}` utility class.

{{< example >}}
{{< background-colors-grays.inline >}}
{{- range (index $.Site.Data "grays") }}<div class="bg-{{ .name }} p-5 mb-4 {{ if .contrast_color }}text-{{ .contrast_color }}{{ else }}text-white{{ end }} rounded">.bg-{{ .name }}</div>
{{ end -}}
{{< /background-colors-grays.inline >}}
{{< /example >}}

## Changing opacity

Change the opacity of the background by using the `bg-opacity-{amount}` whenever you also use the `bg-{color}` utility class.

{{< example >}}
{{< background-color-opacities.inline >}}
{{- range (index $.Site.Data "opacities") }}<div class="bg-dark bg-opacity-{{ .key }} p-5 mb-4 {{ if .contrast_color }}text-{{ .contrast_color }}{{ else }}text-white{{ end }} rounded">.bg-opacity-{{ .key }}</div>
{{ end -}}
{{< /background-color-opacities.inline >}}
{{< /example >}}

## Background gradient

Apply a gradient effect to any element by using the `bg-gradient` class.

{{< example >}}
{{< background-colors-contextual.inline >}}

{{- range (index $.Site.Data "theme-colors") }}<div class="bg-{{ .name }} bg-gradient p-5 mb-4 {{ if .contrast_color }}text-{{ .contrast_color }}{{ else }}text-white{{ end }} rounded">.bg-{{ .name }}</div>
{{ end -}}

{{< /background-colors-contextual.inline >}}
{{< /example >}}

## Background blur

Use the `bg-blur-{amount}` utility class to set the `backdrop-filter: blur({amount}px)` for the background of any element. This is one of the important properties that you have to use to obtain the glassmorphism effect.

{{< example class="bg-example-image" >}}
{{< background-colors-blur.inline >}}

{{- range (index $.Site.Data "blurs") }}<div class="bg-light bg-opacity-70 bg-blur-{{ .key }} p-5 mb-4 rounded">.bg-blur-{{ .key }}</div>
{{ end -}}

{{< /background-colors-blur.inline >}}
{{< /example >}}

## Sass

Glasss UI extends Bootstrap's default `theme-colors()` variable by creating a separate `bg-colors()` variable which combines the `theme-colors()` and `grays()` values into a single array. 

You can add your own background color by adding a new variable inside the `theme-colors()` variable.

```sass
$theme-colors: (
    "primary": $primary,
    "secondary": $secondary,
    "success": $success,
    "info": $info,
    "warning": $warning,
    "danger": $danger,
    "light": $light,
    "dark": $dark,
) !default;

$grays: (
    "white": $white,
    "gray-100": $gray-100,
    "gray-200": $gray-200,
    "gray-300": $gray-300,
    "gray-400": $gray-400,
    "gray-500": $gray-500,
    "gray-600": $gray-600,
    "gray-700": $gray-700,
    "gray-800": $gray-800,
    "gray-900": $gray-900,
    "black": $black,
) !default;
```

We also apply a CSS variable called `--gl-bg-opacity` for the rgba transparency of the background.

```sass
// background colors
$bg-colors: ();
@each $key, $value in $theme-colors {
    $bg-colors: map-merge($bg-colors, ($key: rgba($value, var(--gl-bg-opacity))))
}
@each $key, $value in $grays {
    $bg-colors: map-merge($bg-colors, ($key: rgba($value, var(--gl-bg-opacity))))
}
```
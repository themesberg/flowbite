---
layout: home
title: Sizing
description: Control the width and height of any element by using the utility classes from Glass UI
group: utilities
toc: true
---

Glass UI extends the default utility classes from Bootstrap which specify the `width` and `height` of the elements inspired by Tailwind CSS.

## Width

Use `w-{size}` for classes that set the `width` style. For example, by applying the `w-20` class to an element, it will apply the `width: 5rem;` style.

Here's the full list of the classes that you can use:

<div class="my-8 max-h-96 overflow-auto">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Property</th>
      </tr>
    </thead>
    <tbody>
      {{< sizing.inline >}}
      {{- range (index $.Site.Data "sizing") }}
        <tr>
          <td><code>.w-{{ .key }}</code></td>
          <td><code class="text-body">width: {{ .value }};</code></td>
        </tr>
      {{ end -}}
      {{< /sizing.inline >}}
    </tbody>
  </table>
</div>

### Fixed width

Use the `w-{size}` class to set the fixed width of an element. For example, `w-4` would set a `width: 1rem;` to the specified element.

```html
<div class="w-4 ..."></div>
<div class="w-10 ..."></div>
<div class="w-36 ..."></div>
<div class="w-56 ..."></div>
```

### Percentage width

Use the `w-{fraction}` class to set the percentage based width of an element. For example, `w-1/2` would set `width: 50%` or `w-1/3` would set `width: 33.3333%` to an element.

Use `w-full` to apply `width: 100%` to any element.

```html
<div class="w-1/2 ..."></div>
<div class="w-1/3 ..."></div>
<div class="w-1/6 ..."></div>
<div class="w-1/8 ..."></div>
<div class="w-full ..."></div>
```

### Auto width

Use the `w-auto` class to allow the browser to set the width of the element automatically.

```html
<div class="w-auto ..."></div>
```

### Screen width

Use the `w-screen` class to make an element take up the entire width of the viewport.

```html
<div class="w-screen ..."></div>
```

### Responsive width

You can control the width at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `w-lg-6` would apply a `w-6` width for all large devices and above.

```html
<div class="w-3 w-lg-6 ..."></div>
```

## Min-width

Use the `min-w-{size}` utility class to set the minimum width of an element.

<div class="my-8 max-h-96 overflow-auto">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Property</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td><code>.min-w-0</code></td>
          <td><code class="text-body">min-width: 0px;</code></td>
        </tr>
        <tr>
          <td><code>.min-w-full</code></td>
          <td><code class="text-body">min-width: 100%;</code></td>
        </tr>
        <tr>
          <td><code>.min-w-min</code></td>
          <td><code class="text-body">min-width: min-content;</code></td>
        </tr>
        <tr>
          <td><code>.min-w-max</code></td>
          <td><code class="text-body">min-width: max-content;</code></td>
        </tr>
    </tbody>
  </table>
</div>

### Responsive min-width

You can control the minimum width at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `min-w-lg-full` would apply a `min-w-full` width for all large devices and above.

```html
<div class="min-w-lg-full ..."></div>
```

## Max-width

Use the `max-w-{size}` utility class to set the maximum width of an element.

<div class="my-8 max-h-96 overflow-auto">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Property</th>
      </tr>
    </thead>
    <tbody>
      {{< max-widths.inline >}}
      {{- range (index $.Site.Data "max-widths") }}
        <tr>
          <td><code>.max-w-{{ .key }}</code></td>
          <td><code class="text-body">max-width: {{ .value }};</code></td>
        </tr>
      {{ end -}}
      {{< /max-widths.inline >}}
    </tbody>
  </table>
</div>

### Reading width

Use the `max-w-prose` to apply a maximum width for an element to optimize it for readability by adapting based on the font size.

```html
<div class="max-w-prose ..."></div>
```

### Responsive max-width

You can control the maximum width at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `max-w-lg-md` would apply a `max-w-md` width for all large devices and above.

```html
<div class="max-w-lg-md ..."></div>
```

## Height

Use `h-{size}` for classes that set the `height` style. For example, by applying the `h-20` class to an element, it will apply the `height: 5rem;` style.

Here's the full list of the classes that you can use:

<div class="my-8 max-h-96 overflow-auto">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Property</th>
      </tr>
    </thead>
    <tbody>
      {{< sizing.inline >}}
      {{- range (index $.Site.Data "sizing") }}
        <tr>
          <td><code>.h-{{ .key }}</code></td>
          <td><code class="text-body">height: {{ .value }};</code></td>
        </tr>
      {{ end -}}
      {{< /sizing.inline >}}
    </tbody>
  </table>
</div>

### Fixed height

Use the `h-{size}` class to set the height height of an element. For example, `h-4` would set a `height: 1rem;` to the specified element.

```html
<div class="h-4 ..."></div>
<div class="h-10 ..."></div>
<div class="h-36 ..."></div>
<div class="h-56 ..."></div>
```

### Percentage height

Use the `h-{fraction}` class to set the percentage based height of an element. For example, `h-1/2` would set `height: 50%` or `h-1/3` would set `height: 33.3333%` to an element.

Use `h-full` to apply `height: 100%` to any element.

```html
<div class="h-1/2 ..."></div>
<div class="h-1/3 ..."></div>
<div class="h-1/4 ..."></div>
<div class="h-1/6 ..."></div>
<div class="h-full ..."></div>
```

### Auto height

Use the `h-auto` class to allow the browser to set the height of the element automatically.

```html
<div class="h-auto ..."></div>
```

### Screen height

Use the `h-screen` class to make an element take up the entire height of the viewport.

```html
<div class="h-screen ..."></div>
```

### Responsive height

You can control the height at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `h-lg-6` would apply a `h-6` height for all large devices and above.

```html
<div class="h-3 h-lg-6 ..."></div>
```

## Min-height

Use the `min-h-{size}` utility class to set the minimum height of an element.

<div class="my-8 max-h-96 overflow-auto">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Property</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td><code>.min-h-0</code></td>
          <td><code class="text-body">min-height: 0px;</code></td>
        </tr>
        <tr>
          <td><code>.min-h-full</code></td>
          <td><code class="text-body">min-height: 100%;</code></td>
        </tr>
        <tr>
          <td><code>.min-h-screen</code></td>
          <td><code class="text-body">min-height: 100vh;</code></td>
        </tr>
    </tbody>
  </table>
</div>

### Responsive min-height

You can control the minimum height at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `min-h-lg-full` would apply a `min-h-full` height for all large devices and above.

```html
<div class="min-h-lg-full ..."></div>
```

## Max-height

Use the `max-h-{size}` utility class to set the maximum height of an element.

<div class="my-8 max-h-96 overflow-auto">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Property</th>
      </tr>
    </thead>
    <tbody>
      {{< max-heights.inline >}}
      {{- range (index $.Site.Data "sizing") }}
        <tr>
          <td><code>.max-h-{{ .key }}</code></td>
          <td><code class="text-body">max-height: {{ .value }};</code></td>
        </tr>
      {{ end -}}
      {{< /max-heights.inline >}}
    </tbody>
  </table>
</div>

### Responsive max-height

You can control the maximum height at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `max-h-lg-32` would apply a `max-h-32` height for all large devices and above.

```html
<div class="max-h-lg-32 ..."></div>
```
---
layout: docs
title: Spacing
description: Use a wide range of utility classes that you can use to set the padding, margin, and negative margin of elements
group: utilities
toc: true
---

Glass UI expands Bootstrap's default spacing utility classes by adding a wider range of values inspired by Tailwind CSS that you can use to specify the `margin` and `padding` styles for any element.

## Margin

Use `m-{size}` for classes that set the `margin` style. For example, by applying the `.m-4` class to an element, it will apply the `margin: 1rem;` style.

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
      {{< spacing.inline >}}
      {{- range (index $.Site.Data "spacing") }}
        <tr>
          <td><code>.m-{{ .key }}</code></td>
          <td><code class="text-body">margin: {{ .value }};</code></td>
        </tr>
      {{ end -}}
      {{< /spacing.inline >}}
    </tbody>
  </table>
</div>

### Margin on a single side

You can specify the side of the element to which you want to apply the margin by using the `mt-{size}`, `.mb-{size}`, `ms-{size}`, or `me-{size}` utility classes.

- `mt-{size}` for classes that set `margin-top`
- `mb-{size}` for classes that set `margin-bottom`
- `ms-{size}` for classes that set `margin-right` or `padding-right` in RTL mode
- `me-{size}` for classes that set `margin-left` or `padding-left` in RTL mode

```html
<div class="mt-10 ..."></div>
<div class="mb-10 ..."></div>
<div class="me-10 ..."></div>
<div class="ms-10 ..."></div>
```

For example, `mt-10` would add a `margin-top: 2.5rem` for the top side of an element, `mb-14` would add a `margin-bottom: 3.5rem` for the bottom side of an element.

Additionally, `ms-4` would add `margin-left: 1rem;` and `me-32` would add `margin-right: 8rem;`.

**RTL mode:** the margin properties are inversed (ie. right becomes left, left becomes right).

### Horizontal margin

You can use the `mx-{size}` class to apply margin to both left and right sides.

```html
<div class="mx-10 ..."></div>
<div class="mx-12 ..."></div>
<div class="mx-16 ..."></div>
```

### Vertical margin

You can use the `my-{size}` class to apply margin to both top and bottom sides.

```html
<div class="my-10 ..."></div>
<div class="my-12 ..."></div>
<div class="my-16 ..."></div>
```

### Add margin to all sides

You can use the `m-{size}` class to apply margin to all sides.

```html
<div class="m-10 ..."></div>
<div class="m-12 ..."></div>
<div class="m-16 ..."></div>
```

### Negative margins

You can use the `m-n{size}` class to apply negative margin to any side.

```html
<div class="mt-n10 ..."></div>
<div class="mb-n12 ..."></div>
<div class="me-n16 ..."></div>
```

### Responsive margins

You can control the margin at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `my-lg-8` would apply a `my-8` margin for all large devices and above.

```html
<div class="my-4 my-lg-8 ..."></div>
```

## Padding

Use `.p-{size}` for classes that set the `padding` style. For example, by applying the `.p-6` class to an element, it will apply the `padding: 1.5rem;` style.

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
      {{< spacing.inline >}}
      {{- range (index $.Site.Data "spacing") }}
        <tr>
          <td>.p-{{ .key }}</td>
          <td>padding: {{ .value }};</td>
        </tr>
      {{ end -}}
      {{< /spacing.inline >}}
    </tbody>
  </table>
</div>

### Padding on a single side

You can specify the side of the element to which you want to apply the padding by using the `pt-{size}`, `.pb-{size}`, `.ps-{size}`, or `.pe-{size}` utility classes.

- `pt-{size}` for classes that set `padding-top`
- `pb-{size}` for classes that set `padding-bottom`
- `ps-{size}` for classes that set `padding-right` or `padding-right` in RTL mode
- `pe-{size}` for classes that set `padding-left` or `padding-left` in RTL mode

```html
<div class="pt-10 ..."></div>
<div class="pb-10 ..."></div>
<div class="pe-10 ..."></div>
<div class="ps-10 ..."></div>
```

For example, `.pt-10` would add a `padding-top: 2.5rem` for the top side of an element, `.pb-14` would add a `padding-bottom: 3.5rem` for the bottom side of an element.

Additionally, `.ps-4` would add `padding-left: 1rem;` and `.pe-32` would add `padding-right: 8rem;`.

**RTL mode:** the padding properties are inversed (ie. right becomes left, left becomes right).

### Horizontal padding

You can use the `px-{size}` class to apply padding to both left and right sides.

```html
<div class="px-10 ..."></div>
<div class="px-12 ..."></div>
<div class="px-16 ..."></div>
```

### Vertical padding

You can use the `py-{size}` class to apply padding to both top and bottom sides.

```html
<div class="py-10 ..."></div>
<div class="py-12 ..."></div>
<div class="py-16 ..."></div>
```

### Add padding to all sides

You can use the `p-{size}` class to apply padding to all sides.

```html
<div class="p-10 ..."></div>
<div class="p-12 ..."></div>
<div class="p-16 ..."></div>
```

### Responsive padding

You can control the padding at a specific breakpoint by adding the `{screen}` prefix to the class. For instance, by adding the class `px-lg-6` would apply a `px-6` padding for all large devices and above.

```html
<div class="px-2 px-lg-6 ..."></div>
```
---
layout: home
title: Tailwind CSS Images - Flowbite
description: The image component can be used to embed images inside the web page in articles and sections based on multiple styles, sizes, layouts and hover animations
group: typography
toc: true

previous: Blockquote
previousLink: typography/blockquote/
next: Lists
nextLink: typography/lists/
---

Get started with a collection of responsive image components coded with the utility classes from Tailwind CSS that you can use inside articles, cards, sections, and other components based on multiple styles, sizes, layouts, and hover animations.

## Default image

Use this example to show the a responsive image that won't grow beyond the maximum original width.

{{< example id="default-image-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-full" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

## Image caption

This example can be used to add a caption for the image often used inside articles.

{{< example id="image-caption-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<figure class="max-w-lg">
  <img class="h-auto max-w-full rounded-lg" src="/docs/images/examples/image-3@2x.jpg" alt="image description">
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
</figure>
{{< /example >}}

## Rounded corners

Apply rounded corners to the image by using the specific utility classes from Tailwind CSS.

### Border radius

Use this example to apply rounded corners to the image by using the `rounded-{size}` class where the size can be anything from small to extra large.

{{< example id="image-rounded-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-lg rounded-lg" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

### Full circle

Use this example to mask the image inside a circle using the `rounded-full` utility class from Tailwind CSS.

{{< example id="image-rounded-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<img class="rounded-full w-96 h-96" src="/docs/images/examples/image-4@2x.jpg" alt="image description">
{{< /example >}}

## Image shadow

This example can be used to show a shadow effect for the image using the `shadow-{size}` utility class.

{{< example id="image-shadow-example" class="flex justify-center pb-8" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800" src="/docs/images/examples/image-2@2x.jpg" alt="image description">
{{< /example >}}

## Retina-ready

Use the `srcset` attribute to set Retina-ready images with double resolution.

{{< example id="image-retina-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<img srcset="/docs/images/examples/image-1.jpg 1x, /docs/images/examples/image-1@2x.jpg 2x" class="w-full h-auto max-w-xl rounded-lg" alt="image description">
{{< /example >}}

## Image card

Use this example to make the image a card item with a link and a short text description.

{{< example id="image-card-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
  <a href="#">
    <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
  </a>
  <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
</figure>
{{< /example >}}

## Image effects

Use image effects such as grayscale or blur to change the appearances of the image when being hovered.

### Grayscale

Use the filter option and apply a grayscale to the image element using the `grayscale` class.

{{< example id="image-grayscale-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
{{< /example >}}

### Blur

Apply a blur by using the `blur-{size}` utility class from Tailwind CSS to an image component.

{{< example id="image-blur-example" class="flex justify-center" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
{{< /example >}}

## Alignment

Align the image component to the left, center or right side of the document page using margin styles.

### Left

By default, the image component will be aligned to the left side of the page.

{{< example id="image-left-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-lg" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

### Center

Horizontally align the image to the center of the page using the `mx-auto` class.

{{< example id="image-center-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-lg mx-auto" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

### Right

Use the `ml-auto` class to align the image to the right side of the page.

{{< example id="image-right-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-lg ml-auto" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

## Sizes

Set the size of the image using the `w-{size}` and `h-{size}` or `max-w-{size}` utility classes from Tailwind CSS to set the width and height of the element.

### Small

Use the `max-w-xs` class to set a small size of the image.

{{< example id="image-small-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-xs" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

### Medium

Use the `max-w-md` class to set a medium size of the image.

{{< example id="image-medium-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-md" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

### Large

Use the `max-w-xl` class to set a large size of the image.

{{< example id="image-large-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-xl" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

### Full width

Use the `max-w-full` class to set the full width of the image as long as it doesn't become larger than the original source.

{{< example id="image-full-example" github="typography/images.md" show_dark=true >}}
<img class="h-auto max-w-full" src="/docs/images/examples/image-1@2x.jpg" alt="image description">
{{< /example >}}

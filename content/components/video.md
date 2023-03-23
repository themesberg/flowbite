---
layout: home
title: Tailwind CSS Video - Flowbite
description: Use the video component to configure an embedded video player using native HTML 5 functionality based on the utility classes from Tailwind CSS
group: components
toc: true

previous: Typography
previousLink: components/typography/
next: Input field
nextLink: forms/input-field/
---

Get started with the video component to embed internal video source into a native HTML 5 video player and set custom options such as autoplay or muted to enhance the user experience.

## Video player

Use this example to create a native browser video player and apply the `w-full` utility class from Tailwind CSS to span the full width of the parent container.

{{< example id="default-video-example" github="typography/video.md" show_dark=true >}}
<video class="w-full" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}

## Autoplay

Use the `autoplay` attribute on the video component to automatically start the video when the page has been loaded.

{{< example id="video-autoplay-example" github="typography/video.md" show_dark=true >}}
<video class="w-full" autoplay controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}

## Muted

Use the `muted` attribute together with the `autoplay` option to start the video while the sound is muted.

{{< example id="video-muted-example" github="typography/video.md" show_dark=true >}}
<video class="w-full" autoplay muted controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}

## Sizes

Set the width and height of the video component using the `w-{size}` and `h-{size}` utility classes from Tailwind CSS.

### Width

Use the `w-{size}` class to set the width of the video component.

{{< example id="video-width-example" github="typography/video.md" show_dark=true >}}
<video class="w-96" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}

### Height

Use the `h-{size}` class to set the height of the video player.

{{< example id="video-height-example" github="typography/video.md" show_dark=true >}}
<video class="h-80" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}

### Responsive

Use the following example to make the video responsive across all devices and viewports.

{{< example id="video-responsive-example" github="typography/video.md" show_dark=true >}}
<video class="w-full h-auto max-w-full" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}

## Custom styles

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-{size}` or `border` to set rounded corners and border.

{{< example id="video-customize-example" github="typography/video.md" show_dark=true >}}
<video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
{{< /example >}}
---
layout: home
title: Progress
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

## Default Example
The following component is a simple example of a progress bar. You need to add an inline style attribute with the percentage and add the values you want for the min and max ranges with the aria-valuenow, aria-valuemin and aria-valuamax respectively.
{{< example >}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-primary rounded role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Color variations & Title
Use the following modifier classes to update the color of the progress bar:

{{< example >}}
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-primary">Primary color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-primary rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-secondary">Secondary color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-secondary rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-tertiary">Tertiary color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-tertiary rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-info">Info color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-info rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-danger">Danger color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-danger rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-success">Success color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-success rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-warning">Warning color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
    <div class="progress-wrapper">
        <span class="fs-6 fw-bold text-dark">Dark color</span>
        <div class="progress mt-2">
            <div class="progress-bar bg-dark rounded" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
{{< /example >}}

## Multiple bars
Include multiple progress bars in a progress component if you need.
{{< example >}}
<div class="progress">
  <div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-secondary" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-tertiary" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Striped
Add <span class="fw-bold text-danger">.progress-bar-striped</span> to any <span class="fw-bold text-danger">.progress-bar</span> to apply a stripe via CSS gradient over the progress bar’s background color.
{{< example >}}
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{< /example >}}

## Animated stripes
The striped gradient can also be animated. Add <span class="fw-bold text-danger">.progress-bar-animated</span> to <span class="fw-bold text-danger">.progress-bar</span> to animate the stripes right to left via CSS3 animations.
{{< example >}}
<div class="progress">
  <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
{{< /example >}}

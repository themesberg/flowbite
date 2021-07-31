---
layout: home
title: Carousel
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---
## Slides only
Here’s a carousel with slides only. Note the presence of the <span class="fw-bold text-danger">.d-block</span> and <span class="fw-bold text-danger">.w-100</span> on carousel images to prevent browser default image alignment.
{{< example >}}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="rounded" src="/img/carousel/image-1.jpg" class="d-block w-100" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img class="rounded "src="/img/carousel/image-2.jpg" class="d-block w-100" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img class="rounded" src="/img/carousel/image-3.jpg" class="d-block w-100" alt="carousel image">
    </div>
  </div>
</div>
{{< /example >}}

## With controls
Adding in the previous and next controls. We recommend using <code>< button ></code> elements, but you can also use <code>< a ></code> elements with role="button".
{{< example >}}
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="rounded" src="/img/carousel/image-1.jpg" class="d-block w-100" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img class="rounded "src="/img/carousel/image-2.jpg" class="d-block w-100" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img class="rounded" src="/img/carousel/image-3.jpg" class="d-block w-100" alt="carousel image">
    </div>
  </div>
  <button class="carousel-control-prev rounded-start" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next rounded-end" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

## With indicators
{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="rounded" src="/img/carousel/image-1.jpg" class="d-block w-100" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img class="rounded "src="/img/carousel/image-2.jpg" class="d-block w-100" alt="carousel image">
    </div>
    <div class="carousel-item">
      <img class="rounded" src="/img/carousel/image-3.jpg" class="d-block w-100" alt="carousel image">
    </div>
  </div>
  <button class="carousel-control-prev rounded-start" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next rounded-end" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}
---
layout: docs
title: Navs & tabs
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

## Base nav
Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states. Swap modifier classes to switch between each style.
{{< example >}}
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

{{< example >}}
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

## Pills
Take that same HTML, but use <span class="fw-bold text-danger">.nav-pills</span> instead:

{{< example >}}
<div class="nav-wrapper position-relative">
    <ul class="nav nav-pills nav-fill flex-column flex-sm-row">
        <li class="nav-item me-sm-2">
            <a class="nav-link mb-3 mb-md-0 active" data-bs-toggle="tab" href="#">Home</a>
        </li>
        <li class="nav-item me-sm-2">
            <a class="nav-link mb-3 mb-md-0" data-bs-toggle="tab" href="#">Profile</a>
        </li>
        <li class="nav-item me-sm-2">
            <a class="nav-link mb-3 mb-md-0" data-bs-toggle="tab" href="#">Settings</a>
        </li>
        <li class="nav-item">
            <a class="nav-link mb-3 mb-md-0" data-bs-toggle="tab" href="#">Messages</a>
        </li>
    </ul>
</div>
{{< /example >}}

{{< example >}}
<div class="nav-wrapper position-relative">
    <ul class="nav nav-pills nav-fill flex-column flex-md-row">
        <li class="nav-item me-sm-2">
            <a class="nav-link mb-3 mb-md-0 d-flex align-items-center justify-content-center active" data-bs-toggle="tab" href="#">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
              Dashboard
            </a>
        </li>
        <li class="nav-item me-sm-2">
            <a class="nav-link mb-3 mb-md-0 d-flex align-items-center justify-content-center" data-bs-toggle="tab" href="#">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
              Profile
            </a>
        </li>
        <li class="nav-item me-sm-2">
            <a class="nav-link mb-3 mb-md-0 d-flex align-items-center justify-content-center" data-bs-toggle="tab" href="#">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
              Settings
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link mb-3 mb-md-0 d-flex align-items-center justify-content-center" data-bs-toggle="tab" href="#">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              Messages
            </a>
        </li>
    </ul>
</div>
{{< /example >}}

## Tabs
Takes the basic nav from above and adds the <span class="fw-bold text-danger">.nav-tabs</span> class to generate a tabbed interface. Use them to create tabbable regions with our <a class="text-decoration-underline" href="#">tab JavaScript plugin</a>.
{{< example >}}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
{{< /example >}}

## Horizontal Tab

{{< example >}}
<nav class="nav nav-pills flex-column flex-sm-row mb-3" id="pills-tab" role="tablist">
  <a class="flex-sm-fill text-sm-center nav-link me-sm-2 mb-2 mb-sm-0 active" aria-current="page" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  <a class="flex-sm-fill text-sm-center nav-link me-sm-2 mb-2 mb-sm-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  <a class="flex-sm-fill text-sm-center nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
</nav>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Yes, we make angels cry, raining down on earth from up above. Wanna see the show in 3D, a movie. Do you ever feel, feel so paper thin. It’s a yes or no, no maybe.</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Yes, we make angels cry, raining down on earth from up above. Wanna see the show in 3D, a movie. Do you ever feel, feel so paper thin. It’s a yes or no, no maybe.</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Yes, we make angels cry, raining down on earth from up above. Wanna see the show in 3D, a movie. Do you ever feel, feel so paper thin. It’s a yes or no, no maybe.</div>
</div>
{{< /example >}}

## Vertical Nav Tab
{{< example >}}
<div class="d-flex align-items-start">
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
        <button class="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</buttona>
        <button class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Placeholder content for the tab panel. This one relates to the home tab. Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me stop by? Heavy is the head that wears the crown. Yes, we make angels cry, raining down on earth from up above. Wanna see the show in 3D, a movie. Do you ever feel, feel so paper thin. It’s a yes or no, no maybe.</div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Placeholder content for the tab panel. This one relates to the home tab. Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me stop by? Heavy is the head that wears the crown. Yes, we make angels cry, raining down on earth from up above. Wanna see the show in 3D, a movie. Do you ever feel, feel so paper thin. It’s a yes or no, no maybe.</div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Placeholder content for the tab panel. This one relates to the home tab. Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me stop by? Heavy is the head that wears the crown. Yes, we make angels cry, raining down on earth from up above. Wanna see the show in 3D, a movie. Do you ever feel, feel so paper thin. It’s a yes or no, no maybe.</div>
    </div>
</div>
{{< /example >}}
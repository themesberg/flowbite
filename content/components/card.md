---
layout: home
title: Cards
description: Use the glassmorphism card components to build beautiful UI/UX layouts for your pages
group: components
toc: true
---

{{< prose >}}
## How it works

These card components can be used in a "plug and play" way for your layout. We made sure to build a large variety of cards, which can be used in general, for applications, websites, blogs, and many more.

Most of these elements are built using other components from this framework, such as buttons, icons, images, lists, and so on. Check out all of the components by browsing this page.

## Default card with image
{{< /prose >}}

{{< example >}}
<div class="card bg-blur-20" style="max-width:24rem">
    <img src="/img/blog/image-2.jpg" class="card-img-top" alt="blog image">
    <div class="card-body">
        <h4 class="fs-5 card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="d-inline-flex align-items-center fw-bold text-primary">
            Read more
            <svg class="icon icon-xxs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>        
        </a>
    </div>
</div>
{{< /example >}}

## Simple card

{{< example >}}
<div class="card bg-blur-20" style="max-width:24rem">
    <div class="card-body">
        <h4 class="fs-5 card-title">Some title here</h4>
        <span class="card-subtitle small fw-normal text-gray-400 mb-3 d-inline-flex align-items-center">
            <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            15 Mar 2021
        </span> 
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="d-inline-flex align-items-center fw-bold text-primary">
            Read more
            <svg class="icon icon-xxs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>        
        </a>
    </div>
</div>
{{< /example >}}

## Card with list-group

{{< example >}}
<div class="card px-4" style="max-width:30rem">
    <!-- List Group -->
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-transparent border-bottom py-3 px-0">
            <div class="row align-items-center">
                <div class="col-auto">
                    <!-- Avatar -->
                    <a href="#" class="avatar">
                        <img class="p-1 bg-gray-50 rounded-circle" alt="Image placeholder" src="/img/team/profile-picture-1.jpg">
                    </a>
                </div>
                <div class="col-auto px-0">
                    <h4 class="fs-6 text-gray-900 mb-0">
                        <a href="#">Chris Wood</a>
                    </h4>
                    <div class="d-flex align-items-center">
                        <div class="bg-success rounded-circle dot me-1"></div>
                        <span class="small text-gray-600">Online</span>
                    </div>
                </div>
                <div class="col text-end">
                    <a href="#" class="btn btn-sm btn-primary d-inline-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Invite
                    </a>
                </div>
            </div>
        </li>
        <li class="list-group-item bg-transparent border-bottom py-3 px-0">
            <div class="row align-items-center">
                <div class="col-auto">
                    <!-- Avatar -->
                    <a href="../users.html" class="avatar">
                        <img class="p-1 bg-gray-50 rounded-circle" alt="Image placeholder" src="/img/team/profile-picture-2.jpg">
                    </a>
                </div>
                <div class="col-auto px-0">
                    <h4 class="fs-6 text-gray-900 mb-0">
                        <a href="#">Jose Leos</a>
                    </h4>
                    <div class="d-flex align-items-center">
                        <div class="bg-warning rounded-circle dot me-1"></div>
                        <span class="small text-gray-600">In a meeting</span>
                    </div>
                </div>
                <div class="col text-end">
                    <a href="#" class="btn btn-sm btn-primary d-inline-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Invite
                    </a>
                </div>
            </div>
        </li>
        <li class="list-group-item bg-transparent border-bottom py-3 px-0">
            <div class="row align-items-center">
                <div class="col-auto">
                    <!-- Avatar -->
                    <a href="#" class="avatar">
                        <img class="p-1 bg-gray-50 rounded-circle" alt="Image placeholder" src="/img/team/profile-picture-3.jpg">
                    </a>
                </div>
                <div class="col-auto px-0">
                    <h4 class="fs-6 text-gray-900 mb-0">
                        <a href="#">Bonnie Green</a>
                    </h4>
                    <div class="d-flex align-items-center">
                        <div class="bg-danger rounded-circle dot me-1"></div>
                        <span class="small text-gray-600">Offline</span>
                    </div>
                </div>
                <div class="col text-end">
                    <a href="#" class="btn btn-sm btn-primary d-inline-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Invite
                    </a>
                </div>
            </div>
        </li>
        <li class="list-group-item bg-transparent py-3 px-0">
            <div class="row align-items-center">
                <div class="col-auto">
                    <!-- Avatar -->
                    <a href="#" class="avatar">
                        <img class="p-1 bg-gray-50 rounded-circle" alt="Image placeholder" src="/img/team/profile-picture-4.jpg">
                    </a>
                </div>
                <div class="col-auto px-0">
                    <h4 class="fs-6 text-gray-900 mb-0">
                        <a href="#">Neil Sims</a>
                    </h4>
                    <div class="d-flex align-items-center">
                        <div class="bg-success rounded-circle dot me-1"></div>
                        <span class="small text-gray-600">Online</span>
                    </div>
                </div>
                <div class="col text-end">
                    <a href="#" class="btn btn-sm btn-primary d-inline-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Invite
                    </a>
                </div>
            </div>
        </li>
    </ul>
</div>
{{< /example >}}

## Card with tabs

{{< example >}}
    <div class="card">
        <div class="card-header bg-transparent">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link d-inline-flex align-items-center active" aria-current="true" href="#">
                        <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                        Settings
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-inline-flex align-items-center" href="#">
                        <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                        Profile
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-sm btn-primary">Go somewhere</a>
        </div>
    </div>
{{< /example >}}

## Image overlay

{{< example >}}
<div class="card border-0" style="max-width:40rem;">
    <img src="/img/blog/image-1.jpg" class="card-img fmxh-400" alt="card image">
    <div class="card-img-overlay border-0 bg-blur-25 m-sm-3 m-xl-4 pt-lg-5 px-lg-5 border">
        <h4 class="card-title">We built an OpenAI generator</h4>
        <div class="d-flex align-items-center pb-3">
            <a class="me-4 d-flex align-items-center text-gray-900" href="#">
                <img class="avatar xs-avatar me-2 rounded-circle border border-white" src="/img/team/profile-picture-1.jpg" alt="Jo portrait"> 
                William White
            </a>
            <div class="d-flex align-items-center">
                <svg class="icon icon-xs text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                15 March 2020
            </div>
        </div>
        <p class="card-text mb-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a class="btn btn-sm btn-primary d-inline-flex align-items-center" href="#">
            <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
            See story
        </a>
    </div>
</div>
{{< /example >}}

## Horizontal Card

{{< example >}}
<div class="card" style="max-width:38rem;">
    <div class="row g-0 align-items-center">
        <div class="col-12 col-lg-4">
            <img class="rounded-3 p-lg-2" src="/img/blog/image-4.jpg" alt="card image">
        </div>
        <div class="col-12 col-lg-8">
            <div class="card-body">
                <h5 class="card-title">Some awesome title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div class="d-flex align-items-center pb-3">
                    <a class="d-flex align-items-center text-gray-900 me-4" href="#">
                        <img class="avatar xs-avatar me-2 rounded-circle border border-white" src="/img/team/profile-picture-1.jpg" alt="Jo portrait"> William White
                    </a>
                    <div class="d-flex small align-items-center">
                        <svg class="icon icon-xxs text-gray-500 me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        15 March 2020
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Card Groups

{{< example >}}
<div class="card-group">
    <div class="card">
        <img src="/img/blog/image-1.jpg" class="card-img-top" alt="card image">
        <div class="card-body">
            <span class="badge bg-primary">
                <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                Article
            </span>
            <h5 class="card-title mt-2">Bootstrap 5</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card">
        <img src="/img/blog/image-2.jpg" class="card-img-top" alt="card image">
        <div class="card-body">
            <span class="badge bg-primary">
                <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                Article
            </span>
            <h5 class="card-title mt-2">Homepage redesign</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div class="card">
        <img src="/img/blog/image-3.jpg" class="card-img-top" alt="card image">
        <div class="card-body">
            <span class="badge bg-secondary">
                <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Video
            </span>
            <h5 class="card-title mt-2">React Tutorial</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>
{{< /example >}}

## Profile Cards

### Image & Cover 

{{< example >}}
<div class="card text-center border-white" style="max-width:28rem">
    <div class="card-header p-0">
        <img class="rounded-top" src="/img/team/cover-image.jpg" alt="Joseph Portrait">
    </div>
    <div class="image-lg mt-n6 mt-md-n7 mx-auto">
        <img src="/img/team/profile-picture-4.jpg" class="image-xl bg-blur-10 bg-white-25 rounded-circle border p-3" alt="Joseph Portrait">
    </div>
    <div class="card-body px-lg-5 pb-5">
        <h3 class="h5 card-title mb-3">Charles McBrayer</h3>
        <a class="btn btn-sm btn-primary d-inline-flex align-items-center mb-3" href="#">
            <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
            Follow
        </a>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the.</p>
    </div>
</div>
{{< /example >}}

### Glass body

{{< example >}}
<div class="card bg-transparent border-0 overflow-hidden" style="max-width:28rem">
    <div class="position-relative">
        <img src="/img/team/profile-picture-8.jpg" class="card-img-top rounded" alt="Neil Portrait">
    </div>
    <div class="card-body bg-white-75 bg-blur-15 position-relative text-center shadow-sm rounded border mt-n7 mx-3 mb-3">
        <h3 class="h5 card-title">Michael Rollins</h3>
        <span class="text-muted d-flex align-items-center justify-content-center">
            <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
            New York, USA
        </span>
        <p class="mt-3">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
        <div class="btn-group">
            <button class="btn btn-primary d-inline-flex align-items-center">
                <svg class="icon icon-sm me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                Follow
            </button>
            <button class="btn btn-primary d-inline-flex align-items-center border-right" aria-label="mesage button" title="message button">
                <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </button>
        </div>
    </div>
</div>
{{< /example >}}

### Wide Profile Card

{{< example >}}
<div class="card" style="max-width:38rem">
    <div class="card-body">
        <div class="d-block d-sm-flex text-center text-sm-start align-items-center">
            <div class="mb-4 mb-sm-0">
                <img src="/img/team/profile-picture-4.jpg" class="image-lg bg-white rounded-circle p-2" alt="Frank Portrait">
            </div>
            <div class="px-4 px-sm-0 ms-sm-3 ms-xl-5">
                <h3 class="h5 mt-0">Chadwick Harrison</h3> 
                <span class="text-gray-600">Senior Designer</span>
                <div class="d-flex justify-content-center rounded-sm my-3">
                    <div class="d-flex flex-column me-4"> 
                        <span class="h6 fw-bold text-gray-600">Articles</span> 
                        <span class="h5 text-gray-900 fw-normal">38</span> 
                    </div>
                    <div class="d-flex flex-column me-4"> 
                        <span class="h6 fw-bold text-gray-600">Followers</span> 
                        <span class="h5 text-gray-900 fw-normal">100k</span> 
                    </div> 
                    <div class="d-flex flex-column"> 
                        <span class="h6 fw-bold text-gray-600">Posts</span> 
                        <span class="h5 text-gray-900 fw-normal">1578</span> 
                    </div>                                    
                </div>
                <div class="d-grid">
                    <button class="btn btn-sm btn-primary d-inline-flex align-items-center justify-content-center">
                        <svg class="icon icon-sm me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                        Follow
                    </button> 
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Pricing Cards

### Simple pricing card

{{< example >}}
<div class="card p-4" style="max-width:30rem">
    <div class="card-header bg-white-25 text-dark text-center">
        <span class="d-block">
            <span class="display-1 fw-bolder">
            <span class="align-top fw-bold fs-3">$</span>19
        </span>
        <span class="fw-bold text-muted small">/ month</span>
        </span>
    </div>
    <div class="card-body">
        <p>Faster sites deliver better business results for your clients.</p>
        <ul class="list-unstyled mb-4">
            <li class="list-item pb-2"><span class="fw-bolder text-dark">Full Support</span> No</li>
            <li class="list-item pb-2"><span class="fw-bolder text-dark">Storage</span> 50 GB</li>
            <li class="list-item"><span class="fw-bolder text-dark">Monthly Visitors</span> 400k</li>
        </ul>
        <div class="d-grid">
            <a href="#" class="btn btn-primary">
                <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                Add to Cart
            </a>
        </div>
    </div>
</div>
{{< /example >}}

### Border top & features list

{{< example >}}
 <div class="card border-0 border-top border-5 border-primary p-4" style="max-width:26rem">
    <div class="card-header bg-transparent text-dark p-3">
        <h3 class="h5 fw-bold mb-4">Starter plan</h3>
        <span class="display-1 fw-bolder">
            <span class="align-top fw-bold fs-3">$</span>19
        </span>
        <span class="text-muted fw-normal fs-5">/ month</span>
    </div>
    <div class="card-body pt-2">
        <ul class="list-unstyled mb-4">
            <li class="list-item d-flex align-items-center h6 pb-3">
                <div class="icon icon-xxs icon-shape icon-shape-success rounded-circle me-3">
                    <span class="fas fa-check"></span>
                </div>
                1 free domain
            </li>
            <li class="list-item d-flex align-items-center h6 pb-3">
                <div class="icon icon-xxs icon-shape icon-shape-success rounded-circle me-3">
                    <span class="fas fa-check"></span>
                </div>
                Storage space: <strong>5GB</strong>
            </li>
            <li class="list-item d-flex align-items-center h6 pb-3">
                <div class="icon icon-xxs icon-shape icon-shape-success rounded-circle me-3">
                    <span class="fas fa-check"></span>
                </div>
                <strong>100k</strong> monthly visitors</li>
            <li class="list-item d-flex align-items-center h6 pb-3">
                <div class="icon icon-xxs icon-shape icon-shape-success rounded-circle me-3">
                    <span class="fas fa-check"></span>
                </div>
                One-click staging site
            </li>
            <li class="list-item d-flex align-items-center h6 pb-3">
                <div class="icon icon-xxs icon-shape icon-shape-success rounded-circle me-3">
                    <span class="fas fa-check"></span>
                </div>
                Search engine wizard 
            </li>
            <li class="list-item d-flex align-items-center h6 pb-3">
                <div class="icon icon-xxs icon-shape icon-shape-success rounded-circle me-3">
                    <span class="fas fa-check"></span>
                </div>
                Community support
            </li>
        </ul>
        <div class="d-grid">
            <a href="#" class="btn btn-primary">Start Starter</a>
        </div>
    </div>
</div>
{{< /example >}}

### Colorful body and glass header

{{< example >}}
<div class="card bg-linear-gradient text-dark border-0 mt-5" style="max-width:28rem">
    <div class="card-header bg-transparent border-0 text-center">
        <div class="bg-blur-15 rounded border mt-n6 mx-lg-4 py-5">
            <svg class="icon icon-lg text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <h2 class="h5 mt-3">Individual</h2>
            <h3 class="display-2 fw-bolder mb-0"><span class="align-top fs-4">$</span>19<span class="fw-normal fs-5">/ month</span></h3>
        </div>
    </div>
    <div class="card-body text-center pt-0">
        <p class="mb-4"><span class="fw-bold">Desktop Publishing</span> packages and web page editors now use this.</p>
        <div class="d-grid">
            <a href="#" class="btn btn-primary d-inline-flex align-items-center justify-content-center">
                Choose Plan
                <svg class="icon icon-xxs ms-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
{{< /example >}}

### Wide pricing card

{{< example >}}
<div class="card py-4" style="max-width:34rem">
    <div class="row g-0 align-items-center">
        <div class="col-sm-5">
            <div class="card-header bg-transparent border-0 text-sm-center text-dark py-0">
                <h3 class="mb-0">Enterprise</h3>
                <span class="d-block my-3">
                    <span class="display-1 fw-bolder"><span class="align-baseline fs-4 fw-bold">$</span>199
                </span>
                </span>
                <div class="d-none d-sm-grid">
                    <a href="#" class="btn btn-sm btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
        <div class="col-sm-7">
            <div class="card-body py-0">
                <ul class="list-group list-group-flush price-list mb-4 mb-sm-0">
                    <li class="list-group-item d-flex align-items-center fw-normal border-0 ps-0">                                        
                        <div class="icon-shape icon-xxs bg-white-75 text-primary rounded-circle me-2">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                        </div>
                        Community support
                    </li>
                    <li class="list-group-item d-flex align-items-center fw-normal border-0 ps-0">
                        <div class="icon-shape icon-xxs bg-white-75 text-primary rounded-circle me-2">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                        </div>
                        15 GB SSD storage
                    </li>
                    <li class="list-group-item d-flex align-items-center fw-normal border-0 ps-0">
                        <div class="icon-shape icon-xxs bg-white-75 text-primary rounded-circle me-2">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>     
                        </div>
                        One-click staging site
                    </li>
                    <li class="list-group-item d-flex align-items-center fw-normal border-0 ps-0">
                        <div class="icon-shape icon-xxs bg-white-75 text-primary rounded-circle me-2">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        10 E-mail accounts
                    </li>
                    <li class="list-group-item d-flex align-items-center fw-normal border-0 ps-0">
                        <div class="icon-shape icon-xxs bg-white-75 text-primary rounded-circle me-2">
                            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                        </div>
                        Premium templates
                    </li>
                </ul>
                <div class="d-grid d-sm-none">
                    <a href="#" class="btn btn-sm btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Application cards

{{< example >}}
<div class="card card-body">
    <h3 class="h5 mb-3">Alerts &amp; Notifications</h3>
    <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex align-items-center justify-content-between rounded-0 ps-0 py-3 border-bottom">
            <div>
                <h3 class="h6 mb-1">Company News</h3>
                <span class="small">Get Spaces news, announcements, and product updates</span>
            </div>
            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckNotifi1" checked="checked"> <label class="form-check-label" for="flexSwitchCheckNotifi1"></label></div>
        </li>
        <li class="list-group-item d-flex align-items-center justify-content-between rounded-0 ps-0 py-3 border-bottom">
            <div>
                <h3 class="h6 mb-1">Account Activity</h3>
                <span class="small">Get important notifications about you or activity you've missed</span>
            </div>
            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckNotifi2"> <label class="form-check-label" for="flexSwitchCheckNotifi2"></label></div>
        </li>
        <li class="list-group-item d-flex align-items-center justify-content-between ps-0 py-3">
            <div>
                <h3 class="h6 mb-1">Meetups Near You</h3>
                <span class="small">Get an email when a Dribbble Meetup is posted close to my location</span>
            </div>
            <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckNotifi3"> <label class="form-check-label" for="flexSwitchCheckNotifi3"></label></div>
        </li>
    </ul>
</div>
{{< /example >}}

{{< example >}}
<div class="row">
    <div class="col-12 col-xl-6">
        <div class="card" style="max-width:24rem">
            <div class="card-body d-block d-md-flex align-items-center">
                <div class="icon-shape icon-shape-primary icon-md rounded-circle me-3 mb-4 mb-md-0">
                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
                </div>
                <div>
                    <span class="d-block h6 fw-normal">Global Budget</span>
                    <h5 class="h3 fw-extrabold mb-1">$25,370</h5>
                    <div class="small mt-2"><span class="fas fa-angle-up text-success"></span> <span class="text-success fw-bold">18.2%</span> higher vs previous month</div>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="max-width:35rem">
    <div class="card-header d-flex align-items-center bg-white-25">
        <h3 class="h5 mb-0">Notifications</h3>
        <div class="ms-auto">
            <a class="text-primary fw-bold d-inline-flex align-items-center" href="#">
                <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                View all
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="list-group list-group-flush list-group-timeline">
            <div class="list-group-item border-0">
            <div class="row">
                <div class="col-auto">
                    <div class="icon-shape icon-xs icon-shape-primary rounded-1">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
                <div class="col ms-n2 mb-3">
                    <h3 class="h6 fw-bolder mb-1">New message</h3>
                    <p class="mb-1">Let's meet at Starbucks at 11:30. Wdyt?</p>
                    <div class="d-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        <span class="text-gray">2 minute ago</span>
                    </div>
                </div>
            </div>
            </div>
            <div class="list-group-item border-0">
            <div class="row">
                <div class="col-auto">
                    <div class="icon-shape icon-xs icon-shape-warning rounded-1">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
                <div class="col ms-n2 mb-3">
                    <h3 class="h6 fw-bolder mb-1">Product issue</h3>
                    <p class="mb-0">A new issue has been reported for Pixel Pro.</p>
                    <div class="d-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        <span class="text-gray">10 minute ago</span>
                    </div>
                </div>
            </div>
            </div>
            <div class="list-group-item border-0">
            <div class="row">
                <div class="col-auto">
                    <div class="icon-shape icon-xs icon-shape-success rounded-1">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
                <div class="col ms-n2">
                    <h3 class="h6 fw-bolder mb-1">Product update</h3>
                    <p class="mb-0">Spaces - Listings Template has been updated</p>
                    <div class="d-flex align-items-center">
                        <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        <span class="text-gray">4 hours ago</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="max-width:28rem">
    <div class="card-header bg-transparent py-2">
        <div class="float-end">
            <div class="dropdown">
                <a class="btn btn-sm fs-5 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg class="icon icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </a>
                <ul class="dropdown-menu py-0" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item rounded-top" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item rounded-bottom" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card-body text-center p-4">
    <a href="#">
        <div class="icon-shape icon-lg icon-shape-purple rounded-1 mb-3">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        </div>
    </a>
    <h4 class="card-title">Creative Group</h4>
    <p class="card-description">BootstrapCreative closed discussion group. Access requires purchase of a Bootstrap 4 Quick Start package to join</p>
    <h5 class="h6 mt-4">Last members</h5>
    <div class="avatar-group">
        <a href="#" class="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson" data-bs-original-title="" title="">
            <img class="rounded" alt="Image placeholder" src="/img/team/profile-picture-1.jpg">
        </a>
        <a href="#" class="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid" data-bs-original-title="" title="">
            <img class="rounded" alt="Image placeholder" src="/img/team/profile-picture-2.jpg">
        </a>
        <a href="#" class="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith" data-bs-original-title="" title="">
            <img class="rounded" alt="Image placeholder" src="/img/team/profile-picture-3.jpg">
        </a>
        <a href="#" class="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe" data-bs-original-title="" title="">
            <img class="rounded" alt="Image placeholder" src="/img/team/profile-picture-4.jpg">
        </a>
    </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card">
    <div class="card-body">
        <div class="row align-items-center">
            <div class="col-12 col-xl-6">
                <h2 class="fs-1">Talk to us</h2>
                <p class="mb-4 text-muted">
                    Please fill the form on the right side to schedule a call or discussion and meeting on the your convenient time.
                </p>
                <h3 class="fs-5 mb-3">You can contact us also here:</h3>
                <div class="text-muted d-flex align-items-center mb-2">
                    <svg class="icon icon-xs text-primary me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>(+00) 123 4567 789</span>
                </div>
                <div class="text-muted d-flex align-items-center mb-2">
                    <svg class="icon icon-xs text-primary me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                    <span>name@company.com</span>
                </div>
                <ul class="d-flex flex-wrap list-unstyled">
                    <li class="me-4">
                        <img class="img-fluid image" src="/img/clients/google.svg" alt="paypal logo">
                    </li>
                    <li>
                        <img class="img-fluid image" src="/img/clients/netflix.svg" alt="forbes logo">
                    </li>
                </ul>
            </div>
            <div class="col-12 col-xl-6">
                <div class="p-xl-3">
                    <h3 class="h5 fw-normal text-gray-700 mb-3">Schedule Discussion</h3> 
                    <form action="#">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="mb-4">
                                    <label for="exampleFormControlCta1" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlCta1" placeholder="Brenda Kelly" required="">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-4">
                                    <label for="exampleFormControlCta2" class="form-label">Your Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlCta2" placeholder="example@company.com" required="">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="mb-4">
                                    <label class="form-label" for="exampleInputDate1">When?</label>
                                    <div class="input-group mb-4">
                                        <span class="input-group-text" id="basic-addonDate1">
                                            <svg class="icon icon-xxs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                        </span>
                                        <input class="form-control" id="exampleInputDate1" placeholder="Select date" type="text" aria-label="Date with icon left">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="mb-4">
                                    <label class="form-label" for="inlineFormCustomSelectPref">Where?</label>
                                    <select class="form-select" id="inlineFormCustomSelectPref" aria-label="Default select example">
                                        <option selected="">City</option>
                                        <option value="1">New York</option>
                                        <option value="2">Washington</option>
                                        <option value="3">San Francisco</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 d-grid">
                                <button type="submit" class="btn btn-primary">Book a Schedule</button>
                            </div>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card p-lg-3" style="max-width:30rem;">
    <div class="card-header bg-transparent border-0 pb-0 mb-3">
        <h2 class="h4">Sign in to our platform</h2>
        <span>Login here using your username and password</span>   
    </div>
    <div class="card-body">
        <form action="#">
            <!-- Form -->
            <div class="mb-4">
                <label class="mb-2" for="exampleInputEmailCard1">Your Email</label>
                <div class="input-group">
                    <span class="input-group-text " id="basic-addon1">
                        <svg class="icon icon-xxs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </span>
                    <input type="email" class="form-control" placeholder="example@company.com" id="exampleInputEmailCard1" aria-describedby="exampleInputEmailCard1">
                </div>  
            </div>
            <!-- End of Form -->
            <!-- Form -->
            <div class="mb-4">
                <label class="mb-2" for="exampleInputPasswordCard1">Your Password</label>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon2">
                        <svg class="icon icon-xxs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    </span>
                    <input type="password" class="form-control" placeholder="Password" id="exampleInputPasswordCard1" aria-describedby="exampleInputPasswordCard1">
                </div>  
            </div>
            <!-- End of Form -->
            <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                <div class="form-check mb-0">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck5">
                    <label class="form-check-label mb-0" for="defaultCheck5">
                        Remember me
                    </label>
                </div>
                <div><a href="#" class="small text-right">Lost password?</a></div>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
        <div class="mt-3 mb-4">
            <span class="fw-normal">or login with</span>
        </div>
        <div class="d-flex my-4">
            <button class="btn btn-icon-only btn-facebook me-2" type="button" aria-label="facebook button" title="facebook button">
                <svg class="icon icon-xxs" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </button>
            <button class="btn btn-icon-only text-white btn-twitter me-2" type="button" aria-label="twitter button" title="twitter button">
                <svg class="icon icon-xxs" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </button>
            <button class="btn btn-icon-only btn-github" type="button" aria-label="github button" title="github button">
                <svg class="icon icon-xxs" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" class="svg-inline--fa fa-github-alt fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
            </button>
        </div>
        <div class="d-block d-sm-flex align-items-center mt-4">
            <span class="fw-normal">
                Not registered?
                <a href="#" class="fw-bold">Create account</a>
            </span>
        </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="max-width:28rem;">
    <img src="/img/ecommerce/item-1.png" alt="black watch">
    <div class="card-footer bg-white-25 p-4">
        <a href="#" class="h5">Apple Watch Series 3</a>
        <h3 class="h6 fw-light text-gray mt-2">Space Gray Aluminum Case with Black Sport Band</h3>
        <div class="d-flex align-items-center mt-3"> 
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span class="badge bg-primary ms-2">4.7</span>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="h5 mb-0 text-gray-700">$299.00</span> 
            <a class="btn btn-sm btn-primary d-inline-flex align-items-center" href="#"> 
                <svg class="icon icon-xxs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                Add to cart
            </a>
        </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="max-width:28rem;">
    <div class="card-header bg-white-25">
        <img src="/img/ecommerce/item-2.png" alt="Beats speakers">
    </div>
    <div class="card-body border-0">
        <a href="#" class="h5">Beats Pill</a>
        <h3 class="fs-6 fw-normal mt-2">Black Beats Pill + Portable Speaker</h3>
        <div class="d-flex align-items-center mt-3"> 
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="icon icon-xs text-warning" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span class="badge bg-primary ms-2">4.7</span>
        </div>
    </div>
    <div class="card-footer bg-white-25 p-4">
        <div class="d-flex align-items-center">
            <span class="h5 mb-0 line-through me-2">$299.00 </span><span class="h6 mb-0 text-danger">$199.00</span>
            <div class="ms-auto">
                <button class="btn btn-icon-only btn-primary px-1" type="button" aria-label="add to cart button" title="add to cart button">
                    <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                </button>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="max-width:26rem;">
    <div class="card-body">
        <h3 class="h5 card-title">Price range</h3>
        <div class="input-slider-container">
            <div id="input-slider-ecommerce" class="input-slider noUi-target noUi-ltr noUi-horizontal" data-range-value-min="100" data-range-value-max="500">
                <div class="noUi-base">
                <div class="noUi-connects">
                    <div class="noUi-connect" style="transform: translate(0%, 0px) scale(0.25, 1);"></div>
                </div>
                <div class="noUi-origin" style="transform: translate(-75%, 0px); z-index: 4;">
                    <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="25.0" aria-valuetext="200.00"></div>
                </div>
                </div>
            </div>
            <div class="row mt-3 d-none">
                <div class="col-6"><span id="input-slider-value" class="range-slider-value" data-range-value-low="200"></span></div>
            </div>
        </div>
        <div class="d-flex mb-3">
            <div class="col-md-6 me-2"><label class="fw-normal" for="priceRangeMin1">Min</label> <input class="form-control" id="priceRangeMin1" placeholder="$0" type="number"></div>
            <div class="col-md-6 text-right"><label class="fw-normal for="priceRangeMax1">Max</label> <input class="form-control" id="priceRangeMax1" placeholder="$1,0000" type="number"></div>
        </div>
        <div class="d-grid"><a href="#" class="btn btn-primary">Apply</a></div>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="card" style="max-width:26rem;">
    <div class="card-body">
        <h3 class="h5 mb-3">Categories</h3>
        <div class="row">
            <div class="col-12">
                <div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="" id="cartCheck6"> <label class="form-check-label fw-normal" for="cartCheck6">All Products</label></div>
            </div>
            <div class="col-12">
                <div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="" id="cartCheck7" checked> <label class="form-check-label fw-normal" for="cartCheck7">Headphones</label></div>
            </div>
            <div class="col-12">
                <div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="" id="cartCheck8" checked> <label class="form-check-label fw-normal" for="cartCheck8">Speakers</label></div>
            </div>
            <div class="col-12">
                <div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="" id="cartCheck9"> <label class="form-check-label fw-normal" for="cartCheck9">Mouse</label></div>
            </div>
            <div class="col-12">
                <div class="form-check mb-1"><input class="form-check-input" type="checkbox" value="" id="cartCheck10"> <label class="form-check-label fw-normal" for="cartCheck10">Stands</label></div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

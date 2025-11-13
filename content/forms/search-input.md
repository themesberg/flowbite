---
layout: docs
title: Tailwind CSS Search Input - Flowbite
description: Use the search input component as a text field to allow users to enter search queries and receive relevant page results available in multiple styles and sizes
group: forms
toc: true

previous: File Input
previousLink: forms/file-input/
next: Number Input
nextLink: forms/number-input/
---

The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

## Search bar example

Get started with the default example of a search input component including and icon and submit button.

{{< example github="forms/search-input.md" show_dark=true >}}
<form class="max-w-md mx-auto">   
    <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="search" id="search" class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
        <button type="button" class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
    </div>
</form>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Search with dropdown

Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

{{< example github="forms/search-input.md" show_dark=true iframeHeight="290" >}}
<form class="max-w-2xl mx-auto">
    <div class="flex shadow-xs rounded-base -space-x-0.5">
        <label for="search-dropdown" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
            All categories
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button">
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Shopping</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Images</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">News</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Finance</a>
                </li>
            </ul>
        </div>
        <input type="search" id="search-dropdown" id="input-group-1" class="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search for products" required>
        <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Search
        </button>
    </div>
</form>
{{< /example >}}

## Simple search input

Use the simplest form of a search input component with an icon and a search button next to the text field.

{{< example github="forms/search-input.md" show_dark=true >}}
<form class="flex items-center max-w-sm mx-auto space-x-2">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"/></svg>
        </div>
        <input type="text" id="simple-search" class="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded-base ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search branch name..." required />
    </div>
    <button type="submit" class="inline-flex items-center justify-center shrink-0 text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded-base w-10 h-10 focus:outline-none">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        <span class="sr-only">Icon description</span>
    </button>
</form>
{{< /example >}}

<div class="mt-8 -mb-5">
  {{< requires_js >}}
</div>

## Location search

Use this example where you can select a country in which you want to search for an address or city.

{{< example github="forms/search-input.md" show_dark=true iframeHeight="290" >}}
<form class="max-w-lg mx-auto">
    <div class="flex shadow-xs rounded-base -space-x-0.5">
        <label for="search-dropdown-location" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Choose city</label>
        <button id="dropdown-button-location" data-dropdown-toggle="dropdown-location" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
            USA
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown-location" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button-location">
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="7.5" fill="#1A47B8"/>
                        <mask id="mask0_19127_84442" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="16" height="16">
                        <circle cx="9" cy="9" r="7.5" fill="#0052B4"/>
                        </mask>
                        <g mask="url(#mask0_19127_84442)">
                        <mask id="mask1_19127_84442" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="9" height="7">
                        <rect x="1.5" y="1.5" width="8.125" height="5.90909" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask1_19127_84442)">
                        <rect width="10.2914" height="0.95751" transform="matrix(0.797977 0.602688 -0.350568 0.936537 1.59894 0.617188)" fill="white"/>
                        <rect width="4.59189" height="0.348185" transform="matrix(0.797977 0.602688 -0.350568 0.936537 1.49011 1.13037)" fill="#C8102E"/>
                        <rect width="3.90254" height="0.348185" transform="matrix(0.797977 0.602688 -0.350568 0.936537 6.62762 4.63916)" fill="#C8102E"/>
                        <rect width="10.2914" height="0.95751" transform="matrix(0.797977 -0.602688 0.350568 0.936537 1.24286 7.05615)" fill="white"/>
                        <rect width="4.32239" height="0.348185" transform="matrix(0.797977 -0.602688 0.350568 0.936537 6.11646 3.55151)" fill="#C8102E"/>
                        <rect width="4.19028" height="0.348185" transform="matrix(0.797977 -0.602688 0.350568 0.936537 1.56262 7.4541)" fill="#C8102E"/>
                        <rect x="1.48352" y="3.3916" width="8.32" height="2.03125" fill="white"/>
                        <rect x="4.92609" y="7.36096" width="5.90909" height="1.43" transform="rotate(-90 4.92609 7.36096)" fill="white"/>
                        <rect x="5.38446" y="7.36096" width="5.90909" height="0.585" transform="rotate(-90 5.38446 7.36096)" fill="#C8102E"/>
                        <rect x="1.48352" y="4.03821" width="8.32" height="0.830966" fill="#C8102E"/>
                        </g>
                        </g>
                        <path d="M6.02392 10.3043L6.43554 11.165L7.36504 10.9502L6.94879 11.8086L7.69627 12.4014L6.7656 12.6112L6.7682 13.5652L6.02392 12.9683L5.27966 13.5652L5.28227 12.6112L4.35156 12.4014L5.09907 11.8086L4.68276 10.9502L5.61232 11.165L6.02392 10.3043Z" fill="white"/>
                        <path d="M12.7292 11.9349L12.935 12.3653L13.3998 12.2578L13.1917 12.6871L13.5654 12.9835L13.1001 13.0884L13.1014 13.5654L12.7292 13.2669L12.3571 13.5654L12.3584 13.0884L11.8931 12.9835L12.2668 12.6871L12.0587 12.2578L12.5234 12.3653L12.7292 11.9349Z" fill="white"/>
                        <path d="M10.8151 7.36963L11.0209 7.8L11.4856 7.69254L11.2775 8.12177L11.6512 8.41816L11.1859 8.52305L11.1872 9.00006L10.8151 8.70161L10.4429 9.00006L10.4442 8.52305L9.97888 8.41816L10.3526 8.12177L10.1445 7.69254L10.6093 7.8L10.8151 7.36963Z" fill="white"/>
                        <path d="M12.7292 4.76086L12.935 5.19124L13.3998 5.0838L13.1917 5.51303L13.5654 5.8094L13.1001 5.91431L13.1014 6.39132L12.7292 6.09288L12.3571 6.39132L12.3584 5.91431L11.8931 5.8094L12.2668 5.51303L12.0587 5.0838L12.5234 5.19124L12.7292 4.76086Z" fill="white"/>
                        <path d="M14.4016 6.71729L14.6074 7.14766L15.0722 7.04019L14.864 7.46942L15.2378 7.76582L14.7724 7.87073L14.7737 8.34771L14.4016 8.0493L14.0295 8.34771L14.0308 7.87073L13.5654 7.76582L13.9392 7.46942L13.731 7.04019L14.1958 7.14766L14.4016 6.71729Z" fill="white"/>
                        <path d="M13.2061 8.99988L13.368 9.4981H13.8919L13.4681 9.80604L13.63 10.3042L13.2061 9.99632L12.7823 10.3042L12.9442 9.80604L12.5204 9.4981H13.0442L13.2061 8.99988Z" fill="white"/>
                    </svg>
                    Australia
                    </a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="white"/>
                        <path d="M3.05081 4.43384C2.46168 5.20033 2.01745 6.08378 1.75879 7.04352H5.66049L3.05081 4.43384Z" fill="#1A47B8"/>
                        <path d="M16.2415 7.04349C15.9828 6.08378 15.5386 5.20033 14.9495 4.43384L12.3398 7.04349H16.2415Z" fill="#1A47B8"/>
                        <path d="M1.75879 10.9567C2.01748 11.9164 2.46171 12.7998 3.05081 13.5663L5.6604 10.9567H1.75879Z" fill="#1A47B8"/>
                        <path d="M13.5677 3.05047C12.8012 2.46134 11.9178 2.01711 10.9581 1.75842V5.66009L13.5677 3.05047Z" fill="#1A47B8"/>
                        <path d="M4.43457 14.9497C5.20106 15.5388 6.08451 15.983 7.04422 16.2417V12.3401L4.43457 14.9497Z" fill="#1A47B8"/>
                        <path d="M7.04419 1.75842C6.08448 2.01711 5.20104 2.46134 4.43457 3.05044L7.04419 5.66006V1.75842Z" fill="#1A47B8"/>
                        <path d="M10.9581 16.2417C11.9178 15.983 12.8012 15.5388 13.5677 14.9497L10.9581 12.3401V16.2417Z" fill="#1A47B8"/>
                        <path d="M12.3398 10.9568L14.9495 13.5664C15.5386 12.8 15.9828 11.9165 16.2415 10.9568H12.3398Z" fill="#1A47B8"/>
                        <path d="M16.4365 8.02175H9.97831H9.97828V1.56349C9.65804 1.5218 9.33155 1.5 9 1.5C8.66839 1.5 8.34196 1.5218 8.02175 1.56349V8.02169V8.02172H1.56349C1.5218 8.34196 1.5 8.66845 1.5 9C1.5 9.33161 1.5218 9.65804 1.56349 9.97825H8.02169H8.02172V16.4365C8.34196 16.4782 8.66839 16.5 9 16.5C9.33155 16.5 9.65804 16.4782 9.97825 16.4365V9.97831V9.97828H16.4365C16.4782 9.65804 16.5 9.33161 16.5 9C16.5 8.66845 16.4782 8.34196 16.4365 8.02175Z" fill="#D80027"/>
                        <path d="M10.9556 10.9566L14.3023 14.3033C14.4563 14.1495 14.6031 13.9886 14.7432 13.8218L11.8779 10.9565H10.9556V10.9566Z" fill="#D80027"/>
                        <path d="M7.04405 10.9565H7.04399L3.69727 14.3033C3.85113 14.4572 4.012 14.604 4.17876 14.7441L7.04405 11.8788V10.9565Z" fill="#D80027"/>
                        <path d="M7.04299 7.0435V7.04344L3.69623 3.69666C3.5423 3.85052 3.39547 4.01139 3.25537 4.17815L6.12069 7.04347H7.04299V7.0435Z" fill="#D80027"/>
                        <path d="M10.9556 7.04363L14.3024 3.69681C14.1485 3.54289 13.9876 3.39605 13.8209 3.25598L10.9556 6.1213V7.04363Z" fill="#D80027"/>
                    </svg>
                    United Kingdom
                    </a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="white"/>
                        <path d="M16.5012 9.00018C16.5012 5.77544 14.4659 3.02637 11.6099 1.96667V16.0337C14.4659 14.974 16.5012 12.2249 16.5012 9.00018Z" fill="#D80027"/>
                        <path d="M1.5 8.99994C1.5 12.2247 3.53534 14.9737 6.39132 16.0334V1.96643C3.53534 3.02613 1.5 5.7752 1.5 8.99994Z" fill="#1A47B8"/>
                    </svg>
                    France
                    </a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 16.5C13.1423 16.5 16.5002 13.1421 16.5002 9C16.5002 4.85786 13.1423 1.5 9.00012 1.5C4.85792 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85792 16.5 9.00012 16.5Z" fill="white"/>
                        <path d="M16.5009 8.99956C16.5009 6.02627 14.7705 3.4572 12.2619 2.24414V15.7549C14.7705 14.5419 16.5009 11.9728 16.5009 8.99956Z" fill="#D80027"/>
                        <path d="M1.5 8.99955C1.5 11.9728 3.23035 14.5419 5.73897 15.755V2.24414C3.23035 3.4572 1.5 6.02627 1.5 8.99955Z" fill="#D80027"/>
                        <path d="M10.3031 9.9782L11.6073 9.32606L10.9552 9.00001V8.34787L9.65092 9.00001L10.3031 7.69573H9.65092L8.99877 6.71753L8.34662 7.69573H7.69447L8.34662 9.00001L7.04232 8.34787V9.00001L6.3902 9.32606L7.69447 9.9782L7.36841 10.6303H8.67271V11.6085H9.32483V10.6303H10.6291L10.3031 9.9782Z" fill="#D80027"/>
                    </svg>
                    Canada
                    </a>
                </li>
            </ul>
        </div>
        <input type="search" id="search-dropdown-location" id="input-group-4" class="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search for city or address" required>
        <button type="submit" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Search
        </button>
    </div>
</form>
{{< /example >}}

## Voice search

Get started with this example if you would like to enable voice search for your website and users.

{{< example github="forms/search-input.md" show_dark=true >}}
<form class="flex items-center max-w-lg mx-auto space-x-2">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/></svg>
        </div>
        <input type="text" id="voice-search" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search Mockups, Logos, Templates..." required />
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg class="w-4 h-4 text-body hover:text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/></svg>
        </button>
    </div>
    <button type="submit" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Search
    </button>
</form>
{{< /example >}}

## Advanced search input

Use this example to show multiple dropdown selection elements next to the search field.

{{< example github="forms/search-input.md" show_dark=true iframeHeight="290" >}}

<form class="max-w-2xl mx-auto">
    <div class="flex shadow-xs rounded-base -space-x-0.5">
        <label for="search-dropdown-advanced" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Your Email</label>
        <button id="dropdown-button-links" data-dropdown-toggle="dropdown-links" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
            http + https
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown-links" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-36">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button-links">
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">http</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">https</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">http + https</a>
                </li>
            </ul>
        </div>
        <input type="search" id="search-dropdown-advanced" id="input-group-6" class="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search for domain or URL" required>
        <button id="dropdown-button-links" data-dropdown-toggle="dropdown-domains" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
            Subdomain
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown-domains" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button-links">
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Subdomain</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Domain</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Top-Level Domain</a>
                </li>
                <li>
                    <a href="#" class="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Root Domain</a>
                </li>
            </ul>
        </div>
        <button type="submit" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        Search
        </button>
    </div>
</form>

{{< /example >}}
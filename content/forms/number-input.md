---
layout: docs
title: Tailwind CSS Number Input - Flowbite
description: Use the number input component to set a numeric value inside a form field based on multiple styles, variants, and layouts that can be used in product pages, forms, and more
group: forms
requires_js: true
toc: true

previous: Search Input
previousLink: forms/search-input/
next: Phone Input
nextLink: forms/phone-input/
---

The number input component from Flowbite can be used to introduce numeric values inside a form such as for a quantity field, a ZIP code, a phone number, your credit card number, and more. All of the UI components are coded exclusively with Tailwind CSS.

The examples on this page have basic functionality coded with JavaScript and the quantity input has a more advanced ability to increment and decrement the value with the help of the `data-input-counter` attribute from the Flowbite JS API.

## Default number input

Use this component to set a number value inside a form field by applying the `type="number"` attribute.

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
    <label for="number-input" class="block mb-2.5 text-sm font-medium text-heading">Select a number:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="90210" required />
</form>
{{< /example >}}

## ZIP code input

Use this example with an icon and helper text to set a ZIP code value inside a form field by also applying the `pattern` attribute to validate the input using a regular expression for a 5 digit number.

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
    <label for="zip-input" class="block mb-2.5 text-sm font-medium text-heading">ZIP code:</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/></svg>
        </div>
        <input type="text" id="zip-input" aria-describedby="helper-text-explanation" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="12345 or 12345-6789" pattern="^\d{5}(-\d{4})?$" required />
    </div>
    <p id="helper-text-explanation" class="mt-2.5 text-sm text-body">Please select a 5 digit number from 0 to 9.</p>
</form>
{{< /example >}}

## Phone number

Use this example to set a phone number inside a form field based on the `type="phone"` attribute and a dropdown menu to select the country code.

{{< example github="components/number-input.md" show_dark=true iframeHeight="360" >}}
<form class="max-w-sm mx-auto">
    <div class="flex items-center -space-x-px shadow-xs rounded-base">
        <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-fg-brand focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
            +1
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown-phone" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-54">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-phone-button">
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                        <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
                    United States (+1)
                    </a>
                </li>
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
                    Australia (+61)
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
                    United Kingdom (+4)
                    </a>
                </li>
                <li>
                    <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="white"/>
                        <path d="M16.5012 9.00018C16.5012 5.77544 14.4659 3.02637 11.6099 1.96667V16.0337C14.4659 14.974 16.5012 12.2249 16.5012 9.00018Z" fill="#D80027"/>
                        <path d="M1.5 8.99994C1.5 12.2247 3.53534 14.9737 6.39132 16.0334V1.96643C3.53534 3.02613 1.5 5.7752 1.5 8.99994Z" fill="#1A47B8"/>
                    </svg>
                    France (+33)
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
                    Canada (+1)
                    </a>
                </li>
            </ul>
        </div>
        <label for="phone-input" class="mb-2.5 text-sm font-medium text-heading sr-only">Phone number:</label>
        <div class="relative w-full">
            <input type="phone" id="phone-input" class="w-full z-20 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-e-base focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand block w-full px-3 py-2.5 placeholder:text-body" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
        </div>
    </div>
</form>
{{< /example >}}

## Control buttons

Use this example with control buttons to increment and decrement the value inside the input field.

If you have the [Flowbite JS](https://flowbite.com/docs/getting-started/quickstart/) installed in your project then you can use the `data-input-counter` data attribute to initialize the target input field and then use the following data attributes to target the buttons that will increment and decrement the value of the input field:

- `data-input-counter` - initialize the input field
- `data-input-counter-increment` - increment the value of the input field
- `data-input-counter-decrement` - decrement the value of the input field

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="quantity-input" class="block mb-2.5 text-sm font-medium text-heading">Choose quantity:</label>
    <div class="relative flex items-center max-w-[9rem] shadow-xs rounded-base">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="border-x-0 h-10 placeholder:text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body" placeholder="999" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
    <p id="helper-text-explanation" class="mt-2.5 text-sm text-body shrink-0">Please select a 5 digit number from 0 to 9.</p>
</form>
{{< /example >}}

## Control buttons with icon

Use this example to also add an icon inside the input field to improve the user experience.

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="bedrooms-input" class="block mb-2.5 text-sm font-medium text-heading">Choose quantity:</label>
    <div class="relative flex items-center max-w-[11rem] shadow-xs rounded-base">
        <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" class="border-x-0 h-10 placeholder:text-heading text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body block pb-6 text-xs" placeholder="" value="3" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-body-subtle space-x-1 rtl:space-x-reverse">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4c0-1.6569-1.3431-3-3-3H6c-1.65685 0-3 1.3431-3 3v4h18Zm-2-7V8c0-1.65685-1.3431-3-3-3H8C6.34315 5 5 6.34315 5 8v2h14Z"/></svg>
            <span>Bedrooms</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
    <p id="helper-text-explanation" class="mt-2.5 text-sm text-body">Please select the number of bedrooms.</p>
</form>
{{< /example >}}

## Counter input

Use this example as an alternative style to the control buttons example above.

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="counter-input" class="block mb-1.5 text-sm font-medium text-heading">Choose quantity:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
            <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="counter-input" data-input-counter class="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
        <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6">
            <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
</form>
{{< /example >}}

## Currency input

This component can be used to set a currency value inside a form field when you need to set a price.

{{< example github="components/number-input.md" show_dark=true iframeHeight="290" >}}
<form class="max-w-[18rem] mx-auto flex shadow-xs rounded-base -space-x-px">
    <label for="currency-input" class="mb-2.5 text-sm font-medium text-heading sr-only">Your Email</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>
        </div>
        <input type="number" id="currency-input" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-s-base focus:ring-brand focus:border-brand placeholder:text-body" placeholder="Enter amount" required />
    </div>
    <button id="dropdown-currency-button" data-dropdown-toggle="dropdown-currency" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-fg-brand focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
        <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
        USD
        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
    </button>
    <div id="dropdown-currency" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
        <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-currency-button">
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
                    USD
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
                GPB
                </a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#1A47B8"/>
                    <path d="M9.00078 4.43494L9.24362 5.18227H10.0294L9.39365 5.64414L9.63649 6.39147L9.00078 5.92957L8.36504 6.39147L8.60788 5.64414L7.97217 5.18227H8.75794L9.00078 4.43494Z" fill="#FFDA44"/>
                    <path d="M5.7711 5.77211L6.4713 6.12883L7.02691 5.57324L6.90396 6.34932L7.60412 6.70606L6.82802 6.82899L6.70509 7.60513L6.34834 6.90496L5.57227 7.02792L6.12788 6.4723L5.7711 5.77211Z" fill="#FFDA44"/>
                    <path d="M4.43457 9.00005L5.1819 8.75721V7.97144L5.64374 8.60718L6.3911 8.36434L5.92918 9.00005L6.3911 9.63576L5.64374 9.39295L5.1819 10.0287V9.24289L4.43457 9.00005Z" fill="#FFDA44"/>
                    <path d="M5.7711 12.2283L6.12785 11.5281L5.57227 10.9724L6.34837 11.0954L6.70506 10.3953L6.82802 11.1714L7.60409 11.2943L6.90401 11.651L7.02691 12.4271L6.4713 11.8715L5.7711 12.2283Z" fill="#FFDA44"/>
                    <path d="M9.00078 13.5655L8.75791 12.8181H7.97217L8.60791 12.3563L8.36504 11.609L9.00078 12.0708L9.63649 11.609L9.39365 12.3563L10.0294 12.8181H9.24359L9.00078 13.5655Z" fill="#FFDA44"/>
                    <path d="M12.227 12.2283L11.5268 11.8715L10.9712 12.4271L11.0941 11.651L10.394 11.2943L11.1701 11.1714L11.293 10.3953L11.6497 11.0954L12.4258 10.9724L11.8702 11.5281L12.227 12.2283Z" fill="#FFDA44"/>
                    <path d="M13.5639 9.00017L12.8166 9.24301V10.0288L12.3547 9.39304L11.6074 9.63588L12.0693 9.00017L11.6074 8.36446L12.3547 8.6073L12.8166 7.97156V8.75736L13.5639 9.00017Z" fill="#FFDA44"/>
                    <path d="M12.227 5.77208L11.8702 6.47228L12.4258 7.02789L11.6497 6.9049L11.293 7.60507L11.1701 6.82897L10.394 6.70601L11.0941 6.34929L10.9712 5.57324L11.5268 6.12883L12.227 5.77208Z" fill="#FFDA44"/>
                </svg>
                EUR
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
                CAD
                </a>
            </li>
        </ul>
    </div>
</form>
{{< /example >}}

## Credit card input

Use this component to set the information needed when making an online transaction with a credit card by adding the card number, expiration date, and security code. The component uses the [Flowbite Datepicker](https://flowbite.com/docs/components/datepicker/).

{{< example github="components/number-input.md" show_dark=true iframeHeight="340" >}}
<form class="max-w-sm mx-auto">
    <label for="card-number-input" class="sr-only">Card number:</label>
    <div class="relative">
        <input type="text" id="card-number-input" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body pe-9" placeholder="4242 4242 4242 4242" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg fill="none" class="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"/></svg>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 my-4">
        <div class="relative max-w-sm col-span-2">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
            </div>
            <label for="card-expiration-input" class="sr-only">Card expiration date:</label>
            <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full ps-9 pe-3 py-2.5 shadow-xs placeholder:text-body" placeholder="12/23" required />
        </div>
        <div class="col-span-1">
            <label for="cvv-input" class="sr-only">Card CVV code:</label>
            <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="CVV" required />
        </div>
    </div>
    <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Pay now</button>
</form>
{{< /example >}}

## Pin code input

Use this example of a pin code input to set a 6 digit code. This can be used when setting up a new account or when making a payment and the code is sent via phone or email.

{{< example github="components/number-input.md" show_dark=true javascript=`
// use this simple function to automatically focus on the next input
function focusNextInput(el, prevId, nextId) {
    if (el.value.length === 0) {
        if (prevId) {
            document.getElementById(prevId).focus();
        }
    } else {
        if (nextId) {
            document.getElementById(nextId).focus();
        }
    }
}

document.querySelectorAll('[data-focus-input-init]').forEach(function(element) {
    element.addEventListener('keyup', function() {
        const prevId = this.getAttribute('data-focus-input-prev');
        const nextId = this.getAttribute('data-focus-input-next');
        focusNextInput(this, prevId, nextId);
    });
    
// Handle paste event to split the pasted code into each input
    element.addEventListener('paste', function(event) {
        event.preventDefault();
        const pasteData = (event.clipboardData || window.clipboardData).getData('text');
        const digits = pasteData.replace(/\D/g, ''); // Only take numbers from the pasted data

        // Get all input fields
        const inputs = document.querySelectorAll('[data-focus-input-init]');
        
        // Iterate over the inputs and assign values from the pasted string
        inputs.forEach((input, index) => {
            if (digits[index]) {
                input.value = digits[index];
                // Focus the next input after filling the current one
                const nextId = input.getAttribute('data-focus-input-next');
                if (nextId) {
                    document.getElementById(nextId).focus();
                }
            }
        });
    });
});
` >}}
<form class="max-w-sm mx-auto">
    <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
        <div>
            <label for="code-1" class="sr-only">First code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-next="code-2" id="code-1" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand h-10 w-10 shadow-xs placeholder:text-body" required />
        </div>
        <div>
            <label for="code-2" class="sr-only">Second code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand h-10 w-10 shadow-xs placeholder:text-body" required />
        </div>
        <div>
            <label for="code-3" class="sr-only">Third code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand h-10 w-10 shadow-xs placeholder:text-body" required />
        </div>
        <div>
            <label for="code-4" class="sr-only">Fourth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand h-10 w-10 shadow-xs placeholder:text-body" required />
        </div>
        <div>
            <label for="code-5" class="sr-only">Fifth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand h-10 w-10 shadow-xs placeholder:text-body" required />
        </div>
        <div>
            <label for="code-6" class="sr-only">Sixth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" class="block bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand h-10 w-10 shadow-xs placeholder:text-body" required />
        </div>
    </div>
    <p id="helper-text-explanation" class="mt-2.5 text-sm text-body">Please introduce the 6 digit code we sent via email.</p>
</form>
{{< /example >}}

## Number input with slider

This example can be used to set the value of a number input field by sliding the range slider component or by typing the value in the input field. The component uses the [Flowbite Range Slider](https://flowbite.com/docs/components/range-slider/).

{{< example github="components/number-input.md" show_dark=true iframeHeight="290" disable_init_js="true" javascript=`
// Get the elements
var rangeInput = document.getElementById('price-range-input');
var currencyInput = document.getElementById('currency-input');

// Function to update the currency input
function updateCurrencyInput() {
currencyInput.value = rangeInput.value;
}

// Add event listener to the range input
rangeInput.addEventListener('input', updateCurrencyInput);
` >}}
<form class="max-w-[24rem] mx-auto">
    <div class="flex shadow-xs rounded-base -space-x-px mb-4">
        <label for="currency-input-2" class="mb-2.5 text-sm font-medium text-heading sr-only">Your Email</label>
        <button id="dropdown-currency-button-2" data-dropdown-toggle="dropdown-currency-2" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-fg-brand focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-4 py-2.5 focus:outline-none">
            <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
            USD
            <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/></svg>
            </div>
            <input type="number" id="currency-input-2" class="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-e-base focus:ring-brand focus:border-brand placeholder:text-body" placeholder="Enter amount" value="1000" required />
        </div>
    </div>
    <div id="dropdown-currency-2" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
        <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-currency-button-2">
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                    <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
                    USD
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
                GPB
                </a>
            </li>
            <li>
                <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#1A47B8"/>
                    <path d="M9.00078 4.43494L9.24362 5.18227H10.0294L9.39365 5.64414L9.63649 6.39147L9.00078 5.92957L8.36504 6.39147L8.60788 5.64414L7.97217 5.18227H8.75794L9.00078 4.43494Z" fill="#FFDA44"/>
                    <path d="M5.7711 5.77211L6.4713 6.12883L7.02691 5.57324L6.90396 6.34932L7.60412 6.70606L6.82802 6.82899L6.70509 7.60513L6.34834 6.90496L5.57227 7.02792L6.12788 6.4723L5.7711 5.77211Z" fill="#FFDA44"/>
                    <path d="M4.43457 9.00005L5.1819 8.75721V7.97144L5.64374 8.60718L6.3911 8.36434L5.92918 9.00005L6.3911 9.63576L5.64374 9.39295L5.1819 10.0287V9.24289L4.43457 9.00005Z" fill="#FFDA44"/>
                    <path d="M5.7711 12.2283L6.12785 11.5281L5.57227 10.9724L6.34837 11.0954L6.70506 10.3953L6.82802 11.1714L7.60409 11.2943L6.90401 11.651L7.02691 12.4271L6.4713 11.8715L5.7711 12.2283Z" fill="#FFDA44"/>
                    <path d="M9.00078 13.5655L8.75791 12.8181H7.97217L8.60791 12.3563L8.36504 11.609L9.00078 12.0708L9.63649 11.609L9.39365 12.3563L10.0294 12.8181H9.24359L9.00078 13.5655Z" fill="#FFDA44"/>
                    <path d="M12.227 12.2283L11.5268 11.8715L10.9712 12.4271L11.0941 11.651L10.394 11.2943L11.1701 11.1714L11.293 10.3953L11.6497 11.0954L12.4258 10.9724L11.8702 11.5281L12.227 12.2283Z" fill="#FFDA44"/>
                    <path d="M13.5639 9.00017L12.8166 9.24301V10.0288L12.3547 9.39304L11.6074 9.63588L12.0693 9.00017L11.6074 8.36446L12.3547 8.6073L12.8166 7.97156V8.75736L13.5639 9.00017Z" fill="#FFDA44"/>
                    <path d="M12.227 5.77208L11.8702 6.47228L12.4258 7.02789L11.6497 6.9049L11.293 7.60507L11.1701 6.82897L10.394 6.70601L11.0941 6.34929L10.9712 5.57324L11.5268 6.12883L12.227 5.77208Z" fill="#FFDA44"/>
                </svg>
                EUR
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
                CAD
                </a>
            </li>
        </ul>
    </div>
    <div class="relative">
        <label for="price-range-input" class="sr-only">Default range</label>
        <input id="price-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-neutral-quaternary rounded-lg appearance-none cursor-pointer">
        <span class="text-sm text-body absolute start-0 -bottom-6">Min ($100)</span>
        <span class="text-sm text-body absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
        <span class="text-sm text-body absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
        <span class="text-sm text-body absolute end-0 -bottom-6">Max ($1500)</span>
    </div>
</form>
{{< /example >}}

## Convert currency

Use this example of two number input fields and dropdowns to convert currency and even from fiat to crypto.

{{< example github="components/number-input.md" show_dark=true iframeHeight="290" disable_init_js="true" >}}
<form class="max-w-xl mx-auto">
    <div class="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse flex items-center flex-col sm:flex-row mb-4">
        <div class="flex -space-x-px">
            <label for="fiat-currency-input" class="mb-2.5 text-sm font-medium text-heading sr-only">Your Email</label>
            <div class="relative w-full">
                <input type="number" id="fiat-currency-input" class="block w-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-s-base focus:ring-brand focus:border-brand px-3 py-2.5 placeholder:text-body" placeholder="421 USD" required />
            </div>
            <button id="dropdown-fiat-currency-button" data-dropdown-toggle="dropdown-fiat-currency" type="button" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-fg-brand focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none">
                <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
                USD
                <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <div id="dropdown-fiat-currency" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32">
                <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-fiat-currency-button">
                    <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                            <svg class="w-4 h-4 me-1.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00013 14.6666C11.6821 14.6666 14.667 11.6818 14.667 7.99992C14.667 4.31802 11.6821 1.33325 8.00013 1.33325C4.31811 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31811 14.6666 8.00013 14.6666Z" fill="white"/><path d="M7.71167 7.99975H14.6678C14.6678 7.39807 14.5876 6.8152 14.4382 6.26074H7.71167V7.99975Z" fill="#D80027"/><path d="M7.71167 4.52172H13.6894C13.2813 3.85583 12.7596 3.26726 12.1512 2.78271H7.71167V4.52172Z" fill="#D80027"/><path d="M8.00053 14.6667C9.56944 14.6667 11.0115 14.1244 12.1502 13.2175H3.85083C4.98958 14.1244 6.43162 14.6667 8.00053 14.6667Z" fill="#D80027"/><path d="M2.31233 11.4784H13.689C14.0167 10.9438 14.2708 10.3594 14.4379 9.73926H1.56348C1.73059 10.3594 1.98469 10.9438 2.31233 11.4784V11.4784Z" fill="#D80027"/><path d="M4.42123 2.37426H5.02873L4.46365 2.78478L4.6795 3.44902L4.11445 3.03851L3.5494 3.44902L3.73584 2.87519C3.23832 3.28961 2.80224 3.77514 2.44289 4.31614H2.63754L2.27784 4.57745C2.2218 4.67093 2.16806 4.7659 2.11655 4.86227L2.28831 5.3909L1.96786 5.15808C1.8882 5.32684 1.81534 5.49941 1.74985 5.67557L1.93908 6.25802H2.63754L2.07246 6.66853L2.28831 7.33278L1.72326 6.92226L1.38479 7.16818C1.35091 7.4405 1.33325 7.71788 1.33325 7.99939H7.9996C7.9996 4.31781 7.9996 3.88378 7.9996 1.33325C6.68268 1.33325 5.45506 1.71525 4.42123 2.37426V2.37426ZM4.6795 7.33278L4.11445 6.92226L3.5494 7.33278L3.76524 6.66853L3.20017 6.25802H3.89862L4.11445 5.59377L4.33027 6.25802H5.02873L4.46365 6.66853L4.6795 7.33278ZM4.46365 4.72666L4.6795 5.3909L4.11445 4.98039L3.5494 5.3909L3.76524 4.72666L3.20017 4.31614H3.89862L4.11445 3.6519L4.33027 4.31614H5.02873L4.46365 4.72666ZM7.07068 7.33278L6.50563 6.92226L5.94058 7.33278L6.15643 6.66853L5.59135 6.25802H6.28981L6.50563 5.59377L6.72146 6.25802H7.41991L6.85484 6.66853L7.07068 7.33278ZM6.85484 4.72666L7.07068 5.3909L6.50563 4.98039L5.94058 5.3909L6.15643 4.72666L5.59135 4.31614H6.28981L6.50563 3.6519L6.72146 4.31614H7.41991L6.85484 4.72666ZM6.85484 2.78478L7.07068 3.44902L6.50563 3.03851L5.94058 3.44902L6.15643 2.78478L5.59135 2.37426H6.28981L6.50563 1.71002L6.72146 2.37426H7.41991L6.85484 2.78478Z" fill="#1A47B8"/></svg>
                            USD
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
                        GPB
                        </a>
                    </li>
                    <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">
                        <svg class="w-4 h-4 me-1.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#1A47B8"/>
                            <path d="M9.00078 4.43494L9.24362 5.18227H10.0294L9.39365 5.64414L9.63649 6.39147L9.00078 5.92957L8.36504 6.39147L8.60788 5.64414L7.97217 5.18227H8.75794L9.00078 4.43494Z" fill="#FFDA44"/>
                            <path d="M5.7711 5.77211L6.4713 6.12883L7.02691 5.57324L6.90396 6.34932L7.60412 6.70606L6.82802 6.82899L6.70509 7.60513L6.34834 6.90496L5.57227 7.02792L6.12788 6.4723L5.7711 5.77211Z" fill="#FFDA44"/>
                            <path d="M4.43457 9.00005L5.1819 8.75721V7.97144L5.64374 8.60718L6.3911 8.36434L5.92918 9.00005L6.3911 9.63576L5.64374 9.39295L5.1819 10.0287V9.24289L4.43457 9.00005Z" fill="#FFDA44"/>
                            <path d="M5.7711 12.2283L6.12785 11.5281L5.57227 10.9724L6.34837 11.0954L6.70506 10.3953L6.82802 11.1714L7.60409 11.2943L6.90401 11.651L7.02691 12.4271L6.4713 11.8715L5.7711 12.2283Z" fill="#FFDA44"/>
                            <path d="M9.00078 13.5655L8.75791 12.8181H7.97217L8.60791 12.3563L8.36504 11.609L9.00078 12.0708L9.63649 11.609L9.39365 12.3563L10.0294 12.8181H9.24359L9.00078 13.5655Z" fill="#FFDA44"/>
                            <path d="M12.227 12.2283L11.5268 11.8715L10.9712 12.4271L11.0941 11.651L10.394 11.2943L11.1701 11.1714L11.293 10.3953L11.6497 11.0954L12.4258 10.9724L11.8702 11.5281L12.227 12.2283Z" fill="#FFDA44"/>
                            <path d="M13.5639 9.00017L12.8166 9.24301V10.0288L12.3547 9.39304L11.6074 9.63588L12.0693 9.00017L11.6074 8.36446L12.3547 8.6073L12.8166 7.97156V8.75736L13.5639 9.00017Z" fill="#FFDA44"/>
                            <path d="M12.227 5.77208L11.8702 6.47228L12.4258 7.02789L11.6497 6.9049L11.293 7.60507L11.1701 6.82897L10.394 6.70601L11.0941 6.34929L10.9712 5.57324L11.5268 6.12883L12.227 5.77208Z" fill="#FFDA44"/>
                        </svg>
                        EUR
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
                        CAD
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/></svg>
        <div class="flex -space-x-px">
            <label for="crypto-input" class="mb-2.5 text-sm font-medium text-heading sr-only">Your Email</label>
            <div class="relative w-full">
                <input type="number" id="crypto-input" class="block w-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-s-base focus:ring-brand focus:border-brand px-3 py-2.5 placeholder:text-body" placeholder="0.323 BTC" required />
            </div>
            <button id="dropdown-crypto-button" data-dropdown-toggle="dropdown-crypto" class="inline-flex items-center shrink-0 z-10 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-fg-brand focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 15"><path fill="#F7931A" d="M14.83 9.204A7.04 7.04 0 111.17 5.797a7.04 7.04 0 0113.66 3.407z"/><path fill="#fff" d="M11.104 6.498c.14-.937-.573-1.44-1.548-1.777l.316-1.269-.773-.192-.308 1.235c-.203-.05-.411-.098-.619-.145l.31-1.244-.771-.193-.317 1.269a25.752 25.752 0 01-.493-.116v-.004l-1.065-.266-.205.825s.573.132.56.14c.314.078.37.285.36.449l-.36 1.446c.022.005.05.013.08.025l-.08-.02-.506 2.026c-.038.095-.135.237-.354.183.008.011-.562-.14-.562-.14l-.383.884 1.005.251c.187.047.37.096.55.142l-.319 1.284.772.192.317-1.27c.21.058.415.11.615.16l-.315 1.264.772.193.32-1.281c1.317.249 2.308.148 2.724-1.043.336-.96-.016-1.513-.71-1.874.505-.116.886-.448.987-1.134zM9.34 8.973c-.239.96-1.854.44-2.378.31l.424-1.7c.524.13 2.203.39 1.954 1.39zm.239-2.49c-.218.874-1.562.43-1.999.321l.385-1.542c.436.109 1.84.312 1.614 1.222z"/></svg>
                BTC 
                <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <div id="dropdown-crypto" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32 block">
                <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-crypto-button">
                    <li>
                        <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 15"><path fill="#F7931A" d="M14.83 9.204A7.04 7.04 0 111.17 5.797a7.04 7.04 0 0113.66 3.407z"/><path fill="#fff" d="M11.104 6.498c.14-.937-.573-1.44-1.548-1.777l.316-1.269-.773-.192-.308 1.235c-.203-.05-.411-.098-.619-.145l.31-1.244-.771-.193-.317 1.269a25.752 25.752 0 01-.493-.116v-.004l-1.065-.266-.205.825s.573.132.56.14c.314.078.37.285.36.449l-.36 1.446c.022.005.05.013.08.025l-.08-.02-.506 2.026c-.038.095-.135.237-.354.183.008.011-.562-.14-.562-.14l-.383.884 1.005.251c.187.047.37.096.55.142l-.319 1.284.772.192.317-1.27c.21.058.415.11.615.16l-.315 1.264.772.193.32-1.281c1.317.249 2.308.148 2.724-1.043.336-.96-.016-1.513-.71-1.874.505-.116.886-.448.987-1.134zM9.34 8.973c-.239.96-1.854.44-2.378.31l.424-1.7c.524.13 2.203.39 1.954 1.39zm.239-2.49c-.218.874-1.562.43-1.999.321l.385-1.542c.436.109 1.84.312 1.614 1.222z"/></svg>
                                BTC
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 10 17"><path fill="#343434" d="M5 .5l-.11.364v10.582l.11.105 4.91-2.902L5 .5z"/><path fill="#8C8C8C" d="M5 .5L.086 8.65 5 11.55V.5z"/><path fill="#3C3C3B" d="M5 12.48l-.061.075v3.77L5 16.5l4.914-6.922L5 12.48z"/><path fill="#8C8C8C" d="M5 16.5v-4.02L.086 9.578 5 16.5z"/><path fill="#141414" d="M5 11.55L9.91 8.65 5 6.418v5.133z"/><path fill="#393939" d="M.086 8.649L5 11.551V6.418L.086 8.649z"/></svg>
                                ETH
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 17"><path fill="#C2A633" d="M16 8.5a8 8 0 11-16 0 8 8 0 0116 0z"/><path fill="#fff" fill-rule="evenodd" d="M5.355 12.685h2.761S12 13.015 12 8.567c0-4.275-3.546-4.26-4.232-4.257H5.355v3.73H4.38v.914h.974v3.73zM6.91 5.858H8c.407 0 2.458.167 2.461 2.74.003 2.542-2.064 2.54-2.396 2.539H6.91V8.954h1.715v-.913H6.91V5.858z" clip-rule="evenodd"/></svg>
                                DOGE
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 13"><g clip-path="url(#clip0_460_40742)"><path fill="url(#paint0_linear_460_40742)" d="M2.599 9.8a.524.524 0 01.37-.152h12.77c.233 0 .35.282.185.447L13.4 12.617a.523.523 0 01-.37.153H.261a.261.261 0 01-.184-.447l2.522-2.522z"/><path fill="url(#paint1_linear_460_40742)" d="M2.599.383a.538.538 0 01.37-.153h12.77c.232 0 .35.282.184.446L13.401 3.2a.523.523 0 01-.37.153H.26a.262.262 0 01-.185-.447L2.599.383z"/><path fill="url(#paint2_linear_460_40742)" d="M13.401 5.062a.523.523 0 00-.37-.153H.261a.262.262 0 00-.184.446l2.522 2.523c.097.096.23.153.37.153h12.77c.233 0 .35-.282.185-.447L13.4 5.062z"/></g><defs><linearGradient id="paint0_linear_460_40742" x1="14.519" x2="5.681" y1="-1.277" y2="15.65" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><linearGradient id="paint1_linear_460_40742" x1="10.654" x2="1.817" y1="-3.294" y2="13.633" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><linearGradient id="paint2_linear_460_40742" x1="12.574" x2="3.737" y1="-2.292" y2="14.635" gradientUnits="userSpaceOnUse"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient><clipPath id="clip0_460_40742"><path fill="#fff" d="M0 0h16v12.54H0z" transform="translate(0 .23)"/></clipPath></defs></svg>
                                SOL
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex justify-between items-center flex-col sm:flex-row space-y-2 sm:space-y-0">
        <p class="text-sm text-body">Last update: 20:45 AM, November 20, 2023</p>
        <button type="reset" class="text-sm text-fg-brand inline-flex items-center font-medium hover:underline">
            Refresh <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
            </svg>
        </button>
    </div>
</form>
{{< /example >}}

## Advanced control buttons

This example can be used to add multiple number input fields with quantity selectors and control buttons to use for E-commerce UI similar to projects like AirBnb or Booking.

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="bedrooms-input" class="sr-only">Choose bedrooms number:</label>
    <div class="relative flex items-center mb-2">
        <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" class="border-x-0 h-10 placeholder:text-heading text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body block pb-6 text-xs" placeholder="" value="2" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-body space-x-1 rtl:space-x-reverse">
            <svg class="w-3 h-3 text-body-subtle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4c0-1.6569-1.3431-3-3-3H6c-1.65685 0-3 1.3431-3 3v4h18Zm-2-7V8c0-1.65685-1.3431-3-3-3H8C6.34315 5 5 6.34315 5 8v2h14Z"/>
            </svg>
            <span>Bedrooms</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
    <label for="nights-input" class="sr-only">Choose number of nights:</label>
    <div class="relative flex items-center mb-2">
        <button type="button" id="decrement-button" data-input-counter-decrement="nights-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="nights-input" data-input-counter data-input-counter-min="1" data-input-counter-max="30" class="border-x-0 h-10 placeholder:text-heading text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body block pb-6 text-xs" placeholder="" value="7" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-body space-x-1 rtl:space-x-reverse">
            <svg class="w-3 h-3 text-body-subtle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
            </svg>
            <span>Night stays</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="nights-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
    <label for="guests-input" class="sr-only">Choose guests:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="guests-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="guests-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" class="border-x-0 h-10 placeholder:text-heading text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body block pb-6 text-xs" placeholder="" value="3" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-body space-x-1 rtl:space-x-reverse">
            <svg class="w-3 h-3 text-body-subtle" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>
            <span>Guests</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="guests-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
</form>
{{< /example >}}

## Min and max values

By using the InputCounter object from the Flowbite JS API, you ca set the min and max values of a number input component by using the following data attributes:

- `data-input-counter-min` - set the minimum value of the input
- `data-input-counter-max` - set the maximum value of the input

These values will be enforced and validated whenever the user clicks on one of the buttons or tries to introduce the value manually.

{{< example github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="quantity-input" class="block mb-2.5 text-sm font-medium text-heading">Choose quantity:</label>
    <div class="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/></svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="border-x-0 h-10 placeholder:text-heading text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body" placeholder="999" value="5" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
            <svg class="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/></svg>
        </button>
    </div>
    <p id="helper-text-explanation" class="mt-2.5 text-sm text-body">Please select a 5 digit number from 0 to 9.</p>
</form>
{{< /example >}}

## JavaScript behaviour

Use the **InputCounter** object from the Flowbite JS API to create a number input component with increment and decrement buttons that can be used to increase or decrease the value of the input.

### Object parameters

Use the object parameters from the InputCounter object to set the target, increment, and decrement elements as well as the options object.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs  uppercase">
              <th scope="col" class="px-6 py-3">
                  Parameter
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Required
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary  border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">targetEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Required
              </td>
              <td class="px-6 py-4">
                  Pass the target input field element that will be incremented or decremented based on click event.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary  border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">incrementEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Pass the increment button element that will increase the value of the target element based on click event.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary  border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">decrementEl</code>
              </td>
              <td class="px-6 py-4">
                  Element
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Pass the decrement button element that will decrease the value of the target element based on click event.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary  border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">options</code>
              </td>
              <td class="px-6 py-4">
                Object
              </td>
              <td class="px-6 py-4">
                  Optional
              </td>
              <td class="px-6 py-4">
                  Set these options to set the minimum and maximum value of the input field and the callback functions.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
                <td class="px-6 py-4 font-medium">
                    <code class="text-fg-brand">instanceOptions</code>
                </td>
                <td class="px-6 py-4">
                    Object
                </td>
                <td class="px-6 py-4">
                    Optional
                </td>
                <td class="px-6 py-4">
                   Object of options that allows you to set a custom ID for the instance that is being added to the <a href="https://flowbite.com/docs/getting-started/javascript/#instance-options" class="underline hover:no-underline">Instance Manager</a> and whether to override or not an existing instance.
                </td>
            </tr>
      </tbody>
  </table>
</div>

### Options

Use these optional options for the InputCounter object to set the minimum and maximum values of the input field and also to set callback functions for the increment and decrement events.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs  uppercase">
              <th scope="col" class="px-6 py-3">
                  Option
              </th>
              <th scope="col" class="px-6 py-3">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">minValue</code>
              </td>
              <td class="px-6 py-4 ">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the minimum value of the input field.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">maxValue</code>
              </td>
              <td class="px-6 py-4 ">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the maximum value of the input field.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">onIncrement</code>
              </td>
              <td class="px-6 py-4 ">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the item has been incremented.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">onDecrement</code>
              </td>
              <td class="px-6 py-4 ">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the item has been decremented.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Methods

Use the following methods of the InputCounter object to programmatically manipulate the behaviour of the input field.

<div class="relative my-10 overflow-x-auto shadow-xs rounded-base border border-default">
  <table class="w-full text-sm text-left text-body">
      <thead class="bg-neutral-secondary-soft text-heading">
          <tr class="text-xs  uppercase">
              <th scope="col" class="px-6 py-3">
                  Method
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
          </tr>
      </thead>
      <tbody>
        <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">getCurrentValue()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to get the current value of the input field.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">increment()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the InputCounter object to increment the value of the input field.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">decrement()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the InputCounter object to decrement the value of the input field.
              </td>
          </tr>
          <tr class="border-b bg-neutral-primary border-default">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">updateOnIncrement(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function whenever the input field has been incremented.
              </td>
          </tr>
          <tr class="bg-neutral-primary">
              <td class="px-6 py-4 ">
                  <code class="text-fg-brand">updateOnDecrement(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function whenever the input field has been decremented.
              </td>
          </tr>
      </tbody>
  </table>
</div>

### Example

Check out the following examples to learn how to create a new InputCounter object and how to set it up with custom options and programmatically use the methods available.

First of all, you need to set the object parameters where the target element is required and the other two are optional.

{{< code lang="javascript" file="number-input.js" icon="file" >}}
// set the target element of the input field
const $targetEl = document.getElementById('counter-input-example');

// optionally set the increment and decrement elements
const $incrementEl = document.getElementById('increment-button');

const $decrementEl = document.getElementById('decrement-button');

// optional options with default values and callback functions
const options = {
    minValue: 0,
    maxValue: null, // infinite
    onIncrement: () => {
        console.log('input field value has been incremented');
    },
    onDecrement: () => {
        console.log('input field value has been decremented');
    }
};

const instanceOptions = {
  id: 'counter-input-example',
  override: true
};
{{< /code >}}

Next step is to create a new instance of a InputCounter object using the parameters we have set above.

{{< code lang="javascript" file="number-input.js" icon="file" >}}
import { InputCounter } from 'flowbite';

/*
 * $targetEl: required
 * $incrementEl: optional
 * $decrementEl: optional
 * options: optional
 */
const counterInput = new InputCounter($targetEl, $incrementEl, $decrementEl, options, instanceOptions);
{{< /code >}}

Now you can programmatically increment or decrement the input field using the methods of the InputCounter object.

{{< code lang="javascript" >}}
// get the current value of the input field
counterInput.getCurrentValue();

// increment the value of the input field
counterInput.increment();

// decrement the value of the input field
counterInput.decrement();
{{< /code >}}

### HTML Markup

Here is an example of the HTML markup that you can use for the JavaScript example above.

{{< code lang="html" file="number-input.html" icon="file" >}}
<form class="max-w-xs mx-auto">
    <label for="counter-input-example" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" class="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="counter-input-example" class="shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
        <button type="button" id="increment-button" class="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>
{{< /code >}}

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the InputCounter object, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

{{< code lang="typescript" file="number-input.ts" icon="file" >}}
import { InputCounter } from 'flowbite';
import type { InputCounterOptions, InputCounterInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

// set the target element of the input field
const $targetEl: HTMLInputElement = document.getElementById('counter-input-example') as HTMLInputElement;

// optionally set the increment and decrement elements
const $incrementEl: HTMLElement = document.getElementById('increment-button');

const $decrementEl: HTMLElement = document.getElementById('decrement-button');

// optional options with default values and callback functions
const options: InputCounterOptions = {
    minValue: 0,
    maxValue: null, // infinite
    onIncrement: () => {
        console.log('input field value has been incremented');
    },
    onDecrement: () => {
        console.log('input field value has been decremented');
    }
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: 'counter-input-example',
  override: true
};

/*
 * $targetEl: required
 * $incrementEl: optional
 * $decrementEl: optional
 * options: optional
 * instanceOptions: optional
 */
const counterInput: InputCounterInterface = new InputCounter(
    $targetEl,
    $incrementEl,
    $decrementEl,
    options,
    instanceOptions
);

// increment the value of the input field
counterInput.increment();

// decrement the value of the input field
counterInput.decrement();
{{< /code >}}

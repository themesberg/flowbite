---
layout: home
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

{{< example id="default-number-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90210" required />
</form>
{{< /example >}}

## ZIP code input

Use this example with an icon and helper text to set a ZIP code value inside a form field by also applying the `pattern` attribute to validate the input using a regular expression for a 5 digit number.

{{< example id="zip-code-number-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-sm mx-auto">
    <label for="zip-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP code:</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
        </div>
        <input type="text" id="zip-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12345 or 12345-6789" pattern="^\d{5}(-\d{4})?$" required />
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p>
</form>
{{< /example >}}

## Phone number

Use this example to set a phone number inside a form field based on the `type="phone"` attribute and a dropdown menu to select the country code.

{{< example id="phone-code-number-input" github="components/number-input.md" show_dark=true iframeHeight="360" >}}
<form class="max-w-sm mx-auto">
    <div class="flex items-center">
        <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
        +1 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
        </button>
        <div id="dropdown-phone" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                            United States (+1)
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clip-rule="evenodd"/><path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"/><path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd"/></g></svg>
                            United Kingdom (+44)
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" stroke="#fff" stroke-width=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"/><path fill="url(#paint0_linear_374_135177)" fill-rule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clip-rule="evenodd"/><path fill="url(#paint1_linear_374_135177)" fill-rule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z" clip-rule="evenodd"/></g><defs><linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse"><stop stop-color="#FF2E3B"/><stop offset="1" stop-color="#FC0D1B"/></linearGradient></defs></svg>
                            Australia (+61)
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd"/><g filter="url(#filter0_d_374_135180)"><path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd"/></g><g filter="url(#filter1_d_374_135180)"><path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd"/></g></g><defs><filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape"/></filter><filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape"/></filter></defs></svg>
                            Germany (+49)
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75"/></mask><g mask="url(#a)"><path fill="#F44653" d="M13.067.5H19.6v14h-6.533z"/><path fill="#1035BB" fill-rule="evenodd" d="M0 14.5h6.533V.5H0v14z" clip-rule="evenodd"/></g></svg>
                            France (+33)
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg class="w-4 h-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd"/><g filter="url(#filter0_d_374_135180)"><path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd"/></g><g filter="url(#filter1_d_374_135180)"><path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd"/></g></g><defs><filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape"/></filter><filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape"/></filter></defs></svg>
                            Germany (+49)
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <label for="phone-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
        <div class="relative w-full">
            <input type="phone" id="phone-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
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

{{< example id="control-number-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p>
</form>
{{< /example >}}

## Control buttons with icon

Use this example to also add an icon inside the input field to improve the user experience.

{{< example id="control-icon-number-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="bedrooms-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center max-w-[11rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="3" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
            </svg>
            <span>Bedrooms</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select the number of bedrooms.</p>
</form>
{{< /example >}}

## Counter input

Use this example as an alternative style to the control buttons example above.

{{< example id="control-icon-number-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="counter-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
        <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>
{{< /example >}}

## Currency input

This component can be used to set a currency value inside a form field when you need to set a price.

{{< example id="control-number-input" github="components/number-input.md" show_dark=true iframeHeight="290" >}}
<form class="max-w-[18rem] mx-auto flex">
    <label for="currency-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
        </svg>
        </div>
        <input type="number" id="currency-input" class="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter amount" required />
    </div>
    <button id="dropdown-currency-button" data-dropdown-toggle="dropdown-currency" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
        USD <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
    </button>
    <div id="dropdown-currency" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-currency-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                        USD
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#043CAE" d="M0 .5h19.6v14H0z"/><path fill="#FFD429" fill-rule="evenodd" d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z" clip-rule="evenodd"/></g></svg>
                        EUR
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75"/></mask><g fill="#FF3131" mask="url(#a)"><path d="M14 .5h5.6v14H14z"/><path fill-rule="evenodd" d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z" clip-rule="evenodd"/></g></svg>
                        CAD
                    </div>
                </button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z" clip-rule="evenodd"/><path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"/><path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd"/></g></svg>
                        GBP
                    </div>
                </button>
            </li>
        </ul>
    </div>
</form>
{{< /example >}}

## Credit card input

Use this component to set the information needed when making an online transaction with a credit card by adding the card number, expiration date, and security code. The component uses the [Flowbite Datepicker](https://flowbite.com/docs/plugins/datepicker/).

{{< example id="zip-code-number-input" github="components/number-input.md" show_dark=true iframeHeight="540" >}}
<form class="max-w-sm mx-auto">
    <label for="card-number-input" class="sr-only">Card number:</label>
    <div class="relative">
        <input type="text" id="card-number-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4242 4242 4242 4242" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg fill="none" class="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"/></svg>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 my-4">
        <div class="relative max-w-sm col-span-2">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <label for="card-expiration-input" class="sr-only">Card expiration date:</label>
            <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/23" required />
        </div>
        <div class="col-span-1">
            <label for="cvv-input" class="sr-only">Card CVV code:</label>
            <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CVV" required />
        </div>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay now</button>
</form>
{{< /example >}}

## Pin code input

Use this example of a pin code input to set a 6 digit code. This can be used when setting up a new account or when making a payment and the code is sent via phone or email.

{{< example id="zip-code-number-input" github="components/number-input.md" show_dark=true javascript=`
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
});
` >}}
<form class="max-w-sm mx-auto">
    <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
        <div>
            <label for="code-1" class="sr-only">First code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-next="code-2" id="code-1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-2" class="sr-only">Second code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-1" data-focus-input-next="code-3" id="code-2" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-3" class="sr-only">Third code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2" data-focus-input-next="code-4" id="code-3" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-4" class="sr-only">Fourth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3" data-focus-input-next="code-5" id="code-4" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-5" class="sr-only">Fifth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-4" data-focus-input-next="code-6" id="code-5" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-6" class="sr-only">Sixth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-5" id="code-6" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Please introduce the 6 digit code we sent via email.</p>
</form>
{{< /example >}}

## Number input with slider

This example can be used to set the value of a number input field by sliding the range slider component or by typing the value in the input field. The component uses the [Flowbite Range Slider](https://flowbite.com/docs/plugins/range-slider/).

{{< example id="zip-code-number-input" github="components/number-input.md" show_dark=true iframeHeight="290" disable_init_js="true" javascript=`
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
    <div class="flex mb-4">
        <button id="dropdown-currency-button" data-dropdown-toggle="dropdown-currency" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
        USD <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
        </button>
        <div id="dropdown-currency" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-currency-button">
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                            USD
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#043CAE" d="M0 .5h19.6v14H0z"/><path fill="#FFD429" fill-rule="evenodd" d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z" clip-rule="evenodd"/></g></svg>
                            EUR
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75"/></mask><g fill="#FF3131" mask="url(#a)"><path d="M14 .5h5.6v14H14z"/><path fill-rule="evenodd" d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z" clip-rule="evenodd"/></g></svg>
                            CAD
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <div class="inline-flex items-center">
                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z" clip-rule="evenodd"/><path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"/><path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd"/></g></svg>
                            GBP
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <label for="currency-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <div class="relative w-full">
            <input type="number" id="currency-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter amount" value="1000" required />
        </div>
    </div>
    <div class="relative">
        <label for="price-range-input" class="sr-only">Default range</label>
        <input id="price-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
    </div>
</form>
{{< /example >}}

## Convert currency

Use this example of two number input fields and dropdowns to convert currency and even from fiat to crypto.

{{< example id="control-number-input" github="components/number-input.md" show_dark=true iframeHeight="290" disable_init_js="true" >}}
<form class="max-w-xl mx-auto">
    <div class="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse flex items-center flex-col sm:flex-row mb-4">
        <div class="flex">
            <label for="fiat-currency-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
            <div class="relative w-full">
                <input type="number" id="fiat-currency-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="421 USD" required />
            </div>
            <button id="dropdown-fiat-currency-button" data-dropdown-toggle="dropdown-fiat-currency" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                USD <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            <div id="dropdown-fiat-currency" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-fiat-currency-button">
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                                USD
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#043CAE" d="M0 .5h19.6v14H0z"/><path fill="#FFD429" fill-rule="evenodd" d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z" clip-rule="evenodd"/></g></svg>
                                EUR
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75"/></mask><g fill="#FF3131" mask="url(#a)"><path d="M14 .5h5.6v14H14z"/><path fill-rule="evenodd" d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z" clip-rule="evenodd"/></g></svg>
                                CAD
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z" clip-rule="evenodd"/><path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"/><path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd"/></g></svg>
                                GBP
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <button type="button" class="p-3 text-sm font-medium text-gray-500 focus:outline-none bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"/>
            </svg>
            <span class="sr-only">Convert currency</span>
        </button>
        <div class="flex">
            <label for="crypto-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
            <div class="relative w-full">
                <input type="number" id="crypto-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="0.323 BTC" required />
            </div>
            <button id="dropdown-crypto-button" data-dropdown-toggle="dropdown-crypto" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 15"><path fill="#F7931A" d="M14.83 9.204A7.04 7.04 0 111.17 5.797a7.04 7.04 0 0113.66 3.407z"/><path fill="#fff" d="M11.104 6.498c.14-.937-.573-1.44-1.548-1.777l.316-1.269-.773-.192-.308 1.235c-.203-.05-.411-.098-.619-.145l.31-1.244-.771-.193-.317 1.269a25.752 25.752 0 01-.493-.116v-.004l-1.065-.266-.205.825s.573.132.56.14c.314.078.37.285.36.449l-.36 1.446c.022.005.05.013.08.025l-.08-.02-.506 2.026c-.038.095-.135.237-.354.183.008.011-.562-.14-.562-.14l-.383.884 1.005.251c.187.047.37.096.55.142l-.319 1.284.772.192.317-1.27c.21.058.415.11.615.16l-.315 1.264.772.193.32-1.281c1.317.249 2.308.148 2.724-1.043.336-.96-.016-1.513-.71-1.874.505-.116.886-.448.987-1.134zM9.34 8.973c-.239.96-1.854.44-2.378.31l.424-1.7c.524.13 2.203.39 1.954 1.39zm.239-2.49c-.218.874-1.562.43-1.999.321l.385-1.542c.436.109 1.84.312 1.614 1.222z"/></svg>
                BTC <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            <div id="dropdown-crypto" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-crypto-button">
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 15"><path fill="#F7931A" d="M14.83 9.204A7.04 7.04 0 111.17 5.797a7.04 7.04 0 0113.66 3.407z"/><path fill="#fff" d="M11.104 6.498c.14-.937-.573-1.44-1.548-1.777l.316-1.269-.773-.192-.308 1.235c-.203-.05-.411-.098-.619-.145l.31-1.244-.771-.193-.317 1.269a25.752 25.752 0 01-.493-.116v-.004l-1.065-.266-.205.825s.573.132.56.14c.314.078.37.285.36.449l-.36 1.446c.022.005.05.013.08.025l-.08-.02-.506 2.026c-.038.095-.135.237-.354.183.008.011-.562-.14-.562-.14l-.383.884 1.005.251c.187.047.37.096.55.142l-.319 1.284.772.192.317-1.27c.21.058.415.11.615.16l-.315 1.264.772.193.32-1.281c1.317.249 2.308.148 2.724-1.043.336-.96-.016-1.513-.71-1.874.505-.116.886-.448.987-1.134zM9.34 8.973c-.239.96-1.854.44-2.378.31l.424-1.7c.524.13 2.203.39 1.954 1.39zm.239-2.49c-.218.874-1.562.43-1.999.321l.385-1.542c.436.109 1.84.312 1.614 1.222z"/></svg>
                                BTC
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 10 17"><path fill="#343434" d="M5 .5l-.11.364v10.582l.11.105 4.91-2.902L5 .5z"/><path fill="#8C8C8C" d="M5 .5L.086 8.65 5 11.55V.5z"/><path fill="#3C3C3B" d="M5 12.48l-.061.075v3.77L5 16.5l4.914-6.922L5 12.48z"/><path fill="#8C8C8C" d="M5 16.5v-4.02L.086 9.578 5 16.5z"/><path fill="#141414" d="M5 11.55L9.91 8.65 5 6.418v5.133z"/><path fill="#393939" d="M.086 8.649L5 11.551V6.418L.086 8.649z"/></svg>
                                ETH
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div class="inline-flex items-center">
                                <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 16 17"><path fill="#C2A633" d="M16 8.5a8 8 0 11-16 0 8 8 0 0116 0z"/><path fill="#fff" fill-rule="evenodd" d="M5.355 12.685h2.761S12 13.015 12 8.567c0-4.275-3.546-4.26-4.232-4.257H5.355v3.73H4.38v.914h.974v3.73zM6.91 5.858H8c.407 0 2.458.167 2.461 2.74.003 2.542-2.064 2.54-2.396 2.539H6.91V8.954h1.715v-.913H6.91V5.858z" clip-rule="evenodd"/></svg>
                                DOGE
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
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
        <p class="text-sm text-gray-500 dark:text-gray-400">Last update: 20:45 AM, November 20, 2023</p>
        <button type="reset" class="text-sm text-blue-700 dark:text-blue-500 inline-flex items-center font-medium hover:underline">
            Refresh <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
            </svg>
        </button>
    </div>
</form>
{{< /example >}}

## Advanced control buttons

This example can be used to add multiple number input fields with quantity selectors and control buttons to use for E-commerce UI similar to projects like AirBnb or Booking.

{{< example id="control-icon-number-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="bedrooms-input" class="sr-only">Choose bedrooms number:</label>
    <div class="relative flex items-center mb-2">
        <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="2" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
            </svg>
            <span>Bedrooms</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <label for="nights-input" class="sr-only">Choose number of nights:</label>
    <div class="relative flex items-center mb-2">
        <button type="button" id="decrement-button" data-input-counter-decrement="nights-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="nights-input" data-input-counter data-input-counter-min="1" data-input-counter-max="30" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="7" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path fill="currentColor" d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"/>
            </svg>
            <span>Night stays</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="nights-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <label for="guests-input" class="sr-only">Choose guests:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" data-input-counter-decrement="guests-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="guests-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="3" required />
        <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
            <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
            </svg>
            <span>Guests</span>
        </div>
        <button type="button" id="increment-button" data-input-counter-increment="guests-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>
{{< /example >}}

## Min and max values

By using the InputCounter object from the Flowbite JS API, you ca set the min and max values of a number input component by using the following data attributes:

- `data-input-counter-min` - set the minimum value of the input
- `data-input-counter-max` - set the maximum value of the input

These values will be enforced and validated whenever the user clicks on one of the buttons or tries to introduce the value manually.

{{< example id="control-number-min-max-input" github="components/number-input.md" show_dark=true >}}
<form class="max-w-xs mx-auto">
    <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="5" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p>
</form>
{{< /example >}}

## JavaScript behaviour

Use the **InputCounter** object from the Flowbite JS API to create a number input component with increment and decrement buttons that can be used to increase or decrease the value of the input.

### Object parameters

Use the object parameters from the InputCounter object to set the target, increment, and decrement elements as well as the options object.

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">targetEl</code>
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">incrementEl</code>
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">decrementEl</code>
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">options</code>
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 font-medium">
                    <code class="text-blue-600 dark:text-blue-400">instanceOptions</code>
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

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
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
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">minValue</code>
              </td>
              <td class="px-6 py-4 ">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the minimum value of the input field.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">maxValue</code>
              </td>
              <td class="px-6 py-4 ">
                  Integer
              </td>
              <td class="px-6 py-4">
                  Set the maximum value of the input field.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">onIncrement</code>
              </td>
              <td class="px-6 py-4 ">
                  Function
              </td>
              <td class="px-6 py-4">
                  Set a callback function when the item has been incremented.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">onDecrement</code>
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

<div class="relative my-10 overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 dark:bg-gray-700">
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
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">getCurrentValue()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to get the current value of the input field.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">increment()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the InputCounter object to increment the value of the input field.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">decrement()</code>
              </td>
              <td class="px-6 py-4">
                  Use this method on the InputCounter object to decrement the value of the input field.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">updateOnIncrement(callback)</code>
              </td>
              <td class="px-6 py-4">
                  Use this method to set a callback function whenever the input field has been incremented.
              </td>
          </tr>
          <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 ">
                  <code class="text-blue-600 dark:text-blue-400">updateOnDecrement(callback)</code>
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

```javascript
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
```

Next step is to create a new instance of a InputCounter object using the parameters we have set above.

```javascript
import { InputCounter } from 'flowbite';

/*
 * $targetEl: required
 * $incrementEl: optional
 * $decrementEl: optional
 * options: optional
 */
const counterInput = new InputCounter($targetEl, $incrementEl, $decrementEl, options, instanceOptions);
```

Now you can programmatically increment or decrement the input field using the methods of the InputCounter object.

```javascript
// get the current value of the input field
counterInput.getCurrentValue();

// increment the value of the input field
counterInput.increment();

// decrement the value of the input field
counterInput.decrement();
```

### HTML Markup

Here is an example of the HTML markup that you can use for the JavaScript example above.

```html
<form class="max-w-xs mx-auto">
    <label for="counter-input-example" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center">
        <button type="button" id="decrement-button" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="counter-input-example" class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
        <button type="button" id="increment-button" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>
```

### TypeScript

If you're using the <a href="{{< ref "getting-started/typescript" >}}">TypeScript configuration</a> from Flowbite then you can import the types for the InputCounter object, parameters and its options.

Here's an example that applies the types from Flowbite to the code above:

```javascript
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
```

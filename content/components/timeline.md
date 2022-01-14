---
layout: home
title: Tailwind CSS Timeline - Flowbite
description: Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container
group: components
toc: true

previous: Modal
previousLink: components/modal/
next: Navbar
nextLink: components/navbar/
---

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Default timeline

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

{{< example github="components/tabs.md" >}}
    <div class="relative border-l border-gray-200 dark:border-gray-700">                  
        <div class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2021</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind</h3>
            <p class="mb-10 text-base font-normal text-gray-500 dark:text-gray-400">FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
        </div>
        <div class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
            <p class="mb-10 text-base font-normal text-gray-500 dark:text-gray-400">FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile.</p>
        </div>
        <div class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022</div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind</h3>
            <p class="mb-10 text-base font-normal text-gray-500 dark:text-gray-400">FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile.</p>
        </div>
    </div>
{{< /example >}}

## With icons

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

{{< example github="components/tabs.md" >}}
    <div class="relative border-l border-gray-200 dark:border-gray-700">                  
        <div class="ml-6">            
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma design - v2.0.0</h3>
            <div class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</div>
            <p class="mb-10 text-base font-normal text-gray-500 dark:text-gray-400">FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile.</p>
        </div>
        <div class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma design - v1.3.0</h3>
            <div class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</div>
            <p class="mb-10 text-base font-normal text-gray-500 dark:text-gray-400">FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile.</p>
        </div>
        <div class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma design - v1.2.2</h3>
            <div class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</div>
            <p class="mb-10 text-base font-normal text-gray-500 dark:text-gray-400">FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile.</p>
        </div>
    </div>
{{< /example >}}

## Activity feed

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

{{< example github="components/tabs.md" >}}
    <div class="relative border-l border-gray-200 dark:border-gray-700">                  
        <div class="ml-6">            
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
            </span>
            <div class="items-center justify-between p-4 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <div class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">14:00pm</div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <span class="font-semibold text-blue-600 dark:text-blue-500">Jese Leos</span> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
            </div>
        </div>
        <div class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas Lean image"/>
            </span>
            <div class="p-4 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <div class="items-center justify-between mb-3 sm:flex">
                    <div class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">10:00am</div>
                    <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <span class="font-semibold text-gray-900 dark:text-white">Flowbite Pro Figma </span></div>
                </div>
                <div class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
            </div>
        </div>
        <div class="ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img class="rounded-full shadow-lg" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
            </span>
            <div class="items-center justify-between p-4 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <div class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">10:00am</div>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed Status to  <span class="font-semibold text-gray-900 dark:text-white">Deal Closed</span></div>
            </div>
        </div>
    </div>
{{< /example >}}

## With cards

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

{{< example github="components/tabs.md" >}}
    <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">January 13, 2022</h3>
        <div class="divide-y divider-gray-200 dark:divide-gray-700">
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span href="#" class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Public
                    </span> 
                </div>
            </a>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image"/>
                <div>
                    <div class="text-base font-normal text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                    <span href="#" class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Public
                    </span> 
                </div>
            </a>
        </div>
    </div>
    <div class="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">January 10, 2022</h3>
        <div class="divide-y divider-gray-200 dark:divide-gray-700">
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-4.jpg" alt="Laura Romeros image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Laura Romeros</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span href="#" class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Public
                    </span> 
                </div>
            </a>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-2.jpg" alt="Mike Willi image"/>
                <div>
                    <div class="text-base font-normal text-gray-600 dark:text-gray-400"><span class="font-medium text-gray-900 dark:text-white">Mike Willi</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                    <span href="#" class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Public
                    </span> 
                </div>
            </a>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-5.jpg" alt="Jese Leos image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span href="#" class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Public
                    </span> 
                </div>
            </a>
            <a href="#" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green image"/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> Top figma designs</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span href="#" class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Public
                    </span> 
                </div>
            </a>
        </div>
    </div>
{{< /example >}}





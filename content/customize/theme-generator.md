---
layout: docs-clean
title: Tailwind CSS Theme Generator - Flowbite
description: Use this tool to create a custom theme file for a Flowbite project using the utility-first Tailwind CSS framework and customize colors, backgrounds, fonts, and more
group: customize
toc: true

previous: Dark mode
previousLink: customize/dark-mode/
next: Colors
nextLink: customize/colors/
---

<div class="grid sm:grid-cols-12 gap-8">
  <div class="col-span-2 sm:bg-neutral-primary sm:border border-light-subtle sm:rounded-base sm:p-8 mb-8">
    <div class="space-y-4">
        <p class="block mb-2.5 text-sm font-medium text-heading">Brand color:</p>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" type="button">
            <span class="inline-block w-6 h-4 rounded mr-2 bg-rose-600"></span>rose
            <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-36">
                <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded me-3 bg-rose-600"></span>rose
                        </a>
                    </li>
                    <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded me-3 bg-pink-600"></span>pink
                        </a>
                    </li>
                    <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded me-3 bg-fuchsia-600"></span>fuchsia
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  </div>
  <div class="col-span-10 mb-8">
    
  </div>
</div>
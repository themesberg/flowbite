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
  <div class="col-span-2 sm:bg-neutral-primary sm:border border-default sm:rounded-base sm:p-8 mb-8">
    <div class="space-y-4">
        <p class="block mb-2.5 text-sm font-medium text-heading">Brand color:</p>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="inline-flex items-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none" type="button">
            <span id="selectedColorSwatch" class="inline-block w-6 h-4 rounded-xs mr-2 bg-rose-600"></span>
            <span id="selectedColorName">rose</span>
            <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            <div id="dropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-90">
                <ul class="p-2 text-sm text-body font-medium grid grid-cols-3 gap-4" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" data-color="rose" data-hex="#e11d48" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-rose-600"></span>rose
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="pink" data-hex="#db2777" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-pink-600"></span>pink
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="fuchsia" data-hex="#c026d3" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-fuchsia-600"></span>fuchsia
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="purple" data-hex="#9333ea" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-purple-600"></span>purple
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="violet" data-hex="#7c3aed" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-violet-600"></span>violet
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="indigo" data-hex="#4f46e5" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-indigo-600"></span>indigo
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="blue" data-hex="#2563eb" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-blue-600"></span>blue
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="sky" data-hex="#0284c7" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-sky-600"></span>sky
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="cyan" data-hex="#0891b2" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-cyan-600"></span>cyan
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="teal" data-hex="#0d9488" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-teal-600"></span>teal
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="emerald" data-hex="#059669" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-emerald-600"></span>emerald
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="green" data-hex="#16a34a" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-green-600"></span>green
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="lime" data-hex="#65a30d" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-lime-600"></span>lime
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="yellow" data-hex="#ca8a04" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-yellow-600"></span>yellow
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="amber" data-hex="#d97706" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-amber-600"></span>amber
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="orange" data-hex="#ea580c" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-orange-600"></span>orange
                        </a>
                    </li>
                    <li>
                        <a href="#" data-color="red" data-hex="#dc2626" class="color-option inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                            <span class="inline-block w-6 h-4 rounded-xs me-3 bg-red-600"></span>red
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  </div>
  <div class="col-span-10 grid grid-cols-3 gap-4 mb-8">
    <div class="flex flex-col items-center">
        <form class="w-full mx-auto bg-neutral-primary-soft border border-default rounded-base shadow-xs p-4 md:p-6">
        <div class="mb-5">
            <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input type="email" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <input type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
        </div>
        <label for="remember" class="flex items-center mb-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
            <p class="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</p>
        </label>
        <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
        </form>
    </div>
    <div class="flex flex-col items-center">
        <div id="datepicker-inline" inline-datepicker data-date="02/25/2024"></div>
    </div>
    <div>
        <div class="w-full bg-neutral-primary-soft border border-default rounded-base shadow-xs p-4 md:p-6">
            <div class="flex justify-between items-start">
                <div>
                <h5 class="text-2xl font-semibold text-heading">32.4k</h5>
                <p class="text-body">Users this week</p>
                </div>
                <div class="flex items-center px-2.5 py-0.5 font-medium text-fg-success text-center">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/></svg>
                12%
                </div>
            </div>
            <div id="area-chart"></div>
            <div class="grid grid-cols-1 items-center border-light border-t justify-between">
                <div class="flex justify-between items-center pt-4 md:pt-6">
                <!-- Button -->
                <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom" class="text-sm font-medium text-body hover:text-heading text-center inline-flex items-center" type="button">
                    Last 7 days
                    <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                </button>
                <!-- Dropdown menu -->
                <div id="lastDaysdropdown" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                        <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Yesterday</a>
                        </li>
                        <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Today</a>
                        </li>
                        <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Last 7 days</a>
                        </li>
                        <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Last 30 days</a>
                        </li>
                        <li>
                        <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Last 90 days</a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="inline-flex items-center text-fg-brand bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                    Users Report
                    <svg class="w-4 h-4 ms-1.5 -me-0.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
                </div>
            </div>
            </div>
    </div>
  </div>
</div>

<script src='https://cdn.jsdelivr.net/npm/apexcharts@3.46.0/dist/apexcharts.min.js'></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Color mapping for Tailwind shades
    const colorShades = {
        'rose': { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' },
        'pink': { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' },
        'fuchsia': { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75', 950: '#4a044e' },
        'purple': { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' },
        'violet': { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065' },
        'indigo': { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b' },
        'blue': { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' },
        'sky': { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e', 950: '#082f49' },
        'cyan': { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63', 950: '#083344' },
        'teal': { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e' },
        'emerald': { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22' },
        'green': { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' },
        'lime': { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314', 950: '#1a2e05' },
        'yellow': { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' },
        'amber': { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f', 950: '#451a03' },
        'orange': { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407' },
        'red': { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a' }
    };

    // Get all color option links
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            const colorName = this.getAttribute('data-color');
            const colorClass = `bg-${colorName}-600`;
            const shades = colorShades[colorName];
            
            if (!shades) {
                console.error(`Color shades not found for: ${colorName}`);
                return;
            }
            
            // Update button display
            const selectedColorName = document.getElementById('selectedColorName');
            const selectedColorSwatch = document.getElementById('selectedColorSwatch');
            
            if (selectedColorName) {
                selectedColorName.textContent = colorName;
            }
            
            if (selectedColorSwatch) {
                // Remove all bg-* classes and add the new one
                selectedColorSwatch.className = `inline-block w-6 h-4 rounded mr-2 ${colorClass}`;
            }
            
            // Update CSS custom properties for light mode
            const root = document.documentElement;
            
            // Background brand colors (light mode)
            root.style.setProperty('--color-brand-softer', shades[50]);
            root.style.setProperty('--color-brand-soft', shades[100]);
            root.style.setProperty('--color-brand-medium', shades[200]);
            root.style.setProperty('--color-brand', shades[700]);
            root.style.setProperty('--color-brand-strong', shades[800]);
            
            // Foreground brand colors (light mode)
            root.style.setProperty('--color-fg-brand-subtle', shades[200]);
            root.style.setProperty('--color-fg-brand', shades[700]);
            root.style.setProperty('--color-fg-brand-strong', shades[900]);
            
            // Border brand colors (light mode)
            root.style.setProperty('--color-brand-subtle', shades[200]);
            root.style.setProperty('--color-brand-light', shades[600]);
            
            // Update dark mode variables
            const darkModeStyles = `
                .dark {
                    --color-brand-softer: ${shades[950]};
                    --color-brand-soft: ${shades[900]};
                    --color-brand-medium: ${shades[900]};
                    --color-brand: ${shades[600]};
                    --color-brand-strong: ${shades[700]};
                    --color-fg-brand-subtle: ${shades[200]};
                    --color-fg-brand: ${shades[500]};
                    --color-fg-brand-strong: ${shades[400]};
                    --color-brand-subtle: ${shades[900]};
                    --color-brand-light: ${shades[600]};
                }
            `;
            
            // Remove old dark mode override if it exists
            const oldStyle = document.getElementById('brand-color-override');
            if (oldStyle) {
                oldStyle.remove();
            }
            
            // Add new dark mode override
            const styleElement = document.createElement('style');
            styleElement.id = 'brand-color-override';
            styleElement.textContent = darkModeStyles;
            document.head.appendChild(styleElement);
            
            console.log(`Brand color changed to: ${colorName}`);
        });
    });


// Get the CSS variable --color-brand and convert it to hex for ApexCharts
const getBrandColor = () => {
  // Get the computed style of the document's root element
  const computedStyle = getComputedStyle(document.documentElement);
  
  // Get the value of the --color-brand CSS variable
  return computedStyle.getPropertyValue('--color-fg-brand').trim() || "#1447E6";
};

const brandColor = getBrandColor();

const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: brandColor,
      gradientToColors: [brandColor],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
  series: [
    {
      name: "New users",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: brandColor,
    },
  ],
  xaxis: {
    categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
}

if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
console.log('pkay?')
  const chart = new ApexCharts(document.getElementById("area-chart"), options);
  chart.render();
}

});
</script>
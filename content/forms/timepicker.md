---
layout: docs
title: Tailwind CSS Timepicker - Flowbite
description: Use the timepicker component from Flowbite to select the time of the day in terms of hours, minutes and even seconds using an input selector based on Tailwind CSS
group: forms
toc: true
requires_js: true

previous: Textarea
previousLink: forms/textarea/
next: Toggle
nextLink: forms/toggle/
---

The timepicker component from Flowbite can be used to choose the hours and minutes of a given day through the usage of input fields such as the native HTML time field or even checkbox fields with predefined time interval which are popularly used for calendar event creation.

The examples on this page are all built with Tailwind CSS and some of the examples require you to install the Flowbite JavaScript dependency to make the interactive UI components functional such as the datepicker, dropdowns, modals and the drawers.

The timepicker component is often used together with a datepicker so the more advanced examples on this page show you a combination of these two components where you can select both the date (year, month and day) and then the time of the day for the event.

## Default timepicker

Use this example to show a simple input field with the native browser timepicker.

{{< example github="components/timepicker.md" show_dark=true >}}
<form class="max-w-[8rem] mx-auto">
    <label for="time" class="block mb-2 text-sm font-medium text-heading">Select time:</label>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        </div>
        <input type="time" id="time" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
    </div>
</form>
{{< /example >}}

## Timepicker with icon

This example can be used to select a time via an input field where you can add an icon to the input group.

{{< example github="components/timepicker.md" show_dark=true >}}
<form class="max-w-[8.5rem] mx-auto">
    <label for="time" class="block mb-2 text-sm font-medium text-heading">Select time:</label>
    <div class="flex">
        <input type="time" id="time" class="rounded-none rounded-s-lg flex-1 block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required>
        <span class="inline-flex items-center px-3 text-sm text-heading bg-neutral-secondary-medium border rounded-s-0 border-s-0 border-default-medium rounded-e-md">
            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
        </span>
    </div>
</form>
{{< /example >}}

## Timepicker with dropdown

Use this example to show a timepicker together with a dropdown menu where you can add options such as selecting the timezone or the duration of an event in minutes or hours.

{{< example github="components/timepicker.md" iframeHeight="300" show_dark=true >}}
<form class="max-w-[13rem] mx-auto">
    <label for="time" class="block mb-2 text-sm font-medium text-heading">Select time:</label>
    <div class="flex">
        <input type="time" id="time" class="rounded-none rounded-s-lg flex-1 block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required>
        <button id="dropdown-duration-button" data-dropdown-toggle="dropdown-duration" class="border-s-0 shrink-0 z-10 inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
         Duration 
         <svg class="w-4 h-4 -me-0.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        <div id="dropdown-duration" class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-40">
            <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-duration-button">
                <li>
                    <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                        30 minutes
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                        1 hour
                    </button>
                </li>
                <li>
                    <button type="button" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded" role="menuitem">
                        2 hours
                    </button>
                </li>
            </ul>
        </div>
    </div>
</form>
{{< /example >}}

## Timepicker with select

Use this example to show a select input next to the timepicker to select an option like a timezone.

{{< example class="flex justify-center" github="components/timepicker.md" show_dark=true >}}
<form>
    <label for="time" class="block mb-2 text-sm font-medium text-heading">Select time:</label>
    <div class="flex">
        <input type="time" id="time" class="rounded-none rounded-s-lg flex-1 block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required>
        <select id="timezones" name="timezone" class="rounded-none border border-s-0 rounded-e-lg p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" required>
            <option value="America/New_York" selected>EST - GMT-5 (New York)</option>
            <option value="America/Los_Angeles">PST - GMT-8 (Los Angeles)</option>
            <option value="Europe/London">GMT - GMT+0 (London)</option>
            <option value="Europe/Paris">CET - GMT+1 (Paris)</option>
            <option value="Asia/Tokyo">JST - GMT+9 (Tokyo)</option>
            <option value="Australia/Sydney">AEDT - GMT+11 (Sydney)</option>
            <option value="Canada/Mountain">MST - GMT-7 (Canada)</option>
            <option value="Canada/Central">CST - GMT-6 (Canada)</option>
            <option value="Canada/Eastern">EST - GMT-5 (Canada)</option>
            <option value="Europe/Berlin">CET - GMT+1 (Berlin)</option>
            <option value="Asia/Dubai">GST - GMT+4 (Dubai)</option>
            <option value="Asia/Singapore">SGT - GMT+8 (Singapore)</option>
         </select>
    </div>
</form>
{{< /example >}}

## Timepicker range selector

Use this example to select a time interval using two input field often used for the duration of an event.

{{< example github="components/timepicker.md" show_dark=true >}}
<form class="max-w-[16rem] mx-auto grid grid-cols-2 gap-4">
    <div>
        <label for="start-time" class="block mb-2 text-sm font-medium text-heading">Start time:</label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
               <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <input type="time" id="start-time" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
        </div>
    </div>
    <div>
        <label for="end-time" class="block mb-2 text-sm font-medium text-heading">End time:</label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
               <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <input type="time" id="end-time" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
        </div>
    </div>
</form>
{{< /example >}}

## Timerange with dropdown

This example can be used to show the timerange picker inside a dropdown only when clicking on a button.

{{< example class="flex justify-center items-center" github="components/timepicker.md" show_dark=true iframeHeight="260" javascript=`
const dropdown = FlowbiteInstances.getInstance('Dropdown', 'dropdownTimepicker');
const $saveTimeButton = document.getElementById('saveTimeButton');

$saveTimeButton.addEventListener('click', function() {
    // save time code and then hide the dropdown
    dropdown.hide();
});
` >}}
<button id="dropdownTimepickerButton" data-dropdown-toggle="dropdownTimepicker" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
Choose time 
<svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
</svg>

</button>

<!-- Dropdown menu -->
<div id="dropdownTimepicker" class="z-10 hidden bg-neutral-primary-soft rounded-base shadow-sm w-auto p-3">
    <div class="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 mb-2">
         <div>
        <label for="start-time-2" class="block mb-2 text-sm font-medium text-heading">Start time:</label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
               <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <input type="time" id="start-time-2" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
        </div>
    </div>
    <div>
        <label for="end-time-2" class="block mb-2 text-sm font-medium text-heading">End time:</label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
               <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <input type="time" id="end-time-2" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
        </div>
    </div>
    </div>
    <button id="saveTimeButton" type="button" class="text-fg-brand text-sm hover:underline p-0">Save time</button>
</div>
{{< /example >}}

## Timerange picker with toggle

Use this example to show or hide the timepicker when clicking on an trigger element.

{{< example class="flex items-center justify-center" github="components/timepicker.md" show_dark=true iframeHeight="190" >}}
<div class="w-[16rem]">
    <button id="selectTimeToggle" data-collapse-toggle="time-range-container" type="button" class="text-fg-brand text-base font-medium hover:underline p-0 inline-flex items-center mb-2">Select time 
      <svg class="w-5 h-5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
      </svg>
    </button>
    <div id="time-range-container" class="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 mb-2 hidden">
        <div>
        <label for="start-time-3" class="block mb-2 text-sm font-medium text-heading">Start time:</label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
               <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <input type="time" id="start-time-3" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
        </div>
    </div>
    <div>
        <label for="end-time-3" class="block mb-2 text-sm font-medium text-heading">End time:</label>
        <div class="relative">
            <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
               <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            </div>
            <input type="time" id="end-time-3" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
        </div>
    </div>
    </div>
</div>
{{< /example >}}

## Inline timepicker buttons

This is an advanced example that you can use to show the details of an event and select a date of the event based on the [Flowbite Datepicker](https://flowbite.com/docs/components/datepicker/) and select the time using a predefined set of time intervals based on checkbox elements.

{{< example github="components/timepicker.md" show_dark=true >}}
<h2 class="text-xl text-heading font-semibold mb-2">Digital Transformation</h2>
<div class="flex items-center space-x-4 rtl:space-x-reverse mb-3">
   <div class="flex items-center">
      <svg class="w-5 h-5 text-body me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
      <span class="text-heading text-base font-medium">30.06.2024</span>
   </div>
   <div class="flex items-center">
      <svg class="w-5 h-5 text-body me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
      </svg>
      <span class="text-heading text-base font-medium">California, USA</span>
   </div>
</div>
<div class="flex items-start space-x-2 rtl:space-x-reverse mb-5">
   <div>
      <div class="text-base font-normal text-body mb-2">Participants</div>
      <div class="flex -space-x-2 rtl:space-x-reverse">
         <img class="w-8 h-8 border border-buffer rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">
         <img class="w-8 h-8 border border-buffer rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="">
         <img class="w-8 h-8 border border-buffer rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="">
         <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-dark border border-buffer rounded-full hover:bg-dark-strong" href="#">+99</a>
      </div>
   </div>
   <div>
      <div class="text-base font-normal text-body mb-3">Duration</div>
      <span class="text-heading text-base font-medium block">30 min</span>
   </div>
   <div>
      <div class="text-base font-normal text-body mb-3">Meeting Type</div>
      <span class="text-heading text-base font-medium block">Web conference</span>
   </div>
</div>
<div class="pt-5 border-t border-default flex sm:flex-row flex-col sm:space-x-5 rtl:space-x-reverse">
   <div inline-datepicker datepicker-buttons datepicker-autoselect-today class="mx-auto sm:mx-0"></div>
   <div class="sm:ms-7 sm:ps-5 sm:border-s border-default w-full sm:max-w-[15rem] mt-5 sm:mt-0">
      <h3 class="text-heading text-base font-medium mb-3 text-center">Wednesday 30 June 2024</h3>
      <button type="button" data-collapse-toggle="timetable" class="inline-flex items-center justify-center w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Pick a time
      </button>
      <label class="sr-only">
      Pick a time
      </label>
      <ul id="timetable" class="grid w-full grid-cols-2 gap-2 mt-5">
         <li>
            <input type="radio" id="10-am" value="" class="hidden peer" name="timetable">
            <label for="10-am" class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
               10:00 AM
            </label>
         </li>
         <li>
            <input type="radio" id="10-30-am" value="" class="hidden peer" name="timetable">
            <label for="10-30-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            10:30 AM
            </label>
         </li>
         <li>
            <input type="radio" id="11-am" value="" class="hidden peer" name="timetable">
            <label for="11-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            11:00 AM
            </label>
         </li>
         <li>
            <input type="radio" id="11-30-am" value="" class="hidden peer" name="timetable">
            <label for="11-30-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            11:30 AM
            </label>
         </li>
         <li>
            <input type="radio" id="12-am" value="" class="hidden peer" name="timetable" checked>
            <label for="12-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            12:00 AM
            </label>
         </li>
         <li>
            <input type="radio" id="12-30-pm" value="" class="hidden peer" name="timetable">
            <label for="12-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            12:30 PM
            </label>
         </li>
         <li>
            <input type="radio" id="1-pm" value="" class="hidden peer" name="timetable">
            <label for="1-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            01:00 PM
            </label>
         </li>
         <li>
            <input type="radio" id="1-30-pm" value="" class="hidden peer" name="timetable">
            <label for="1-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            01:30 PM
            </label>
         </li>
         <li>
            <input type="radio" id="2-pm" value="" class="hidden peer" name="timetable">
            <label for="2-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            02:00 PM
            </label>
         </li>
         <li>
            <input type="radio" id="2-30-pm" value="" class="hidden peer" name="timetable">
            <label for="2-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            02:30 PM
            </label>
         </li>
         <li>
            <input type="radio" id="3-pm" value="" class="hidden peer" name="timetable">
            <label for="3-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            03:00 PM
            </label>
         </li>
         <li>
            <input type="radio" id="3-30-pm" value="" class="hidden peer" name="timetable">
            <label for="3-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
            03:30 PM
            </label>
         </li>
      </ul>
   </div>
</div>
{{< /example >}}

## Modal with timepicker

Use this example to select a date and time inside of a modal component based on the [Flowbite Datepicker](https://flowbite.com/docs/components/datepicker/) and select a time interval using checkbox elements with predefined time values for event time scheduling.

{{< example github="components/timepicker.md" class="flex justify-center" show_dark=true iframeHeight="880" >}}
<button type="button" data-modal-target="timepicker-modal" data-modal-toggle="timepicker-modal" class="inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
   <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
   Schedule appointment
</button>

<!-- Main modal -->
<div id="timepicker-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-[23rem] max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft rounded-base">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 border-b rounded-t border-default">
                <h3 class="font-medium text-heading">
                    Schedule an appointment
                </h3>
               <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-toggle="timepicker-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 pt-0">
                <div inline-datepicker datepicker-autoselect-today class="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-neutral-secondary-soft [&_div>button]:bg-neutral-secondary-soft"></div>
                <label class="text-sm font-medium text-heading mb-2 block">
                Pick your time
                </label>
                <ul id="timetable" class="grid w-full grid-cols-3 gap-2 mb-5">
                    <li>
                        <input type="radio" id="10-am" value="" class="hidden peer" name="timetable">
                        <label for="10-am"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        10:00 AM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="10-30-am" value="" class="hidden peer" name="timetable">
                        <label for="10-30-am"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        10:30 AM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="11-am" value="" class="hidden peer" name="timetable">
                        <label for="11-am"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        11:00 AM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="11-30-am" value="" class="hidden peer" name="timetable">
                        <label for="11-30-am"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        11:30 AM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="12-am" value="" class="hidden peer" name="timetable" checked>
                        <label for="12-am"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        12:00 AM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="12-30-pm" value="" class="hidden peer" name="timetable">
                        <label for="12-30-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        12:30 PM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="1-pm" value="" class="hidden peer" name="timetable">
                        <label for="1-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        01:00 PM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="1-30-pm" value="" class="hidden peer" name="timetable">
                        <label for="1-30-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        01:30 PM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="2-pm" value="" class="hidden peer" name="timetable">
                        <label for="2-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        02:00 PM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="2-30-pm" value="" class="hidden peer" name="timetable">
                        <label for="2-30-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        02:30 PM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="3-pm" value="" class="hidden peer" name="timetable">
                        <label for="3-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        03:00 PM
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="3-30-pm" value="" class="hidden peer" name="timetable">
                        <label for="3-30-pm"
                        class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-neutral-primary-soft border rounded-base cursor-pointer text-fg-brand border-brand peer-checked:border-brand peer-checked:bg-brand hover:text-white peer-checked:text-white hover:bg-brand-strong">
                        03:30 PM
                        </label>
                    </li>
                </ul>
                <div class="grid grid-cols-2 gap-2">
                    <button type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Save</button>
                    <button type="button" data-modal-hide="timepicker-modal" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Discard</button>
                </div>
            </div>
        </div>
    </div>
</div>
{{< /example >}}

## Drawer with timepicker

Use this example to show multiple time interval selections inside of a drawer component to schedule time based on multiple entries (ie. days of the week) using the native browser time selection input element.

{{< example github="components/timepicker.md" class="flex justify-center" show_dark=true iframeHeight="880" >}}
<!-- drawer init and show -->
<div class="text-center">
   <button class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button" data-drawer-target="drawer-timepicker" data-drawer-show="drawer-timepicker" aria-controls="drawer-timepicker">
   Set time schedule
   </button>
</div>
<!-- drawer component -->
<div id="drawer-timepicker" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-neutral-primary-soft w-96" tabindex="-1" aria-labelledby="drawer-timepicker-label">
   <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5 id="drawer-label" class="inline-flex items-center text-lg font-medium text-body">
         <svg class="w-5 h-5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
         Time schedule
      </h5>
      <button type="button" data-drawer-hide="drawer-timepicker" aria-controls="drawer-timepicker" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
   <form>
      <div class="rounded-lg border border-default-medium bg-neutral-secondary-medium p-4 mb-6">
         <div class="flex justify-between items-center mb-3">
            <span class="text-heading text-base font-medium">Business hours</span>
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
            <span class="sr-only select-none">Business hours</span>
            </label>
         </div>
         <p class="text-sm text-body font-normal">Enable or disable business working hours for all weekly working days</p>
      </div>
      <div class="pb-6 mb-6 border-b border-default">
           <label for="timezone" class="block mb-2.5 text-sm font-medium text-heading">Select a timezone</label>
            <select id="timezone" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body">
            <option selected value>Choose a timezone</option>
            <option value="America/New_York">EST (Eastern Standard Time) - GMT-5 (New York)</option>
            <option value="America/Los_Angeles">PST (Pacific Standard Time) - GMT-8 (Los Angeles)</option>
            <option value="Europe/London">GMT (Greenwich Mean Time) - GMT+0 (London)</option>
            <option value="Europe/Paris">CET (Central European Time) - GMT+1 (Paris)</option>
            <option value="Asia/Tokyo">JST (Japan Standard Time) - GMT+9 (Tokyo)</option>
            <option value="Australia/Sydney">AEDT (Australian Eastern Daylight Time) - GMT+11 (Sydney)</option>
            <option value="Canada/Mountain">MST (Mountain Standard Time) - GMT-7 (Canada)</option>
            <option value="Canada/Central">CST (Central Standard Time) - GMT-6 (Canada)</option>
            <option value="Canada/Eastern">EST (Eastern Standard Time) - GMT-5 (Canada)</option>
            <option value="Europe/Berlin">CET (Central European Time) - GMT+1 (Berlin)</option>
            <option value="Asia/Dubai">GST (Gulf Standard Time) - GMT+4 (Dubai)</option>
            <option value="Asia/Singapore">SGT (Singapore Standard Time) - GMT+8 (Singapore)</option>
            </select>
      </div>
      <div class="mb-6">
         <div class="flex items-center justify-between">
            <div class="flex items-center min-w-[4rem]">
               <input checked id="monday" name="days" type="checkbox" value="monday" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
               <label for="monday" class="ms-2 text-sm font-medium text-heading">Mon</label>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="start-time-monday" class="sr-only">Sart time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="start-time-monday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="end-time-monday" class="sr-only">End time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="end-time-monday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div>
               <button type="button" class="inline-flex items-center p-1.5 text-sm font-medium text-center rounded-base focus:outline-none text-body hover:bg-neutral-tertiary hover:text-heading">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

                  <span class="sr-only">Delete</span>
               </button>
            </div>
         </div>
      </div>
      <div class="mb-6">
         <div class="flex items-center justify-between">
            <div class="flex items-center min-w-[4rem]">
               <input id="tuesday" name="days" type="checkbox" value="tuesday" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
               <label for="tuesday" class="ms-2 text-sm font-medium text-heading">Tue</label>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="start-time-tuesday" class="sr-only">Start time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="start-time-tuesday" name="start-time-tuesday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="end-time-tuesday" class="sr-only">End time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="end-time-tuesday" name="end-time-tuesday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div>
               <button type="button" class="inline-flex items-center p-1.5 text-sm font-medium text-center rounded-base focus:outline-none text-body hover:bg-neutral-tertiary hover:text-heading">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

                  <span class="sr-only">Delete</span>
               </button>
            </div>
         </div>
      </div>
      <div class="mb-6">
         <div class="flex items-center justify-between">
            <div class="flex items-center min-w-[4rem]">
               <input checked id="wednesday" name="days" type="checkbox" value="wednesday" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
               <label for="wednesday" class="ms-2 text-sm font-medium text-heading">Wed</label>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="start-time-wednesday" class="sr-only">Start time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="start-time-wednesday" name="start-time-wednesday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="end-time-wednesday" class="sr-only">End time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="end-time-wednesday" name="end-time-wednesday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div>
               <button type="button" class="inline-flex items-center p-1.5 text-sm font-medium text-center rounded-base focus:outline-none text-body hover:bg-neutral-tertiary hover:text-heading">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

                  <span class="sr-only">Delete</span>
               </button>
            </div>
         </div>
      </div>
      <div class="mb-6">
         <div class="flex items-center justify-between">
            <div class="flex items-center min-w-[4rem]">
               <input id="thursday" name="days" type="checkbox" value="thursday" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
               <label for="thursday" class="ms-2 text-sm font-medium text-heading">Thu</label>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="start-time-thursday" class="sr-only">Start time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="start-time-thursday" name="start-time-thursday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="end-time-thursday" class="sr-only">End time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="end-time-thursday" name="end-time-thursday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div>
               <button type="button" class="inline-flex items-center p-1.5 text-sm font-medium text-center rounded-base focus:outline-none text-body hover:bg-neutral-tertiary hover:text-heading">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

                  <span class="sr-only">Delete</span>
               </button>
            </div>
         </div>
      </div>
      <div class="mb-6">
         <div class="flex items-center justify-between">
            <div class="flex items-center min-w-[4rem]">
               <input id="friday" name="days" type="checkbox" value="friday" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
               <label for="friday" class="ms-2 text-sm font-medium text-heading">Fri</label>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="start-time-friday" class="sr-only">Start time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="start-time-friday" name="start-time-friday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div class="w-full max-w-[7rem]">
               <label for="end-time-friday" class="sr-only">End time:</label>
               <div class="relative">
                  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
<svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <input type="time" id="end-time-friday" name="end-time-friday" class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" min="09:00" max="18:00" value="00:00" required />
               </div>
            </div>
            <div>
               <button type="button" class="inline-flex items-center p-1.5 text-sm font-medium text-center rounded-base focus:outline-none text-body hover:bg-neutral-tertiary hover:text-heading">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

                  <span class="sr-only">Delete</span>
               </button>
            </div>
         </div>
      </div>
      <button type="button" class="inline-flex items-center justify-center w-full text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         <svg class="w-4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
         </svg>
         Add interval
      </button>
      <div class="grid grid-cols-2 gap-4 bottom-4 left-0 w-full md:px-4 md:absolute">
         <button type="button" data-drawer-hide="drawer-timepicker" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Close</button>
         <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Save all
         </button>
      </div>
   </form>
</div>
{{< /example >}}

---
layout: home
title: Alerts
description: Show contextual information to you users using Tailwind CSS alert elements
group: components
toc: true
---

## Default alerts

Use the following examples of alert components to show messages as feedback to your users.

{{< example >}}

<!-- varianta veche cu mult HTML
<div class="bg-red-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div>
      <svg class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-700">
        <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
      </p>
    </div>
  </div>
</div>
-->

{{< simple-alerts.inline >}}
{{- range (index $.Site.Data "colors") }}
<div class="flex bg-{{ .name }}-100 rounded-lg p-4 mb-4">
  <svg class="w-5 h-5 text-{{ .name }}-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <p class="ml-3 text-sm text-{{ .name }}-700">
    <span class="font-medium">Important Note!</span> Change a few things up and try submitting again.
  </p>
</div>
{{ end -}}
{{< /simple-alerts.inline >}}
{{< /example >}}

## Dismissable alerts

Use the following alert elements that are also dismissable.

{{< example >}}

<!-- varianta veche cu mult HTML

<div class="bg-gray-100 rounded-lg p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-700">
        A simple dark alert with an <a href="#" class="font-semibold hover:text-gray-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>

-->

{{< dismissable-alerts.inline >}}
{{- range (index $.Site.Data "colors") }}
<div class="flex bg-{{ .name }}-100 rounded-lg p-4 mb-4">
  <svg class="w-5 h-5 text-{{ .name }}-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <p class="ml-3 text-sm font-medium text-{{ .name }}-700">
    A simple {{ .context }} alert with an <a href="#" class="font-semibold hover:text-{{ .name }}-800 underline">example link</a>. Give it a click if you like.
  </p>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-{{ .name }}-100 text-{{ .name }}-500 rounded-lg focus:ring-2 focus:ring-{{ .name }}-400 p-1.5 hover:bg-{{ .name }}-200 inline-flex">
    <span class="sr-only">Dismiss</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
{{ end -}}
{{< /dismissable-alerts.inline >}}
{{< /example >}}

## Border accent

Use the following alert components with a border accent as an alternative style.

{{< example >}}

<!-- varianta veche

<div class="bg-{{ .name }}-100 border-t-4 border-{{ .name }}-500 p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="w-5 h-5 text-{{ .name }}-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-{{ .name }}-700">
        A simple default alert with an <a href="#" class="font-semibold hover:text-{{ .name }}-800 underline">example link</a>. Give it a click if you like.
      </p>
    </div>
    <div class="pl-3 ml-auto">
      <div class="-mx-1.5 -my-1.5">
        <button type="button" class="bg-{{ .name }}-100 text-{{ .name }}-500 rounded-lg focus:ring-2 focus:ring-{{ .name }}-400 p-1.5 hover:bg-{{ .name }}-200 inline-flex">
          <span class="sr-only">Dismiss</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>
-->

{{< bordered-alerts.inline >}}
{{- range (index $.Site.Data "colors") }}
<div class="flex bg-{{ .name }}-100 border-t-4 border-{{ .name }}-500 p-4 mb-4">
    <svg class="w-5 h-5 text-{{ .name }}-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <p class="ml-3 text-sm font-medium text-{{ .name }}-700">
      A simple {{ .context }} alert with an <a href="#" class="font-semibold hover:text-{{ .name }}-800 underline">example link</a>. Give it a click if you like.
    </p>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-{{ .name }}-100 text-{{ .name }}-500 rounded-lg focus:ring-2 focus:ring-{{ .name }}-400 p-1.5 hover:bg-{{ .name }}-200 inline-flex">
      <span class="sr-only">Dismiss</span>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
{{ end -}}
{{< /bordered-alerts.inline >}}
{{< /example >}}

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

{{< example >}}
<!-- varianta veche cu mult HTML

<div class="bg-red-100 rounded-lg p-4 mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-red-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
    <h3 class="text-red-700 text-lg font-medium">
      Credit Card expired!     
    </h3>
  </div>
  <div class="mt-2 text-sm text-red-700">
    <p>
      More info about this default alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
  </div>
  <div class="flex mt-4">
    <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
      Update details
    </button>
    <button type="button" class="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      Dismiss
    </button>
  </div>
</div>

-->

{{< additional-content-alerts.inline >}}
{{- range (index $.Site.Data "colors") }}
<div class="bg-{{ .name }}-100 rounded-lg p-4 mb-4">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-{{ .name }}-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <h3 class="text-{{ .name }}-700 text-lg font-medium">This is a {{ .context }} alert</h3>
  </div>
  <p class="mt-2 mb-4 text-sm text-{{ .name }}-700">
    More info about this {{ .context }} alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <div class="flex">
    <button type="button" class="text-white bg-{{ .name }}-700 hover:bg-{{ .name }}-800 focus:ring-4 focus:ring-{{ .name }}-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center">
      <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
      View more
    </button>
    <button type="button" class="text-{{ .name }}-700 bg-transparent border border-{{ .name }}-700 hover:bg-{{ .name }}-800 hover:text-white focus:ring-4 focus:ring-{{ .name }}-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
      Dismiss
    </button>
  </div>
</div>
{{ end -}}
{{< /additional-content-alerts.inline >}}
{{< /example >}}
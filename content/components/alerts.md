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
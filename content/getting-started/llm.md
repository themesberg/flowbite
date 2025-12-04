---
layout: docs
title: Tailwind CSS AI and LLM - Flowbite
description: Learn how to integrate Flowbite and Tailwind CSS with any LLM interface such as OpenAI, Anthropic, or Gemini to leverage the power of AI and LLMs in your web applications
group: getting-started
toc: true

previous: MCP Server
previousLink: getting-started/mcp/
next: License
nextLink: getting-started/license/
---

You can use Flowbite and Tailwind CSS together to generate UIs and integrate them into your own tech stack using LLMs and AI tools such as Windsurf or Cursor based on AI models from OpenAI, Anthropic, Gemini and more. We provide a basic `llms.txt` based on the [LLMs standard](https://llmstxt.org/) that you can use to feed data.

LLMs and AI integration tools are now a standard way of working in the web industry and it can drastically improve your workflow and productivity. We recommend using our UI library and resources as a stable base for your AI integration.

AI still has shortcomings and limitations and it is not a replacement for human work. However, that doesn't mean you can't leverage it to generate UIs and components faster and more efficiently.

## API routes for LLMs

The LLMs files are hosted on the following routes on Flowbite:

- `https://raw.githubusercontent.com/themesberg/flowbite/refs/heads/main/llms.txt` - this is the main file that you can use to feed data to your AI tools
- `https://raw.githubusercontent.com/themesberg/flowbite/refs/heads/main/llms-full.txt` - this is the full file that is much larger and contains more data

On a general level, the first file should be enough for LLMs that are able to parse the web.

## Markdown files

Our documentation is hosted on GitHub and you can parse the markdown files directly too:

- `https://github.com/themesberg/flowbite/blob/main/content/components/accordion.md` - this is an example of a documentation file for the accordion component
- `https://github.com/themesberg/flowbite/blob/main/content/getting-started/angular.md` - this is a documentation file for the Angular integration guide

We recommend checking out the [content folder](https://github.com/themesberg/flowbite/tree/main/content) from GitHub to view all documentation files.

## Implementation examples

You can use the following code examples to implement LLMs in your web application:

{{< code lang="javascript" file="app.js" icon="file" >}}
async function getLLMData() {
    const response = await fetch('https://raw.githubusercontent.com/themesberg/flowbite/refs/heads/main/llms.txt');
    const data = await response.text();
    return data;
}

console.log(await getLLMData());
{{< /code >}}

## Flowbite AI

We are currently working on a Flowbite AI feature that will allow you to generate UIs and components using AI models from OpenAI, Anthropic, Gemini and more. One of the features will be to convert your Figma designs into code and generate components using Flowbite and Tailwind CSS.

If you'd like to be notified when the Flowbite AI feature is available, please sign up below to our newsletter.
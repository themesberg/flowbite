---
layout: docs
title: MCP UI - Build MCP apps with Flowbite
description: Learn how create and install an MCP application that can be used to build apps for ChatGPT, Claude, Gemini, and any other MCP client and leverage the UI components from Flowbite
group: getting-started
toc: true

previous: HUGO
previousLink: getting-started/hugo/
next: Configuration
nextLink: customize/configuration/
---

MCP UI is the standard SDK that you can use to deliver MCP apps which can be used as applications for ChatGPT, Gemini, Claude, and other MCP clients like Cursor or Windsurf. [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) (MCP) is part of the Agentic AI Foundation donated by Anthropic in 2025 and it is one of the fastest growing open-source projects in the AI category with over 100 million monthly SDK downloads.

In this guide you will learn how to create an MCP app using Flowbite and Skybridge and start developing application for ChatGPT, Claude, Gemini and any other AI client that uses the MCP standard. After setting up the project you'll be able to integrate any UI component and theme from the Flowbite documentation inside your MCP application.

We decided to use the [Skybridge](https://github.com/alpic-ai/skybridge) framework to build MCP apps and we are using the UI components from [Flowbite](https://flowbite.com/).

## Create new MCP app

The first step is to create a new MCP application and start developing locally:

1. Download or clone the [MCP UI Starter](https://github.com/themesberg/mcp-ui-starter/) repository:

{{< code lang="bash" >}}
git clone https://github.com/themesberg/mcp-ui-starter.git
{{< /code >}}

2. Install dependencies using NPM, PNPM, Yarn or Bun:

{{< code lang="bash" >}}
npm install
{{< /code >}}

3. Run a local development server:

{{< code lang="bash" >}}
npm run dev
{{< /code >}}

This command will run a local server on `http://localhost:3000` and will create the following:

- the main MCP server on the `/mcp` endpoint
- a collection of widgets built with Flowbite and React used as tools
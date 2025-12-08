---
layout: docs
title: Tailwind CSS MCP Server - Flowbite
description: Get started with the official MCP server for Flowbite to integrate UI components into your AI development workflow from Cursor, Windsurf, Claude and other MCP client providers
group: getting-started
toc: true

previous: TypeScript
previousLink: getting-started/typescript/
next: LLM
nextLink: getting-started/llm/
---

MCP (Model-Context-Protocol) is a new way to structure a communication protocol between MCP servers (Flowbite MCP) and MCP clients (ie. Windsurf, Cursor). It enables adding additional context to your AI development workflow by integrating resources and tools specific to your project.

Flowbite MCP is an open-source server that adds the right amount of context to the LLM providers which improves the quality of UI generation in code - whether it's HTML, React, Svelte, or other frameworks.

Additionally, we also developed tools to convert Figma layers to code relevant to your codebase using Flowbite and Tailwind CSS and also other tools such as generating theme files based on branded colors.

## Install Flowbite MCP

The easiest way to install the Flowbite MCP is using NPX:

{{< code lang="bash" >}}
# Run directly with npx (no installation needed)
npx flowbite-mcp
{{< /code >}}

You can also run `npx flowbite-mcp --help` to show a list of helpful options.

## Requirements

If you want to use the Figma to code converter tool, you need to get a [personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) from Figma and set it as an environment variable. Otherwise, Flowbite MCP is specifically built for a project that would use Tailwind CSS, Flowbite and optionally Figma for prototyping.

## Configuring MCP client

An MCP client is a software tool such as Cursor, Windsurf or Claude Code that you use for AI development.

Most of these tools supports MCP servers out of the box and you need to update a JSON file that contains the configuration for the MCP servers.

### Cursor

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=flowbite&config=eyJlbnYiOnsiRklHTUFfQUNDRVNTX1RPS0VOIjoiWU9VUl9QRVJTT05BTF9GSUdNQV9BQ0NFU1NfVE9LRU4ifSwiY29tbWFuZCI6Im5weCAteSBmbG93Yml0ZS1tY3AifQ%3D%3D)

Cursor is one of the most popular IDEs for AI development for software engineers and web development. 

To set up Flowbite MCP with Cursor, open the `mcp.json` and add the following configuration:

{{< code lang="javascript" icon="file" file="mcp.json" >}}
{
  "mcpServers": {
    "flowbite": {
      "command": "npx",
      "args": ["-y", "flowbite-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
{{< /code >}}

### Windsurf

Windsurf is the second most popular IDE for AI development and the configuration is similar to Cursor. 

Update the `mcp_config.json` file with the following configuration:

{{< code lang="javascript" icon="file" file="mcp_config.json" >}}
{
  "mcpServers": {
    "flowbite": {
      "command": "npx",
      "args": ["-y", "flowbite-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
{{< /code >}}

### Claude Code

To install Flowbite MCP in Claude Desktop you need to configure the `claude_desktop_config.json` file:

{{< code lang="javascript" icon="file" file="mcp_config.json" >}}
{
  "mcpServers": {
    "flowbite": {
      "command": "npx",
      "args": ["-y", "flowbite-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
{{< /code >}}

If you'd like to request a new integration or have any questions, please open an issue on our [GitHub repository](https://github.com/themesberg/flowbite-mcp).

## Local development

If you'd like to extend Flowbite MCP or contribute to the project, you can run it locally as a server.

We recommend cloning the repository from GitHub, installing the dependencies, building and then running the server.

Using the native MCP inspector tool can also be a great way to debug and test the server.

{{< code lang="bash" >}}
# Clone the repository
git clone https://github.com/themesberg/flowbite-mcp.git
cd flowbite-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run in stdio mode (for Claude Desktop, Cursor)
npm start

# Run inspector
npm run start inspector
{{< /code >}}

### Transport modes

Flowbite MCP supports both stdio and http transport modes if you want to run it locally as a server.

Use the `--mode` option to set either `http` or `stdio` transport mode.

{{< code lang="bash" >}}
# Run in HTTP server mode for production
npx flowbite-mcp --mode http --port 3000
{{< /code >}}

Additionally, you can also set the `--port` option to choose a different port for the HTTP server.

### Docker configuration

Flowbite MCP also has a Docker configuration file that you can use to run it as a container.

{{< code lang="bash" >}}
# Build and run with Docker Compose (recommended)
docker-compose up -d

# Check health
curl http://localhost:3000/health

# View logs
docker-compose logs -f

# Stop
docker-compose down
{{< /code >}}

## Contributing

[Flowbite MCP](https://github.com/themesberg/flowbite-mcp) is open-source under the MIT license and contributions are more than welcome to the project.
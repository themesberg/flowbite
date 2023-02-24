---
layout: home
title: Tailwind CSS Phoenix (Elixir) - Flowbite
description: Learn how to install Flowbite with Phoenix and Tailwind CSS to start building rich and interactive web applications based on the Elixir programming language
group: getting-started
toc: true
requires_phoenix: true

previous: Ruby on Rails
previousLink: getting-started/rails/
next: Django
nextLink: getting-started/django/
---

[Phoenix](https://www.phoenixframework.org/) is a popular open-source web development framework based on the Elixir programming language that leverages the Model-View-Controller (MVC) architecture and it can be a viable alternative compared to oth
er back-end framework languages such as Ruby on Rails, Django or even Flask.

The Phoenix framework and the Elixir programming language is used by a quite a few well established companies and websites such as Pinterest, Moz, Financial Times, Toyota, and even Discord.

By following this guide you will learn how to create a new Phoenix project powered by Elixir, install and set up the Tailwind CSS framework and finally install Flowbite to leverage the open-source UI components.

## Requirements

Before getting started you need to have both [Elixir](https://elixir-lang.org/), the [Hex](https://hex.pm/) package manager, the [PostgreSQL](https://www.postgresql.org/) relational database server and [Node.js](https://nodejs.org/) installed on your local computer to be able to follow through this guide.

### Install Elixir

If you're using macOS you can use Homebrew to install Elixir in your terminal:

```bash
brew install elixir
```

Alternatively, if you're on a Windows device you can install Elixir using Scoop:

```bash
scoop install erlang
scoop install elixir
```

You can run `elixir -v` in your terminal to confirm that Elixir has been succesfully installed.

Read more about the [Elixir installation guide](https://elixir-lang.org/install.html) for more details if needed.

### Install Hex

Make sure that the Hex package manager is also available. Install it by running the following command:

```bash
mix local.hex
```

If you already had Hex locally installed this command will upgrade it to the latest version.

### App generator

Now that you have both Elixir and Hex installed you need to set up the Phoenix application generator by running the following command in your terminal:

```bash
mix archive.install hex phx_new
```

Make sure that you press "Yes" to all prompts.

## Create a Phoenix project

Now that you have all of the required languages and tools installed you can create a new Phoenix project.

1. Using the application generator, you can create a new Phoenix project and make sure that you press "Yes" when prompted to install the local dependencies:

```bash
mix phx.new project_name
cd project_name/
```

This command will create a fresh installation of a Phoenix application with a folder structure that already includes examples of the MVC pattern including controllers, view templates, and data models.

2. Create and configure your database by running the following command:

```bash
mix ecto.create
```

## Install Tailwind CSS

## Install Flowbite

## Flowbite components

## Phoenix starter project

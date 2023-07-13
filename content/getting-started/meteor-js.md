---
layout: home
title: Tailwind CSS Meteor.js - Flowbite
description: Learn how to install Tailwind CSS with Flowbite for your Meteor.js project
group: getting-started
toc: true
requires_nextjs: true

previous: Next.js
previousLink: getting-started/next-js/
meteor: Remix
nextLink: getting-started/remix/
---

[Meteor.js](https://meteor.com/) is a full-stack JavaScript platform for developing modern web and mobile applications. Meteor includes a key set of technologies for building connected-client reactive applications, a build tool, and a curated set of packages from the Node.js and general JavaScript community.

- Meteor allows you to develop in one language, JavaScript, in all environments: application server, web browser, and mobile device.

- Meteor uses data on the wire, meaning the server sends data, not HTML, and the client renders it.

- Meteor embraces the ecosystem, bringing the best parts of the extremely active JavaScript community to you in a careful and considered way.

- Meteor provides full stack reactivity, allowing your UI to seamlessly reflect the true state of the world with minimal development effort.

## Requirements

Make sure that you have [Node.js v14](https://nodejs.org/en/) installed on your computer to be able to install Meteor.js, Tailwind CSS and Flowbite using NPX and NPM.
For more information on how to install Meteor.js, check out the [official installation guide](https://docs.meteor.com/install.html#prereqs).

#### Create a new `meteor` starter project:

```sh
meteor create flowbite-app --tailwind      
cd flowbite-app
```
This will create a new `meteor` project with `tailwindcss` support. No extra configuration needed.

#### Install `flowbite` and `flowbite-react`:

```sh
meteor npm install --save flowbite flowbite-react
```

#### Edit your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./client/*.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

```

#### Start using `flowbite-react`!

```js
import { Alert } from "flowbite-react";

export default function MyPage() {
  return <Alert color="info">Alert!</Alert>;
}
```

Now that you have successfully installed Flowbite React you can start using the components from the library.

## Flowbite components

To get you started you can check out the full collection of React components from the [Flowbite React repository](https://github.com/themesberg/flowbite-react) and browse the documentation for the source code of each component.

Here's an example of how you can use the alert component by importing it from the `flowbite-react` package:

```javascript
import { Alert } from "flowbite-react";

export default function MyPage() {
  return <Alert color="info">Alert!</Alert>;
}
```

Here's another example of how you can use the dropdown component:

```javascript
import { Dropdown } from "flowbite-react";

<Dropdown label="Dropdown button">
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>
```

Finally, another example on how you can use the navbar component:

```javascript
import { Navbar } from "flowbite-react";

<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
```

To learn more about Flowbite React make sure to check out to the repository and the main website.

## Meteor.js starter project

The Flowbite community has created an open-source Meteor.js starter project that has Tailwind CSS and Flowbite React set up beforehand and you can go ahead and clone it by checking out the [repository on GitHub](https://github.com/meteor/flowbite-meteor-starter).
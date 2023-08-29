---
layout: home
title: Tailwind CSS Theming - Flowbite
description: Use the theming options from the Tailwind CSS configuration file to override the default utility classes from Flowbite and change colors, fonts, and the default class values
group: customize
toc: true

previous: Dark mode
previousLink: customize/dark-mode/
next: Colors
nextLink: customize/colors/
---

You can use the `theme` object from the configuration file to define any style related classes, such as the color palette, fonts, breakpoints, and more.

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```

## Flowbite Plugin

Use the custom styles from Flowbite by including the plugin inside the `tailwind.config.js` file:

```javascript
```javascript
plugins: [
  require('flowbite/plugin')({
      charts: true,
      forms: true,
      tooltips: true
  }),
  // ... other plugins
]
```

You can enable or disable styles for the charts, forms or tooltips by setting a `true` or `false` value.

## Theme structure

Some of the more widely used `theme` keys are `screens`, `colors`, and `spacing` as one of the core utility classes.

You can read all of the [configurable keys on Tailwind CSS](https://tailwindcss.com/docs/theme#configuration-reference).

### Breakpoints

Use the `screens` key to update the responsive breakpoints.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

### Colors

Use the `colors` key to set the colors of your site.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },

      // ...
    }
  }
}
```

### Fonts

You can add your own font by extending the default Tailwind CSS configuration file

Make sure that you apply `antialiased` to the `<body>` tag of your document to enable font smoothing.

```javascript
tailwind.config = {
  theme: {
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    }
  }
}
```

### Spacing

Update the `spacing` key to set new values for the spacing utilities (such as paddings and margins).

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
  }
}
```

## Customizing the theme

By default, the configuration file will set the base utility classes from FlowBite and Tailwind CSS. However, you can customize them by using the `extend` object.

### Extending

Use the `extend` object if you want to keep the values from the default settings but you want to extend them with your own.

For example, you can keep all of the default breakpoints, but you may want to add another larger one for the `screens` key.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
      }
    }
  }
}
```

### Overriding

Alternatively, you can also completely override certain settings.

For example, the following code will override all of the `opacity` settings with your own.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // Replaces all of the default `opacity` values
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    }
  }
}
```

Please read the official [Tailwind CSS Theming](https://tailwindcss.com/docs/theme) documentation if you want a full overview of the theming options.
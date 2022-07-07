// Global helper file (axe-helper.js)
const { configureAxe, axe } = require('jest-axe')

const axe = configureAxe({
  rules: {
    // disabled landmark rules when testing isolated components.
    'region': { enabled: false },
  }
})

module.exports = axe
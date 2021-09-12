## FlowBite Documentation

These are the source files for the Flowbite Tailwind CSS components library.

### Getting started

1. Make sure you have Node and NPM installed
2. Run `yarn install`
3. Run `yarn start` to start developing

## Building the docs website

Make sure to switch `enabled` to `true` in the `tailwind.config.js` file when building for docs to purge the extra CSS. (doesn't work with the process env for some reason).

Run `yarn build` to build the static HTML files that will be uploaded to FlowBite. The static HTML files can be found in the `_gh_pages/` folder then moved to the `static/docs` folder from the main FlowBite Gatsby repo.

## Building for NPM registry

Make sure that purge is NOT enabled in `tailwind.config.js` (this needs to be fixed with env variables).

Run `npm run build:npm` and then `npm publish` to release a new version. Make sure you also change the version.
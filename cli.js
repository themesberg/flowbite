#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
// Check if --debug is passed
const debug = process.argv.includes('--debug');
const fs = require('fs');

if (
    process.argv.includes('-h') ||
    process.argv.includes('--help') ||
    process.argv.length == 2
) {
    if (process.argv.includes('init')) {
        console.log(
            '\x1b[0;34mFlowbite CLI \x1b[0m\n\nUsage:\nflowbite init [options]\n\nOptions:\n  -h, --help\t\tShow this help\n  -d, --default\t\tCreates a default tailwind.config.js without Flowbite installed\n  -p --postcss\t\tInitialize a postcss.config.js file\n  --debug\t\tShow debug messages'
        );
        process.exit(1);
    } else {
        console.log(
            '\x1b[0;34mFlowbite CLI \x1b[0m\n\nUsage:\nflowbite init [options]\n\nOptions:\n  -h, --help\t\tShow this help\n  -d, --default\t\tCreates a default tailwind.config.js without Flowbite installed\n  -p --postcss\t\tInitialize a postcss.config.js file\n  --debug\t\tShow debug messages'
        );
        process.exit(1);
    }
}

if (process.argv.includes('-v') || process.argv.includes('--version')) {
    console.log(
        '\x1b[0;34mFlowbite v' + require('./package.json').version + '\x1b[0m'
    );
    process.exit(1);
}

if (process.argv.includes('init')) {
    init();
} else {
    console.log(
        '\x1b[0;34m Flowbite CLI \x1b[0m\n\nUsage:\n\n flowbite init [options]\n\nOptions:\n  -h, --help\t\tShow this help\n  -v, --version\t\tShow the version\n  --debug\t\tShow debug messages'
    );
    process.exit(1);
}

async function createTailwindConfig() {
    if (fs.existsSync('tailwind.config.js')) {
        log('tailwind.config.js already exists.');
        return;
    }
    const data = `module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
};
`;

    // Write the file
    fs.writeFileSync('tailwind.config.js', data, 'utf8');
    log('tailwind.config.js created.');
}

async function updateTailwindConfig() {
    // Read the file and replace plugins:[ with plugins: [require("flowbite")
    var data = fs.readFileSync('tailwind.config.js', 'utf8');
    var config;
    try {
        // Try to read the config file
        config = await require(process.cwd() + '\\tailwind.config.js');
    } catch (e) {
        log('Error: Invalid tailwind.config.js file.', true);
        process.exit(1);
    }
    // Check if the plugin is already added
    if (
        data.includes("require('flowbite/plugin')") &&
        data.includes('./node_modules/flowbite/**/*.js')
    ) {
        log('Flowbite has already been installed in tailwind.config.js.', true);
        process.exit(1);
    }

    // Check if flowbite is installed
    if (!fs.existsSync('node_modules/flowbite')) {
        log(
            'Flowbite is not installed.\nInstall it with \x1b[1m\x1b[4mnpm install flowbite\x1b[0m.',
            true
        );
    }
    // Use regular expressions to find the line where the plugins are defined
    const pluginLine = data.match(/plugins: \[[\s\S]*\]/)[0];

    // Use regular expressions to find the current plugins
    var currentPlugins = pluginLine?.match(/require\('.*'\)/g);

    // Checks if the plugin is already added
    if (pluginLine) {
        if (!currentPlugins) currentPlugins = [];
        if (currentPlugins.includes("require('flowbite/plugin')"))
            return log(
                'Flowbite has already been installed in tailwind.config.js.'
            );
        // Add the new plugin to the current plugins
        currentPlugins.push("require('flowbite/plugin')");

        log('Flowbite plugin added to tailwind.config.js.');
    }

    // Check if the content is already added
    if (!config.content.includes('./node_modules/flowbite/**/*.js')) {
        config.content.push('./node_modules/flowbite/**/*.js');
        log('Flowbite node_modules added to tailwind.config.js.');
    }

    var end = JSON.stringify(config, null, 4).replace(/"([^"]+)":/g, '$1:');
    // Add the new plugin to the current plugins
    end = end.replace(
        /"require\('flowbite\/plugin'\)"/g,
        "require('flowbite/plugin')"
    );

    // Updates the file
    var result = data.replace(
        /module.exports\s*=\s*\{(.*)$/gs,
        'module.exports = ' +
            end
                .replace(
                    /plugins: \[[\s\S]*\]/,
                    `plugins: [${currentPlugins.join(', ')}]`
                )
                .replace(/"/g, "'")
    );

    // Write the file
    fs.writeFileSync('tailwind.config.js', result, 'utf8');
    log('tailwind.config.js updated.');
}

async function postCss() {
    // Check if postcss.config.js exists
    if (!fs.existsSync('postcss.config.js')) {
        if (
            !fs.existsSync('node_modules/postcss') &&
            !fs.existsSync('node_modules/tailwindcss') &&
            !fs.existsSync('node_modules/autoprefixer')
        ) {
            log(
                "PostCSS and AutoPrefixer aren't installed.\nInstall them with \x1b[1m\x1b[4mnpm install -D tailwindcss postcss autoprefixer\x1b[0m.",
                true
            );
        }
        // Create postcss.config.js
        const data = `module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
`;
        fs.writeFileSync('postcss.config.js', data, 'utf8');
        log('postcss.config.js created.');
    } else {
        return;
    }
}

/**
 *
 * @param {string} msg
 * @param {boolean} important
 * @returns
 */
function log(msg, important = false) {
    if (important == true) {
        console.log(msg + '\x1b[0m');
    } else if (debug == true) {
        console.log(msg + '\x1b[0m');
    }
}

/**
 * Init the tailwind config
 * @returns
 */
async function init() {
    if (process.argv.includes('-d') || process.argv.includes('--default')) {
        if (fs.existsSync('tailwind.config.js')) {
            log('tailwind.config.js already exists.', true);
            process.exit(1);
        }
        await createTailwindConfig();
        log('Tailwind config created without Flowbite', true);
        if (process.argv.includes('-p') || process.argv.includes('--postcss')) {
            await postCss();
        }
        process.exit(1);
    }
    if (fs.existsSync('tailwind.config.js')) {
        await updateTailwindConfig();
        log('Flowbite has been installed in tailwind.config.js.', true);
    } else {
        await createTailwindConfig();
        await updateTailwindConfig();
        log(
            'Created new tailwind.config.js file with Flowbite installed.',
            true
        );
    }
    if (process.argv.includes('-p') || process.argv.includes('--postcss')) {
        await postCss();
        log('Created postcss.config.js file.', true);
    }
    process.exit(1);
}

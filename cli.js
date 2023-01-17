#! /usr/bin/env node
// Check if --debug is passed
const debug = process.argv.includes("--debug");
const fs = require("fs");

if (process.argv.includes("-h") || process.argv.includes("--help") || process.argv.length == 2) {
    if (process.argv.includes("init")) {
        console.log("\x1b[0;34m Flowbite CLI \x1b[0m\n\nUsage:\nflowbite init [options]\n\nOptions:\n  -h, --help\t\tShow this help\n  -d, --default\t\tCreates a default tailwind.config.js without Flowbite installed\n  -p --postcss\t\tAdd postcss to your project\n  --debug\t\tShow debug messages");
        process.exit(1);
    } else {
        console.log("\x1b[0;34m Flowbite CLI \x1b[0m\n\nUsage:\n\n flowbite init [options]\n\nOptions:\n  -h, --help\t\tShow this help\n  -v, --version\t\tShow the version\n  --debug\t\tShow debug messages");
        process.exit(1);
    }
}

if (process.argv.includes("-v") || process.argv.includes("--version")) {
    console.log("Create-Flowbite " + require("../package.json").version);
    process.exit(1);
}

if (process.argv.includes("init")) {
    init();
} else {
    console.log("\x1b[0;34m Flowbite CLI \x1b[0m\n\nUsage:\n\n flowbite init [options]\n\nOptions:\n  -h, --help\t\tShow this help\n  -v, --version\t\tShow the version\n  --debug\t\tShow debug messages");
    process.exit(1);
}

function createTailwindConfig() {
    if (fs.existsSync("tailwind.config.js")) {
        log("tailwind.config.js already exists");
        return;
    }
    const data = `
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}`;
    // Write the file
    fs.writeFileSync("tailwind.config.js", data, "utf8");
    log("tailwind.config.js created");
}

async function updateTailwindConfig() {
    // Read the file and replace plugins:[ with plugins: [require("flowbite")
    const data = fs.readFileSync("tailwind.config.js", "utf8");
    // Check if the plugin is already added
    if (data.includes("require('flowbite')")) {
        log("Flowbite plugin already added to tailwind.config.js", true);
        process.exit(1);
    }

    // Check if flowbite is installed
    if (!fs.existsSync("node_modules/flowbite")) {
        log("Installing Flowbite...");
        // Check if package.json exists
        if (!fs.existsSync("package.json")) {
            console.log("No npm project found!\nCreate one with \x1b[1m\x1b[4mnpm init\x1b[0m");
            process.exit(1);
        }
        await run("npm install -D tailwindcss autoprefixer flowbite");
        log("Dependencies installed");
        updateTailwindConfig();

    }

    var result = data.replace("plugins: [", "plugins: [require('flowbite'),").replace("content: [", "content: ['./node_modules/flowbite/**/*.js',");
    fs.writeFileSync("tailwind.config.js", result, "utf8");
    log("Flowbite plugin added to tailwind.config.js");
}

async function postCss() {
    // Check if postcss.config.js exists
    if (!fs.existsSync("postcss.config.js")) {
        // Install tailwindcss and autoprefixer
        log("Installing tailwindcss and autoprefixer...");
        await run("npm install -D tailwindcss postcss autoprefixer");
        // Create postcss.config.js
        const data = `
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};`;
        fs.writeFileSync("postcss.config.js", data, "utf8");
        log("postcss.config.js created");
    } else {
        return;
    }
}


// Functions
const { exec } = require('child_process');
/**
 * Function to run command in terminal
 * @param {string} cmd
 * @returns
 */
const run = async (cmd) => {
    const child = exec(cmd, (err) => {
        if (err) console.error(err);
    });
    if (debug == true) {
        child.stderr.pipe(process.stderr);
        child.stdout.pipe(process.stdout);
    }

    await new Promise((resolve) => child.on('close', resolve));
};

/**
 * 
 * @param {string} msg 
 * @param {boolean} important 
 * @returns
 */
function log(msg, important = false) {
    if (important == true) {
        console.log(msg + "\x1b[0m");
    }
    if (debug == true) {
        console.log(msg + "\x1b[0m");
    }
}

/**
 * Init the tailwind config
 * @returns
 */
async function init() {
    if (process.argv.includes("-d") || process.argv.includes("--default")) {
        await createTailwindConfig();
        log("tailwind.config.js created", true);
        if (process.argv.includes("-p") || process.argv.includes("--postcss")) {
            await postCss();
        }
        process.exit(1);
    }
    if (fs.existsSync("tailwind.config.js")) {
        log("tailwind.config.js already exists");
        updateTailwindConfig();
    }
    else {
        await createTailwindConfig();
        await updateTailwindConfig();
    }
    if (process.argv.includes("-p") || process.argv.includes("--postcss")) {
        await postCss();
        log("postcss.config.js created", true);
    }
    log("tailwind.config.js created with Flowbite plugin", true);
}
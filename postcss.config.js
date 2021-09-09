// postcss.config.js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: process.env.NPM_ENV === "production" ? { preset: "default" } : false
    }
}
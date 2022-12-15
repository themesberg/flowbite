/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano:
            process.env.NPM_ENV === 'production'
                ? { preset: 'default' }
                : false,
    },
};

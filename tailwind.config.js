/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    future: {
        // Touch screens keep :hover after a tap; apply hover styles only on
        // devices that can really hover.
        hoverOnlyWhenSupported: true
    },
    // Class names are only discovered in these files. Build class strings
    // from whole literals (not concatenated fragments) so they stay visible.
    content: [
        './templates/**/*.html',
        './static/app.js',
        './static/offline-*.js',
        './static/realtime.js',
        './static/viewport.js',
        './static/ui-scale.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f9a8d4',
                uncertain: '#fef3c7'
            }
        }
    }
};

// Dependencies
// =============================================================================
const browserSync = require('browser-sync').create();

browserSync.init({
    files: [
        './dist/**/*.*',
        './docs/**/*.*'
    ],
    ghostMode: {
        clicks: false,
        forms : false,
        scroll: false
    },
    open: false,
    notify: false,
    cors: true,
    reloadDebounce: 1000,
    reloadOnRestart: true,
    server: {
        baseDir: [
            './docs/'
        ],
        routes: {
            '/dist': './dist/',
            '/src': './src/',
            '/CHANGELOG.md': './CHANGELOG.md'
        }
    },
    rewriteRules: [
        // Replace CDN URLs with local paths
        {
            match  : /https?.*\/CHANGELOG.md/g,
            replace: '/CHANGELOG.md'
        }
    ]
});

const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Config
const path = require("./config/path.js");
const app = require("./config/app.js");

// Tasks
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const css = require('./task/css.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const js = require('./task/js.js');
const media = require('./task/media.js');

// Live server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Watcher
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.css.watch, css).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.media.watch, js).on("all", browserSync.reload);
}

const build = series (
    clear,
    parallel(html, css, img, font, js, media),
);
const dev = series(
    build,
    parallel(watcher, server),
);

// Tasks
exports.watch = watcher;
exports.css = css;
exports.img = img;
exports.font = font;
exports.js = js;
exports.media = media;


// Build
exports.dev = dev;
exports.build = build;
exports.default = app.isProd ? build : dev;
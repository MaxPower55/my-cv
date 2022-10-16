const { src, dest } = require("gulp");

// Config
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const autoPrefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const webpcss = require("gulp-webp-css");

// Treatment files SCSS
const scss = () => {
    return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(concat("main.css"))
    .pipe(sass())
    .pipe(webpcss())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "SCSS main.css" }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: "-min" }))
    .pipe(csso())
    .pipe(size({ title: "SCSS main-min.css" }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}

module.exports = scss;
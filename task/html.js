const { src, dest } = require("gulp");

// Config
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webphtml = require("gulp-webp-html");

// Treatment files
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webphtml())
    .pipe(size({ title: "HTML Before" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "HTML After" }))
    .pipe(dest(path.html.dest))
}

module.exports = html;
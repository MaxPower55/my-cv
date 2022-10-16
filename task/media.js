const { src, dest } = require("gulp");

// Config
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

// Treatment files JS
const media = () => {
    return src(path.media.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "media",
            message: error.message
        }))
    }))
    .pipe(dest(path.media.dest, { sourcemaps: app.isDev }))
}

module.exports = media;
const { src, dest } = require("gulp");

// Config
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const gulpif = require("gulp-if");

// Treatment files images
const img = () => {
    return src(path.img.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "IMAGES",
            message: error.message
        }))
    }))
    .pipe(dest(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest))
}

module.exports = img;
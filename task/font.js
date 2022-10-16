const { src, dest } = require("gulp");

// Config
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const gulpif = require("gulp-if");

// Treatment files fonts
const font = () => {
    return src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "FONTS",
            message: error.message
        }))
    }))
    .pipe(gulpif(app.idProd, fonter(app.fonter)))
    .pipe(dest(path.font.dest))
    .pipe(gulpif(app.idProd, ttf2woff2()))
    .pipe(dest(path.font.dest))
}

module.exports = font;
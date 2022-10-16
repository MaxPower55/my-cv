const pathSrc = './src';
const pathDest = './public';

module.exports = {
    root: pathDest,
    
    html: {
        src: pathSrc + "/index.html",
        watch: pathSrc + "/**/*.html",
        dest: pathDest
    },
    
    css: {
        src:[
            pathSrc + "/css/normalize.css", 
            pathSrc + "/css/styles.css", 
        ],
        watch: pathSrc + "/css/*.css",
        dest: pathDest + "/css/"
    },

    scss: {
        src: pathSrc + "/scss/*.scss",
        watch: pathSrc + "/scss/*.scss",
        dest: pathDest
    },

    img: {
        src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
        dest: pathDest + "/img/"
    },

    font: {
        src: pathSrc + "/font/*.{eot,otf,ttf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/*.{eot,otf,ttf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font/"
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/*.js",
        dest: pathDest + "/js/"
    },
    media: {
        src: pathSrc + "/media/*.*",
        watch: pathSrc + "/media/*.*",
        dest: pathDest + "/media/"
    },
}
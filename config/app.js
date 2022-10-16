const isProd = process.argv.includes("--production");
const isDev = !isProd;


module.exports = {
    idProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf","woff","eot","svg"]
    },

}
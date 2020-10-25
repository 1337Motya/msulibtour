var projectFolder = "dist";
var sourceFolder = "src";

var path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/css/",
    js: projectFolder + "/js/",
    img: projectFolder + "/img/",
    fonts: projectFolder + "/fonts/",
  },
  src: {
    html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
    css: sourceFolder + "/styles/*.{scss,css}",
    js: sourceFolder + "/js/*.js",
    img: sourceFolder + "/img/**/*.{png,jpg,svg,gif,ico,webp}",
    fonts: sourceFolder + "/fonts/*.ttf",
  },
  watch: {
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/styles/**/*.{scss,css}",
    js: sourceFolder + "/js/**/*.js",
    img: sourceFolder + "/img/**/*.{png,jpg,svg,gif,ico,webp}",
  },
  clean: "./" + projectFolder + "/",
};

var { src, dest } = require("gulp");
var gulp = require("gulp");
var browsersync = require("browser-sync").create();
var fileinclude = require("gulp-file-include");
var del = require("del");
var scss = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var groupMedia = require("gulp-group-css-media-queries");
var cleanCss = require("gulp-clean-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify-es").default;
var imagemin = require("gulp-imagemin");
var webphtml = require("gulp-webp-html");
var webpcss = require("gulp-webp-css");

function browserSync(bs) {
  browsersync.init({
    server: {
      baseDir: "./" + projectFolder + "/",
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    //.pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(groupMedia())
    .pipe(
      autoprefixer({
        overrideBrowsersList: ["Last 5 versions"],
        cascade: true,
      })
    )
    //.pipe(webpcss())
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function fileWatch() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean() {
  return del(path.clean);
}

var build = gulp.series(clean, gulp.parallel(css, html, js, images));
var watch = gulp.parallel(build, fileWatch, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const include = require('gulp-include');
const gulpIf = require('gulp-if');

// images optimization
const imagemin = require("gulp-imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminZopfli = require("imagemin-zopfli");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminGiflossy = require("imagemin-giflossy");

const ttf2woff2 = require('gulp-ttf2woff2');

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const del = require('del');
const browserSync = require('browser-sync').create();


// check prod or dev
const isDevelopment = !(process.argv[2] === 'build') || !process.argv[2] ;

const path = {
  dev: {
    sass: 'src/sass/**/*.{sass,scss}',
    js: 'src/js',
    html: 'src/*.html',
    img: ['src/img/**/*.*'],
    fonts: 'src/fonts/**/*.ttf'
  },
  build: {
    root: 'build',
    css: 'build/css',
    js: 'build/js',
    html: 'build/*.html',
    img: 'build/img',
    fonts: 'build/fonts'
  }
};

function liveReload(done) {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });

    done()
}

async function clean() {
    return await del.sync(path.build.root);
}

function html() {
  return src(path.dev.html)
            .pipe(dest(path.build.root))
            .pipe(browserSync.stream());
}

function styles() {
  return src(path.dev.sass)
            .pipe(gulpIf(isDevelopment, sourcemaps.init()))
            .pipe(sass())
            .pipe(dest(path.build.css))
            .pipe(cleanCSS({
              level: 2
            }))
            .pipe(rename({
              suffix: '.min'
            }))
            .pipe(gulpIf(isDevelopment, sourcemaps.write()))
            .pipe(dest(path.build.css))
            .pipe(browserSync.stream());
}

function scripts() {
  return src(`${path.dev.js}/main.js`)
            .pipe(include())
            .pipe(babel({
              presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(rename({
              suffix: '.min'
            }))
            .pipe(dest(path.build.js))
            .pipe(browserSync.stream());
}

function imagesBuild () {
  return src(path.dev.img)
      .pipe(imagemin([
        imageminGiflossy({
          optimizationLevel: 3,
          optimize: 3,
          lossy: 2
        }),
        imageminPngquant({
          speed: 5,
          quality: [0.6, 0.8]
        }),
        imageminZopfli({
          more: true
        }),
        imageminMozjpeg({
          progressive: true,
          quality: 70
        }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: false },
            { removeUnusedNS: false },
            { removeUselessStrokeAndFill: false },
            { cleanupIDs: false },
            { removeComments: true },
            { removeEmptyAttrs: true },
            { removeEmptyText: true },
            { collapseGroups: true }
          ]
        })
      ]))
      .pipe(dest(path.build.img));
};
function images () {
  return src(path.dev.img)
      .pipe(dest(path.build.img));
};

function fonts(){
  return src(path.dev.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts));
};

function watcher(done) {
  watch(path.dev.sass, styles)
  watch(path.dev.js, scripts)
  watch(path.dev.html, html)
  watch(path.dev.img, images)
  watch(path.dev.fonts, fonts)
  done();
}

exports.styles = styles;
exports.watcher = watcher;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.fonts = fonts;
exports.clean = clean;

exports.build = series(
  clean,
  parallel(html, styles, scripts, imagesBuild, fonts),
);

exports.default = series(
  clean,
  parallel(html, styles, scripts, images, fonts),
  liveReload,
  watcher
);

const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const {SRC_PATH, DIST_PATH} = require('./gulp.config');


const reload = browserSync.reload;

sass.compiler = require('node-sass');


task('clean', () => {
    return src( `${DIST_PATH}/**/*`, {read: false}).pipe( rm() )
});


task('copy:html', () => {
        return src(`./${SRC_PATH}/*.html`)
            .pipe(dest(DIST_PATH))
            .pipe(reload({stream: true}));
    }
);

const styles = [
    `${SRC_PATH}/main5.scss`
];

task('server', () => {
    browserSync.init({
        server: {
            baseDir: `${DIST_PATH}`
        },
        open: false
    });
});

task('styles', () => {
        return src(styles)
        .pipe(sourcemaps.init())
        .pipe(concat('main.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false
        }))
        //.pipe(gcmq())
        .pipe(cleanCSS({}))
        .pipe(sourcemaps.write())
        .pipe(dest(DIST_PATH));
    }
);

task('scripts', () => {
    return src(`${SRC_PATH}/scripts/*.js`)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js', {newLine: ";"}))
    .pipe(sourcemaps.write())
    .pipe(dest(DIST_PATH));
});


watch(`${SRC_PATH}/styles/*.scss`, series('styles'));
watch(`${SRC_PATH}/*.html`, series('copy:html'));
watch(`${SRC_PATH}/scripts/*.js`, series('scripts'));


task('default', series('clean', parallel('copy:html', 'styles', 'scripts'), 'server'));
const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
//const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
//const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const {SRC_PATH, DIST_PATH} = require('./gulp.config');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

const reload = browserSync.reload;

const styles = [
    `${SRC_PATH}/main5.scss`
];

sass.compiler = require('node-sass');

task('clean', () => {
    return src( `${DIST_PATH}/**/*`, {read: false}).pipe( rm() )
});

task('copy:html', () => {
    return src(`./${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({stream: true}));
});

task('images', () => {
    return src(`${SRC_PATH}/img/**/*`)
    .pipe(dest(`${DIST_PATH}/img`))
    .pipe(reload({stream: true}))
});

task('copy:video', () => {
    return src(`${SRC_PATH}/video/*`)
    .pipe(dest(`${DIST_PATH}/video`))
    .pipe(reload({stream: true}));
});

task('copy:fonts', () => {
    return src(`${SRC_PATH}/fonts/*`)
    .pipe(dest(`${DIST_PATH}/fonts`))
    .pipe(reload({stream: true}));
});

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
    .pipe(sass().on('error', sass.logError)) //компилятор sass
    .pipe(gulpif(env === "dev", sourcemaps.init()))
    //.pipe(sassGlob())
    .pipe(concat('main.css'))
    .pipe(gulpif(env === "dev",
        autoprefixer({ // авто префиксы для браузеров
            cascade: false
        })
    ))
    //.pipe(gulpif(env === "prod", gcmq())) //группировка медиазапросов
    .pipe(gulpif(env === "prod", cleanCSS({}))) //очистка css
    .pipe(gulpif(env === "dev", sourcemaps.write())) // записать + сорс мап
    .pipe(dest(DIST_PATH));
});

task('scripts', () => {
    return src(['./node_modules/jquery/dist/jquery.js', './node_modules/jquery-touchswipe/jquery.touchSwipe.js', `${SRC_PATH}/scripts/*.js`])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js', {newLine: ";"}))
    .pipe(sourcemaps.write())
    .pipe(dest(DIST_PATH));
});

task('watch', () => {
    watch(`${SRC_PATH}/styles/**/*.scss`, series('styles'));
    watch(`${SRC_PATH}/*.html`, series('copy:html'));
    watch(`${SRC_PATH}/scripts/*.js`, series('scripts'));
});

task(
    'default', series(
        'clean',
        parallel('copy:html', 'copy:fonts', 'copy:video', 'images', 'styles', 'scripts'),
        parallel('watch', 'server')
));

task(
    'build', series(
        'clean',
        parallel('copy:html', 'copy:fonts', 'copy:video', 'images', 'styles', 'scripts')
));
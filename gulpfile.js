const { src, dest, task, series, watch } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');

const reload = browserSync.reload;

sass.compiler = require('node-sass');


task('clean', () => {
    return src( 'dist/**/*', {read: false}).pipe( rm() )
});


task('copy:html', () => {
        return src('./src/*.html')
            .pipe(dest('dist'))
            .pipe(reload({stream: true}));
    }
);

const styles = [
    './node_modules/normalize.css/normalize.css',
    './src/main5.scss'
];

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});

task('styles', () => {
        return src(styles)
        .pipe(concat('main.scss'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                //browsers: ["last 2 versions"],
                cascade: false
        }))
        .pipe(gcmq())
        .pipe(dest('dist'));
    }
);

watch('./src/styles/*.scss', series('styles'));
watch('./src/*.html', series('copy:html'));

task('default', series('clean', 'copy:html', 'styles', 'server'));
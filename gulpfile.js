const { src, dest, task, series } = require('gulp');
const rm = require( 'gulp-rm' );
const files = [
    './src/**/*.scss'
];


task('clean', () => {
    return src( 'dist/**/*', {read: false}).pipe( rm() )
});


task(
    'copy', () => {
        return src(files).pipe(dest('dist'))
    }
);

task('default', series('clean', 'copy'))

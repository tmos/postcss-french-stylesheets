/**
 * Declaration
 */

/** Base */
var gulp = require('gulp'),
    plumber = require('gulp-plumber');
/** Css */
var sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();
    postcss = require('gulp-postcss'),
    postcssPlugins = [
        require('postcss-french-stylesheets'),
        require('cssnano')({safe:true}),
        require('autoprefixer')({browsers: ['last 2 version']})
    ];
/** Files access */
var files = {
        css_input : 'feuilles-de-style-en-cascade/styles.css',
        css_output : 'css/'
    };

/**
 * Tasks
 */
gulp.task('css', function() {
    gulp.src(files.css_input)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(postcss(postcssPlugins))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(files.css_output));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("feuilles-de-style-en-cascade/*.css", ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['css'], function() {
    gulp.watch(files.css_input, ['css']);
});

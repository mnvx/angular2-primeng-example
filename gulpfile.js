var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
  scripts: 'client/src/js/**/*.*',
  vendors: [
    'node_modules/angular2/**/*.js',
    'node_modules/bootstrap/**/*.css',
    'node_modules/rxjs/**/*.js',
    'node_modules/systemjs/**/*.js',
    'node_modules/primeng/**/*.js',
    'node_modules/primeui/**/*.js',
    'node_modules/primeng/**/*.css',
    'node_modules/primeui/**/*.css'
  ],
  ts: 'client/src/app/**/*.ts',
  styles: [
    'client/src/**/*.css'
  ],
  images: 'client/src/img/**/*.*',
  views: 'client/src/**/*.html'
};

/**
 * Handle vendor files
 */
gulp.task('vendors', function () {
  return gulp.src(paths.vendors, {base: "./node_modules"})
      .pipe(gulp.dest('public/build/vendors/'));
});

/**
 * Handle components from index
 */
gulp.task('usemin', function () {
  return gulp.src(paths.views)
      .pipe(usemin({
        js: [minifyJs(), 'concat'],
        css: [minifyCss({keepSpecialComments: 0}), 'concat']
      }))
      .pipe(gulp.dest('public/build/'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-less'/*, 'custom-ts'*/]);

gulp.task('custom-images', function () {
  return gulp.src(paths.images)
      .pipe(gulp.dest('public/build/img'));
});

//gulp.task('custom-ts', function () {
//  return gulp.src(paths.ts)
//      .pipe(gulp.dest('public/build/app'));
//});

gulp.task('custom-js', function () {
  return gulp.src(paths.scripts)
      .pipe(minifyJs())
      .pipe(concat('qeti.min.js'))
      .pipe(gulp.dest('public/build/js'));
});

gulp.task('custom-less', function () {
  return gulp.src(paths.styles)
      .pipe(less())
      .pipe(gulp.dest('public/build/'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom-dev', ['custom-images', 'custom-js-dev', 'custom-less-dev'/*, 'custom-ts'*/]);

gulp.task('custom-js-dev', function () {
  return gulp.src(paths.scripts)
      .pipe(sourcemaps.init())
        .pipe(minifyJs())
        .pipe(concat('scripts.min.js'))
      .pipe(sourcemaps.write('js'))
      .pipe(gulp.dest('public/build/js'));
});

gulp.task('custom-less-dev', function () {
  return gulp.src(paths.styles)
      .pipe(sourcemaps.init())
        .pipe(less())
      .pipe(sourcemaps.write('css'))
      .pipe(gulp.dest('public/build'));
});

/**
 * Watch custom files
 */
gulp.task('watch', function () {
  gulp.watch([paths.images], ['custom-images']);
  gulp.watch([paths.styles], ['custom-less-dev']);
  gulp.watch([paths.scripts], ['custom-js-dev']);
  gulp.watch([paths.views], ['usemin']);
});

/**
 * Live reload server
 */
gulp.task('webserver', function () {
  connect.server({
    root: 'public/build',
    livereload: true,
    port: 8888
  });
});

gulp.task('common', ['usemin', 'vendors']);

/**
 * Gulp tasks
 */
gulp.task('build-dev', ['common', 'build-custom-dev']);
gulp.task('build', ['common', 'build-custom']);
gulp.task('default', ['build-dev', 'webserver', 'watch']);

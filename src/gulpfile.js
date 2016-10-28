'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglyfly = require('gulp-uglyfly');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
  
gulp.task('compress', function() {
  gulp.src('./js/*.js')
    .pipe(uglyfly())
    .pipe(gulp.dest('../dist'))
});
 
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./../css'));
});




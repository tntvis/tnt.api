
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');


// a failing test breaks the whole build chain
gulp.task('default', ['lint', 'test']);


gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  return gulp.src('./test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'spec',
                 useColors: false}));
});

gulp.task('watch', function() {
   gulp.watch(['./src/**/*.js','./lib/**/*.js', './test/**/*.js'], function() {
     gulp.run('test');
   });
});

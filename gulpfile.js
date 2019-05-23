var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');

  
var codePath = 'src/**/*.js';
var scssFiles = './src/scss/*.scss';
var cssDest = './src/prod/css';
var sassOptions = {
  outputStyle: 'expanded'
}

gulp.task('sass', function() {
    return gulp.src(scssFiles)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('testing', function() {
  gulp.src(codePath)
  .pipe(jasmine());
});
  
gulp.task('default', ['testing', 'sass'], function() {
  gulp.watch(scssFiles, ['sass']);
  gulp.watch(codePath, ['testing']);
});
  
process.on('uncaughtException', function(e) {
    console.error(e.stack);
});
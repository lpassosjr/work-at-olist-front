var gulp = require('gulp');
var sass = require('gulp-sass');

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
  
gulp.task('default', ['sass'], function() {
  gulp.watch(scssFiles, ['sass']);
});
  
process.on('uncaughtException', function(e) {
    console.error(e.stack);
});
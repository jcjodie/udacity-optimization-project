var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css');
    
gulp.task('minify-css', function () {
  gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('cleanCSS'));
});

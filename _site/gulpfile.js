var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss');

gulp.task('serve', function() {
  gulp.watch('./css/*.css', gulp.series('css'));
});

gulp.task('css', function() {
  var plugin = [
    tailwindcss(),
    autoprefixer()
  ]
  return gulp.src('./css/*.css')
    .pipe(postcss(plugin))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('css', 'serve'));
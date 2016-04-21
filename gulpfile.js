var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename');
  browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('discover-eloise.css'))
    .pipe(gulp.dest('../../css/pages'))
	.pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("./**/*.html", ['reload']);
  gulp.watch("./js/**/*.js", ['reload']);
});

gulp.task('reload', function () {
	browserSync.reload();
});


gulp.task('serve', ['watch'], function () {

	browserSync.init({
        server: {
            baseDir: "./"
        }
	});

});

gulp.task('default', ['serve']);

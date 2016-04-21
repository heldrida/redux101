var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename');
  browserSync = require('browser-sync').create(),
  babel = require('gulp-babel');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('discover-eloise.css'))
    .pipe(gulp.dest('../../css/pages'))
	.pipe(browserSync.stream());
});

gulp.task('transpile', function () {
	return gulp.src('./src/app.js')
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("./**/*.html", ['reload']);
  gulp.watch("./src/**/*.js", ['transpile']);
});

gulp.task('reload', function () {
	browserSync.reload();
});


gulp.task('serve', ['watch'], function () {

	browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
	});

});

gulp.task('default', ['serve']);

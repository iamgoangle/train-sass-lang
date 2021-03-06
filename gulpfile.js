const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('sass/*.scss')
		// .pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('./css/'))
});

// Watch my tasks
gulp.task('default', function() {
	gulp.watch('sass/*.scss', ['styles']);
});

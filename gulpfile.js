var gulp = require('gulp'),

coffee = require('gulp-coffee'),
concat = require('gulp-concat'),
replace = require('gulp-replace'),
changed = require('gulp-changed'),
include = require('gulp-file-include'),
prettify = require('gulp-prettify'),
htmlreplace = require('gulp-html-replace'),
plumber = require('gulp-plumber'),
manifest = require('gulp-manifest'),
bowerfiles = require('gulp-bower-files'),
less = require('gulp-less');

var paths = {
	scripts: ['src/js/**/*.coffee'],
	statics: ['src/css/**/*.css', 'src/js/**/*.js', 'src/img/**/*.*'],
	less: ['src/less/**/*.less']
};

gulp.task('index', function() {
	gulp.src('src/index.html')
		.pipe(plumber())
		.pipe(include('@@'))
		.pipe(htmlreplace({
			'js': 'js/all.min.js'
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('statics', function() {
	var dest = 'dist/';
	gulp.src(paths.statics, { base: 'src' })
		.pipe(changed(dest))
		.pipe(plumber())
		.pipe(gulp.dest(dest));
});

gulp.task('scripts', function() {
	var dest = 'dist/js/';
	gulp.src(paths.scripts)
		.pipe(changed(dest))
		.pipe(plumber())
		.pipe(coffee({ bare: true }))
		.pipe(concat('all.js'))
		.pipe(gulp.dest(dest));
});

gulp.task('manifest', function() {
//	gulp.src('dist/**/*')
//		.pipe(manifest({
//			timestamp: true,
//			network: ['http://*', 'https://*', '*'],
//			filename: 'app.manifest',
//			exclude: 'app.manifest'
//		}))
//		.pipe(replace('%5C', '/'))
//		.pipe(gulp.dest('dist'));
});

function compileLess() {
	gulp.src(paths.less)
		.pipe(less({
			paths: [ 'src/less' ]
		}))
		.pipe(gulp.dest('dist/css'));
}

gulp.task('bowercopy', function() {
	bowerfiles({ debugging: true })
		.pipe(gulp.dest('dist/lib'));
	compileLess();
});

gulp.task('less', function() {
	compileLess();
});

gulp.task('watch', function() {
	gulp.watch('gulpfile.js', all)
	gulp.watch(paths.scripts, ['scripts', 'manifest']);
	gulp.watch(paths.statics, ['statics', 'manifest']);
	gulp.watch('src/**/*.html', ['index', 'manifest']);
	gulp.watch('bower_components/**/*.*', ['bowercopy']);
	gulp.watch(paths.less, ['less']);
});

var all = ['index', 'statics', 'scripts', 'manifest', 'bowercopy', 'watch', 'less']
gulp.task('default', all);

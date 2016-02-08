'use strict';

var gulp = require('gulp'),
	compass = require('gulp-compass'),
    concatCss = require('gulp-concat-css'),
    nano = require('gulp-cssnano');
	
	
var options = {
	src: {
		sass: 'sass/'
	},
    dev: {
		css: 'css/'
    },
	dist: {
		css: 'dist/css/',
    }
}

gulp.task('compileSass', function(){
	return gulp.src(options.src.sass + '*.scss')
		.pipe(compass({
                config_file: './config.rb',
                css: options.dev.css,
                sass: options.src.sass
            }))
		.pipe(concatCss("application.css"))
        .pipe(nano()) // Path is relative to dest directory
		.pipe(gulp.dest(options.dev.css));
});

gulp.task('watchSass', function() {
	return gulp.watch([options.src.sass + '*.scss'], ['compileSass']);
});

gulp.task('watch', ['watchSass'], function() {
	console.log("Watching project...");
});

gulp.task('default', ['compileSass'], function() {
	console.log("Tasks completed!");
});

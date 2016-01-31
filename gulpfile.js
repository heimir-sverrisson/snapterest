var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    return browserify('./source/app.js')
        .transform(babelify)
	.bundle()
	.pipe(source('snapterest.js'))
	.pipe(gulp.dest('./build/'));
});
// Install with: npm install --save-dev babel-preset-es2015 babel-preset-react

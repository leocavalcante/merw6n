var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var uglify  = require('gulp-uglifyjs');
var shell   = require('gulp-shell');

gulp.task('default', function() {
    return gulp.src('app/entry.jsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('public/'))
        .pipe(shell([
            'node app/server.js'
        ]))
});
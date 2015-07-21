var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var uglify  = require('gulp-uglifyjs');
var shell   = require('gulp-shell');

gulp.task('test', shell.task(['mocha --compilers js:babel/register']));

gulp.task('build', function() {
    return gulp.src('src/app/entry.jsx')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('start', shell.task(['node src/app/server.js']));
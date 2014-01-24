var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    recess = require('gulp-recess'),
    less = require('gulp-less');


gulp.task('recess', function () {
    gulp.src('./public/css/less/bootstrap.less')
//        .pipe(recess())
        .pipe(less())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('server', function () {
  nodemon({ script: 'server.js', options: '-e html,js -i bootstrap.css' });
});


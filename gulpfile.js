var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  nodemon({ script: 'server.js', options: '-e html,js -i ignored.js' });
});

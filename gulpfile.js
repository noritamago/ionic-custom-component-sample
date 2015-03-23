var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['serve']);

gulp.task('serve',function(){
  gulp.src('.')
      .pipe(webserver({
          host : "0.0.0.0",
        livereload : true,
        port : 8000,
        open : true
      }));
});

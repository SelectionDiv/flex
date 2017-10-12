// 引入 gulp 工具
var gulp = require('gulp');

// 引入 css 预处理 压缩 模块
var sass = require('gulp-sass');

// css 预处理 和 压缩
gulp.task('scss', function () {
  gulp.src('./styles/index-scss.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('watch', function () {
  gulp.watch('./styles/**/*', ['scss']);
});

gulp.task('default', ['watch']);

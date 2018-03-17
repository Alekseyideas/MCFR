const   gulp           = require('gulp'),
        sass           = require('gulp-sass'),
        browserSync    = require('browser-sync'),
        cleanCSS       = require('gulp-clean-css'),
        autoprefixer   = require('gulp-autoprefixer'),
        uglify         = require('gulp-uglify'),
        concat         = require('gulp-concat'),
         webpack = require('webpack'),
         webpackStream = require('webpack-stream'),
         webpackConfig = require('./webpack.config.js'),
        babel          = require('gulp-babel');


gulp.task('min-js',function () {
    gulp.src('app/src/js/es5/mainEs5.js')
        .pipe(concat('page-main.min.js'))
        .pipe(uglify('page-main.min.js'))
        .pipe(gulp.dest('app/js/es5/'))
});
gulp.task('min-css',function () {
    gulp.src('app/assets/css/stylesheet.css')
        .pipe(concat('stylesheet.min.css'))
        .pipe(cleanCSS('stylesheet.min.js'))
        .pipe(gulp.dest('app/assets/css/'))
});


gulp.task('browser-sync', function() {
    browserSync.init({
        port: 5200,
        proxy: "nadirenardi.loc",
        notify: false
    });
});

gulp.task('babel', function() {
    return gulp.src('app/src/js/main.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('app/assets/js/'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('sass', function() {
    return gulp.src('app/src/sass/stylesheet.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions']))
        //.pipe(cleanCSS())
        .pipe(gulp.dest('app/assets/css/'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('watch', ['sass', 'browser-sync'], function() {
    gulp.watch('app/src/sass/**/*.sass', ['sass']);
    gulp.watch('app/src/js/**/*.js', ['babel']);
    gulp.watch('app/assets/js/*.js', ['min-js']);
    gulp.watch('app/assets/css/*.css', ['min-css']);
    gulp.watch('**/*.php', browserSync.reload);
    gulp.watch('app/src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);

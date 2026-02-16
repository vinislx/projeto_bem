const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}

function comprimirimg() {
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens'));
}

exports.default = gulp.parallel(compileSass, comprimirimg);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compileSass));
}


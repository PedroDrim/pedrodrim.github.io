var gulp = require("gulp");
var del = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require("gulp-uglify");

gulp.task("compile-jsx", function () {
    return browserify({ entries: 'src/view/app.jsx', extensions: ['.jsx'], debug: true })
        .transform("babelify",{presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("src/public/scripts"));
});

gulp.task("clean-modules", function () {
    return del("node_modules");
});

gulp.task("default", ["compile-jsx"]);

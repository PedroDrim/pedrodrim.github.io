var gulp = require("gulp");
var del = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require("gulp-uglify");

gulp.task("compile-app-jsx", function () {
    return browserify({ entries: 'src/view/app.jsx', extensions: ['.jsx'], debug: true })
        .transform("babelify",{presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle-app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("src/public/scripts"));
});

gulp.task("compile-footer-jsx", function () {
    return browserify({ entries: 'src/view/footer.jsx', extensions: ['.jsx'], debug: true })
        .transform("babelify",{presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle-footer.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("src/public/scripts"));
});

gulp.task("clean-modules", function () {
    return del("node_modules");
});

gulp.task("default", ["compile-app-jsx", "compile-footer-jsx"]);

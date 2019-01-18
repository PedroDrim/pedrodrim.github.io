var gulp = require("gulp");
var del = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require("gulp-uglify");

const  compile_app_jsx = () => {
    return browserify({ entries: 'src/view/app.jsx', extensions: ['.jsx'], debug: true })
        .transform("babelify",{presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle-app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("src/public/scripts"));
}

const compile_footer_jsx = () => {
    return browserify({ entries: 'src/view/footer.jsx', extensions: ['.jsx'], debug: true })
        .transform("babelify",{presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle-footer.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("src/public/scripts"));
}

const clcean_modules = () => {
    return del("node_modules");
}

const compile = gulp.series(compile_app_jsx, compile_footer_jsx)
compile.description = 'Compilando arquivos.'

gulp.task("default", compile)

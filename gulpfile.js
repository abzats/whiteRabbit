(function () {
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');
    var autoprefixer = require('gulp-autoprefixer');
    var cssmin = require('gulp-cssmin');
    var chmod = require('gulp-chmod');
    var sourcemaps = require('gulp-sourcemaps');
    var runSequence = require('run-sequence');
    var expect = require('gulp-expect-file');
    var del = require('del');

    // Clean
    gulp.task('clean-css', function () {
        return del('web/css/**/*.css');
    });

    gulp.task('clean-js', function () {
        var jsfiles = [
            'web/js/*.js',
            'web/js/**/*.js',
        ];
        return del(jsfiles);
    });


    // SASS -> CSS
    gulp.task('sass', function () {
        var files = [
            'web-src/sass/main.scss'
        ];

        return gulp.src(files)
            .pipe(sourcemaps.init())
            .pipe(expect(files))
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 6 versions'],
            }))
            .pipe(cssmin())
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('web/css'));

    });

    // Scripts
    // Node libs
    gulp.task('vendors', function () {
        var nodeFiles = [
            'node_modules/jquery/dist/jquery.min.js',
            'web-src/lib/*/*.js',
        ];
        return gulp.src(nodeFiles)
            .pipe(expect(nodeFiles))
            .pipe(concat('vendors.js'))
            .pipe(gulp.dest('web/js'));
    });

    // ie9 libs
    gulp.task('ie9', function () {
        var nodeFiles = [
            'node_modules/lt-ie-9/lt-ie-9.js',
        ];
        return gulp.src(nodeFiles)
            .pipe(expect(nodeFiles))
            .pipe(concat('ie9.min.js'))
            .pipe(gulp.dest('web/js'));
    });

    // inHouseFiles
    gulp.task('scripts', function () {
        // Files
        var jsInHouseFiles = [
            'web-src/js/*.js',
            'web-src/js/**/*.js',
        ];

        return gulp.src(jsInHouseFiles)
            .pipe(expect(jsInHouseFiles))
            .pipe(concat('main.js'))
            .pipe(gulp.dest('web/js'));
    });

    // Images
    gulp.task('gif', function () {
        return gulp.src('web-src/img/**/*.gif')
            .pipe(chmod(0o755))
            .pipe(gulp.dest('web/img'));
    });

    gulp.task('png', function () {
        return gulp.src('web-src/img/**/*.png')
            .pipe(chmod(0o755))
            .pipe(gulp.dest('web/img'));
    });

    gulp.task('jpg', function () {
        return gulp.src(['web-src/img/**/*.jpg', 'web-src/img/**/*.jpeg'])
            .pipe(chmod(0o755))
            .pipe(gulp.dest('web/img'));
    });

    gulp.task('svg', function () {
        return gulp.src('web-src/img/**/*.svg')
            .pipe(gulp.dest('web/img'));
    });

    gulp.task('images', ['jpg', 'gif', 'png', 'svg']);


    // Watch task
    gulp.task('watch', function () {
        isWatching = true;
        gulp.watch(['web-src/sass/base/*.scss'], ['sass']);
        gulp.watch(['web-src/sass/components/*.scss'], ['sass']);
        gulp.watch(['web-src/sass/**/*.scss'], ['sass']);
        gulp.watch(['web-src/sass/*.scss'], ['sass']);
        gulp.watch('web-src/js/*.js', ['scripts']);
        gulp.watch('web-src/js/*/*.js', ['scripts']);
    });

    // Default task : we update the html, css, the images, the scripts
    gulp.task('default', function () {
            runSequence(
                ['clean-js', 'clean-css', 'images', 'sass', 'vendors', 'ie9', 'scripts']
            );
        }
    );

}());
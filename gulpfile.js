var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

gulp.task('sass', function () {
  gulp.src( 'assets/scss/styles.scss' )
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(error){
      console.log(error);
    }))
    .pipe(sourcemaps.write('map'))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./assets/dist/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('map'))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./assets/dist/css'));
});

gulp.task('js', function(){
  return gulp.src([
      'assets/js/*/*.js',
      'assets/js/scripts.js'
    ])
    .pipe(babel())
    .pipe(concat('scripts.js'))
    .pipe(minify({
       ext:{
        src:'-debug.js',
        min:'.js'
      },
    }).on('error', function(error){
      console.log(error);
    }))
    .pipe(gulp.dest('./assets/dist/js/'));
});

// Watch Our Files
gulp.task('watch', function() {
  gulp.watch([
    'assets/scss/*.scss',
    'assets/scss/*/*.scss',
    'assets/js/*/*.js',
    'assets/js/*.js',
  ], ['sass', 'js']);
});

// Default
gulp.task('default', ['sass', 'js', 'watch']);

const gulp = require('gulp'),
      babel = require('gulp-babel'),
      babelify = require('babelify'),
      del = require('del'),
      runSequence = require('run-sequence'),
      concat = require('gulp-concat'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      sass = require('gulp-sass'),
      bourbon = require('bourbon'),
      browserSync = require('browser-sync').create();

const Directories = {
  Source: 'src',
  Build: 'www',
};

const Sources = {
  Scripts: `${Directories.Source}/js/**/*.js`,
  Styles: `${Directories.Source}/styles/**/*.scss`,
  Html: `${Directories.Source}/html/**/*.html`,
};

const bundler = browserify(`${Directories.Source}/js/app.js`, {debug: true})
  .transform(babelify, {presets: ["es2015"]});

gulp.task('browserify-js', function() {
  const destination = `${Directories.Build}/js`;

  return bundler.bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(destination));
});

gulp.task('copy-html', () => {
  return gulp.src(Sources.Html)
    .pipe(gulp.dest(Directories.Build));
});

gulp.task('sass', function () {
  const destination = `${Directories.Build}/styles`;

  return gulp.src(Sources.Styles)
    .pipe(sass({includePaths: bourbon.includePaths}).on('error', sass.logError))
    .pipe(gulp.dest(destination))
    .pipe(browserSync.stream());
});

gulp.task('clean', function() {
  return del([Directories.Build]);
});

gulp.task('build', function(callback) {
  runSequence('clean', ['browserify-js', 'sass', 'copy-html'], callback);
});

gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: Directories.Build,
      routes: {
        '/bower_components': 'bower_components'
      }
    },
    open: false
  });

  gulp.watch(Sources.Styles, ['sass']);
  gulp.watch(Sources.Scripts, ['browserify-js']);
  gulp.watch(Sources.Html, ['copy-html']);
  gulp.watch([
    `${Directories.Build}/**/*.html`,
    `${Directories.Build}/**/*.js`
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

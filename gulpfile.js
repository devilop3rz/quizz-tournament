var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');


// CLIENT

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js'
] 

gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map( function (file) {return path.resolve('node_modules', file)})
    
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
    var copyIndex = gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyIndex];
});

gulp.task('buildapp', function(){
    var tsProject = ts.createProject('app/tsconfig.json');
   // var tsResult = gulp.src('app/**/*.ts')
    //    .pipe(sourcemaps.init())
      //  .pipe(ts(tsProject))

        var tsResult = gulp.src([
      "node_modules/angular2/bundles/typings/angular2/angular2.d.ts",
      "node_modules/angular2/bundles/typings/angular2/http.d.ts",
      "node_modules/angular2/bundles/typings/angular2/router.d.ts",
      "node_modules/@reactivex/rxjs/dist/es6/Rx.d.ts",
      "app/**/*.ts"
    ])
    .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());

    return tsResult.js
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback){
    runSequence('clean', 'build:server', 'build:index', 'build:app', callback);
});


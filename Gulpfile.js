const gulp = require('gulp');
const zip = require('gulp-zip');
const aws_lambda = require('gulp-aws-lambda');

const AWS = require('./aws');

gulp.task('deploy',function(){
  gulp.src(['index.js', 'package.json'])
      .pipe(zip('archive.zip'))
      .pipe(aws_lambda(AWS.credentials, AWS.lambda_params));
});
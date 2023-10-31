const gulp = require ("gulp");

const {series, src, dest, parallel, watch} = require('gulp');

const html_task = () => src('app/*.html')
  .pipe(dest('dist'))


exports.default = html_task;

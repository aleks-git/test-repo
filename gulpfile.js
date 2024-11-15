const gulp = require('gulp');

function test2(cb) {
    cb();
}

function test1(cb) {
    cb();
}

exports.build = gulp.series(test1, test2);
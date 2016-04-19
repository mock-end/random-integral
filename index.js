'use strict';

var clamp     = require('clamp');
var toInteger = require('to-integer');


var MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;


function fixme(val) {

  if (typeof val !== 'number') {
    val = toInteger(val);
  }

  val = isNaN(val) || !isFinite(val) ? 0 : val;

  return clamp(val, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER);
}


module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {

    min = MIN_SAFE_INTEGER;
    max = MAX_SAFE_INTEGER;

  } else if (length === 1) {

    max = fixme(min);
    min = MIN_SAFE_INTEGER;

  } else {

    min = fixme(min);
    max = fixme(max);

  }

  // swap to variables
  // ref: http://stackoverflow.com/a/16201688
  if (min > max) {
    min = min ^ max;
    max = min ^ max;
    min = min ^ max;
  }

  return Math.round(Math.random() * (max - min)) + min;
};

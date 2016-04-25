'use strict';

var clamp        = require('clamp');
var toInteger    = require('to-integer');
var MAX_SAFE_INT = require('max-safe-int');
var MIN_SAFE_INT = -MAX_SAFE_INT;

function fixme(val, min) {

  if (typeof val !== 'number') {
    val = toInteger(val);
  }

  if (isNaN(val) || !isFinite(val)) {
    val = min ? MIN_SAFE_INT : MAX_SAFE_INT;
  }

  return clamp(val, MIN_SAFE_INT, MAX_SAFE_INT);
}

module.exports = function (options) {

  if (options) {
    options.min = fixme(options.min, true);
    options.max = fixme(options.max, false);
  } else {
    options = {
      min: MIN_SAFE_INT,
      max: MAX_SAFE_INT
    };
  }

  var min = options.min;
  var max = options.max;

  // swap to variables
  // ref: http://stackoverflow.com/a/16201688
  if (min > max) {
    min = min ^ max;
    max = min ^ max;
    min = min ^ max;
  }

  return Math.round(Math.random() * (max - min)) + min;
};

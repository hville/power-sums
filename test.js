'use strict'
var test = require('tt')
var powerSums = require('./index.js')

test('single sum', function (t) {
  t.comment('normal use')
  t.equal(powerSums([-1, -2, -3], 2), 14, 'sum square valid')
  t.equal(powerSums([-1, -2, -3], 3), -36, 'sum cube valid')
  t.equal(powerSums([0.5, 0.5, 0.5], -1), 6, 'negative exponents are valid')

  t.comment('edge cases')
  t.equal(powerSums([], 3), 0, 'empty samples have a sum of 0')
  t.equal(powerSums([1, 2, 3]), 6, 'handles missing exponent - default exponent is 1')
  t.ok(isNaN(powerSums([null, 'a', undefined], 1)), 'invalid samples should return NaN as sum')

  t.end()
})

test('multiple sums', function (t) {
  t.comment('normal use')
  t.deepEqual(powerSums([-1, -2, -3], Array(2)), [-6, 14], 'sum square valid')
  t.deepEqual(powerSums([-1, -2, -3], Array(3)), [-6, 14, -36], 'sum cubes valid')

  t.comment('edge cases')
  t.deepEqual(powerSums([], Array(2)), [0, 0], 'empty samples have a sum of 0')
  t.deepEqual(powerSums([0, 1, 2], Array(0)), [], 'empty parameter should yield empty results')
  t.ok(isNaN(powerSums([null, 'a', undefined], Array(2))[1]), 'invalid samples should return NaN array')

  t.end()
})

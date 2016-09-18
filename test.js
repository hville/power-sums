'use strict'
var c = require('cotest')
var powerSums = require('./index.js')

c('single sum - normal use', function () {
	c('===', powerSums([-1, -2, -3], 2), 14, 'sum square valid')
	c('===', powerSums([-1, -2, -3], 3), -36, 'sum cube valid')
	c('===', powerSums([0.5, 0.5, 0.5], -1), 6, 'negative exponents are valid')
})
c('single sum - edge cases', function () {
	c('===', powerSums([], 3), 0, 'empty samples have a sum of 0')
	c('===', powerSums([1, 2, 3]), 6, 'handles missing exponent - default exponent is 1')
	c('===', isNaN(powerSums([null, 'a', undefined], 1)), true, 'invalid samples should return NaN as sum')
})
c('multiple sums - normal use', function () {
	c('{==}', powerSums([-1, -2, -3], Array(2)), [-6, 14], 'sum square valid')
	c('{==}', powerSums([-1, -2, -3], Array(3)), [-6, 14, -36], 'sum cubes valid')
})
c('multiple sums - edge cases', function () {
	c('{==}', powerSums([], Array(2)), [0, 0], 'empty samples have a sum of 0')
	c('{==}', powerSums([0, 1, 2], Array(0)), [], 'empty parameter should yield empty results')
	c('===', isNaN(powerSums([null, 'a', undefined], Array(2))[1]), true, 'invalid samples should return NaN array')
})

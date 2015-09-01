'use strict'

/**
 * sum of all array values
 * @private
 * @param   {Array}  arr Samples
 * @returns {Number} sum
 */
function sum(arr) {
	for (var i=0, t=0; i<arr.length; i++) t+=arr[i]
	return t
}

/**
 * sum of all array squares
 * @private
 * @param   {Array}  arr Samples
 * @returns {Number} sum
 */
function sum2(arr) {
	for (var i=0, t=0; i<arr.length; i++) t+=arr[i]*arr[i]
	return t
}

/**
 * sum of all array values raised to a given exponent
 * @private
 * @param   {Array}  arr Samples
 * @param   {Number} exp exponent
 * @returns {Number} sum
 */
function sumN(arr, exp) {
	if (exp === 1) return sum(arr)
	if (exp === 2) return sum2(arr)
	for (var i=0, t=0; i<arr.length; i++) t += Math.pow(arr[i], exp)
	return t
}

/**
 * sums of array value raised to exponents 1 and 2
 * @private
 * @param   {Array} arr Samples
 * @param   {Array} tgt resultArray
 * @returns {Array} resultArray
 */
function sums2(arr, tgt) {
	for (var i=0, t1=0, t2=0; i<arr.length; i++) {
		t1 += arr[i]
		t2 += arr[i] * arr[i]
	}
	tgt[0] = t1
	tgt[1] = t2
	return tgt
}

/**
 * sums of array values raised to increasing exponents
 * @private
 * @param   {Array} arr Samples
 * @param   {Array} tgt resultArray
 * @returns {Array} resultArray
 */
function sumsN(arr, tgt) {
	// faster functions for the simple cases
	if (tgt.length === 0) return tgt
	if (tgt.length === 1) return tgt[0] = sum(arr), tgt
	if (tgt.length === 2) return sums2(arr, tgt)

	//init with first sample
	var smp = arr[0]
	var pro = smp
	tgt[0] = pro
	for (var j=1; j<tgt.length; j++) {
		pro *= smp
		tgt[j] = pro
	}
	//add the rest
	for (var i=1; i<arr.length; i++) {
		smp = arr[i]
		pro = smp
		tgt[0] += pro
		for (j=1; j<tgt.length; j++) {
			pro *= smp
			tgt[j] += pro
		}
	}
	return tgt
}



/**
 * sum or sums of values raised to one or more exponent
 * @param   {Array}  arr Samples
 * @param   {Number|Array} [N=1]   exponent or target array with length of max exponent
 * @returns {Number} sum
 */
function sumPower(arr, N) {

	// if N is a number, return a single sum x^N
	if (typeof N === 'number') return sumN(arr, N)

	// is N is an array, return an array of sums [X^1, x^2, ..., x^length]
	if (Array.isArray(N)) return sumsN(arr, N)

	// default N=1
	return sum(arr)

}


module.exports = sumPower

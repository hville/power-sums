module.exports = sumPower

/**
 * sum or sums of values raised to one or more exponent
 * @param	 {Array}	arr Samples
 * @param	 {Number|Array} [N=1]	 exponent or target array with length of max exponent
 * @returns {Number} sum
 */
function sumPower (arr, pow) {
	if (pow === undefined) return sum1(arr)
	if (pow.constructor === Number) return sumN(arr, pow)
	if (Array.isArray(pow)) {
		for (var i = 0; i < pow.length; ++i) pow[i] = sumN(arr, i+1)
		return pow
	}
	throw Error('sumPower called with invalid arguments types')
}
/**
 * sum of all array values with some error correction (modified Kahan sum)
 * @param	 {Array} arr Samples
 * @returns {Number} ∑(a[i])
 */
function sum1(arr) {
	for (var i=0, sum=0, err=0, tot=0; i<arr.length; ++i) {
		sum += arr[i]
		err += (sum-tot) - arr[i]
		tot = sum
	}
	return sum - err
}
/**
 * sum of all array values^2 with some error correction (modified Kahan sum)
 * @param	 {Array} arr Samples
 * @returns {Number} ∑(a[i]^2)
 */
function sum2(arr) {
	for (var i=0, sum=0, err=0, tot=0; i<arr.length; ++i) {
		var val = arr[i]*arr[i]
		sum += val
		err += (sum-tot) - val
		tot = sum
	}
	return sum - err
}
/**
 * sum of all array values^n with some error correction (modified Kahan sum)
 * @param	 {Array} arr Samples
 *  @param	 {Array} pow Power
 * @returns {Number} ∑(a[i]^n)
 */
function sumN(arr, pow) {
	if (pow === 1) return sum1(arr)
	if (pow === 2) return sum2(arr)
	for (var i=0, sum=0, err=0, tot=0; i<arr.length; ++i) {
		var val = Math.pow(arr[i], pow)
		sum += val
		err += (sum-tot) - val
		tot = sum
	}
	return sum - err
}

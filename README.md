<!-- markdownlint-disable MD004 MD007 MD010 MD041 MD022 MD024 MD032 MD036 -->
# power-sums

• [Introduction](#Introduction) • [Limitations](#Limitations) • [Usage](#Usage)  • [Test](#test) • [License](#License) •

## Introduction

If a sample array and an exponent are provided, returns the sum of array values raised to one exponent

*f([A],b) = ∑ai^b*

If a sample array and an array of length N are provided, returns the same array filled with power sums for 1 to N.

*f([A], [B]) = [ ∑ai, ∑ai^2, ∑ai^3, ...]*

## Limitations

While [Kahan summation](https://en.wikipedia.org/wiki/Kahan_summation_algorithm)
is used internally to reduce floating point errors,
[care must be taken](https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance)
if different sums are to be substracted for variance or skew calculations.

For large data sets that are far from the origin (*ie 0 would fall outside the range of values*) the significant order of magnitude between terms will cause significant errors during substractions.

## Usage

### single power

With a single exponent, `powerSums(samples, N)` returns a single sum of values raised to exponent *N*.

```javascript
powerSums = require('power-sums')
powerSums([0, 1, 2], 2)  // return 0^2 + 1^2 + 2^2 = 5
powerSums([1/4, 1/2, 1], -1)  // return 4 + 2 + 1 = 5
```

The internal methods for the most common cases are also exposed:

```javascript
powerSums = require('power-sums')
powerSums[1]([0, 1, 2]) // direct normal sum, with floating point error correction
powerSums[2]([1/4, 1/2, 1])  // direct normal sum-square, with floating point error correction
```

### multiple powers

The actual use case is to obtain multiple *nth order* sums in a single pass for calculating raw and central moments.
The maximum order is the length of the parameter array and the results will be inserted in this Array before it is returned.

```javascript
powerSums = require('power-sums')
powerSums([0,1,2], Array(4))  // returns [∑xi, ∑xi^2, ∑xi^3, ∑xi^4] = [3, 5, 9, 17]
```

The array returned is the same provided.

If the same result container is used multiple times, the content will be overwritten.

```javascript
powerSums = require('power-sums')
var sums = [9,9,9]
powerSums([2,2], sums)  // sums = [4, 8, 16]
```

### edge cases

```javascript
powerSums = require('power-sums')
powerSums([], Array(3))  // returns [0, 0, 0]
powerSums([0,1,2])  // returns the simple sum of 5
powerSums([0,1,2], [])  // returns the empty set []
```

## Test

In node, from the root folder type `npm test`.
(test is not included with the package and must be obtained from the git repository)

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

# power-sums

1. [Introduction](#introduction)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Test](#test)
1. [License](#license)



## Introduction
If a sample array and an exponent are provided, returns the sum of array values raised to one exponent

*i.e.  f([A],b) = ∑ai^b*

If a sample array and an array of length N are provided, returns the array filled with power sums for 1 to N.

*i.e.  f([A], [B]) = [ ∑ai, ∑ai^2, ∑ai^3, ...]*



## Installation

In node, from the root of your project folder type `npm install --save power-sums`.



## Usage
### single exponent

With a single exponent, `powerSums(samples, N)` returns a single sum of values raised to exponent *N*.
```
	powerSums = require('power-sums')
	powerSums([0, 1, 2], 2)	// return 0^2 + 1^2 + 2^2 = 5
	powerSums([1/4, 1/2, 1], -1)	// return 4 + 2 + 1 = 5
```

## multiple exponents

The actual use case is to obtain multiple *nth order* sums in a single pass for calculating raw and central moments.
The maximum order is the length of the parameter array and the results will be inserted in this Array before it is returned.
```
	powerSums = require('power-sums')
	powerSums([0,1,2], Array(4))	// returns [∑xi, ∑xi^2, ∑xi^3, ∑xi^4] = [3, 5, 9, 17]
```
The array return is the same provided.

If the same result container is used multiple times, the content will be overwritten.
```
	powerSums = require('power-sums')
	var sums = [9,9,9]
	powerSums([2,2], sums)	// sums = [4, 8, 16]
```

### edge cases
```
	powerSums = require('power-sums')
	powerSums([], Array(3))	// returns [0, 0, 0]
	powerSums([0,1,2])	// returns the simple sum of 5
	powerSums([0,1,2], [])	// returns the empty set []
```


## Test

In node, from the root folder type `npm test`.


## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT)

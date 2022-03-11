console.log('ARRAYS')
console.log('======')

// ************************ slice | Returns an array
// Does NOT mutate the original array.

array = [0, 1, 2, 3, 4];
console.log('array before slice : ', array)
arrB = array.slice(2)
console.log('original array : ', array)
console.log('returned from array.slice(2)', arrB)

console.log('==============================')

// *********************** includes | Returns Boolean
arrA = [1, 2, 'bannana', 4, 5]
console.log('includes:', arrA.includes(2));

console.log('==============================')


// *********************** split [ takes STR returns ARR ]
console.log('split (on str)')
str = "a, b, c";
console.log(str.split(", "));

// OUTPUT: ['a', 'b', 'c']
console.log('==============================')


// ************************ join [ takes ARR returns STR ]
console.log('join')

arrC = [1, 2, 3]
finalStr = arrC.join(',');
console.log('after join:', finalStr)
console.log('==============================')

// ************************ shift - takes from the beginning

arrD = [0, 1, 2, 3]
console.log('ORIGINAL arrD', arrD)
console.log('arrE = arrD.shift();')
arrE = arrD.shift();

console.log('arrE', arrE)
console.log('arrD after shift', arrD)


// push O(1)
// pop O(1)
// unshift (N)
// shift (N)

// concat O(N)
// slice O(N)
// splice O(N)
// sort O9N * Log N)
// forEach/mao/filter/reduce... O(N)

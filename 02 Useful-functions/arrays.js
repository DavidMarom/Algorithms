console.log('ARRAYS')
console.log('======')


arrA = ['a', 'a']


console.log('arrA before push: ', arrA)
returnedFromPush = arrA.push('##')

console.log('arrA after push: ', arrA)
console.log('Returned from push: ', returnedFromPush)

console.log('=======================================')

returnedFromPop = arrA.pop();
console.log('arrA after pop:', arrA);
console.log('Returned from pop:', returnedFromPop)

console.log('=======================================')
console.log('=======================================')



returnedFromUnshift = arrA.unshift('##');
console.log('arrA after unshift:', arrA);
console.log('Returned from unshift:', returnedFromUnshift)

console.log('=======================================')


console.log('arrA before shift: ', arrA)
returnedFromShift = arrA.shift()

console.log('arrA after shift: ', arrA)
console.log('Returned from shift: ', returnedFromShift)



// push O(1) returns: number - the new length
// pop O(1) returns: the element that has been poped (any type)
// unshift (N) returns: number - the new length
// shift (N) returns: the element that has been poped (any type)

// concat O(N)
// slice O(N)
// splice O(N)
// sort O9N * Log N)
// forEach/mao/filter/reduce... O(N)

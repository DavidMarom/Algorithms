const countDown = (n) => {
    if (n <= 0) {
        console.log('Done');
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}
const power = (n, e) => (e === 0 ? 1 : n * power(n, e - 1))
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
// product of array: the multiplication of all the items in the array
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
const recursiveRange = (n) => (n === 0 ? 0 : n + recursiveRange(n - 1))
const fib = (n) => (n < 3 ? 1 : fib(n - 1) + fib(n - 2))

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}




console.log('Count Down:');
countDown(5);
console.log('-----------');

console.log('3 power 5:', power(3, 5));
console.log('-----------');

console.log('Factorial 5:', factorial(5));
console.log('-----------');

console.log('product of array [1,2,3,4,10]', productOfArray([1, 2, 3, 4, 10]))
console.log('-----------');

console.log('recursiveRange 4', recursiveRange(4))
console.log('-----------');

console.log('fib', fib(6))
console.log('-----------');

console.log('Reverse', reverse('abcd'))
console.log('-----------');


const countDown = (n) => {
    if (n <= 0) {
        console.log('Done');
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}

const factorial = (n) => {
    if (n === 1) return 1
    return n * factorial(n - 1);
}
const power = (n, e) => {
    if (e === 1) return n;
    return n * power(n, e - 1)
}



console.log('Count Down:');
countDown(5);
console.log('-----------');

console.log('Fatorial 4:', factorial(4));
console.log('-----------');

console.log('3 power 5:', power(3, 5));
console.log('-----------');


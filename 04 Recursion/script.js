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


console.log('Count Down:');
countDown(5);
console.log('-----------');

console.log('Fatorial 4:', factorial(4));

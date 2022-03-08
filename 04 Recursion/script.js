const countDown = (n) => {
    if (n <= 0) {
        console.log('Done');
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}

countDown(5);
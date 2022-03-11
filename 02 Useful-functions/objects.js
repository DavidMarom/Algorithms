let Obj = {
    a: 1,
    b: 'bbb',
    c: 3
}

// keys | Returns an array | O(n)
console.log('keys', Object.keys(Obj));

// values | Returns an array | O(n)
console.log('values', Object.values(Obj));

// Returns an array of tuples | Converts object to array of tuples | O(n)
console.log('entries', Object.entries(Obj));

// Returns Boolean | O(1)
console.log('hasOwnProperty', Obj.hasOwnProperty('c'));
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // PUSH: add item to the end of the list
    push(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    // Removes an item before the tail
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Removes a node from the beginning of the list (after the head)
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // adding a new node to the beginning of the list
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    // Get - get a node at given index
    get(n) {
        if (n < 0 || n >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < n; i++) {
            current = current.next;
        }
        return current
    }

    // Print List
    printList() {
        if (!this.head) {
            console.log('EMPTY');
            return;
        }
        console.log("Printing List, length =", this.length);
        let current = this.head;
        while (current.next) {
            console.log(current.val);
            current = current.next;
        }
        console.log(current.val);

    }



    // End of class 
}

let list = new SinglyLinkedList()
list.push("aaa")
list.push("bbb")
list.push("ccc")
list.push("ddd")

console.log(list.get(0));
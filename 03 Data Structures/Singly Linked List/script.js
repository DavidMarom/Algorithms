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

    // Remove item before the tail
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

    shift() {
        if (!this.tail) return undefined;

        let current = this.head;
        let removedNode = current;

        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedNode;
    }

    printList() {
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
list.push("1")
// list.push("2")

list.printList();
console.log(list.pop());
console.log(list);


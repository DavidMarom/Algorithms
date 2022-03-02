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

    pop() {
        // find the node before the last node
        let current = this.head;
        let removedNode = null;
        while (current.next.next) {
            current = current.next;
        }

        removedNode = current.next;
        this.tail = current;
        current.next = null;
        this.length--;
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
list.push("2")
list.push("3")

list.printList();
console.log(list.pop());
list.printList();


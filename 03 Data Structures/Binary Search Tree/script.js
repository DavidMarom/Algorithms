class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySerachTree {
    constructor() {
        this.root = null;
    }

    // INSERT
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }

                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // FIND
    find(value) {
        if (this.root === null) return false;
        let current = this.root, found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        } //while
        if (!found) return undefined
        return current;
    }

    // BFS - Breadth First Search
    BFD() {
        let data = [], queue = [], node = this.root;
        queue.push(this.root);

        while (queue.length) {
            node = queue.shift()
            data.push(node);
        }
    }


} // end of class


let tree = new BinarySerachTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
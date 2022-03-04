class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        }
}

class BinarySerachTree {
    constructor (){
        this.root = null;
    }
}

let tree = new BinarySerachTree ();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
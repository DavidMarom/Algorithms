<p align="center">
<img src="https://res.cloudinary.com/dojmo7vcc/image/upload/v1646491007/algo2_dhqejg.png" width="800px" alt="Algorithms & Data Structures"></p>

# Algorithms & Data Structures

A reference implementation of core computer science concepts in **JavaScript** - covering data structures, recursion patterns, algorithm challenges, and built-in method complexity analysis.

---

## Table of Contents

- [Data Structures](#data-structures)
  - [Singly Linked List](#singly-linked-list)
  - [Binary Search Tree](#binary-search-tree)
  - [Graph](#graph)
- [Recursion](#recursion)
- [Algorithm Challenges](#algorithm-challenges)
- [Utility Reference](#utility-reference)

---

## Data Structures

### Singly Linked List
`03 Data Structures/Singly Linked List/script.js`

Custom implementation with a `Node` class and a `SinglyLinkedList` class.

| Method | Description | Time Complexity |
|---|---|---|
| `push(val)` | Append a node to the tail | O(1) |
| `pop()` | Remove and return the tail node | O(n) |
| `shift()` | Remove and return the head node | O(1) |
| `unshift(val)` | Prepend a node at the head | O(1) |
| `get(index)` | Retrieve a node by index | O(n) |
| `printList()` | Log all node values to the console | O(n) |

---

### Binary Search Tree
`03 Data Structures/Binary Search Tree/script.js`

Custom BST implementation with iterative traversal to avoid call-stack overhead.

| Method | Description | Time Complexity |
|---|---|---|
| `insert(value)` | Insert a value, ignoring duplicates | O(log n) avg |
| `find(value)` | Search for a value; returns the node or `undefined` | O(log n) avg |
| `BFS()` | Breadth-first traversal; returns values level by level | O(n) |

---

### Graph
`03 Data Structures/Graph/script.js`

Undirected graph using an **adjacency list** representation.

| Method | Description |
|---|---|
| `addVertex(vertex)` | Add a new vertex |
| `addEdge(v1, v2)` | Create an undirected edge between two vertices |
| `removeEdge(v1, v2)` | Remove the edge between two vertices |
| `removeVertex(v)` | Remove a vertex and all its associated edges |
| `depthFirstRecursive(start)` | DFS traversal from a given starting vertex |

---

## Recursion
`04 Recursion/script.js`

| Function | Description |
|---|---|
| `countDown(n)` | Print integers from n down to 0 |
| `power(base, exp)` | Compute base raised to an exponent |
| `factorial(n)` | Compute n! |
| `productOfArray(arr)` | Multiply all elements of an array |
| `recursiveRange(n)` | Sum all integers from 0 to n |
| `fib(n)` | Return the nth Fibonacci number |
| `reverse(str)` | Reverse a string |

---

## Algorithm Challenges
`01 Questions/`

| Problem | Description | Approach |
|---|---|---|
| `FindIntersection` | Given two sorted comma-separated number strings, return their common elements | Filter + linear scan - O(n·m) |

---

## Utility Reference
`02 Useful-functions/`

### Array Method Complexity

| Method | Returns | Time Complexity |
|---|---|---|
| `push` | New length | O(1) |
| `pop` | Removed element | O(1) |
| `unshift` | New length | O(n) |
| `shift` | Removed element | O(n) |
| `concat` / `slice` / `splice` | Varies | O(n) |
| `sort` | Sorted array | O(n log n) |
| `forEach` / `map` / `filter` / `reduce` | Varies | O(n) |

### Helper Functions (`misc.js`)

| Function | Description |
|---|---|
| `isLetter(c)` | Returns `true` if the character is a letter |
| `isNum(c)` | Returns `true` if the character is a digit (0–9) |

---

## Language

JavaScript (ES6+) - no dependencies, runs in any modern browser or Node.js environment.

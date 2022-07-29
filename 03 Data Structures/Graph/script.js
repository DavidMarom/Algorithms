class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex(v1) {
        while (this.adjacencyList[v1].length) {
            const adjacentVertex = this.adjacencyList[v1].pop();
            this.removeEdge(v1, adjacentVertex);
        }
        delete this.adjacencyList[v1];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visted[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex]
        })(start)

    }
}
let g = new Graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");

g.addEdge("a", "b");
g.addEdge("a", "c");
console.log(g.adjacencyList)

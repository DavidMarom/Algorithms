// ─── Priority Queue (min-heap) ───────────────────────────────────────────────
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this._bubbleUp();
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this._sinkDown();
        }
        return min;
    }

    _bubbleUp() {
        let idx = this.values.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.values[parentIdx].priority <= this.values[idx].priority) break;
            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
            idx = parentIdx;
        }
    }

    _sinkDown() {
        let idx = 0;
        const length = this.values.length;
        while (true) {
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            let smallest = idx;

            if (left < length && this.values[left].priority < this.values[smallest].priority)
                smallest = left;
            if (right < length && this.values[right].priority < this.values[smallest].priority)
                smallest = right;
            if (smallest === idx) break;

            [this.values[smallest], this.values[idx]] = [this.values[idx], this.values[smallest]];
            idx = smallest;
        }
    }
}

// ─── Weighted Graph ───────────────────────────────────────────────────────────
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    // ─── Dijkstra's Shortest Path ─────────────────────────────────────────────
    // Returns { distance, path } from `start` to `end`.
    // Time: O((V + E) log V)  Space: O(V)
    dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();

        // Initialise distances
        for (const vertex in this.adjacencyList) {
            distances[vertex] = vertex === start ? 0 : Infinity;
            previous[vertex] = null;
            pq.enqueue(vertex, distances[vertex]);
        }

        while (pq.values.length) {
            const { val: current } = pq.dequeue();

            if (current === end) {
                // Reconstruct path
                const path = [];
                let node = end;
                while (node) {
                    path.unshift(node);
                    node = previous[node];
                }
                return { distance: distances[end], path };
            }

            if (distances[current] === Infinity) break;

            for (const neighbor of this.adjacencyList[current]) {
                const candidate = distances[current] + neighbor.weight;
                if (candidate < distances[neighbor.node]) {
                    distances[neighbor.node] = candidate;
                    previous[neighbor.node] = current;
                    pq.enqueue(neighbor.node, candidate);
                }
            }
        }

        return { distance: Infinity, path: [] }; // no path found
    }
}

// ─── Demo ─────────────────────────────────────────────────────────────────────
const graph = new WeightedGraph();

['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => graph.addVertex(v));

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

const result = graph.dijkstra('A', 'E');

console.log('Shortest path A → E');
console.log('Path    :', result.path.join(' → '));   // A → C → D → F → E
console.log('Distance:', result.distance);           // 6

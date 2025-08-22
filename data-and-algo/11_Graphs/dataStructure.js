/**
 * Graphs - How to create graph structures in JS
 */

console.log("=== GRAPH CREATION ===\n");

// 1. Adjacency List (most common)
const graph1 = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};

console.log("Adjacency List:", graph1);

// 2. Adjacency Matrix
const graph2 = [
    [0, 1, 1, 0],  // A connects to B, C
    [1, 0, 0, 1],  // B connects to A, D
    [1, 0, 0, 1],  // C connects to A, D
    [0, 1, 1, 0]   // D connects to B, C
];

console.log("Adjacency Matrix:", graph2);

// 3. Graph Class with adjacency list
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);  // For undirected graph
    }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addEdge("A", "B");

console.log("Graph class:", myGraph.adjacencyList);

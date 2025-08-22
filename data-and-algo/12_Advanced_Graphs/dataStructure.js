/**
 * Advanced Graphs - Specialized graph structures
 */

console.log("=== ADVANCED GRAPH STRUCTURES ===\n");

// 1. Weighted Graph (for shortest path algorithms)
const weightedGraph = {
    'A': [['B', 4], ['C', 2]],
    'B': [['A', 4], ['D', 3]],
    'C': [['A', 2], ['D', 1]],
    'D': [['B', 3], ['C', 1]]
};

console.log("Weighted graph (adjacency list with weights):", weightedGraph);

// 2. Directed Graph (for topological sort)
const directedGraph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': []
};

console.log("Directed graph:", directedGraph);

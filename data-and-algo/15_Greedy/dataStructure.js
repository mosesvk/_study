/**
 * Greedy - How to set up greedy algorithm structures
 */

console.log("=== GREEDY ALGORITHM SETUP ===\n");

// 1. Array sorting for greedy choices
const intervals = [[1,3], [2,6], [8,10], [15,18]];
console.log("Original intervals:", intervals);

// Sort by start time (common greedy approach)
const sortedByStart = [...intervals].sort((a, b) => a[0] - b[0]);
console.log("Sorted by start:", sortedByStart);

// Sort by end time (for interval scheduling)
const sortedByEnd = [...intervals].sort((a, b) => a[1] - b[1]);
console.log("Sorted by end:", sortedByEnd);

// 2. Priority queue simulation with array sort
const tasks = [{profit: 20, deadline: 1}, {profit: 15, deadline: 3}, {profit: 10, deadline: 2}];
const sortedByProfit = [...tasks].sort((a, b) => b.profit - a.profit);
console.log("Tasks sorted by profit (desc):", sortedByProfit);

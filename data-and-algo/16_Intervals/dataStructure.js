/**
 * Intervals - How to work with interval data structures
 */

console.log("=== INTERVAL STRUCTURES ===\n");

// 1. Basic interval representation
const interval1 = [1, 3];  // Simple array [start, end]
console.log("Simple interval:", interval1);

// 2. Array of intervals
const intervals = [[1,3], [2,6], [8,10], [15,18]];
console.log("Array of intervals:", intervals);

// 3. Interval class (optional, for clarity)
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    
    toString() {
        return `[${this.start}, ${this.end}]`;
    }
}

const intervalObj = new Interval(1, 5);
console.log("Interval object:", intervalObj.toString());

// 4. Common interval operations setup
const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
console.log("Sorted intervals by start:", sortedIntervals);

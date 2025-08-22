/**
 * Math & Geometry - Basic math structures and operations
 */

console.log("=== MATH & GEOMETRY SETUP ===\n");

// 1. 2D Matrix for image/grid problems
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Matrix:", matrix);

// 2. Coordinate/Point representation
const point = [x, y] = [3, 4];
console.log("Point (x, y):", point);

// Alternative point as object
const pointObj = {x: 3, y: 4};
console.log("Point object:", pointObj);

// 3. Common math operations
console.log("Math operations:");
console.log("Absolute value:", Math.abs(-5));
console.log("Min/Max:", Math.min(1, 5), Math.max(1, 5));
console.log("Floor/Ceil:", Math.floor(3.7), Math.ceil(3.2));

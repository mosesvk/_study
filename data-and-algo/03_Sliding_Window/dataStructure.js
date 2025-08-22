/**
 * Sliding Window - How to initialize sliding window
 */

console.log("=== SLIDING WINDOW INITIALIZATION ===\n");

// 1. Fixed Size Window
const arr = [1, 2, 3, 4, 5, 6];
const windowSize = 3;
let windowStart = 0;

console.log("Array:", arr);
console.log("Fixed window size:", windowSize);
console.log("Window start at index:", windowStart);
console.log("Current window:", arr.slice(windowStart, windowStart + windowSize));

// 2. Variable Size Window  
let left = 0;
let right = 0;

console.log("\nVariable size window:");
console.log("Left pointer:", left);
console.log("Right pointer:", right);
console.log("Window expands by moving right, shrinks by moving left");
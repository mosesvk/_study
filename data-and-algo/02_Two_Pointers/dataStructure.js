/**
 * Two Pointers - How to initialize two pointers
 */

console.log("=== TWO POINTERS INITIALIZATION ===\n");

// 1. Opposite Ends Pattern (for palindromes, reversing)
const arr = [1, 2, 3, 4, 5];
let left = 0;
let right = arr.length - 1;

console.log("Array:", arr);
console.log("Left pointer at index:", left, "value:", arr[left]);
console.log("Right pointer at index:", right, "value:", arr[right]);

// 2. Same Direction Pattern (fast & slow)
let slow = 0;
let fast = 0;

console.log("\nFast & Slow pointers:");
console.log("Slow pointer at index:", slow);
console.log("Fast pointer at index:", fast);
console.log("Typical usage: slow moves 1 step, fast moves 2 steps");
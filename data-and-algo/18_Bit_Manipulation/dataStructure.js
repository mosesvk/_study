/**
 * Bit Manipulation - Basic bit operations in JS
 */

console.log("=== BIT MANIPULATION BASICS ===\n");

// 1. Basic bit operations
const a = 5;  // 101 in binary
const b = 3;  // 011 in binary

console.log("Numbers:", a, "and", b);
console.log("AND (&):", a & b);     // 001 = 1
console.log("OR (|):", a | b);      // 111 = 7
console.log("XOR (^):", a ^ b);     // 110 = 6
console.log("NOT (~):", ~a);        // Bitwise NOT
console.log("Left shift (<<):", a << 1);   // 1010 = 10
console.log("Right shift (>>):", a >> 1);  // 10 = 2

// 2. Common bit manipulation patterns
console.log("\nCommon patterns:");
console.log("Check if bit i is set:", (a & (1 << 2)) !== 0);  // Check bit 2
console.log("Set bit i:", a | (1 << 1));    // Set bit 1
console.log("Clear bit i:", a & ~(1 << 2)); // Clear bit 2
console.log("Toggle bit i:", a ^ (1 << 1)); // Toggle bit 1

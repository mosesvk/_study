/**
 * 2D Dynamic Programming - How to set up 2D DP arrays
 */

console.log("=== 2D DP SETUP ===\n");

// 1. Basic 2D DP array
const m = 3, n = 4;
const dp = Array.from({length: m}, () => Array(n).fill(0));
console.log("2D DP array (3x4):", dp);

// 2. 2D DP with different initialization
const dp2 = Array.from({length: m + 1}, () => Array(n + 1).fill(1));
console.log("2D DP with 1s:", dp2);

// 3. String DP (for problems like Longest Common Subsequence)
const str1 = "abc", str2 = "def";
const stringDP = Array.from({length: str1.length + 1}, () => 
    Array(str2.length + 1).fill(0)
);
console.log("String DP array:", stringDP);

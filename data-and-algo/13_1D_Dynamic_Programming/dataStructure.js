/**
 * 1D Dynamic Programming - How to set up DP arrays
 */

console.log("=== 1D DP SETUP ===\n");

// 1. Basic DP array initialization
const n = 5;
const dp = new Array(n + 1).fill(0);  // DP array for problems like Fibonacci
console.log("DP array initialized:", dp);

// 2. DP with different initial values
const dp2 = new Array(n + 1).fill(-1);  // For memoization
console.log("DP for memoization:", dp2);

// 3. Boolean DP array
const dpBoolean = new Array(n + 1).fill(false);  // For problems like "Can we reach target?"
console.log("Boolean DP array:", dpBoolean);

// 4. DP with custom initialization (example: coin change)
const amount = 11;
const dpCoin = new Array(amount + 1).fill(Infinity);
dpCoin[0] = 0;  // Base case: 0 coins needed for amount 0
console.log("Coin change DP:", dpCoin);

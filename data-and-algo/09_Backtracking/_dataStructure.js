/**
 * Backtracking - How to set up backtracking structure
 */

console.log("=== BACKTRACKING SETUP ===\n");

// 1. Basic backtracking template
function backtrack(path, options) {
    // Base case
    if (isComplete(path)) {
        console.log("Found solution:", path);
        return;
    }
    
    // Try each option
    for (let option of options) {
        if (isValid(path, option)) {
            path.push(option);        // Choose
            backtrack(path, getNextOptions(options, option));  // Explore
            path.pop();               // Unchoose (backtrack)
        }
    }
}

// 2. Simple example: generating subsets
function generateSubsets(nums) {
    const result = [];
    const path = [];
    
    function backtrackSubsets(start) {
        result.push([...path]);  // Add current subset
        
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);      // Choose
            backtrackSubsets(i + 1); // Explore
            path.pop();              // Unchoose
        }
    }
    
    backtrackSubsets(0);
    return result;
}

console.log("Subsets of [1,2,3]:");
console.log(generateSubsets([1, 2, 3]));

// Helper functions for template (examples)
function isComplete(path) { return false; }  // Define completion condition
function isValid(path, option) { return true; }  // Define validity check
function getNextOptions(options, chosen) { return options; }  // Update options

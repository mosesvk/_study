# Contains Duplicate

## Problem Statement
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

**Example 1:**
```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**
```
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Solution Approaches

### Method 1: Brute Force (Nested Loops)

Check every pair of elements to see if any two are equal.

#### Visual Explanation

```
Array: [1, 2, 3, 1]
Indices: 0  1  2  3

Comparisons:
i=0, j=1: nums[0]=1 vs nums[1]=2 → different
i=0, j=2: nums[0]=1 vs nums[2]=3 → different  
i=0, j=3: nums[0]=1 vs nums[3]=1 → MATCH! ✓

Result: true (found duplicate)

Visual Matrix:
    0  1  2  3
0   -  ≠  ≠  =  ← Found match!
1      -  ≠  ≠
2         -  ≠
3            -
```

#### Implementation

```javascript
/**
 * Brute force approach - check all pairs
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums - Input array
 * @return {boolean} - True if duplicate exists
 */
function containsDuplicateBruteForce(nums) {
    const n = nums.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    
    return false;
}
```

### Method 2: Sorting Approach

Sort the array first, then check adjacent elements.

#### Visual Explanation

```
Original: [1, 2, 3, 1]
After Sort: [1, 1, 2, 3]
             ↑  ↑
           Adjacent duplicates!

Step-by-step:
1. Sort: [1, 2, 3, 1] → [1, 1, 2, 3]
2. Check adjacent pairs:
   - nums[0]=1, nums[1]=1 → MATCH! ✓

Result: true

For no duplicates:
Original: [1, 2, 3, 4] 
After Sort: [1, 2, 3, 4]
Check: 1≠2, 2≠3, 3≠4 → No duplicates
Result: false
```

#### Implementation

```javascript
/**
 * Sorting approach - sort then check adjacent elements
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) or O(n) depending on sort algorithm
 * 
 * @param {number[]} nums - Input array
 * @return {boolean} - True if duplicate exists
 */
function containsDuplicateSorting(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    
    return false;
}
```

### Method 3: Hash Set Approach (Optimal)

Use a Set to track seen elements as we iterate through the array.

#### Visual Explanation

```
Array: [1, 2, 3, 1]
Set: {}

Step 1: i=0, num=1
Set: {} → Check if 1 exists? No
Add 1 → Set: {1}

Step 2: i=1, num=2  
Set: {1} → Check if 2 exists? No
Add 2 → Set: {1, 2}

Step 3: i=2, num=3
Set: {1, 2} → Check if 3 exists? No  
Add 3 → Set: {1, 2, 3}

Step 4: i=3, num=1
Set: {1, 2, 3} → Check if 1 exists? YES! ✓
Return true

Visual Flow:
nums[0]=1 → Set: {1}
nums[1]=2 → Set: {1,2}  
nums[2]=3 → Set: {1,2,3}
nums[3]=1 → Already in set! Return true
```

#### Implementation

```javascript
/**
 * Hash Set approach - optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Input array
 * @return {boolean} - True if duplicate exists
 */
function containsDuplicate(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}
```

### Method 4: Set Size Comparison (Clever One-Liner)

Compare the size of the original array with the size of a Set created from it.

#### Visual Explanation

```
Array: [1, 2, 3, 1]
Length: 4

Create Set: new Set([1, 2, 3, 1])
Set automatically removes duplicates: {1, 2, 3}  
Set size: 3

Comparison: 4 ≠ 3 → Duplicates exist!
Result: true

For no duplicates:
Array: [1, 2, 3, 4]
Length: 4
Set: {1, 2, 3, 4}
Set size: 4
Comparison: 4 = 4 → No duplicates
Result: false
```

#### Implementation

```javascript
/**
 * Set size comparison - elegant one-liner
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Input array
 * @return {boolean} - True if duplicate exists
 */
function containsDuplicateSetSize(nums) {
    return new Set(nums).size !== nums.length;
}
```

## Comparison of Approaches

| Approach | Time Complexity | Space Complexity | Pros | Cons |
|----------|----------------|------------------|------|------|
| Brute Force | O(n²) | O(1) | No extra space, simple logic | Very slow for large arrays |
| Sorting | O(n log n) | O(1)* | Reasonable time, constant space | Modifies input array, slower than optimal |
| Hash Set | O(n) | O(n) | Optimal time, early termination | Uses extra space |
| Set Size | O(n) | O(n) | Elegant, concise | Uses extra space, no early termination |

*O(1) if we can modify input, O(n) if we need to preserve original

## Visual Pattern Recognition

```
Pattern: Early Detection vs Full Processing

Hash Set (Early Detection):
[1, 2, 3, 1, 5, 6, 7]
 ↑  ↑  ↑  ↑
          └─ STOP! Found duplicate

Set Size (Full Processing):  
[1, 2, 3, 1, 5, 6, 7]
 ↑  ↑  ↑  ↑  ↑  ↑  ↑
                    └─ Process all elements
```

## Key Insights

1. **Trade-off**: Time vs Space complexity
2. **Early Termination**: Hash Set can return immediately when duplicate is found
3. **Input Modification**: Sorting modifies the original array
4. **Set Properties**: Sets automatically handle uniqueness

## Test Cases

```javascript
// Test all implementations
const testCases = [
    [1,2,3,1],           // true
    [1,2,3,4],           // false  
    [1,1,1,3,3,4,3,2,4,2], // true
    [],                  // false
    [1]                  // false
];

testCases.forEach(nums => {
    console.log(`Input: [${nums}]`);
    console.log(`Brute Force: ${containsDuplicateBruteForce([...nums])}`);
    console.log(`Sorting: ${containsDuplicateSorting([...nums])}`);
    console.log(`Hash Set: ${containsDuplicate([...nums])}`);
    console.log(`Set Size: ${containsDuplicateSetSize([...nums])}`);
    console.log('---');
});
```

## When to Use Each Approach

- **Hash Set**: Most interviews and production code (optimal)
- **Set Size**: When you want concise, readable code
- **Sorting**: When space is extremely limited
- **Brute Force**: Only for educational purposes or very small arrays

## Edge Cases to Consider

1. **Empty Array**: `[]` → `false`
2. **Single Element**: `[1]` → `false`
3. **All Same**: `[1,1,1]` → `true`
4. **Large Numbers**: Works with any integer values

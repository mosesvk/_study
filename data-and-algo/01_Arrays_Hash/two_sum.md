# Two Sum

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 2 + 7 == 9, we return [0, 1].
```

**Example 2:**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Solution Approaches

### Method 1: Brute Force (Nested Loops)

Check every pair of numbers to see if they sum to the target.

#### Visual Explanation

```
nums = [2, 7, 11, 15], target = 9

Check all pairs:
i=0, j=1: nums[0] + nums[1] = 2 + 7 = 9 ✓ → return [0, 1]

Complete search matrix:
    0  1   2   3
0   -  9  13  17  ← Found target 9!
1      -  18  22
2          -  26
3             -

Visual process:
[2, 7, 11, 15]
 ↑  ↑
 i  j
2 + 7 = 9 = target ✓
Return indices [0, 1]

For target = 13:
[2, 7, 11, 15]  
 ↑     ↑
 i     j
2 + 11 = 13 = target ✓
Return indices [0, 2]
```

#### Implementation

```javascript
/**
 * Brute force approach - check all pairs
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of two numbers that sum to target
 */
function twoSumBruteForce(nums, target) {
    const n = nums.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    // Should never reach here given problem constraints
    return [];
}
```

### Method 2: Two-Pass Hash Map

First pass: build a map of value → index. Second pass: look for complement.

#### Visual Explanation

```
nums = [2, 7, 11, 15], target = 9

Pass 1: Build hash map (value → index)
i=0: map[2] = 0
i=1: map[7] = 1  
i=2: map[11] = 2
i=3: map[15] = 3

map = {2: 0, 7: 1, 11: 2, 15: 3}

Pass 2: Look for complement
i=0: nums[0] = 2, complement = 9 - 2 = 7
     Check map[7] = 1 (exists and 1 ≠ 0) ✓
     Return [0, 1]

Visual representation:
nums:  [2,  7, 11, 15]
index: [0,  1,  2,  3]
         ↑   ↑
      target complement
      
Step by step:
num=2, complement=7 → map has 7 at index 1 → [0,1] ✓
```

#### Implementation

```javascript
/**
 * Two-pass hash map approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of two numbers that sum to target
 */
function twoSumTwoPass(nums, target) {
    // Pass 1: Build hash map
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    
    // Pass 2: Look for complement
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    
    return [];
}
```

### Method 3: One-Pass Hash Map (Optimal)

Build the map and look for complement in a single pass.

#### Visual Explanation

```
nums = [2, 7, 11, 15], target = 9

Single pass with complement checking:

i=0: num=2, complement=7
     map = {} → 7 not found
     Add: map[2] = 0
     map = {2: 0}

i=1: num=7, complement=2  
     map = {2: 0} → 2 found at index 0! ✓
     Return [0, 1]

Visual flow:
Step 0: [2, ?, ?, ?] map={} → check for 7, not found → add 2
        map={2:0}
        
Step 1: [2, 7, ?, ?] map={2:0} → check for 2, found at 0! 
        Return [0, 1] ✓

Alternative example with target=6:
nums = [3, 2, 4], target = 6

i=0: num=3, complement=3
     map = {} → 3 not found  
     Add: map[3] = 0
     
i=1: num=2, complement=4
     map = {3: 0} → 4 not found
     Add: map[2] = 1
     
i=2: num=4, complement=2
     map = {3: 0, 2: 1} → 2 found at index 1! ✓
     Return [1, 2]
```

#### Implementation

```javascript
/**
 * One-pass hash map approach - optimal solution
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of two numbers that sum to target
 */
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}
```

### Method 4: Sorting + Two Pointers (Modified Problem)

**Note**: This approach changes the problem since we lose original indices, but it's worth understanding.

#### Visual Explanation

```
Original: nums = [2, 7, 11, 15], target = 9
With indices: [(2,0), (7,1), (11,2), (15,3)]

After sorting by value: [(2,0), (7,1), (11,2), (15,3)]
(Already sorted in this example)

Two pointers approach:
left = 0, right = 3
nums[left] + nums[right] = 2 + 15 = 17 > 9 → move right--
  
left = 0, right = 2  
nums[left] + nums[right] = 2 + 11 = 13 > 9 → move right--

left = 0, right = 1
nums[left] + nums[right] = 2 + 7 = 9 = target ✓
Return original indices [0, 1]

Visual representation:
Sorted: [(2,0), (7,1), (11,2), (15,3)]
         ↑                        ↑     sum=17 > 9, right--
         ↑              ↑               sum=13 > 9, right--  
         ↑       ↑                      sum=9 = target ✓
```

#### Implementation

```javascript
/**
 * Sorting + Two pointers approach (modified problem)
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of two numbers that sum to target
 */
function twoSumSorted(nums, target) {
    // Create array of [value, originalIndex] pairs
    const indexedNums = nums.map((num, index) => [num, index]);
    
    // Sort by value
    indexedNums.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = indexedNums.length - 1;
    
    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0];
        
        if (sum === target) {
            // Return original indices
            const index1 = indexedNums[left][1];
            const index2 = indexedNums[right][1];
            return [Math.min(index1, index2), Math.max(index1, index2)];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}
```

## Comparison of Approaches

| Approach | Time Complexity | Space Complexity | Pros | Cons |
|----------|----------------|------------------|------|------|
| Brute Force | O(n²) | O(1) | No extra space, simple | Very slow for large arrays |
| Two-Pass Hash | O(n) | O(n) | Clear logic, easy to understand | Two passes through array |
| One-Pass Hash | O(n) | O(n) | Optimal time, single pass | Slightly more complex logic |
| Sorted + Two Pointers | O(n log n) | O(n) | Educational value | Slower due to sorting |

## Visual Pattern Recognition

```
Hash Map Pattern: Complement Lookup

For each number, ask: "What number + this = target?"
nums = [2, 7, 11, 15], target = 9

At 2: Need 7 to make 9 → Look for 7
At 7: Need 2 to make 9 → Look for 2 (found earlier!)

The key insight:
Instead of checking all future elements,
check if we've seen the complement before.

nums[i] + complement = target
complement = target - nums[i]
```

## Key Insights

1. **Complement Calculation**: For any number x, we need (target - x) to form the sum
2. **Hash Map Efficiency**: O(1) lookup time makes this optimal
3. **Single Pass**: We can build the map and search simultaneously
4. **Index Preservation**: Hash maps allow us to store and retrieve original indices

## Advanced Visualizations

### Hash Map State Evolution

```
nums = [2, 7, 11, 15], target = 9

State after each iteration:
i=0: map={2:0}, looking for 7, not found
i=1: map={2:0}, looking for 2, FOUND at index 0!
     Return [0, 1]

For different target (13):
i=0: map={2:0}, looking for 11, not found  
i=1: map={2:0, 7:1}, looking for 6, not found
i=2: map={2:0, 7:1, 11:2}, looking for 2, FOUND at index 0!
     Return [0, 2]
```

### Edge Case Handling

```
Same element twice: nums = [3, 3], target = 6
i=0: map={}, looking for 3, not found → add map[3]=0
i=1: map={3:0}, looking for 3, FOUND at index 0!
     Return [0, 1] ✓

This works because we check for complement BEFORE adding current element
```

## Test Cases

```javascript
// Test all implementations
const testCases = [
    [[2,7,11,15], 9],     // [0,1]
    [[3,2,4], 6],         // [1,2] 
    [[3,3], 6],           // [0,1]
    [[2,5,5,11], 10],     // [1,2]
    [[1,2,3,4,5], 8],     // [2,4]
    [[-1,-2,-3,-4,-5], -8], // [2,4]
];

testCases.forEach(([nums, target]) => {
    console.log(`nums: [${nums}], target: ${target}`);
    console.log(`Brute Force: [${twoSumBruteForce([...nums], target)}]`);
    console.log(`Two Pass: [${twoSumTwoPass([...nums], target)}]`);
    console.log(`One Pass: [${twoSum([...nums], target)}]`);
    console.log(`Sorted: [${twoSumSorted([...nums], target)}]`);
    console.log('---');
});
```

## When to Use Each Approach

- **One-Pass Hash Map**: Best for interviews and production (optimal)
- **Two-Pass Hash Map**: When you want very clear, separated logic
- **Brute Force**: Only for very small arrays or educational purposes
- **Sorted Two Pointers**: When you're studying different algorithmic approaches

## Edge Cases to Consider

1. **Duplicate Elements**: `[3,3]` with target `6` → `[0,1]`
2. **Negative Numbers**: `[-1,-2,-3]` with target `-5" → `[1,2]`
3. **Zero Values**: `[0,4,3,0]` with target `0` → `[0,3]`
4. **Large Numbers**: Algorithm works with any integer values
5. **Two Elements**: Minimum case `[a,b]` always has solution if one exists

## Follow-up Variations

1. **Two Sum II - Sorted Array**: Use two pointers (O(1) space)
2. **Three Sum**: Extend to find three numbers that sum to target
3. **Two Sum - All Pairs**: Return all pairs instead of just one
4. **Two Sum - Count**: Count how many pairs sum to target
5. **Two Sum - Closest**: Find pair with sum closest to target

## Problem Patterns

This problem introduces the fundamental **Hash Map + Complement** pattern used in many problems:
- Two Sum variations
- Subarray Sum problems  
- Palindrome checking
- Anagram detection
- And many more...

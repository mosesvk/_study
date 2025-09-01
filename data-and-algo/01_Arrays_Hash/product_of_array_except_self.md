# Product of Array Except Self

## Problem Statement
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operator.

**Example:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

## Solution Approaches

### Method 1: Two-Pass Approach (Prefix/Suffix Arrays)

This approach uses two separate passes to compute prefix products and suffix products.

#### Visual Explanation

```
Original Array: [1, 2, 3, 4]
Indices:        [0, 1, 2, 3]

Step 1: Calculate Prefix Products
Prefix[i] = product of all elements before index i

Index:    0   1   2   3
Array:    1   2   3   4
Prefix:   1   1   2   6
          ↑   ↑   ↑   ↑
          1   1   1×2  1×2×3

Step 2: Calculate Suffix Products
Suffix[i] = product of all elements after index i

Index:    0   1   2   3
Array:    1   2   3   4
Suffix:  24  12   4   1
          ↑   ↑   ↑   ↑
        2×3×4 3×4  4   1

Step 3: Multiply Prefix × Suffix
Result[i] = Prefix[i] × Suffix[i]

Index:    0   1   2   3
Prefix:   1   1   2   6
Suffix:  24  12   4   1
Result:  24  12   8   6
```

#### Implementation

```javascript
/**
 * Two-pass approach using separate prefix and suffix arrays
 * Time Complexity: O(n)
 * Space Complexity: O(n) - due to prefix and suffix arrays
 * 
 * @param {number[]} nums - Input array
 * @return {number[]} - Product array except self
 */
function productExceptSelfTwoPass(nums) {
    const n = nums.length;
    const prefix = new Array(n);
    const suffix = new Array(n);
    const result = new Array(n);
    
    // Step 1: Calculate prefix products
    prefix[0] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    // Step 2: Calculate suffix products
    suffix[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    // Step 3: Multiply prefix and suffix
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }
    
    return result;
}
```

### Method 2: Optimized Single Array Approach (Space Optimized)

This approach optimizes space by using the result array to store prefix products first, then calculating suffix products on the fly.

#### Visual Explanation

```
Original Array: [1, 2, 3, 4]

Pass 1: Store prefix products in result array
Index:    0   1   2   3
Array:    1   2   3   4
Result:   1   1   2   6
          ↑   ↑   ↑   ↑
          1   1   1×2  1×2×3

Pass 2: Multiply by suffix products (calculated on the fly)
suffix = 1 (start from right)

i=3: result[3] = 6 × 1 = 6, suffix = 1 × 4 = 4
i=2: result[2] = 2 × 4 = 8, suffix = 4 × 3 = 12  
i=1: result[1] = 1 × 12 = 12, suffix = 12 × 2 = 24
i=0: result[0] = 1 × 24 = 24, suffix = 24 × 1 = 24

Final Result: [24, 12, 8, 6]
```

#### Step-by-Step Visualization

```
Initial: nums = [1, 2, 3, 4]

After Pass 1 (Prefix):
result = [1, 1, 2, 6]
         ↑  ↑  ↑  ↑
         1  1  1×2 1×2×3

Pass 2 (Suffix multiplication):
suffix = 1

i=3: result[3] = 6 × 1 = 6
     suffix = 1 × nums[3] = 1 × 4 = 4
     result = [1, 1, 2, 6]

i=2: result[2] = 2 × 4 = 8  
     suffix = 4 × nums[2] = 4 × 3 = 12
     result = [1, 1, 8, 6]

i=1: result[1] = 1 × 12 = 12
     suffix = 12 × nums[1] = 12 × 2 = 24  
     result = [1, 12, 8, 6]

i=0: result[0] = 1 × 24 = 24
     suffix = 24 × nums[0] = 24 × 1 = 24
     result = [24, 12, 8, 6] ✓
```

#### Implementation

```javascript
/**
 * Space-optimized approach using single result array
 * Time Complexity: O(n)
 * Space Complexity: O(1) - excluding the result array
 * 
 * @param {number[]} nums - Input array
 * @return {number[]} - Product array except self
 */
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Pass 1: Store prefix products in result
    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Pass 2: Multiply by suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
}
```

## Comparison of Approaches

| Approach | Time Complexity | Space Complexity | Pros | Cons |
|----------|----------------|------------------|------|------|
| Two-Pass | O(n) | O(n) | Easy to understand, clear separation of concerns | Uses extra space for prefix/suffix arrays |
| Optimized | O(n) | O(1)* | Space efficient, still easy to follow | Slightly more complex logic |

*O(1) excluding the result array which is required by the problem

## Key Insights

1. **Prefix Products**: For each index i, we need the product of all elements before i
2. **Suffix Products**: For each index i, we need the product of all elements after i
3. **Final Result**: result[i] = prefix[i] × suffix[i]
4. **Space Optimization**: We can calculate suffix products on the fly to save space

## Test Cases

```javascript
// Test the implementation
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]
console.log(productExceptSelf([2,3,4,5])); // [60,40,30,24]
```

## Time and Space Analysis

- **Time Complexity**: O(n) - We traverse the array a constant number of times
- **Space Complexity**: O(1) - Only using a constant amount of extra space (excluding the result array)
- **No Division**: The solution doesn't use division, meeting the problem constraint

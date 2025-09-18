# Insertion Sort

## Algorithm Implementation

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        while (j >= 0 && arr[j+1] < arr[j]) {
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            j--;
        }
    }
    return arr;
}
```

## How It Works

### High-Level Understanding
Insertion Sort works like sorting playing cards in your hand. You pick up one card at a time and place it in the correct position among the already sorted cards.

### Low-Level Understanding
1. **Divide the array**: Consider the first element as already sorted, and the rest as unsorted
2. **Iterate**: For each element in the unsorted portion:
   - Compare it with elements in the sorted portion (from right to left)
   - Shift larger elements one position to the right
   - Insert the current element in its correct position
3. **Result**: After processing all elements, the entire array is sorted

### Key Characteristics
- **Time Complexity**: O(n²) in worst case, O(n) in best case
- **Space Complexity**: O(1) - in-place sorting
- **Stable**: Yes, maintains relative order of equal elements
- **Adaptive**: Efficient for nearly sorted arrays

## Visual Examples

### Example 1: `[64, 34, 25, 12, 22, 11, 90]`

```
Initial array: [64, 34, 25, 12, 22, 11, 90]
Sorted part:   [64] | Unsorted: [34, 25, 12, 22, 11, 90]

Iteration 1 (i=1, j=0):
  Compare 34 < 64? Yes
  Swap: 34 ↔ 64
  Array: [34, 64, 25, 12, 22, 11, 90]
  Sorted: [34, 64] | Unsorted: [25, 12, 22, 11, 90]

Iteration 2 (i=2, j=1):
  Compare 25 < 64? Yes
  Swap: 25 ↔ 64
  Array: [34, 25, 64, 12, 22, 11, 90]
  Compare 25 < 34? Yes
  Swap: 25 ↔ 34
  Array: [25, 34, 64, 12, 22, 11, 90]
  Sorted: [25, 34, 64] | Unsorted: [12, 22, 11, 90]

Iteration 3 (i=3, j=2):
  Compare 12 < 64? Yes
  Swap: 12 ↔ 64
  Array: [25, 34, 12, 64, 22, 11, 90]
  Compare 12 < 34? Yes
  Swap: 12 ↔ 34
  Array: [25, 12, 34, 64, 22, 11, 90]
  Compare 12 < 25? Yes
  Swap: 12 ↔ 25
  Array: [12, 25, 34, 64, 22, 11, 90]
  Sorted: [12, 25, 34, 64] | Unsorted: [22, 11, 90]

Iteration 4 (i=4, j=3):
  Compare 22 < 64? Yes
  Swap: 22 ↔ 64
  Array: [12, 25, 34, 22, 64, 11, 90]
  Compare 22 < 34? Yes
  Swap: 22 ↔ 34
  Array: [12, 25, 22, 34, 64, 11, 90]
  Compare 22 < 25? Yes
  Swap: 22 ↔ 25
  Array: [12, 22, 25, 34, 64, 11, 90]
  Compare 22 < 12? No, stop
  Sorted: [12, 22, 25, 34, 64] | Unsorted: [11, 90]

Iteration 5 (i=5, j=4):
  Compare 11 < 64? Yes
  Swap: 11 ↔ 64
  Array: [12, 22, 25, 34, 11, 64, 90]
  Compare 11 < 34? Yes
  Swap: 11 ↔ 34
  Array: [12, 22, 25, 11, 34, 64, 90]
  Compare 11 < 25? Yes
  Swap: 11 ↔ 25
  Array: [12, 22, 11, 25, 34, 64, 90]
  Compare 11 < 22? Yes
  Swap: 11 ↔ 22
  Array: [12, 11, 22, 25, 34, 64, 90]
  Compare 11 < 12? Yes
  Swap: 11 ↔ 12
  Array: [11, 12, 22, 25, 34, 64, 90]
  Sorted: [11, 12, 22, 25, 34, 64] | Unsorted: [90]

Iteration 6 (i=6, j=5):
  Compare 90 < 64? No
  No swaps needed
  Array: [11, 12, 22, 25, 34, 64, 90]
  Final sorted array: [11, 12, 22, 25, 34, 64, 90]
```

### Example 2: `[5, 2, 8, 1, 9]`

```
Initial array: [5, 2, 8, 1, 9]
Sorted part:   [5] | Unsorted: [2, 8, 1, 9]

Iteration 1 (i=1):
  Compare 2 < 5? Yes
  Swap: 2 ↔ 5
  Array: [2, 5, 8, 1, 9]

Iteration 2 (i=2):
  Compare 8 < 5? No
  No swaps needed
  Array: [2, 5, 8, 1, 9]

Iteration 3 (i=3):
  Compare 1 < 8? Yes
  Swap: 1 ↔ 8
  Array: [2, 5, 1, 8, 9]
  Compare 1 < 5? Yes
  Swap: 1 ↔ 5
  Array: [2, 1, 5, 8, 9]
  Compare 1 < 2? Yes
  Swap: 1 ↔ 2
  Array: [1, 2, 5, 8, 9]

Iteration 4 (i=4):
  Compare 9 < 8? No
  No swaps needed
  Array: [1, 2, 5, 8, 9]

Final sorted array: [1, 2, 5, 8, 9]
```

## Console Log Visual Output

```javascript
function insertionSortWithLogs(arr) {
    console.log(`Initial array: [${arr.join(', ')}]`);
    
    for (let i = 1; i < arr.length; i++) {
        console.log(`\nIteration ${i}: Processing element ${arr[i]} at position ${i}`);
        let j = i - 1;
        
        while (j >= 0 && arr[j+1] < arr[j]) {
            console.log(`  Comparing ${arr[j+1]} < ${arr[j]}? Yes, swapping...`);
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            console.log(`  Array after swap: [${arr.join(', ')}]`);
            j--;
        }
        
        if (j < 0 || arr[j+1] >= arr[j]) {
            console.log(`  ${arr[j+1]} is in correct position`);
        }
        
        console.log(`  Current state: [${arr.join(', ')}]`);
    }
    
    console.log(`\nFinal sorted array: [${arr.join(', ')}]`);
    return arr;
}

// Example usage:
insertionSortWithLogs([64, 34, 25, 12, 22, 11, 90]);
```

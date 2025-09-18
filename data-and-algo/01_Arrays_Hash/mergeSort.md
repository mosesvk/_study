# Merge Sort

## Algorithm Implementation

```javascript
function mergeSort(arr, l, r) {
    if (l < r) {
        // Find the middle point of arr
        let m = Math.floor((l + r) / 2);

        mergeSort(arr, l, m);   // sort left half
        mergeSort(arr, m+1, r); // sort right half
        merge(arr, l, m, r);    // merge sorted halfs
    }
    return arr;
} 

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) { 
    
    // Find lengths of two subarrays to be merged
    let length1 = m - l + 1;
    let length2 = r - m;

    // Create temp arrays 
    let L = new Array(length1);
    let R = new Array(length2);

    // Copy the sorted left & right halfs to temp arrays
    for (let i = 0; i < length1; i++) {
        L[i] = arr[l + i];
    }
    
    for (let j = 0; j < length2; j++) {
        R[j] = arr[m + 1 + j];
    }
    
    // initial indexes of left and right sub-arrays
    let i = 0; // index for left
    let j = 0; // index for right
    let k = l; // Initial index of merged subarray array

    // Merge the two sorted halfs leto the original array
    while (i < length1 && j < length2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    // One of the halfs will have elements remaining
    while (i < length1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < length2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
```

## How It Works

### High-Level Understanding
Merge Sort uses the "divide and conquer" strategy. It recursively divides the array into smaller halves until each half has only one element, then merges them back together in sorted order.

### Low-Level Understanding
1. **Divide**: Split the array into two halves recursively until each subarray has one element
2. **Conquer**: Sort the individual elements (trivial when there's only one element)
3. **Merge**: Combine the sorted halves back together by comparing elements and placing them in order
4. **Result**: The final merged array is completely sorted

### Key Characteristics
- **Time Complexity**: O(n log n) in all cases
- **Space Complexity**: O(n) - requires additional temporary arrays
- **Stable**: Yes, maintains relative order of equal elements
- **Not In-place**: Uses additional memory for merging

## Visual Examples

### Example 1: `[38, 27, 43, 3, 9, 82, 10]`

```
Initial array: [38, 27, 43, 3, 9, 82, 10]

DIVIDE PHASE (Recursive splitting):
Level 0: [38, 27, 43, 3, 9, 82, 10]
         ↓ Split at index 3
Level 1: [38, 27, 43] | [3, 9, 82, 10]
         ↓ Split each half
Level 2: [38] | [27, 43] | [3, 9] | [82, 10]
         ↓ Split remaining multi-element arrays
Level 3: [38] | [27] | [43] | [3] | [9] | [82] | [10]

MERGE PHASE (Bottom-up merging):
Level 3→2: [27, 43] ← merge [27] and [43]
           [3, 9] ← merge [3] and [9]
           [10, 82] ← merge [82] and [10]

Level 2→1: [27, 38, 43] ← merge [38] and [27, 43]
           [3, 9, 10, 82] ← merge [3, 9] and [10, 82]

Level 1→0: [3, 9, 10, 27, 38, 43, 82] ← merge [27, 38, 43] and [3, 9, 10, 82]

Final sorted array: [3, 9, 10, 27, 38, 43, 82]
```

### Detailed Merge Process for `[27, 38, 43]` and `[3, 9, 10, 82]`:

```
Left array:  [27, 38, 43]    Right array: [3, 9, 10, 82]
Pointers:    ↑i=0            ↑j=0

Step 1: Compare 27 vs 3
  3 < 27, so place 3 in result
  Result: [3]
  Pointers: ↑i=0            ↑j=1

Step 2: Compare 27 vs 9
  9 < 27, so place 9 in result
  Result: [3, 9]
  Pointers: ↑i=0            ↑j=2

Step 3: Compare 27 vs 10
  10 < 27, so place 10 in result
  Result: [3, 9, 10]
  Pointers: ↑i=0            ↑j=3

Step 4: Right array exhausted, copy remaining left elements
  Result: [3, 9, 10, 27, 38, 43]
```

### Example 2: `[5, 2, 8, 1, 9]`

```
Initial array: [5, 2, 8, 1, 9]

DIVIDE PHASE:
Level 0: [5, 2, 8, 1, 9]
         ↓ Split at index 2
Level 1: [5, 2] | [8, 1, 9]
         ↓ Split each half
Level 2: [5] | [2] | [8] | [1, 9]
         ↓ Split [1, 9]
Level 3: [5] | [2] | [8] | [1] | [9]

MERGE PHASE:
Level 3→2: [1, 9] ← merge [1] and [9]

Level 2→1: [2, 5] ← merge [5] and [2]
           [1, 8, 9] ← merge [8] and [1, 9]

Level 1→0: [1, 2, 5, 8, 9] ← merge [2, 5] and [1, 8, 9]

Final sorted array: [1, 2, 5, 8, 9]
```

## Console Log Visual Output

```javascript
function mergeSortWithLogs(arr, l = 0, r = arr.length - 1, depth = 0) {
    const indent = "  ".repeat(depth);
    
    if (l < r) {
        let m = Math.floor((l + r) / 2);
        
        console.log(`${indent}Dividing: [${arr.slice(l, r + 1).join(', ')}] into [${arr.slice(l, m + 1).join(', ')}] and [${arr.slice(m + 1, r + 1).join(', ')}]`);
        
        mergeSortWithLogs(arr, l, m, depth + 1);
        mergeSortWithLogs(arr, m + 1, r, depth + 1);
        
        console.log(`${indent}Merging: [${arr.slice(l, m + 1).join(', ')}] + [${arr.slice(m + 1, r + 1).join(', ')}]`);
        merge(arr, l, m, r);
        console.log(`${indent}Result: [${arr.slice(l, r + 1).join(', ')}]`);
    } else {
        console.log(`${indent}Base case: [${arr[l]}] (single element)`);
    }
    
    return arr;
}

function merge(arr, l, m, r) {
    let length1 = m - l + 1;
    let length2 = r - m;
    let L = new Array(length1);
    let R = new Array(length2);

    for (let i = 0; i < length1; i++) {
        L[i] = arr[l + i];
    }
    for (let j = 0; j < length2; j++) {
        R[j] = arr[m + 1 + j];
    }

    let i = 0, j = 0, k = l;
    
    console.log(`    Left: [${L.join(', ')}], Right: [${R.join(', ')}]`);

    while (i < length1 && j < length2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            console.log(`    Choose ${L[i]} from left`);
            i++;
        } else {
            arr[k] = R[j];
            console.log(`    Choose ${R[j]} from right`);
            j++;
        }
        k++;
    }

    while (i < length1) {
        arr[k] = L[i];
        console.log(`    Remaining from left: ${L[i]}`);
        i++;
        k++;
    }
    
    while (j < length2) {
        arr[k] = R[j];
        console.log(`    Remaining from right: ${R[j]}`);
        j++;
        k++;
    }
}

// Example usage:
mergeSortWithLogs([38, 27, 43, 3, 9, 82, 10]);
```

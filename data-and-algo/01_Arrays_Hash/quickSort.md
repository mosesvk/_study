# Quick Sort

## Algorithm Implementation

```javascript
function quickSort(arr, s, e) {
    if (e - s + 1 <= 1) {
        return arr;
    }

    let pivot = arr[e];
    let left = s;       // pointer for left side

    // Partition: elements smaller than pivot on left side
    for (let i = s; i < e; i++) {
        if (arr[i] < pivot) {
            let tmp = arr[left];
            arr[left] = arr[i];
            arr[i] = tmp;
            left++;
        }
    }

    // Move pivot in-between left & right sides
    arr[e] = arr[left];
    arr[left] = pivot;

    // Quick sort left side
    quickSort(arr, s, left - 1);

    // Quick sort right side
    quickSort(arr, left + 1, e);

    return arr;
}
```

## How It Works

### High-Level Understanding
Quick Sort uses the "divide and conquer" strategy with a pivot element. It partitions the array around a pivot, placing all elements smaller than the pivot on the left and larger elements on the right, then recursively sorts the two partitions.

### Low-Level Understanding
1. **Choose Pivot**: Select an element as pivot (typically last element)
2. **Partition**: Rearrange array so all elements < pivot are on left, > pivot are on right
3. **Place Pivot**: Put pivot in its final sorted position
4. **Recurse**: Apply Quick Sort to left and right partitions
5. **Combine**: No merging needed - elements are already in correct relative positions

### Key Characteristics
- **Time Complexity**: O(n log n) average case, O(n²) worst case
- **Space Complexity**: O(log n) average case (recursion stack)
- **Not Stable**: Relative order of equal elements may change
- **In-place**: Sorts array without additional memory (except recursion stack)

## Visual Examples

### Example 1: `[64, 34, 25, 12, 22, 11, 90]`

```
Initial array: [64, 34, 25, 12, 22, 11, 90]
Pivot: 90 (last element)

PARTITION PHASE:
Compare each element with pivot (90):
- 64 < 90? Yes → move to left partition
- 34 < 90? Yes → move to left partition  
- 25 < 90? Yes → move to left partition
- 12 < 90? Yes → move to left partition
- 22 < 90? Yes → move to left partition
- 11 < 90? Yes → move to left partition

After partition: [64, 34, 25, 12, 22, 11, 90]
Left partition: [64, 34, 25, 12, 22, 11] | Pivot: 90 | Right partition: []

Place pivot: [64, 34, 25, 12, 22, 11, 90]

RECURSIVE CALLS:
Left side: [64, 34, 25, 12, 22, 11] (pivot = 11)
  Partition: [11, 34, 25, 12, 22, 64] (pivot in position 0)
  Left: [11] (single element, done)
  Right: [34, 25, 12, 22, 64] (pivot = 64)
    Partition: [34, 25, 12, 22, 64] (pivot in position 4)
    Left: [34, 25, 12, 22] (pivot = 22)
      Partition: [22, 25, 12, 34] (pivot in position 0)
      Left: [22] (single element, done)
      Right: [25, 12, 34] (pivot = 34)
        Partition: [25, 12, 34] (pivot in position 2)
        Left: [25, 12] (pivot = 12)
          Partition: [12, 25] (pivot in position 0)
          Left: [12] (single element, done)
          Right: [25] (single element, done)
        Right: [34] (single element, done)
    Right: [64] (single element, done)
Right side: [90] (single element, done)

Final sorted array: [11, 12, 22, 25, 34, 64, 90]
```

### Example 2: `[5, 2, 8, 1, 9]`

```
Initial array: [5, 2, 8, 1, 9]
Pivot: 9 (last element)

PARTITION PHASE:
Compare with pivot (9):
- 5 < 9? Yes → left partition
- 2 < 9? Yes → left partition
- 8 < 9? Yes → left partition  
- 1 < 9? Yes → left partition

After partition: [5, 2, 8, 1, 9]
Left: [5, 2, 8, 1] | Pivot: 9 | Right: []

RECURSIVE CALLS:
Left side: [5, 2, 8, 1] (pivot = 1)
  Partition: [1, 2, 8, 5] (pivot in position 0)
  Left: [1] (single element, done)
  Right: [2, 8, 5] (pivot = 5)
    Partition: [2, 5, 8] (pivot in position 1)
    Left: [2] (single element, done)
    Right: [8] (single element, done)
Right side: [9] (single element, done)

Final sorted array: [1, 2, 5, 8, 9]
```

### Detailed Partition Process for `[64, 34, 25, 12, 22, 11, 90]`:

```
Array: [64, 34, 25, 12, 22, 11, 90]
Pivot: 90, Left pointer: 0

Step 1: i=0, arr[0]=64
  64 < 90? Yes
  Swap arr[0] with arr[0] (no change)
  Left pointer: 1
  Array: [64, 34, 25, 12, 22, 11, 90]

Step 2: i=1, arr[1]=34
  34 < 90? Yes
  Swap arr[1] with arr[1] (no change)
  Left pointer: 2
  Array: [64, 34, 25, 12, 22, 11, 90]

Step 3: i=2, arr[2]=25
  25 < 90? Yes
  Swap arr[2] with arr[2] (no change)
  Left pointer: 3
  Array: [64, 34, 25, 12, 22, 11, 90]

Step 4: i=3, arr[3]=12
  12 < 90? Yes
  Swap arr[3] with arr[3] (no change)
  Left pointer: 4
  Array: [64, 34, 25, 12, 22, 11, 90]

Step 5: i=4, arr[4]=22
  22 < 90? Yes
  Swap arr[4] with arr[4] (no change)
  Left pointer: 5
  Array: [64, 34, 25, 12, 22, 11, 90]

Step 6: i=5, arr[5]=11
  11 < 90? Yes
  Swap arr[5] with arr[5] (no change)
  Left pointer: 6
  Array: [64, 34, 25, 12, 22, 11, 90]

Final step: Place pivot
  Swap arr[6] with arr[6] (pivot already in correct position)
  Array: [64, 34, 25, 12, 22, 11, 90]
```

## Console Log Visual Output

```javascript
function quickSortWithLogs(arr, s = 0, e = arr.length - 1, depth = 0) {
    const indent = "  ".repeat(depth);
    
    if (e - s + 1 <= 1) {
        console.log(`${indent}Base case: [${arr[s]}] (single element or empty)`);
        return arr;
    }

    let pivot = arr[e];
    let left = s;
    
    console.log(`${indent}QuickSort: [${arr.slice(s, e + 1).join(', ')}]`);
    console.log(`${indent}Pivot: ${pivot}`);
    console.log(`${indent}Partitioning...`);

    // Partition phase
    for (let i = s; i < e; i++) {
        if (arr[i] < pivot) {
            if (left !== i) {
                console.log(`${indent}  Swapping ${arr[left]} and ${arr[i]} (${arr[i]} < ${pivot})`);
                let tmp = arr[left];
                arr[left] = arr[i];
                arr[i] = tmp;
            } else {
                console.log(`${indent}  ${arr[i]} < ${pivot}, no swap needed`);
            }
            left++;
        } else {
            console.log(`${indent}  ${arr[i]} >= ${pivot}, skip`);
        }
    }

    // Place pivot
    console.log(`${indent}Placing pivot ${pivot} at position ${left}`);
    arr[e] = arr[left];
    arr[left] = pivot;

    console.log(`${indent}After partition: [${arr.slice(s, e + 1).join(', ')}]`);
    console.log(`${indent}Left: [${arr.slice(s, left).join(', ')}], Right: [${arr.slice(left + 1, e + 1).join(', ')}]`);

    // Recursive calls
    quickSortWithLogs(arr, s, left - 1, depth + 1);
    quickSortWithLogs(arr, left + 1, e, depth + 1);

    return arr;
}

// Example usage:
quickSortWithLogs([64, 34, 25, 12, 22, 11, 90]);
```

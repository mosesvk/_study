# Bucket Sort (Counting Sort for 3 Values)

## Algorithm Implementation

```javascript
function bucketSort(arr) {
    // Assuming arr only contains 0, 1 or 2
    const counts = [0, 0, 0];

    // Count the quantity of each val in arr
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] += 1;
    }

    // Fill each bucket in the original array
    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let j = 0; j < counts[n]; j++) {
            arr[i] = n;
            i++;
        }
    }
    return arr;
}
```

## How It Works

### High-Level Understanding
This is a specialized version of Bucket Sort (also called Counting Sort) for arrays containing only values 0, 1, and 2. It counts how many times each value appears, then reconstructs the array by placing all 0s first, then all 1s, then all 2s.

### Low-Level Understanding
1. **Count Phase**: Create a count array `[0, 0, 0]` and count occurrences of 0, 1, and 2
2. **Reconstruct Phase**: Fill the original array by placing:
   - All 0s from index 0 to counts[0]-1
   - All 1s from index counts[0] to counts[0]+counts[1]-1  
   - All 2s from index counts[0]+counts[1] to end
3. **Result**: Array is sorted with all 0s first, then 1s, then 2s

### Key Characteristics
- **Time Complexity**: O(n) - linear time
- **Space Complexity**: O(1) - only uses constant extra space
- **Stable**: Yes, maintains relative order of equal elements
- **Specialized**: Only works for arrays with limited range of values (0, 1, 2)

## Visual Examples

### Example 1: `[2, 0, 2, 1, 1, 0]`

```
Initial array: [2, 0, 2, 1, 1, 0]
Count array:   [0, 0, 0]

COUNT PHASE:
Process each element:
- arr[0] = 2 → counts[2]++ → counts = [0, 0, 1]
- arr[1] = 0 → counts[0]++ → counts = [1, 0, 1]
- arr[2] = 2 → counts[2]++ → counts = [1, 0, 2]
- arr[3] = 1 → counts[1]++ → counts = [1, 1, 2]
- arr[4] = 1 → counts[1]++ → counts = [1, 2, 2]
- arr[5] = 0 → counts[0]++ → counts = [2, 2, 2]

Final counts: [2, 2, 2] (2 zeros, 2 ones, 2 twos)

RECONSTRUCT PHASE:
Array index: 0  1  2  3  4  5
Place 2 zeros at positions 0-1:
  arr[0] = 0, arr[1] = 0
  Array: [0, 0, 2, 1, 1, 0]

Place 2 ones at positions 2-3:
  arr[2] = 1, arr[3] = 1
  Array: [0, 0, 1, 1, 1, 0]

Place 2 twos at positions 4-5:
  arr[4] = 2, arr[5] = 2
  Array: [0, 0, 1, 1, 2, 2]

Final sorted array: [0, 0, 1, 1, 2, 2]
```

### Example 2: `[1, 0, 2, 1, 2, 0, 1]`

```
Initial array: [1, 0, 2, 1, 2, 0, 1]
Count array:   [0, 0, 0]

COUNT PHASE:
Process each element:
- arr[0] = 1 → counts = [0, 1, 0]
- arr[1] = 0 → counts = [1, 1, 0]
- arr[2] = 2 → counts = [1, 1, 1]
- arr[3] = 1 → counts = [1, 2, 1]
- arr[4] = 2 → counts = [1, 2, 2]
- arr[5] = 0 → counts = [2, 2, 2]
- arr[6] = 1 → counts = [2, 3, 2]

Final counts: [2, 3, 2] (2 zeros, 3 ones, 2 twos)

RECONSTRUCT PHASE:
Place 2 zeros at positions 0-1:
  arr[0] = 0, arr[1] = 0
  Array: [0, 0, 2, 1, 2, 0, 1]

Place 3 ones at positions 2-4:
  arr[2] = 1, arr[3] = 1, arr[4] = 1
  Array: [0, 0, 1, 1, 1, 0, 1]

Place 2 twos at positions 5-6:
  arr[5] = 2, arr[6] = 2
  Array: [0, 0, 1, 1, 1, 2, 2]

Final sorted array: [0, 0, 1, 1, 1, 2, 2]
```

### Step-by-Step Reconstruct Process for Example 1:

```
Counts: [2, 2, 2]
Array indices: 0  1  2  3  4  5

Step 1: Place zeros (counts[0] = 2)
  i = 0, n = 0, j = 0: arr[0] = 0
  i = 1, n = 0, j = 1: arr[1] = 0
  Array: [0, 0, 2, 1, 1, 0]

Step 2: Place ones (counts[1] = 2)  
  i = 2, n = 1, j = 0: arr[2] = 1
  i = 3, n = 1, j = 1: arr[3] = 1
  Array: [0, 0, 1, 1, 1, 0]

Step 3: Place twos (counts[2] = 2)
  i = 4, n = 2, j = 0: arr[4] = 2
  i = 5, n = 2, j = 1: arr[5] = 2
  Array: [0, 0, 1, 1, 2, 2]
```

## Console Log Visual Output

```javascript
function bucketSortWithLogs(arr) {
    console.log(`Initial array: [${arr.join(', ')}]`);
    console.log(`Count array initialized: [0, 0, 0]`);
    
    const counts = [0, 0, 0];

    // Count phase
    console.log('\nCOUNT PHASE:');
    for (let i = 0; i < arr.length; i++) {
        console.log(`  Processing arr[${i}] = ${arr[i]}`);
        counts[arr[i]] += 1;
        console.log(`  Counts updated: [${counts.join(', ')}]`);
    }
    
    console.log(`\nFinal counts: [${counts.join(', ')}]`);
    console.log(`  - ${counts[0]} zeros`);
    console.log(`  - ${counts[1]} ones`);
    console.log(`  - ${counts[2]} twos`);

    // Reconstruct phase
    console.log('\nRECONSTRUCT PHASE:');
    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        console.log(`\nPlacing ${counts[n]} ${n}s:`);
        for (let j = 0; j < counts[n]; j++) {
            console.log(`  arr[${i}] = ${n}`);
            arr[i] = n;
            i++;
        }
        console.log(`  Current array: [${arr.join(', ')}]`);
    }
    
    console.log(`\nFinal sorted array: [${arr.join(', ')}]`);
    return arr;
}

// Example usage:
bucketSortWithLogs([2, 0, 2, 1, 1, 0]);
```

## Alternative Implementation (More General)

```javascript
// More general bucket sort for any range of integers
function generalBucketSort(arr, min, max) {
    const range = max - min + 1;
    const counts = new Array(range).fill(0);
    
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i] - min]++;
    }
    
    // Reconstruct array
    let index = 0;
    for (let i = 0; i < range; i++) {
        while (counts[i] > 0) {
            arr[index] = i + min;
            index++;
            counts[i]--;
        }
    }
    
    return arr;
}

// For our specific case (0, 1, 2):
// bucketSort([2, 0, 1]) is equivalent to generalBucketSort([2, 0, 1], 0, 2)
```

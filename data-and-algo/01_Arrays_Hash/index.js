const quickSort = (pairs) => {
  quickSortHelper(pairs, 0, pairs.length - 1);
  return pairs;
};

/**
 * Helper function for the QuickSort algorithm
 * @param {Pair[]} arr Array of Pair objects to be sorted
 * @param {number} s Start index for the sorting
 * @param {number} e End index for the sorting
 */
const quickSortHelper = (arr, s, e) => {
  if (e - s + 1 <= 1) {
    return;
  }

  const pivot = arr[e]; // pivot is the last element
  let left = s; // pointer for left side

  // Partition: elements smaller than pivot on left side
  for (let i = s; i < e; i++) {
    // console.log({left, leftVal: arr[left], i, iVal: arr[i], pivot})

    if (arr[i] < pivot) {
        // console.log('hit')
      const tmp = arr[left];
      arr[left] = arr[i];
      arr[i] = tmp;
      left++;
    }

    
  }

  // Move pivot in-between left & right sides
  arr[e] = arr[left];
  arr[left] = pivot;

  // Quick sort left side
  quickSortHelper(arr, s, left - 1);

  // Quick sort right side
  quickSortHelper(arr, left + 1, e);
};


quickSort([2, 7, 3, 2, 8, 9])
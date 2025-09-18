const quickSort = (pairs) => {
  this.quickSortHelper(pairs, 0, pairs.length - 1);
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
    if (arr[i].key < pivot.key) {
      const tmp = arr[left];
      arr[left] = arr[i];
      arr[i] = tmp;
      left++;
    }

    console.log({left, i, pivot})
  }

  // Move pivot in-between left & right sides
  arr[e] = arr[left];
  arr[left] = pivot;

  // Quick sort left side
  this.quickSortHelper(arr, s, left - 1);

  // Quick sort right side
  this.quickSortHelper(arr, left + 1, e);
};


quickSort([(5, "apple"), (9, "banana"), (9, "cherry"), (1, "date"), (9, "elderberry")])
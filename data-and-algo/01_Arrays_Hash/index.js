const quickSort = (pairs) => {
  quickSortHelper(pairs, 0, pairs.length - 1);
  return pairs;
};

const quickSortHelper = (arr, s, e) => {
    if (e - s + 1 <= 1) return 

    let pivot = arr[e]
    let left = s

    for (let i = s; i < e; i++) {
        if (arr[i] < pivot) {
            const temp = arr[left]
            arr[left] = arr[i]
            arr[i] = temp
            left++
        }
    }

    arr[e] = arr[left]
    arr[left] = pivot

    quickSortHelper(arr, s, left - 1)
    quickSortHelper(arr, left + 1, e)
}



quickSort([2, 7, 3, 2, 8, 9])
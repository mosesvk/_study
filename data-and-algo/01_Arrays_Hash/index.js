function merge(arr, s, m, e) {
  const L = arr.slice(s, m + 1) 
  const R = arr.slice(m + 1, e + 1)
  
  let l = 0
  let r = 0 
  let i = s

  while (l < L.length && r < R.length) {
    if (L[l] <= R[r]) {
        arr[i] = L[l]
        l++
    } else {
        arr[i] = R[r]
        r++
    }
    i++
  }

  while (l < L.length) {
    arr[i] = L[l]
    l++
    i++
  }

  while (r < R.length) {
    arr[i] = R[r]
    r++
    i++
  }
}

function sort(arr, l, r) {
  if (r - l + 1 <= 1) return arr;

  const m = Math.floor((l + r) / 2);

  sort(arr, l, m); // sort left half
  sort(arr, m + 1, r); // sort right half
  merge(arr, l, m, r); // merge sorted halfs

  return arr;
}

function mergeSort(arr) {
  console.log("before", arr);
  sort(arr, 0, arr.length - 1);
  console.log("after", arr);
  return arr;
}

mergeSort([3, 2, 4, 1, 6]);

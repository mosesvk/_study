const arr = [2, 7, 3, 1, 8, 9, 5, 11]


const mergeSort = (nums, l, r) => {
    
    if (l < r) {
        let m  = Math.floor((l + r) / 2)

        mergeSort(nums, l, m)
        mergeSort(nums, m+1, r)
        merge(nums, l, m, r)
    }

    return nums

}

const merge = (arr, l, m, r) => {
    
    let len1 = m - l + 1
    let len2 = r - m 

    let L = new Array(len1)
    let R = new Array(len2)

    for (let i = 0; i < len1; i++) {
        L[i] = arr[l + i]
    }
    for (let j = 0; j < len2; j++) {
        R[j] = arr[m + 1 + j]
    }

    console.log({L, R})
}

mergeSort(arr, 0, arr.length - 1)

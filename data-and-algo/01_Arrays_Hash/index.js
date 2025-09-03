const arr = [2, 4, 6, 8]
//                      --> [192, 96, 64, 48]

const solutionFunction = (nums) => {
    // [2, 4, 6, 8]
    const n = nums.length;
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        res[i] = nums[i -  1] * res[i - 1]
    }

    console.log(res);
    

    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    // return res          

    console.log(res);
    

    

}

solutionFunction(arr)
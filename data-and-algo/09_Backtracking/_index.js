const combinationSum = (nums, target) => {
    const res = []
    const sub = []
    this.backtrack(nums, target, 0, sub, res) 
    return res
}

const backtrack = (nums, t, i, sub, res) => {
        console.log({t, i, sub})
    if (t === 0) {
        res.push([...sub])
    } else if (t < 0 || i >= nums.length) {
        console.log('return')
        return 
    } else {
        sub.push(nums[i])
        this.backtrack(nums, t - nums[i], i, sub, res)
        sub.pop() 
        this.backtrack(nums, t, i + 1, sub, res)
    }
}
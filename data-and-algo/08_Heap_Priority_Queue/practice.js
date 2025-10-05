class MinHeap {
    constructor() {
        this.heap = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length === 0) return -1 
        if (this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._bubbleDown(0)

        return root
    }

    /**
     * @return {number}
     */
    top() {
        return this.heap.length > 0 ? this.heap[0] : -1
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [...nums]

        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this._bubbleDown(i)
        }
    }

    _bubbleDown(i) {
        let child = 2 * i + 1

        while (child < this.heap.length) { 
            if (child + 1 < this.heap.length && this.heap[child] > this.heap[child + 1]) child++

            if (this.heap[child] >= this.heap[i]) break 

            [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]]

            i = child
            child = 2 * (i + 1)
        }
    }

    _bubbleUp(i) {
        let parent = Math.floor((i - 1) / 2)

        while (i > 0 && this.heap[parent] > this.heap[i]) {
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]

            i = parent
            parent = Math.floor((i - 1) / 2)
        }
    }
}


const minH = new MinHeap()
minH.heapify([1,2,3,4,5])
console.log(minH)
minH.pop()
console.log(minH)
minH.pop()
console.log(minH)
minH.pop()
console.log(minH)
minH.pop()
console.log(minH)
minH.pop()
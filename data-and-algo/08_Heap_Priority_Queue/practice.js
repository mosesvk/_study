class MinHeap {
    constructor() {
        this.heap = []
    }

    push(val) {
        this.heap.push(val) 
        this._bubbleUp(this.heap.length - 1)
    }
    

    _bubbleUp(i) {
        let pt = Math.floor((i - 1) / 2)

        while (i > 0 && this.heap[pt] > this.heap[i]) {
            [this.heap[pt], this.heap[i]] = [this.heap[i], this.heap[pt]]

            i = pt
            pt = Math.floor((i - 1) / 2)
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
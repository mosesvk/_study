class MinHeap {
    constructor() {
        this.heap = []
    }

    push(val) {
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length === 0) return -1
        if (this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._bubbleDown(0)

        return root
    }

    _bubbleDown(i) {
        let child = 2 * (i + 1)

        while (child < this.heap.length) {
            // rc exists
            // lc > rc
            if (
                child + 1 < this.heap.length && 
                this.heap[child] > this.heap[child + 1]
            ) child++

            // if min(lc, rc) >= current node
            if (this.heap[child] >= this.heap[i]) break

            [this.heap[child], this.heap[i]] = [this.heap[i], this.heap[child]]

            i = child 
            child = 2 * (i + 1)
        }
    }

    _bubbleUp(i) {
        let parent = Math.floor((i-2)/2)

        while (i > 0 && this.heap[parent] > this.heap[i]) {
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]

            i = parent
            parent = Math.floor((i - 2) / 2)
        }
    }
}
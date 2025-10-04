/**
 * MinHeap Class Implementation.
 */
class MinHeap {
    constructor() {
        /** @private @type {number[]} */
        this.heap = [];
    }

    /**
     * Adds a value to the heap and then rearranges it so that it maintains the heap property.
     * @param {number} val - The value to add to the heap.
     */
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    /**
     * Removes the smallest value from the heap and returns it.
     * Rearranges the heap to maintain the heap property.
     * @returns {number} - The smallest value, or -1 if the heap is empty.
     */
    pop() {
        if (this.heap.length === 0) return -1;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);

        return root;
    }

    /**
     * Returns the smallest value from the heap without removing it.
     * @returns {number} - The smallest value, or -1 if the heap is empty.
     */
    top() {
        return this.heap.length > 0 ? this.heap[0] : -1;
    }

    /**
     * Converts an iterable into a valid heap.
     * @param {number[]} iterable - An iterable of numbers to heapify.
     */
    heapify(iterable) {
        this.heap = [...iterable];
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this._bubbleDown(i);
        }
    }

    /**
     * @private
     * Takes a node from the bottom row and moves it upwards until the heap property is restored.
     * @param {number} index - The index of the element to bubble up.
     */
    _bubbleUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [
                this.heap[index],
                this.heap[parent],
            ];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    /**
     * @private
     * Takes a node from the top and moves it downwards until the heap property is restored.
     * @param {number} index - The index of the element to bubble down.
     */
    _bubbleDown(index) {
        let child = 2 * index + 1; // left child
        while (child < this.heap.length) {
            // If the right child exists and is smaller than the left child, choose it.
            if (
                child + 1 < this.heap.length &&
                this.heap[child] > this.heap[child + 1]
            ) {
                child++;
            }

            // If the current value is smaller than its smallest child, we're done.
            if (this.heap[child] >= this.heap[index]) {
                break;
            }

            // Swap the current value with its smallest child.
            [this.heap[child], this.heap[index]] = [
                this.heap[index],
                this.heap[child],
            ];
            index = child;
            child = 2 * index + 1; // left child
        }
    }
}

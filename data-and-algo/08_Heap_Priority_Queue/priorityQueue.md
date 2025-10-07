---
alwaysApply: true
---

/**
 * Simple MaxPriorityQueue implementation using a binary heap.
 * Provides enqueue, dequeue, and size methods.
 */
class MaxPriorityQueue {
    constructor() {
        /** @private @type {number[]} */
        this.heap = [];
    }

    /**
     * Adds a value to the max heap.
     * @param {number} val - The value to add.
     */
    enqueue(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    /**
     * Removes and returns the maximum value from the heap.
     * @returns {number} - The maximum value, or undefined if empty.
     */
    dequeue() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return max;
    }

    /**
     * Returns the number of elements in the heap.
     * @returns {number}
     */
    size() {
        return this.heap.length;
    }

    /**
     * @private
     * Moves the element at index up to restore heap property.
     * @param {number} index
     */
    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] >= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    /**
     * @private
     * Moves the element at index down to restore heap property.
     * @param {number} index
     */
    _bubbleDown(index) {
        const n = this.heap.length;
        while (2 * index + 1 < n) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = left;
            if (right < n && this.heap[right] > this.heap[left]) {
                largest = right;
            }
            if (this.heap[index] >= this.heap[largest]) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }
}

/**
 * Simple MinPriorityQueue implementation using a binary heap.
 * Provides enqueue, dequeue, and size methods.
 */
class MinPriorityQueue {
    constructor() {
        /** @private @type {number[]} */
        this.heap = [];
    }

    /**
     * Adds a value to the min heap.
     * @param {number} val - The value to add.
     */
    enqueue(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    /**
     * Removes and returns the minimum value from the heap.
     * @returns {number} - The minimum value, or undefined if empty.
     */
    dequeue() {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return min;
    }

    /**
     * Returns the number of elements in the heap.
     * @returns {number}
     */
    size() {
        return this.heap.length;
    }

    /**
     * @private
     * Moves the element at index up to restore heap property.
     * @param {number} index
     */
    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    /**
     * @private
     * Moves the element at index down to restore heap property.
     * @param {number} index
     */
    _bubbleDown(index) {
        const n = this.heap.length;
        while (2 * index + 1 < n) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = left;
            if (right < n && this.heap[right] < this.heap[left]) {
                smallest = right;
            }
            if (this.heap[index] <= this.heap[smallest]) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

/**
 * Heap/Priority Queue - How to create heap structures in JS
 */

console.log("=== HEAP/PRIORITY QUEUE CREATION ===\n");

// 1. Simple Min Heap Class
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = leftChild;
            
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[leftChild]) {
                smallest = rightChild;
            }
            
            if (this.heap[index] <= this.heap[smallest]) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// 2. Using the heap
const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log("Min heap after insertions:", minHeap.heap);
console.log("Extract min:", minHeap.extractMin());
console.log("Heap after extraction:", minHeap.heap);

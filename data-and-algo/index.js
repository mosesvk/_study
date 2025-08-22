/**
 * Interactive REPL for practicing data structures and algorithms
 * Run with: node index.js
 */

const repl = require('repl');

// Import your data structure classes
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}

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

// Helper functions
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

function printList(head) {
    const values = [];
    let current = head;
    
    while (current && values.length < 20) { // Prevent infinite loops
        values.push(current.val);
        current = current.next;
    }
    
    console.log(values.join(' -> ') + (current ? ' -> ...' : ' -> null'));
}

function arrayToTree(arr) {
    if (!arr.length) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

// Start REPL
console.log('🚀 Data Structures & Algorithms Practice REPL Started!');
console.log('Available classes: ListNode, TreeNode, Stack, MinHeap');
console.log('Helper functions: createLinkedList(arr), printList(head), arrayToTree(arr)');
console.log('Example: let list = createLinkedList([1,2,3]); printList(list);');
console.log('Type .exit to quit\n');

const replServer = repl.start({
    prompt: 'algo> ',
    useColors: true,
    useGlobal: true
});

// Make classes and functions available in REPL
replServer.context.ListNode = ListNode;
replServer.context.TreeNode = TreeNode;
replServer.context.Stack = Stack;
replServer.context.MinHeap = MinHeap;
replServer.context.createLinkedList = createLinkedList;
replServer.context.printList = printList;
replServer.context.arrayToTree = arrayToTree;

// Some pre-created examples
replServer.context.exampleList = createLinkedList([1, 2, 3, 4, 5]);
replServer.context.exampleStack = new Stack();
replServer.context.exampleTree = arrayToTree([3, 9, 20, null, null, 15, 7]);
replServer.context.exampleHeap = new MinHeap();

console.log('Pre-loaded examples: exampleList, exampleStack, exampleTree, exampleHeap');
console.log('Ready to practice! 💪\n');

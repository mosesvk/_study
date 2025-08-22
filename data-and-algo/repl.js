/**
 * Interactive REPL for testing data structures
 * Run with: node repl.js
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

// Start REPL
console.log('🚀 Data Structures REPL Started!');
console.log('Available classes: ListNode, TreeNode, Stack');
console.log('Helper functions: createLinkedList(arr), printList(head)');
console.log('Example: let list = createLinkedList([1,2,3]); printList(list);');
console.log('Type .exit to quit\n');

const replServer = repl.start({
    prompt: 'ds> ',
    useColors: true,
    useGlobal: true
});

// Make classes and functions available in REPL
replServer.context.ListNode = ListNode;
replServer.context.TreeNode = TreeNode;
replServer.context.Stack = Stack;
replServer.context.createLinkedList = createLinkedList;
replServer.context.printList = printList;

// Some pre-created examples
replServer.context.exampleList = createLinkedList([1, 2, 3, 4, 5]);
replServer.context.exampleStack = new Stack();
replServer.context.exampleTree = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log('Pre-loaded examples: exampleList, exampleStack, exampleTree');

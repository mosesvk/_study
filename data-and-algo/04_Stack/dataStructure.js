/**
 * Stack - How to create a stack in JS
 */

console.log("=== STACK CREATION ===\n");

// 1. Simple Array as Stack
const stack = [];
stack.push(1);  // Add to top
stack.push(2);
stack.push(3);
console.log("Array stack:", stack);
console.log("Pop:", stack.pop());  // Remove from top
console.log("After pop:", stack);

// 2. Stack Class
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

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log("\nClass stack peek:", myStack.peek());
console.log("Class stack pop:", myStack.pop());
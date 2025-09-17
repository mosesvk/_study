/**
 * Interactive REPL for practicing data structures and algorithms
 * Run with: node index.js
 */

// @ts-nocheck
/* eslint-disable */

const repl = require('repl');

// Import your data structure classes
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
        } else {}
    }

    remove(val) {
        if (!this.head) return
        if (this.head.val === val) {
            this.head = this.head.next
        } else {}
        let current = this.head
        while (current.next) {
            if (current.next.val === val) {
                current.next = current.next.next
            }
            current = current.next
        }
    }

    search(val) {
        let current = this.head
        while (current) {
            if (current.val === val) return true
            current = current.next
        }
    }

    insert(val, index) {
        if (index < 0) return
        if (index === 0) {
            this.add(val)
        }
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.val)
        }
    }
}

// Helper functions

    

// Start REPL
console.log('🚀 Data Structures & Algorithms Practice REPL Started!');
console.log('Type .exit to quit\n');

const replServer = repl.start({
    prompt: 'algo> ',
    useColors: true,
    useGlobal: true
});

// Make classes and functions available in REPL
replServer.context.ListNode = Node




console.log('Ready to practice! 💪\n');

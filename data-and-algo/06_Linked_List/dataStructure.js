/**
 * Linked List - How to create a linked list in JS
 */

console.log("=== LINKED LIST CREATION ===\n");

// 1. Node Structure
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 2. Linked List Structure
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

    reverse() {
        let prev = null
        let current = this.head
        while (current) {
            const next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
        return this
    }   

    print() {
        let current = this.head
        while (current) {
            console.log(current.val)
        }
    }
}



// 3. Helper function to create from array
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

const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Created from array [1,2,3,4,5]:");
console.log("Head value:", list.val, "Next value:", list.next.val);
// console.log("List:", list);
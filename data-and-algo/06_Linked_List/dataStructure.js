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

// 2. Creating nodes manually
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

console.log("Manual linked list:");
console.log("Node 1:", node1.val, "-> Node 2:", node1.next.val, "-> Node 3:", node1.next.next.val);

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
/**
 * Trees - How to create tree structures in JS
 */

console.log("=== TREE CREATION ===\n");

// 1. Binary Tree Node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 2. Creating a simple binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Binary tree structure:");
console.log("Root:", root.val);
console.log("Left child:", root.left.val);
console.log("Right child:", root.right.val);
console.log("Left-left child:", root.left.left.val);

// 3. Helper function to create from array (level order)
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

const tree = arrayToTree([3, 9, 20, null, null, 15, 7]);
console.log("\nTree from array [3,9,20,null,null,15,7]:");
console.log("Root:", tree.val, "Left:", tree.left.val, "Right:", tree.right.val);

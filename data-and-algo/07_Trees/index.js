class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

// insert, findMinVal, remove

const insert = (root, val) => {
    if (!root) return new TreeNode(val)

    if (val > root.val) {
        root.right = insert(root.right, val)
    } else if (val < root.val) {
        root.left = insert(root.left, val)
    }
    return root
}

const findMinVal = (root) => {
    let cur = root

    while (cur && cur.left) {
        cur = cur.left
    }
    return cur
}

const remove = (root, val) => {
    if (!root) return null

    if (val > root.val) {
        root.right = remove(root.right, val)
    } else if (val < root.val) {
        root.left = remove(root.left, val)
    } else {
        if (!root.left) {
            return root.right
        } else if (!root.right) {
            return root.left
        } else {
            let minNode = findMinVal(root.right)
            root.val = minNode.val
            root.right = remove(root.right, minNode.val)
        }
    }

    return root
}
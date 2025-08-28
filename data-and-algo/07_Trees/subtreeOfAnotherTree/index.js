/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (root === null) {
            return '$#';
        }
        return (
            '$' +
            root.val +
            this.serialize(root.left) +
            this.serialize(root.right)
        );
    }

    /**
     * @param {string} s
     * @return {number[]}
     */
    z_function(s) {
        const z = new Array(s.length).fill(0);
        let l = 0,
            r = 0,
            n = s.length;

        //"$2$4$#$#$5$#$#|$1$2$4$#$#$5$#$#$3$#$#"
        
        for (let i = 1; i < n; i++) {
            if (i <= r) {
                z[i] = Math.min(r - i + 1, z[i - l]);
            }
            while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
                z[i]++;
            }
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }

    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const serialized_root = this.serialize(root);
        const serialized_subRoot = this.serialize(subRoot);
        const combined = serialized_subRoot + '|' + serialized_root;

        const z_values = this.z_function(combined);
        const sub_len = serialized_subRoot.length;

        for (let i = sub_len + 1; i < combined.length; i++) {
            if (z_values[i] === sub_len) {
                return true;
            }
        }
        return false;
    }
}
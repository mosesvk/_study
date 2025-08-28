/**
 * Comprehensive walkthrough of the Serialize and Pattern Matching method
 * for the Subtree of Another Tree problem
 * 
 * Example: Root = [1,2,3,4,5], SubRoot = [2,4,5]
 * Expected Output: true
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * Serialize a binary tree to a string representation
     * Uses preorder traversal with null markers
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        console.log(`🔄 Serializing node: ${root ? root.val : 'null'}`);
        
        if (root === null) {
            console.log(`   → Returning: '$#' (null marker)`);
            return '$#';
        }
        
        const result = '$' + root.val + 
                      this.serialize(root.left) + 
                      this.serialize(root.right);
        
        console.log(`   → Node ${root.val} serialized as: ${result}`);
        return result;
    }

    /**
     * Z-function for pattern matching
     * Computes longest prefix-suffix matches for each position
     * @param {string} s
     * @return {number[]}
     */
    z_function(s) {
        console.log(`\n🔍 Computing Z-function for: "${s}"`);
        console.log(`Length: ${s.length}`);
        
        const z = new Array(s.length).fill(0);
        let l = 0, r = 0, n = s.length;
        
        console.log(`\nInitial state:`);
        console.log(`z = [${z.join(', ')}]`);
        console.log(`l = ${l}, r = ${r}`);
        
        for (let i = 1; i < n; i++) {
            console.log(`\n--- Iteration i = ${i} ---`);
            console.log(`Character at position ${i}: '${s[i]}'`);
            console.log(`Current window [l, r] = [${l}, ${r}]`);
            
            if (i <= r) {
                const mirror = i - l;
                const remaining = r - i + 1;
                z[i] = Math.min(remaining, z[mirror]);
                console.log(`   i <= r, so we can use Z[${mirror}] = ${z[mirror]}`);
                console.log(`   remaining window = ${remaining}`);
                console.log(`   z[${i}] = min(${remaining}, ${z[mirror]}) = ${z[i]}`);
            } else {
                console.log(`   i > r, starting fresh comparison`);
            }
            
            // Extend the match
            let extensions = 0;
            while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
                console.log(`   Extension ${extensions + 1}: s[${z[i]}] = '${s[z[i]]}' === s[${i + z[i]}] = '${s[i + z[i]]}'`);
                z[i]++;
                extensions++;
            }
            
            if (extensions > 0) {
                console.log(`   Extended z[${i}] by ${extensions} to ${z[i]}`);
            } else if (i + z[i] < n) {
                console.log(`   No extension: s[${z[i]}] = '${s[z[i]]}' !== s[${i + z[i]}] = '${s[i + z[i]]}'`);
            }
            
            // Update window if we extended beyond current right boundary
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
                console.log(`   New window [l, r] = [${l}, ${r}]`);
            }
            
            console.log(`   z[${i}] = ${z[i]}`);
            console.log(`   Current z = [${z.slice(0, i + 1).join(', ')}${i + 1 < n ? ', ...' : ''}]`);
        }
        
        console.log(`\nFinal Z-array: [${z.join(', ')}]`);
        return z;
    }

    /**
     * Check if subRoot is a subtree of root using serialization + pattern matching
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        console.log(`🌳 Starting subtree check...`);
        
        // Step 1: Serialize both trees
        console.log(`\n=== STEP 1: SERIALIZATION ===`);
        
        console.log(`\n📝 Serializing SubRoot tree:`);
        const serialized_subRoot = this.serialize(subRoot);
        
        console.log(`\n📝 Serializing Root tree:`);
        const serialized_root = this.serialize(root);
        
        console.log(`\n📊 Serialization Results:`);
        console.log(`SubRoot serialized: "${serialized_subRoot}"`);
        console.log(`Root serialized:    "${serialized_root}"`);
        
        // Step 2: Create combined string for pattern matching
        console.log(`\n=== STEP 2: PATTERN MATCHING SETUP ===`);
        const combined = serialized_subRoot + '|' + serialized_root;
        console.log(`Combined string: "${combined}"`);
        console.log(`Pattern (subRoot): "${serialized_subRoot}"`);
        console.log(`Text (root):       "${serialized_root}"`);
        console.log(`Separator:         "|"`);
        
        // Step 3: Compute Z-function
        console.log(`\n=== STEP 3: Z-FUNCTION COMPUTATION ===`);
        const z_values = this.z_function(combined);
        const sub_len = serialized_subRoot.length;
        
        // Step 4: Check for pattern matches
        console.log(`\n=== STEP 4: PATTERN MATCH DETECTION ===`);
        console.log(`Looking for Z-values equal to pattern length: ${sub_len}`);
        console.log(`Checking positions from ${sub_len + 1} to ${combined.length - 1}`);
        
        for (let i = sub_len + 1; i < combined.length; i++) {
            console.log(`Position ${i}: Z[${i}] = ${z_values[i]} ${z_values[i] === sub_len ? '✅ MATCH!' : ''}`);
            if (z_values[i] === sub_len) {
                console.log(`\n🎉 Pattern found at position ${i}!`);
                console.log(`This means subRoot IS a subtree of root`);
                return true;
            }
        }
        
        console.log(`\n❌ No complete pattern match found`);
        console.log(`SubRoot is NOT a subtree of root`);
        return false;
    }
}

// Create the example trees from the image
function createExampleTrees() {
    console.log(`🏗️  Building example trees from the image...`);
    
    // Root tree: [1,2,3,4,5]
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    
    // SubRoot tree: [2,4,5]
    //     2
    //    / \
    //   4   5
    const subRoot = new TreeNode(2);
    subRoot.left = new TreeNode(4);
    subRoot.right = new TreeNode(5);
    
    console.log(`Root tree structure:`);
    console.log(`       1`);
    console.log(`      / \\`);
    console.log(`     2   3`);
    console.log(`    / \\`);
    console.log(`   4   5`);
    
    console.log(`\nSubRoot tree structure:`);
    console.log(`     2`);
    console.log(`    / \\`);
    console.log(`   4   5`);
    
    return { root, subRoot };
}

// Run the complete walkthrough
function runWalkthrough() {
    console.log(`🚀 SERIALIZE AND PATTERN MATCHING WALKTHROUGH`);
    console.log(`=`.repeat(60));
    
    const { root, subRoot } = createExampleTrees();
    const solution = new Solution();
    
    const result = solution.isSubtree(root, subRoot);
    
    console.log(`\n🏁 FINAL RESULT: ${result}`);
    console.log(`Expected: true`);
    console.log(`✅ ${result === true ? 'CORRECT!' : 'INCORRECT!'}`);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Solution, TreeNode, runWalkthrough };
}

// Run if this file is executed directly
if (typeof require !== 'undefined' && require.main === module) {
    runWalkthrough();
}

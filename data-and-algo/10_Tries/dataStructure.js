/**
 * Trie - How to create a trie data structure in JS
 */

console.log("=== TRIE CREATION ===\n");

// 1. Trie Node
class TrieNode {
    constructor() {
        this.children = {};  // or new Map()
        this.isEndOfWord = false;
    }
}

// 2. Trie Class
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
    
    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }
    
    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

// 3. Using the Trie
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log("Search 'app':", trie.search("app"));        // true
console.log("Search 'apple':", trie.search("apple"));    // true
console.log("Search 'appl':", trie.search("appl"));      // false
console.log("Starts with 'app':", trie.startsWith("app")); // true

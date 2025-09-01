# Valid Anagram

## Problem Statement
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**
````
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**
```
Input: s = "rat", t = "car"
Output: false
```

## Solution Approaches

### Method 1: Sorting Approach

Sort both strings and compare if they are equal.

#### Visual Explanation

```
Example 1: s = "anagram", t = "nagaram"

Step 1: Sort both strings
s = "anagram" → sort → "aaagmnr"
t = "nagaram" → sort → "aaagmnr"

Step 2: Compare
"aaagmnr" === "aaagmnr" → true ✓

Example 2: s = "rat", t = "car"

Step 1: Sort both strings  
s = "rat" → sort → "art"
t = "car" → sort → "acr"

Step 2: Compare
"art" !== "acr" → false ✗

Character frequency visualization:
"anagram": a(3), n(1), g(1), r(1), m(1)
"nagaram": a(3), n(1), g(1), r(1), m(1)
Same frequencies → Anagram ✓

"rat": r(1), a(1), t(1)  
"car": c(1), a(1), r(1)
Different characters → Not anagram ✗
```

#### Implementation

```javascript
/**
 * Sorting approach - sort both strings and compare
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) or O(n) depending on sort implementation
 * 
 * @param {string} s - First string
 * @param {string} t - Second string
 * @return {boolean} - True if t is anagram of s
 */
function isAnagramSorting(s, t) {
    // Early return if lengths are different
    if (s.length !== t.length) {
        return false;
    }
    
    // Sort both strings and compare
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}
```

### Method 2: Character Frequency Array

Use an array to count character frequencies (works for lowercase letters).

#### Visual Explanation

```
s = "anagram", t = "nagaram"

Step 1: Count characters in s
freq array (26 positions for a-z):
a b c d e f g h i j k l m n o p q r s t u v w x y z
3 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0
↑           ↑     ↑ ↑         ↑
a(3)        g(1)  m(1) n(1)   r(1)

Step 2: Subtract characters in t
For each char in "nagaram":
n: freq[13]-- → freq[13] = 0
a: freq[0]--  → freq[0] = 2  
g: freq[6]--  → freq[6] = 0
a: freq[0]--  → freq[0] = 1
r: freq[17]-- → freq[17] = 0
a: freq[0]--  → freq[0] = 0
m: freq[12]-- → freq[12] = 0

Final freq array: all zeros → Anagram ✓

Visual representation:
Initial:  [3,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0]
After t:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
```

#### Implementation

```javascript
/**
 * Character frequency array approach (for lowercase letters only)
 * Time Complexity: O(n)
 * Space Complexity: O(1) - fixed size array of 26
 * 
 * @param {string} s - First string
 * @param {string} t - Second string  
 * @return {boolean} - True if t is anagram of s
 */
function isAnagramFrequencyArray(s, t) {
    // Early return if lengths are different
    if (s.length !== t.length) {
        return false;
    }
    
    // Array to count character frequencies (a-z)
    const freq = new Array(26).fill(0);
    
    // Count characters in s and subtract characters in t
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;  // 'a' has ASCII 97
        freq[t.charCodeAt(i) - 97]--;
    }
    
    // Check if all frequencies are zero
    return freq.every(count => count === 0);
}
```

### Method 3: Hash Map Approach (Most Flexible)

Use a Map to count character frequencies - works with any characters.

#### Visual Explanation

```
s = "anagram", t = "nagaram"

Step 1: Build frequency map for s
charMap = {}
a: charMap['a'] = 3
n: charMap['n'] = 1  
g: charMap['g'] = 1
r: charMap['r'] = 1
m: charMap['m'] = 1

charMap = {a: 3, n: 1, g: 1, r: 1, m: 1}

Step 2: Decrement for each character in t
n: charMap['n']-- → charMap['n'] = 0
a: charMap['a']-- → charMap['a'] = 2
g: charMap['g']-- → charMap['g'] = 0  
a: charMap['a']-- → charMap['a'] = 1
r: charMap['r']-- → charMap['r'] = 0
a: charMap['a']-- → charMap['a'] = 0
m: charMap['m']-- → charMap['m'] = 0

Final charMap = {a: 0, n: 0, g: 0, r: 0, m: 0}
All values are 0 → Anagram ✓

Alternative visualization:
s: "anagram" → {a:3, n:1, g:1, r:1, m:1}
t: "nagaram" → {n:1, a:3, g:1, r:1, m:1}  
Same frequency maps → Anagram ✓
```

#### Implementation

```javascript
/**
 * Hash Map approach - most flexible, works with any characters
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is number of unique characters
 * 
 * @param {string} s - First string
 * @param {string} t - Second string
 * @return {boolean} - True if t is anagram of s
 */
function isAnagram(s, t) {
    // Early return if lengths are different
    if (s.length !== t.length) {
        return false;
    }
    
    const charMap = new Map();
    
    // Count characters in s
    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    // Decrement for characters in t
    for (const char of t) {
        if (!charMap.has(char)) {
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
        if (charMap.get(char) === 0) {
            charMap.delete(char);
        }
    }
    
    // Map should be empty if strings are anagrams
    return charMap.size === 0;
}
```

### Method 4: Two Hash Maps Comparison

Build frequency maps for both strings and compare them.

#### Visual Explanation

```
s = "anagram", t = "nagaram"

Build map for s:
mapS = {a: 3, n: 1, g: 1, r: 1, m: 1}

Build map for t:  
mapT = {n: 1, a: 3, g: 1, r: 1, m: 1}

Compare maps:
Both have same keys with same values → Anagram ✓

For non-anagram:
s = "rat" → mapS = {r: 1, a: 1, t: 1}
t = "car" → mapT = {c: 1, a: 1, r: 1}

Different keys (t vs c) → Not anagram ✗
```

#### Implementation

```javascript
/**
 * Two hash maps approach - build and compare frequency maps
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is number of unique characters
 * 
 * @param {string} s - First string
 * @param {string} t - Second string
 * @return {boolean} - True if t is anagram of s
 */
function isAnagramTwoMaps(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    /**
     * Helper function to build character frequency map
     * @param {string} str - Input string
     * @return {Map} - Character frequency map
     */
    const buildFreqMap = (str) => {
        const map = new Map();
        for (const char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        return map;
    };
    
    /**
     * Helper function to compare two maps
     * @param {Map} map1 - First map
     * @param {Map} map2 - Second map  
     * @return {boolean} - True if maps are equal
     */
    const mapsEqual = (map1, map2) => {
        if (map1.size !== map2.size) return false;
        
        for (const [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }
        return true;
    };
    
    const mapS = buildFreqMap(s);
    const mapT = buildFreqMap(t);
    
    return mapsEqual(mapS, mapT);
}
```

## Comparison of Approaches

| Approach | Time Complexity | Space Complexity | Pros | Cons |
|----------|----------------|------------------|------|------|
| Sorting | O(n log n) | O(1)* | Simple, intuitive | Slower than optimal |
| Frequency Array | O(n) | O(1) | Fast, optimal time | Only works for lowercase a-z |
| Hash Map (Single) | O(n) | O(k) | Optimal, flexible | Slightly more complex |
| Two Hash Maps | O(n) | O(k) | Clear logic, easy to understand | Uses more space |

*O(1) if we can modify input, O(n) for copying strings

## Visual Pattern Recognition

```
Anagram Pattern:
Same characters, same frequencies, different order

"listen" vs "silent"
l-i-s-t-e-n → sorted: e-i-l-n-s-t
s-i-l-e-n-t → sorted: e-i-l-n-s-t
Same sorted result → Anagram ✓

Character frequency view:
"listen": e(1), i(1), l(1), n(1), s(1), t(1)
"silent": e(1), i(1), l(1), n(1), s(1), t(1)  
Same frequencies → Anagram ✓
```

## Key Insights

1. **Length Check**: Always check lengths first - different lengths can't be anagrams
2. **Frequency Counting**: Anagrams have identical character frequencies
3. **Space vs Time**: Array approach saves space but limits character set
4. **Flexibility**: Hash Map approach works with any characters (Unicode, symbols, etc.)

## Test Cases

```javascript
// Test all implementations
const testCases = [
    ["anagram", "nagaram"],  // true
    ["rat", "car"],          // false
    ["listen", "silent"],    // true
    ["hello", "bello"],      // false
    ["", ""],                // true (empty strings)
    ["a", "a"],              // true
    ["ab", "ba"],            // true
    ["abc", "def"]           // false
];

testCases.forEach(([s, t]) => {
    console.log(`"${s}" vs "${t}"`);
    console.log(`Sorting: ${isAnagramSorting(s, t)}`);
    console.log(`Frequency Array: ${isAnagramFrequencyArray(s, t)}`);
    console.log(`Hash Map: ${isAnagram(s, t)}`);
    console.log(`Two Maps: ${isAnagramTwoMaps(s, t)}`);
    console.log('---');
});
```

## When to Use Each Approach

- **Hash Map (Single)**: Most interviews and production code (optimal + flexible)
- **Frequency Array**: When you know input is only lowercase letters and want max performance
- **Sorting**: When you want simple, readable code and performance isn't critical
- **Two Hash Maps**: When you want very clear, easy-to-understand logic

## Edge Cases to Consider

1. **Empty Strings**: `("", "")` → `true`
2. **Single Character**: `("a", "a")` → `true`, `("a", "b")` → `false`
3. **Different Lengths**: Always `false`
4. **Case Sensitivity**: `("A", "a")` → `false` (unless you convert to lowercase)
5. **Unicode Characters**: Hash Map approach handles these, others may not

## Follow-up Questions

1. **What if inputs contain Unicode characters?** → Use Hash Map approach
2. **What if we need to ignore case?** → Convert to lowercase first
3. **What if we need to ignore spaces/punctuation?** → Filter characters first
4. **What about very long strings?** → Hash Map approach with early termination is best

/**
 * Arrays & Hash - How to create these data structures in JS
 */

console.log("=== ARRAYS ===\n");

// 1. Array Creation - Different Ways
const arr1 = [1, 2, 3, 4, 5];  // Literal notation (most common)
console.log("Array literal:", arr1);

const arr2 = new Array(5).fill(0);  // Array with size, filled with zeros
console.log("Array with fill:", arr2);

// 2D Array for matrix problems
const matrix = Array.from({length: 3}, () => Array(3).fill(0));
console.log("2D Array:", matrix);

console.log("\n=== HASH MAPS/OBJECTS ===\n");

// 1. Object (Hash Map)
const hash = {};
hash['key'] = 'value';
console.log("Object:", hash);

// 2. Map (better for non-string keys)
const map = new Map();
map.set('key1', 'value1');
map.set(1, 'number key');
console.log("Map:", map);

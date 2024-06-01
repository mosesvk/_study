// 1. Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

const same = () => {
   
}

// 2. Check if the lengths of the two arrays are equal. If not, return false because arrays with different lengths cannot have the same frequency of values.
// 3. Create two frequency counter objects, one for each array. These objects will store the count of each unique value in the respective arrays.
// 4. Loop through one frequency counter object (either one, since they should have the same unique keys) and for each key:
    // 5. Check if the square of the key exists in the other frequency counter object.
    // 6. If it does not exist or if the count of the squared key doesn't match the count of the original key, return false.
// 7. If the loop completes without returning false, return true.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)



// 2. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// There is a good way (O(n)) but there is a slightly better way to decrease the Space complexity to O(1)
const validAnagram = (str1, str2) => {

}

// Test cases
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
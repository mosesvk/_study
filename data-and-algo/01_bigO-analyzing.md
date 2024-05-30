<details open>
<summary>What is Big O? Why is it important?</summary>

>
><details>
><summary>Answer</summary>
>
>```markdown
>Big O notation is a mathematical concept used in computer science to describe the performance or complexity of an algorithm. It specifically measures the worst-case scenario in terms of time (how long an algorithm takes to run) and space (how much memory an algorithm uses) as the input size grows.
>
>Understanding Big O notation is important because it allows developers to:
>- **Predict Performance**: Evaluate how an algorithm will scale with increasing input sizes.
>- **Optimize Code**: Identify potential bottlenecks and optimize code for better performance.
>- **Compare Algorithms**: Make informed decisions when choosing between different algorithms and data structures.
>
>**Benefits**:
>- **Efficiency**: Write efficient code that performs well with large datasets.
>- **Resource Management**: Optimize resource usage, such as time and memory.
>- **Scalability**: Ensure that applications can handle growth in data and users.
>```
>
></details>

</details>


<details open>
<summary>Four main ways to define bigO. Explain each with coding examples</summary>

>
><details>
><summary>Answer</summary>
>
>![alt text](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)
>
>```markdown
>Big O notation provides a standardized way to describe the efficiency of algorithms by expressing the upper bound of their time or space complexity in terms of the input size. There are four main ways to define Big O notation:
>
>1. **Constant Time (O(1))**: Describes algorithms with constant runtime, regardless of the input size.
>   ```javascript
>   function printFirstElement(array) {
>       console.log(array[0]);
>   }
>   ```
>   No matter how large the array is, accessing the first element takes the same amount of time.
>
>2. **Linear Time (O(n))**: Describes algorithms where the runtime grows linearly with the size of the input.
>   ```javascript
>   function printAllElements(array) {
>       for (let i = 0; i < array.length; i++) {
>           console.log(array[i]);
>       }
>   }
>   ```
>   As the size of the array increases, the number of iterations in the loop also increases proportionally.
>
>3. **Quadratic Time (O(n^2))**: Describes algorithms where the runtime grows quadratically with the size of the input.
>   ```javascript
>   function printAllPairs(array) {
>       for (let i = 0; i < array.length; i++) {
>           for (let j = 0; j < array.length; j++) {
>               console.log(array[i], array[j]);
>           }
>       }
>   }
>   ```
>   For each element in the array, we iterate through the array again, resulting in a quadratic increase in runtime.
>
>4. **Logarithmic Time (O(log n))**: Describes algorithms where the runtime grows logarithmically with the size of the input.
>   ```javascript
>   function binarySearch(array, target) {
>       let low = 0;
>       let high = array.length - 1;
>       while (low <= high) {
>           let mid = Math.floor((low + high) / 2);
>           if (array[mid] === target) return mid;
>           if (array[mid] < target) low = mid + 1;
>           else high = mid - 1;
>       }
>       return -1;
>   }
>   ```
>   In binary search, with each comparison, we eliminate half of the remaining elements, leading to a logarithmic increase in runtime.
>```
>
></details>

</details>

<details open>
<summary>Big O of Objects</summary>

>
>Insertion? Removal? Searching? Access?
>
><details>
>  <summary>Answers</summary>
>  <ul>
>    <li>
>      <strong>Insertion:</strong> O(1)
>      <p>Adding a new property to an object has a constant time complexity of O(1) because it involves simply assigning a value to a key.</p>
>    </li>
>    <li>
>      <strong>Removal:</strong> O(1)
>      <p>Removing a property from an object also has a constant time complexity of O(1), as it involves deleting a key-value pair from the object.</p>
>    </li>
>    <li>
>      <strong>Searching:</strong> O(n)
>      <p>Searching for a property (checking if a property exists) in an object has a linear time complexity of O(n) in the worst case, where n is the number of properties in the object. This is because in the worst case, you might need to check each property.</p>
>    </li>
>    <li>
>      <strong>Access:</strong> O(1)
>      <p>Accessing a property (getting the value associated with a key) in an object has a constant time complexity of O(1) because it involves looking up the key directly.</p>
>    </li>
>  </ul>
></details>

</details>

<details open>
<summary>Big O of Object Methods</summary>

>
>Object.keys? Object.values? Object.entries? hasOwnProperty
>
><details>
>  <summary>Answers</summary>
>  <ul>
>    <li>
>      <strong>Object.keys:</strong> O(n)
>      <p>Object.keys() returns an array of a given object's own enumerable property names. The time complexity is O(n) because it needs to iterate through all the properties of the object.</p>
>    </li>
>    <li>
>      <strong>Object.values:</strong> O(n)
>      <p>Object.values() returns an array of a given object's own enumerable property values. The time complexity is O(n) because it needs to iterate through all the properties of the object.</p>
>    </li>
>    <li>
>      <strong>Object.entries:</strong> O(n)
>      <p>Object.entries() returns an array of a given object's own enumerable property [key, value] pairs. The time complexity is O(n) because it needs to iterate through all the properties of the object.</p>
>    </li>
>    <li>
>      <strong>hasOwnProperty:</strong> O(1)
>      <p>hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property (not inherited). The time complexity is O(1) because it checks directly for the property on the object.</p>
>    </li>
>  </ul>
></details>

</details>


<details open>
<summary>When to use Arrays vs Objects in terms of Big O</summary>

>
><details>
>  <summary>Answers</summary>
>  <ul>
>    <li>
>      <strong>Arrays:</strong>
>      <p>Arrays are generally used when the order of elements matters and you need to access elements by their index. Here are some common operations and their time complexities for arrays:</p>
>      <ul>
>        <li><strong>Access:</strong> O(1) - Accessing an element by its index is constant time.</li>
>        <li><strong>Insertion:</strong> O(n) - Inserting an element in the middle or beginning requires shifting elements, which takes linear time. Inserting at the end (push) is O(1) unless it involves resizing the array.</li>
>        <li><strong>Removal:</strong> O(n) - Removing an element from the middle or beginning requires shifting elements, which takes linear time. Removing from the end (pop) is O(1).</li>
>        <li><strong>Searching:</strong> O(n) - Searching for an element requires checking each element, which takes linear time.</li>
>      </ul>
>    </li>
>    <li>
>      <strong>Objects:</strong>
>      <p>Objects are typically used when you need to store data as key-value pairs and the order does not matter. Here are some common operations and their time complexities for objects:</p>
>      <ul>
>        <li><strong>Access:</strong> O(1) - Accessing a value by its key is constant time.</li>
>        <li><strong>Insertion:</strong> O(1) - Adding a new key-value pair is constant time.</li>
>        <li><strong>Removal:</strong> O(1) - Removing a key-value pair is constant time.</li>
>        <li><strong>Searching:</strong> O(n) - Searching for a key requires checking each key, which takes linear time.</li>
>      </ul>
>    </li>
>    <li>
>      <strong>When to Use Arrays:</strong>
>      <p>Use arrays when you need an ordered collection of items and require fast access by index. Examples include lists, queues, and stacks.</p>
>    </li>
>    <li>
>      <strong>When to Use Objects:</strong>
>      <p>Use objects when you need to associate values with keys and the order of items is not important. Examples include dictionaries, maps, and configurations.</p>
>    </li>
>  </ul>
></details>

</details>

<details open>
<summary>all main array methods explained in general and in terms of BigO</summary>

><details>
>  <summary>Explanation</summary>
>  <p>
>    Array methods in JavaScript are functions that can be called on arrays to perform various operations such as adding, removing, or modifying elements. They are essential for manipulating arrays efficiently in web development.
>  </p>
></details>
>
><details>
>  <summary>Big O Complexity</summary>
>  <ul>
>    <li><strong>Push:</strong> O(1) - Appending an element to the end of the array takes constant time.</li>
>    <li><strong>Pop:</strong> O(1) - Removing the last element from the array also takes constant time.</li>
>    <li><strong>Shift:</strong> O(n) - Removing the first element from the array requires shifting all other elements, resulting in a linear time complexity.</li>
>    <li><strong>Unshift:</strong> O(n) - Adding an element to the beginning of the array requires shifting all other elements, resulting in a linear time complexity.</li>
>    <li><strong>Concat:</strong> O(n) - Concatenating two arrays creates a new array with the combined elements, resulting in a linear time complexity.</li>
>    <li><strong>Splice:</strong> O(n) - Modifying an array by adding or removing elements at specific positions requires shifting elements, resulting in a linear time complexity.</li>
>    <li><strong>Slice:</strong> O(n) - Creating a new array by extracting a portion of an existing array involves copying the elements, resulting in a linear time complexity.</li>
>    <li><strong>Sort:</strong> O(n log n) - Sorting the elements of an array using a comparison-based algorithm typically has a time complexity of O(n log n).</li>
>    <li><strong>Filter, Map, Reduce, forEach:</strong> O(n) - These methods iterate over each element of the array once, resulting in a linear time complexity.</li>
>    <li><strong>Find, FindIndex:</strong> O(n) - These methods search for an element in the array, resulting in a linear time complexity in the worst case.</li>
>    <li><strong>Includes:</strong> O(n) - Checking if an array includes a certain element requires iterating over the array, resulting in a linear time complexity in the worst case.</li>
>    <li><strong>Every, Some:</strong> O(n) - These methods check whether all or some elements of the array satisfy a given condition, resulting in a linear time complexity.</li>
>    <li><strong>Reverse:</strong> O(n) - Reversing the elements of an array involves swapping elements, resulting in a linear time complexity.</li>
>    <li><strong>CopyWithin:</strong> O(n) - Copying a sequence of elements within the array requires shifting elements, resulting in a linear time complexity.</li>
>    <li><strong>Fill:</strong> O(n) - Filling elements of an array with a static value involves iterating over the array, resulting in a linear time complexity.</li>
>    <li><strong>Join:</strong> O(n) - Joining elements of an array into a string involves iterating over the array, resulting in a linear time complexity.</li>
>  </ul>
></details>

</details>


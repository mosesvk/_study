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

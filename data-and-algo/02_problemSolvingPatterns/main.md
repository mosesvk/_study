<details open>
<summary>What is an algorithm? Why are they important in web development?</summary>

>
><details>
>  <summary>Answers</summary>
>    
> An algorithm is a step-by-step procedure for solving a problem or performing a task. 
>
> Algorithms are crucial in web development because they optimize performance, solve complex problems efficiently, and enhance user experience by enabling features like search functionality and real-time updates.
></details>

</details>

---

### Solving Patterns

<details open>
<summary>Frequency Counters Pattern</summary>

>
><details>
>  <summary>Answers</summary>
>
>This pattern uses objects or sets to collect values/frequencies of values
>
>This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
>
>
></details>
>
><details>
>  <summary>Example #1</summary>
>
>Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
>
><details>
>  <summary>Answer</summary>
>
>```javascript
>function same(arr1, arr2) {
>  if (arr1.length !== arr2.length) {
>    return false;
>  }
>  
>  let frequencyCounter1 = {};
>  let frequencyCounter2 = {};
>
>  for (let val of arr1) {
>    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
>  }
>
>  for (let val of arr2) {
>    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
>  }
>
>  for (let key in frequencyCounter1) {
>    if (!(key ** 2 in frequencyCounter2)) {
>      return false;
>    }
>    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
>      return false;
>    }
>  }
>  
>  return true;
>}
>```
>
></details>
>
>
></details>

</details>
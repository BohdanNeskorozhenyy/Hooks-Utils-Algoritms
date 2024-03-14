| Property          | Quick Sort | Merge Sort          | Selection Sort    | Bubble Sort       | Insertion Sort    |
|-------------------|------------|---------------------|-------------------|-------------------|-------------------|
| Stability         | Unstable   | Stable              | Unstable          | Stable            | Stable            |
| Execution Place   | In-place   | Requires extra memory | In-place         | In-place          | In-place          |
| Complexity (Big O)| O(n log n) | O(n log n)          | O(n^2)            | O(n^2)            | O(n^2)            |
| Average Case      | O(n log n) | O(n log n)          | O(n^2)            | O(n^2)            | O(n^2)            |
| Best Case         | O(n log n) | O(n log n)          | O(n^2)            | O(n)              | O(n)              |
| Worst Case        | O(n log n) | O(n)                | O(n^2)            | O(n)              | O(1)              |
| Space             | O(log n)   | O(n)                | O(1)              | O(1)              | O(1)              |
| Best Used For     | Large datasets where speed is crucial and possible minimal use of additional memory | Large datasets that do not fit in memory, or when sorting stability is required | Small arrays where simplicity of implementation is favored over efficiency | Small datasets or when data is already nearly sorted. Easy to implement | Small or nearly sorted datasets, where simplicity is preferred, and for partially ordered data |


**Stability Explanation:**

- **Stable**: : A sorting algorithm is considered stable if it preserves the relative order of equal elements in the sorted sequence. This means that if two elements have the same value, the algorithm ensures that their original order is maintained in the sorted array. In other words, if element A appears before element B in the input array and both have the same value, then after sorting, element A will still appear before element B in the sorted array.
  
- **Unstable**: On the other hand, an unstable sorting algorithm may change the relative order of equal elements in the sorted sequence. This means that if two elements have the same value, the algorithm does not guarantee that their original order will be preserved in the sorted array. As a result, after sorting, the relative positions of equal elements may be different from their original positions in the input array.

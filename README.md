## The draft was created while reading the book "Grokking Algorithms. An Illustrated Guide for Programmers and Other Curious"

 - [Algoritms](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms)
    - [Binary Search](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/list-search/binary-search)
    - [Linear search](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/list-search/linear-search)
    - [Bubble Sort](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/sort/bubble-sort)
    - [Heap Sort](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/sort/heap)
    - [Insertion Sort](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/sort/insertion-sort)
    - [Merge Sort](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/sort/merge-sort)
    - [Quick Sort](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/sort/quick-sort)
    - [Selection Sort](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/algoritms/sort/selection-sort)
 - [Data strucrure](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure)
    - [Binary Search Tree](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/binary-search-tree)
    - [Doubly linked list](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/doubly-linked-list)
    - [Graph](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/graph)
    - [Hash Table](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/hash-table)
    - [Binary Heap](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/max-binary-heap)
    - [Priority Queue](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/priority-queue)
    - [Queue](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/queue)
    - [Singly linked list](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/singly-linked-list)
    - [Stack](https://github.com/neskor-b/Algoritms-and-data-structure/tree/main/src/data-strucrure/stack)

### Big O
![Logarithmic-time-complexity-blog-1](https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/131f70b1-0b83-4456-b9db-5dfe770eedac)

#### Constants don't matter

The principle that constants in the Big O notation don't matter focuses on the growth rate of an algorithm's execution time as the size of its input increases, disregarding constant factors and lower-order terms. Here are some examples illustrating this principle:

- **7n + 2:** O(n)
  - Explanation: The constant factors 7 and 2 are ignored; the time complexity grows linearly with n.
- **3n^2 + 10n + 5:** O(n^2)
  - Explanation: Only the highest order term n^2 is considered; linear and constant terms are ignored.
- **4log(n) + 10:** O(log n)
  - Explanation: The constant 4 and the addition of 10 are ignored; the growth rate is logarithmic in n.
- **5n log(n) + 20:** O(n log n)
  - Explanation: Only the highest order term n log(n) is considered; the constant factor and addition are ignored.
- **2^3n + 1000n^2:** O(2^n)
  - Explanation: The exponential term 2^n dominates, making the polynomial term n^2 and the constants irrelevant.
- **n^3/2 + 1/2n^2:** O(n^3)
  - Explanation: The cubic term n^3 dominates over the quadratic term n^2; constants and coefficients are ignored.

This simplification in analysis allows focusing on the most significant factor affecting the algorithm's scalability and performance.

#### Space Complexity

- Most primitives **(boolean, numbers, undefined, null)** are constant space
- Strings require **O(n)** space (where n is the string length)
- Reference types generally **O(n)**, where **n** is the **length** (for arrays) or the **number of keys** (for object)

#### Logarithm 
in algoritms `base` always is 2 (`log(n)`)
because `base` is a constant and we know than **Constants don't matter**


![62](https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/4b519616-bcab-4a29-9021-fd944f45ee26)
![1_2sKirKcf34bqXQbHhIyHQA](https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/7f811fe5-feba-478e-ab77-66a186ccb090)







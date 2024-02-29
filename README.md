## The draft was created while reading the book "Grokking Algorithms. An Illustrated Guide for Programmers and Other Curious"

### Big O
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
**`log2(value) = exponent` implies that `2^exponent = value`**

![logarithms](https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/a30ef30e-63fb-455f-8f5a-1fa31b83afe8)







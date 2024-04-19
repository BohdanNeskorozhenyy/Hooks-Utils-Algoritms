## Hash Table

| Complexity | Big O        |
| ---------- | ------------ |
| Insertion  | O(1)         |
| Removal    | O(1)         |
| Searching  | O(1)         |


## Description

A hash table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array where the desired value can be found. This allows for efficient retrieval of data, with average time complexity for insertion, deletion, and lookup operations being O(1). However, in the worst case, these operations can degrade to O(n) if there are many collisions. To mitigate collisions, techniques such as chaining or open addressing can be employed. Overall, hash tables are widely used in various applications due to their speed and versatility in managing data.

![image](https://www.tutorialspoint.com/data_structures_algorithms/images/hash_function.jpg)

## Key Features

- **Efficient Data Retrieval**: Hash tables offer fast retrieval of data, with an average time complexity of O(1) for insertion, deletion, and lookup operations.
- **Hashing**: They employ a hash function to map keys to indexes in an array, facilitating quick access to values associated with keys.
- **Dynamic Sizing**: Hash tables can dynamically resize themselves to accommodate changes in the number of stored elements, ensuring optimal performance.
- **Collision Handling**: Techniques such as chaining or open addressing are used to handle collisions that may occur when multiple keys hash to the same index.
- **Versatility**: Hash tables are versatile data structures used in a wide range of applications, including database indexing, caching, symbol tables in compilers, and more.

# Binary Search Tree

| Complexity | Big O        |
| ---------- | ------------ |
| Insertion  | O(log n)     |
| Removal    | O(log n)     |
| Searching  | O(log n)     |


A binary search tree (BST) is a hierarchical data structure commonly used to organize data for efficient searching, insertion, and deletion operations. In a BST, each node has at most two children: a left child and a right child. The key property of a BST is that for every node, all elements in its left subtree are less than its value, and all elements in its right subtree are greater. This property enables fast searching as it allows for logarithmic time complexity for most operations

![Binary Search Tree Illustration](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/400px-Binary_search_tree.svg.png)


## Key Features

- **Sorted Structure**: Nodes are organized in a sorted order where each node's value is greater than all values in its left subtree and less than all values in its right subtree.
- **Efficient Search**: Binary search trees allow for efficient searching operations, typically with logarithmic time complexity, due to their sorted nature.
- **Dynamic Structure**: BSTs can dynamically adjust their structure to accommodate insertion and deletion operations while maintaining their sorted property.
- **Balancing**: Some BST implementations include mechanisms for balancing the tree to ensure optimal performance, such as AVL trees or red-black trees.
- **Versatility**: Binary search trees are versatile data structures used in various applications like symbol tables, database indexing, and implementing dynamic sets and maps.


## Usage Cases

1. **Symbol Tables**: BSTs are commonly used to implement symbol tables in compilers, interpreters, and text editors, where efficient searching and insertion of symbols (e.g., variables, functions) are required.

2. **Database Indexing**: BSTs can be utilized for indexing in databases, enabling fast retrieval of data based on indexed keys. They are particularly useful in scenarios where the data needs to be sorted or searched efficiently.

3. **Dynamic Sets and Maps**: BSTs can serve as the underlying data structure for implementing dynamic sets and maps, providing efficient operations such as adding, removing, and searching for elements.

4. **File System Organization**: Binary search trees can be employed in file systems to efficiently organize directory structures, facilitating quick lookup and traversal of files and directories.

5. **Range Queries**: BSTs can be used to efficiently perform range queries, such as finding all elements within a given range, by leveraging their sorted nature and traversal algorithms.

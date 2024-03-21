## Singly linked list

| Complexity | Big O        |
| ---------- | ------------ |
| Insertion  | O(1)         |
| Removal    | O(1) or O(n) |
| Searching  | O(n)         |
| Access     | O(n)         |


A Singly Linked List is a fundamental data structure in computer science used to store a sequence of elements. Each element, called a node, consists of two parts: the data itself, and a reference (or link) to the next node in the sequence. The last node typically points to null, indicating the end of the list.

<img width="728" alt="Screenshot 2024-03-21 at 09 18 27" src="https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/2bea539a-7cbe-4bb7-b040-5032ed8d0534">

## Key Features

- **Nodes**: Each node contains two fields: the data, which stores the element, and a pointer/reference to the next node in the sequence.
  
- **Head**: The first node of the linked list is called the head. It is the entry point for accessing elements in the list.

- **Tail**: The last node of the linked list is called the tail. It is the entry point for accessing elements in the list.
  
- **Traversal**: To traverse the list, you start from the head and follow the next pointers until you reach the end (null).

- **Insertion and Removal**: Insertion and Removal operations are efficient for singly linked lists if you have a reference to the node before the insertion/deletion point. 

- **Dynamic Size**: Singly Linked Lists can dynamically grow and shrink as elements are added or removed. Unlike arrays, they do not have a fixed size.

- **Efficient Insertion/Deletion at the Beginning**: Insertion and deletion at the beginning of the list are very efficient, as they only require updating the head pointer to point to the new first node.

- **Random Access**: Unlike arrays, accessing elements in a singly linked list by index (random access) is not efficient. You have to traverse the list from the head to the desired index, which can take linear time in the worst case.

## Usage

Singly Linked Lists are commonly used in scenarios where dynamic size, efficient insertion/deletion at the beginning, and sequential access are important considerations. They are used in various applications, including implementing stacks, queues, and adjacency lists for graphs, among others.


## Advantages:

1. **Dynamic Size:** Linked lists can dynamically grow and shrink, efficiently utilizing memory.
2. **Easy Insertion and Deletion:** Elements can be added or removed at any position with constant time complexity.
3. **Memory Utilization:** Efficient memory usage as memory is allocated only for elements contained.
4. **Flexibility:** Easy modification and rearrangement without reorganizing the entire data structure.
5. **Versatility:** Different types of linked lists offer flexibility in implementing various data structures and algorithms.

## Disadvantages:

1. **Memory Overhead:** Additional memory required for storing pointers or references.
2. **Traversal Overhead:** Traversal requires following pointers, which may be less efficient than direct access in arrays.
3. **Random Access:** Linked lists do not support random access, resulting in linear time complexity for accessing elements by index.
4. **Cache Inefficiency:** Non-contiguous memory access can lead to cache inefficiency, especially in large lists.
5. **Space Complexity:** Higher space complexity compared to arrays, especially with additional metadata or pointers for each node.


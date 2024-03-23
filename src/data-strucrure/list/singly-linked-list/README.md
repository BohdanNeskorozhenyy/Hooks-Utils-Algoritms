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

1. **Dynamic Data Structure:** A linked list is a dynamic arrangement so it can grow and shrink at runtime by allocating and deallocating memory. Therefore, there is no need to specify the initial size of the linked list.
2. **No Memory Wastage:** Efficient memory utilization can be achieved with a linked list since its size can increase or decrease at runtime, eliminating memory wastage and the need for pre-allocation of memory.
3. **Implementation:** Linear data structures like stacks and queues are often easily implemented using a linked list.
4. **Insertion and Deletion Operations:** Insertion and deletion operations are straightforward in a linked list. There is no need to shift elements after insertion or deletion; only the address present in the next pointer needs to be updated.
5. **Flexibility:** Linked lists do not store elements in contiguous memory locations like arrays, providing flexibility in memory usage.
6. **Efficiency for Large Data:** Linked lists play a crucial role when working with large datasets as they can grow and shrink dynamically.
7. **Scalability:** Linked lists offer the ability to add or remove elements at any position, enhancing scalability.



## Disadvantages:

1. **Memory Usage:** More memory is required in the linked list as compared to an array. Because in a linked list, a pointer is also required to store the address of the next element and it requires extra memory for itself.
2. **Traversal:** In a Linked list traversal is more time-consuming as compared to an array. Direct access to an element is not possible in a linked list as in an array by index. For example, for accessing a node at position n, one has to traverse all the nodes before it.
3. **Reverse Traversing:** In a singly linked list reverse traversing is not possible, but in the case of a doubly-linked list, it can be possible as it contains a pointer to the previously connected nodes with each node. For performing this extra memory is required for the back pointer hence, there is a wastage of memory.
4. **Random Access:** Random access is not possible in a linked list due to its dynamic memory allocation.
5. **Lower Efficiency at Times:** For certain operations, such as searching for an element or iterating through the list, can be slower in a linked list.
6. **Complex Implementation:**  The linked list implementation is more complex when compared to array. It requires a complex programming understanding.
7. **Difficult to Share Data:** This is because it is not possible to directly access the memory address of an element in a linked list.
8. **Not Suited for Small Dataset:** Cannot provide any significant benefits on small dataset compare to that of an array.



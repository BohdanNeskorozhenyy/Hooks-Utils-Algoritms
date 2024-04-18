# BinaryHeap

| Complexity | Big O        |
| ---------- | ------------ |
| Insertion  | O(log n)     |
| Removal    | O(log n)     |
| Searching  | O(log n)     |

Binary Heap is a data structure representing a binary tree with a specific ordering property. It is commonly implemented as an array, where each element corresponds to a node in the binary tree. The heap property ensures that for any node, its parent has a higher priority (in a max heap) or a lower priority (in a min heap). Insertion and removal operations maintain the heap property by swapping elements to satisfy the ordering. BinaryHeap is often used in priority queue implementations due to its efficient operations for accessing and manipulating elements based on their priority. It has a logarithmic time complexity for insertion, removal, and searching operations, making it suitable for applications requiring efficient priority-based processing

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/440px-Max-Heap.svg.png)

## Key Features

- **Efficient Insertion and Removal**: BinaryHeap provides efficient insertion and removal operations with time complexity of O(log n), where n is the number of elements in the heap. This makes it suitable for applications requiring dynamic prioritization of elements.

- **Flexible Priority Ordering**: BinaryHeap supports both max heap and min heap configurations, allowing for flexible prioritization of elements. In a max heap, the highest priority element is always at the root, while in a min heap, the lowest priority element is at the root.

- **Compact Storage**: BinaryHeap can be efficiently implemented using an array, which provides compact storage and allows for random access to elements based on their index. This makes it suitable for scenarios where memory usage is a concern.

- **Priority Queue Support**: BinaryHeap is commonly used as the underlying data structure for priority queues due to its efficient operations for accessing and manipulating elements based on their priority. This makes it suitable for applications such as task scheduling, event handling, and job processing.

- **Heap Property Maintenance**: BinaryHeap maintains the heap property, which ensures that for any node in the heap, its parent has a higher priority (in a max heap) or a lower priority (in a min heap). This property is preserved during insertion and removal operations, ensuring the integrity of the heap structure.

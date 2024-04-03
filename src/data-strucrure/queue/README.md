# Queue

| Complexity | Big O        |
| ---------- | ------------ |
| Insertion  | O(1)         |
| Removal    | O(1)         |
| Searching  | O(n)         |
| Access     | O(n)         |

A queue is a linear data structure that follows the First In, First Out (FIFO) principle. It's similar to a line of people waiting for a service, where the person who arrived first is the first to be served, and new people join at the back of the line. 

![Queue Illustration](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

## Key Features

- **First In, First Out (FIFO):** Elements are inserted at the rear end and removed from the front end, following the FIFO principle.
- **Insertion (Enqueue):** New elements are added to the rear end of the queue.
- **Removal (Dequeue):** Elements are removed from the front end of the queue.
- **Searching:** Typically involves iterating through elements sequentially, resulting in a time complexity of O(n).
- **Access:** Accessing elements in the middle of the queue is not common and requires dequeuing elements until reaching the desired one, resulting in a time complexity of O(n).
- **Limited Capacity:** Queues can have a limited capacity, and attempts to enqueue elements beyond this capacity can result in overflow.
- **Dynamic Size:** Some implementations support dynamic resizing to accommodate more elements as needed.
- **Concurrency:** In concurrent programming, queues are often used for task scheduling and communication between threads.
- **Applications:** Used in various computer science applications, such as job scheduling, breadth-first search algorithms, and managing resources with limited capacity.


## Advantages:

- **FIFO Principle:** Follows the First In, First Out principle, which is suitable for scenarios where the order of elements is important.
- **Efficient Insertion and Removal:** Enqueue and dequeue operations have a time complexity of O(1), making them efficient for adding and removing elements.
- **Concurrency Support:** Queues are commonly used in concurrent programming for task scheduling and inter-thread communication, providing synchronization mechanisms.
- **Versatile Applications:** Widely used in various computer science applications, including job scheduling, breadth-first search algorithms, and managing resources with limited capacity.
- **Dynamic Resizing:** Some implementations support dynamic resizing to accommodate changing numbers of elements, providing flexibility and efficiency.

## Disadvantages:

- **Limited Access:** Accessing elements in the middle of the queue is not efficient and requires dequeuing elements until reaching the desired one, resulting in a time complexity of O(n).
- **Fixed Capacity:** Queues with fixed capacities can lead to overflow errors if elements are enqueued beyond the predefined limit.
- **Concurrency Challenges:** In concurrent environments, managing access to a shared queue can introduce synchronization overhead and potential race conditions.





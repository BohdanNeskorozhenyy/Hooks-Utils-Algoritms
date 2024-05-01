# Graph

## Complexity

| Operation         | Time Complexity |
| ----------------- | --------------- |
| Add Vertex        | O(1)            |
| Add Edge          | O(1)            |
| Remove Vertex     | O(V + E)        |
| Remove Edge       | O(E)            |
| Depth First Search| O(V + E)        |
| Breadth First Search| O(V + E)      |


<img width="1141" alt="Screenshot 2024-05-01 at 16 49 15" src="https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/3054a53e-52d8-4ca7-810e-565de2645d05">

## Description

A graph is a non-linear data structure that consists of a set of vertices (nodes) and a set of edges connecting these vertices. Graphs are widely used to represent relationships between objects. They are particularly useful for modeling networks, such as social networks, transportation networks, computer networks, etc.

Graphs can be classified into two main types: directed graphs (digraphs) and undirected graphs. In a directed graph, edges have a direction, while in an undirected graph, edges have no direction.

## Key Features

- **Vertices**: The fundamental elements of a graph, representing entities or objects.
- **Edges**: Connections between vertices, representing relationships or interactions.
- **Adjacency**: A vertex is said to be adjacent to another vertex if there is an edge connecting them.
- **Degree**: The degree of a vertex is the number of edges incident to it.
- **Path**: A sequence of vertices connected by edges.
- **Cycle**: A path that starts and ends at the same vertex.
- **Connected Components**: Subsets of vertices in a graph where each vertex is reachable from every other vertex in the subset.
- **Traversal Algorithms**: Techniques for visiting all the vertices and edges of a graph in a systematic way, such as Depth-First Search (DFS) and Breadth-First Search (BFS).

## Depth First Search (DFS)

DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It uses a stack data structure to keep track of vertices to visit. DFS is often used to detect cycles in a graph, find connected components, or search for paths in a maze.

## Breadth First Search (BFS)

BFS is a graph traversal algorithm that explores the neighbor vertices at the present depth before moving on to the vertices at the next depth level. It uses a queue data structure to keep track of vertices to visit. BFS is often used to find the shortest path between two vertices, explore the nodes of a graph level by level, or determine connectivity in a graph.


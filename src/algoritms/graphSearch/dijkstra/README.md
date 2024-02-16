## Dijkstra's algorithm

| Operation      | Time Complexity |
|-----------------|-----------------|
| Dijkstra's Algorithm|O((V + E) log V)|


DESCRIPTION

Dijkstra's algorithm is a method for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It operates by maintaining a set of tentative distances to each node, initially all set to infinity, and gradually updating these distances as it explores the graph. The algorithm visits each node in the graph exactly once, determining the shortest path to that node from the source node, and then updating the tentative distances to adjacent nodes if a shorter path is found. This process continues until all nodes have been visited and the shortest path to each node from the source has been determined.

![Dijkstra's](https://github.com/neskor-b/Algoritms-and-data-structure/assets/89013557/5c053950-f6a1-4219-be98-65e901798d5d)

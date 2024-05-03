# Dijkstra's Algorithm

## Complexity
O((V + E) log V)

## Overview

Dijkstra's algorithm is a popular algorithm in computer science used to find the shortest path between nodes in a graph, particularly in weighted graphs. It was conceived by Dutch computer scientist Edsger W. Dijkstra in 1956 and published three years later. This algorithm is widely used in various applications, including networking (routing protocols), GPS navigation systems, and airline scheduling.

## How it works

Dijkstra's algorithm works by iteratively exploring the vertices of a graph starting from a source vertex. It maintains a set of vertices whose shortest distance from the source vertex is known and continuously updates this set until it reaches the target vertex or exhausts all possibilities. 

The algorithm uses a priority queue to select the next vertex to explore based on the tentative distance from the source vertex. It then relaxes the edges connected to this vertex, updating the tentative distances if a shorter path is found. This process continues until all vertices have been visited or the target vertex is reached.

## Pseudocode

1. Create a priority queue Q and initialize it with all vertices.
2. Set the distance to the source vertex as 0 and infinity for all other vertices.
3. While Q is not empty:
     a. Extract the vertex u with the minimum distance from Q.
     b. For each neighbor v of u:
          i. Calculate the distance d from u to v.
          ii. If d + distance[u] < distance[v], update distance[v] = d + distance[u].
4. Return the distances array.

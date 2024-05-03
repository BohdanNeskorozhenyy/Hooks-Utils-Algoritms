/* eslint-disable no-loop-func */
/* eslint-disable no-console */
/* eslint-disable guard-for-in */
import Stack from '../stack';
import Queue from '../queue';
import PriorityQueue from '../priority-queue';

type Edge = { node: string; weight: number };

class WaightedGraph {
    public adjacencyList: { [key: string]: Edge[] } = {};

    private DFSRecursive(start: string) {
        const result: string[] = [];
        const visited: Record<string, boolean> = {};
        const _adjacencyList = this.adjacencyList;

        (function _dfs(verteks: string){
            if (!verteks) return null;
            visited[verteks] = true;
            result.push(verteks);
            _adjacencyList[verteks].forEach((n) => {
                if (!visited[n.node]) {
                    return _dfs(n.node);
                }
            });
        }(start));
        return result;
    }

    private DFSIterative(start: string) {
        const S = new Stack<string>();
        const result: string[] = [];
        const visited: Record<string, boolean> = {};
        let verteks: string | null;

        S.push(start);
        while (S.size) {
            verteks = S.pop();
            if (verteks && !visited[verteks]) {
                visited[verteks] = true;
                result.push(verteks);
                this.adjacencyList[verteks].forEach((n) => S.push(n.node));
            }
        }
        return result;
    }

    addVertex(key: string) {
        if (!this.adjacencyList[key] && key) this.adjacencyList[key] = [];
    }

    addEdge(v1: string, v2: string, weight: number) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    removeEdge(v1: string, v2: string) {
        this.adjacencyList[v1] = this.adjacencyList[v1]?.filter((key) => key.node !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2]?.filter((key) => key.node !== v1);
    }

    removeVertex(key: string) {
        if (this.adjacencyList[key]) {
            this.adjacencyList[key].forEach((v) => this.removeEdge(v.node, key));
            delete this.adjacencyList[key];
        }
    }

    dfs(start: string, type: 'recursive' | 'iterative' = 'iterative') {
        if (type === 'recursive') {
            return this.DFSRecursive(start);
        }
        if (type === 'iterative') {
            return this.DFSIterative(start);
        }
        return [];
    }

    bfs(start: string) {
        const Q = new Queue<string>();
        const result: string[] = [];
        const visited: Record<string, boolean> = {};
        let verteks: string | null;

        Q.enqueue(start);
        while (Q.size) {
            verteks = Q.dequeue();
            if (verteks && !visited[verteks]) {
                visited[verteks] = true;
                result.push(verteks);
                this.adjacencyList[verteks].forEach((n) => Q.enqueue(n.node));
            }
        }
        return result;
    }

    dijkstra(start: string, target: string) {
        const nodes = new PriorityQueue<string>('min');
        const distances: { [key: string]: number } = {};
        const previous: { [key: string]: string | null } = {};
        const path: string[] = [];
        let smallest = '';

        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.values.length) {
            smallest = nodes.dequeue()?.val as string;
            if (smallest) {
                if (smallest === target) {
                    while (previous[smallest]) {
                        path.push(smallest);
                        smallest = previous[smallest] as string;
                    }
                    break;
                } else {
                    this.adjacencyList[smallest].forEach((neighbor) => {
                        const candidate = distances[smallest] + neighbor.weight;
                        if (candidate < distances[neighbor.node]) {
                            distances[neighbor.node] = candidate;
                            previous[neighbor.node] = smallest;
                            nodes.enqueue(neighbor.node, candidate);
                        }
                    });
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

export default WaightedGraph;

import Stack from '../stack';
import Queue from '../queue';

class Graph {
    public adjacencyList: { [key: string]: string[] } = {};

    private DFSRecursive(start: string) {
        const result: string[] = [];
        const visited: Record<string, boolean> = {};
        const _adjacencyList = this.adjacencyList;

        (function _dfs(verteks: string){
            if (!verteks) return null;
            visited[verteks] = true;
            result.push(verteks);
            _adjacencyList[verteks].forEach((n) => {
                if (!visited[n]) {
                    return _dfs(n);
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
                this.adjacencyList[verteks].forEach((n) => S.push(n));
            }
        }
        return result;
    }

    addVertex(key: string) {
        if (!this.adjacencyList[key] && key) this.adjacencyList[key] = [];
    }

    addEdge(v1: string, v2: string) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1: string, v2: string) {
        this.adjacencyList[v1] = this.adjacencyList[v1]?.filter((key) => key !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2]?.filter((key) => key !== v1);
    }

    removeVertex(key: string) {
        if (this.adjacencyList[key]) {
            this.adjacencyList[key].forEach((v) => this.removeEdge(v, key));
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
                this.adjacencyList[verteks].forEach((n) => Q.enqueue(n));
            }
        }
        return result;
    }
}

export default Graph;

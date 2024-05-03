import WaightedGraph from '../waighted-graph';

describe('Graph', () => {
    let graph: WaightedGraph;

    beforeEach(() => {
        graph = new WaightedGraph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addEdge('A', 'B', 1);
        graph.addEdge('A', 'C', 2);
        graph.addEdge('B', 'D', 3);
        graph.addEdge('C', 'E', 6);
        graph.addEdge('D', 'E', 7);
        graph.addEdge('D', 'F', 9);
        graph.addEdge('E', 'F', 12);

        //          A
        //        /   \
        //       B     C
        //       |     |
        //       D --- E
        //        \   /
        //          F
    });

    it('Shoud add verteks correctly', () => {
        expect(graph.adjacencyList.A).toBeTruthy();
    });

    it('Shoud not add verteks if key is empty', () => {
        const graph = new WaightedGraph();
        graph.addVertex('');
        expect(graph.adjacencyList).toEqual({});
    });

    it('Shoud add edge correctly', () => {
        expect(graph.adjacencyList.D).toEqual([{ node: 'B', weight: 3 }, { node: 'E', weight: 7 }, { node: 'F', weight: 9 }]);
        expect(graph.adjacencyList.A).toEqual([{ node: 'B', weight: 1 }, { node: 'C', weight: 2 }]);
        expect(graph.adjacencyList.E).toEqual([{ node: 'C', weight: 6 }, { node: 'D', weight: 7 }, { node: 'F', weight: 12 }]);
        expect(graph.adjacencyList.F).toEqual([{ node: 'D', weight: 9 }, { node: 'E', weight: 12 }]);
        expect(graph.adjacencyList.B).toEqual([{ node: 'A', weight: 1 }, { node: 'D', weight: 3 }]);
        expect(graph.adjacencyList.C).toEqual([{ node: 'A', weight: 2 }, { node: 'E', weight: 6 }]);
    });

    it('Shoud remove edge correctly', () => {
        graph.removeEdge('A', 'B');
        expect(graph.adjacencyList.A).toEqual([{ node: 'C', weight: 2 }]);
        expect(graph.adjacencyList.B).toEqual([{ node: 'D', weight: 3 }]);
    });

    it('Shoud run removeEdge corectly if there is no verteks', () => {
        const graph = new WaightedGraph();
        graph.addVertex('v1');
        graph.removeEdge('v1', 'v2');
        expect(graph.adjacencyList.v1).toEqual([]);
    });

    it('Shoud remove verteks correctly', () => {
        graph.removeVertex('A');
        expect(graph.adjacencyList.A).toBeUndefined();
    });

    it('Shoud traverse by DFS recursive correctly', () => {
        expect(graph.dfs('A', 'recursive')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    });

    it('Shoud traverse by DFS iterative correctly', () => {
        expect(graph.dfs('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
    });

    it('Shoud traverse by BFS correctly', () => {
        expect(graph.bfs('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });

    it('Shoud get shortest path correctly', () => {
        const graph = new WaightedGraph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addEdge('A', 'B', 4);
        graph.addEdge('A', 'C', 2);
        graph.addEdge('B', 'E', 3);
        graph.addEdge('C', 'D', 2);
        graph.addEdge('C', 'F', 4);
        graph.addEdge('D', 'E', 3);
        graph.addEdge('D', 'F', 1);
        graph.addEdge('E', 'F', 1);
        expect(graph.dijkstra('A', 'F')).toEqual(['A', 'C', 'D', 'F']);
        expect(graph.dijkstra('A', 'D')).toEqual(['A', 'C', 'D']);
        expect(graph.dijkstra('A', 'B')).toEqual(['A', 'B']);
        expect(graph.dijkstra('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
    });
});

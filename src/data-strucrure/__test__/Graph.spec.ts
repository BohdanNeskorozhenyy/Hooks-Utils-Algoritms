import Graph from '../graph';

describe('Graph', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.addEdge('D', 'E');
        graph.addEdge('D', 'F');
        graph.addEdge('E', 'F');

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
        const graph = new Graph();
        graph.addVertex('');
        expect(graph.adjacencyList).toEqual({});
    });

    it('Shoud add edge correctly', () => {
        expect(graph.adjacencyList.D).toEqual(['B', 'E', 'F']);
        expect(graph.adjacencyList.A).toEqual(['B', 'C']);
        expect(graph.adjacencyList.E).toEqual(['C', 'D', 'F']);
        expect(graph.adjacencyList.F).toEqual(['D', 'E']);
        expect(graph.adjacencyList.B).toEqual(['A', 'D']);
        expect(graph.adjacencyList.C).toEqual(['A', 'E']);
    });

    it('Shoud remove edge correctly', () => {
        graph.removeEdge('A', 'B');
        expect(graph.adjacencyList.A).toEqual(['C']);
        expect(graph.adjacencyList.B).toEqual(['D']);
    });

    it('Shoud run removeEdge corectly if there is no verteks', () => {
        const graph = new Graph();
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
});

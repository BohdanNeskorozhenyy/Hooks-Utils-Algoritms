import Graph from '../graph';

describe('Graph', () => {
    it('Shoud add verteks correctly', () => {
        const graph = new Graph();
        graph.addVerteks('v');
        expect(graph.adjacencyList.v).toEqual([]);
    });
    it('Shoud not add verteks if key is empty', () => {
        const graph = new Graph();
        graph.addVerteks('');
        expect(graph.adjacencyList).toEqual({});
    });

    it('Shoud add edge correctly', () => {
        const graph = new Graph();
        graph.addVerteks('v1');
        graph.addVerteks('v2');
        graph.addEdge('v1', 'v2');
        expect(graph.adjacencyList.v1).toEqual(['v2']);
        expect(graph.adjacencyList.v2).toEqual(['v1']);
    });

    it('Shoud remove edge correctly', () => {
        const graph = new Graph();
        graph.addVerteks('v1');
        graph.addVerteks('v2');
        graph.addVerteks('v3');
        graph.addEdge('v1', 'v2');
        graph.addEdge('v1', 'v3');
        graph.removeEdge('v1', 'v2');
        expect(graph.adjacencyList.v1).toEqual(['v3']);
        expect(graph.adjacencyList.v3).toEqual(['v1']);
        expect(graph.adjacencyList.v2).toEqual([]);
    });

    it('Shoud run removeEdge corectly if there is no verteks', () => {
        const graph = new Graph();
        graph.addVerteks('v1');
        graph.removeEdge('v1', 'v2');
        expect(graph.adjacencyList.v1).toEqual([]);
    });

    it('Shoud remove verteks correctly', () => {
        const graph = new Graph();
        graph.addVerteks('v1');
        graph.addVerteks('v2');
        graph.addVerteks('v3');
        graph.addEdge('v1', 'v2');
        graph.addEdge('v1', 'v3');
        graph.addEdge('v3', 'v2');
        graph.removeVerteks('v1');
        expect(graph.adjacencyList.v1).toBe(undefined);
        expect(graph.adjacencyList.v2).toEqual(['v3']);
        expect(graph.adjacencyList.v3).toEqual(['v2']);
    });
});

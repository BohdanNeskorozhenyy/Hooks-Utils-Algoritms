/* eslint-disable no-loop-func */
const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function findNodeLowestCost(costs, processed) {
	let lowestCost = Infinity;
	let lowestNode;

	Object.keys(costs).forEach((node) => {
		const cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestNode = node;
		}
	});

	return lowestNode;
}

function shortPath(qraph, start) {
	const costs = {}; // shortest ways
	const processed = [];
	let neighbors = {};

	Object.keys(qraph).forEach((node) => {
		if (node !== start) {
			const value = qraph[start][node];
			costs[node] = value || Infinity;
		}
	});
	let node = findNodeLowestCost(costs, processed);

	while (node) {
		const cost = costs[node];
		neighbors = qraph[node];
		Object.keys(neighbors).forEach((neighbor) => {
			const newCost = cost + neighbors[neighbor];
			if (newCost < costs[neighbor]) {
				costs[neighbor] = newCost;
			}
		});
		processed.push(node);
		node = findNodeLowestCost(costs, processed);
	}
	return costs;
}

export default shortPath;

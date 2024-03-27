function personIsSeller(person) {
	return person?.isSeller; // check if person is a mango seller
}
// O(V + E) === 16 (vertices + edges (8 + 8))
function findMangoSeller(graph, start) {
	let searchQueue = [];
	searchQueue = searchQueue.concat(graph[start]); // add start person to queue
	const searched = new Set(); // set of already searched people

	while (searchQueue.length) {
		const person = searchQueue.shift(); // take first person from queue
		if (!searched.has(person.name)) { // check if person was already searched
			if (personIsSeller(person)) {
				return true;
			}
			searchQueue = searchQueue.concat(graph[person.name] || []); // add person's friends to queue
			searched.add(person.name); // mark person as searched
		}
	}

	return false; // if no mango seller was found
}

// Graph of connected people
const graph = {};

graph.you = [
	{ name: 'alice', isSeller: false },
	{ name: 'bob', isSeller: false },
	{ name: 'claire', isSeller: false },
];

graph.bob = [
	{ name: 'anuj', isSeller: false },
	{ name: 'peggy', isSeller: false },
];

graph.alice = [
	{ name: 'peggy', isSeller: false },
];

graph.claire = [
	{ name: 'thom', isSeller: true },
	{ name: 'jonny', isSeller: false },
];

graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

findMangoSeller(graph, 'you');

function personIsSeller(person) {
    return person?.isSeller; // check if person is a mango seller
}

function findMangoSeller(graph, start) {
    let searchQueue = [];
    searchQueue = searchQueue.concat(graph[start]); // add start person to queue
    let searched = new Set(); // set of already searched people

    while (searchQueue.length) {
        let person = searchQueue.shift(); // take first person from queue
        if (!searched.has(person.name)) { // check if person was already searched
            if (personIsSeller(person)) {
                console.log(`${person.name} is a mango seller!`); // if person is a mango seller
                return true;
            } else {
                searchQueue = searchQueue.concat(graph[person.name] || []); // add person's friends to queue
                searched.add(person.name); // mark person as searched
            }
        }
    }

    return false; // if no mango seller was found
}


// Graph of connected people
const graph = {};

graph["you"] = [
    { name: "alice", isSeller: false }, 
    { name: "bob", isSeller: false }, 
    { name: "claire", isSeller: false }
];

graph["bob"] = [
    { name: "anuj", isSeller: false }, 
    { name: "peggy", isSeller: false }
];

graph["alice"] = [
    { name: "peggy", isSeller: false }
];

graph["claire"] = [
    { name: "thom", isSeller: true }, 
    { name: "jonny", isSeller: false }
];

graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

findMangoSeller(graph, "you");

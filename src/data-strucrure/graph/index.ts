class Graph {
    public adjacencyList: { [key: string]: string[] } = {};

    addVerteks(key: string) {
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

    removeVerteks(key: string) {
        if (this.adjacencyList[key]) {
            this.adjacencyList[key].forEach((v) => this.removeEdge(v, key));
            delete this.adjacencyList[key];
        }
    }
}

export default Graph;

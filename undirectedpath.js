// dfs RECURSIVE
const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges); 
	return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
	if (src === dst) return true;
	if (visited.has(src)) return false; 
	visisted.add(src);
	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dst, visited) === true) {
				return true;
		}
	}
	return false;
}

// turns edges list into adjacency list 
const buildGraph = (edges) => {
	const graph = {};
	for (let edge of edges) {
	// single edegrage would be pair of nodes, so destructure
		const [ a, b ] = edge; // Destructure the edge into nodes a and b
	// initialize these nodes as keys of graph, and [] as value
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];
	// add neighbors to their edges:
		graph[a].push(b); // Add node b to the adjacency list of node a
    graph[b].push(a); // Add node a to the adjacency list of node b
	}
	return graph;
};

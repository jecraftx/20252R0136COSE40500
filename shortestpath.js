const shortestPath = (edges, nodeA, nodeB) => {
 const graph = buildGraph(edges);
 const visited = new Set([nodeA]); // starting node
 const queues = [ [ nodeA, 0 ] ]; // initial vals of the queue

 while (queue.length > 0) {
		const [node, distance] = queues.shift();  // pop
		if (node === nodeB) return distance;
		for (let neighbor of graph[node]){
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push([neighbor, distance + 1]); // (+1) next one 
			}
		}
	}
	return -1;
};

// will return adajcency list 
const buildGraph = (edges) => {
	const graph = {};

	for (let edge of edges) {
		const [ a, b ] = edge;
		// if a not in the graph as a key, create it for the first time
    // init its values to an empty array, at start has no neighbors 
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];
		// add neighbors:
		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
 };

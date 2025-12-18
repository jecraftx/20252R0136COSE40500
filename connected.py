const componentsCount = (graph) => {
	const visited = new Set();
	let count = 0;
	// iterative: to hop to different components 
	// will give the keys 
	for (let node in graph) {
		// if one full component is found
		if (explore(graph, node, visited) === true) {
			count += 1;
		}
	}
	return count;
};

	// traversal: to explore single component as far 
const explore = (graph, current, visited) => {
	// use visited to prevent cycles 
	if (visited.has(String(current))) return false; 
	// if not visited add it to the set 
	visited.add(String(current));
	
	for (let neighbor of graph[current]) {
		explore(graph, neighbor, visited);
	}
// once explored all components 
	return true;
}

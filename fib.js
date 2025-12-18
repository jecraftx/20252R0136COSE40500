// memoization -> fast access ds (hashmap, obj)
// memoization helps to cut off the num of recursive calls 
// keys will be arg to func,value will be the return
// n as the key, values are the return of the func
const fib = (n, memo = {}) => {
	// return value that corresponds to that memo's key
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	// make sure all of these recursive funcs accessing
	// the same memo -> pass obj to both calls 
	memo[n] = fib(n-1, memo) + fib(n-2, memo);
	return memo[n];
}; 

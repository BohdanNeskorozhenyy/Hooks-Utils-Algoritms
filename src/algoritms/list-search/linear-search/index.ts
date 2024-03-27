// Time complexity - O(n)
function linearSearch<T>(arr: T[], target: string | number, selector?: (item: T) => string | number) {
	for (let i = 0; i < arr.length; i++) {
		const value = selector ? selector(arr[i]) : arr[i];
		if (value === target) {
			return i;
		}
	}
	return -1;
}

export default linearSearch;

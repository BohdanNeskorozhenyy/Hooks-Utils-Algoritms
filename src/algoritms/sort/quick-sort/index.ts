function pivot<T>(arr: T[], start = 0, end = arr.length - 1, comparator: (a: T, b: T) => number) {
	const swap = (arr: T[], idx1: number, idx2: number) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	const pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (comparator(pivot, arr[i]) > 0) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort<T>(arr: T[], comparator: (a: T, b: T) => number, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = pivot(arr, left, right, comparator);
		// left
		quickSort(arr, comparator, left, pivotIndex - 1);
		// right
		quickSort(arr, comparator, pivotIndex + 1, right);
	}
	return arr;
}

export default quickSort;

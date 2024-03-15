function swap <T>(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapify<T>(
	arr: T[],
	from: number,
	to: number,
	comparator: (a: T, b: T) => number,
) {
	const left = 2 * from + 1;
	const right = 2 * from + 2;
	let max = from;

	if (left < to && comparator(arr[left], arr[max]) > 0) {
		max = left;
	}

	if (right < to && comparator(arr[right], arr[max]) > 0) {
		max = right;
	}

	if (max !== from) {
		swap(arr, from, max);
		heapify(arr, max, to, comparator);
	}
}

function buildHeap<T>(arr: T[], comparator: (a: T, b: T) => number) {
	for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
		heapify(arr, i, arr.length, comparator);
	}
	return arr;
}

function heapSort<T>(arr: T[], comparator: (a: T, b: T) => number) {
	buildHeap(arr, comparator);

	for (let i = arr.length - 1; i > 0; i--) {
		swap(arr, 0, i);
		heapify(arr, 0, i, comparator);
	}

	return arr;
}

export default heapSort;

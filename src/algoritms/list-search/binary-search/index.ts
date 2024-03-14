// Time complexity - O(log n)
function binarySearch<T>(arr: T[], target: number | string, selector?: (item: T) => number | string) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = selector ? selector(arr[mid]) : arr[mid];
        if (value === target) {
            return mid;
        } else if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
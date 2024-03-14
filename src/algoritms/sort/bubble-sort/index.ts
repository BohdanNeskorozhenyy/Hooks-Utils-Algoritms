const swap = <T>(arr: T[], a: number, b: number) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const bubbleSort = <T>(arr: T[], comparator: (a: T, b: T) => number) => {
    let noSwaps = false;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i  - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
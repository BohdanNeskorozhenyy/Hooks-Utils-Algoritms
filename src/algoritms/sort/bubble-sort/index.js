const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

const bubbleSort = (arr, comparator = (a, b) => a - b) => {
    let noSwaps;
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

bubbleSort([8,3,5,2,4,7,6], (a, b) => b - a);
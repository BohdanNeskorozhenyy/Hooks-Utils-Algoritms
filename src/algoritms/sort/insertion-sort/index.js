const insertionSort = arr => {
    for (var i = 1; i < arr.length; i++) {
        let cur = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > cur; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cur;
    }
    return arr;
}


insertionSort([2,1,9,76,4]);
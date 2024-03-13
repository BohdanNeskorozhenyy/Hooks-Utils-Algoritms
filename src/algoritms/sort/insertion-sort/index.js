const insertionSort = (arr, comparator = (a, b) => a - b) => {
    for (var i = 1; i < arr.length; i++) {
        let cur = arr[i];
        for (var j = i - 1; j >= 0 && comparator(arr[j], cur) > 0; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = cur;
    }
    return arr;
}


insertionSort([2,1,9,76,4], (a,b) => b - a);
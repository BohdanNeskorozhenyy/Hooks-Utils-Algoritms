const swap = (arr, i, min) => {
    if (i !== min) {
        let cur = arr[i];
        arr[i] = arr[min];
        arr[min] = cur;
    }
}

const selectionSort = arr => { 
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
    return arr;
}

selectionSort([34,22,10,19,17])
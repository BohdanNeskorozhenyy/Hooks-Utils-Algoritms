function quickSort(array, comparator = (a, b) => a - b) {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        const less = [];
        const greater = []
        for(let i = 0; i < array.length; i++) {
            if (comparator(array[i], pivot) < 0){
                less.push(array[i]);
            }
            if (comparator(array[i], pivot) > 0){
                greater.push(array[i]);
            }
        }
        return ([ ...quickSort(less, comparator), pivot, ...quickSort(greater, comparator) ])
    }
}

quickSort([9,2,7,8,4,5,3,2,6,1], (a, b) => b - a);
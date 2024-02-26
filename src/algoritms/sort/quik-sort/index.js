// Time complexity - O(n log n) -> O(n^2)
function quickSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        const less = [];
        const greater = []
        for(let i = 0; i < array.length; i++) {
            if (array[i] < pivot){
                less.push(array[i]);
            }
            if (array[i] > pivot){
                greater.push(array[i]);
            }
        }
        console.log({array, less, greater, pivot});
        return ([ ...quickSort(less), pivot, ...quickSort(greater) ])
    }
}

quickSort([9,2,7,8,4,5,3,2,6,1])

const merge = <T>(arr1: T[], arr2: T[], comparator: (a: T, b: T) => number) => {
    const result: T[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) < 0) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

const mergeSort = <T>(arr: T[], comparator: (a: T, b: T) => number): T[] => {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle), comparator);
    const right = mergeSort(arr.slice(middle), comparator)
    return merge(left, right, comparator);
}

mergeSort([9,7,8,4,5,3,2,6,1], (a, b) => a - b)
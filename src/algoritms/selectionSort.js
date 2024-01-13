const numbersArr = [9,2,4,5,7,8,1];

// Time complexity - O(n^2)
function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

// Time complexity - O(n^2)
function selectionSort(arr) {
    let mutableArr = [...arr];
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const smallestIndex = findSmallest(mutableArr);
        newArr.push(mutableArr[smallestIndex]);
        mutableArr.splice(smallestIndex, 1);
    }
    return newArr;
}

console.log(selectionSort(numbersArr))
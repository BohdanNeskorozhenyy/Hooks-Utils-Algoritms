// Time complexity - O(log n)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 'Not found';
}


// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const targetElement = 7;
// const result = binarySearch(sortedArray, targetElement);

// 1 itteration 
// --------------------------------------
    // left === 0, right === 9, mid === 4
    // arr[mid] === 5
    // (5 < 7)            
    // left === mid + 1 (5)

    // [_, _, _, _, _, 6, 7, 8, 9, 10]
// --------------------------------------

// 2 itteration
// --------------------------------------
    // left === 5, right === 9, mid === 7
    // arr[mid] === 8 
    // (8 > 7)
    // right === mid - 1 (6)

    // [_, _, _, _, _, 6, 7, _, _, _]
// --------------------------------------


// 3 itteration
// --------------------------------------
    // left === 5, right === 6, mid === 5
    // arr[mid] === 6
    // (6 < 7)
    // left === mid + 1 (6)

    // [_, _, _, _, _, _, 7, _, _, _]
// --------------------------------------


// 4 itteration
// --------------------------------------
    // left === 6, right === 6, mid === 6
    // arr[mid] === 7
    // (7 === 7)
    // return 7 (finish)
// --------------------------------------

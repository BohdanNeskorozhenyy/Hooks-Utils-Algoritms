function pivot(arr, start = 0, end = arr.length - 1, comparator) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (comparator(pivot, arr[i]) > 0) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, comparator = (a, b) => a - b, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right, comparator)
          //left
          quickSort(arr, comparator, left, pivotIndex - 1);
          //right
          quickSort(arr, comparator, pivotIndex + 1, right);
        }
       return arr;
  } 
             
  quickSort([100,-3,2,4,6,9,1,2,5,3,23], (a, b) => b - a)
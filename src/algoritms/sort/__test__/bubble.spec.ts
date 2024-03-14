import bubbleSort from '../bubble-sort';

describe(`bubbleSort`, () => {
  it(`should correctly sort an array of numbers in ascending order`, () => {
    const arr = [3, 7, 2, 1, 5];
    const sortedArr = bubbleSort(arr, (a, b) => a - b);
    expect(sortedArr).toEqual([1, 2, 3, 5, 7]);
  });

});

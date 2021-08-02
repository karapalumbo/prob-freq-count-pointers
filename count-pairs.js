// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let newSet = new Set(arr);
  let count = 0;

  for (let val of arr) {
    newSet.delete(val);
    if (newSet.has(num - val)) {
      count++;
    }
  }
  return count;
}

// Given an array of integers, and a number,
// find the number of pairs of integers in the array
// whose sum is equal to the second parameter.
// You can assume that there will be no duplicate values in the array.

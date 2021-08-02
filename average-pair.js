// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  // [1,2,3,4]
  while (left < right) {
    // while 1 < 4
    let average = (arr[left] + arr[right]) / 2;
    // 1 + 3 = 4 / 2 = 2
    if (average === target) {
      // if 2 = 2 return true
      return true;
    } else if (
      // if 2 < target (4)
      average < target
    ) {
      left++; // move to the right
    } else {
      right--; // move to the left
    }
  }
  return false;
}

// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where
// the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

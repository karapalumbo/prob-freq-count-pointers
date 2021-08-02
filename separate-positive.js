// add whatever parameters you deem necessary
function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;

  // [1,2,3,4]
  while (start < end) {
    // while 1 < 4
    if (nums[start] < 0 && nums[end] > 0) {
      // if 1 < 0 & 4 > 0
      let temp = nums[start];
      // temp = 1
      nums[start] = nums[end];
      // start = 4
      nums[end] = temp;
      // 4 temp

      start += 1;
      // 1+ 1 = 2
      end - +1;
      // 4 - 1 = 3
    } else {
      if (nums[start] > 0) {
        // if 1 > 0
        start += 1;
        // 1 + 1 = 2
      } else {
        end -= 1;
        // 4- 1 = 4
      }
    }
  }
  return nums;
}

// Write a function called separatePositive
// which accepts an array of non-zero integers.

// Separate the positive integers to the left
// and the negative integers to the right.

// The positive numbers and negative numbers
// need not be in sorted order.

// The problem should be done in place
// (in other words, do not build a copy of the input array).

const searchInsert = function (nums, target) {
  let low = 0;
  let mid;
  let high = nums.length;

  while (low !== high) {
    mid = Math.floor(high / 2);

    if (target === nums[mid]) {
      // the number is between low and high
      return mid;
    }
    if (mid === low || mid == high) {
      // the number is at either end
      return mid;
    } else if (target <= nums[mid]) {
      // the number is to the left of middle
      high = mid - 1;
    } else if (target >= nums[mid]) {
      // the number is to the right of middle
      low = mid + 1;
    }
  }

  return mid;
};

console.log(searchInsert([1, 3, 5, 6], 4));

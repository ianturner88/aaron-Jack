const searchInsert = function (nums, target) {
  let low = 0;
  let middle;
  let high = nums.length - 1;

  if (nums.length === 1) {
    if (nums[0] < target) {
      return 1;
    }
    return 0;
  }

  if (nums.length === 2) {
    if (nums[0] > target || nums[0] === target) {
      return 0;
    }
    if ((nums[0] < target && nums[1] > target) || nums[1] === target) {
      return 1;
    }
    if (nums[1] < target) {
      return 2;
    }
  }

  while (low !== high) {
    middle = Math.floor(high / 2);

    if (target <= nums[low]) {
      // the target is the smallest number
      return low;
    }
    if (target >= nums[high]) {
      // the target is the largest number
      return high + 1;
    }
    if (target === nums[middle]) {
      // the target is the middle number
      return middle;
    }
    if (target > nums[middle]) {
      low = middle + 1;
    } else if (target < nums[middle]) {
      high = middle - 1;
    }
  }

  console.log(middle);

  return middle;
};

searchInsert([1, 3, 5], 4);
module.exports = searchInsert;

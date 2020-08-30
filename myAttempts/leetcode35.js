const searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const midVal = nums[mid];

    if (target === midVal) {
      return mid;
    }
    if (target > midVal) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

searchInsert([1, 3, 5, 7], 9);
module.exports = searchInsert;

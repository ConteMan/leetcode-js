/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = 0;
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      index = i;
      break;
    }
  }
  return index;
};
/**
 * 记录数值出现次数，根据排列组合远离计算符合条件数量
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = 0;
  const record = {};
  for (let i = 0; i < nums.length; i++) {
    record[nums[i]] ? record[nums[i]]++ : record[nums[i]] = 1;
  }
  for (let index in record) {
    if (record[index] > 1) {
      count += (record[index] * (record[index] - 1)) / 2;
    }
  }
  return count;
};

/**
 * 暴力双循环
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
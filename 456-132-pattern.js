/**
 * 枚举 j，暴力循环处理 k
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const n = nums.length;
  if (n < 3) {
    return false;
  }

  let startValue = 0;
  let middleValue = 0;
  let lastValue = 0;

  for (let j = 1; j < n - 1; j ++) {
    const leftNum = nums[j-1];
    if (leftNum < startValue || j == 1) {
      startValue = leftNum
    }
    middleValue = nums[j];
    if (startValue >= middleValue) {
      continue;
    }
    for (let k = j + 1; k < n; k++) {
      lastValue = nums[k];
      if ( lastValue > startValue && middleValue > lastValue ) {
        return true;
      }
    }
  }
  return false;
};

/**
 * 枚举 i。
 * 单调递减栈（栈底最大）处理 k。k 初始值设置为小于最小边界，减少判断。
 * 从后向前遍历。
 * 如果栈不为空，且当前元素大于栈顶元素，则开始出栈操作，栈内至少有一个元素出栈，出栈最大值赋值为 k。当前元素入栈，可视为 j。出栈元素的索引值必然大于入栈元素，也满足 j > k 关系，即索引值大的元素实际值小于索引值小的元素。
 * 如果 k 未被赋值，则说明无满足条件的 j 和 k。栈中的元素是不符合要求的。
 * i 为遍历项，索引值必然小于 k 和 j，如果满足 i < k，且 k 被赋值过，则全部条件成立。
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  const n = nums.length;
  if (n < 3) {
    return false;
  }
  
  let k = -Number.MAX_SAFE_INTEGER;
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < k) {
      return true;
    }
    while(stack.length && stack[stack.length - 1] < nums[i]) {
        const temp = stack.pop();
        if (temp > k) {
          k = temp;
        }
    }
    if (nums[i] > k) {
      stack.push(nums[i]);
    }
  }
  return false;
};
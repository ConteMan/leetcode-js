/**
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

  for ( let j = 1; j < n - 1; j ++) {
    const leftNum = nums[j-1];
    if ( leftNum < startValue || j == 1 ) {
      startValue = leftNum
    }
    middleValue = nums[j];
    if ( startValue >= middleValue ) {
      continue;
    }
    for ( let k = j + 1; k < n; k++ ) {
      lastValue = nums[k];
      if ( lastValue > startValue && middleValue > lastValue ) {
        return true;
      }
    }
  }
  return false;
};
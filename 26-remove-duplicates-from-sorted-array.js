/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let c1 = 0;
  let c2 = 1;
  for ( c2; c2 < nums.length; c2++ ) {
    if ( nums[c1] != nums[c2] ) {
      c1++;
      nums[c1] = nums[c2];
    }
  }
  return c1+1;
};

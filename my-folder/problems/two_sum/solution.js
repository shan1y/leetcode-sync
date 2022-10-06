/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index1 = i;
        index2 = j;
        return [index1, index2];
      } else {
        null;
      }
    }
  }
  return "no solution";
};

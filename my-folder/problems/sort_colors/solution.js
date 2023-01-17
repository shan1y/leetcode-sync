/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* The code you have so far is using the filter method to create new arrays with only the elements that are equal to 0, 1, and 2 respectively. However, the goal of the question is to sort the elements in-place, meaning to sort the elements within the original nums array without creating new arrays.

One way you can solve this problem is by using a two-pointer approach. You can use two pointers, one pointing to the beginning of the array and another pointing to the end of the array, and iterate through the array with a third pointer.

You can start by iterating through the array with the third pointer, for each element, if the element is 0, swap it with the element at the zeroPointers, increment the zeroPointers, if the element is 1, swap it with the element at the onePointers, increment the onePointers, if the element is 2, swap it with the element at the twoPointers, and increment the twoPointers.*/


var sortColors = function(nums) {
    let zeroPointers= 0;
    let twoPointers = nums.length - 1;

    for (let i = 0; i <= twoPointers; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[zeroPointers]] = [nums[zeroPointers], nums[i]];
            zeroPointers++;
        } else if (nums[i] === 2) {
            [nums[i], nums[twoPointers]] = [nums[twoPointers], nums[i]];
            twoPointers--;
            i--;
        }
    }
};
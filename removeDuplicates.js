'use strict';
/**
 * We iterate through the array and if the current element is not equal to the next element, we
 * increment the pointer variable and make the current element equal to the next element
 * @param nums - an array of integers
 * @returns The length of the array after removing duplicates.
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let s = 1; s < nums.length; s++) {
    if (nums[i] != nums[s]) {
      i++;
      nums[i] = nums[s];
    }
  }
  return i + 1;
};

console.log(
  removeDuplicates([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5])
);

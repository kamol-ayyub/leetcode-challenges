'use strict';
var twoSum = function (nums, target) {
  const subtracts = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    console.log(current);
    /* Checking if the current number is in the subtracts object. If it is, it returns the index of the
      current number and the index of the number that was subtracted from the target to get the
      current number. */
    if (subtracts[current] || subtracts[current] === 0) {
      return [subtracts[current], i];
    }
    subtracts[target - current] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

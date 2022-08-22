'use strict';

var isPalindrome = function (x) {
  if (x < 0) return false;
  return x == x.toString().split('').reverse().join('');
};
isPalindrome(121);

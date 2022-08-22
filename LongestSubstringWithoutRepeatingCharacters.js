'use strict';

/**
 * For each character in the string, if the character is not in the current substring, add it to the
 * current substring and update the longest substring length. If the character is in the current
 * substring, remove all the characters before the character in the current substring and update the
 * longest substring length
 * @param s - the string to be evaluated
 * @returns The length of the longest substring without repeating characters.
 */
const lengthOfLongestSubstring = function (s) {
  let theResult = 0,
    currentString = '',
    index,
    charString,
    strIndexOf;

  for (index = 0; index < s.length; index += 1) {
    charString = s.charAt(index);

    strIndexOf = currentString.indexOf(charString);

    if (strIndexOf !== -1) {
      currentString = currentString.substring(strIndexOf + 1);
    }

    currentString += charString;

    theResult = Math.max(theResult, currentString.length);
  }
  return theResult;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

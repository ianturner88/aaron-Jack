/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  /* checks if an input has valid parentheses */

  // where the string's opening brackets are stored
  const stack = [];
  const brackets = ['(', '[', '{', ')', ']', '}'];
  const isOpening = false;
  let indexValue = 0;
  const isMatch = false;
  let topOfStack;

  for (const character in s) {
    for (let i = 0; i < brackets.length && isMatch === false; i++) {
      // store the bracket's index value in the array
      if (brackets[i] === s[character]) {
        indexValue = i;
      }
    }

    if (indexValue < 3) {
      stack.push(brackets[indexValue]);
    } else {
      topOfStack = stack.pop();
      if (topOfStack !== indexValue - 3) {
        return false;
      }
    }
  }
};

console.log(isValid(')'));

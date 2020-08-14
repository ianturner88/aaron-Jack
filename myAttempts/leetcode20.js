/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  /* checks if an input has valid parentheses */

  if (s.length % 2 === 1) {
    // the string doesn't have a matching number of brackets
    return false;
  }

  // where the string's opening brackets are stored
  const stack = [];
  const brackets = ['(', '[', '{', ')', ']', '}'];
  const isOpening = false;
  let indexValue = 0;
  let isMatch = false;
  let topOfStack;

  for (const character in s) {
    for (let i = 0; i < brackets.length && isMatch === false; i++) {
      // store the bracket's index value in the array
      if (brackets[i] === s[character]) {
        indexValue = i;
        isMatch = true;
      }
    }

    if (indexValue < 3) {
      // store the number on the stack
      stack.push(brackets[indexValue]);
    } else {
      // retrieve the top item from the stack
      topOfStack = stack.pop();
      if (topOfStack !== indexValue - 3) {
        // check if the opening & closing brackets match
        return false;
      }
    }
  }

  if (stack.length > 0) {
    // there are unmatched brackets remaining
    return false;
  }

  return true;
};

console.log(isValid('[()]'));

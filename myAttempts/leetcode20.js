/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  /* checks if an input has valid parentheses */

  debugger;

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

  // eslint-disable-next-line guard-for-in
  for (const character in s) {
    for (let i = 0; i < brackets.length && isMatch === false; i++) {
      // store the bracket's index value in the array

      // test
      let test0 = s[character];

      if (brackets[i] === s[character]) {
        indexValue = i;
        isMatch = true;

        // test
        test0 = 4;
      }
    }

    if (indexValue < 3) {
      // store the number on the stack
      stack.push(indexValue);
    } else {
      // retrieve the top item from the stack
      topOfStack = stack.pop();
      if (topOfStack !== indexValue - 3) {
        // check if the opening & closing brackets match
        return false;
      }
    }

    // reset
    isMatch = false;
  }

  if (stack.length > 0) {
    // there are unmatched brackets remaining
    return false;
  }

  return true;
};

isValid('[()]');

/* eslint-disable no-restricted-syntax */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];
  let character;

  for (const letter in s) {
    character = s[letter];

    for (const bracket in opening) {
      if (character === opening[bracket]) {
        stack.push(character);
      }
    }
  }

  const print = stack.toString();
  console.log(print);
};

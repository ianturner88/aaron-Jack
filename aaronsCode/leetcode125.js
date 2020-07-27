/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  // remove all whitespace, commas, and colons from string
  const input = s.replace(/\W/g, '').toLowerCase();

  console.log(input);

  // identify the right-most character
  let right = input.length;

  for (let left = 0; left < input.length; left++) {
    if (input[left] !== input[right - 1]) {
      // input string is not a palindrome
      return false;
    }
    right--;
  }
  // the input string is a palindrome
  return true;
};

isPalindrome('A man, a plan, a canal: Panama');

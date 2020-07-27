const isPalindrome = function(s) {
  let input = '';

  for (let i = 0; i < s.length; i++) {
    // determine ascii value
    const charValue = s.charCodeAt(i);

    if (charValue > 64 && charValue < 91) {
      // character is an uppercase letter
      input += s[i];
    } else if (charValue > 96 && charValue < 123) {
      // character is a lowercase letter
      input += s[i];
    } else if (charValue > 47 && charValue < 58) {
      input += s[i];
    }
  }

  let left = 0;
  // identify right-most character
  let right = input.length - 1;
  input = input.toLocaleLowerCase();

  while (left < right) {
    if (input[left] !== input[right]) {
      // the number is not a palindrome
      return false;
    }

    // move both counters to the centre of the input
    left++;
    right--;
  }

  // the input is a palindrome
  return true;
};

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  // declare hashtable
  const hashTable = {};

  for (const char of s) {
    // store letter's occurence in hashtable
    if (hashTable[char]) {
      // letter occures
      hashTable[char]++;
    } else {
      // initialize letter's first occurence
      hashTable[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // identify the character to check in the hashtable
    const char = s[i];

    if (hashTable[char] === 1) {
      // 1st letter to occur only once
      return i;
    }
  }

  // no letter occures only once
  return -1;
};

firstUniqChar('loveleetcode');

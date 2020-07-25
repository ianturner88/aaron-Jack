/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  let simplified;
  const hashTable = {};

  for (const word of strs) {
    simplified = word
      .split('')
      .sort()
      .join();

    if (hashTable[simplified]) hashTable[simplified].push(word);
    else hashTable[simplified] = [word];
  }

  return Object.values(hashTable);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));

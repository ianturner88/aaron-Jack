/* a practice/review session about hashtables */

const groupAnagrams = function (strs) {
  let stripped;
  const hashTables = {};

  for (const word of strs) {
    stripped = word.split('').sort().join();
  }
};

const groupAnagrams = function(strs) {
  // hashtable to store the results
  const hashTable = {};

  for (const string in strs) {
    const sortedString = string
      // split characters of words into an array
      .split('')
      // sort the letter alphabetically
      .sort()
      // rejoin the organized letters in the arry
      .join('');

    // store the sorted string
    if (hashTable[sortedString]) {
      hashTable[sortedString].push(string);
    } else {
      hashTable[sortedString] = [string];
    }
  }
};

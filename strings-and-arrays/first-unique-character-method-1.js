const firstUniqueChar = function(s) {
  // s is the input string

  // create the hash table
  const hashTable = {};

  for (const char of s) {
    // increment the char counter if the char is already stored in the hash table
    if (hashTable[char]) hashTable[char]++;
    // initialize the char counter in the hash table to 1
    else hashTable[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    // cycle through all individual letters in the string
    const char = s[i];
    // check if the character in question has only 1 instance of occurence
    if (hashTable[char] === 1) return i;
  }

  // return if there are no non-repeating characters
  return -1;
};

var firstUniqueChar = function(s) {
    // s is the input string 
    
    for (let i = 0; i < s.length; i++) {
        // identify the next character to check
        let character = s[i];

        // if the character occurs only once, the 1st and last index values will match
        if (s.indexOf(character) === s.lastIndexOf(character)) return i;
    }

    // there is no unique character in the input string 
    return -1;
}
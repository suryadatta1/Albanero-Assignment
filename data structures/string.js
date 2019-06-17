/* Approach: O(n), Count all of the letters in each string, adding and subtracting from the counts as we go along.
   If a count goes negative, mark it as a possible differing letter in a second hash.
   If a count goes to 0, delete it as a possible differing letter (since it has balanced out the counts with the other string).
   When we're done, there should be no entries in the negatives hash (meaning the ransom note could be fully constructed from the available letters. i.e., the substring exists within the second string.)
   */


var canConstruct = function(ransomNote, magazine) {
    var result = false;
    
    var hash = {};
    var negatives = {};
    
    if (magazine.length >= ransomNote.length) {
        for (var i=0; i<magazine.length; i++) {
            // Increment count for each magazine letter.
            hash[magazine[i]] = hash[magazine[i]] ? hash[magazine[i]] + 1 : 1;

            if (hash[magazine[i]] >= 0) {
                // This is a valid use of a letter.
                delete negatives[magazine[i]];
            }
            
            if (i < ransomNote.length) {
                // Decrement count for each used ransom note letter.
                hash[ransomNote[i]] = hash[ransomNote[i]] ? hash[ransomNote[i]] - 1 : -1;
                
                if (hash[ransomNote[i]] < 0) {
                    // This is a potential overuse of a letter.
                    negatives[ransomNote[i]] = 1;
                }
            }
        }
        
        result = Object.keys(negatives).length === 0;
    }
    
    return result;
};
console.log(canConstruct('aa','ab'))


// Time Complexity : o(n),  total : 3n ~ can

// Space Complexity : o(1), space: 2*sizeOf(var) ~ c

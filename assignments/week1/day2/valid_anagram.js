// anagram: two different words that are made up of the same characters (same amount too)

// Idea of the solution 1 (maps): create two maps and use them to store the frequency of each letter in the word
//                       compare the two maps, if equal than its an anagram

// rime: O(n) - for loop based on the length s or t
// space: O(1) == O(26) - constant array of size 26 
// Idea of solution: you make a constant array of size 26 to represent every letter in the alphabet
                //   increment the array for one of the strings
                //   decreament the array for the other string
                //   if the string is an anagram, the whole array will be all 0s at the end.
function isVaildAnagram(s, t) {
    // an 26 length array to count the freqency of letters
    let charMap = [...new Array(26)].map(() => 0);

    // check if they are the same length
    if(s.length != t.length)
        return false;

    for(let i = 0; i < s.length; i++){
        // this will find the number corresponding to letter
        // ex: a : 0, b: 1
        // this will add from the array for string s
        charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        // this will sub from the array for string t
        charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return charMap.every(count => count === 0);
}

console.log(isVaildAnagram("anagram", "nagaram"));
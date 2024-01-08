
// Doesnt work but this is the idea
// - charMap of word as the key of the map
// - if two words has the same charMap, is it am anagram
// array of strings
var groupAnagrams = function(strs) {
    var mapStrs = new Map();
    // str in strs, where str is index (0, 1, 2, 3, ...)
    // str of strs, where str are elements in the array
    for(var str of strs){
        let charMap = [...new Array(26)].map(() => 0);
        // creating charMap of each str
        for(let i = 0; i < str.length; i++){
            charMap[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        // ERROR: .has is not picking up on the array keys
        if(mapStrs.has(charMap)){
            mapStrs.get(charMap).push(str);
        }else{
            mapStrs.set(charMap, [str]);
        }
    }
    var returnArray = [];
    // create return 
    mapStrs.forEach((value) => {returnArray.push(value)})

    return mapStrs;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
// two pointer concept
// time complex is not great due to .replaceAll for pharsing

var isPalindrome = function(s) {
    // pharse the s to get rid of any punctuation and capital letters
    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var newText = s.toLowerCase().replaceAll(regex, "").replaceAll(" ", "");

    var left = 0
    var right = newText.length - 1;
    
    while (left < right) {
        if(newText[left] != newText[right])
            return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
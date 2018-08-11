/* 
Given two strings, write a method to decide if one is a permutation of the other.

Solution Tips
- Ask if permutation comparison is case sensitive and if whitespace is significant.
- Strings of different lengths cannot be permutations of each other. Therefore, sorting the strings will put the characters from two permutations in the same order. Then we just need to compare the sorted versions of the strings.
*/

function checkPermutation(str1, str2) {
    const str1Letters = str1.split("");
    const str2Letters = str2.split("");
    const str1Map = {};
    const str2Map = {};
    str1Letters.forEach(letter => {
        if (str1Map.hasOwnProperty(letter)) {
            str1Map[letter] = str1Map[letter] + 1;
        } else {
            str1Map[letter] = 1;
        }
    });
    str2Letters.forEach(letter => {
        if (str2Map.hasOwnProperty(letter)) {
            str2Map[letter] = str2Map[letter] + 1;
        } else {
            str2Map[letter] = 1;
        }
    });
    if (Object.keys(str1Map).length === Object.keys(str2Map).length) {
        Object.keys(str1Map).forEach(key => {
            if (!str2Map.hasOwnProperty(key) || str1Map[key] !== str2Map[key]) {
                return false;
            }
        });
        return true;
    }
    return false;
}

////////////////////////////////////////////////////////

// Tests

if (checkPermutation("dog", "god") === false) {
    console.error("dog and god are permutations");
} else if (checkPermutation("kyle", "erica") === true) {
    console.error("kyle and erica are not permutations");
} else {
    console.log("passes all tests")
}
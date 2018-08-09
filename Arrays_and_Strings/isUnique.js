/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures.
*/

function isUnique(str) {
  const characters = {};
  for (let i = 0; i < str.length; i++) {
    if (characters.hasOwnProperty(str[i])) {
      return false;
    } else {
      characters[str[i]] = "irrelevant";
    }
  }
  return true;
}

//////////////////////////////

// Tests

if (!isUnique("soda")) {
  console.log("soda should return true");
} else if (isUnique("hello")) {
  console.log("hello should return false");
} else {
  console.log("Passes tests");
}

/*
What is the difference between an ASCII string and a Unicode string?
ASCII defines 128 characters, which map to the numberes 0 - 127. Unicode defines (less than) 2**21 characters, which, similarly, map to numbers 0 - 2**21 (though not all numbers are currently assigned, and some are reserved).

Unicode is a superset of ASCII, and the numbers 0-128 have the same meaning in ASCII as they have in Unicode. For example, the number 65 means "Latin capital 'A'".

Because Unicode characters don't generally fit into one 8-bit byte, there are numerous ways of storing Unicode characters in byte sequences, such as UTF-32 and UTF-8.

What is a bit vector?
A bit array (also known as a bit map, bit set, bit string, or bit vector) is an array data structure that compactly stores bits.

*/
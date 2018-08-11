/*
Write a method to replace all spaces in a string with "%20". You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
*/

function urlify(str) {
    const characters = str.split("");
    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === " ") {
            characters[i] = "%20";
        }
    }
    return characters.join("");
}

if (urlify("hello world") !== "hello%20world") {
    console.error("does not replace space with %20 in 'hello world'");
} else {
    console.log("passes all tests")
}

// console.log("hello world".replace(" ", "%20"));
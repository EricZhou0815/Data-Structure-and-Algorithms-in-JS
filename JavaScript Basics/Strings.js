/** String */
/** String in javaScript is immutable, they cannot be changed once they are created. */

const stringOne= "This is Eric Zhou. ";
const stringTwo="I love coding.";

const sentence="He said \"yes\".";

console.log(sentence);
// He said "yes".

/** 
 * Code output
 * \' Single quote
 * \" Double quote
 * \\ backslash
 * \n new line
 * \r carriage return
 * \t tab
 * \b bakcspace
 * \f form feed
*/

/** String [bracket notation] */
const firstname=Brayn;
console.log(firstname[0]);
// B



/** String Methods */

// charAt()
// Get the char of the index.
console.log(stringOne.charAt(2));
// i

// charCodeAt() 
// Return the unicode of the char of the index.
console.log(stringOne.charCodeAt(1));
// 114

// concat() 
// Join strings, return a new joined string.
console.log(stringOne.concat(stringTwo));
// This is Eric Zhou. I love coding.

// startsWith() 
// Check if string starts with input, return true or false.
console.log(stringOne.startsWith(" "));
// false

// endsWith() 
// Check if string ends with input, return true or false.
console.log(stringOne.endsWith(" "));
// true

// String.fromCharCode() 
// Return the char with input unicode.
console.log(String.fromCharCode(114));
// r

// includes() 
// Check if a words or char inside the string, return true or false.
console.log(stringTwo.includes("coding"));
// true

// indexOf() 
// Return the index of give char at the first time finds it.
console.log(stringTwo.indexOf("love"));
// 2

// indexOf() 
// Return the index of give char at the last time finds it.
console.log(stringTwo.lastIndexOf("o"));
// 8

// match() 
// Check if string match to give regular expression, return a list of the expresion.
console.log(stringTwo.match(/o/g));
// ["o","o"]

// repeat()
// repeat the string for input times.
console.log(stringOne.repeat(3));
// This is Eric Zhou. This is Eric Zhou. This is Eric Zhou. 

// replace()
// replace the string with input and return a new string.
console.log(stringTwo.replace(/o/g,"O"));
// I lOve cOding.

// search()
// search the input in string, return index.
console.log(stringTwo.search("love"));
// 2

// slice()
// slice the string with indexes range: [index1,index2), return a new string.
console.log(stringTwo.slice(2,6));
// love

// split()
// split the string with input into an array of substrings, return an array.
console.log(stringTwo.split(""));
// [ 'I', ' ', 'l', 'o', 'v', 'e', ' ', 'c', 'o', 'd', 'i', 'n', 'g', '.' ]

// substr()
// return the substring with start index and length, return a new string.
console.log(stringTwo.substr(2,6));
// love c

// substring()
// return the substring with indexes range: [index1,index2), return a new string.
console.log(stringTwo.substring(2,4));
// lo

// toLowerCase()
// Change all char to lower case, return a new string.
console.log(stringTwo.toLowerCase());
// i love coding.

// toUpperCase()
// Change all char to upper case, return a new string.
console.log(stringTwo.toUpperCase());
// I LOVE CODING.

// trim()
// Rmove space on either side of the string, return a new string.
const stringThree="    Go order it!    ";
console.log(stringThree.trim());
// Go order it!
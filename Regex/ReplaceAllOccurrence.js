/**
 * We can replace all occurrences of a substring in a string using regular expressions in JavaScript.
 *
 * Here is an example function that demonstrates how to do this:
 */
const regex = /Landry/g;
const str = "Landry is a common last name. Many people with the last name Landry Live in Canada.";
const newStr = str.replace(regex, "Lowe");
console.log(newStr);

/**
 * We can also use the matchAll() and the replaceAll() methods from the 2019's ECMAScript release.
 *
 * Those methods will throw an error if the global flag is not set when using a regular expression.
 *
 * The matchAll method returns an iterator of all results matching a string against
 * a regular expression, including capturing groups.
 */

const regexAll = /Landry/g;
const strAll = "Landry is a common last name. Many people with the last name Landry Live in Canada.";

const matches = strAll.matchAll(regexAll);
console.log(matches);
console.log(matches.next());
console.log(matches.next());
console.log(matches.next());

/**
 * To convert the iterator to an array, we can use the spread operator or Array.from() method.
 */
const matchesArray = [...strAll.matchAll(regexAll)];
console.log(matchesArray);

const matchesArrayFrom = Array.from(strAll.matchAll(regexAll));
console.log(matchesArrayFrom);

/**
 * The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
 * The pattern can be a string or a regular expression, and the replacement can be a string or a function to be called for each match.
 */
const replacedStr = strAll.replaceAll(regexAll, "Lowe");
console.log(replacedStr);
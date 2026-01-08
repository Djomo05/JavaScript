/**
 * Lookahead and Lookbehind Assertions in Regular Expressions are used to 
 * specify conditions for a match without including those conditions in the match result.
 * 
 * Lookahead Assertions:
 *  - Positive Lookahead (?=...): match if the following characters match the pattern.
 *  - Negative Lookahead (?!...): match if the following characters do not match the pattern.
 * 
 * Lookbehind Assertions:
 *  - Positive Lookbehind (?<=...): match if the preceding characters match the pattern.
 *  - Negative Lookbehind (?<!...): match if the preceding characters do not match the pattern.
 * 
 */

// Example of Positive Lookahead
const positiveLookahead = /foo(?=bar)/;
console.log(positiveLookahead.test("foobar")); // true
console.log(positiveLookahead.test("foobaz")); // false

// Example of Negative Lookahead
const negativeLookahead = /foo(?!bar)/;
console.log(negativeLookahead.test("foobaz")); // true
console.log(negativeLookahead.test("foobar")); // false

// Example of Positive Lookbehind
const positiveLookbehind = /(?<=foo)bar/;
console.log(positiveLookbehind.test("foobar")); // true
console.log(positiveLookbehind.test("bazbar")); // false

// Example of Negative Lookbehind
const negativeLookbehind = /(?<!foot)bar/;
console.log(negativeLookbehind.test("bazbar")); // true
console.log(negativeLookbehind.test("footbar")); // false
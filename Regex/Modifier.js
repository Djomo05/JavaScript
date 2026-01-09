const regex = /freeCodeCamp/;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false
console.log(regex.test("FREECODECAMP")); // false
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false

/**
 * By default a regular expression is case sensitive.
 * You can use the i modifier to perform case-insensitive matching.
 *
 */
const caseInsensitiveRegex = /freecodecamp/i;
console.log(caseInsensitiveRegex.test("freeCodeCamp")); // true
console.log(caseInsensitiveRegex.test("FREECODECAMP")); // true
console.log(caseInsensitiveRegex.test("FreeCodeCamp is great")); // true
console.log(caseInsensitiveRegex.test("I love FREEcodeCAMP")); // true
console.log(caseInsensitiveRegex.test("free")); // false
console.log(caseInsensitiveRegex.test("code")); // false
console.log(caseInsensitiveRegex.test("camp")); // false

/**
 * The g modifier stands for global, which allow you to perform a
 * global match (find all matches rather than stopping after the first match).
 */
const globalRegex = /freecodecamp/g;
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.match(globalRegex);
console.log(matched); // [ 'freecodecamp', 'freecodecamp' ]

/**
 * Anchors are special characters that allow you to match a position
 * within a string.
 *
 * The caret (^) is an anchor that matches the beginning of a string,
 */

const startsWithFreeRegex = /^free/;
console.log(startsWithFreeRegex.test("freecodecamp is great")); // true
console.log(startsWithFreeRegex.test("I love freecodecamp")); // false

/**
 * The dollar sign ($) is an anchor that matches the end of a string.
 */

const endsWithCampRegex = /camp$/;
console.log(endsWithCampRegex.test("I love freecodecamp"));; // true
console.log(endsWithCampRegex.test("freecodecamp is great")); // false

/**
 * The m modifier stands for multiline, which allows you to perform
 * multiline matching.
 */
const multilineStr = `first line
second line
third line
fourth line`;

console.log(/^second/m.test(multilineStr)); // true
console.log(/^second/m.test(multilineStr)); // true
console.log(/^third/m.test(multilineStr)); // true
console.log(/^fourth/m.test(multilineStr)); // true
console.log(/fifth$/m.test(multilineStr)); // false

/**
 * the "()" parentheses create capturing groups that can be referenced
 * later.
 */
const capturingGroupRegex = /(free)(code)(camp)/;
const capturingGroupStr = "freecodecamp";
const capturingGroupMatch = capturingGroupStr.match(capturingGroupRegex);
console.log(capturingGroupMatch);
console.log(capturingGroupMatch[0]); // freecodecamp
console.log(capturingGroupMatch[1]); // free
console.log(capturingGroupMatch[2]); // code
console.log(capturingGroupMatch[3]); // camp


/**
 * The d modifier stands for "indices", which allows you to get the start and end
 * indices of captured substrings.
 */
const indicesRegex = /(free)(code)(camp)/d;
const indicesStr = "freecodecamp";
const indicesMatch = indicesStr.match(indicesRegex);
console.log(indicesMatch); // [ [ 0, 12 ], [ 0, 4 ], [ 4, 8 ], [ 8, 12 ] ]

/**
 * The unicode (u) modifier enables full Unicode support in a regular expression.
 *
 * It gives you the ability to match characters beyond the basic multilingual plane (BMP)
 */

const unicodeRegex = /\u{1F600}/u; // Unicode for 😀
console.log(unicodeRegex.test("😀")); // true
console.log(unicodeRegex.test("😃")); // false
console.log(unicodeRegex.test("Hello 😀!")); // true
console.log(unicodeRegex.test("Hello!")); // false

/**
 * There is also a v flag, which further expands
 *  the functionality of the unicode matching.
 *
 * It allows you to use Unicode property escapes to match characters based on
 * thier Unicode properties.
 */

const unicodeVRegex = /\p{Script=Greek}+/v;
console.log(unicodeVRegex.test("Καλημέρα")); // true
console.log(unicodeVRegex.test("Hello")); // false
console.log(unicodeVRegex.test("Γειά σου Κόσμε")); // true
console.log(unicodeVRegex.test("12345")); // false

/**
 * The y modifier stands for sticky, which matches only from the
 * lastIndex position of the previous match.
 *
 */
const stickyRegex = /code/y;
const stickyStr = "freecodecamp code";
console.log(stickyRegex.exec(stickyStr)); // null
stickyRegex.lastIndex = 4;
console.log(stickyRegex.exec(stickyStr)); // [ 'code', index: 4, input: 'freecodecamp code', groups: undefined ]
stickyRegex.lastIndex = 13;
console.log(stickyRegex.exec(stickyStr)); // [ 'code', index: 13, input: 'freecodecamp code', groups: undefined ]


/**
 * The single-line modifier allows a wildcard character, represented
 * by a period (.) in regex, to match linebreaks – effectively
 * treating the string as a single line of text.
 */
const singleLineStr = `First line.
Second line.
Third line.`;

/**
 * RegExp that matches the sequence "First line" followed (via single-character dots) by
 * some intermediate text and then "Third line".
 *
 * Details:
 * - Pattern: literal "First line", then '.' (matches any single character), then
 *   '(.*)' which captures any number of characters, then another '.' and the literal
 *   "Third line" followed by a final '.' (all '.' tokens match any character).
 * - Flags: 's' (dotAll) — '.' and the capturing group can span across newline characters.
 * - Capturing group 1 contains the text between the two markers.
 * - (.*) is greedy, so it will capture as much as possible if multiple matches are possible.
 *
 * @constant {RegExp} singleLineRegex
 * @example
 * // const match = "First line.X middle\ncontentY.Third line.Z".match(singleLineRegex);
 * // match[1] -> "X middle\ncontentY"
 */
const singleLineRegex = /First line.(.*).Third line./s;
const singleLineMatch = singleLineStr.match(singleLineRegex);
console.log(singleLineMatch); // [ 'First line.\nSecond line.\nThird line.', '\nSecond line.' ]
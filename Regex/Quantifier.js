/**
 * Quantifiers in regular expressions are used to specify how many times a character,
 * group, or character class must occur for a match to be found.
 *
 * Common Quantifiers:
 *  - * : Matches 0 or more times.
 *  - + : Matches 1 or more times.
 *  - ? : Matches 0 or 1 time.
 *  - {n} : Matches exactly n times.
 *  - {n,} : Matches n or more times.
 *  - {n,m} : Matches between n and m times.
 */

// Example of '*' quantifier
const zeroOrMore = /a*/;
console.log(zeroOrMore.test("aaab")); // true
console.log(zeroOrMore.test("b"));  // true
console.log(zeroOrMore.test(""));   // true

// Example of '+' quantifier
const oneOrMore = /a+/;
console.log(oneOrMore.test("aaab")); // true
console.log(oneOrMore.test("b"));   // false
console.log(oneOrMore.test(""));    // false

// Example of '?' quantifier
const zeroOrOne = /a?/;
console.log(zeroOrOne.test("aaab")); // true
console.log(zeroOrOne.test("b"));   // true
console.log(zeroOrOne.test(""));    // true

// Example of '{n}' quantifier
const exactlyThree = /a{3}/;
console.log(exactlyThree.test("aaab")); // true
console.log(exactlyThree.test("aab")); // false

// Example of '{n,}' quantifier
const threeOrMore = /a{3,}/;
console.log(threeOrMore.test("aaab")); // true
console.log(threeOrMore.test("aab")); // false

// Example of '{n,m}' quantifier
const betweenTwoAndFour = /a{2,4}/;
console.log(betweenTwoAndFour.test("aaab")); // true
console.log(betweenTwoAndFour.test("a")); // false
console.log(betweenTwoAndFour.test("aaaaa")); // false
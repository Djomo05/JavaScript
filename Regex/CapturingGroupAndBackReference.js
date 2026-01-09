/**
 * Capturing Group and Back Reference are used to match the same text
 * as previously matches by a capturing group in a regular expression.
 *
 * Capturing Group:
 *  - Parentheses () are used to create capturing groups.
 *  - Each capturing group is assigned a number based on the order of the opening parenthesis.
 *
 * Back Reference:
 *  - A back reference is a way to refer to a previously captured group.
 *  - It is denoted by a backslash followed by the group number (e.g., \1, \2).
 *
 * To named capturing groups and back references, use the syntax (?<name>...) for capturing
 * and k<name> for back references.
 *
 * To create a non-capturing group, use the syntax (?:...|...).
 *
 */

// Example of Capturing Group and Back Reference
const capturingGroup = /(abc)\1/; // \1 refers to the first capturing group (abc)
console.log(capturingGroup.test("abcabc")); // true
console.log(capturingGroup.test("abcab"));  // false

// Example of Named Capturing Group and Back Reference
const namedCapturingGroup = /(?<word>\w+)\s+\k<word>/; // \k<word> refers to the named capturing group 'word';
console.log(namedCapturingGroup.test("hello hello")); // true
console.log(namedCapturingGroup.test("hello world")); // false


// Example of Non-Capturing Group
const nonCapturingGroup = /(?:abc|def)ghi/; // Non-capturing group for 'abc' or 'def'
console.log(nonCapturingGroup.test("abcghi")); // true
console.log(nonCapturingGroup.test("defghi")); // true
console.log(nonCapturingGroup.test("abdefghi")); // false
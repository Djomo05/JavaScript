/**
 * Character Class are special syntax you can use to match set or subset of characters.
 */

// Wilcard Character class "." represents any character except line terminators.
const wilcardCharacter = /a./; // matches "a" followed by any character except line terminators.

// Digit Character class "\d" represents any digit from 0-9." 
const digitCharacter = /\d/; // matches any digit from 0-9.
// or we can use the or "|" operator
const digitCharacterWithOrOperator = /0|1|2|3|4|5|6|7|8|9/; // matches any digit from 0-9.

// Word Character class "\w" represents any alphanumeric character including the underscore "_".
const wordCharacter = /\w/; // matches any alphanumeric character including the underscore "_".
// or we can use the or "|" operator
const wordCharacterWithOrOperator = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|0|1|2|3|4|5|6|7|8|9|_/; // matches any alphanumeric character including the underscore "_".    

// whitespace Character class "\s" represents any whitespace character including space, tab, 
// form feed, line feed, and other Unicode spaces.
const whitespaceCharacter = /\s/; // matches any whitespace character including space, tab, form feed, line feed, and other Unicode spaces.

/**
 * Character class can be negated.
 * To negate a character class, we can use the uppercase version of the character class.
 * 
 * For example:
 * \D represents any non-digit character.
 * \W represents any non-word character.
 * \S represents any non-whitespace character.
 */

/**
 * We can use square brackets "[]" to define our own character class.
 * 
 * For example:
 * [abc] represents any character "a", "b", or "c".
 * [a-z] represents any lowercase letter from "a" to "z".
 */
const customCharacterClass = /[abc]/; // matches any character "a", "b", or "c".
const rangeCharacterClass = /[a-z]/; // matches any lowercase letter from "a" to "z".
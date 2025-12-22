/**
 * Operator precedence in JavaScript is a rule that the language applies when he evaluates
 * maths expressions with more than one operator.
 *
 * The rules are :
 * ---> The () comes first
 * ---> The (**) comes after and the computing is made from the right to the left
 * ---> The (* or /) comes after
 * ---> (=) his evaluation is made from the right to the left
 *
 * **/

let result = 2 + 3 * 4;
console.log(result); // 14

result = (2 + 3) * 4;
console.log(result); // 20

result = 2 + 6 / 3;
console.log(result); // 4

result = 10 - 2 + 3;
console.log(result); // 11

let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10


result = 2 ** 3 ** 2;
console.log(result); // 512
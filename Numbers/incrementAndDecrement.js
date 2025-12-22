/**
 * In JavaScript, we have two ways of incrementing or decrementing a variable
 *
 * let's say we have a variable call x, and we want to increment/decrement it by one.
 *
 * the old way of doing that is to: x = x + 1 or x = x - 1
 * the short way of doing that is to: x++ or x--
 *
 * But we have what we call Prefix/Postfix incrementation or decrementation
 * Prefix incrementation or decrementation is simply when you want increment/decrement first then
 * use the new value. ( ++x or --x )
 *
 * and the Postfix incrementation or decrementation is simply when you want to first use the value
 * then assign the new one after. (x++,x--)
 *
 * **/

// Prefix (++x)
let x = 5;

console.log(++x); // 6
console.log(x); // 6

// Postfix (x++)
let y = 5;

console.log(y++); // 5
console.log(y); // 6

x = 5;
console.log(--x); // 4
console.log(x); // 4

y = 5;
console.log(y--); // 5
console.log(y); // 4


let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)

